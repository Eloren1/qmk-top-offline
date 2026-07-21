'use strict';

// Regenerates SHA256SUMS covering every archived file, so integrity can be
// verified years from now with `sha256sum -c SHA256SUMS`.
//
//   npm run checksums

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const DIRS = ['site', 'drivers', 'release', 'tools', 'bundled-cache'];

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

const lines = [];
for (const d of DIRS) {
  const abs = path.join(ROOT, d);
  if (!fs.existsSync(abs)) continue;
  for (const file of walk(abs)) {
    const hash = crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
    const rel = path.relative(ROOT, file).split(path.sep).join('/');
    lines.push(`${hash} *${rel}`);
  }
}

lines.sort((a, b) => a.slice(65).localeCompare(b.slice(65)));
fs.writeFileSync(path.join(ROOT, 'SHA256SUMS'), lines.join('\n') + '\n');
console.log(`wrote SHA256SUMS - ${lines.length} files`);
