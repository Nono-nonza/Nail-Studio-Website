import type { Metadata } from "next";
import { policies } from "@/data/policies";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: policies.bookingPolicy.title,
  description:
    "The Nail Studio's booking window, cancellation and rescheduling notice, grace period and no-show policy.",
};

export default function BookingPolicyPage() {
  return (
    <ComingSoon
      title={policies.bookingPolicy.title}
      description={policies.bookingPolicy.content.join(" ")}
    />
  );
}
