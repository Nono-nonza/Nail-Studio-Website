import Link from "next/link";
import { Droplets, Layers, PenTool, Sparkles } from "lucide-react";
import { nailServices } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * A visual menu, not the price list — service names are pulled from the
 * services data (single source of truth), but prices/durations are
 * deliberately not shown here. See /services for full pricing.
 */
const techniques = [
  {
    serviceId: "manicure",
    icon: Sparkles,
    description: "Nail shaping, cuticle care and polish for healthy, tidy hands.",
  },
  {
    serviceId: "gel-nails",
    icon: Droplets,
    description: "Long-lasting gel polish with a smooth, glossy finish.",
  },
  {
    serviceId: "acrylic-full-set",
    icon: Layers,
    description: "A full set of acrylic extensions in your preferred length and shape.",
  },
  {
    serviceId: "nail-art",
    icon: PenTool,
    description: "Custom hand-painted designs and detailing added to any set.",
  },
];

export function NailTechniques() {
  return (
    <section className="bg-gradient-to-br from-surface to-brand-cream/30 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Nail Techniques"
          title="Ways we work our magic"
          subtitle="A closer look at the techniques behind our nail services."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techniques.map(({ serviceId, icon: Icon, description }) => {
            const service = nailServices.find((s) => s.id === serviceId);
            if (!service) return null;
            return (
              <Link
                key={serviceId}
                href="/services"
                className="shadow-clay block rounded-3xl bg-gradient-to-br from-surface to-brand-cream/30 p-7 transition-transform hover:-translate-y-0.5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-sage-light/30 text-brand-sage">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-brand-brown">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
