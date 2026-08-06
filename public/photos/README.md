# /public/photos

Real, owned photography for the site. **Do not use stock imagery.**

Filenames are wired through the manifest at `src/content/photos.ts`. To add a
photo, drop the file here and set its `src` in the manifest (e.g.
`src: "/photos/hero.jpg"`). Every slot already reserves the correct dimensions,
so images drop in with zero layout change.

Treatment: black & white or warm-muted; a mono caption credit renders
underneath automatically.

Suggested files (match the manifest keys):

- `hero.jpg` — landscape portrait for the hero
- `almaos.jpg`, `enterprise.jpg`, `trading.jpg`, `symsense.jpg` — work polaroids (portrait)
- `about.jpg` — portrait for the About polaroid
- `writing.jpg` — landscape thumbnail for the Writing section
