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
 */
export const locations: StudioLocation[] = [
  {
    id: "main",
    internalLabel: "Main location (internal reference only)",
    description:
      "The established home of The Nail Studio, offering our full range of nail services.",
    offersHairServices: false,
    address: {
      line1: TBD,
      city: TBD,
      province: TBD,
      country: "South Africa",
      mapUrl: TBD,
    },
    whatsapp: {
      displayNumber: TBD,
      internationalNumber: TBD,
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
  {
    id: "extension",
    internalLabel: "Expanded location (internal reference only)",
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
      displayNumber: TBD,
      internationalNumber: TBD,
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
