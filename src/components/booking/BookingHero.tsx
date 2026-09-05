import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { mainLocation } from "@/data/locations";

export function BookingHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-32 h-80 w-80 rounded-full bg-brand-blush/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-24 h-72 w-72 rounded-full bg-brand-sage-light/40 blur-3xl"
      />

      <Container className="relative flex flex-col items-center gap-6 py-20 text-center sm:py-24">
        <Badge>Booking</Badge>
        <h1 className="max-w-2xl font-display text-4xl font-semibold leading-[1.1] text-brand-brown sm:text-5xl">
          Book Your Appointment
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Tell us what you&apos;d like, and when — we&apos;ll confirm your appointment directly on
          WhatsApp.
        </p>
        <WhatsAppButton internationalNumber={mainLocation.whatsapp.internationalNumber}>
          Message Us on WhatsApp
        </WhatsAppButton>
      </Container>
    </section>
  );
}
