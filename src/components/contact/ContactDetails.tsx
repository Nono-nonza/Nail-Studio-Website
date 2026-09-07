import { MapPin, Clock, MessageCircle } from "lucide-react";
import { extensionLocation, mainLocation } from "@/data/locations";
import { TBD } from "@/data/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { OpeningHours } from "@/components/studio/OpeningHours";

function CardShell({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="shadow-clay rounded-3xl bg-gradient-to-br from-surface to-brand-cream/30 p-7">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-sage-light/30 text-brand-sage">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-brand-brown">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export function ContactDetails() {
  const addressLine =
    mainLocation.address.line1 === TBD
      ? "Address to be confirmed"
      : [mainLocation.address.line1, mainLocation.address.suburb, mainLocation.address.city]
          .filter(Boolean)
          .join(", ");

  return (
    <section className="bg-gradient-to-br from-brand-cream to-brand-sand/40 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact Details"
          title="Visit or message us"
          subtitle="The Nail Studio, all in one place."
        />

        <div className="mx-auto mt-14 grid max-w-5xl items-start gap-6 sm:grid-cols-3">
          <CardShell icon={MapPin} title="Visit Us">
            <p className="text-sm leading-relaxed text-muted-foreground">{addressLine}</p>
          </CardShell>

          <CardShell icon={Clock} title="Opening Hours">
            <OpeningHours hours={mainLocation.openingHours} showHeading={false} />
          </CardShell>

          <CardShell icon={MessageCircle} title="WhatsApp">
            <div className="flex flex-col gap-3">
              <WhatsAppButton
                internationalNumber={mainLocation.whatsapp.internationalNumber}
                variant="outline"
                className="w-full justify-center"
              >
                Nail Services
              </WhatsAppButton>
              <WhatsAppButton
                internationalNumber={extensionLocation.whatsapp.internationalNumber}
                variant="outline"
                className="w-full justify-center"
              >
                Hair Services
              </WhatsAppButton>
            </div>
          </CardShell>
        </div>
      </Container>
    </section>
  );
}
