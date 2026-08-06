import { site } from "@/content/site";
import { ArrowUpRightIcon } from "@/components/icons";

export function WritingCallout() {
  const { writing, links } = site;

  return (
    <section
      id="writing"
      aria-labelledby="writing-heading"
      className="scroll-mt-28 border-y border-ink bg-ink text-paper"
    >
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <div className="flex flex-col items-start">
          <span className="font-condensed text-[11px] text-paper">
            {writing.heading}
          </span>
          <span aria-hidden className="mt-2 block h-0.5 w-12 bg-magenta" />
        </div>

        {/* The one serif pull quote per page. */}
        <h2
          id="writing-heading"
          className="mt-8 font-serif text-4xl font-semibold leading-[1.08] text-paper text-balance sm:text-6xl"
        >
          How do we build trusted technology, and who do we become while trying?
        </h2>

        <p className="measure mt-8 leading-relaxed text-paper text-pretty">
          {writing.description}
        </p>

        <ul className="mt-8 flex flex-wrap gap-2">
          {writing.themes.map((theme) => (
            <li
              key={theme}
              className="invert-hover font-condensed border border-paper px-3 py-1.5 text-[11px] text-paper hover:bg-paper hover:text-ink"
            >
              {theme}
            </li>
          ))}
        </ul>

        <a
          href={links.substack}
          target="_blank"
          rel="noopener noreferrer"
          className="invert-hover focus-on-dark group mt-10 inline-flex items-center gap-2 border border-paper bg-ink px-7 py-3.5 font-condensed text-sm text-paper hover:bg-paper hover:text-ink"
        >
          Read on Substack
          <ArrowUpRightIcon width={18} height={18} />
        </a>
      </div>
    </section>
  );
}
