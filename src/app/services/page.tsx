import type { Metadata } from "next";
import { nailServices, hairServices } from "@/data/services";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicePriceSection } from "@/components/services/ServicePriceSection";
import { CTASection } from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Services & Prices",
  description:
    "Nail services and hair services at The Nail Studio, with confirmed prices in South African Rand (ZAR).",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicePriceSection
        eyebrow="Nail Services"
        title="Nail Services"
        subtitle="Manicures, pedicures, acrylics, gel nails and nail art — the heart of The Nail Studio."
        services={nailServices}
        background="surface"
      />
      <ServicePriceSection
        eyebrow="Hair Services"
        title="Hair Services"
        subtitle="Part of The Nail Studio's expanded beauty offering — wig care, styling and haircuts."
        services={hairServices}
        background="cream"
      />
      <CTASection />
    </>
  );
}
