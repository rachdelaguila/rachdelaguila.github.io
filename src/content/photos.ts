/**
 * Photo manifest — the collage system is built around images.
 *
 * Real files go in `/public/photos/`. Until they exist, `src` stays undefined
 * and every slot renders a same-dimension styled placeholder, so photos drop
 * in later with ZERO layout change. Treatment when photos land: black & white
 * or warm-muted, with a mono caption credit underneath. Do NOT use stock
 * photography — supply real, owned images.
 */
export type PhotoCrop = "landscape" | "portrait" | "square";

export type Photo = {
  /** Subject shown in the placeholder label. */
  subject: string;
  alt: string;
  section: string;
  crop: PhotoCrop;
  /** Set to `/photos/<file>` once a real image is added. */
  src?: string;
  /** Mono caption credit shown under the photo. */
  credit?: string;
};

export const photos = {
  hero: {
    subject: "Rachelle — portrait",
    alt: "Portrait of Rachelle Del Aguila",
    section: "hero",
    crop: "landscape",
    credit: "Portrait · b&w",
  },
  "work-almaos": {
    subject: "AlmaOS",
    alt: "AlmaOS project imagery",
    section: "work",
    crop: "portrait",
    credit: "AlmaOS · b&w",
  },
  "work-enterprise-ai-adoption": {
    subject: "Enterprise AI",
    alt: "Enterprise AI adoption imagery",
    section: "work",
    crop: "portrait",
    credit: "Enterprise · b&w",
  },
  "work-trading-technology": {
    subject: "Trading tech",
    alt: "Trading technology imagery",
    section: "work",
    crop: "portrait",
    credit: "Trading · b&w",
  },
  "work-symsense-ai": {
    subject: "SymSense AI",
    alt: "SymSense AI imagery",
    section: "work",
    crop: "portrait",
    credit: "SymSense · b&w",
  },
  about: {
    subject: "Rachelle — portrait",
    alt: "Portrait of Rachelle Del Aguila",
    section: "about",
    crop: "portrait",
    credit: "Portrait · b&w",
  },
  writing: {
    subject: "Writing desk",
    alt: "Writing / desk imagery",
    section: "writing",
    crop: "landscape",
    credit: "Writing · b&w",
  },
} satisfies Record<string, Photo>;

export type PhotoId = keyof typeof photos;

export function getPhoto(id: PhotoId): Photo {
  return photos[id];
}
