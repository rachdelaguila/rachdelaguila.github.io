import { site } from "@/content/site";
import { ArrowUpRightIcon } from "@/components/icons";
import { PhotoSlot } from "@/components/PhotoSlot";

export function WritingCallout() {
  const { writing, links } = site;

  return (
    <section
      id="writing"
      aria-labelledby="writing-heading"
      className="reveal scroll-mt-28 border-y border-ink bg-violet text-paper"
    >
      <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
        {/* Duotone-ready thumbnail slot. */}
        <PhotoSlot
          label="Thumbnail — duotone ready"
          aspect="aspect-[16/10]"
          className="mx-auto mb-10 w-52"
        />

        <span className="font-condensed inline-flex items-center rounded-full border border-paper px-3 py-1 text-[11px] text-paper">
          {writing.heading}
        </span>

        <h2
          id="writing-heading"
          className="font-display mx-auto mt-6 max-w-4xl text-4xl text-paper text-balance sm:text-6xl"
        >
          How do we build trusted technology, and who do we{" "}
          <em className="italic">become</em> while trying?
        </h2>
        <p className="measure mx-auto mt-7 text-lg leading-relaxed text-paper text-pretty">
          {writing.description}
        </p>

        <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-x-2.5 gap-y-2">
          {writing.themes.map((theme) => (
            <li
              key={theme}
              className="font-condensed rounded-full border border-paper px-3 py-1 text-[11px] text-paper"
            >
              {theme}
            </li>
          ))}
        </ul>

        <a
          href={links.substack}
          target="_blank"
          rel="noopener noreferrer"
          className="hover-pop focus-on-dark group mt-10 inline-flex items-center gap-2 rounded-full border border-ink bg-paper px-7 py-3.5 font-condensed text-sm text-ink shadow-pop"
        >
          Read on Substack
          <ArrowUpRightIcon width={18} height={18} />
        </a>
      </div>
    </section>
  );
}
