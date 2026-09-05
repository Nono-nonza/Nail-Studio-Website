import { Service } from "./types";

/**
 * All confirmed services and prices, in South African Rand (ZAR).
 *
 * `availableAt` is an internal/booking detail only — it is never used to
 * present The Nail Studio as two separate studios. Nail services are
 * offered throughout The Nail Studio; hair services are offered through
 * our expanded studio. Update prices here and they update everywhere on
 * the site.
 */
export const nailServices: Service[] = [
  {
    id: "manicure",
    name: "Manicure",
    category: "nails",
    price: 180,
    priceLabel: "R180",
    availableAt: ["main", "extension"],
  },
  {
    id: "pedicure",
    name: "Pedicure",
    category: "nails",
    price: 230,
    priceLabel: "R230",
    availableAt: ["main", "extension"],
  },
  {
    id: "acrylic-full-set",
    name: "Acrylic Nails Full Set",
    category: "nails",
    price: 280,
    priceLabel: "R280",
    availableAt: ["main", "extension"],
  },
  {
    id: "gel-nails",
    name: "Gel Nails",
    category: "nails",
    price: 230,
    priceLabel: "R230",
    availableAt: ["main", "extension"],
  },
  {
    id: "nail-art",
    name: "Nail Art",
    category: "nails",
    price: 15,
    priceUnit: "per nail",
    priceLabel: "R15 per nail",
    availableAt: ["main", "extension"],
  },
  {
    id: "nail-removal",
    name: "Nail Removal",
    category: "nails",
    price: 100,
    priceLabel: "R100",
    availableAt: ["main", "extension"],
  },
  {
    id: "nail-removal-new-set",
    name: "Nail Removal with New Set",
    category: "nails",
    price: 50,
    priceLabel: "R50",
    description: "Removal price when booked together with a new set.",
    availableAt: ["main", "extension"],
  },
  {
    id: "buff-and-shine",
    name: "Buff and Shine",
    category: "nails",
    price: 130,
    priceLabel: "R130",
    availableAt: ["main", "extension"],
  },
];

export const hairServices: Service[] = [
  {
    id: "wig-washing",
    name: "Wig Washing",
    category: "hair",
    price: 250,
    priceLabel: "R250",
    availableAt: ["extension"],
  },
  {
    id: "wig-styling",
    name: "Wig Styling",
    category: "hair",
    price: 250,
    priceLabel: "R250",
    availableAt: ["extension"],
  },
  {
    id: "wig-styling-with-wash",
    name: "Wig Styling including Wash",
    category: "hair",
    price: 350,
    priceLabel: "R350",
    availableAt: ["extension"],
  },
  {
    id: "haircut",
    name: "Haircut",
    category: "hair",
    price: 100,
    priceLabel: "R100",
    availableAt: ["extension"],
  },
  {
    id: "dye",
    name: "Dye",
    category: "hair",
    price: 150,
    priceLabel: "R150",
    availableAt: ["extension"],
  },
];

export const allServices: Service[] = [...nailServices, ...hairServices];

export const getServicesForLocation = (locationId: string) =>
  allServices.filter((service) => service.availableAt.includes(locationId as never));

/**
 * Services currently NOT offered. Kept here (rather than deleted) so it's
 * clear these were deliberate decisions, not oversights, if the client asks.
 * Lashes and makeup are inactive; do not surface them anywhere on the site.
 */
export const inactiveServiceCategories = ["lashes", "makeup"] as const;

/**
 * Feature flag for a future wig sales / product catalogue. Keep this off
 * until the client confirms — the data shape can be added later without
 * restructuring the rest of the site.
 */
export const isWigSalesEnabled = false;
