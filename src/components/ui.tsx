import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* Shared retro-pop UI primitives. */

type Accent = "magenta" | "purple" | "tangerine" | "yellow";

/** Uppercase eyebrow label in a small ink-bordered pill. */
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
        "inline-flex items-center rounded-full border-[1.5px] border-ink bg-cream px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.15em] text-ink",
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
    hover: "hover:border-magenta-700 hover:bg-magenta-700 hover:text-cream",
  },
  purple: {
    dot: "bg-purple",
    hover: "hover:border-purple hover:bg-purple hover:text-cream",
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
 * Tag chip: ink border + colored dot; on hover it fills with the accent.
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
        "inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink bg-cream px-3.5 py-1.5 text-sm font-medium text-ink transition-colors",
        a.hover,
        className,
      )}
    >
      <span aria-hidden className={cn("h-2 w-2 flex-none rounded-full", a.dot)} />
      {children}
    </span>
  );
}

const STICKER_COLOR: Record<Accent, string> = {
  magenta: "bg-magenta-700 text-cream",
  purple: "bg-purple text-cream",
  tangerine: "bg-tangerine text-ink",
  yellow: "bg-yellow text-ink",
};

/** Rotated sticker badge with a thick ink border + hard offset shadow. */
export function Sticker({
  children,
  color = "yellow",
  className,
  decorative = false,
}: {
  children: ReactNode;
  color?: Accent;
  className?: string;
  decorative?: boolean;
}) {
  return (
    <span
      {...(decorative ? { "aria-hidden": true } : {})}
      className={cn(
        "inline-block rounded-2xl border-2 border-ink px-4 py-2 text-sm font-bold shadow-pop-sm",
        STICKER_COLOR[color],
        className,
      )}
    >
      {children}
    </span>
  );
}
