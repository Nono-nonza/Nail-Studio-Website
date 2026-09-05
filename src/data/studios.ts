import { Studio, TBD } from "./types";

/**
 * The Nail Studio's two physical locations.
 *
 * Addresses, WhatsApp numbers, opening hours, and photos are marked TBD
 * where the client hasn't confirmed final details yet — replace those
 * values as soon as they're available. Nothing here is invented.
 */
export const studios: Studio[] = [
  {
    id: "studio-1",
    name: "The Nail Studio — Studio 1",
    shortName: "Studio 1",
    tagline: "Nail services",
    description:
      "Our first studio, dedicated entirely to nail care — manicures, pedicures, acrylics, gels and nail art.",
    services: ["nails"],
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
    id: "studio-2",
    name: "The Nail Studio — Studio 2",
    shortName: "Studio 2",
    tagline: "Nail & hair services",
    description:
      "Our second studio, offering the full range of nail services alongside wig care, styling and haircuts.",
    services: ["nails", "hair"],
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

export const getStudioById = (id: string) => studios.find((s) => s.id === id);
