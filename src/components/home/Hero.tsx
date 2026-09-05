import { business } from "@/data/business";
import { studios } from "@/data/studios";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-sage-light/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-brand-blush/40 blur-3xl"
      />

      <Container className="relative flex flex-col items-center gap-8 py-20 text-center sm:py-28">
        <Badge>Two studios &middot; {studios.length} locations across South Africa</Badge>

        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] text-brand-brown sm:text-5xl lg:text-6xl">
          Elegant nails &amp; hair, beautifully done
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {business.name} offers premium manicures, pedicures, acrylics, gel nails and select hair
          services in a calm, welcoming studio experience — owned and run by {business.owner}.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/booking" variant="primary">
            Request a Booking
          </Button>
          <Button href="/services" variant="outline">
            View Services &amp; Prices
          </Button>
        </div>
      </Container>
    </section>
  );
}
