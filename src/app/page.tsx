import { Hero } from "@/components/home/Hero";
import { NailTechniques } from "@/components/home/NailTechniques";
import { FeaturedService } from "@/components/home/FeaturedService";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { StudioTeaser } from "@/components/home/StudioTeaser";
import { ServicesTeaser } from "@/components/home/ServicesTeaser";
import { GalleryTeaser } from "@/components/home/GalleryTeaser";
import { CTASection } from "@/components/shared/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <NailTechniques />
      <FeaturedService />
      <AboutTeaser />
      <StudioTeaser />
      <ServicesTeaser />
      <GalleryTeaser />
      <CTASection />
    </>
  );
}
