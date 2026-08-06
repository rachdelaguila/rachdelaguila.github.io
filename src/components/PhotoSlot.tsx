import type { CSSProperties } from "react";
import type { Photo, PhotoId } from "@/content/photos";
import { EditorialArt } from "@/components/EditorialArt";
import { cn } from "@/lib/utils";

const CROP_ASPECT: Record<Photo["crop"], string> = {
  landscape: "aspect-[16/10]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

type PhotoSlotProps = {
  /** Manifest key — used to select editorial artwork when `src` is unset. */
  id: PhotoId;
  photo: Photo;
  variant?: "plain" | "polaroid";
  /** Rotation in degrees for polaroids (kept within ±3). */
  rotate?: number;
  className?: string;
  /** Override the empty-slot background when no artwork is available. */
  placeholderClassName?: string;
};

function Inner({
  id,
  photo,
  placeholderClassName,
}: Pick<PhotoSlotProps, "id" | "photo" | "placeholderClassName">) {
  if (photo.src) {
    return (
      <div
        className={cn(
          "flex items-center justify-center overflow-hidden",
          CROP_ASPECT[photo.crop],
        )}
      >
        {/* Static export; unoptimized <img> is intentional. b&w treatment, lazy. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full grayscale object-cover"
        />
      </div>
    );
  }

  return <EditorialArt id={id} className={placeholderClassName} />;
}

export function PhotoSlot({
  id,
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
          <Inner
            id={id}
            photo={photo}
            placeholderClassName={placeholderClassName}
          />
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
        <Inner
          id={id}
          photo={photo}
          placeholderClassName={placeholderClassName}
        />
      </div>
      {photo.credit ? (
        <figcaption className="mono mt-2 text-[10px] text-ink/70">
          {photo.credit}
        </figcaption>
      ) : null}
    </figure>
  );
}
