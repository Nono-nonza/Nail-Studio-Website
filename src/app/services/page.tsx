import type { Metadata } from "next";
import { nailServices, hairServices, lashServices } from "@/data/services";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicePriceSection } from "@/components/services/ServicePriceSection";
import { CTASection } from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Services & Prices",
  description:
    "Nail, hair and lash services at The Nail Studio, with confirmed prices in South African Rand (ZAR).",
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
      <ServicePriceSection
        eyebrow="Lash Services"
        title="Lash Services"
        subtitle="Part of The Nail Studio's expanded beauty offering — lash extensions and removal."
        services={lashServices}
        background="surface"
      />
      <CTASection />
    </>
  );
}
