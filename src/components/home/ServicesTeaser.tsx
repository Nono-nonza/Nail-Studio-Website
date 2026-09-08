import { hairServices, lashServices, makeupServices, nailServices } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Service } from "@/data/types";

function ServiceRow({ service }: { service: Service }) {
  return (
    <li className="flex items-baseline justify-between gap-4 border-b border-border-subtle py-3.5 last:border-none">
      <span className="text-sm text-brand-brown sm:text-base">{service.name}</span>
      <span className="whitespace-nowrap font-display text-base font-semibold text-terracotta-ink sm:text-lg">
        {service.priceLabel}
      </span>
    </li>
  );
}

export function ServicesTeaser() {
  return (
    <section className="bg-gradient-to-br from-brand-cream to-brand-sand/40 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Services & Prices"
          title="Simple, transparent pricing"
          subtitle="All prices in South African Rand (ZAR). Nail services are core to The Nail Studio; hair, lash and makeup services are available through our expanded studio."
        />

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="shadow-clay rounded-3xl bg-gradient-to-br from-surface to-brand-cream/30 p-8">
            <h3 className="font-display text-xl font-semibold text-brand-brown">Nail Services</h3>
            <ul className="mt-2">
              {nailServices.map((service) => (
                <ServiceRow key={service.id} service={service} />
              ))}
            </ul>
          </div>

          <div className="shadow-clay rounded-3xl bg-gradient-to-br from-surface to-brand-cream/30 p-8">
            <h3 className="font-display text-xl font-semibold text-brand-brown">
              Hair Services
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">Available through our expanded studio.</p>
            <ul className="mt-2">
              {hairServices.map((service) => (
                <ServiceRow key={service.id} service={service} />
              ))}
            </ul>
          </div>

          <div className="shadow-clay rounded-3xl bg-gradient-to-br from-surface to-brand-cream/30 p-8">
            <h3 className="font-display text-xl font-semibold text-brand-brown">
              Lash Services
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">Available through our expanded studio.</p>
            <ul className="mt-2">
              {lashServices.map((service) => (
                <ServiceRow key={service.id} service={service} />
              ))}
            </ul>
          </div>

          <div className="shadow-clay rounded-3xl bg-gradient-to-br from-surface to-brand-cream/30 p-8">
            <h3 className="font-display text-xl font-semibold text-brand-brown">
              Makeup Services
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">Available through our expanded studio.</p>
            <ul className="mt-2">
              {makeupServices.map((service) => (
                <ServiceRow key={service.id} service={service} />
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button href="/services" variant="outline">
            See Full Services List
          </Button>
        </div>
      </Container>
    </section>
  );
}
