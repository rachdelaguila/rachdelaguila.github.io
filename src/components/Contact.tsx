import { site, contactCtas } from "@/content/site";
import { Eyebrow, ScriptNote } from "@/components/ui";
import { iconForLabel } from "@/components/icons";
import { cn } from "@/lib/utils";

export function Contact() {
  const { contact } = site;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-ink bg-cream"
    >
      {/* Composed closing moment: centered, generous whitespace. */}
      <div className="mx-auto flex max-w-3xl scroll-mt-24 flex-col items-center px-6 py-28 text-center sm:py-32 lg:px-8">
        <Eyebrow highlight="olive">{contact.heading}</Eyebrow>

        <h2
          id="contact-heading"
          className="font-display mt-6 text-6xl text-ink sm:text-7xl"
        >
          Get in touch
        </h2>

        <p className="measure mt-6 leading-relaxed text-ink text-pretty">
          {contact.description}
        </p>

        <div className="relative mt-10">
          <ul className="flex flex-wrap items-center justify-center gap-4">
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
                      "font-chunk inline-flex items-center justify-center gap-2",
                      isPrimary
                        ? "bg-coral px-9 py-4 text-xl text-cream"
                        : "border border-ink px-6 py-3.5 text-base text-ink transition-colors hover:bg-ink hover:text-cream",
                    )}
                  >
                    <Icon width={isPrimary ? 22 : 18} height={isPrimary ? 22 : 18} />
                    {cta.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <ScriptNote className="absolute -bottom-9 right-2 -rotate-6 text-[1.7rem]">
            let’s make something
          </ScriptNote>
        </div>
      </div>
    </section>
  );
}
