import { business } from "@/data/business";
import { mainLocation } from "@/data/locations";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-brand-cream to-brand-sand/60">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-sage-light/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-brand-blush/40 blur-3xl"
      />

      <Container className="relative flex flex-col items-center gap-8 py-20 text-center sm:py-28">
        <Badge>Nails &amp; Hair, All in One Studio</Badge>

        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] text-brand-brown sm:text-5xl lg:text-6xl">
          Elegant nails &amp; hair, beautifully done
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {business.name} offers premium manicures, pedicures, acrylics, gel nails and select hair
          services in a calm, welcoming studio experience — owned and run by {business.owner}.
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button href="/booking" variant="primary" className="px-8 py-4 text-base">
            Book an Appointment
          </Button>
          <WhatsAppButton
            internationalNumber={mainLocation.whatsapp.internationalNumber}
            message="Hi, I'd like to enquire about an appointment."
            variant="outline"
            className="px-4 py-2 text-xs"
          >
            WhatsApp Us
          </WhatsAppButton>
        </div>
      </Container>
    </section>
  );
}
