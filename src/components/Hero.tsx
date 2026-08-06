import Link from "next/link";
import { site } from "@/content/site";
import { getPhoto } from "@/content/photos";
import { ArrowRightIcon } from "@/components/icons";
import { Eyebrow, ScriptNote } from "@/components/ui";

export function Hero() {
  const { hero } = site;
  const photo = getPhoto("hero");

  return (
    <section id="top" className="relative bg-cream">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-10 sm:pt-12 lg:px-8">
        {/* Photo starts ~30% down; the masthead name straddles its top edge. */}
        <div className="relative">
          <div className="mt-24 flex aspect-[16/9] items-center justify-center overflow-hidden border border-ink bg-[#6f645b] sm:mt-28">
            {photo.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full grayscale object-cover"
              />
            ) : (
              <span className="mono text-[11px] text-cream">
                Photo · {photo.subject}
              </span>
            )}
          </div>

          <h1
            className="font-display absolute inset-x-0 top-24 z-20 -translate-y-[42%] px-1 text-blush text-[clamp(2.75rem,9vw,7rem)] text-balance sm:top-28"
            style={{ textShadow: "0 1px 2px rgba(32,29,26,0.45)" }}
          >
            Rachelle Del Aguila
          </h1>
        </div>

        {/* Mono highlighter microlabels. */}
        <ul className="mt-8 flex flex-col items-start gap-2">
          {hero.microlabels.map((label, i) => (
            <li key={label}>
              <Eyebrow highlight={i === 1 ? "olive" : "blush"}>{label}</Eyebrow>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <div>
            <p className="font-display max-w-2xl text-3xl leading-tight text-ink text-pretty sm:text-4xl">
              {hero.positioning}
            </p>

            {/* Primary CTA + script annotation with a hand-drawn arrow. */}
            <div className="relative mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href={hero.primaryCta.href}
                className="font-chunk inline-flex items-center justify-center gap-2 bg-coral px-7 py-3 text-xl text-cream"
              >
                {hero.primaryCta.label}
                <ArrowRightIcon width={20} height={20} />
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="font-chunk inline-flex items-center justify-center gap-2 border border-ink px-6 py-3 text-base text-ink transition-colors hover:bg-ink hover:text-cream"
              >
                {hero.secondaryCta.label}
              </Link>

              <span className="pointer-events-none absolute -top-9 left-2 hidden items-end gap-1 sm:flex">
                <ScriptNote className="text-[1.6rem]">start here</ScriptNote>
                <svg
                  aria-hidden
                  width="46"
                  height="34"
                  viewBox="0 0 46 34"
                  fill="none"
                  className="text-violet"
                >
                  <path
                    d="M4 2c10 14 22 20 34 22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M38 24l4 0-3-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="border-t border-ink pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-1">
            <div className="measure space-y-4 leading-relaxed text-ink text-pretty">
              {hero.supporting.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
