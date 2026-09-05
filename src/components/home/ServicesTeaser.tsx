import { hairServices, nailServices } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Service } from "@/data/types";

function ServiceRow({ service }: { service: Service }) {
  return (
    <li className="flex items-baseline justify-between gap-4 border-b border-border-subtle py-3.5 last:border-none">
      <span className="text-sm text-brand-brown sm:text-base">{service.name}</span>
      <span className="whitespace-nowrap font-display text-base font-semibold text-brand-terracotta sm:text-lg">
        {service.priceLabel}
      </span>
    </li>
  );
}

export function ServicesTeaser() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Services & Prices"
          title="Simple, transparent pricing"
          subtitle="All prices in South African Rand (ZAR). Nail services are offered at both studios; hair services are available at Studio 2."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-3xl bg-surface p-8 shadow-sm shadow-brand-brown/5">
            <h3 className="font-display text-xl font-semibold text-brand-brown">Nail Services</h3>
            <ul className="mt-2">
              {nailServices.map((service) => (
                <ServiceRow key={service.id} service={service} />
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-surface p-8 shadow-sm shadow-brand-brown/5">
            <h3 className="font-display text-xl font-semibold text-brand-brown">
              Hair Services <span className="text-sm font-normal text-muted-foreground">(Studio 2)</span>
            </h3>
            <ul className="mt-2">
              {hairServices.map((service) => (
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
