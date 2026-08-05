import Link from "next/link";
import { site } from "@/content/site";
import { ArrowRightIcon } from "@/components/icons";

export function Hero() {
  const { hero } = site;

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-navy/10"
    >
      {/* Restrained editorial accent, not a decorative mockup. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_85%_-10%,var(--color-columbia-soft),transparent_60%)]"
      />
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-coral">
            {hero.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="mt-5 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-navy text-balance sm:text-6xl lg:text-7xl"
          >
            {hero.heading}
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-2xl leading-snug text-ink text-pretty sm:text-3xl">
            {hero.positioning}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
            {hero.supporting}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={hero.primaryCta.href}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-navy px-6 py-3 text-base font-medium text-ivory transition-colors hover:bg-navy-700"
            >
              {hero.primaryCta.label}
              <ArrowRightIcon
                className="transition-transform group-hover:translate-x-0.5"
                width={18}
                height={18}
              />
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-navy/20 px-6 py-3 text-base font-medium text-navy transition-colors hover:border-navy/40 hover:bg-navy/5"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-3 gap-y-2">
            {hero.signals.map((signal) => (
              <li
                key={signal}
                className="rounded-full border border-navy/15 bg-ivory/60 px-3.5 py-1.5 text-sm text-muted"
              >
                {signal}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
