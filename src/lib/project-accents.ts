import type { ShapeName } from "@/components/decor";

/**
 * Presentation-only visual accents per project (kept out of `content/` so the
 * content stays purely editorial). Contrast note: colored blocks only ever
 * carry large text (oversized numbers / headings), and small text lives on
 * light backgrounds, so every pairing here stays readable.
 */
export type ProjectAccent = {
  /** Colored "cover"/band background. */
  block: string;
  /** Text color that sits on `block` (oversized text only). */
  onBlock: string;
  /** Accent underline color (on light backgrounds). */
  bar: string;
  shape: ShapeName;
  shapeColor: string;
};

const ACCENTS: Record<string, ProjectAccent> = {
  almaos: {
    block: "bg-purple",
    onBlock: "text-ivory",
    bar: "bg-purple",
    shape: "blob",
    shapeColor: "text-peach",
  },
  "enterprise-ai-adoption": {
    block: "bg-yellow",
    onBlock: "text-ink",
    bar: "bg-navy",
    shape: "rings",
    shapeColor: "text-navy",
  },
  "trading-technology": {
    block: "bg-tangerine",
    onBlock: "text-ink",
    bar: "bg-tangerine",
    shape: "arch",
    shapeColor: "text-columbia",
  },
  "symsense-ai": {
    block: "bg-magenta",
    onBlock: "text-ivory",
    bar: "bg-magenta",
    shape: "dot",
    shapeColor: "text-yellow",
  },
};

const DEFAULT_ACCENT: ProjectAccent = {
  block: "bg-navy",
  onBlock: "text-ivory",
  bar: "bg-navy",
  shape: "dot",
  shapeColor: "text-yellow",
};

export function getProjectAccent(slug: string): ProjectAccent {
  return ACCENTS[slug] ?? DEFAULT_ACCENT;
}
