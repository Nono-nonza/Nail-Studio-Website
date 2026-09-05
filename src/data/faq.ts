import { bookingConfig } from "./booking";
import { extensionLocation, mainLocation } from "./locations";
import { TBD } from "./types";

export interface FAQItem {
  question: string;
  answer: string;
  link?: { label: string; href: string };
}

export interface FAQGroup {
  title: string;
  items: FAQItem[];
}

const addressLine =
  mainLocation.address.line1 === TBD
    ? "Address to be confirmed"
    : [mainLocation.address.line1, mainLocation.address.suburb, mainLocation.address.city]
        .filter(Boolean)
        .join(", ");

/**
 * All answers are composed from the same confirmed data used elsewhere on
 * the site (booking.ts, locations.ts) — nothing here is a new fact. Update
 * the source data and these answers stay correct automatically.
 */
export const faqGroups: FAQGroup[] = [
  {
    title: "Bookings",
    items: [
      {
        question: "How do I book an appointment?",
        answer:
          "You can request an appointment via WhatsApp. Use our Booking page to choose your service, preferred date and time — it prepares a message for you to send, and we'll confirm your appointment directly on WhatsApp.",
        link: { label: "Go to Booking", href: "/booking" },
      },
      {
        question: "How far in advance can I book?",
        answer: `You can request a booking up to ${bookingConfig.maxAdvanceBookingDays} days in advance.`,
      },
      {
        question: "Can I book a nail or hair service through WhatsApp?",
        answer: `Yes. Nail service requests go to our Nail Services WhatsApp number (${mainLocation.whatsapp.displayNumber}), and hair service requests go to our Hair Services WhatsApp number (${extensionLocation.whatsapp.displayNumber}).`,
      },
    ],
  },
  {
    title: "Cancellations & Rescheduling",
    items: [
      {
        question: "How much notice is required to cancel or reschedule?",
        answer: `Please give us at least ${bookingConfig.cancellationNoticeHours} hours' notice to cancel or reschedule your appointment.`,
      },
      {
        question: "What happens if I don't arrive for my appointment?",
        answer: bookingConfig.noShowPolicy,
      },
    ],
  },
  {
    title: "Late Arrivals",
    items: [
      {
        question: "How long is the grace period?",
        answer: `We allow a ${bookingConfig.gracePeriodMinutes}-minute grace period for late arrivals.`,
      },
    ],
  },
  {
    title: "Services",
    items: [
      {
        question: "Where can I see the full list of nail and hair services and prices?",
        answer:
          "All of our nail and hair services, with prices, are listed on our Services & Prices page.",
        link: { label: "View Services & Prices", href: "/services" },
      },
      {
        question: "Is hair service available as part of The Nail Studio's services?",
        answer:
          "Yes — hair services are offered as part of The Nail Studio's expanded studio, alongside our core nail services. It's all the same business.",
      },
    ],
  },
  {
    title: "Location & Hours",
    items: [
      {
        question: "Where is The Nail Studio located?",
        answer: addressLine,
      },
      {
        question: "What are the opening hours?",
        answer:
          mainLocation.openingHoursSummary && mainLocation.openingHoursSummary !== TBD
            ? mainLocation.openingHoursSummary
            : "Opening hours are being confirmed.",
      },
    ],
  },
];
