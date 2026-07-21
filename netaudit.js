'use strict';

// Network audit: logs every URL the app requests and flags anything that is not
// local. Proves whether the archive is genuinely self-contained.
//
//   npx electron netaudit.js            (network allowed - realistic run)
//   QMKTOP_OFFLINE=1 npx electron netaudit.js   (pure replay)

const { app, BrowserWindow, session } = require('electron');
const path = require('path');
const { startServer } = require('./server-core');

app.commandLine.appendSwitch('disable-hid-blocklist');

const requests = [];

app.whenReady().then(async () => {
  const { port } = await startServer({
    siteDir: path.join(__dirname, 'site'),
    cacheDir: path.join(__dirname, 'api-cache'),
    bundledCacheDir: path.join(__dirname, 'bundled-cache'),
    forceOffline: process.env.QMKTOP_OFFLINE === '1'
  });

  const local = new RegExp(`^https?://(127\\.0\\.0\\.1|localhost)(:\\d+)?/`);

  session.defaultSession.webRequest.onBeforeRequest({ urls: ['<all_urls>'] }, (details, cb) => {
    requests.push(details.url);
    cb({});
  });

  const win = new BrowserWindow({
    show: false,
    width: 1440,
    height: 900,
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true }
  });
  win.webContents.session.setDevicePermissionHandler(() => true);

  await win.loadURL(`http://127.0.0.1:${port}/`);
  await new Promise(r => setTimeout(r, 10000));

  const unique = [...new Set(requests)];
  const externalHosts = unique.filter(u => !local.test(u) && !/^(devtools|chrome|data|blob|about):/.test(u));
  const appPort = new RegExp(`^http://127\\.0\\.0\\.1:${port}/`);
  const otherLocal = unique.filter(u => local.test(u) && !appPort.test(u));

  console.log('\n=============== NETWORK AUDIT ===============');
  console.log('offline mode      :', process.env.QMKTOP_OFFLINE === '1');
  console.log('total requests    :', requests.length, `(${unique.length} unique)`);
  console.log('served by our app :', unique.filter(u => appPort.test(u)).length);
  console.log('');
  console.log('EXTERNAL hosts contacted :', externalHosts.length);
  externalHosts.forEach(u => console.log('   [EXTERNAL]', u));
  console.log('');
  console.log('other LOCAL ports (vendor driver probes) :', otherLocal.length);
  otherLocal.forEach(u => console.log('   [LOCAL]', u));
  console.log('');
  console.log(externalHosts.length === 0
    ? 'RESULT: no external hosts contacted - works with the network off.'
    : 'RESULT: external hosts were contacted, see list above.');
  console.log('=============================================\n');

  app.exit(0);
});
