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
        scrolled ? "bg-cream/95 backdrop-blur-sm" : "bg-cream",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link href="/#top" className="font-display text-xl text-ink">
          Rachelle Del Aguila
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="mono text-[11px] text-ink underline decoration-transparent decoration-2 underline-offset-4 transition-colors hover:decoration-coral"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                className="mono inline-flex items-center bg-ink px-4 py-2 text-[11px] text-cream transition-colors hover:bg-coral"
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
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1.5 lg:px-8">
          <span className="mono text-[10px] text-ink/70">
            AI Product Strategist · Technical Product Builder · NYC
          </span>
          <span className="mono hidden text-[10px] text-ink/70 sm:inline">
            Focus: Trustworthy AI &amp; Enterprise Systems
          </span>
        </div>
      </div>
    </header>
  );
}
