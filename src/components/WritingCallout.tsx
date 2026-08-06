import { site } from "@/content/site";
import { ArrowUpRightIcon } from "@/components/icons";
import { Sunburst, WaveDivider } from "@/components/decor";

export function WritingCallout() {
  const { writing, links } = site;

  return (
    <section
      id="writing"
      aria-labelledby="writing-heading"
      className="reveal relative scroll-mt-24 bg-cream"
    >
      {/* Wavy transition from peach into cream. */}
      <WaveDivider className="-mt-px text-cream" flip />

      <div className="mx-auto max-w-5xl px-6 pb-24 pt-6 lg:px-8">
        {/* Bright panel sits on cream, outlined in ink. */}
        <div className="relative overflow-hidden rounded-[2rem] border-2 border-ink bg-purple shadow-pop">
          {/* Decorative sunbursts sit only in the corners, bleeding off. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          >
            <Sunburst className="animate-pop-spin absolute -left-24 -top-24 h-64 w-64 text-cream/12" />
            <Sunburst className="animate-pop-spin absolute -right-24 -bottom-24 h-64 w-64 text-yellow/12" />
          </div>

          {/* Near-solid purple scrim keeps the whole text block on a flat field;
              only the far corners let the sunbursts peek through. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              background:
                "radial-gradient(130% 120% at 50% 45%, rgb(107 47 217) 72%, rgb(107 47 217 / 0) 100%)",
            }}
          />

          <div className="relative z-10 px-6 py-20 text-center sm:px-12 sm:py-24">
            <p className="inline-flex items-center rounded-full border-[1.5px] border-cream px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.15em] text-cream">
              {writing.heading}
            </p>
            <h2
              id="writing-heading"
              className="font-display mx-auto mt-6 max-w-4xl text-4xl text-cream text-balance sm:text-6xl"
            >
              How do we build trusted technology, and who do we{" "}
              <em className="italic text-yellow">become</em> while trying?
            </h2>
            <p className="measure mx-auto mt-7 text-lg leading-relaxed text-cream text-pretty">
              {writing.description}
            </p>

            <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-x-2.5 gap-y-2">
              {writing.themes.map((theme) => (
                <li
                  key={theme}
                  className="rounded-full border-[1.5px] border-cream bg-purple-700 px-3 py-1 text-sm font-medium text-cream"
                >
                  {theme}
                </li>
              ))}
            </ul>

            <a
              href={links.substack}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-pop focus-on-dark group mt-10 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-yellow px-7 py-3.5 text-base font-bold text-ink shadow-pop"
            >
              {writing.cta.label || "Read on Substack"}
              <ArrowUpRightIcon width={18} height={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
