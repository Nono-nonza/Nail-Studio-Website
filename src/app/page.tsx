import { Hero } from "@/components/home/Hero";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { StudiosTeaser } from "@/components/home/StudiosTeaser";
import { ServicesTeaser } from "@/components/home/ServicesTeaser";
import { GalleryTeaser } from "@/components/home/GalleryTeaser";
import { CTASection } from "@/components/shared/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <StudiosTeaser />
      <ServicesTeaser />
      <GalleryTeaser />
      <CTASection />
    </>
  );
}
