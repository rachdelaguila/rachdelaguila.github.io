import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* Hard-editorial primitives: type + rules, no shapes. */

/** Kicker / label: 11px grotesque caps, ink. */
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
        "font-condensed inline-block text-[11px] text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}

/**
 * Tag: squared, 1px ink border, grotesque caps. Hover inverts (ink fill,
 * paper text). No color fills, no radius, no shadow.
 */
export function Chip({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "invert-hover font-condensed inline-flex items-center border border-ink px-3 py-1.5 text-[11px] text-ink hover:bg-ink hover:text-paper",
        className,
      )}
    >
      {children}
    </span>
  );
}
