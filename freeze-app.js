'use strict';

// Rebuilds release/qmk-top-offline-app.7z.NNN from the current dist/ folder.
//
//   npm run freeze
//
// Only run this when the built app has actually changed. Each freeze is a fresh
// set of binary blobs that git keeps in history forever; re-freezing on every
// rebuild will bloat the repository permanently.
//
// The archive is ALWAYS split into volumes, even when it would fit in one file.
// GitHub rejects any single file over 100 MB, and dist/ has grown from 273 MB to
// 941 MB as mirrored device drivers were added. Splitting unconditionally means
// that limit can never be hit again, and keeps the layout identical whatever the
// size, so restore-app.bat has exactly one code path.

const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const RELEASE = path.join(ROOT, 'release');
const OUT = path.join(RELEASE, 'qmk-top-offline-app.7z');
const SEVENZ = path.join(ROOT, 'tools', '7za.exe');
const VOLUME_MB = 95;

if (!fs.existsSync(DIST) || fs.readdirSync(DIST).length === 0) {
  console.error('dist/ is empty or missing. Run `npm run dist` first.');
  process.exit(1);
}
if (!fs.existsSync(SEVENZ)) {
  console.error(`missing extractor: ${SEVENZ}`);
  process.exit(1);
}

fs.mkdirSync(RELEASE, { recursive: true });

// Clear every previous volume, plus any single-file archive from before the
// split. A stale .002 left behind would silently corrupt the next extraction.
for (const f of fs.readdirSync(RELEASE)) {
  if (/^qmk-top-offline-app\.7z(\.\d+)?$/.test(f)) fs.rmSync(path.join(RELEASE, f), { force: true });
}

console.log(`compressing dist/ (LZMA2, max, ${VOLUME_MB} MB volumes) - this takes a while...`);
execFileSync(SEVENZ, ['a', '-t7z', '-mx=9', `-v${VOLUME_MB}m`, '-bso0', '-bsp0', OUT, path.join(DIST, '*')], {
  stdio: 'inherit'
});

const volumes = fs.readdirSync(RELEASE)
  .filter(f => /^qmk-top-offline-app\.7z\.\d+$/.test(f))
  .sort();

if (volumes.length === 0) {
  console.error('no volumes produced - compression failed');
  process.exit(1);
}

let total = 0;
let oversize = false;
for (const v of volumes) {
  const bytes = fs.statSync(path.join(RELEASE, v)).size;
  total += bytes;
  if (bytes > 100 * 1048576) oversize = true;
  console.log(`  ${v}  ${(bytes / 1048576).toFixed(1)} MB`);
}

console.log(`\n${volumes.length} volume(s), ${(total / 1048576).toFixed(1)} MB total`);
if (oversize) {
  console.error('ERROR: a volume exceeds 100 MB - GitHub will reject it. Lower VOLUME_MB.');
  process.exit(1);
}
console.log('Extract with: tools\\7za.exe x release\\qmk-top-offline-app.7z.001');
console.log('Next: npm run checksums, then git add release && git commit');
