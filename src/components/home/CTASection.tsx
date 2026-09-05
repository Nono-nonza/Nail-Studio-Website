import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="bg-brand-brown py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-display text-2xl font-semibold text-brand-cream sm:text-3xl">
          Ready to book your next appointment?
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-brand-cream/80 sm:text-base">
          Send a booking request in under a minute — choose your studio, service and preferred
          time, and we&apos;ll confirm with you on WhatsApp.
        </p>
        <Button href="/booking" variant="secondary">
          Request a Booking
        </Button>
      </Container>
    </section>
  );
}
