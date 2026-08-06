import Link from "next/link";
import { site, socialLinks } from "@/content/site";
import { iconForLabel } from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link href="/#top" className="focus-on-dark font-head text-2xl text-paper">
              Rachelle Del Aguila
            </Link>
            <p className="mt-3 font-serif text-sm leading-relaxed text-paper">
              {site.role}.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-6 sm:items-end">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-on-dark link-underline font-condensed text-[11px] text-paper"
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
                      className="invert-hover focus-on-dark inline-flex h-11 w-11 items-center justify-center border border-paper/50 text-paper hover:bg-paper hover:text-ink"
                    >
                      <Icon width={18} height={18} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-paper/20 pt-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="font-serif text-sm text-paper">
            © {year} {site.name}. Built with Next.js and deployed on GitHub
            Pages.
          </p>
          {/* The single wink: a barcode stamp. */}
          <div className="flex flex-col items-start gap-1 sm:items-end">
            <span aria-hidden className="barcode" />
            <span className="font-condensed text-[10px] text-paper/70">
              {site.name}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
