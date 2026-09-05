import type { Metadata } from "next";
import { StudioHero } from "@/components/studio/StudioHero";
import { TheStudio } from "@/components/studio/TheStudio";
import { NailsSection } from "@/components/studio/NailsSection";
import { HairExpansionSection } from "@/components/studio/HairExpansionSection";
import { VisitSection } from "@/components/studio/VisitSection";

export const metadata: Metadata = {
  title: "Our Studio",
  description:
    "The Nail Studio — one established beauty business built around elegant nail care, now also offering hair services through our expanded studio.",
};

export default function OurStudioPage() {
  return (
    <>
      <StudioHero />
      <TheStudio />
      <NailsSection />
      <HairExpansionSection />
      <VisitSection />
    </>
  );
}
