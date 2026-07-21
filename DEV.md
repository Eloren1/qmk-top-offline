# DEV

Internals, build process and archive design. User-facing docs: [README.md](README.md).

## How this repo is shaped, and why

Read this first — the layout looks redundant until you know what each half guarantees.

**The repository holds two copies of the same website, on purpose.**

| | `site/` | `release/*.7z.00N` |
|---|---|---|
| Form | raw files, readable | compressed program |
| Size | 607 MB | 155 MB |
| Purpose | the **archive** | the **runnable app** |
| Needs to use it | a text editor | nothing at all |

`site/` is the mirrored websites as plain files: HTML, the JS bundles, images, and an
`.orig` of every patched file. A human ten years from now can read it, diff the patches,
and re-do them. That is the archival record.

`release/` is that same `site/` already built into a Windows program — plus the ~236 MB of
Chromium (`*.dll`, `*.pak`, `icudtl.dat`) that Electron needs to run it. `app.asar` inside
it is 705 MB and contains a full copy of `site/`.

### Why not just commit the source and skip `release/`?

Because Chromium is not in this repository and never will be. It arrives via
`npm install`, from `node_modules/`, which is gitignored. Drop `release/` and a clone is
no longer a program — it is a recipe that needs Node, npm, and an npm registry still
serving Electron 33 a decade from now. That dependency is the exact thing this archive
exists to escape, so the built binary is committed.

### Why not commit `dist/` unpacked, and skip the compression?

`dist/` is 941 MB and its `.exe` alone is 181 MB. GitHub rejects any single file over
100 MB, so the built app physically cannot be committed as-is. Compressing it into 95 MB
volumes is what makes it storable at all. `!RUN.bat` unpacks it once, on first run.

### So what do the scripts actually do?

```
npm run dist     site/ + main.js + Electron  ──▶  dist/   (941 MB, runnable, gitignored)
npm run freeze   dist/                       ──▶  release/*.7z.001,.002  (155 MB, committed)
!RUN.bat         release/*.7z.001            ──▶  dist/   (on the user's machine)
```

`dist/` is gitignored at both ends: it is a build artifact here, and a restored artifact
there. Only `site/` (source) and `release/` (product) live in git.

**Editing `site/` does not change the app until you re-run `dist` and `freeze`.** That is
the single most common way to ship a repo whose source is fixed but whose program is not.

### The cost, stated plainly

`.git` is ~437 MB and every freeze adds another ~155 MB of permanent history. If that ever
becomes intolerable, the fix is to stop bundling `site/` into `app.asar` and have `main.js`
read it from beside the executable — one copy instead of two. That trades away the
"copy the `dist` folder anywhere on its own" property, which is why it has not been done.

## Layout

| Path | What |
|---|---|
| `!RUN.bat` | User entry point: extracts on first run, then launches. Named to sort first |
| `site/` | Mirrored root app — V5 configurator (HTML, JS bundle, images) |
| `site/index.F83-77QO.js.orig` | Untouched original bundle, before patching |
| `site/v4/` | Mirrored **V4 driver app** (`qmk.top/v4/`) — separate SPA, 688 keyboard models + mice/dongles |
| `site/v4/js/*.orig`, `site/v4/index.html.orig` | Untouched V4 originals |
| `main.js` | Electron entry: server, window, WebHID wiring |
| `server-core.js` | Local HTTP server + API record/replay cache |
| `serve.js` | Standalone server for the browser fallback |
| `selftest.js` | Offscreen check that the app mounts and WebHID exists |
| `netaudit.js` | Logs every network request the app makes |
| `api-cache/` | Recorded responses, writable, git-ignored |
| `bundled-cache/` | Read-only cache baked into the packaged app |
| `drivers/` | Archived vendor driver installer — not installed |
| `release/` | Built app, LZMA2-compressed into 95 MB volumes (155 MB total), committed |
| `tools/7za.exe` | Standalone extractor, so restore needs nothing installed |
| `dist/` | Working copy of the build, git-ignored, restorable |

## Entry point

