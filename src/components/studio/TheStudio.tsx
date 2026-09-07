import Image from "next/image";
import { mainLocation } from "@/data/locations";
import { Container } from "@/components/ui/Container";

/**
 * Photos for this section only — deliberately not routed through
 * `mainLocation.gallery`, which also feeds the Gallery page's studio band
 * and must stay unpopulated so these stay scoped to Our Studio.
 */
const studioPhotos = [
  {
    src: "/images/studios/37e6dffa-ff7b-48d6-a039-4085f428c228.JPG",
    alt: "Styled wig display beside the welcome sign inside The Nail Studio",
  },
  {
    src: "/images/studios/62fc0337-7a43-464d-83b3-909a98801c39.JPG",
    alt: "Styled wig displays on a shelf inside The Nail Studio",
  },
];

export function TheStudio() {
  return (
    <section className="bg-gradient-to-br from-surface to-brand-cream/40 py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="shadow-clay relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
          <div className="relative h-2/3 w-full">
            <Image
              src={studioPhotos[0].src}
              alt={studioPhotos[0].alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-1/3 w-full border-t-4 border-surface">
            <Image
              src={studioPhotos[1].src}
              alt={studioPhotos[1].alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
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
