import { site } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { ArcStack } from "@/components/decor";

export function About() {
  const { about } = site;
  const dots = ["bg-magenta", "bg-purple", "bg-tangerine", "bg-navy"];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-columbia-soft"
    >
      <ArcStack
        aria-hidden
        className="animate-pop-float pointer-events-none absolute -right-6 top-10 hidden h-40 w-40 text-magenta/70 sm:block"
      />
      <div className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <SectionHeading
            id="about-heading"
            eyebrow="About"
            eyebrowClassName="text-magenta"
            title={about.lead}
            className="max-w-md"
          />

          <div>
            <div className="space-y-5 text-lg leading-relaxed text-ink text-pretty">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">
                Focus areas
              </h3>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {about.focus.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-full bg-ivory/70 px-4 py-2 text-base font-medium text-navy"
                  >
                    <span
                      aria-hidden
                      className={`h-2.5 w-2.5 flex-none rounded-full ${dots[index % dots.length]}`}
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
