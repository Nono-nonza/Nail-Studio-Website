import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { CTASection } from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit The Nail Studio, check our opening hours, or message us on WhatsApp for nail or hair services.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactDetails />
      <CTASection />
    </>
  );
}
