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
      className="border-t border-ink bg-paper"
    >
      {/* Composed closing: centered, generous whitespace, LinkedIn dominant. */}
      <div className="mx-auto flex max-w-3xl scroll-mt-28 flex-col items-center px-6 py-28 text-center sm:py-32 lg:px-8">
        <div className="flex flex-col items-center">
          <Eyebrow>{contact.heading}</Eyebrow>
          <span aria-hidden className="mt-2 block h-0.5 w-12 bg-magenta" />
        </div>

        <h2
          id="contact-heading"
          className="font-head mt-6 text-5xl text-ink sm:text-6xl"
        >
          Get in touch
        </h2>

        <p className="measure mt-6 font-serif text-lg leading-relaxed text-ink text-pretty">
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
                    "invert-hover font-condensed inline-flex items-center justify-center gap-2 border border-ink",
                    isPrimary
                      ? "bg-ink px-10 py-4 text-base text-paper hover:bg-paper hover:text-ink"
                      : "bg-paper px-6 py-3 text-sm text-ink hover:bg-ink hover:text-paper",
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
