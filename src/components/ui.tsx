import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* Shared Y2K editorial UI primitives. */

type Accent = "magenta" | "violet" | "tangerine" | "yellow";

/** Uppercase condensed kicker/eyebrow in a small ink-bordered pill. */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-condensed inline-flex items-center rounded-full border border-ink bg-paper px-3 py-1 text-[11px] text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}

const CHIP_ACCENT: Record<Accent, { dot: string; hover: string }> = {
  magenta: {
    dot: "bg-magenta",
    hover: "hover:border-magenta-700 hover:bg-magenta-700 hover:text-paper",
  },
  violet: {
    dot: "bg-violet",
    hover: "hover:border-violet hover:bg-violet hover:text-paper",
  },
  tangerine: {
    dot: "bg-tangerine",
    hover: "hover:border-tangerine hover:bg-tangerine hover:text-ink",
  },
  yellow: {
    dot: "bg-yellow",
    hover: "hover:border-yellow hover:bg-yellow hover:text-ink",
  },
};

/**
 * Tag chip: ink border + micro-accent dot; on hover it fills with the accent.
 * Hover text colors are chosen per accent to stay AA-legible.
 */
export function Chip({
  children,
  accent = "magenta",
  className,
}: {
  children: ReactNode;
  accent?: Accent;
  className?: string;
}) {
  const a = CHIP_ACCENT[accent];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-ink bg-paper px-3.5 py-1.5 text-sm font-medium text-ink transition-colors",
        a.hover,
        className,
      )}
    >
      <span aria-hidden className={cn("h-2 w-2 flex-none rounded-full", a.dot)} />
      {children}
    </span>
  );
}

type StickerColor = Accent | "chrome";

const STICKER_COLOR: Record<StickerColor, string> = {
  magenta: "bg-magenta-700 text-paper border-ink",
  violet: "bg-violet text-paper border-ink",
  tangerine: "bg-tangerine text-ink border-ink",
  yellow: "bg-yellow text-ink border-ink",
  chrome: "chrome-fill text-ink border-ink",
};

/** Rotated sticker badge with a thin ink border + hard offset shadow. */
export function Sticker({
  children,
  color = "chrome",
  className,
  decorative = false,
}: {
  children: ReactNode;
  color?: StickerColor;
  className?: string;
  decorative?: boolean;
}) {
  return (
    <span
      {...(decorative ? { "aria-hidden": true } : {})}
      className={cn(
        "font-condensed inline-block rounded-[6px] border px-4 py-2 text-xs shadow-pop-sm",
        STICKER_COLOR[color],
        className,
      )}
    >
      {children}
    </span>
  );
}
