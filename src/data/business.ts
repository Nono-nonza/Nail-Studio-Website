import { TBD } from "./types";

/**
 * Core business identity. Edit this file to update business-wide details
 * that aren't specific to a single studio.
 */
export const business = {
  name: "The Nail Studio",
  owner: "Zanele Nkosi",
  tagline: "Elegant nails & hair, beautifully done",
  description:
    "The Nail Studio offers premium nail care and select hair services across two studios in South Africa, blending elegant styling with a warm, personal touch.",
  currency: "ZAR",
  currencySymbol: "R",
  country: "South Africa",
  /** Update once the client provides a final logo file. */
  logo: {
    src: TBD,
    alt: "The Nail Studio logo",
  },
  /** Primary contact email, if the client wants one published. */
  email: TBD,
} as const;
