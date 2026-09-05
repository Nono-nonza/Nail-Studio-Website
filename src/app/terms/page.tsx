import type { Metadata } from "next";
import { policies } from "@/data/policies";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: policies.terms.title,
  description: "The Nail Studio's Terms and Conditions for using this website and our services.",
};

export default function TermsPage() {
  return (
    <ComingSoon title={policies.terms.title} description={policies.terms.content.join(" ")} />
  );
}
