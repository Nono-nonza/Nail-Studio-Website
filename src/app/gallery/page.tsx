import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <ComingSoon
      title="Gallery"
      description="Real client photos of our nail art, hair styling and studios will be added here soon."
    />
  );
}
