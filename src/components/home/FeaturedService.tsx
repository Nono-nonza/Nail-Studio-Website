import Image from "next/image";
import { nailServices } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const nailArt = nailServices.find((s) => s.id === "nail-art")!;
const featuredPhoto = nailArt.images![0];

export function FeaturedService() {
  return (
    <section className="bg-gradient-to-br from-brand-cream to-brand-sand/40 py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="shadow-clay relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl">
          <Image
            src={featuredPhoto.src}
            alt={featuredPhoto.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="photo-warm object-cover"
          />
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-ink">
            Featured Service
          </p>
          <h2 className="font-display text-3xl font-semibold text-brand-brown sm:text-4xl">
            {nailArt.name}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Custom hand-painted designs and detailing added to any set.
          </p>
          <span className="mt-4 block font-display text-2xl font-semibold text-terracotta-ink">
            {nailArt.priceLabel}
          </span>
          <div className="mt-8">
            <Button href="/services" variant="outline">
              See Full Services List
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
