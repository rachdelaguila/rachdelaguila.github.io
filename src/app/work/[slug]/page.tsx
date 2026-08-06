import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/site";
import { getProjectAccent } from "@/lib/project-accents";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@/components/icons";
import { AccentShape } from "@/components/decor";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${project.title} · ${site.name}`,
      description: project.summary,
      url: `/work/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const accent = getProjectAccent(project.slug);
  const index = projects.findIndex((p) => p.slug === project.slug);
  const number = String(index + 1).padStart(2, "0");

  const sections: Array<{ heading: string; body: string }> = [
    { heading: "Overview", body: project.overview },
    { heading: "The problem space", body: project.problemSpace },
    { heading: "My approach", body: project.approach },
  ];

  return (
    <article>
      {/* Editorial colored header band, outlined in ink. */}
      <header className={cn("relative overflow-hidden border-b-2 border-ink", accent.block)}>
        <AccentShape
          shape={accent.shape}
          className={cn(
            "pointer-events-none absolute -right-10 -top-10 z-0 h-56 w-56 opacity-90",
            accent.shapeColor,
          )}
        />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:px-8">
          <Link
            href="/#work"
            className={cn(
              "inline-flex items-center gap-1.5 text-sm font-bold transition-opacity hover:opacity-80",
              accent.onBlock,
            )}
          >
            <ArrowRightIcon className="rotate-180" width={16} height={16} />
            Back to selected work
          </Link>

          <span className={cn("font-display mt-8 block text-6xl opacity-80", accent.onBlock)}>
            {number}
          </span>
          <div
            className={cn(
              "mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-bold uppercase tracking-[0.12em]",
              accent.onBlock,
            )}
          >
            <span>{project.category}</span>
            <span aria-hidden className="opacity-40">
              /
            </span>
            <span className="opacity-80">{project.status}</span>
          </div>
          <h1 className={cn("font-display mt-3 text-4xl text-balance sm:text-5xl", accent.onBlock)}>
            {project.title}
          </h1>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-14 sm:py-16 lg:px-8">
        <p className="measure text-xl leading-relaxed text-ink text-pretty">
          {project.summary}
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl text-ink">{section.heading}</h2>
              <p className="measure mt-3 text-lg leading-relaxed text-ink text-pretty">
                {section.body}
              </p>
            </section>
          ))}

          <section>
            <h2 className="font-display text-2xl text-ink">Product themes</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.themes.map((theme) => (
                <li
                  key={theme}
                  className="rounded-full border-[1.5px] border-ink bg-cream px-3.5 py-1.5 text-sm text-ink"
                >
                  {theme}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="mt-12 rounded-3xl border-2 border-ink bg-peach p-6 shadow-pop">
          <p className="text-base leading-relaxed text-ink">
            <span className="font-bold">A fuller case study is in development.</span>{" "}
            This is a preliminary overview. If you’d like to talk through the
            work in more detail, I’m happy to.
          </p>
          <Link
            href="/#contact"
            className="hover-pop mt-4 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-yellow px-5 py-2.5 text-sm font-bold text-ink shadow-pop-sm"
          >
            Get in touch
            <ArrowRightIcon width={16} height={16} />
          </Link>
        </aside>
      </div>
    </article>
  );
}
