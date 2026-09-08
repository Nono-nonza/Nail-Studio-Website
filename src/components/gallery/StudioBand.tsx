import Image from "next/image";
import { mainLocation } from "@/data/locations";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function StudioBand() {
  const [heroImage] = mainLocation.gallery;

  return (
    <section className="bg-gradient-to-br from-brand-cream to-brand-sand/40 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="The Studio"
          title="One studio, one atmosphere"
          subtitle="The space where every appointment happens — calm, considered and welcoming."
        />

        <div className="mt-14">
          {heroImage ? (
            <div className="shadow-clay relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                sizes="100vw"
                className="photo-warm object-cover"
              />
            </div>
          ) : (
            <PlaceholderImage
              label="Studio photo coming soon"
              className="shadow-clay aspect-[16/9] w-full rounded-3xl"
            />
          )}
        </div>
      </Container>
    </section>
  );
}
