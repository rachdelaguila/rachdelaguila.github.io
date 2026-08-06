import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="bg-paper">
      <div className="mx-auto flex max-w-3xl flex-col items-start px-6 py-24 sm:py-32 lg:px-8">
        <span className="numeral-outline text-8xl">404</span>
        <h1 className="font-head mt-4 text-4xl text-ink sm:text-5xl">
          This page wandered off
        </h1>
        <p className="measure mt-4 font-serif text-lg leading-relaxed text-ink text-pretty">
          The page you’re looking for doesn’t exist or may have moved. Let’s get
          you back to something useful.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="invert-hover inline-flex items-center justify-center gap-2 border border-ink bg-ink px-7 py-3.5 font-condensed text-sm text-paper hover:bg-paper hover:text-ink"
          >
            Back to home
            <ArrowRightIcon width={18} height={18} />
          </Link>
          <Link
            href="/#work"
            className="invert-hover inline-flex items-center justify-center gap-2 border border-ink bg-paper px-7 py-3.5 font-condensed text-sm text-ink hover:bg-ink hover:text-paper"
          >
            View selected work
          </Link>
        </div>
      </div>
    </section>
  );
}
