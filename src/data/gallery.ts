import { GalleryImage } from "./types";

/**
 * Gallery images sourced from the client's real photographs.
 *
 * This list intentionally contains only the specific photos approved for
 * Gallery placement — not every photo supplied in `public/images/nails/`.
 * Two approved photos (`16040525-...JPG` and `5b866e71-...JPG`) are reserved
 * exclusively for the homepage and are not repeated here.
 */
export const galleryImages: GalleryImage[] = [
  {
    id: "c69482ef",
    src: "/images/nails/c69482ef-8dbf-4252-bbaf-a86bfdeab230.JPG",
    alt: "Sky-blue French-tip almond nails with a white daisy accent",
    category: "nails",
  },
  {
    id: "28e23bc3",
    src: "/images/nails/28e23bc3-e004-4c4c-965f-0f3a464cdc8a.JPG",
    alt: "Black gel pedicure with a white star accent nail, worn with strappy studded sandals",
    category: "nails",
  },
  {
    id: "d81a73b3",
    src: "/images/nails/d81a73b3-44a0-41b4-9d3a-fec7d1830446.JPG",
    alt: "Glossy peachy-nude square nails held around a small plant pot",
    category: "nails",
  },
  {
    id: "c67709c5",
    src: "/images/nails/c67709c5-7184-4a29-b4c3-3c1d089a2c10.JPG",
    alt: "Nude nails with teal, gold and burgundy geometric accent nails near white roses",
    category: "nails",
  },
  {
    id: "b1c4f59a",
    src: "/images/nails/b1c4f59a-3797-4bc9-b067-5cf247290256.JPG",
    alt: "Glossy black coffin nails with a pale pink heart-accent nail",
    category: "nails",
  },
  {
    id: "b8fca303",
    src: "/images/nails/b8fca303-a858-455d-9ee6-e6bf0818aa87.JPG",
    alt: "Deep red glossy almond nails near a 'Smile' studio sign",
    category: "nails",
  },
  {
    id: "bb38ba12",
    src: "/images/nails/bb38ba12-c101-4fd1-a324-ac20096a60ce.JPG",
    alt: "Nude nails with orange and white swirl French-tip art, held near a pink flower and 'Welcome to The Nail Studio' sign",
    category: "nails",
  },
];

export const getGalleryByCategory = (category: GalleryImage["category"]) =>
  galleryImages.filter((image) => image.category === category);
