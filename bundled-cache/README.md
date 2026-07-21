# bundled-cache

Read-only API responses that ship **inside** the packaged app. Anything recorded here
before `npm run dist` travels with every copy of the archive.

Lookup order: `api-cache/` next to the executable (writable) → this folder → upstream.

Promote recordings:

```
npm run promote-cache
npm run dist
```

Realistically cacheable: very little. The vendor APIs serve only the community gallery
and its accounts, over POSTs whose bodies carry a per-user `session` token — and the
cache key includes the body, so a recording only replays for a byte-identical request.

**None of this affects configuring a keyboard.** The keyboard database is compiled into
the JS bundle and all device communication is local over WebHID. Remapping works with
this folder empty. See [DEV.md](../DEV.md).
