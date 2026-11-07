# QMK.top Offline

Offline copy of the **qmk.top** magnetic (Hall-effect) keyboard configurator, packaged
as a Windows desktop app. Keeps working after qmk.top goes away.

<img width="463" height="322" alt="image" src="https://github.com/user-attachments/assets/93af9a1e-36a7-4692-9d5e-f3f4b5dbef77" />

**[Download (ZIP)](https://github.com/Eloren1/qmk-top-offline/archive/refs/heads/master.zip)**
· original web driver: <https://qmk.top>

The first launch can take 10-15 minutes while dependencies are downloaded, then it works forever.

### XINMENG

> **Zero 68** · **Zero75** · **Beat65** · **Beat68** · **Beat75** · **Bear75** ·
> **K68** · **K980** · **K982D** · **S87 Pro** · **S98** · **X87** · **X98**

Not QMK firmware, and unrelated to the QMK project — qmk.top is a vendor configurator
(GearHub / RongYuan / JINGSU) driven over WebHID. The vendor's own sites title themselves
"Quantum Mechanical Kit"

## Why

Hall-effect keyboards increasingly ship with a web configurator and nothing else. That
is a keyboard whose settings depend on someone else paying a hosting bill. Xinmeng was
the only vendor with the layout I wanted, so instead of trusting the site to survive, the
site was traced by Claude, mirrored and rebuilt as a standalone program — every domain it touches
included.

The keyboard should still be configurable in ten years. This is that guarantee. 
(Well, I have yet to test it on real hardware - the keyboard is still shipping. But it
looks promising.)

## Run it

Unzip, double-click `!RUN.bat`.

First launch unpacks itself, takes a minute. After that it opens instantly.

## Supported models

**~700 keyboard models**, plus 171 mice and 33 wireless dongles. Not an all-in-one driver
for every keyboard, though — an all-in-one for one ecosystem. Nearly all of these are
RongYuan / GearHub ODM designs sold under many badges, which is why a single configurator
drives them all. A Wooting, Razer, SteelSeries or Keychron board speaks a different
protocol and will never work here.

qmk.top is really two configurators — 11 devices in the main one, 829 in the V4 one — and
both are mirrored. The app picks the right one automatically when you plug in.

Major brands, with representative models (families, not every regional variant):

| Brand | Models |
|---|---|
| **XINMENG** | Zero 68 · Zero75 · Beat65/68/75 · Bear75 · K68 · K980 · K982D · S87 Pro · S98 · X87 · X98 |
| **EPOMAKER** | HE60 · HE65 · HE68 · HE75 · HE108 · RT100 · TH65 · TH80 · EK75 · EM3 · EM5 · Glyph |
| **Akko** | MOD007 · TAC75 · TAC87 · RAY68 · Mineral01/02 · Gem02 |
| **AttackShark** | X65 · X68 · X82 · X85 · X87 · X96 · X98 · R68 · R82 · R85 · R86 · R98 · K85 · K86 |
| **YUNZII** | AL21 · AL66 · AL75 · B75 · RT68 · RT75 · RT80 · YZ68 · YZ75 · YZ84 · Wood68 · Wood84 |
| **FL·Esports** | CMK75 · MK870 · MK980 · NX68 · NX87 · NX108 · D75 · D98 · GP75 · GP87 · Q75 · X80 |
| **AJAZZ** | AK680 · AK029 · ALUX60 · ALUX68 · NS67 · NS87 |
| **EWEADN** | ZAP68 · ZAP87 · DEEP68 · DEEP80 · SEEK75 · K68 · K75 · V82 · V99 |
| **VKMS** | VK MAG68 · VK MAG 75 · VK 87 · VK99 · VK Cyber 68 · Mecha 75 · NB68 |
| **MonsGeek** | M1 V5 · M2 V5 · M3 V5 (incl. HE / TMR) · FUN60 PRO · FUN68 · FUN75 · MG108B |
| **Keycool** | KC68 · KC84 · QK75 · Y75 · Y87 · Y98 · Yumi68 · K19 · K21 |
| **NOPPOO** | C75 · C84 · C87 · C98 · X68 · Choc 68 · F108 |

Plus ~185 further badges — ikbc, Hator, KiiBoom, DAGK, GAMAKAY, Fantech, MEETION,
ROYALAXE, OUSAID and a long tail of others.

Full keyboard list, straight from the bundle:

```
grep -oE 'displayName:"[^"]*"[^}]{0,400}type:"keyboard"' site/v4/js/index.21fdd5d3.js \
  | sed -E 's/^displayName:"([^"]*)".*/\1/' | sort -u
```

## Why it works offline

- The whole keyboard database is compiled into the JS bundles — device IDs, layouts,
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
  all; this tool is only needed to change settings.
- **Nothing is installed.** No registry entries, nothing written outside this folder.
  Runs from a USB stick, uninstalls by being deleted.

Development, internals and build process: [DEV.md](DEV.md).

Archived 2026-07-21 from `https://qmk.top/` (bundle `index.F83-77QO.js`,
last-modified 2026-07-13).
