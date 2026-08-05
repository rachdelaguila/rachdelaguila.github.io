import Link from "next/link";
import type { Project } from "@/content/projects";
import { ArrowRightIcon } from "@/components/icons";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const href = `/work/${project.slug}`;
  const titleId = `project-${project.slug}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className="group relative flex h-full flex-col rounded-xl border border-navy/12 bg-ivory/70 p-6 transition-colors hover:border-navy/25 sm:p-7"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-[0.12em]">
        <span className="text-coral">{project.category}</span>
        <span aria-hidden className="text-navy/25">
          •
        </span>
        <span className="text-muted">{project.status}</span>
      </div>

      <h3
        id={titleId}
        className="mt-4 font-serif text-2xl font-semibold tracking-tight text-navy"
      >
        <Link
          href={href}
          className="before:absolute before:inset-0 before:rounded-xl before:content-['']"
        >
          {project.title}
        </Link>
      </h3>

      <p className="mt-3 flex-1 text-base leading-relaxed text-muted text-pretty">
        {project.summary}
      </p>

      {project.outcome ? (
        <p className="mt-4 text-sm font-medium text-navy">{project.outcome}</p>
      ) : null}

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy">
        View project
        <ArrowRightIcon
          className="transition-transform group-hover:translate-x-0.5"
          width={16}
          height={16}
        />
      </span>
    </article>
  );
}
