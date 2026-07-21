# drivers

Archived copy of the vendor's native driver installer. **Not installed, and not required
for keyboard configuration.** Kept only because it will not be downloadable once the
vendor disappears.

Source: `https://iotdriver.qmk.top/` (also `https://vgn.rongyuan.tech/` — same app,
different branding).

## iot_v222.exe

| | |
|---|---|
| SHA-256 | `6989AA433FB117343A93FF7ECFD2A4EF29E1F49F96BED817999B0DD5604F5C7A` |
| Size | 3,859,072 bytes |
| Product | `iot_driver` 1.0 |
| Company | Rongyuan, Inc. |
| Installer | Inno Setup 6.3.0 (Delphi), requires administrator |

Authenticode signature valid and timestamped:

```
Signer  : CN=深圳市容圆科技有限公司  (Shenzhen Rongyuan Technology Co., Ltd)
          SERIALNUMBER=91440300MA5FNF428F, L=深圳市, S=广东省, C=CN
          OID.2.5.4.15 = Private Organization
Issuer  : CN=Certum Extended Validation Code Signing 2021 CA
Expires : 2028-04-08
Stamp   : CN=Certum Timestamp 2025
```

Extended Validation, so the legal entity was verified and the key lives on a hardware
token — this is genuinely the vendor that makes these keyboards.

A valid EV signature proves authorship and integrity, not that the software is harmless.
Whether you want a vendor's admin-level background service permanently on your machine
is a separate decision, and the reason it is archived here rather than installed.

## What it does

The qmk.top bundle contains two clients for a local native service:

| Port | Purpose |
|---|---|
| `127.0.0.1:3838` | Device monitoring over protobuf/Twirp — `startDeviceMonitoring`, `subscribeDevices`, hot-plug events, `clientId`/`sessionId` |
| `127.0.0.1:6015` | `isUpdating`, `CLIENT_ALREADY_CONNECTED` — firmware update path |

It exists because a browser cannot do:

- **Continuous hot-plug monitoring.** WebHID needs a user gesture and a device picker
  every session.
- **V4-generation devices.** The bundle has `___isV4Device` and `___openV4Driver`,
  routing those boards to a separate driver interface.
- **Firmware updates.**

The bundle also carries `将当前设备的所有配置同步到驱动` — "sync all configurations of
the current device to the driver".

## Do you need it?

Almost certainly not. The site exposes `允许浏览器访问` ("Allow Browser Access"), the
WebHID path, as a first-class alternative, and that is what this archive uses.

Install it only if your board turns out to need it — most likely a firmware update, or a
V4-generation device. Expect an admin prompt and a service that starts with Windows.
