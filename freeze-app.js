'use strict';

// Rebuilds release/qmk-top-offline-app.7z from the current dist/ folder.
//
//   npm run freeze
//
// Only run this when the built app has actually changed. Each new archive is a
// fresh ~72 MB binary blob that git keeps in history forever; re-freezing on
// every rebuild will bloat the repository permanently.

const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const OUT = path.join(ROOT, 'release', 'qmk-top-offline-app.7z');
const SEVENZ = path.join(ROOT, 'tools', '7za.exe');

if (!fs.existsSync(DIST) || fs.readdirSync(DIST).length === 0) {
  console.error('dist/ is empty or missing. Run `npm run dist` first.');
  process.exit(1);
}
if (!fs.existsSync(SEVENZ)) {
  console.error(`missing extractor: ${SEVENZ}`);
  process.exit(1);
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.rmSync(OUT, { force: true });

console.log('compressing dist/ (LZMA2, max) - this takes a minute...');
execFileSync(SEVENZ, ['a', '-t7z', '-mx=9', '-bso0', '-bsp0', OUT, path.join(DIST, '*')], {
  stdio: 'inherit'
});

const mb = fs.statSync(OUT).size / 1048576;
console.log(`\nwrote ${path.relative(ROOT, OUT)}  ${mb.toFixed(1)} MB`);
if (mb > 100) {
  console.warn('WARNING: over 100 MB - GitHub will reject this file on push.');
  console.warn('Split it into volumes with:  7za a -v95m ...');
}
console.log('Next: npm run checksums, then git add release && git commit');
