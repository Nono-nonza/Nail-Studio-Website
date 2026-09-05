import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Our Studios" };

export default function OurStudiosPage() {
  return (
    <ComingSoon
      title="Our Studios"
      description="Full details for Studio 1 and Studio 2 — including addresses, opening hours and photos — are coming soon."
    />
  );
}
