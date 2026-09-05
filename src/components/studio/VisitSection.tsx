import { MapPin } from "lucide-react";
import { mainLocation } from "@/data/locations";
import { TBD } from "@/data/types";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { OpeningHours } from "./OpeningHours";

export function VisitSection() {
  const addressLine =
    mainLocation.address.line1 === TBD
      ? "Address to be confirmed"
      : [mainLocation.address.line1, mainLocation.address.suburb, mainLocation.address.city]
          .filter(Boolean)
          .join(", ");

  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-terracotta">
          Visit &amp; Book
        </p>
        <h2 className="font-display text-3xl font-semibold text-brand-brown sm:text-4xl">
          Come see us
        </h2>

        <div className="mt-8 flex items-center justify-center gap-2 text-base text-brand-brown/90">
          <MapPin className="h-5 w-5 shrink-0 text-brand-sage" />
          <span>{addressLine}</span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Hair services are available through our expanded studio — if you&apos;re booking a hair
          service, we&apos;ll confirm the exact location with you directly.
        </p>

        <div className="mx-auto mt-8 max-w-xs text-left">
          <OpeningHours hours={mainLocation.openingHours} />
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button href="/booking" variant="primary">
            Request a Booking
          </Button>
          <WhatsAppButton internationalNumber={mainLocation.whatsapp.internationalNumber} variant="outline">
            Message Us on WhatsApp
          </WhatsAppButton>
        </div>
      </Container>
    </section>
  );
}
