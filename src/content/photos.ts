/**
 * Photo / artwork manifest — the collage system is built around imagery.
 *
 * Real, owned files go in `/public/photos/`. Until `src` is set, each slot
 * renders a same-dimension editorial graphic from `EditorialArt` so the layout
 * stays final. When photos land: black & white or warm-muted, with a mono
 * caption credit underneath. Do NOT use stock photography.
 */
export type PhotoCrop = "landscape" | "portrait" | "square";

export type Photo = {
  /** Short label used in credits and internal docs. */
  subject: string;
  alt: string;
  section: string;
  crop: PhotoCrop;
  /** Set to `/photos/<file>` once a real image is added. */
  src?: string;
  /** Mono caption credit shown under the slot. */
  credit?: string;
};

export const photos = {
  hero: {
    subject: "Rachelle — portrait",
    alt: "Portrait of Rachelle Del Aguila",
    section: "hero",
    crop: "landscape",
    credit: "Portrait · editorial mark",
  },
  "work-almaos": {
    subject: "AlmaOS",
    alt: "Editorial graphic for AlmaOS — recovery, rhythm, and privacy motifs",
    section: "work",
    crop: "portrait",
    credit: "AlmaOS · editorial",
  },
  "work-enterprise-ai-adoption": {
    subject: "Enterprise AI",
    alt: "Editorial graphic for Enterprise AI Adoption — systems and workflow motifs",
    section: "work",
    crop: "portrait",
    credit: "Enterprise · editorial",
  },
  "work-trading-technology": {
    subject: "Trading tech",
    alt: "Editorial graphic for Trading Technology — structured flow motifs",
    section: "work",
    crop: "portrait",
    credit: "Trading · editorial",
  },
  "work-symsense-ai": {
    subject: "SymSense AI",
    alt: "Editorial graphic for SymSense AI — discovery and listening motifs",
    section: "work",
    crop: "portrait",
    credit: "SymSense · editorial",
  },
  about: {
    subject: "Rachelle — portrait",
    alt: "Portrait of Rachelle Del Aguila",
    section: "about",
    crop: "portrait",
    credit: "Portrait · editorial mark",
  },
  writing: {
    subject: "Writing desk",
    alt: "Editorial graphic for Writing — notes and page motifs",
    section: "writing",
    crop: "landscape",
    credit: "Writing · editorial",
  },
} satisfies Record<string, Photo>;

export type PhotoId = keyof typeof photos;

export function getPhoto(id: PhotoId): Photo {
  return photos[id];
}
