# DEV

Internals, build process and archive design. User-facing docs: [README.md](README.md).

## Layout

| Path | What |
|---|---|
| `!RUN.bat` | User entry point: extracts on first run, then launches. Named to sort first |
| `site/` | Mirrored website (HTML, JS bundle, images) |
| `site/index.F83-77QO.js.orig` | Untouched original bundle, before patching |
| `main.js` | Electron entry: server, window, WebHID wiring |
| `server-core.js` | Local HTTP server + API record/replay cache |
| `serve.js` | Standalone server for the browser fallback |
| `selftest.js` | Offscreen check that the app mounts and WebHID exists |
| `netaudit.js` | Logs every network request the app makes |
| `api-cache/` | Recorded responses, writable, git-ignored |
| `bundled-cache/` | Read-only cache baked into the packaged app |
| `drivers/` | Archived vendor driver installer — not installed |
| `release/` | Built app, LZMA2-compressed to 72 MB, committed |
| `tools/7za.exe` | Standalone extractor, so restore needs nothing installed |
| `dist/` | Working copy of the build, git-ignored, restorable |

## Entry point

`!RUN.bat` is the only thing a user touches. It checks for
`dist\QMK.top Offline-win32-x64\QMK.top Offline.exe`; if absent it calls
`restore-app.bat` (which extracts `release/*.7z` into `dist/` with `tools\7za.exe`),
then launches. Second run onwards, the check passes and it launches directly. The leading
`!` sorts it to the top of Explorer.

`restore-app.bat` still works standalone and ends in `pause`; `!RUN.bat` calls it with
stdin redirected from `nul` so that pause returns instantly.

Browser fallback: `launch-chrome.bat` serves `site/` on `http://127.0.0.1:38140/` in
Chrome or Edge. Needs Node.js, so it is not the user-facing path. **Firefox will never
work** — no WebHID.

## Scripts

```
npm install
npm start            # run from source
npm run selftest     # verify mount + WebHID
npm run netaudit     # log outbound requests
npm run dist         # rebuild the packaged app
npm run freeze       # recompress dist/ into release/
npm run checksums    # refresh SHA256SUMS
npm run promote-cache  # api-cache/* -> bundled-cache/
```

`npm run dist:installer` (electron-builder NSIS) fails here: extracting its
code-signing bundle needs the Windows "create symbolic link" privilege, i.e.
Developer Mode or an elevated shell. The portable build needs no privileges and is
the better archive format anyway.

## Bundle patches

Four edits to the mirrored bundle. `.orig` is preserved, so every change diffs.

1. `https://api2.qmk.top:3814/v1` → `/__api3814/v1`
2. `https://api2.qmk.top:3816` → `/__api3816`
   (plus the `api.rongyuan.tech` / `api3.rongyuan.tech` equivalents)

   Same-origin relative paths, so the local server intercepts them and the TCP port
   never needs to be fixed.

3. Electron-detection flag forced `false`. The site's built-in desktop mode loads
   images via `file://` and calls `window.require('@electron/remote')`, which needs
   `nodeIntegration`. Forcing the web path keeps the app sandboxed and runs the code
   path the public site actually exercises.
4. `window.location.hostname.includes("qmk.top")` forced `true`, to keep qmk.top
   branding instead of falling back to gearhub.top.

## API cache

Safety net, not the mechanism. Nothing needed to configure a keyboard passes through
it; delete it entirely and remapping is unaffected.

Hosts covered: `api2.qmk.top` (ports 3814 and 3816) and the `api.rongyuan.tech` /
`api3.rongyuan.tech` equivalents. Both confirmed reachable at archive time; a live request
was driven end to end through the server and observed `RECORDED`, then `HIT` on replay.

Lookup order: writable `api-cache/` next to the `.exe`, then `bundled-cache/` inside
`app.asar`, then upstream. New recordings go to the writable layer. Anything in
`bundled-cache/` before `npm run dist` is baked into the executable, so a recipient
gets that data without ever having been online. Nothing is written to AppData or the
registry.

Never cached: **auth endpoints** (`/login`, `/register`, …), so session tokens are not
left in plaintext JSON; and **5xx**, since caching a transient failure pins it forever.

