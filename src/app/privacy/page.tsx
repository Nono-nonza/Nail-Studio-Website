import type { Metadata } from "next";
import { policies } from "@/data/policies";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: policies.privacy.title };

export default function PrivacyPage() {
  return (
    <ComingSoon title={policies.privacy.title} description={policies.privacy.content.join(" ")} />
  );
}
