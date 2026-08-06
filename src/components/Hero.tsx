import type { CSSProperties } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import { getPhoto } from "@/content/photos";
import { ArrowRightIcon } from "@/components/icons";
import { Eyebrow, ScriptNote } from "@/components/ui";

export function Hero() {
  const { hero } = site;
  const photo = getPhoto("hero");

  const microlabels = (
    <ul className="flex flex-col items-start gap-2">
      {hero.microlabels.slice(0, 2).map((label, i) => (
        <li key={label}>
          <Eyebrow highlight={i === 1 ? "olive" : "blush"}>{label}</Eyebrow>
        </li>
      ))}
    </ul>
  );

  const primaryCta = (
    <Link
      href={hero.primaryCta.href}
      className="font-chunk inline-flex items-center justify-center gap-2 bg-coral px-7 py-3 text-xl text-cream"
    >
      {hero.primaryCta.label}
      <ArrowRightIcon width={20} height={20} />
    </Link>
  );

  return (
    <section
      id="top"
      className="relative bg-cream"
      style={{ "--hero-name": "clamp(2.75rem, 9vw, 7rem)" } as CSSProperties}
    >
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-10 sm:pt-12 lg:px-8">
        {/* Masthead: ink "Rachelle" on cream; blush "Del Aguila" over the photo. */}
        <h1 className="hero-name font-display relative z-20">
          <span className="block text-ink">Rachelle</span>
          <span className="block text-ink lg:text-blush lg:[-webkit-text-stroke:1px_#201d1a]">
            Del Aguila
          </span>
        </h1>

        {/* Photo block — pulled up on desktop so its top edge tucks behind
            the blush line (≥90% crossover). */}
        <div className="hero-overlap relative z-0 overflow-hidden border border-ink bg-[#6f645b]">
          <div className="flex aspect-[16/9] items-center justify-center">
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
              <span className="mono border border-dashed border-cream/70 px-3 py-1.5 text-[11px] text-cream">
                Photo · your shot, b&amp;w, full-bleed
              </span>
            )}
          </div>

          {/* Top darkening so blush type clears 3:1 over any image. */}
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-ink/15" />

          {/* Desktop overlays: labels bottom-left, CTA + script bottom-right. */}
          <div className="pointer-events-none absolute inset-0 hidden items-end justify-between gap-4 p-6 lg:flex">
            <div className="pointer-events-auto">{microlabels}</div>
            <div className="pointer-events-auto relative">
              {primaryCta}
              <span className="pointer-events-none absolute -top-8 right-1 flex items-end gap-1">
                <ScriptNote className="text-[1.5rem]">start here</ScriptNote>
                <svg aria-hidden width="42" height="30" viewBox="0 0 42 30" fill="none" className="text-violet">
                  <path d="M4 2c9 12 20 18 32 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M34 22l4 0-3-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Mobile: labels + CTA below the photo (readability over crossover). */}
        <div className="mt-6 flex flex-col gap-5 lg:hidden">
          {microlabels}
          {primaryCta}
        </div>

        {/* Positioning + supporting copy + secondary CTA. */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <div>
            <p className="font-display max-w-2xl text-3xl leading-tight text-ink text-pretty sm:text-4xl">
              {hero.positioning}
            </p>
            <Link
              href={hero.secondaryCta.href}
              className="font-chunk mt-7 inline-flex items-center gap-2 border border-ink px-6 py-3 text-base text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              {hero.secondaryCta.label}
            </Link>
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
