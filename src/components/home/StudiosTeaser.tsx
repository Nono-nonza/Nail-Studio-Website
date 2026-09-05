import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { studios } from "@/data/studios";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function StudiosTeaser() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Studios"
          title="Two studios, one standard of care"
          subtitle="Studio 1 is dedicated to nail services. Studio 2 offers both nail and hair services."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {studios.map((studio) => (
            <Link
              key={studio.id}
              href="/our-studios"
              className="group overflow-hidden rounded-3xl border border-border-subtle bg-background transition-shadow hover:shadow-xl hover:shadow-brand-brown/10"
            >
              <PlaceholderImage label={studio.shortName} className="h-48 w-full" />
              <div className="p-7">
                <div className="mb-3 flex flex-wrap gap-2">
                  {studio.services.map((service) => (
                    <Badge key={service} className="capitalize">
                      {service}
                    </Badge>
                  ))}
                </div>
                <h3 className="font-display text-xl font-semibold text-brand-brown">
                  {studio.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {studio.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-terracotta">
                  View studio details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
