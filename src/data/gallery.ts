import { GalleryImage } from "./types";

/**
 * Gallery images sourced from the client's real photographs.
 *
 * All 21 approved Nails photos are represented here. Some also appear
 * elsewhere on the site (homepage hero, Featured Service, Nail Art examples,
 * Pedicure example) — that overlap is intentional, not a duplicate to remove.
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
  {
    id: "029783fd",
    src: "/images/nails/029783fd-5b14-4723-b00a-8501c22f70d3.JPG",
    alt: "Mint green and pink nails with dotted line and floral accent nail art",
    category: "nails",
  },
  {
    id: "15ef949c",
    src: "/images/nails/15ef949c-2d8a-4df0-b6d6-0aa2acaa6a4f.JPG",
    alt: "Glossy black nails with a silver holographic glitter ombre tip",
    category: "nails",
  },
  {
    id: "1b529a16",
    src: "/images/nails/1b529a16-0813-4dae-adcf-88ee2f145abc.JPG",
    alt: "Glossy orange almond nails held around a small potted aloe plant",
    category: "nails",
  },
  {
    id: "37d0b4af",
    src: "/images/nails/37d0b4af-26af-417a-b5ce-df56d4083170_2.JPG",
    alt: "Long pink coffin nails with an abstract colour-block accent nail",
    category: "nails",
  },
  {
    id: "4400b67f",
    src: "/images/nails/4400b67f-2db5-4278-93c8-c76036936a41.JPG",
    alt: "Pale pink nails with black heart accents and silver glitter, held around a mug reading 'The Nail Studio'",
    category: "nails",
  },
  {
    id: "494edf64",
    src: "/images/nails/494edf64-6599-48f1-97d9-a14ff3c1ed5b.JPG",
    alt: "Olive green nails with a white daisy accent nail, held near a pink rose beside the 'Welcome to The Nail Studio' sign",
    category: "nails",
  },
  {
    id: "7698f1d9",
    src: "/images/nails/7698f1d9-1ed2-4078-9871-3cff7d52ee73.JPG",
    alt: "Lilac coffin nails with a black polka-dot and orange accent nail, resting on a fuzzy pink glove",
    category: "nails",
  },
  {
    id: "8f5e315b",
    src: "/images/nails/8f5e315b-d0e8-4718-88e2-e4df546924df.JPG",
    alt: "Glossy sheer pink shimmer almond nails",
    category: "nails",
  },
  {
    id: "a74dab84",
    src: "/images/nails/a74dab84-c2e5-4dc5-a79b-2c3d3bba5dfc.JPG",
    alt: "Olive green nails with a white polka-dot accent nail, held near a pink rose beside the 'Welcome to The Nail Studio' sign",
    category: "nails",
  },
  {
    id: "8ec75da4",
    src: "/images/nails/8ec75da4-79c3-473d-996f-1c7afe620aeb.JPG",
    alt: "Pastel pink, blue, orange and yellow abstract French-tip nail art",
    category: "nails",
  },
  {
    id: "552d0da6",
    src: "/images/nails/552d0da6-42cc-403b-8c71-61ecd331fa6a.JPG",
    alt: "Bright red glossy nails with delicate gold chain nail art on an accent nail",
    category: "nails",
  },
  {
    id: "9f518244",
    src: "/images/nails/9f518244-734e-4e20-9ab1-e6672fdfc21f.JPG",
    alt: "Nude nails with a white daisy accent and tiny smiley-face details",
    category: "nails",
  },
  {
    id: "16040525",
    src: "/images/nails/16040525-4ec4-4ecd-b92e-1d0395aca238.JPG",
    alt: "Glossy nude nails with a fine dark ombre tip, styled among candles and flowers at The Nail Studio",
    category: "nails",
  },
  {
    id: "5b866e71",
    src: "/images/nails/5b866e71-c9a8-4f8f-b878-c38a283c679b.JPG",
    alt: "Glossy nude nails with delicate gold glitter tips, showcased at The Nail Studio",
    category: "nails",
  },
];

export const getGalleryByCategory = (category: GalleryImage["category"]) =>
  galleryImages.filter((image) => image.category === category);
