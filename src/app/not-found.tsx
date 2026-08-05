import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { Sunburst } from "@/components/decor";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-peach-soft">
      <Sunburst
        aria-hidden
        className="animate-pop-spin pointer-events-none absolute -right-24 -top-24 h-96 w-96 text-yellow/60"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-start px-6 py-24 sm:py-32 lg:px-8">
        <p className="font-serif text-8xl font-semibold leading-none text-magenta">
          404
        </p>
        <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
          This page wandered off.
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted text-pretty">
          The page you’re looking for doesn’t exist or may have moved. Let’s get
          you back to something useful.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow px-7 py-3.5 text-base font-semibold text-ink shadow-[4px_4px_0_0_var(--color-navy)] transition-colors hover:bg-tangerine"
          >
            Back to home
            <ArrowRightIcon width={18} height={18} />
          </Link>
          <Link
            href="/#work"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy px-7 py-3.5 text-base font-semibold text-navy transition-colors hover:bg-navy hover:text-ivory"
          >
            View selected work
          </Link>
        </div>
      </div>
    </section>
  );
}
