import { Building2, HeartHandshake, MessageCircle, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  {
    icon: Sparkles,
    title: "Elegant, Considered Care",
    description:
      "From manicures to nail art, every service is finished with an eye for detail and a calm, unhurried pace.",
  },
  {
    icon: HeartHandshake,
    title: "Warm & Personal",
    description:
      "A small studio experience where you're treated as a person, not a number — every visit is personal.",
  },
  {
    icon: Building2,
    title: "One Studio, Growing With You",
    description:
      "Nail care remains at the heart of what we do. We've expanded to offer hair services too — all to the same standard of care.",
  },
  {
    icon: MessageCircle,
    title: "Easy to Reach",
    description:
      "Booking requests go straight to the studio via WhatsApp, so getting in touch feels simple and direct.",
  },
];

export function ApproachValues() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Approach"
          title="Beauty, care & experience"
          subtitle="A few things that guide how The Nail Studio looks after every client."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-3xl bg-surface p-7 shadow-sm shadow-brand-brown/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-sage-light/30 text-brand-sage">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-brand-brown">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
