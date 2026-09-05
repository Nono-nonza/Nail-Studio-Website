import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <ComingSoon
      title="About The Nail Studio"
      description="Our full story, values and team introduction are coming soon."
    />
  );
}
