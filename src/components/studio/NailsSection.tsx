import { nailServices } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function NailsSection() {
  return (
    <section className="bg-gradient-to-br from-surface to-brand-cream/30 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Nails & Beauty"
          title="Nail care is at our core"
          subtitle="From everyday manicures to a full acrylic set, nail care is what The Nail Studio was built on."
          align="left"
        />

        <div className="mt-10 grid gap-x-10 gap-y-1 sm:grid-cols-2">
          {nailServices.map((service) => (
            <div
              key={service.id}
              className="flex items-baseline justify-between gap-4 border-b border-border-subtle py-3.5"
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
