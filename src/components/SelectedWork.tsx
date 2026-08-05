import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Sticker } from "@/components/ui";

export function SelectedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="reveal relative scroll-mt-24 bg-cream"
    >
      {/* Corner sticker. */}
      <Sticker
        color="purple"
        decorative
        className="absolute right-6 top-10 hidden rotate-6 lg:block"
      >
        Selected work ✦
      </Sticker>

      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <SectionHeading
          id="work-heading"
          eyebrow="Selected work"
          title={
            <>
              Products built where the problems are{" "}
              <em className="italic text-magenta">hard</em>
            </>
          }
          description="A few threads of work across wellness AI, enterprise adoption, financial systems, and healthcare discovery. Fuller case studies are in progress."
        />

        <ul className="mt-14 grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <li key={project.slug} className="h-full">
              <ProjectCard project={project} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
