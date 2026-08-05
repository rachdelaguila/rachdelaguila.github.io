import type { ShapeName } from "@/components/decor";

/**
 * Presentation-only visual accents per project (kept out of `content/`).
 * Contrast note: on the project-page header the block carries small text, so
 * `onBlock` is chosen to meet AA on that block (e.g. magenta uses the deeper
 * magenta-700 so cream text stays ≥4.5:1).
 */
export type ProjectAccent = {
  block: string;
  onBlock: string;
  bar: string;
  shape: ShapeName;
  shapeColor: string;
};

const ACCENTS: Record<string, ProjectAccent> = {
  almaos: {
    block: "bg-purple",
    onBlock: "text-cream",
    bar: "bg-purple",
    shape: "blob",
    shapeColor: "text-peach",
  },
  "enterprise-ai-adoption": {
    block: "bg-yellow",
    onBlock: "text-ink",
    bar: "bg-ink",
    shape: "rings",
    shapeColor: "text-ink",
  },
  "trading-technology": {
    block: "bg-tangerine",
    onBlock: "text-ink",
    bar: "bg-tangerine",
    shape: "arch",
    shapeColor: "text-cream",
  },
  "symsense-ai": {
    block: "bg-magenta-700",
    onBlock: "text-cream",
    bar: "bg-magenta",
    shape: "dot",
    shapeColor: "text-yellow",
  },
};

const DEFAULT_ACCENT: ProjectAccent = {
  block: "bg-purple",
  onBlock: "text-cream",
  bar: "bg-purple",
  shape: "dot",
  shapeColor: "text-yellow",
};

export function getProjectAccent(slug: string): ProjectAccent {
  return ACCENTS[slug] ?? DEFAULT_ACCENT;
}
