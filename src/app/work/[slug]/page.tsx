import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/site";
import { getPhoto, type PhotoId } from "@/content/photos";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Chip, Eyebrow } from "@/components/ui";
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
  const photo = getPhoto(`work-${project.slug}` as PhotoId);

  const sections: Array<{ heading: string; body: string }> = [
    { heading: "Overview", body: project.overview },
    { heading: "The problem space", body: project.problemSpace },
    { heading: "My approach", body: project.approach },
  ];

  return (
    <article>
      <header className="border-b border-ink bg-cream">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-14 sm:py-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14 lg:px-8">
          <div>
            <Link
              href="/#work"
              className="mono inline-flex items-center gap-1.5 text-[11px] text-ink underline decoration-coral decoration-2 underline-offset-4"
            >
              <ArrowRightIcon className="rotate-180" width={16} height={16} />
              Back to selected work
            </Link>

            <div className="mt-8 flex items-center gap-3">
              <span className="font-chunk text-3xl text-ink/25">{number}</span>
              <span className="mono hl bg-blush text-[11px] text-ink">
                {project.category}
              </span>
              <span className="mono text-[11px] text-ink/60">{project.status}</span>
            </div>
            <h1 className="font-display mt-4 text-4xl text-ink text-balance sm:text-5xl">
              {project.title}
            </h1>
          </div>

          <PhotoSlot photo={photo} variant="polaroid" rotate={2} className="w-44 self-start justify-self-start lg:justify-self-end" />
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-14 sm:py-16 lg:px-8">
        <p className="measure font-display text-2xl leading-snug text-ink text-pretty">
          {project.summary}
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <Eyebrow highlight="olive">{section.heading}</Eyebrow>
              <p className="measure mt-3 leading-relaxed text-ink text-pretty">
                {section.body}
              </p>
            </section>
          ))}

          <section>
            <Eyebrow highlight="blush">Product themes</Eyebrow>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.themes.map((theme, i) => (
                <li key={theme}>
                  <Chip highlight={i % 2 === 0 ? "olive" : "blush"}>{theme}</Chip>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="mt-12 border border-ink bg-blush p-6">
          <p className="leading-relaxed text-ink">
            <span className="font-semibold">A fuller case study is in development.</span>{" "}
            This is a preliminary overview. If you’d like to talk through the
            work in more detail, I’m happy to.
          </p>
          <Link
            href="/#contact"
            className="font-chunk mt-4 inline-flex items-center gap-2 bg-coral px-6 py-3 text-lg text-cream"
          >
            Get in touch
            <ArrowRightIcon width={18} height={18} />
          </Link>
        </aside>
      </div>
    </article>
  );
}
