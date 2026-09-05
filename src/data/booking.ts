/**
 * Booking is a request-only flow: the form composes a WhatsApp message and
 * hands the customer to the correct studio's WhatsApp number. There is no
 * live availability check and no payment processing.
 *
 * `depositsEnabled` and `paymentsEnabled` are placeholders for later stages —
 * flip them on once the client confirms a deposit/payment policy, and wire
 * up the corresponding UI at that point. Do not enable without confirmation.
 */
export const bookingConfig = {
  depositsEnabled: false,
  paymentsEnabled: false,
  /** Selectable time-of-day options shown in the booking form. Purely a UI
   * convenience for the request message — not a claim of real availability.
   * Adjust once opening hours are confirmed. */
  timeSlots: [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
  ],
  disclaimer:
    "This form sends a booking request via WhatsApp — it does not confirm a live appointment slot. The studio will reply to confirm your booking.",
};