`QMKTOP_OFFLINE=1` forces pure replay.

### Limits

The vendor APIs serve only the gallery and its accounts. Those are POSTs whose bodies
carry a per-user `session` token, and the cache key includes the body — a recording
only replays for a byte-identical request, so a future session will not match. Probing
the list endpoints without credentials returns nothing, confirming they are login-gated.

The gallery is therefore not archivable by any tool: a login cannot outlive its server.

## Naming

`<title>` of both `iotdriver.qmk.top` and `vgn.rongyuan.tech` is literally "Quantum
Mechanical Kit" — a backronym of QMK ("Quantum Mechanical Keyboard"), not a fork of or
relationship to it. Those two are the same driver-portal app, a different bundle from
qmk.top, and carry Google AdSense.

## Device table

Extracted from the bundle, not guessed. Note that VID:PID collide across models — the
firmware reports a name that disambiguates.

| VID | PID | Model | Layout |
|---|---|---|---|
| 0x3151 | 0x502f | GK6940GW | common68_ins_del_pgup_pgdn |
| 0x39ab | 0x9005 | NYX60 | common61 |
| 0x39ab | 0x9005 | KF109 | common68_home_del_pgup_pgdn |
| 0x3151 | 0x5068 | RY60Pro | common61 |
| 0x3151 | 0x5029 | 16K | common61_gk06 |
| 0x3151 | 0x5029 | Core68HE | common68_ins_del_pgup_pgdn |
| 0x39ab | 0x9005 | MOD68 optical | common68_akko_mod68_optical |
| 0x39ab | 0x9013 | Bear75 v3 | common75 |
| 0x39ab | 0x9013 | Beat68 | common68_beat68 |
| 0x3151 | 0x506c | SK75 | common81_sk75 |
| 0x39ab | 0x9013 | SK80 | common83_ss_sn034_hall |

## HID

`disable-hid-blocklist` is set. Chromium's blocklist exists to stop drive-by websites;
this app only ever loads local files. Without it these vendor-defined configuration
collections are hidden.

`select-hid-device` is handled manually: zero devices cancels, one auto-selects, more
than one prompts.

## Git strategy

**The repository is the archive.** A clone yields a runnable program, not a recipe.

The built folder is 273 MB and its `.exe` alone is 181 MB — past GitHub's 100 MB
per-file limit, so it cannot be committed raw:

| Format | Size | Under 100 MB? |
|---|---|---|
| raw folder | 273 MB | no |
| zip (deflate, max) | 107 MB | no |
| **7z (LZMA2, max)** | **72 MB** | **yes** |

zip would be preferable for universality, but it does not fit. Committing the
standalone extractor makes 7z equally self-sufficient.

Verified: extracting into a clean directory reproduces all 73 files, the `.exe` hashes
identically to the original build (`ca23e8356358…`), and the restored copy launches.

**Only re-freeze when the app actually changed.** Each freeze is a fresh 72 MB blob
that git keeps forever.

```
npm run dist && npm run freeze && npm run checksums
git add release SHA256SUMS && git commit
```

`.gitattributes` marks `site/` and `drivers/` binary — otherwise CRLF normalisation
would make a fresh clone differ from what was downloaded. Verified: the blob git stores
for `index.F83-77QO.js.orig` hashes the same as the file on disk.

`SHA256SUMS` covers every archived file: `sha256sum -c SHA256SUMS`.

Ignored: `node_modules/` (npm install), `dist/` (restore-app.bat), `api-cache/`
(runtime scratch — promote with `npm run promote-cache`, then commit `bundled-cache`).

## Selftest baseline

```
document.title   : "GearHub-V5"
#root descendants: 50 (mounted OK)
secure context   : true
navigator.hid    : true (WebHID available)
images           : 2 total, 0 broken
console errors   : 1   (Electron's CSP dev warning; absent once packaged)
```

## Ten-year horizon

`npm install` will very likely fail to resolve Electron 33 in a decade. The frozen
binary in `release/` plus `tools/7za.exe` still work. The `.orig` bundle plus the patch
list above let a future reader redo the patching from scratch.
