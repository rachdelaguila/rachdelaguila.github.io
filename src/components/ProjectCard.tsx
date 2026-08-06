import Link from "next/link";
import type { Project } from "@/content/projects";
import { ArrowRightIcon } from "@/components/icons";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const href = `/work/${project.slug}`;
  const titleId = `project-${project.slug}-title`;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      aria-labelledby={titleId}
      className="group relative flex h-full flex-col border border-ink bg-paper p-6 sm:p-7"
    >
      <div className="flex items-start justify-between">
        <span className="numeral-outline text-6xl">{number}</span>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-condensed text-[11px] text-ink">
        <span>{project.category}</span>
        <span aria-hidden className="text-ink/40">
          /
        </span>
        <span className="text-ink/70">{project.status}</span>
      </div>

      <h3 id={titleId} className="font-head mt-2 text-2xl text-ink">
        <Link
          href={href}
          className="link-underline before:absolute before:inset-0 before:content-['']"
        >
          {project.title}
        </Link>
      </h3>

      <p className="mt-4 flex-1 font-serif text-[17px] leading-relaxed text-ink text-pretty">
        {project.summary}
      </p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.themes.slice(0, 3).map((theme) => (
          <li
            key={theme}
            className="font-condensed border border-ink/30 px-2 py-0.5 text-[10px] text-ink"
          >
            {theme}
          </li>
        ))}
      </ul>

      <span className="font-condensed mt-6 inline-flex items-center gap-1.5 text-[11px] text-ink">
        View project
        <ArrowRightIcon
          className="transition-transform duration-150 group-hover:translate-x-1"
          width={16}
          height={16}
        />
      </span>
    </article>
  );
}
