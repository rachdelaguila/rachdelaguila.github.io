/**
 * Selected work.
 *
 * Keep all descriptions high-level and truthful. Do not invent metrics,
 * partnerships, clients, budgets, employers, users, or technical claims.
 * Where a project involves confidential or sensitive contexts, keep the
 * language qualitative and grounded in Rachelle’s role and approach.
 *
 * Each project renders as a card on the home page and as a preliminary
 * project page at /work/[slug].
 */

export type Project = {
  slug: string;
  title: string;
  category: string;
  status: string;
  /** One–two sentence summary shown on the card and page intro. */
  summary: string;
  /** Optional, only when supportable and non-confidential. */
  outcome?: string;
  /** Longer framing for the project page. */
  overview: string;
  problemSpace: string;
  approach: string;
  themes: string[];
};

export const projects: Project[] = [
  {
    slug: "almaos",
    title: "AlmaOS",
    category: "Personal product · Wellness AI",
    status: "Ongoing exploration",
    summary:
      "A privacy-first AI wellness operating system exploring how health, calendar, and personal context can support more recovery-aware daily planning.",
    overview:
      "AlmaOS is an exploration of what a genuinely private, personal wellness operating system could feel like — one that treats a person’s health signals, schedule, and context as something to protect rather than exploit. The premise is simple to say and hard to do well: your day should be planned with an awareness of how you’re actually recovering.",
    problemSpace:
      "Most wellness tools optimize for engagement, not for the person. They fragment health data across apps, ignore the calendar most people actually live by, and rarely reason about recovery in a way that respects privacy. The hard problem is combining sensitive context into something useful without turning the person into a data product.",
    approach:
      "I’m approaching AlmaOS as a product-strategy and design exploration first: mapping the workflows of a real day, defining what “recovery-aware planning” should and shouldn’t do, and holding a privacy-first line as a non-negotiable constraint rather than a feature. The work stays deliberately high-level about any individual’s health data.",
    themes: [
      "Privacy-first design",
      "Personal context & scheduling",
      "Trust as a constraint",
      "Recovery-aware planning",
    ],
  },
  {
    slug: "enterprise-ai-adoption",
    title: "Enterprise AI Adoption",
    category: "Practice · AI product strategy",
    status: "Active practice",
    summary:
      "A body of work focused on workflow discovery, AI product strategy, governance, organizational adoption, reliability, and ROI in enterprise environments.",
    overview:
      "This is the through-line of much of my work: helping enterprises move from AI curiosity to AI that people actually use and trust. It spans discovery of where real workflows break, the product strategy for where AI belongs, and the governance and reliability work that determines whether anything survives contact with production.",
    problemSpace:
      "Enterprise AI rarely fails for lack of models. It fails on adoption, governance, and reliability — unclear ownership, workflows that were never mapped, and a gap between a demo and a dependable system. Leaders need a credible path from ambiguity to something measurable, without overpromising.",
    approach:
      "I start with the workflow, not the model: who does what today, where the friction and risk live, and what “good” would actually look like. From there I shape product strategy, define guardrails and governance, and keep a clear line to business outcomes and ROI. Confidential employers, clients, systems, and stakeholders are intentionally not named here.",
    themes: [
      "Workflow discovery",
      "Governance & reliability",
      "Organizational adoption",
      "ROI & business outcomes",
    ],
  },
  {
    slug: "trading-technology",
    title: "Trading Technology",
    category: "Prior work · Financial systems",
    status: "Prior work",
    summary:
      "Product and platform work across complex financial and post-trade operations, enterprise systems, workflow automation, data quality, and operational risk.",
    overview:
      "Earlier work in trading technology grounded my instincts for high-stakes, low-tolerance environments. Post-trade operations are unforgiving: the workflows are intricate, the data has to be right, and the cost of operational risk is real. It’s where I learned that the quality of a system is inseparable from the quality of the operations around it.",
    problemSpace:
      "Financial and post-trade operations combine dense enterprise systems, manual workflow, and strict requirements for data quality and control. Small breakdowns compound into operational risk. The challenge is improving reliability and automation without disrupting processes that cannot afford downtime.",
    approach:
      "I focused on understanding the end-to-end workflow, improving data quality and automation where it reduced risk, and treating enterprise systems as part of a larger operating picture. Descriptions here stay qualitative; specific metrics are omitted unless already public and approved.",
    themes: [
      "Post-trade operations",
      "Workflow automation",
      "Data quality",
      "Operational risk",
    ],
  },
  {
    slug: "symsense-ai",
    title: "SymSense AI",
    category: "Product discovery · Healthcare",
    status: "Discovery & validation",
    summary:
      "AI-enabled autoimmune-care product discovery and validation — understanding patient needs, testing product concepts, and evaluating viable business models.",
    overview:
      "SymSense AI is product discovery and validation work in autoimmune care: understanding what patients actually need, testing concepts against that reality, and evaluating whether a viable, responsible business model exists. It is discovery work, not a clinical product.",
    problemSpace:
      "Autoimmune care is complex, personal, and easy to get wrong. Patients navigate uncertainty and fragmented information. The discovery challenge is separating genuine, unmet needs from noise — and being honest about where an AI-enabled product can responsibly help and where it cannot.",
    approach:
      "I focus on patient-need discovery, concept testing, and business-model evaluation. The work is explicit about its limits: it does not provide clinical diagnosis or treatment, and it avoids medical claims. The goal is to learn whether a responsible product is worth building before building it.",
    themes: [
      "Patient-need discovery",
      "Concept testing",
      "Business-model validation",
      "Responsible scope",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
