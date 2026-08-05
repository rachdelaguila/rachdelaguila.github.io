import { site, socialLinks } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRightIcon, iconForLabel } from "@/components/icons";
import { Dot, Rings, WaveDivider } from "@/components/decor";

export function Contact() {
  const { contact, links } = site;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-ivory"
    >
      {/* Purple wave drips down from the writing centerpiece. */}
      <WaveDivider className="text-purple" flip />

      <Rings
        aria-hidden
        className="pointer-events-none absolute right-6 bottom-10 hidden h-28 w-28 text-tangerine/70 lg:block"
      />
      <Dot
        aria-hidden
        className="pointer-events-none absolute left-6 top-28 hidden h-6 w-6 text-magenta lg:block"
      />

      <div className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-24 pt-8 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <SectionHeading
            id="contact-heading"
            eyebrow={contact.heading}
            eyebrowClassName="text-magenta"
            title={contact.lead}
            description={contact.description}
          />

          <div className="lg:pt-2">
            <a
              href={`mailto:${links.email}`}
              className="group inline-flex items-center gap-2 font-serif text-2xl font-semibold text-magenta transition-colors hover:text-purple sm:text-3xl"
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
                      className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-ivory"
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
