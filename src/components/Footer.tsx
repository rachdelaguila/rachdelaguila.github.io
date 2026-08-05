import Link from "next/link";
import { site, socialLinks } from "@/content/site";
import { iconForLabel } from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link
              href="/#top"
              className="focus-on-dark font-serif text-xl font-semibold tracking-tight text-ivory"
            >
              Rachelle <span className="text-magenta">Del Aguila</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-ivory/70">
              {site.role}.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-6 sm:items-end">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-on-dark rounded-sm text-sm font-medium text-ivory/80 transition-colors hover:text-yellow"
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
                      className="focus-on-dark inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:border-yellow hover:text-yellow"
                    >
                      <Icon width={18} height={18} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-ivory/15 pt-6 text-sm text-ivory/60">
          <p>
            © {year} {site.name}. Built with Next.js and deployed on GitHub
            Pages.
          </p>
        </div>
      </div>
    </footer>
  );
}
