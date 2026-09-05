# Image folders

Real client photographs only — never generated or altered images of the
client's nail/hair work.

- `nails/` — nail work photos (manicures, acrylics, gel, nail art)
- `hair/` — hair work photos (wigs, haircuts, styling)
- `studios/` — studio/salon interior and exterior photos
- `logo/` — final logo files, once supplied

## Adding a photo

1. Drop the image file into the matching folder (use descriptive, lowercase,
   hyphenated filenames, e.g. `nails/french-manicure-01.jpg`).
2. Add an entry in `src/data/gallery.ts` (for the Gallery page) and/or
   `src/data/studios.ts` (for a studio's `heroImage`/`gallery`) pointing at
   `/images/<folder>/<filename>`.
3. Prefer `.webp` or optimised `.jpg` files for fast loading — Next.js
   `<Image>` will further optimise them automatically at build/request time.

Until real photos are added, the site shows soft, on-brand placeholder
blocks instead of stock or AI-generated photography.
