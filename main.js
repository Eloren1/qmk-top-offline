'use strict';

const { app, BrowserWindow, dialog, shell, Menu } = require('electron');
const fs = require('fs');
const path = require('path');
const { startServer } = require('./server-core');

const SITE_DIR = path.join(__dirname, 'site');

// bundled-cache ships inside the app; api-cache sits next to the executable and
// stays writable. Both travel with the folder, so the archive is self-contained.
const BUNDLED_CACHE_DIR = path.join(__dirname, 'bundled-cache');
const CACHE_DIR = app.isPackaged
  ? path.join(path.dirname(app.getPath('exe')), 'api-cache')
  : path.join(__dirname, 'api-cache');

const FORCE_OFFLINE = process.env.QMKTOP_OFFLINE === '1';

// These keyboards expose a vendor-defined HID collection for configuration.
// Chromium's blocklist exists to stop drive-by websites; this app only ever
// loads local files, so it is not the relevant defence here.
app.commandLine.appendSwitch('disable-hid-blocklist');

function describe(d) {
  const vid = (d.vendorId ?? 0).toString(16).padStart(4, '0');
  const pid = (d.productId ?? 0).toString(16).padStart(4, '0');
  return `${d.name || '(unnamed)'}  [${vid}:${pid}]`;
}

function wireHid(win) {
  const ses = win.webContents.session;

  ses.setPermissionRequestHandler((wc, permission, callback) => callback(true));
  ses.setPermissionCheckHandler(() => true);
  ses.setDevicePermissionHandler(() => true);

  win.webContents.on('select-hid-device', (event, details, callback) => {
    event.preventDefault();
    const list = details.deviceList || [];
    console.log('[hid] picker:', list.map(describe));

    if (list.length === 0) return callback();
    if (list.length === 1) return callback(list[0].deviceId);

    const buttons = list.map(describe).concat('Cancel');
    const choice = dialog.showMessageBoxSync(win, {
      type: 'question',
      title: 'Select keyboard',
      message: 'Multiple matching HID devices found. Pick your keyboard:',
      buttons,
      cancelId: buttons.length - 1,
      noLink: true
    });
    callback(choice === buttons.length - 1 ? undefined : list[choice].deviceId);
  });

  ses.on('hid-device-added', (e, d) => console.log('[hid] added', describe(d.device || d)));
  ses.on('hid-device-removed', (e, d) => console.log('[hid] removed', describe(d.device || d)));
}

let mainWindow = null;

async function createWindow() {
  const { port } = await startServer({
    siteDir: SITE_DIR,
    cacheDir: CACHE_DIR,
    bundledCacheDir: BUNDLED_CACHE_DIR,
    forceOffline: FORCE_OFFLINE
  });
  console.log(`[server] http://127.0.0.1:${port}  site=${SITE_DIR}`);
  console.log(`[server] cache=${CACHE_DIR}  bundled=${BUNDLED_CACHE_DIR}  offlineOnly=${FORCE_OFFLINE}`);

  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1100,
    minHeight: 700,
    backgroundColor: '#111111',
    autoHideMenuBar: true,
    title: 'QMK.top Offline',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      spellcheck: false
    }
  });

  wireHid(mainWindow);

  // Force the whole UI onto Arial, regular/bold only (no thin or light weights).
  // Re-applied on every load so SPA navigations and reloads keep the override.
  const FONT_CSS = `
    *, *::before, *::after { font-family: Arial, Helvetica, sans-serif !important; }
    html * { font-weight: 700 !important; }
    b, strong, h1, h2, h3, h4, h5, h6, th,
    [class*="bold"], [class*="Bold"] {
      font-family: "Arial Black", Arial, sans-serif !important;
      font-weight: 900 !important;
    }
  `;
  const applyFont = () => {
    if (mainWindow) mainWindow.webContents.insertCSS(FONT_CSS).catch(() => {});
  };
  mainWindow.webContents.on('did-finish-load', applyFont);

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:/i.test(url)) shell.openExternal(url);
    return { action: 'deny' };
  });

  await mainWindow.loadURL(`http://127.0.0.1:${port}/`);
  mainWindow.on('closed', () => { mainWindow = null; });
}

function buildMenu() {
  Menu.setApplicationMenu(Menu.buildFromTemplate([
    {
      label: 'App',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        {
          label: 'Open API cache folder',
          click: () => { fs.mkdirSync(CACHE_DIR, { recursive: true }); shell.openPath(CACHE_DIR); }
        },
        { type: 'separator' },
        { role: 'quit' }
      ]
    },
    { label: 'Edit', submenu: [{ role: 'cut' }, { role: 'copy' }, { role: 'paste' }, { role: 'selectAll' }] },
    { label: 'View', submenu: [{ role: 'resetZoom' }, { role: 'zoomIn' }, { role: 'zoomOut' }, { type: 'separator' }, { role: 'togglefullscreen' }] }
  ]));
}

app.whenReady().then(() => {
  buildMenu();
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => app.quit());
