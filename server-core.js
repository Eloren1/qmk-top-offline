'use strict';

// Local HTTP server that backs both the Electron app (main.js) and the
// browser fallback launcher (serve.js).
//
// It serves the mirrored site from site/ and intercepts the two API prefixes
// the bundled JS was patched to use, replaying them from api-cache/ and
// recording new ones from upstream while upstream still exists.

const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const UPSTREAM = {
  '/__api3814': 'https://api2.qmk.top:3814',
  '/__api3816': 'https://api2.qmk.top:3816'
};

const UPSTREAM_FALLBACK = {
  '/__api3814': 'https://api.rongyuan.tech:3814',
  '/__api3816': 'https://api3.rongyuan.tech:3816'
};

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg',
  '.txt': 'text/plain; charset=utf-8'
};

function cacheKey(method, url, body) {
  const h = crypto.createHash('sha1');
  h.update(method + '\n' + url + '\n');
  if (body && body.length) h.update(body);
  return h.digest('hex').slice(0, 24);
}

function cacheFileName(prefix, method, url, body) {
  const safe = url.replace(/^\//, '').replace(/[^a-zA-Z0-9._-]+/g, '_').slice(0, 60) || 'root';
  return path.join(prefix.replace(/^\/_+/, ''), `${method}_${safe}_${cacheKey(method, url, body)}.json`);
}

function readCache(file) {
  try {
    const rec = JSON.parse(fs.readFileSync(file, 'utf8'));
    return { status: rec.status, headers: rec.headers || {}, body: Buffer.from(rec.bodyB64, 'base64') };
  } catch {
    return null;
  }
}

function writeCache(file, status, headers, body) {
  try {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, JSON.stringify({
      recordedAt: new Date().toISOString(),
      status,
      headers,
      bodyB64: Buffer.from(body).toString('base64')
    }));
  } catch (e) {
    console.warn('[cache] write failed:', e.message);
  }
}

// Auth endpoints return session tokens and per-user state. Replaying those
// offline is meaningless and would leave credentials sitting in plaintext
// JSON on disk, so they are proxied but never recorded.
const NEVER_CACHE = [
  '/login', '/logout', '/register', '/change_password',
  '/find_password', '/req_find_password_verify_code', '/get_web_sess'
];

function isCacheable(url, status) {
  // 5xx is usually transient; caching it would pin the failure forever.
  if (status >= 500) return false;
  return !NEVER_CACHE.some(p => url.includes(p));
}

function readBody(req) {
  return new Promise(resolve => {
    const chunks = [];
    req.on('data', c => chunks.push(c));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', () => resolve(Buffer.alloc(0)));
  });
}

async function fetchUpstream(base, url, method, headers, body) {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), 12000);
  try {
    const res = await fetch(base + url, {
      method,
      headers,
      body: ['GET', 'HEAD'].includes(method) ? undefined : body,
      signal: ctl.signal
    });
    const buf = Buffer.from(await res.arrayBuffer());
    const out = {};
    for (const [k, v] of res.headers) {
      if (['content-encoding', 'content-length', 'transfer-encoding', 'connection'].includes(k.toLowerCase())) continue;
      out[k] = v;
    }
    return { status: res.status, headers: out, body: buf };
  } finally {
    clearTimeout(timer);
  }
}

async function handleApi(opts, prefix, req, res) {
  const url = req.url.slice(prefix.length) || '/';
  const method = req.method.toUpperCase();
  const body = await readBody(req);
  const name = cacheFileName(prefix, method, url, body);

  // Two cache layers, searched in order:
  //   cacheDir        - writable, next to the executable, grows as you browse
  //   bundledCacheDir - read-only, shipped inside the app, so a fresh copy of
  //                     this archive already has everything that was recorded
  //                     before packaging
  const writable = path.join(opts.cacheDir, name);
  const layers = [writable];
  if (opts.bundledCacheDir) layers.push(path.join(opts.bundledCacheDir, name));

  for (const file of layers) {
    const hit = readCache(file);
    if (hit) {
      const from = file === writable ? 'HIT' : 'HIT-BUNDLED';
      res.writeHead(hit.status, { ...hit.headers, 'X-Offline-Cache': from });
      return res.end(hit.body);
    }
  }

  if (!opts.forceOffline) {
    const fwd = {};
    for (const [k, v] of Object.entries(req.headers)) {
      if (['host', 'connection', 'content-length', 'accept-encoding', 'origin', 'referer'].includes(k)) continue;
      fwd[k] = v;
    }
    for (const base of [UPSTREAM[prefix], UPSTREAM_FALLBACK[prefix]]) {
      if (!base) continue;
      try {
        const up = await fetchUpstream(base, url, method, fwd, body);
        const stored = isCacheable(url, up.status);
        if (stored) writeCache(writable, up.status, up.headers, up.body);
        console.log(`[api] ${stored ? 'RECORDED' : 'PROXIED '} ${method} ${base}${url} -> ${up.status}`);
        res.writeHead(up.status, { ...up.headers, 'X-Offline-Cache': stored ? 'RECORDED' : 'PROXIED' });
        return res.end(up.body);
      } catch (e) {
        console.warn(`[api] upstream ${base} failed: ${e.message}`);
      }
    }
  }

  console.log(`[api] MISS ${method} ${prefix}${url} (offline, no cached copy)`);
  res.writeHead(503, { 'Content-Type': 'application/json; charset=utf-8', 'X-Offline-Cache': 'MISS' });
  res.end(JSON.stringify({ code: -1, msg: 'offline: no cached response for this request', data: null }));
}

function serveStatic(siteDir, req, res) {
  let rel;
  try {
    rel = decodeURIComponent(new URL(req.url, 'http://127.0.0.1').pathname);
  } catch {
    rel = req.url.split('?')[0];
  }
  if (rel === '/' || rel === '') rel = '/index.html';

  const full = path.join(siteDir, path.normalize(rel).replace(/^([\\/])+/, ''));
  if (!full.startsWith(siteDir)) {
    res.writeHead(403);
    return res.end('forbidden');
  }

  fs.stat(full, (err, st) => {
    if (err || !st.isFile()) {
      // SPA fallback: unknown paths return index.html so client routing works.
      return fs.readFile(path.join(siteDir, 'index.html'), (e2, buf) => {
        if (e2) { res.writeHead(404); return res.end('not found'); }
        res.writeHead(200, { 'Content-Type': MIME['.html'] });
        res.end(buf);
      });
    }
    res.writeHead(200, {
      'Content-Type': MIME[path.extname(full).toLowerCase()] || 'application/octet-stream',
      'Content-Length': st.size,
      'Cache-Control': 'no-cache'
    });
    fs.createReadStream(full).pipe(res);
  });
}

/**
 * @param {{siteDir:string, cacheDir:string, bundledCacheDir?:string, forceOffline?:boolean, port?:number}} opts
 * @returns {Promise<{port:number, server:http.Server}>}
 */
function startServer(opts) {
  const settings = { forceOffline: false, port: 0, ...opts };
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const prefix = Object.keys(UPSTREAM).find(p => req.url.startsWith(p));
      if (prefix) {
        handleApi(settings, prefix, req, res).catch(e => {
          console.error('[api] handler error', e);
          if (!res.headersSent) res.writeHead(500);
          res.end('error');
        });
        return;
      }
      serveStatic(settings.siteDir, req, res);
    });
    server.listen(settings.port, '127.0.0.1', () => resolve({ port: server.address().port, server }));
    server.on('error', reject);
  });
}

module.exports = { startServer };
