import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Services & Prices" };

export default function ServicesPage() {
  return (
    <ComingSoon
      title="Services & Prices"
      description="The full services page is coming soon — see a summary of our nail and hair services and prices on the Home page for now."
    />
  );
}
