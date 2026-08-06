import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { Rings } from "@/components/decor";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <Rings
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 z-0 h-64 w-64 text-magenta"
      />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-start px-6 py-24 sm:py-32 lg:px-8">
        <span className="numeral-outline text-8xl">404</span>
        <h1 className="font-display mt-4 text-4xl text-ink sm:text-5xl">
          This page wandered <em className="italic text-magenta">off</em>.
        </h1>
        <p className="measure mt-4 text-lg leading-relaxed text-ink text-pretty">
          The page you’re looking for doesn’t exist or may have moved. Let’s get
          you back to something useful.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="hover-pop inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 font-condensed text-sm text-paper shadow-pop"
          >
            Back to home
            <ArrowRightIcon width={18} height={18} />
          </Link>
          <Link
            href="/#work"
            className="hover-pop inline-flex items-center justify-center gap-2 rounded-full border border-ink bg-paper px-7 py-3.5 font-condensed text-sm text-ink shadow-pop"
          >
            View selected work
          </Link>
        </div>
      </div>
    </section>
  );
}
