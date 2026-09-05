# The Nail Studio — Website

Website for **The Nail Studio** (owner: Zanele Nkosi), a two-studio nail
and hair salon business in South Africa.

## Tech stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** (CSS-based theme, brand palette as design tokens)
- **lucide-react** for generic icons (brand/social icons are hand-rolled SVGs — lucide ships none)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Project structure

```
src/
  app/            Route segments (one folder per page)
  components/
    ui/           Small reusable primitives (Button, Container, Badge, ...)
    layout/       Header, footer, mobile menu
    home/         Homepage-specific sections
  data/           Centralised content/config — the single source of truth
  lib/            Utilities (className helper, WhatsApp link builder)
public/
  images/         nails/, hair/, studios/, logo/ — see images/README.md
```

## Centralised content (`src/data/`)

All business content lives here so it can be updated in one place instead
of being scattered through components:

- `business.ts` — business name, owner, tagline, currency
- `studios.ts` — the two studios: address, WhatsApp, opening hours, services offered
- `services.ts` — nail & hair services and prices (ZAR)
- `gallery.ts` — gallery image entries (empty until real photos are added)
- `site.ts` — navigation links, social links, SEO defaults
- `booking.ts` — booking form config (time slots, deposit/payment feature flags)
- `policies.ts` — Terms, Booking/Cancellation Policy, Privacy Policy content
- `types.ts` — shared types, plus the `TBD` placeholder marker

Values the client hasn't confirmed yet are set to the literal `"TBD"` (see
`TBD` in `types.ts`) so they're easy to search for and replace.

## Currently TBD / placeholder

- Studio addresses, map links, opening hours
- WhatsApp numbers for both studios
- Social media links (Instagram, Facebook, TikTok)
- Logo file
- Terms, Booking/Cancellation Policy and Privacy Policy final text
- Deposit/payment policy (booking stays request-only via WhatsApp until confirmed)
- Real client photography (nails, hair, studios) — soft brand-coloured
  placeholders are shown until photos are added, see `public/images/README.md`

## Booking model

Booking is a **request system**, not live availability or payment: the
customer fills in studio, service, date, time, name, WhatsApp number and
notes, and the form composes a WhatsApp message to the correct studio's
number. No real-time slots are claimed. The data model (`booking.ts`)
leaves room to add deposits/payments later without restructuring.

## Future: wig sales / product catalogue

Not built yet, deliberately. `services.ts` exports `isWigSalesEnabled = false`
as a flag to switch on later if the client confirms this feature.
