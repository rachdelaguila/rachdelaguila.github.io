import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
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
        "max-w-3xl",
        align === "center" && "mx-auto",
        className,
      )}
    >
      {eyebrow ? (
        <div className={cn(align === "center" && "flex flex-col items-center")}>
          <Eyebrow>{eyebrow}</Eyebrow>
          {/* 2px magenta rule — the accent. */}
          <span aria-hidden className="mt-2 block h-0.5 w-12 bg-magenta" />
        </div>
      ) : null}
      <Heading
        id={id}
        className="font-head mt-5 text-4xl text-ink text-balance sm:text-5xl"
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "measure mt-5 text-lg leading-relaxed text-ink text-pretty",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
