import Link from "next/link";
import type { Project } from "@/content/projects";
import { getPhoto, type PhotoId } from "@/content/photos";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Chip } from "@/components/ui";
import { ArrowRightIcon } from "@/components/icons";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const ROTATIONS = [-2, 2, -1.5, 1.5];

export function ProjectCard({ project, index }: ProjectCardProps) {
  const href = `/work/${project.slug}`;
  const titleId = `project-${project.slug}-title`;
  const number = String(index + 1).padStart(2, "0");
  const photo = getPhoto(`work-${project.slug}` as PhotoId);
  const rotate = ROTATIONS[index % ROTATIONS.length];

  return (
    <article
      aria-labelledby={titleId}
      className="group relative flex h-full flex-col border border-ink bg-cream p-5 sm:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <PhotoSlot photo={photo} variant="polaroid" rotate={rotate} className="w-36 sm:w-40" />
        <span className="font-chunk text-3xl text-ink/25">{number}</span>
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="mono hl bg-blush text-[10px] text-ink">
            {project.category}
          </span>
          <span className="mono text-[10px] text-ink/60">{project.status}</span>
        </div>

        <h3 id={titleId} className="font-chunk mt-3 text-2xl text-ink">
          <Link href={href} className="before:absolute before:inset-0 before:content-['']">
            {project.title}
          </Link>
        </h3>

        <p className="mt-3 flex-1 leading-relaxed text-ink text-pretty">
          {project.summary}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.themes.slice(0, 3).map((theme, i) => (
            <li key={theme}>
              <Chip highlight={i % 2 === 0 ? "olive" : "blush"} className="text-[10px]">
                {theme}
              </Chip>
            </li>
          ))}
        </ul>

        <span className="mono mt-6 inline-flex items-center gap-1.5 text-[11px] text-ink underline decoration-coral decoration-2 underline-offset-4">
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
