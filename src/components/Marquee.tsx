import { Fragment } from "react";

/**
 * Full-width magenta cover strip — the single large-area use of the accent on
 * the page. White grotesque caps, 0deg, thin ink rules above/below. Decorative
 * (aria-hidden); the same positioning is stated in real copy elsewhere. Text is
 * sized as WCAG "large" so white-on-magenta clears AA. Pauses on hover; frozen
 * under prefers-reduced-motion (handled globally).
 */
const ITEMS = [
  "AI Product Strategy",
  "Trust & Governance",
  "Enterprise Systems",
  "Operational Transformation",
];

export function Marquee() {
  const half = (
    <ul className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <li key={item} className="flex items-center">
          <span className="font-head px-6 py-2.5 text-2xl leading-none text-paper">
            {item}
          </span>
          <span aria-hidden className="px-1 text-lg text-paper">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      aria-hidden
      className="marquee relative z-20 overflow-hidden border-y border-ink bg-magenta"
    >
      <div className="marquee-track">
        {[0, 1].map((i) => (
          <Fragment key={i}>{half}</Fragment>
        ))}
      </div>
    </div>
  );
}
