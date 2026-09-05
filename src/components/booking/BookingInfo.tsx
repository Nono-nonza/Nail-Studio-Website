import { AlarmClock, CalendarClock, Clock, XCircle } from "lucide-react";
import { bookingConfig } from "@/data/booking";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BookingInfo() {
  const items = [
    {
      icon: CalendarClock,
      title: "Booking window",
      description: `Requests can be made up to ${bookingConfig.maxAdvanceBookingDays} days in advance.`,
    },
    {
      icon: Clock,
      title: "Cancellations & rescheduling",
      description: `Please give at least ${bookingConfig.cancellationNoticeHours} hours' notice to cancel or reschedule.`,
    },
    {
      icon: AlarmClock,
      title: "Grace period",
      description: `A ${bookingConfig.gracePeriodMinutes}-minute grace period is allowed for late arrivals.`,
    },
    {
      icon: XCircle,
      title: "No-shows",
      description: bookingConfig.noShowPolicy,
    },
  ];

  return (
    <section className="bg-brand-cream py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Booking Information"
          title="Good to know"
          subtitle="A few details to keep in mind before you send your request."
        />

        <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4 rounded-2xl bg-surface p-6 shadow-sm shadow-brand-brown/5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-sage-light/30 text-brand-sage">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-brand-brown">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
