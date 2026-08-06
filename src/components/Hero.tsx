import Link from "next/link";
import { site } from "@/content/site";
import { ArrowRightIcon } from "@/components/icons";
import { Chip, Eyebrow, Sticker } from "@/components/ui";
import { Dot, Rings, Sunburst } from "@/components/decor";

export function Hero() {
  const { hero } = site;
  const signalAccents = ["magenta", "purple", "tangerine"] as const;

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-cream"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pb-20 pt-20 sm:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:px-8 lg:py-28">
        <div className="relative z-10 max-w-2xl">
          {/* Mobile-only in-flow decorative row (never overlaps text). */}
          <div aria-hidden className="mb-7 flex items-center gap-3 lg:hidden">
            <Sunburst className="animate-pop-spin h-12 w-12 text-tangerine" />
            <Dot className="h-6 w-6 text-magenta" />
            <div className="h-8 w-8 rotate-6 border-2 border-ink motif-checker text-ink/80" />
            <Rings className="h-9 w-9 text-purple" />
          </div>

          <Eyebrow>{hero.eyebrow}</Eyebrow>

          <h1
            id="hero-heading"
            className="font-display mt-6 text-ink text-[clamp(4rem,10vw,9rem)]"
          >
            <span className="block">Rachelle</span>
            <span className="block italic text-magenta">Del Aguila</span>
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
              className="hover-pop group inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-yellow px-7 py-3.5 text-base font-bold text-ink shadow-pop"
            >
              {hero.primaryCta.label}
              <ArrowRightIcon width={18} height={18} />
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="hover-pop inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-cream px-7 py-3.5 text-base font-bold text-ink shadow-pop"
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

        {/* Desktop hero shape cluster — one composition, contained to this
            column (overflow-hidden) and faded on the left edge so no shape
            comes near the text column. */}
        <div
          aria-hidden
          className="pointer-events-none relative z-0 hidden h-[30rem] overflow-hidden [mask-image:linear-gradient(to_right,transparent_0,black_30%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0,black_30%)] lg:block"
        >
          {/* Yellow sunburst rays peeking from behind. */}
          <Sunburst className="animate-pop-spin absolute right-0 top-6 h-72 w-72 text-yellow" />
          {/* Large purple circle bleeding off the top-right edge. */}
          <Dot className="absolute -right-24 -top-24 h-[26rem] w-[26rem] text-purple" />
          {/* Magenta circle overlapping the purple. */}
          <Dot className="absolute right-24 top-24 h-40 w-40 text-magenta" />
          {/* Concentric tangerine ring target. */}
          <Rings className="animate-pop-float absolute left-24 bottom-4 h-44 w-44 text-tangerine" />
          {/* Exactly one checkerboard patch. */}
          <div className="animate-pop-float-slow absolute left-28 top-4 h-20 w-20 rotate-6 border-2 border-ink motif-checker text-ink/80" />
        </div>
      </div>

      {/* Rotated editorial sticker — legible tagline. */}
      <div className="pointer-events-none absolute bottom-8 right-6 hidden max-w-[16rem] -rotate-6 sm:block lg:right-10">
        <Sticker color="tangerine">{hero.tagline}</Sticker>
      </div>
    </section>
  );
}
