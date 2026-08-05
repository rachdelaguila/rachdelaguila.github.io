import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/site";
import { ArrowRightIcon } from "@/components/icons";

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

  const sections: Array<{ heading: string; body: string }> = [
    { heading: "Overview", body: project.overview },
    { heading: "The problem space", body: project.problemSpace },
    { heading: "My approach", body: project.approach },
  ];

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:px-8">
      <Link
        href="/#work"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-navy"
      >
        <ArrowRightIcon className="rotate-180" width={16} height={16} />
        Back to selected work
      </Link>

      <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-[0.12em]">
        <span className="text-coral">{project.category}</span>
        <span aria-hidden className="text-navy/25">
          •
        </span>
        <span className="text-muted">{project.status}</span>
      </div>

      <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-navy text-balance sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-5 text-xl leading-relaxed text-ink text-pretty">
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
                className="rounded-full border border-navy/15 bg-ivory/70 px-3.5 py-1.5 text-sm text-muted"
              >
                {theme}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <aside className="mt-12 rounded-xl border border-navy/15 bg-ivory-deep/60 p-6">
        <p className="text-base leading-relaxed text-ink">
          <span className="font-medium text-navy">
            A fuller case study is in development.
          </span>{" "}
          This is a preliminary overview. If you’d like to talk through the work
          in more detail, I’m happy to.
        </p>
        <Link
          href="/#contact"
          className="mt-4 inline-flex items-center gap-2 rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-ivory transition-colors hover:bg-navy-700"
        >
          Get in touch
          <ArrowRightIcon width={16} height={16} />
        </Link>
      </aside>
    </article>
  );
}
