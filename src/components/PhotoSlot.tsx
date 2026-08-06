import type { CSSProperties } from "react";
import type { Photo } from "@/content/photos";
import { cn } from "@/lib/utils";

const CROP_ASPECT: Record<Photo["crop"], string> = {
  landscape: "aspect-[16/10]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

type PhotoSlotProps = {
  photo: Photo;
  variant?: "plain" | "polaroid";
  /** Rotation in degrees for polaroids (kept within ±3). */
  rotate?: number;
  className?: string;
  /** Override the placeholder block color/text (e.g. the darker hero slot). */
  placeholderClassName?: string;
};

function Inner({ photo, placeholderClassName }: Pick<PhotoSlotProps, "photo" | "placeholderClassName">) {
  return (
    <div
      className={cn(
        "flex items-center justify-center overflow-hidden",
        CROP_ASPECT[photo.crop],
        placeholderClassName ?? "bg-blush",
      )}
    >
      {photo.src ? (
        // Static export; unoptimized <img> is intentional. b&w treatment, lazy.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full grayscale object-cover"
        />
      ) : (
        <span className="mono px-3 text-center text-[11px] text-ink/70">
          Photo · {photo.subject}
        </span>
      )}
    </div>
  );
}

export function PhotoSlot({
  photo,
  variant = "plain",
  rotate = 0,
  className,
  placeholderClassName,
}: PhotoSlotProps) {
  const clampedRotate = Math.max(-3, Math.min(3, rotate));
  const style: CSSProperties =
    variant === "polaroid" ? { transform: `rotate(${clampedRotate}deg)` } : {};

  if (variant === "polaroid") {
    return (
      <figure className={cn("polaroid p-2.5 pb-3", className)} style={style}>
        <div className="border border-ink/15">
          <Inner photo={photo} placeholderClassName={placeholderClassName} />
        </div>
        {photo.credit ? (
          <figcaption className="mono mt-2 text-[10px] text-ink/70">
            {photo.credit}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure className={cn("flex flex-col", className)}>
      <div className="border border-ink">
        <Inner photo={photo} placeholderClassName={placeholderClassName} />
      </div>
      {photo.credit ? (
        <figcaption className="mono mt-2 text-[10px] text-ink/70">
          {photo.credit}
        </figcaption>
      ) : null}
    </figure>
  );
}
