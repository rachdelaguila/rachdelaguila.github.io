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
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-ink bg-ivory shadow-[6px_6px_0_0_var(--color-ink)] transition-transform duration-300 hover:-translate-y-1.5 focus-within:-translate-y-1.5"
    >
      {/* Editorial "cover": colored block with an oversized number + shape. */}
      <div className={cn("relative h-36 overflow-hidden", accent.block)}>
        <AccentShape
          shape={accent.shape}
          className={cn(
            "absolute -right-6 -top-6 h-32 w-32 opacity-90 transition-transform duration-500 group-hover:rotate-12",
            accent.shapeColor,
          )}
        />
        <span
          className={cn(
            "absolute bottom-2 left-5 font-serif text-7xl font-semibold leading-none",
            accent.onBlock,
          )}
        >
          {number}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-[0.12em]">
          <span className="text-navy">{project.category}</span>
          <span aria-hidden className="text-ink/25">
            /
          </span>
          <span className="text-muted">{project.status}</span>
        </div>

        <h3
          id={titleId}
          className="mt-3 font-serif text-2xl font-semibold tracking-tight text-navy"
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

        <p className="mt-4 flex-1 text-base leading-relaxed text-muted text-pretty">
          {project.summary}
        </p>

        {project.outcome ? (
          <p className="mt-4 text-sm font-medium text-navy">{project.outcome}</p>
        ) : null}

        {/* Supplementary themes, revealed on hover/focus. */}
        <ul className="mt-4 flex max-h-0 flex-wrap gap-1.5 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100 group-focus-within:max-h-24 group-focus-within:opacity-100">
          {project.themes.slice(0, 3).map((theme) => (
            <li
              key={theme}
              className="rounded-full border border-ink/15 px-2.5 py-0.5 text-xs text-muted"
            >
              {theme}
            </li>
          ))}
        </ul>

        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
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
