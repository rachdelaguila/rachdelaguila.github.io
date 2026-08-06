import { Fragment } from "react";

/**
 * Full-width ink ticker. Decorative (aria-hidden) — the same positioning is
 * stated elsewhere in real copy. The track duplicates its items so the linear
 * scroll loops seamlessly; it pauses on hover and freezes under
 * prefers-reduced-motion (handled globally).
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
          <span className="font-condensed px-6 py-3 text-sm text-paper">
            {item}
          </span>
          <span aria-hidden className="text-magenta">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      aria-hidden
      className="marquee relative z-20 overflow-hidden border-y border-ink bg-ink"
    >
      <div className="marquee-track">
        {[0, 1].map((i) => (
          <Fragment key={i}>{half}</Fragment>
        ))}
      </div>
    </div>
  );
}
