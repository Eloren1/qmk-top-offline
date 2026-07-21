# QMK.top Offline

Offline copy of the **qmk.top** magnetic (Hall-effect) keyboard configurator, packaged
as a Windows desktop app. Keeps working after qmk.top goes away.

**[Download (ZIP)](https://github.com/Eloren1/qmk-top-offline/archive/refs/heads/master.zip)**
· original web driver: <https://qmk.top>

Supported models:

GK6940GW · NYX60 · KF109 · RY60Pro · 16K · Core68HE · MOD68 optical · Bear75 v3 ·
Beat68 · SK75 · SK80

Not QMK firmware, and unrelated to the QMK project — qmk.top is a vendor configurator
(GearHub / RongYuan / JINGSU) driven over WebHID. The vendor's own sites title themselves
"Quantum Mechanical Kit"; the resemblance to QMK's "Quantum Mechanical Keyboard" is
borrowed, not a relationship.

## Why

Hall-effect keyboards increasingly ship with a web configurator and nothing else. That
is a keyboard whose settings depend on someone else paying a hosting bill. Xinmeng was
the only vendor with the layout I wanted, so instead of trusting the site to survive, the
site was traced, mirrored and rebuilt as a standalone program — every domain it touches
included.

The keyboard should still be configurable in ten years. This is that guarantee.

(Well, I have yet to test it on real hardware - the keyboard is still shipping. But it
looks promising.)

## Run it

1. Unzip and double-click **`!RUN.bat`**.

The first launch takes about half a minute while it unpacks itself; 
after that it opens immediately. Nothing is written outside this folder, 
so it even runs from a USB stick and uninstalls by being deleted.

## Why it works offline

- The whole keyboard database is compiled into the JS bundle — device IDs, layouts,
  magnetic parameters, key codes. Nothing is fetched.
- All keyboard communication is local over WebHID. No cloud round-trip.
- The vendor APIs only serve the community image gallery and its accounts. Losing
  them costs the gallery and nothing else.
- The vendor's native driver (`iot_driver`) is not required — see `drivers/README.md`.

Remapping, actuation points, Rapid Trigger, lighting, macros and profiles all work
with the network unplugged.

## While vendor is still up

The gallery (community keycap images and their search screens) is the one part that is
not in the bundle. The app records everything it fetches, permanently, so:

open the app while online and click through the gallery screens you care about.

Everything loaded that way is banked to disk and replays forever after. Nothing else
needs the network.

## Long-term notes

- **Your keymap lives in the keyboard.** The board keeps working with no software at
  all; this tool is only needed to *change* settings.
- **Export your profiles** whenever you get a layout you like.

Development, internals and build process: [DEV.md](DEV.md).

Archived 2026-07-21 from `https://qmk.top/` (bundle `index.F83-77QO.js`,
last-modified 2026-07-13).
