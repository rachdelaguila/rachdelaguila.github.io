import Link from "next/link";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";
import { getProjectAccent } from "@/lib/project-accents";
import { ArrowRightIcon } from "@/components/icons";
import { AccentShape } from "@/components/decor";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const href = `/work/${project.slug}`;
  const titleId = `project-${project.slug}-title`;
  const accent = getProjectAccent(project.slug);
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      aria-labelledby={titleId}
      className="hover-pop group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-ink bg-cream shadow-pop"
    >
      {/* Editorial "cover": colored block with an oversized number + shape. */}
      <div className={cn("relative h-36 overflow-hidden border-b-2 border-ink", accent.block)}>
        <AccentShape
          shape={accent.shape}
          className={cn(
            "absolute -right-6 -top-6 h-32 w-32 opacity-90 transition-transform duration-500 group-hover:rotate-12",
            accent.shapeColor,
          )}
        />
        <span
          className={cn(
            "font-display absolute bottom-1 left-5 text-7xl leading-none",
            accent.onBlock,
          )}
        >
          {number}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-bold uppercase tracking-[0.12em]">
          <span className="text-ink">{project.category}</span>
          <span aria-hidden className="text-ink/40">
            /
          </span>
          <span className="text-ink">{project.status}</span>
        </div>

        <h3
          id={titleId}
          className="font-display mt-3 text-2xl text-ink"
        >
          <Link
            href={href}
            className="before:absolute before:inset-0 before:rounded-3xl before:content-['']"
          >
            {project.title}
          </Link>
        </h3>

        {/* Accent underline grows on hover/focus. */}
        <span
          aria-hidden
          className={cn(
            "mt-2 block h-1 w-10 origin-left rounded-full transition-transform duration-300 group-hover:scale-x-[2.2] group-focus-within:scale-x-[2.2]",
            accent.bar,
          )}
        />

        <p className="mt-4 flex-1 text-[17px] leading-relaxed text-ink text-pretty">
          {project.summary}
        </p>

        {project.outcome ? (
          <p className="mt-4 text-sm font-semibold text-ink">{project.outcome}</p>
        ) : null}

        {/* Supplementary theme tags. */}
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.themes.slice(0, 3).map((theme) => (
            <li
              key={theme}
              className="rounded-full border-[1.5px] border-ink/30 px-2.5 py-0.5 text-xs text-ink"
            >
              {theme}
            </li>
          ))}
        </ul>

        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-ink">
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
