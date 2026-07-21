'use strict';

// Standalone server for the browser fallback (see launch-chrome.bat).
// Use this if the Electron app ever stops working but a Chromium browser with
// WebHID is still available.
//
//   node serve.js            -> records new API calls from upstream if online
//   node serve.js --offline  -> pure replay, never touches the network

const path = require('path');
const { startServer } = require('./server-core');

const PORT = Number(process.env.PORT) || 38140;
const forceOffline = process.argv.includes('--offline') || process.env.QMKTOP_OFFLINE === '1';

startServer({
  siteDir: path.join(__dirname, 'site'),
  cacheDir: path.join(__dirname, 'api-cache'),
  bundledCacheDir: path.join(__dirname, 'bundled-cache'),
  forceOffline,
  port: PORT
}).then(({ port }) => {
  console.log(`QMK.top offline server: http://127.0.0.1:${port}/`);
  console.log(`offlineOnly=${forceOffline}`);
  console.log('WebHID requires a Chromium browser (Chrome/Edge). Firefox will not work.');
}).catch(e => {
  console.error(`failed to listen on port ${PORT}:`, e.message);
  process.exit(1);
});
