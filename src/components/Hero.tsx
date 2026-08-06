import Link from "next/link";
import { site } from "@/content/site";
import { ArrowRightIcon } from "@/components/icons";
import { Chip, Eyebrow } from "@/components/ui";

export function Hero() {
  const { hero } = site;

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative bg-paper"
    >
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-14 sm:pb-24 lg:px-8 lg:pt-20">
        <div className="flex flex-col items-start">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <span aria-hidden className="mt-2 block h-0.5 w-12 bg-magenta" />
        </div>

        {/* Masthead logotype — full-width grotesque caps, ink, no color split. */}
        <h1
          id="hero-heading"
          className="font-head mt-6 text-[clamp(3.25rem,13vw,10rem)] text-ink"
        >
          <span className="block">Rachelle</span>
          <span className="block">Del Aguila</span>
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            {/* Serif pull quote (the one per page). */}
            <p className="max-w-2xl font-serif text-3xl font-semibold leading-tight text-ink text-pretty sm:text-4xl">
              {hero.positioning}
            </p>

            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Link
                href={hero.primaryCta.href}
                className="invert-hover group inline-flex items-center justify-center gap-2 border border-ink bg-ink px-7 py-3.5 font-condensed text-sm text-paper hover:bg-paper hover:text-ink"
              >
                {hero.primaryCta.label}
                <ArrowRightIcon width={18} height={18} />
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="invert-hover inline-flex items-center justify-center gap-2 border border-ink bg-paper px-7 py-3.5 font-condensed text-sm text-ink hover:bg-ink hover:text-paper"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="border-t border-ink pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-1">
            <div className="measure space-y-4 leading-relaxed text-ink text-pretty">
              {hero.supporting.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-7 flex flex-wrap gap-2">
              {hero.signals.map((signal) => (
                <li key={signal}>
                  <Chip>{signal}</Chip>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
