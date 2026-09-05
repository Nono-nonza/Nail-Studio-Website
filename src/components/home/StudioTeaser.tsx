import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function StudioTeaser() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Studio"
          title="One studio, growing with you"
          subtitle="Nail care is at the heart of The Nail Studio. We've since expanded to offer hair services too — all under the same roof, the same standard of care."
        />

        <div className="mt-14 overflow-hidden rounded-3xl border border-border-subtle bg-background lg:grid lg:grid-cols-2 lg:items-center">
          <PlaceholderImage label="The Nail Studio" className="aspect-[4/3] w-full lg:aspect-auto lg:h-full" />

          <div className="p-8 sm:p-10">
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge>Nails</Badge>
              <Badge>Hair</Badge>
            </div>
            <h3 className="font-display text-2xl font-semibold text-brand-brown">
              The Nail Studio
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Our core nail services — manicures, pedicures, acrylics, gel nails and nail art —
              remain at the centre of what we do. Through our expanded studio, we now also offer
              hair services, from wig care to haircuts and colour.
            </p>
            <div className="mt-6">
              <Button href="/our-studios" variant="outline" className="group">
                Learn About Our Studio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
