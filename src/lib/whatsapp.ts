import { TBD } from "@/data/types";

/**
 * Builds a wa.me link for a given international number (digits only, no
 * "+") and optional prefilled message. Returns undefined when the number
 * isn't confirmed yet, so callers can render a disabled/"coming soon" state
 * instead of a dead link.
 */
export function buildWhatsAppLink(
  internationalNumber: string | typeof TBD | undefined,
  message?: string
) {
  if (!internationalNumber || internationalNumber === TBD) return undefined;

  const digitsOnly = internationalNumber.replace(/\D/g, "");
  const base = `https://wa.me/${digitsOnly}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

interface BookingWhatsAppMessageInput {
  serviceName: string;
  date: string;
  time: string;
  customerName: string;
  customerWhatsApp: string;
  notes?: string;
}

/** Composes the plain-text WhatsApp message sent for a booking request. */
export function buildBookingMessage({
  serviceName,
  date,
  time,
  customerName,
  customerWhatsApp,
  notes,
}: BookingWhatsAppMessageInput) {
  const lines = [
    "Hi! I'd like to request a booking at The Nail Studio.",
    "",
    `Service: ${serviceName}`,
    `Preferred date: ${date}`,
    `Preferred time: ${time}`,
    `Name: ${customerName}`,
    `WhatsApp number: ${customerWhatsApp}`,
  ];

  if (notes) {
    lines.push(`Notes: ${notes}`);
  }

  lines.push("", "(Sent via The Nail Studio website booking form)");

  return lines.join("\n");
}
