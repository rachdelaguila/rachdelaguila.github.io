import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/*
 * Original retro-pop decorative primitives built from SVG/CSS — no third-party
 * illustrations. All are purely decorative and marked aria-hidden. Color is
 * driven by `currentColor`, so callers set it with a text-color utility
 * (e.g. `className="text-magenta"`).
 */

type ShapeProps = {
  className?: string;
  style?: CSSProperties;
};

/** Soft organic blob. */
export function Blob({ className, style }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden
      focusable="false"
      className={cn("h-full w-full", className)}
      style={style}
    >
      <path
        fill="currentColor"
        d="M42.6 -63.5C55.9 -55.4 67.7 -44.5 73.4 -30.9C79 -17.2 78.5 -0.9 74.1 13.9C69.7 28.8 61.4 42.1 49.6 51.9C37.8 61.7 22.5 68 5.6 71.9C-11.3 75.8 -29.7 77.3 -44.3 70.1C-58.9 62.9 -69.6 47 -74.6 30.2C-79.6 13.5 -78.9 -4.2 -73.4 -19.9C-67.9 -35.6 -57.6 -49.3 -44.4 -57.7C-31.2 -66.1 -15.6 -69.2 -0.2 -68.9C15.3 -68.6 30.5 -64.9 42.6 -63.5Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

/** Rounded 1970s arch / doorway. */
export function Arch({ className, style }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 120 160"
      aria-hidden
      focusable="false"
      className={cn("h-full w-full", className)}
      style={style}
    >
      <path
        fill="currentColor"
        d="M60 0C26.9 0 0 26.9 0 60v100h120V60C120 26.9 93.1 0 60 0Z"
      />
    </svg>
  );
}

/** Concentric-ray sunburst. */
export function Sunburst({ className, style }: ShapeProps) {
  const rays = 24;
  const paths = Array.from({ length: rays }, (_, i) => {
    const angle = (i / rays) * Math.PI * 2;
    const next = ((i + 0.5) / rays) * Math.PI * 2;
    const r = 100;
    const x1 = 100 + Math.cos(angle) * r;
    const y1 = 100 + Math.sin(angle) * r;
    const x2 = 100 + Math.cos(next) * r;
    const y2 = 100 + Math.sin(next) * r;
    return `M100 100 L${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)} Z`;
  });
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden
      focusable="false"
      className={cn("h-full w-full", className)}
      style={style}
    >
      {paths.map((d, i) => (
        <path key={i} d={d} fill="currentColor" />
      ))}
    </svg>
  );
}

/** Simple filled circle. */
export function Dot({ className, style }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden
      focusable="false"
      className={cn("h-full w-full", className)}
      style={style}
    >
      <circle cx="50" cy="50" r="50" fill="currentColor" />
    </svg>
  );
}

/** Concentric-ring target. */
export function Rings({ className, style }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden
      focusable="false"
      className={cn("h-full w-full", className)}
      style={style}
    >
      {[48, 34, 20, 8].map((r, i) => (
        <circle
          key={r}
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={i % 2 === 0 ? 6 : 4}
        />
      ))}
    </svg>
  );
}

/** Wavy quarter-circle stack (retro rainbow arcs, single color). */
export function ArcStack({ className, style }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden
      focusable="false"
      className={cn("h-full w-full", className)}
      style={style}
    >
      {[120, 88, 56, 24].map((size, i) => (
        <path
          key={size}
          d={`M0 120 A${size} ${size} 0 0 1 ${size} 120 Z`}
          fill="none"
          stroke="currentColor"
          strokeWidth={10}
          opacity={1 - i * 0.12}
        />
      ))}
    </svg>
  );
}

export type ShapeName = "blob" | "arch" | "rings" | "dot" | "sunburst" | "arcstack";

/** Render a named decorative shape (used by project accents). */
export function AccentShape({
  shape,
  className,
  style,
}: ShapeProps & { shape: ShapeName }) {
  switch (shape) {
    case "blob":
      return <Blob className={className} style={style} />;
    case "arch":
      return <Arch className={className} style={style} />;
    case "rings":
      return <Rings className={className} style={style} />;
    case "sunburst":
      return <Sunburst className={className} style={style} />;
    case "arcstack":
      return <ArcStack className={className} style={style} />;
    default:
      return <Dot className={className} style={style} />;
  }
}

type WaveProps = ShapeProps & {
  /** Flip vertically so the wave can sit at the top or bottom of a band. */
  flip?: boolean;
};

/** Full-width wave divider between color bands. Fill is the band being entered. */
export function WaveDivider({ className, style, flip }: WaveProps) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden
      focusable="false"
      className={cn("block h-[40px] w-full sm:h-[64px]", className)}
      style={{ transform: flip ? "scaleY(-1)" : undefined, ...style }}
    >
      <path
        fill="currentColor"
        d="M0 40C120 10 240 0 360 12s240 46 360 46 240-34 360-40 240 8 360 22v40H0Z"
      />
    </svg>
  );
}
