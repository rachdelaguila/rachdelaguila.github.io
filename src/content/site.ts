/**
 * Centralized site configuration and copy.
 *
 * Edit professional claims, links, and section copy here rather than inside
 * components. Keep everything truthful — do not add metrics, employers, or
 * outcomes that are not already public and supportable.
 *
 * Values marked `TODO: confirm` are placeholders that the site owner should
 * verify or replace before launch. They are intentionally centralized so a
 * single edit updates every usage.
 */

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  /** Short, accessible description used for aria-labels. */
  description: string;
};

/**
 * Canonical production URL. This is a GitHub Pages user site served at the
 * domain root, so no basePath is required. Update if a custom domain is added.
 */
export const siteUrl = "https://rachdelaguila.github.io";

export const site = {
  name: "Rachelle Del Aguila",
  shortName: "Rachelle Del Aguila",
  role: "AI product strategist & technical product builder",

  /** Used for <title> templates, Open Graph, and structured data. */
  seo: {
    title: "Rachelle Del Aguila — AI Product Strategist & Technical Product Builder",
    description:
      "Rachelle Del Aguila is an AI product strategist and technical product builder working at the intersection of enterprise systems, trustworthy AI, and operational transformation.",
    /** Relative to the site root; generated as an SVG placeholder in /public. */
    ogImage: "/og.svg",
    locale: "en_US",
  },

  nav: [
    { label: "Work", href: "/#work" },
    { label: "About", href: "/#about" },
    { label: "Writing", href: "/#writing" },
    { label: "Contact", href: "/#contact" },
  ] satisfies NavItem[],

  hero: {
    eyebrow: "AI product strategy & technical product building",
    heading: "Rachelle Del Aguila",
    /** Playful editorial phrase used as a rotated accent in the hero. */
    tagline: "Products, systems & ideas built for real people",
    positioning:
      "I build and strategize AI products where enterprise systems, trust, and operational complexity collide.",
    /** One short supporting line under the positioning; longer framing lives in About. */
    supporting: [
      "I turn messy, high-stakes workflows into products and operating systems people can understand, trust, and adopt.",
    ],
    primaryCta: { label: "View selected work", href: "/#work" },
    secondaryCta: { label: "Read my writing", href: "/#writing" },
    /** Short signals shown beneath the hero copy. Keep these truthful. */
    signals: [
      "Complex, high-stakes workflows",
      "Trust, governance & adoption",
      "Enterprise & financial systems",
    ],
    /** Mono highlighter microlabels stacked under the masthead name. */
    microlabels: [
      "AI product strategy & technical building",
      "Enterprise systems · trust · adoption",
      "NYC",
    ],
  },

  about: {
    heading: "About",
    lead: "I’m a builder and strategist who is happiest where technology meets hard, human problems.",
    paragraphs: [
      "I work as an AI product strategist and technical product builder, spanning product strategy, enterprise technology, and the operational realities of financial and trading systems.",
      "My work lives in the complicated middle — the ambiguous, high-stakes workflows where a good product has to earn trust before it can earn adoption. I care as much about how a system is adopted and governed as I do about whether it ships.",
      "I’m an MBA candidate at Columbia Business School, graduating in 2027. That path is sharpening an operator’s instinct I’d already been building in enterprise environments — reading a business, finding where the workflow actually breaks, and turning that understanding into products people can rely on.",
      "Across trading technology, enterprise AI adoption, and early-stage product discovery, I’ve learned that trust is the real unlock. The most interesting problems aren’t only technical; they’re about whether people believe a system enough to change how they work.",
    ],
    /** Grounded, qualitative themes — not credentials to inflate. */
    focus: [
      "Trustworthy AI & governance",
      "Enterprise systems & workflows",
      "Product strategy & discovery",
      "Operational transformation",
    ],
  },

  writing: {
    heading: "Writing",
    framing: "How do we build trusted technology, and who do we become while trying?",
    description:
      "I write about the space where technology, AI, and product meet trust, reinvention, and identity — the practical work of building high-stakes systems, and the more personal questions about wellness, becoming, and who we are on the other side of the tools we make.",
    themes: [
      "Technology",
      "AI",
      "Product",
      "Trust",
      "Reinvention",
      "Wellness",
      "Identity",
      "Becoming",
    ],
    cta: { label: "Read on Substack", href: "" }, // href resolved from `links.substack`
  },

  contact: {
    heading: "Contact",
    lead: "Get in touch",
    description:
      "The fastest way to reach me is LinkedIn. For writing and everything in between, I’m on Substack.",
  },

  /**
   * Centralized links. Do not hardcode these URLs anywhere else.
   * Verified reachable (LinkedIn profile title confirms the slug).
   */
  links: {
    github: "https://github.com/rachdelaguila",
    linkedin: "https://www.linkedin.com/in/rachdelaguila/",
    substack: "https://substack.com/@rachdelaguila",
  },
} as const;

/** General social list (used by the footer). */
export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: site.links.linkedin,
    description: "Connect with Rachelle on LinkedIn",
  },
  {
    label: "Substack",
    href: site.links.substack,
    description: "Read Rachelle’s writing on Substack",
  },
  {
    label: "GitHub",
    href: site.links.github,
    description: "See Rachelle’s code and projects on GitHub",
  },
];

export type ContactCta = SocialLink & { variant: "primary" | "outline" };

/** Contact CTAs: LinkedIn primary (filled), Substack + GitHub outline. */
export const contactCtas: ContactCta[] = [
  {
    label: "LinkedIn",
    href: site.links.linkedin,
    description: "Connect with Rachelle on LinkedIn",
    variant: "primary",
  },
  {
    label: "Substack",
    href: site.links.substack,
    description: "Read Rachelle’s writing on Substack",
    variant: "outline",
  },
  {
    label: "GitHub",
    href: site.links.github,
    description: "See Rachelle’s code and projects on GitHub",
    variant: "outline",
  },
];
