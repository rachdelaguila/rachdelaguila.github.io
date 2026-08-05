import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  /** ReactNode so callers can italicize/color one accent word. */
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow className="mb-4">{eyebrow}</Eyebrow> : null}
      <Heading
        id={id}
        className="font-display text-4xl text-ink text-balance sm:text-5xl"
      >
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-ink/70 text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  );
}
