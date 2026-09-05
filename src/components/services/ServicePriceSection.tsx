import { Service } from "@/data/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

interface ServicePriceSectionProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  services: Service[];
  background?: "surface" | "cream";
}

export function ServicePriceSection({
  eyebrow,
  title,
  subtitle,
  services,
  background = "surface",
}: ServicePriceSectionProps) {
  return (
    <section
      className={cn("py-20 sm:py-28", background === "cream" ? "bg-brand-cream" : "bg-surface")}
    >
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <div className="mx-auto mt-14 grid max-w-4xl gap-x-12 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className={cn(
                "flex items-start justify-between gap-4 py-4",
                background === "cream" ? "border-b border-brand-brown/10" : "border-b border-border-subtle"
              )}
            >
              <div>
                <p className="text-sm font-medium text-brand-brown sm:text-base">
                  {service.name}
                </p>
                {service.description ? (
                  <p className="mt-1 text-xs text-muted-foreground">{service.description}</p>
                ) : null}
              </div>
              <span className="whitespace-nowrap font-display text-lg font-semibold text-terracotta-ink">
                {service.priceLabel}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
