import type { Metadata } from "next";
import { getGalleryByCategory } from "@/data/gallery";
import { nailServices, hairServices } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { StudioBand } from "@/components/gallery/StudioBand";
import { CTASection } from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A gallery of nail art, hair styling and studio atmosphere at The Nail Studio.",
};

export default function GalleryPage() {
  const nailImages = getGalleryByCategory("nails");
  const hairImages = getGalleryByCategory("hair");

  return (
    <>
      <GalleryHero />

      <section className="bg-surface py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Nail Work"
            title="Nails Gallery"
            subtitle="Manicures, acrylics, gel nails and nail art from The Nail Studio."
          />
          <div className="mt-14">
            <GalleryGrid
              images={nailImages}
              fallbackLabels={nailServices.map((service) => service.name)}
            />
          </div>
        </Container>
      </section>

      <StudioBand />

      <section className="bg-surface py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Hair Services"
            title="Hair Gallery"
            subtitle="Part of The Nail Studio's expanded beauty offering — wig care, styling and haircuts."
          />
          <div className="mt-14">
            <GalleryGrid
              images={hairImages}
              fallbackLabels={hairServices.map((service) => service.name)}
            />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
