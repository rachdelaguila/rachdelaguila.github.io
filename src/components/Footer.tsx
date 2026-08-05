import Link from "next/link";
import { site, socialLinks } from "@/content/site";
import { iconForLabel } from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy/10 bg-ivory">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link
              href="/#top"
              className="font-serif text-lg font-semibold tracking-tight text-navy"
            >
              {site.name}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {site.role}.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-6 sm:items-end">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-sm text-sm font-medium text-muted transition-colors hover:text-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex gap-2">
              {socialLinks.map((link) => {
                const Icon = iconForLabel(link.label);
                const isMail = link.label.toLowerCase() === "email";
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      aria-label={link.description}
                      {...(isMail
                        ? {}
                        : { target: "_blank", rel: "noopener noreferrer" })}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-navy/15 text-navy transition-colors hover:border-navy/35 hover:bg-navy/5"
                    >
                      <Icon width={18} height={18} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-navy/10 pt-6 text-sm text-muted">
          <p>
            © {year} {site.name}. Built with Next.js and deployed on GitHub
            Pages.
          </p>
        </div>
      </div>
    </footer>
  );
}
