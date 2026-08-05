import { site } from "@/content/site";
import { ArrowUpRightIcon } from "@/components/icons";

export function WritingCallout() {
  const { writing, links } = site;

  return (
    <section
      id="writing"
      aria-labelledby="writing-heading"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 sm:py-24 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-2xl border border-navy/15 bg-navy px-6 py-14 text-ivory sm:px-12 sm:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(50%_80%_at_100%_0%,rgba(185,217,235,0.22),transparent_60%)]"
        />
        <div className="relative max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-columbia">
            {writing.heading}
          </p>
          <h2
            id="writing-heading"
            className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl"
          >
            {writing.framing}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-columbia-soft text-pretty">
            {writing.description}
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-2.5 gap-y-2">
            {writing.themes.map((theme) => (
              <li
                key={theme}
                className="rounded-full border border-columbia/30 px-3 py-1 text-sm text-columbia-soft"
              >
                {theme}
              </li>
            ))}
          </ul>

          <a
            href={links.substack}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex items-center gap-2 rounded-md bg-ivory px-6 py-3 text-base font-medium text-navy transition-colors hover:bg-columbia-soft"
          >
            {writing.cta.label || "Read on Substack"}
            <ArrowUpRightIcon
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              width={18}
              height={18}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
