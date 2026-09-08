import { galleryImages } from "@/data/gallery";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import Image from "next/image";

const placeholderLabels = ["Nail Art", "Manicures", "Hair Styling", "Studio Life"];

export function GalleryTeaser() {
  const hasImages = galleryImages.length > 0;
  const tiles = hasImages ? galleryImages.slice(0, 4) : placeholderLabels;

  return (
    <section className="bg-gradient-to-br from-surface to-brand-cream/30 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="Our recent work"
          subtitle="A glimpse of recent nail art from The Nail Studio."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {hasImages
            ? (tiles as typeof galleryImages).map((image) => (
                <div key={image.id} className="shadow-clay photo-sheen relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={400}
                    className="photo-warm h-full w-full object-cover"
                  />
                </div>
              ))
            : (tiles as string[]).map((label) => (
                <PlaceholderImage key={label} label={label} className="aspect-square rounded-2xl" />
              ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/gallery" variant="outline">
            View Full Gallery
          </Button>
        </div>
      </Container>
    </section>
  );
}
