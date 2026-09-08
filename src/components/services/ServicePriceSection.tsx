import Image from "next/image";
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
      className={cn(
        "py-20 sm:py-28",
        background === "cream"
          ? "bg-gradient-to-br from-brand-cream to-brand-sand/40"
          : "bg-gradient-to-br from-surface to-brand-cream/30"
      )}
    >
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2 sm:gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              className="shadow-clay-sm flex items-start justify-between gap-4 rounded-2xl bg-gradient-to-br from-surface to-brand-cream/20 p-4"
            >
              <div className="flex items-start gap-3">
                {service.images && service.images.length > 0 ? (
                  <div className="flex shrink-0 -space-x-3">
                    {service.images.map((img) => (
                      <div
                        key={img.src}
                        className="relative h-10 w-10 overflow-hidden rounded-2xl ring-2 ring-background sm:h-12 sm:w-12"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="48px"
                          className="photo-warm object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ) : service.image ? (
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl sm:h-14 sm:w-14">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="56px"
                      className="photo-warm object-cover"
                    />
                  </div>
                ) : null}
                <div>
                  <p className="text-sm font-medium text-brand-brown sm:text-base">
                    {service.name}
                  </p>
                  {service.description ? (
                    <p className="mt-1 text-xs text-muted-foreground">{service.description}</p>
                  ) : null}
                </div>
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
