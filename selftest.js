'use strict';

// One-off verification: boots the same server, loads each bundled app offscreen,
// and reports whether its tree mounted and whether WebHID is exposed.
// Two apps ship here: the root V5 configurator and the V4 one under /v4/.
// Run with:  npx electron selftest.js

const { app, BrowserWindow } = require('electron');
const path = require('path');
const { startServer } = require('./server-core');

app.commandLine.appendSwitch('disable-hid-blocklist');

const APPS = [
  { name: 'root (V5)', url: '/', mount: '#root' },
  { name: 'V4 driver', url: '/v4/', mount: '#app' }
];

let errors = [];

app.whenReady().then(async () => {
  const { port } = await startServer({
    siteDir: path.join(__dirname, 'site'),
    cacheDir: path.join(__dirname, 'api-cache'),
    forceOffline: true
  });

  const win = new BrowserWindow({
    show: false,
    width: 1440,
    height: 900,
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true }
  });

  win.webContents.setDevicePermissionHandler?.(() => true);
  win.webContents.session.setDevicePermissionHandler(() => true);

  win.webContents.on('console-message', (e, level, message) => {
    if (level >= 2) errors.push(message);
  });
  win.webContents.on('did-fail-load', (e, code, desc, url) => {
    errors.push(`did-fail-load ${code} ${desc} ${url}`);
  });

  for (const target of APPS) {
    errors = [];
    await win.loadURL(`http://127.0.0.1:${port}${target.url}`);

    // Give the app time to mount and run its startup effects.
    await new Promise(r => setTimeout(r, 8000));

    const report = await win.webContents.executeJavaScript(`(() => ({
      title: document.title,
      mountNodes: document.querySelectorAll(${JSON.stringify(target.mount + ' *')}).length,
      bodyText: (document.body.innerText || '').replace(/\\s+/g, ' ').trim().slice(0, 300),
      hasWebHID: typeof navigator.hid !== 'undefined',
      isSecureContext: window.isSecureContext,
      imgTotal: document.images.length,
      imgBroken: [...document.images].filter(i => i.complete && i.naturalWidth === 0).map(i => i.currentSrc || i.src)
    }))()`);

    console.log(`\n================ SELF TEST: ${target.name} (${target.url}) ================`);
    console.log('document.title   :', JSON.stringify(report.title));
    console.log(`${target.mount} descendants :`, report.mountNodes, report.mountNodes > 20 ? '(mounted OK)' : '(SUSPICIOUS - looks blank)');
    console.log('secure context   :', report.isSecureContext);
    console.log('navigator.hid    :', report.hasWebHID, report.hasWebHID ? '(WebHID available)' : '(MISSING)');
    console.log('images           :', report.imgTotal, 'total,', report.imgBroken.length, 'broken');
    if (report.imgBroken.length) console.log('  broken:', report.imgBroken);
    console.log('visible text     :', report.bodyText);
    console.log('console errors   :', errors.length);
    errors.slice(0, 15).forEach(m => console.log('  !', m));
    console.log('='.repeat(60));
  }

  app.exit(0);
});
