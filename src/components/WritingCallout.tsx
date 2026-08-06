import { site } from "@/content/site";
import { getPhoto } from "@/content/photos";
import { SectionHeading } from "@/components/SectionHeading";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Chip } from "@/components/ui";
import { ArrowUpRightIcon } from "@/components/icons";

export function WritingCallout() {
  const { writing, links } = site;
  const thumb = getPhoto("writing");

  return (
    <section
      id="writing"
      aria-labelledby="writing-heading"
      className="scroll-mt-24 border-t border-ink bg-blush"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <SectionHeading
              id="writing-heading"
              eyebrow="Writing"
              eyebrowHighlight="olive"
              coral
              title="How do we build trusted technology, and who do we become while trying?"
              description={writing.description}
            />

            <ul className="mt-6 flex flex-wrap gap-2">
              {writing.themes.map((theme, i) => (
                <li key={theme}>
                  <Chip highlight={i % 2 === 0 ? "olive" : "none"} className={i % 2 === 0 ? "" : "border border-ink/30 px-2 py-0.5"}>
                    {theme}
                  </Chip>
                </li>
              ))}
            </ul>

            <a
              href={links.substack}
              target="_blank"
              rel="noopener noreferrer"
              className="font-chunk mt-9 inline-flex items-center gap-2 bg-coral px-7 py-3 text-xl text-cream"
            >
              Read on Substack
              <ArrowUpRightIcon width={20} height={20} />
            </a>
          </div>

          <PhotoSlot photo={thumb} variant="plain" className="self-start" />
        </div>
      </div>
    </section>
  );
}
