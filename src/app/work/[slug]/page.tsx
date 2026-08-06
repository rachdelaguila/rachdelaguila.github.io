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

  const index = projects.findIndex((p) => p.slug === project.slug);
  const number = String(index + 1).padStart(2, "0");

  const sections: Array<{ heading: string; body: string }> = [
    { heading: "Overview", body: project.overview },
    { heading: "The problem space", body: project.problemSpace },
    { heading: "My approach", body: project.approach },
  ];

  return (
    <article>
      <header className="border-b border-ink bg-paper">
        <div className="mx-auto max-w-3xl px-6 py-14 sm:py-16 lg:px-8">
          <Link
            href="/#work"
            className="link-underline font-condensed inline-flex items-center gap-1.5 text-[11px] text-ink"
          >
            <ArrowRightIcon className="rotate-180" width={16} height={16} />
            Back to selected work
          </Link>

          <span className="numeral-outline mt-8 block text-6xl">{number}</span>
          <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 font-condensed text-[11px] text-ink">
            <span>{project.category}</span>
            <span aria-hidden className="text-ink/40">
              /
            </span>
            <span className="text-ink/70">{project.status}</span>
          </div>
          <h1 className="font-head mt-3 text-4xl text-ink text-balance sm:text-5xl">
            {project.title}
          </h1>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-14 sm:py-16 lg:px-8">
        <p className="measure font-serif text-xl leading-relaxed text-ink text-pretty">
          {project.summary}
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-head text-2xl text-ink">{section.heading}</h2>
              <p className="measure mt-3 font-serif text-lg leading-relaxed text-ink text-pretty">
                {section.body}
              </p>
            </section>
          ))}

          <section>
            <h2 className="font-head text-2xl text-ink">Product themes</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.themes.map((theme) => (
                <li
                  key={theme}
                  className="font-condensed border border-ink px-3 py-1.5 text-[11px] text-ink"
                >
                  {theme}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="mt-12 border border-ink bg-paper p-6">
          <p className="font-serif text-base leading-relaxed text-ink">
            <span className="font-semibold">A fuller case study is in development.</span>{" "}
            This is a preliminary overview. If you’d like to talk through the
            work in more detail, I’m happy to.
          </p>
          <Link
            href="/#contact"
            className="invert-hover mt-4 inline-flex items-center gap-2 border border-ink bg-ink px-5 py-2.5 font-condensed text-[11px] text-paper hover:bg-paper hover:text-ink"
          >
            Get in touch
            <ArrowRightIcon width={16} height={16} />
          </Link>
        </aside>
      </div>
    </article>
  );
}
