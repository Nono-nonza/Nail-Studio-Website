/**
 * Shared TypeScript types for The Nail Studio's centralised content layer.
 * Keep all business/content types here so data files stay easy to scan and edit.
 */

export type StudioId = "studio-1" | "studio-2";

export type ServiceCategory = "nails" | "hair";

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
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
  /** e.g. "09:00 - 17:00", "Closed", or TBD. */
  hours: Maybe<string>;
}

export interface StudioImage {
  src: string;
  alt: string;
}

export interface Studio {
  id: StudioId;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  services: ServiceCategory[];
  address: Address;
  whatsapp: WhatsAppContact;
  phone?: Maybe<string>;
  openingHours: DayHours[];
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
  /** Which studios currently offer this service. */
  availableAt: StudioId[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: ServiceCategory | "studio";
  studioId?: StudioId;
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
