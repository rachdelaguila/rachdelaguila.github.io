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
        "sticky top-0 z-40 border-b transition-colors",
        scrolled
          ? "border-navy/10 bg-ivory/90 backdrop-blur-sm"
          : "border-transparent bg-ivory",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/#top"
          className="rounded-sm font-serif text-lg font-semibold tracking-tight text-navy"
        >
          Rachelle <span className="text-magenta">Del Aguila</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-navy"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={`mailto:${site.links.email}`}
                className="ml-2 rounded-full bg-yellow px-4 py-2 text-sm font-semibold text-ink shadow-[3px_3px_0_0_var(--color-navy)] transition-colors hover:bg-tangerine"
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
