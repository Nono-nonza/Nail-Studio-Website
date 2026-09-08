import Image from "next/image";
import { GalleryImage } from "@/data/types";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

interface GalleryGridProps {
  images: GalleryImage[];
  /** Shown as placeholder tile labels until real photos replace them. */
  fallbackLabels: string[];
}

export function GalleryGrid({ images, fallbackLabels }: GalleryGridProps) {
  if (images.length > 0) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
        {images.map((image) => (
          <div key={image.id} className="shadow-clay photo-sheen relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 640px) 33vw, 50vw"
              className="photo-warm object-cover"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
      {fallbackLabels.map((label) => (
        <PlaceholderImage key={label} label={label} className="aspect-[4/5] rounded-2xl" />
      ))}
    </div>
  );
}
