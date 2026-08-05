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
      {/* Editorial colored header band. */}
      <header className={cn("relative overflow-hidden", accent.block)}>
        <AccentShape
          shape={accent.shape}
          className={cn(
            "pointer-events-none absolute -right-10 -top-10 h-56 w-56 opacity-90",
            accent.shapeColor,
          )}
        />
        <div className="relative mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:px-8">
          <Link
            href="/#work"
            className={cn(
              "focus-on-dark inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-80",
              accent.onBlock,
            )}
          >
            <ArrowRightIcon className="rotate-180" width={16} height={16} />
            Back to selected work
          </Link>

          <span
            className={cn(
              "mt-8 block font-serif text-6xl font-semibold leading-none opacity-70",
              accent.onBlock,
            )}
          >
            {number}
          </span>
          <div
            className={cn(
              "mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-[0.12em]",
              accent.onBlock,
            )}
          >
            <span>{project.category}</span>
            <span aria-hidden className="opacity-40">
              /
            </span>
            <span className="opacity-80">{project.status}</span>
          </div>
          <h1
            className={cn(
              "mt-3 font-serif text-4xl font-semibold tracking-tight text-balance sm:text-5xl",
              accent.onBlock,
            )}
          >
            {project.title}
          </h1>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-14 sm:py-16 lg:px-8">
        <p className="text-xl leading-relaxed text-ink text-pretty">
          {project.summary}
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy">
                {section.heading}
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-muted text-pretty">
                {section.body}
              </p>
            </section>
          ))}

          <section>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy">
              Product themes
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.themes.map((theme) => (
                <li
                  key={theme}
                  className="rounded-full border-2 border-navy/15 bg-ivory px-3.5 py-1.5 text-sm text-navy"
                >
                  {theme}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="mt-12 rounded-3xl border-2 border-ink bg-columbia-soft p-6 shadow-[6px_6px_0_0_var(--color-ink)]">
          <p className="text-base leading-relaxed text-ink">
            <span className="font-semibold text-navy">
              A fuller case study is in development.
            </span>{" "}
            This is a preliminary overview. If you’d like to talk through the
            work in more detail, I’m happy to.
          </p>
          <Link
            href="/#contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-ivory transition-colors hover:bg-navy-700"
          >
            Get in touch
            <ArrowRightIcon width={16} height={16} />
          </Link>
        </aside>
      </div>
    </article>
  );
}
