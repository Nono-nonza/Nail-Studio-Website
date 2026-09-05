import { CalendarCheck, CheckCircle2, ClipboardList } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: ClipboardList,
    title: "Choose your service",
    description: "Pick the service you'd like, along with your preferred date and time.",
  },
  {
    icon: CalendarCheck,
    title: "Send your request",
    description: "Your details are sent to us in one message, ready on WhatsApp.",
  },
  {
    icon: CheckCircle2,
    title: "We confirm with you",
    description: "We'll reply on WhatsApp to confirm your appointment.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How Booking Works"
          title="Simple, in three steps"
          subtitle="No accounts, no complicated forms — just a quick request via WhatsApp."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-sage-light/30 text-brand-sage">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-ink">
                Step {index + 1}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-brand-brown">
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