`!RUN.bat` is the only thing a user touches. It checks for
`dist\QMK.top Offline-win32-x64\QMK.top Offline.exe`; if absent it calls
`restore-app.bat` (which extracts `release/*.7z.001` and its sibling volumes into `dist/`
with `tools\7za.exe`),
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

Every `.orig` is preserved, so each change diffs.

### Root app (`site/index.F83-77QO.js`)

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
5. `sT = "https://qmk.top/v4"` → `sT = "/v4/"` — the V4 handoff, see below.

### V4 app (`site/v4/js/index.21fdd5d3.js`)

6. Same API-host rewrites as 1–2.
7. Electron-detection flag (`We`) forced `!1`, same reasoning as 3. This also disables
   every `CONFIG.json` read, since all of them sit behind `window.require("fs")`.
8. `index.html`: Baidu analytics (`hm.baidu.com`) block removed. The root app carries no
   such tracker; the V4 page did.

## The two apps

`qmk.top` serves two separate single-page apps, and the archive needs both.

| | root (V5) | `/v4/` |
|---|---|---|
| Device entries | 11 | 1150 (945 keyboard, 171 mouse, 33 dongle, 1 audio) |
| Unique names | 11 | 829 — of which **688 are keyboards** |
| Mount point | `#root` | `#app` |
| `document.title` | GearHub-V5 | GearHub |
| Transport | WebHID | WebHID |

The root bundle routes between them:

```js
___isV4Device  = n => n.company === "v4" || !ph.some(e => e.id === n.id)
___openV4Driver = () => { window.location.href = sT }
```

`ph` is the 11-device list, so **anything not in those 11 is treated as a V4 device** and
handed off. Unpatched that navigates to `https://qmk.top/v4`, which is fatal offline — the
majority of supported boards would dead-end. Patch 5 makes the handoff local.

`server-core.js` must therefore fall back to the *right* `index.html`: a miss under `/v4/`
serves `site/v4/index.html`, anything else serves `site/index.html`. Without that split,
`/v4/` hits the generic SPA fallback, re-serves the root app, and the handoff loops.

### Device routing, all three tiers

```
root app (11 boards)
   └─ not one of the 11 ──▶ /v4/ (829 devices)
                              └─ not one of the 829 ──▶ offers iotdriver.qmk.top
```

That last tier is a dead end offline, and deliberately so: `iotdriver.qmk.top` has **no
WebHID at all** (`requestDevice`, `sendFeatureReport`, `navigator.hid`: zero occurrences).
It drives keyboards through the native `iot_driver` service on `127.0.0.1:3838`/`:6015`,
so it cannot be archived as a standalone web app no matter how completely it is mirrored.
Its 1380 entries are mostly rebadges — 393 rongyuan, 233 akko, 137 EPOMAKER, and a long
tail of ~100 brands over the same ODM chassis. See `drivers/README.md`.

### Code splitting

The V4 app is code-split hard: `index.21fdd5d3.js` plus **3895 lazily imported chunks** in
`site/v4/js/`, one per device family (`findRy5088Device` → `d7542f3b.js`, and so on).
They are fetched on demand, so a partial mirror boots to the loading bar and stalls at a
percentage rather than failing loudly. `npm run selftest` checks both apps for this reason.

Chunk references are **transitive** — chunks import other chunks that the entry bundle
never names. Mirroring took three passes to reach closure: 1674 named by the entry bundle,
2220 more named by those, then 4 stragglers. To re-verify closure:

```
cd site/v4/js
cat *.js | grep -oE '[0-9a-f]{8}\.js' | sort -u > /tmp/refs
ls | grep -E '^[0-9a-f]{8}\.js$' | sort > /tmp/have
comm -23 /tmp/refs /tmp/have     # expect only 21fdd5d3.js and 8aedde6e.js
```

`21fdd5d3.js` is the entry bundle itself (it lives at `js/index.21fdd5d3.js`); `8aedde6e.js`
does not exist upstream — both are expected residue, not gaps.

### Size

