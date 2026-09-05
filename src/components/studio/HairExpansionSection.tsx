import { hairServices } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function HairExpansionSection() {
  return (
    <section className="bg-brand-cream py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Expanded Services"
          title="Now offering hair services too"
          subtitle="The Nail Studio has grown to include hair services, offered through our expanded studio as part of the same business — not a separate brand."
          align="left"
        />

        <div className="mt-10 grid gap-x-10 gap-y-1 sm:grid-cols-2">
          {hairServices.map((service) => (
            <div
              key={service.id}
              className="flex items-baseline justify-between gap-4 border-b border-brand-brown/10 py-3.5"
            >
              <span className="text-sm text-brand-brown sm:text-base">{service.name}</span>
              <span className="whitespace-nowrap font-display text-base font-semibold text-terracotta-ink">
                {service.priceLabel}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/services" variant="outline">
            View All Services &amp; Prices
          </Button>
        </div>
      </Container>
    </section>
  );
}
