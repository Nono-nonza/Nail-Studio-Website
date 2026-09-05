import type { Metadata } from "next";
import { faqGroups } from "@/data/faq";
import { Container } from "@/components/ui/Container";
import { FAQHero } from "@/components/faq/FAQHero";
import { FAQList } from "@/components/faq/FAQList";
import { CTASection } from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about booking, cancellations, services and visiting The Nail Studio.",
};

export default function FAQPage() {
  return (
    <>
      <FAQHero />
      <section className="bg-brand-cream py-20 sm:py-28">
        <Container>
          <FAQList groups={faqGroups} />
        </Container>
      </section>
      <CTASection />
    </>
  );
}
