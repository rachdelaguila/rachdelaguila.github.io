import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-start px-6 py-24 sm:py-32 lg:px-8">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-coral">
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
          className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-6 py-3 text-base font-medium text-ivory transition-colors hover:bg-navy-700"
        >
          Back to home
          <ArrowRightIcon width={18} height={18} />
        </Link>
        <Link
          href="/#work"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-navy/20 px-6 py-3 text-base font-medium text-navy transition-colors hover:border-navy/40 hover:bg-navy/5"
        >
          View selected work
        </Link>
      </div>
    </section>
  );
}
