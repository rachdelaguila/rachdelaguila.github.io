import { site } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Chip } from "@/components/ui";
import { PhotoSlot } from "@/components/PhotoSlot";

export function About() {
  const { about } = site;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-28 border-t border-ink bg-paper"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              id="about-heading"
              eyebrow="About"
              title={about.lead}
              className="max-w-md"
            />
            <PhotoSlot
              label="Portrait — B&W"
              caption="Portrait · black & white · placeholder"
              className="mt-8 w-44 sm:w-52"
            />
          </div>

          <div>
            <div className="measure space-y-5 leading-relaxed text-ink text-pretty">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-condensed text-[11px] text-ink">Focus areas</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {about.focus.map((item) => (
                  <li key={item}>
                    <Chip>{item}</Chip>
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
