import { site, contactCtas } from "@/content/site";
import { Eyebrow } from "@/components/ui";
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
      {/* A composed closing moment: centered, generous whitespace, one accent. */}
      <div className="mx-auto flex max-w-2xl scroll-mt-28 flex-col items-center px-6 py-28 text-center sm:py-32 lg:px-8">
        <Eyebrow>{contact.heading}</Eyebrow>

        <h2
          id="contact-heading"
          className="font-display mt-6 text-4xl text-ink sm:text-5xl"
        >
          Get in <em className="italic text-magenta">touch</em>
        </h2>
        {/* The one decorative accent for this section. */}
        <span aria-hidden className="mt-4 block h-1 w-12 rounded-full bg-magenta" />

        <p className="measure mt-6 text-lg leading-relaxed text-ink text-pretty">
          {contact.description}
        </p>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
                    "hover-pop inline-flex items-center justify-center gap-2 rounded-full border border-ink font-condensed shadow-pop",
                    isPrimary
                      ? "bg-ink px-9 py-4 text-base text-paper"
                      : "bg-paper px-6 py-3 text-sm text-ink",
                  )}
                >
                  <Icon width={isPrimary ? 22 : 18} height={isPrimary ? 22 : 18} />
                  {cta.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
