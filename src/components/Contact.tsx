import { site, socialLinks } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRightIcon, iconForLabel } from "@/components/icons";

export function Contact() {
  const { contact, links } = site;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-navy/10 bg-ivory-deep/50"
    >
      <div className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <SectionHeading
            id="contact-heading"
            eyebrow={contact.heading}
            title={contact.lead}
            description={contact.description}
          />

          <div className="lg:pt-2">
            <a
              href={`mailto:${links.email}`}
              className="group inline-flex items-center gap-2 font-serif text-2xl font-semibold text-navy transition-colors hover:text-coral sm:text-3xl"
            >
              {links.email}
              <ArrowUpRightIcon
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                width={22}
                height={22}
              />
            </a>

            <ul className="mt-8 flex flex-wrap gap-3">
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
                      className="inline-flex items-center gap-2 rounded-md border border-navy/20 px-4 py-2.5 text-sm font-medium text-navy transition-colors hover:border-navy/40 hover:bg-navy/5"
                    >
                      <Icon width={18} height={18} />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
