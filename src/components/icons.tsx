import type { SVGProps } from "react";

/**
 * Inline, decorative SVG icons. They are marked aria-hidden; the accessible
 * label lives on the surrounding link/button.
 */
type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
    ...props,
  };
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 9h3v11H4z" />
      <circle cx="5.5" cy="5.5" r="1.5" />
      <path d="M10 9h3v1.7c.5-.9 1.6-1.9 3.4-1.9 2.4 0 3.6 1.5 3.6 4.5V20h-3v-5.4c0-1.4-.5-2.3-1.8-2.3-1 0-1.6.7-1.9 1.4-.1.3-.1.6-.1 1V20h-3z" />
    </svg>
  );
}

export function SubstackIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor" stroke="none">
      <path d="M4 4h16v2.4H4zM4 8.6h16V11H4zM4 13.2 12 18l8-4.8V21l-8-4.6L4 21z" />
    </svg>
  );
}

export function iconForLabel(label: string) {
  switch (label.toLowerCase()) {
    case "linkedin":
      return LinkedinIcon;
    case "github":
      return GithubIcon;
    case "substack":
      return SubstackIcon;
    case "email":
      return MailIcon;
    default:
      return ArrowUpRightIcon;
  }
}
