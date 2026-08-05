import Link from "next/link";
import { site } from "@/content/site";
import { ArrowRightIcon } from "@/components/icons";
import { ArcStack, Blob, Dot, Rings, Sunburst } from "@/components/decor";

export function Hero() {
  const { hero } = site;

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-peach-soft"
    >
      {/* Decorative retro-pop composition (purely visual). */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <Sunburst className="animate-pop-spin absolute -right-24 -top-28 h-[26rem] w-[26rem] text-yellow/60 sm:h-[34rem] sm:w-[34rem]" />
        <Blob className="animate-pop-float absolute -left-24 top-40 h-72 w-72 text-magenta/25" />
        <Dot className="absolute bottom-10 left-1/2 h-6 w-6 text-purple" />
        <Rings className="absolute right-8 bottom-10 h-24 w-24 text-tangerine/70 sm:right-24" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-8 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-ivory">
            {hero.eyebrow}
          </p>

          <h1
            id="hero-heading"
            className="mt-6 font-serif text-6xl font-semibold leading-[0.95] tracking-tight text-navy text-balance sm:text-7xl lg:text-8xl"
          >
            <span className="block">Rachelle</span>
            <span className="block text-magenta">Del Aguila</span>
          </h1>

          <p className="mt-7 max-w-xl font-serif text-2xl leading-snug text-ink text-pretty sm:text-[1.75rem]">
            {hero.positioning}
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted text-pretty">
            {hero.supporting}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={hero.primaryCta.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-yellow px-7 py-3.5 text-base font-semibold text-ink shadow-[4px_4px_0_0_var(--color-navy)] transition-colors hover:bg-tangerine"
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
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy px-7 py-3.5 text-base font-semibold text-navy transition-colors hover:bg-navy hover:text-ivory"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>

          <ul className="mt-11 flex flex-wrap gap-x-2.5 gap-y-2">
            {hero.signals.map((signal, index) => {
              // Colored dot + border for pop; label stays navy for contrast.
              const dots = ["bg-magenta", "bg-purple", "bg-tangerine"];
              return (
                <li
                  key={signal}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-navy/15 bg-ivory/70 px-3.5 py-1.5 text-sm font-medium text-navy"
                >
                  <span
                    aria-hidden
                    className={`h-2 w-2 rounded-full ${dots[index % dots.length]}`}
                  />
                  {signal}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Editorial shape panel + rotated sticker phrase. */}
        <div className="relative hidden min-h-[26rem] lg:block" aria-hidden>
          <div className="absolute right-6 top-2 h-64 w-52 overflow-hidden rounded-t-[6rem] bg-purple">
            <ArcStack className="absolute -bottom-2 left-1/2 h-40 w-40 -translate-x-1/2 text-yellow" />
          </div>
          <Blob className="animate-pop-float absolute left-0 top-24 h-56 w-56 text-tangerine" />
          <div className="absolute left-10 bottom-6 h-28 w-28 motif-checker rounded-2xl text-navy/80" />
          <Dot className="absolute right-2 bottom-24 h-16 w-16 text-magenta" />
        </div>
      </div>

      {/* Rotated editorial sticker — legible, decorative accent (ink on tangerine). */}
      <p className="pointer-events-none absolute bottom-8 right-6 hidden max-w-[15rem] -rotate-6 rounded-2xl bg-tangerine px-4 py-2 text-center text-sm font-semibold text-ink shadow-[3px_3px_0_0_var(--color-ink)] sm:block lg:right-10">
        {hero.tagline}
      </p>
    </section>
  );
}
