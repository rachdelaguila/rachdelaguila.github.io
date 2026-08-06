import Link from "next/link";
import { site } from "@/content/site";
import { ArrowRightIcon } from "@/components/icons";
import { Chip, Eyebrow, Sticker } from "@/components/ui";
import { Dot, Rings } from "@/components/decor";

export function Hero() {
  const { hero } = site;
  const signalAccents = ["magenta", "violet", "tangerine"] as const;

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-paper"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pb-20 pt-16 sm:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:px-8 lg:py-24">
        <div className="relative z-10 max-w-2xl">
          {/* Mobile-only in-flow micro-accent row (never overlaps text). */}
          <div aria-hidden className="mb-7 flex items-center gap-3 lg:hidden">
            <Dot className="h-5 w-5 text-magenta" />
            <Rings className="h-8 w-8 text-violet" />
            <div className="h-7 w-7 border border-ink motif-checker text-ink/80" />
          </div>

          <Eyebrow>{hero.eyebrow}</Eyebrow>

          <h1
            id="hero-heading"
            className="font-display mt-6 text-[clamp(3.5rem,9vw,8rem)] text-ink"
          >
            <span className="block">Rachelle</span>
            <span className="chrome-text block italic">Del Aguila</span>
          </h1>

          <p className="mt-7 max-w-xl font-serif text-2xl font-semibold leading-snug text-ink text-pretty sm:text-[1.7rem]">
            {hero.positioning}
          </p>
          <p className="measure mt-5 text-lg leading-relaxed text-ink text-pretty">
            {hero.supporting}
          </p>

          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Link
              href={hero.primaryCta.href}
              className="hover-pop group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 font-condensed text-sm text-paper shadow-pop"
            >
              {hero.primaryCta.label}
              <ArrowRightIcon width={18} height={18} />
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="hover-pop inline-flex items-center justify-center gap-2 rounded-full border border-ink bg-paper px-7 py-3.5 font-condensed text-sm text-ink shadow-pop"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>

          <ul className="mt-11 flex flex-wrap gap-x-2.5 gap-y-2">
            {hero.signals.map((signal, index) => (
              <li key={signal}>
                <Chip accent={signalAccents[index % signalAccents.length]}>
                  {signal}
                </Chip>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop shape cluster — restrained, contained to this column and
            faded on the inner edge so no shape approaches the text. */}
        <div
          aria-hidden
          className="pointer-events-none relative z-0 hidden h-[28rem] overflow-hidden [mask-image:linear-gradient(to_right,transparent_0,black_32%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0,black_32%)] lg:block"
        >
          {/* Large violet circle bleeding off the top-right edge. */}
          <Dot className="absolute -right-24 -top-20 h-[24rem] w-[24rem] text-violet" />
          {/* Overlapping magenta circle. */}
          <Dot className="absolute right-24 top-24 h-40 w-40 text-magenta" />
          {/* Small tangerine target (micro-accent). */}
          <Rings className="absolute left-24 bottom-6 h-28 w-28 text-tangerine" />
          {/* One checkerboard corner stamp. */}
          <div className="absolute left-28 top-4 h-16 w-16 rotate-6 border border-ink motif-checker text-ink/80" />
        </div>
      </div>

      {/* Chrome sticker (chrome usage #2 — the hero wordmark is #1). */}
      <div className="pointer-events-none absolute bottom-8 right-6 hidden max-w-[16rem] -rotate-3 sm:block lg:right-10">
        <Sticker color="chrome">{hero.tagline}</Sticker>
      </div>
    </section>
  );
}
