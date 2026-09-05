import { TBD } from "./types";

/**
 * Legal/policy page content. The client hasn't provided final policy text
 * yet, so each page is marked TBD with a clear placeholder paragraph.
 * Replace `content` with the confirmed text when available — the page
 * components read straight from here.
 */
export const policies = {
  terms: {
    title: "Terms and Conditions",
    lastUpdated: TBD,
    content: [
      "Full Terms and Conditions for The Nail Studio are being finalised and will appear here shortly.",
    ],
  },
  bookingPolicy: {
    title: "Booking & Cancellation Policy",
    lastUpdated: TBD,
    content: [
      "Booking requests can be made up to 30 days in advance.",
      "Cancellations or rescheduling require at least 24 hours' notice.",
      "A 15-minute grace period is allowed for late arrivals.",
      "A no-show is treated as a cancelled appointment.",
    ],
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: TBD,
    content: [
      "Our Privacy Policy is being finalised and will appear here shortly.",
    ],
  },
};
