import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";

export function SelectedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-28 border-t border-ink bg-paper"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <SectionHeading
          id="work-heading"
          eyebrow="Selected work"
          title={
            <>
              Products built where the problems are hard
              <sup className="footnote-ref">1</sup>
            </>
          }
          description="A few threads of work across wellness AI, enterprise adoption, financial systems, and healthcare discovery."
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <li key={project.slug} className="h-full">
              <ProjectCard project={project} index={index} />
            </li>
          ))}
        </ul>

        {/* Footnote-style aside. */}
        <p className="font-condensed mt-10 border-t border-ink pt-4 text-[11px] text-ink/70">
          <span className="footnote-ref">1</span> Fuller case studies are in
          progress; each page is a preliminary overview.
        </p>
      </div>
    </section>
  );
}
