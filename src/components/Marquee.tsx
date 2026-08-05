import { Fragment } from "react";

/**
 * Full-width scrolling marquee strip. Decorative (aria-hidden) — the same
 * positioning is stated elsewhere in real copy. The track duplicates its
 * items so the linear scroll loops seamlessly; it pauses on hover and freezes
 * under prefers-reduced-motion (handled globally).
 */
const ITEMS = [
  "AI Product Strategy",
  "Trust & Governance",
  "Enterprise Systems",
  "Operational Transformation",
];

export function Marquee() {
  // Two identical halves so translateX(-50%) yields a seamless loop.
  const half = (
    <ul className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <li key={item} className="flex items-center">
          <span className="px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-ink sm:text-base">
            {item}
          </span>
          <span aria-hidden className="text-ink/70">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      aria-hidden
      className="marquee relative z-20 -my-4 -rotate-1 overflow-hidden border-y-2 border-ink bg-yellow"
    >
      <div className="marquee-track">
        {[0, 1].map((i) => (
          <Fragment key={i}>{half}</Fragment>
        ))}
      </div>
    </div>
  );
}
