import Image from "next/image";
import { mainLocation } from "@/data/locations";
import { Container } from "@/components/ui/Container";

/**
 * Photos for this section only — deliberately not routed through
 * `mainLocation.gallery`, which also feeds the Gallery page's studio band
 * and must stay unpopulated so these stay scoped to Our Studio.
 *
 * Both source photos are 4:3 landscape, so each gets its own aspect-[4/3]
 * container rather than being force-cropped into a shared portrait frame.
 */
const primaryPhoto = {
  src: "/images/studios/studio-interior-workstations.png",
  alt: "Multiple bright, clean nail workstations inside The Nail Studio",
};

const secondaryPhoto = {
  src: "/images/studios/studio-storefront-exterior.png",
  alt: "The Nail Studio's shopfront entrance with signage",
};

export function TheStudio() {
  return (
    <section className="bg-gradient-to-br from-surface to-brand-cream/40 py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-4">
          <div className="shadow-clay photo-sheen relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src={primaryPhoto.src}
              alt={primaryPhoto.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="photo-warm object-cover"
            />
          </div>
          <div className="shadow-clay photo-sheen relative aspect-[4/3] w-3/4 self-end overflow-hidden rounded-2xl">
            <Image
              src={secondaryPhoto.src}
              alt={secondaryPhoto.alt}
              fill
              sizes="(min-width: 1024px) 38vw, 75vw"
              className="photo-warm object-cover"
            />
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-ink">
            The Studio
          </p>
          <h2 className="font-display text-3xl font-semibold text-brand-brown sm:text-4xl">
            An established home for elegant beauty care
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {mainLocation.description} It&apos;s where The Nail Studio&apos;s story began, and it
            remains the heart of the business today.
          </p>
        </div>
      </Container>
    </section>
  );
}
