import Link from "next/link";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";
import { getProjectAccent } from "@/lib/project-accents";
import { ArrowRightIcon } from "@/components/icons";
import { Rings } from "@/components/decor";

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
      className="hover-pop group relative flex h-full flex-col overflow-hidden rounded-[6px] border border-ink bg-paper shadow-pop"
    >
      {/* Thin accent color bar. */}
      <div className={cn("h-2 w-full", accent.bar)} />

      {/* Corner stamp (target or checkerboard). */}
      <div aria-hidden className="pointer-events-none absolute right-4 top-6">
        {accent.stamp === "rings" ? (
          <Rings className={cn("h-10 w-10", accent.stampColor)} />
        ) : (
          <div className="h-9 w-9 border border-ink motif-checker text-ink/80" />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <span className="numeral-outline text-6xl">{number}</span>

        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-condensed text-[11px] text-ink">
          <span>{project.category}</span>
          <span aria-hidden className="text-ink/40">
            /
          </span>
          <span className="text-ink/70">{project.status}</span>
        </div>

        <h3 id={titleId} className="font-display mt-2 text-2xl text-ink">
          <Link
            href={href}
            className="before:absolute before:inset-0 before:content-['']"
          >
            {project.title}
          </Link>
        </h3>

        {/* Accent underline grows on hover/focus. */}
        <span
          aria-hidden
          className={cn(
            "mt-2 block h-0.5 w-10 origin-left rounded-full transition-transform duration-300 group-hover:scale-x-[2.2] group-focus-within:scale-x-[2.2]",
            accent.bar,
          )}
        />

        <p className="mt-4 flex-1 text-[17px] leading-relaxed text-ink text-pretty">
          {project.summary}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.themes.slice(0, 3).map((theme) => (
            <li
              key={theme}
              className="rounded-full border border-ink/30 px-2.5 py-0.5 text-xs text-ink"
            >
              {theme}
            </li>
          ))}
        </ul>

        <span className="font-condensed mt-6 inline-flex items-center gap-1.5 text-xs text-ink">
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
