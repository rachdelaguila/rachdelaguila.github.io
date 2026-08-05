import { site } from "@/content/site";
import { ArrowUpRightIcon } from "@/components/icons";
import { Blob, Dot, Sunburst } from "@/components/decor";

export function WritingCallout() {
  const { writing, links } = site;

  return (
    <section
      id="writing"
      aria-labelledby="writing-heading"
      className="relative overflow-hidden scroll-mt-24 bg-purple text-ivory"
    >
      {/* Decorative retro-pop shapes. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Sunburst className="animate-pop-spin absolute -left-32 -top-32 h-96 w-96 text-magenta/25" />
        <Blob className="animate-pop-float absolute -right-16 bottom-0 h-72 w-72 text-yellow/25" />
        <Dot className="absolute right-1/4 top-12 h-8 w-8 text-yellow" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center sm:py-28 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-columbia-soft">
          {writing.heading}
        </p>
        <h2
          id="writing-heading"
          className="mx-auto mt-6 max-w-4xl font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-6xl"
        >
          {writing.framing}
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-columbia-soft text-pretty">
          {writing.description}
        </p>

        <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-x-2.5 gap-y-2">
          {writing.themes.map((theme) => (
            <li
              key={theme}
              className="rounded-full border border-ivory/30 px-3 py-1 text-sm text-ivory/90"
            >
              {theme}
            </li>
          ))}
        </ul>

        <a
          href={links.substack}
          target="_blank"
          rel="noopener noreferrer"
          className="group focus-on-dark mt-10 inline-flex items-center gap-2 rounded-full bg-yellow px-7 py-3.5 text-base font-semibold text-ink shadow-[4px_4px_0_0_var(--color-ink)] transition-colors hover:bg-ivory"
        >
          {writing.cta.label || "Read on Substack"}
          <ArrowUpRightIcon
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            width={18}
            height={18}
          />
        </a>
      </div>
    </section>
  );
}
