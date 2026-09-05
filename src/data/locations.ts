import { StudioLocation, TBD } from "./types";

/**
 * The Nail Studio's physical locations.
 *
 * IMPORTANT: The Nail Studio is one business, one brand, owned by Zanele
 * Nkosi. These two entries exist only so internal/booking logic can track
 * where a service is performed — they must never be presented publicly as
 * "Studio 1" / "Studio 2" or as separate, independently branded studios.
 * The public site should read as one established studio that has expanded
 * to offer hair services alongside its core nail services.
 *
 * Addresses, WhatsApp numbers, opening hours, and photos are marked TBD
 * where the client hasn't confirmed final details yet — replace those
 * values as soon as they're available. Nothing here is invented.
 *
 * Only one physical address and one set of hours have been confirmed —
 * they're stored on `main` since that's the one address/hours block shown
 * publicly (in the footer and on the Our Studio page). The two locations
 * keep separate WhatsApp numbers only so a booking request can be routed
 * to the right line depending on whether the customer picked a nail or a
 * hair service — this is booking-flow routing, not a second public studio.
 */
export const locations: StudioLocation[] = [
  {
    id: "main",
    internalLabel: "Main location (internal reference only) — nail services WhatsApp line",
    description:
      "The established home of The Nail Studio, offering our full range of nail services.",
    offersHairServices: false,
    address: {
      line1: "1st Street, Northmead Mall",
      suburb: "Northmead",
      city: "Johannesburg",
      province: TBD,
      country: "South Africa",
      mapUrl: TBD,
    },
    whatsapp: {
      displayNumber: "079 988 8136",
      internationalNumber: "27799888136",
    },
    phone: TBD,
    openingHours: [
      { day: "Monday", hours: "09:00 - 18:00" },
      { day: "Tuesday", hours: "09:00 - 18:00" },
      { day: "Wednesday", hours: "09:00 - 18:00" },
      { day: "Thursday", hours: "09:00 - 18:00" },
      { day: "Friday", hours: "09:00 - 18:00" },
      { day: "Saturday", hours: "09:00 - 17:00" },
      { day: "Sunday", hours: "09:00 - 15:00" },
      { day: "Public Holidays", hours: "09:00 - 15:00" },
    ],
    openingHoursSummary: "Mon–Fri 09:00–18:00 · Sat 09:00–17:00 · Sun & Public Holidays 09:00–15:00",
    gallery: [],
  },
  {
    id: "extension",
    internalLabel: "Expanded location (internal reference only) — hair services WhatsApp line",
    description:
      "Our expanded studio, offering the same nail services plus hair services — wig care, styling and haircuts.",
    offersHairServices: true,
    address: {
      line1: TBD,
      city: TBD,
      province: TBD,
      country: "South Africa",
      mapUrl: TBD,
    },
    whatsapp: {
      displayNumber: "077 384 1094",
      internationalNumber: "27773841094",
    },
    phone: TBD,
    openingHours: [
      { day: "Monday", hours: TBD },
      { day: "Tuesday", hours: TBD },
      { day: "Wednesday", hours: TBD },
      { day: "Thursday", hours: TBD },
      { day: "Friday", hours: TBD },
      { day: "Saturday", hours: TBD },
      { day: "Sunday", hours: TBD },
    ],
    gallery: [],
  },
];

export const mainLocation = locations[0];
export const extensionLocation = locations[1];

export const getLocationById = (id: string) => locations.find((l) => l.id === id);
