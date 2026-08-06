import type { ReactNode, SVGProps } from "react";
import { cn } from "@/lib/utils";

/* Warm-editorial primitives: mono highlighter labels, script notes, gold marks. */

type Highlight = "blush" | "olive" | "none";

const HL: Record<Highlight, string> = {
  blush: "hl bg-blush",
  olive: "hl bg-olive",
  none: "",
};

/** Mono kicker/label with a highlighter background (WANDA move). */
export function Eyebrow({
  children,
  highlight = "olive",
  className,
}: {
  children: ReactNode;
  highlight?: Highlight;
  className?: string;
}) {
  return (
    <span
      className={cn("mono inline-block text-[11px] text-ink", HL[highlight], className)}
    >
      {children}
    </span>
  );
}

/** Mono tag with a highlighter background. */
export function Chip({
  children,
  highlight = "blush",
  className,
}: {
  children: ReactNode;
  highlight?: Highlight;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "mono inline-flex items-center text-[11px] text-ink",
        HL[highlight],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Handwritten violet annotation (decorative; max three site-wide). */
export function ScriptNote({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span aria-hidden className={cn("script text-2xl", className)}>
      {children}
    </span>
  );
}

/** Small gold star mark (micro-accent). */
export function Star(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M12 1.5c.4 4.9 2.1 8.6 10.5 10.5C14.1 13.9 12.4 17.6 12 22.5c-.4-4.9-2.1-8.6-10.5-10.5C9.9 10.1 11.6 6.4 12 1.5Z"
      />
    </svg>
  );
}

/** One small sun/star stamp for the footer (the single wink). */
export function SunStamp(props: SVGProps<SVGSVGElement>) {
  const rays = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2;
    const x1 = 24 + Math.cos(a) * 15;
    const y1 = 24 + Math.sin(a) * 15;
    const x2 = 24 + Math.cos(a) * 22;
    const y2 = 24 + Math.sin(a) * 22;
    return (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    );
  });
  return (
    <svg viewBox="0 0 48 48" aria-hidden focusable="false" {...props}>
      <circle cx="24" cy="24" r="11" fill="none" stroke="currentColor" strokeWidth="2" />
      {rays}
    </svg>
  );
}
