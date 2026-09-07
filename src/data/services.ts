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
    image: {
      src: "/images/nails/28e23bc3-e004-4c4c-965f-0f3a464cdc8a.JPG",
      alt: "Black gel pedicure with a white star accent nail, worn with strappy studded sandals",
    },
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
    images: [
      {
        src: "/images/nails/8ec75da4-79c3-473d-996f-1c7afe620aeb.JPG",
        alt: "Pastel pink, blue, orange and yellow abstract French-tip nail art",
      },
      {
        src: "/images/nails/552d0da6-42cc-403b-8c71-61ecd331fa6a.JPG",
        alt: "Bright red glossy nails with delicate gold chain nail art on an accent nail",
      },
      {
        src: "/images/nails/9f518244-734e-4e20-9ab1-e6672fdfc21f.JPG",
        alt: "Nude nails with a white daisy accent and tiny smiley-face details",
      },
    ],
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

export const lashServices: Service[] = [
  {
    id: "classic-lash-extensions",
    name: "Classic Lash Extensions",
    category: "lashes",
    price: 350,
    priceLabel: "R350",
    availableAt: ["extension"],
  },
  {
    id: "volume-lashes",
    name: "Volume Lashes",
    category: "lashes",
    price: 550,
    priceLabel: "R550",
    availableAt: ["extension"],
  },
  {
    id: "hybrid-lashes",
    name: "Hybrid Lashes",
    category: "lashes",
    price: 450,
    priceLabel: "R450",
    availableAt: ["extension"],
  },
  {
    id: "lash-removal",
    name: "Lash Removal",
    category: "lashes",
    price: 100,
    priceLabel: "R100",
    availableAt: ["extension"],
  },
  {
    id: "cluster-lashes",
    name: "Cluster Lashes",
    category: "lashes",
    price: 250,
    priceLabel: "R250",
    availableAt: ["extension"],
  },
];

export const allServices: Service[] = [...nailServices, ...hairServices, ...lashServices];

export const getServicesForLocation = (locationId: string) =>
  allServices.filter((service) => service.availableAt.includes(locationId as never));

/**
 * Services currently NOT offered. Kept here (rather than deleted) so it's
 * clear these were deliberate decisions, not oversights, if the client asks.
 * Makeup is inactive; do not surface it anywhere on the site. Lashes was
 * previously inactive too but is now a confirmed, active category — see
 * `lashServices` above.
 */
export const inactiveServiceCategories = ["makeup"] as const;

/**
 * Feature flag for a future wig sales / product catalogue. Keep this off
 * until the client confirms — the data shape can be added later without
 * restructuring the rest of the site.
 */
export const isWigSalesEnabled = false;
