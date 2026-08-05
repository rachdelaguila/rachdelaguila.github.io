import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { WaveDivider } from "@/components/decor";

export function SelectedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative scroll-mt-24 bg-navy"
    >
      {/* Wave transition from the ivory hero into the navy band. */}
      <WaveDivider className="text-peach-soft" flip />

      <div className="mx-auto max-w-6xl px-6 pb-24 pt-6 lg:px-8">
        <SectionHeading
          id="work-heading"
          tone="dark"
          eyebrow="Selected work"
          eyebrowClassName="text-yellow"
          title="Products built where the problems are hard"
          description="A few threads of work across wellness AI, enterprise adoption, financial systems, and healthcare discovery. Fuller case studies are in progress."
        />

        <ul className="mt-14 grid gap-7 sm:grid-cols-2">
          {projects.map((project, index) => (
            <li key={project.slug} className="h-full">
              <ProjectCard project={project} index={index} />
            </li>
          ))}
        </ul>
      </div>

      {/* Wave transition from navy into the columbia About band. */}
      <WaveDivider className="text-columbia-soft" />
    </section>
  );
}
