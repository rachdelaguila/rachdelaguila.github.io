import { site } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Chip, Sticker } from "@/components/ui";
import { ArcStack, WaveDivider } from "@/components/decor";

export function About() {
  const { about } = site;
  const accents = ["magenta", "purple", "tangerine", "yellow"] as const;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="reveal relative overflow-hidden bg-peach"
    >
      {/* Wavy transition from the cream work section into peach. */}
      <WaveDivider className="-mt-px text-peach" flip />

      {/* Decorative arc kept at the empty bottom-left edge, clear of all text. */}
      <ArcStack
        aria-hidden
        className="animate-pop-float pointer-events-none absolute -left-10 bottom-4 z-0 hidden h-36 w-36 text-magenta lg:block"
      />

      <div className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 pb-24 pt-6 lg:px-8">
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
            <Sticker color="yellow" decorative className="mt-6 -rotate-3">
              MBA · Columbia ✦
            </Sticker>
          </div>

          <div>
            <div className="space-y-5 text-lg leading-relaxed text-ink text-pretty">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-[12px] font-bold uppercase tracking-[0.15em] text-ink">
                Focus areas
              </h3>
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
