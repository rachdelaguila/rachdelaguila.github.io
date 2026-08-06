import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  eyebrowHighlight?: "blush" | "olive";
  title: ReactNode;
  description?: string;
  /** Coral display title (headlines only). */
  coral?: boolean;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  id,
  eyebrow,
  eyebrowHighlight = "olive",
  title,
  description,
  coral = false,
  align = "left",
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <Eyebrow highlight={eyebrowHighlight}>{eyebrow}</Eyebrow>
      ) : null}
      <Heading
        id={id}
        className={cn(
          "font-display mt-5 text-4xl text-balance sm:text-5xl",
          coral ? "text-coral" : "text-ink",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "measure mt-5 leading-relaxed text-ink text-pretty",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
