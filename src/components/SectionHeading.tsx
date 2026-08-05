import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** "dark" is for use on vivid/dark backgrounds (light text). */
  tone?: "light" | "dark";
  /** Tailwind text-color class for the eyebrow accent. */
  eyebrowClassName?: string;
  /** Heading level for correct document outline. Defaults to h2. */
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
  tone = "light",
  eyebrowClassName,
  as: Heading = "h2",
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-sm font-semibold uppercase tracking-[0.2em]",
            eyebrowClassName ?? (isDark ? "text-yellow" : "text-magenta"),
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Heading
        id={id}
        className={cn(
          "font-serif text-3xl font-semibold tracking-tight text-balance sm:text-4xl",
          isDark ? "text-ivory" : "text-navy",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed text-pretty",
            isDark ? "text-ivory/80" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
