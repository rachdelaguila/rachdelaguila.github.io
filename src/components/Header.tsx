"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { MobileNavigation } from "@/components/MobileNavigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-ink transition-colors",
        scrolled ? "bg-paper/95 backdrop-blur-sm" : "bg-paper",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link href="/#top" className="font-serif text-lg font-semibold tracking-tight text-ink">
          Rachelle <span className="italic text-magenta-700">Del Aguila</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="squiggle font-condensed text-sm text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                className="hover-pop inline-flex items-center rounded-full bg-ink px-4 py-2 font-condensed text-xs text-paper shadow-pop-sm"
              >
                Get in touch
              </Link>
            </li>
          </ul>
        </nav>

        <MobileNavigation items={site.nav} />
      </div>

      {/* Folio microline (facts only), under a hairline. */}
      <div className="border-t border-ink/15">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1.5 font-condensed text-[10px] text-ink/70 lg:px-8">
          <span>AI Product Strategist · Technical Product Builder</span>
          <span className="hidden sm:inline">
            Focus: Trustworthy AI &amp; Enterprise Systems
          </span>
        </div>
      </div>
    </header>
  );
}
