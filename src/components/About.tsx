import { site } from "@/content/site";
import { getPhoto } from "@/content/photos";
import { SectionHeading } from "@/components/SectionHeading";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Chip, ScriptNote } from "@/components/ui";

export function About() {
  const { about } = site;
  const portrait = getPhoto("about");

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-t border-ink bg-cream"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="relative">
            <PhotoSlot
              id="about"
              photo={portrait}
              variant="polaroid"
              rotate={-2}
              className="w-56 sm:w-64"
            />
            <ScriptNote className="absolute -right-2 top-2 rotate-6 text-[1.7rem] sm:right-6">
              that’s me
            </ScriptNote>
          </div>

          <div>
            <SectionHeading
              id="about-heading"
              eyebrow="About"
              eyebrowHighlight="blush"
              coral
              title={about.lead}
            />

            <div className="measure mt-6 space-y-5 leading-relaxed text-ink text-pretty">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8">
              <span className="mono hl bg-olive text-[11px] text-ink">Focus areas</span>
              <ul className="mt-4 flex flex-wrap gap-2">
                {about.focus.map((item, i) => (
                  <li key={item}>
                    <Chip highlight={i % 2 === 0 ? "blush" : "olive"}>{item}</Chip>
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
