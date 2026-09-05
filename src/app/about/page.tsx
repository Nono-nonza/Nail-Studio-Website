import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { OwnerIntro } from "@/components/about/OwnerIntro";
import { ApproachValues } from "@/components/about/ApproachValues";
import { CTASection } from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet The Nail Studio, owned and run by Zanele Nkosi — elegant, personal nail care at its core, with hair services now available through our expanded studio.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OwnerIntro />
      <ApproachValues />
      <CTASection />
    </>
  );
}
