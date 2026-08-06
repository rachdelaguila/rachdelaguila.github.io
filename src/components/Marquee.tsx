import { Fragment } from "react";

/**
 * Olive ticker cover-strip (WANDA move). Ink mono caps, ✱ separators, 0deg,
 * thin ink rules top and bottom, slow scroll, pause on hover. Decorative
 * (aria-hidden); the same sections appear in real nav. Frozen under
 * prefers-reduced-motion (handled globally).
 */
const ITEMS = ["Work", "About", "Writing", "Contact"];

export function Marquee() {
  const half = (
    <ul className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <li key={item} className="flex items-center">
          <span className="mono px-6 py-2.5 text-lg font-bold text-ink">
            {item}
          </span>
          <span aria-hidden className="text-base text-ink">
            ✱
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      aria-hidden
      className="marquee relative z-20 overflow-hidden border-y border-ink bg-olive"
    >
      <div className="marquee-track">
        {[0, 1].map((i) => (
          <Fragment key={i}>{half}</Fragment>
        ))}
      </div>
    </div>
  );
}
