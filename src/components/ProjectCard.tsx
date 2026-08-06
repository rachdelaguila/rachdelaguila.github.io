import Link from "next/link";
import type { Project } from "@/content/projects";
import { getPhoto, type PhotoId } from "@/content/photos";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Chip } from "@/components/ui";
import { ArrowRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

type ProjectCardVariant = "featured" | "compact";

type ProjectCardProps = {
  project: Project;
  index: number;
  /** Featured = large primary cards; compact = Additional work row. */
  variant?: ProjectCardVariant;
};

const ROTATIONS = [-2, 2, -1.5, 1.5];

export function ProjectCard({
  project,
  index,
  variant = "featured",
}: ProjectCardProps) {
  const href = `/work/${project.slug}`;
  const titleId = `project-${project.slug}-title`;
  const number = String(index + 1).padStart(2, "0");
  const photo = getPhoto(`work-${project.slug}` as PhotoId);
  const rotate = ROTATIONS[index % ROTATIONS.length];
  const isFeatured = variant === "featured";

  return (
    <article
      aria-labelledby={titleId}
      className={cn(
        "group relative flex h-full border border-ink bg-cream",
        isFeatured
          ? "flex-col p-5 sm:p-7"
          : "flex-col gap-4 p-4 sm:flex-row sm:items-start sm:gap-5 sm:p-5",
      )}
    >
      <div
        className={cn(
          "flex items-start justify-between gap-4",
          !isFeatured && "sm:shrink-0",
        )}
      >
        <PhotoSlot
          photo={photo}
          variant="polaroid"
          rotate={rotate}
          className={isFeatured ? "w-40 sm:w-48" : "w-28 sm:w-32"}
        />
        {isFeatured ? (
          <span className="font-chunk text-3xl text-ink/60 sm:text-4xl">
            {number}
          </span>
        ) : null}
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col",
          isFeatured ? "mt-5" : "sm:min-w-0",
        )}
      >
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {!isFeatured ? (
            <span className="font-chunk text-lg text-ink/50">{number}</span>
          ) : null}
          <span className="mono hl bg-blush text-[10px] text-ink">
            {project.category}
          </span>
          <span className="mono text-[10px] text-ink/70">{project.status}</span>
        </div>

        <h3
          id={titleId}
          className={cn(
            "font-chunk text-ink",
            isFeatured ? "mt-3 text-2xl sm:text-3xl" : "mt-2 text-xl",
          )}
        >
          <Link href={href} className="before:absolute before:inset-0 before:content-['']">
            {project.title}
          </Link>
        </h3>

        <p
          className={cn(
            "flex-1 leading-relaxed text-ink text-pretty",
            isFeatured ? "mt-3" : "mt-2 text-[0.95rem]",
          )}
        >
          {project.summary}
        </p>

        {isFeatured ? (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.themes.slice(0, 3).map((theme, i) => (
              <li key={theme}>
                <Chip highlight={i % 2 === 0 ? "olive" : "blush"} className="text-[10px]">
                  {theme}
                </Chip>
              </li>
            ))}
          </ul>
        ) : null}

        <span
          className={cn(
            "mono inline-flex items-center gap-1.5 text-[11px] text-ink underline decoration-coral decoration-2 underline-offset-4",
            isFeatured ? "mt-6" : "mt-3",
          )}
        >
          View project
          <ArrowRightIcon
            className="transition-transform group-hover:translate-x-1"
            width={16}
            height={16}
          />
        </span>
      </div>
    </article>
  );
}
