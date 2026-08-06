import Link from "next/link";
import { site, socialLinks } from "@/content/site";
import { iconForLabel } from "@/components/icons";
import { SunStamp } from "@/components/ui";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink bg-cream text-ink">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link href="/#top" className="font-display text-2xl text-ink">
              Rachelle Del Aguila
            </Link>
            <p className="mt-3 leading-relaxed text-ink">{site.role}.</p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-6 sm:items-end">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
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
            </ul>
            <ul className="flex gap-2">
              {socialLinks.map((link) => {
                const Icon = iconForLabel(link.label);
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      aria-label={link.description}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 w-11 items-center justify-center border border-ink text-ink transition-colors hover:bg-ink hover:text-cream"
                    >
                      <Icon width={18} height={18} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-ink/20 pt-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="mono text-[11px] text-ink/80">
            © {year} {site.name} · Built with Next.js · GitHub Pages
          </p>
          {/* The single stamp — a small gold sun. */}
          <SunStamp className="h-10 w-10 text-gold" />
        </div>
      </div>
    </footer>
  );
}