`site/v4/` is **603 MB** uncompressed, dominated by ~900 chunks of 100 KB–1 MB that are
inline SVG keyboard renderings, one full vector drawing per layout. They are nearly
identical to each other, so a solid LZMA2 archive deduplicates them almost entirely —
measured **179:1** on the 60 largest. The uncompressed footprint is alarming; the
committed archive is not.

Not rewritten, and harmless: `oldDriverUrl` → `iotdriver.qmk.top`, and a `gear-lab` link
that calls `window.open(..., "_self")`. Both are user-initiated navigations to pages that
were never archivable. The `_self` one will blank the window if clicked offline; restart
the app.

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

The **root app's 11**, extracted from the bundle, not guessed. Note that VID:PID collide
across models — the firmware reports a name that disambiguates.

The V4 app's 688 keyboards are not tabulated here; dump them with:

```
grep -oE 'displayName:"[^"]*"[^}]{0,400}type:"keyboard"' site/v4/js/index.21fdd5d3.js \
  | sed -E 's/^displayName:"([^"]*)".*/\1/' | sort -u
```

Drop the `type:"keyboard"` filter to include the 171 mice and 33 dongles.

**Marketing names and database names differ**, which makes searching by the name on the
box unreliable. Boards are matched on the ID they report, never on their label. Worked
example — the Zero 68 is stored as `K68`, and its two SKUs are separate entries:

| id | VID | PID | Internal name | Variant |
|---|---|---|---|---|
| 3872 | 0x3151 | 0x5029 | `ry5088_zdm_beat68_v2_zero_1m_8k` | wired 8K |
| 3867 | 0x3151 | 0x5030 | `ry5088_zdm_beat68_v2_zero_3m_8k` | tri-mode |

Both `company:"XinMengK65Keyboard"`, `keyLayout:Common68_ZAP68`, `magnetism:!0`, and both
are Beat68 v2 derivatives — the same silicon family as the Beat68 in the root table. The
same pattern repeats across the database, so grep the internal `name:` field rather than
`displayName:` when a board seems missing.

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

The built folder is 941 MB and its `.exe` alone is 181 MB — past GitHub's 100 MB
per-file limit, so it cannot be committed raw:

| Format | Size | Fits? |
|---|---|---|
| raw folder | 941 MB | no |
| 7z (LZMA2, max), single file | 155 MB | no — one file over 100 MB |
| **7z (LZMA2, max), 95 MB volumes** | **95.0 + 59.7 MB** | **yes** |

zip would be preferable for universality, but it does not fit. Committing the
standalone extractor makes 7z equally self-sufficient.

**The archive is always split**, even when it would fit in one file. `dist/` went from
273 MB to 941 MB the day the V4 drivers were mirrored, and it will grow again; splitting
unconditionally removes the cliff and keeps `restore-app.bat` on a single code path.
`freeze-app.js` exits non-zero if any volume exceeds 100 MB rather than warning, and
deletes stale volumes first — a leftover `.002` from a larger build would silently corrupt
the next extraction.

Verified after the V4 mirror: extracting the volumes into a clean directory reproduces all
73 files, and both `QMK.top Offline.exe` (`5d2741279804…`) and the 705 MB `app.asar` hash
identically to the build. The asar was confirmed to contain `v4/js/`, the Zero68 entry
`ry5088_zdm_beat68_v2_zero_1m_8k`, `company_XinMengK65Keyboard`, and the patched
`sT="/v4/"`.

**Only re-freeze when the app actually changed.** Each freeze is a fresh ~155 MB of blobs
that git keeps forever.

```
npm run dist && npm run freeze && npm run checksums
git add release SHA256SUMS && git commit
```

`.gitattributes` marks `site/` and `drivers/` binary — otherwise CRLF normalisation
would make a fresh clone differ from what was downloaded. Verified: the blob git stores
for `index.F83-77QO.js.orig` hashes the same as the file on disk.

**Rule order matters here.** For a given attribute the *last* matching pattern wins, so
`site/** -text` has to come after `*.js text` or every mirrored `.js` silently goes back
to being normalised. The `.orig` files hid this for a while, since `*.js` does not match
`.orig`. Check with:

```
git check-attr text -- site/v4/js/d7542f3b.js    # must print: text: unset
```

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
