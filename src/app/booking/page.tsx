import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Booking" };

export default function BookingPage() {
  return (
    <ComingSoon
      title="Request a Booking"
      description="The WhatsApp booking request form is being built next. In the meantime, please contact us directly via WhatsApp."
    />
  );
}
