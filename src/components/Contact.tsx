import { site, contactCtas } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { iconForLabel } from "@/components/icons";
import { cn } from "@/lib/utils";

export function Contact() {
  const { contact } = site;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="reveal border-t border-ink bg-lilac"
    >
      <div className="mx-auto max-w-6xl scroll-mt-28 px-6 py-24 lg:px-8">
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
            <ul className="flex flex-wrap gap-3.5">
              {contactCtas.map((cta) => {
                const Icon = iconForLabel(cta.label);
                const isPrimary = cta.variant === "primary";
                return (
                  <li key={cta.label}>
                    <a
                      href={cta.href}
                      aria-label={cta.description}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "hover-pop inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 font-condensed text-sm shadow-pop",
                        isPrimary
                          ? "bg-ink text-paper"
                          : "bg-paper text-ink",
                      )}
                    >
                      <Icon width={18} height={18} />
                      {cta.label}
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
