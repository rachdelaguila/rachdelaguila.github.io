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
        "sticky top-0 z-50 border-b-2 transition-colors",
        scrolled ? "border-ink bg-cream/95 backdrop-blur-sm" : "border-transparent bg-cream",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/#top"
          className="font-display text-xl text-ink"
        >
          Rachelle <span className="italic text-magenta">Del Aguila</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="squiggle text-sm font-semibold text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={`mailto:${site.links.email}`}
                className="hover-pop inline-flex items-center rounded-full border-2 border-ink bg-yellow px-4 py-2 text-sm font-bold text-ink shadow-pop-sm"
              >
                Get in touch
              </Link>
            </li>
          </ul>
        </nav>

        <MobileNavigation items={site.nav} />
      </div>
    </header>
  );
}
