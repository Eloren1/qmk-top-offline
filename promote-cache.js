'use strict';

// Copies runtime recordings out of the scratch api-cache folders and into
// bundled-cache/, which is tracked by git and baked into the packaged app.
//
//   node promote-cache.js
//
// Run this after using the app online, then commit and re-run `npm run dist`
// so new copies of the archive ship with what you recorded.

const fs = require('fs');
const path = require('path');

const DEST = path.join(__dirname, 'bundled-cache');

// Both places a writable cache can appear: the dev-mode folder next to the
// sources, and the one next to the packaged executable.
const SOURCES = [
  path.join(__dirname, 'api-cache'),
  ...findPackagedCaches(path.join(__dirname, 'dist'))
];

function findPackagedCaches(distDir) {
  try {
    return fs.readdirSync(distDir, { withFileTypes: true })
      .filter(d => d.isDirectory())
      .map(d => path.join(distDir, d.name, 'api-cache'))
      .filter(p => fs.existsSync(p));
  } catch {
    return [];
  }
}

function walk(dir, base = dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full, base));
    else if (entry.name.endsWith('.json')) out.push(path.relative(base, full));
  }
  return out;
}

let copied = 0;
let skipped = 0;

for (const src of SOURCES) {
  if (!fs.existsSync(src)) continue;
  for (const rel of walk(src)) {
    const from = path.join(src, rel);
    const to = path.join(DEST, rel);
    if (fs.existsSync(to)) { skipped++; continue; }
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.copyFileSync(from, to);
    console.log('  +', rel);
    copied++;
  }
}

console.log(`\npromoted ${copied} response(s), ${skipped} already present.`);
if (copied > 0) {
  console.log('Next: git add bundled-cache && git commit, then `npm run dist` to bake it in.');
} else {
  console.log('Nothing new to promote.');
}
