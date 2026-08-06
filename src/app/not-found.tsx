import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="bg-cream">
      <div className="mx-auto flex max-w-3xl flex-col items-start px-6 py-24 sm:py-32 lg:px-8">
        <Eyebrow highlight="olive">Error 404</Eyebrow>
        <h1 className="font-display mt-5 text-5xl text-coral sm:text-6xl">
          This page wandered off
        </h1>
        <p className="measure mt-5 leading-relaxed text-ink text-pretty">
          The page you’re looking for doesn’t exist or may have moved. Let’s get
          you back to something useful.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="font-chunk inline-flex items-center justify-center gap-2 bg-coral px-7 py-3 text-xl text-cream"
          >
            Back to home
            <ArrowRightIcon width={20} height={20} />
          </Link>
          <Link
            href="/#work"
            className="font-chunk inline-flex items-center justify-center gap-2 border border-ink px-6 py-3 text-base text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            View selected work
          </Link>
        </div>
      </div>
    </section>
  );
}
