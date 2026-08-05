import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
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
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-coral">
          {eyebrow}
        </p>
      ) : null}
      <Heading
        id={id}
        className="font-serif text-3xl font-semibold tracking-tight text-navy text-balance sm:text-4xl"
      >
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-muted text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  );
}
