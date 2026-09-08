/**
 * Shared TypeScript types for The Nail Studio's centralised content layer.
 * Keep all business/content types here so data files stay easy to scan and edit.
 */

/**
 * The Nail Studio is one business, one brand. Internally it operates from
 * two physical locations — the main location (nails) and an expanded
 * location (nails + hair) — but this is never surfaced publicly as "two
 * studios" or two brands. `LocationId` exists only so booking/service data
 * can track which physical location performs a given service.
 */
export type LocationId = "main" | "extension";

export type ServiceCategory = "nails" | "hair" | "lashes" | "makeup";

/** Marks a value that is a real placeholder awaiting client confirmation. */
export const TBD = "TBD" as const;
export type Maybe<T> = T | typeof TBD;

export interface Address {
  line1: Maybe<string>;
  line2?: string;
  suburb?: Maybe<string>;
  city: Maybe<string>;
  province: Maybe<string>;
  postalCode?: Maybe<string>;
  country: string;
  /** Google Maps embed/share URL, added once the client confirms the address. */
  mapUrl?: Maybe<string>;
}

export interface WhatsAppContact {
  /** Human-readable number as shown on the site, e.g. "071 234 5678". */
  displayNumber: Maybe<string>;
  /** E.164 international format used to build wa.me links, e.g. "27712345678". */
  internationalNumber: Maybe<string>;
}

export interface DayHours {
  day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday"
    | "Public Holidays";
  /** e.g. "09:00 - 17:00", "Closed", or TBD. */
  hours: Maybe<string>;
}

export interface StudioImage {
  src: string;
  alt: string;
}

export interface StudioLocation {
  id: LocationId;
  /** Internal reference label for developers/admin only — never rendered as a separate studio/brand name on the public site. */
  internalLabel: string;
  description: string;
  /** Nail services are offered at every location; this flags the location(s) that also offer hair services. */
  offersHairServices: boolean;
  address: Address;
  whatsapp: WhatsAppContact;
  phone?: Maybe<string>;
  openingHours: DayHours[];
  /** Compact one-line summary for tight spaces (e.g. the footer). Keep in sync with `openingHours`. */
  openingHoursSummary?: Maybe<string>;
  heroImage?: StudioImage;
  gallery: StudioImage[];
}

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  /** Numeric price in ZAR when it's a flat price. */
  price?: number;
  /** Use for per-unit pricing such as "per nail". */
  priceUnit?: string;
  /** Always-correct display string, e.g. "R180" or "R15 per nail". */
  priceLabel: string;
  description?: string;
  /** Which location(s) currently perform this service — an internal/booking detail, not a public "choose your studio" split. */
  availableAt: LocationId[];
  /** Approved client photo for this service. Only set once a suitable photo has been confirmed. */
  image?: StudioImage;
  /** Use instead of `image` when more than one approved photo exists for this service. */
  images?: StudioImage[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: ServiceCategory | "studio";
  locationId?: LocationId;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: Maybe<string>;
  icon: "instagram" | "facebook" | "tiktok" | "whatsapp";
}
