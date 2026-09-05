import { GalleryImage } from "./types";

/**
 * Gallery images sourced from the client's real photographs.
 *
 * This list is intentionally empty until real photos are supplied — do not
 * add placeholder or AI-generated images of nail/hair work here. Drop client
 * photo files into `public/images/{nails,hair,studios}/` and add an entry
 * per image below; see `public/images/README.md` for the exact steps.
 */
export const galleryImages: GalleryImage[] = [];

export const getGalleryByCategory = (category: GalleryImage["category"]) =>
  galleryImages.filter((image) => image.category === category);
