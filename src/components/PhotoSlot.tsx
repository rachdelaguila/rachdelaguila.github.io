import { cn } from "@/lib/utils";

/**
 * Editorial photo slot: black & white only (no tint), 1px ink border, square
 * or 3:4 crop, with an 11px caps caption underneath like a photo credit. With
 * no `src`, it renders a labeled placeholder. When a real photo is added, pass
 * `src`/`alt`; explicit width/height + lazy loading keep the speed floor.
 */
type PhotoSlotProps = {
  label: string;
  caption?: string;
  alt?: string;
  src?: string;
  className?: string;
  aspect?: string;
  width?: number;
  height?: number;
};

export function PhotoSlot({
  label,
  caption,
  alt,
  src,
  className,
  aspect = "aspect-[3/4]",
  width = 800,
  height = 1000,
}: PhotoSlotProps) {
  return (
    <figure className={cn("flex flex-col", className)}>
      <div
        className={cn(
          "bw-photo relative flex items-center justify-center overflow-hidden border border-ink bg-paper",
          aspect,
        )}
      >
        {src ? (
          // Static export uses unoptimized images; a plain <img> is intentional.
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
          <span className="font-condensed pointer-events-none px-4 text-center text-[11px] text-ink/60">
            {label}
          </span>
        )}
      </div>
      {caption ? (
        <figcaption className="font-condensed mt-2 text-[10px] text-ink/70">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
