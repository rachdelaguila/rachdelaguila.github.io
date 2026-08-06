import type { CSSProperties } from "react";
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
          {/* Decorative layer: shapes bleed off the edges, capped ~10% opacity,
              and never sit under the centered text column. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          >
            <Sunburst className="animate-pop-spin absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 text-yellow/10" />
            <Sunburst className="animate-pop-spin absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 text-cream/10" />
          </div>

          {/* Purple scrim so the text block lands on a flat field. */}
          <div
            aria-hidden
            className="text-scrim absolute inset-x-0 top-1/2 h-[85%] -translate-y-1/2"
            style={{ "--scrim-color": "rgb(107 47 217 / 0.92)" } as CSSProperties}
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
