import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";

export function SelectedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 sm:py-24 lg:px-8"
    >
      <SectionHeading
        id="work-heading"
        eyebrow="Selected work"
        title="Products built where the problems are hard"
        description="A few threads of work across wellness AI, enterprise adoption, financial systems, and healthcare discovery. Fuller case studies are in progress."
      />

      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug} className="h-full">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
