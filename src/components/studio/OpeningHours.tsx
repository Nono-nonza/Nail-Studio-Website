import { Clock } from "lucide-react";
import { DayHours, TBD } from "@/data/types";

interface OpeningHoursProps {
  hours: DayHours[];
  /** Hide the built-in "Opening Hours" heading when the parent already provides one. */
  showHeading?: boolean;
}

export function OpeningHours({ hours, showHeading = true }: OpeningHoursProps) {
  const allTbd = hours.every((h) => h.hours === TBD);

  return (
    <div>
      {showHeading ? (
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-brand-brown">
          <Clock className="h-4 w-4 text-brand-sage" />
          Opening Hours
        </div>
      ) : null}

      {allTbd ? (
        <p className="text-sm leading-relaxed text-muted-foreground">
          Opening hours are being confirmed — message us on WhatsApp and we&apos;ll let you know
          our current hours.
        </p>
      ) : (
        <ul className="space-y-1 text-sm text-muted-foreground">
          {hours.map((entry) => (
            <li key={entry.day} className="flex justify-between gap-6">
              <span>{entry.day}</span>
              <span>{entry.hours === TBD ? "To be confirmed" : entry.hours}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
