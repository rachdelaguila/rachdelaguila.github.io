import { site } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Chip, Sticker } from "@/components/ui";
import { PhotoSlot } from "@/components/PhotoSlot";

export function About() {
  const { about } = site;
  const accents = ["magenta", "violet", "tangerine", "yellow"] as const;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="reveal relative border-t border-ink bg-paper"
    >
      <div className="mx-auto max-w-6xl scroll-mt-28 px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="relative">
            <SectionHeading
              id="about-heading"
              eyebrow="About"
              title={
                <>
                  A builder and strategist who is happiest where technology
                  meets <em className="italic text-magenta">hard</em>, human
                  problems.
                </>
              }
              className="max-w-md"
            />

            {/* Duotone-ready portrait slot + the second (non-chrome) sticker. */}
            <div className="mt-8 flex items-end gap-4">
              <PhotoSlot
                label="Portrait — duotone ready"
                className="w-40 sm:w-48"
              />
              <Sticker color="magenta" decorative className="-rotate-3">
                MBA · Columbia
              </Sticker>
            </div>
          </div>

          <div>
            <div className="measure space-y-5 text-lg leading-relaxed text-ink text-pretty">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-condensed text-[12px] text-ink">Focus areas</h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {about.focus.map((item, index) => (
                  <li key={item}>
                    <Chip accent={accents[index % accents.length]}>{item}</Chip>
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
