/**
 * Presentation-only visual accents per project (kept out of `content/`).
 * In the Y2K editorial reskin, the accent is a thin color bar + a small corner
 * stamp (target or checkerboard). Numerals are ink outline-stroke, so no text
 * ever sits on a colored block.
 */
export type ProjectAccent = {
  /** Micro color bar (8px) + dot color. */
  bar: string;
  /** Corner stamp. */
  stamp: "rings" | "checker";
  /** Color class for the stamp. */
  stampColor: string;
};

const ACCENTS: Record<string, ProjectAccent> = {
  almaos: { bar: "bg-violet", stamp: "checker", stampColor: "text-ink" },
  "enterprise-ai-adoption": {
    bar: "bg-magenta",
    stamp: "rings",
    stampColor: "text-magenta",
  },
  "trading-technology": {
    bar: "bg-tangerine",
    stamp: "checker",
    stampColor: "text-ink",
  },
  "symsense-ai": { bar: "bg-violet", stamp: "rings", stampColor: "text-violet" },
};

const DEFAULT_ACCENT: ProjectAccent = {
  bar: "bg-ink",
  stamp: "checker",
  stampColor: "text-ink",
};

export function getProjectAccent(slug: string): ProjectAccent {
  return ACCENTS[slug] ?? DEFAULT_ACCENT;
}
