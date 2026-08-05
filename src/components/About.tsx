import { site } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  const { about } = site;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-y border-navy/10 bg-ivory-deep/50"
    >
      <div className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <SectionHeading
            id="about-heading"
            eyebrow="About"
            title={about.lead}
            className="max-w-md"
          />

          <div>
            <div className="space-y-5 text-lg leading-relaxed text-muted text-pretty">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-navy">
                Focus areas
              </h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {about.focus.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-base text-ink"
                  >
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 flex-none rounded-full bg-coral"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
