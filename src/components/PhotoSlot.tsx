import { cn } from "@/lib/utils";

/**
 * Duotone-ready image slot. With no `src`, it renders a labeled ink-on-lilac
 * placeholder block (condensed caps). When a real photo is added later, pass
 * `src`/`alt`; the `.duotone` wrapper applies a grayscale base with a magenta
 * multiply on hover. No stock photography is used.
 */
type PhotoSlotProps = {
  label: string;
  alt?: string;
  src?: string;
  className?: string;
  /** aspect-ratio utility, e.g. "aspect-[3/4]". */
  aspect?: string;
  /** Explicit intrinsic dimensions for the future image (avoids CLS). */
  width?: number;
  height?: number;
};

export function PhotoSlot({
  label,
  alt,
  src,
  className,
  aspect = "aspect-[3/4]",
  width = 800,
  height = 1000,
}: PhotoSlotProps) {
  return (
    <div
      className={cn(
        "duotone relative flex items-center justify-center overflow-hidden rounded-[6px] border border-ink bg-lilac",
        aspect,
        className,
      )}
    >
      {src ? (
        // Static export uses unoptimized images; a plain <img> is intentional
        // here so a future photo drops into the duotone treatment directly.
        // Explicit width/height + lazy loading keep CLS and the speed floor in check.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt ?? ""}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <span className="font-condensed pointer-events-none px-4 text-center text-[11px] text-ink/70">
          {label}
        </span>
      )}
    </div>
  );
}
