import {
  getAdditionalProjects,
  getFeaturedProjects,
  projects,
} from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Eyebrow } from "@/components/ui";

export function SelectedWork() {
  const featured = getFeaturedProjects();
  const additional = getAdditionalProjects();

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-24 border-t border-ink bg-cream"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <SectionHeading
          id="work-heading"
          eyebrow="Selected work"
          eyebrowHighlight="olive"
          title="Products built where the problems are hard"
          description="A few threads of work across wellness AI, enterprise adoption, financial systems, and healthcare discovery. Fuller case studies are in progress."
        />

        <ul className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {featured.map((project) => {
            const index = projects.findIndex((p) => p.slug === project.slug);
            return (
              <li key={project.slug} className="h-full">
                <ProjectCard
                  project={project}
                  index={index}
                  variant="featured"
                />
              </li>
            );
          })}
        </ul>

        {additional.length > 0 ? (
          <div className="mt-16 border-t border-ink/20 pt-12">
            <Eyebrow highlight="blush">Additional work</Eyebrow>
            <ul className="mt-6 grid gap-4 lg:grid-cols-2">
              {additional.map((project) => {
                const index = projects.findIndex((p) => p.slug === project.slug);
                return (
                  <li key={project.slug} className="h-full">
                    <ProjectCard
                      project={project}
                      index={index}
                      variant="compact"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
