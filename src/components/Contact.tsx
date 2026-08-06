import { site, socialLinks } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRightIcon, iconForLabel } from "@/components/icons";
import { Rings, WaveDivider } from "@/components/decor";

export function Contact() {
  const { contact, links } = site;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="reveal relative overflow-hidden bg-peach"
    >
      {/* Wavy transition from cream into peach. */}
      <WaveDivider className="-mt-px text-peach" flip />

      {/* Decorative rings kept in the empty bottom-left corner, bleeding off
          and clear of the email/buttons (which are in the right column). */}
      <Rings
        aria-hidden
        className="animate-pop-float pointer-events-none absolute -left-10 -bottom-10 z-0 hidden h-32 w-32 text-purple lg:block"
      />

      <div className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 pb-24 pt-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <SectionHeading
            id="contact-heading"
            eyebrow={contact.heading}
            title={
              <>
                Get in <em className="italic text-magenta">touch</em>
              </>
            }
            description={contact.description}
          />

          <div className="lg:pt-2">
            <a
              href={`mailto:${links.email}`}
              className="font-display group inline-flex items-center gap-2 text-2xl text-magenta underline decoration-magenta decoration-wavy decoration-2 underline-offset-[6px] transition-colors hover:text-purple hover:decoration-purple sm:text-3xl"
            >
              {links.email}
              <ArrowUpRightIcon width={22} height={22} />
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
                      className="hover-pop inline-flex items-center gap-2 rounded-full border-2 border-ink bg-cream px-4 py-2.5 text-sm font-bold text-ink shadow-pop-sm hover:bg-ink hover:text-cream"
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
