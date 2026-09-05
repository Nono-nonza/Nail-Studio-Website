import { Service } from "./types";

/**
 * All confirmed services and prices, in South African Rand (ZAR).
 *
 * `availableAt` controls which studio(s) a service shows up under.
 * Nail services are offered at both studios; hair services are offered
 * only at Studio 2. Update prices here and they update everywhere on the site.
 */
export const nailServices: Service[] = [
  {
    id: "manicure",
    name: "Manicure",
    category: "nails",
    price: 180,
    priceLabel: "R180",
    availableAt: ["studio-1", "studio-2"],
  },
  {
    id: "pedicure",
    name: "Pedicure",
    category: "nails",
    price: 230,
    priceLabel: "R230",
    availableAt: ["studio-1", "studio-2"],
  },
  {
    id: "acrylic-full-set",
    name: "Acrylic Nails Full Set",
    category: "nails",
    price: 280,
    priceLabel: "R280",
    availableAt: ["studio-1", "studio-2"],
  },
  {
    id: "gel-nails",
    name: "Gel Nails",
    category: "nails",
    price: 230,
    priceLabel: "R230",
    availableAt: ["studio-1", "studio-2"],
  },
  {
    id: "nail-art",
    name: "Nail Art",
    category: "nails",
    price: 15,
    priceUnit: "per nail",
    priceLabel: "R15 per nail",
    availableAt: ["studio-1", "studio-2"],
  },
  {
    id: "nail-removal",
    name: "Nail Removal",
    category: "nails",
    price: 100,
    priceLabel: "R100",
    availableAt: ["studio-1", "studio-2"],
  },
  {
    id: "nail-removal-new-set",
    name: "Nail Removal with New Set",
    category: "nails",
    price: 50,
    priceLabel: "R50",
    description: "Removal price when booked together with a new set.",
    availableAt: ["studio-1", "studio-2"],
  },
  {
    id: "buff-and-shine",
    name: "Buff and Shine",
    category: "nails",
    price: 130,
    priceLabel: "R130",
    availableAt: ["studio-1", "studio-2"],
  },
];

export const hairServices: Service[] = [
  {
    id: "wig-washing",
    name: "Wig Washing",
    category: "hair",
    price: 250,
    priceLabel: "R250",
    availableAt: ["studio-2"],
  },
  {
    id: "wig-styling",
    name: "Wig Styling",
    category: "hair",
    price: 250,
    priceLabel: "R250",
    availableAt: ["studio-2"],
  },
  {
    id: "wig-styling-with-wash",
    name: "Wig Styling including Wash",
    category: "hair",
    price: 350,
    priceLabel: "R350",
    availableAt: ["studio-2"],
  },
  {
    id: "haircut",
    name: "Haircut",
    category: "hair",
    price: 100,
    priceLabel: "R100",
    availableAt: ["studio-2"],
  },
  {
    id: "dye",
    name: "Dye",
    category: "hair",
    price: 150,
    priceLabel: "R150",
    availableAt: ["studio-2"],
  },
];

export const allServices: Service[] = [...nailServices, ...hairServices];

export const getServicesForStudio = (studioId: string) =>
  allServices.filter((service) => service.availableAt.includes(studioId as never));

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
