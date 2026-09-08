import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookingHero } from "@/components/booking/BookingHero";
import { HowItWorks } from "@/components/booking/HowItWorks";
import { BookingForm } from "@/components/booking/BookingForm";
import { BookingInfo } from "@/components/booking/BookingInfo";

export const metadata: Metadata = {
  title: "Booking",
  description:
    "Request an appointment at The Nail Studio — choose your service, preferred date and time, and send your request via WhatsApp.",
};

export default function BookingPage() {
  return (
    <>
      <BookingHero />
      <HowItWorks />

      <section className="bg-gradient-to-br from-surface to-brand-cream/30 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Choose Your Service"
            title="Request Your Booking"
            subtitle="Fill in a few details and we'll send everything to WhatsApp for you, ready to send."
          />
          <div className="mt-14">
            <BookingForm />
          </div>
        </Container>
      </section>

      <BookingInfo />
    </>
  );
}
