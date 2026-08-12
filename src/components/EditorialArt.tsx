import type { ReactNode } from "react";
import type { PhotoId } from "@/content/photos";
import { cn } from "@/lib/utils";

/**
 * Launch-ready editorial panels used when a photo `src` is not yet set.
 * Abstract, site-system graphics — not stock photos or fake UI screenshots.
 * Real photography can replace these later via `src` in photos.ts with no
 * layout change.
 */
type EditorialArtProps = {
  id: PhotoId;
  className?: string;
};

export function EditorialArt({ id, className }: EditorialArtProps) {
  switch (id) {
    case "hero":
      return <HeroArt className={className} />;
    case "about":
      return <AboutArt className={className} />;
    case "writing":
      return <WritingArt className={className} />;
    case "work-almaos":
      return <AlmaOsArt className={className} />;
    case "work-enterprise-ai-adoption":
      return <EnterpriseArt className={className} />;
    case "work-trading-technology":
      return <TradingArt className={className} />;
    case "work-symsense-ai":
      return <SymSenseArt className={className} />;
    default:
      return null;
  }
}

function Frame({
  className,
  aspect,
  children,
  bg = "bg-blush",
}: {
  className?: string;
  aspect: string;
  children: ReactNode;
  bg?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden",
        aspect,
        bg,
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Dark editorial field for the hero name crossover — no portrait simulation. */
function HeroArt({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("relative h-full w-full overflow-hidden bg-[#5c524a]", className)}
    >
      <svg
        viewBox="0 0 640 360"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="640" height="360" fill="#5c524a" />
        {/* Soft paper grain via dots */}
        <g opacity="0.08" fill="#f2ebdd">
          {Array.from({ length: 48 }, (_, i) => (
            <circle
              key={i}
              cx={(i * 97) % 640}
              cy={(i * 53) % 360}
              r={(i % 3) + 0.6}
            />
          ))}
        </g>
        {/* Restrained line collage */}
        <g stroke="#f2ebdd" strokeOpacity="0.22" fill="none">
          <circle cx="118" cy="210" r="72" strokeWidth="1.25" />
          <circle cx="118" cy="210" r="42" strokeWidth="1" />
          <path d="M420 48h160M420 68h110" strokeWidth="1.5" />
          <path d="M40 300h220" strokeWidth="1" />
          <path d="M520 240l70 70" strokeWidth="1.25" />
        </g>
        <g fill="#d6cc72" opacity="0.55">
          <rect x="420" y="86" width="74" height="10" />
          <rect x="420" y="104" width="48" height="10" />
        </g>
        <text
          x="48"
          y="150"
          fill="#f2ebdd"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="92"
          fontWeight="700"
          letterSpacing="-2"
        >
          RD
        </text>
        <text
          x="52"
          y="188"
          fill="#f7d6ea"
          fontFamily="'Courier New', Courier, monospace"
          fontSize="13"
          letterSpacing="2.5"
        >
          AI · SYSTEMS · TRUST
        </text>
      </svg>
    </div>
  );
}

/** Related but distinct monogram panel for the About polaroid. */
function AboutArt({ className }: { className?: string }) {
  return (
    <Frame className={className} aspect="aspect-[3/4]" bg="bg-cream">
      <svg
        viewBox="0 0 300 400"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="300" height="400" fill="#f2ebdd" />
        <rect x="18" y="18" width="264" height="364" fill="none" stroke="#201d1a" strokeWidth="1" />
        <circle cx="150" cy="168" r="78" fill="none" stroke="#201d1a" strokeWidth="1.25" />
        <circle cx="150" cy="168" r="52" fill="#f7d6ea" />
        <text
          x="150"
          y="182"
          textAnchor="middle"
          fill="#201d1a"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="54"
          fontWeight="700"
        >
          R
        </text>
        <rect x="78" y="268" width="144" height="18" fill="#d6cc72" />
        <text
          x="150"
          y="281"
          textAnchor="middle"
          fill="#201d1a"
          fontFamily="'Courier New', Courier, monospace"
          fontSize="11"
          letterSpacing="1.5"
        >
          RACHELLE
        </text>
        <text
          x="150"
          y="318"
          textAnchor="middle"
          fill="#201d1a"
          fontFamily="'Courier New', Courier, monospace"
          fontSize="10"
          letterSpacing="1.2"
          opacity="0.7"
        >
          NYC · BUILDER
        </text>
        <path
          d="M150 34c.3 8 1.6 14 8 17-6.4 3-7.7 9-8 17-.3-8-1.6-14-8-17 6.4-3 7.7-9 8-17Z"
          fill="#d9a441"
        />
      </svg>
    </Frame>
  );
}

function WritingArt({ className }: { className?: string }) {
  return (
    <Frame className={className} aspect="aspect-[16/10]" bg="bg-cream">
      <svg
        viewBox="0 0 480 300"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="480" height="300" fill="#f2ebdd" />
        <rect x="36" y="40" width="280" height="220" fill="#fbf9f4" stroke="#201d1a" strokeWidth="1" />
        <g stroke="#201d1a" strokeOpacity="0.35" strokeWidth="1">
          <path d="M60 88h220" />
          <path d="M60 112h196" />
          <path d="M60 136h210" />
          <path d="M60 160h170" />
          <path d="M60 184h188" />
          <path d="M60 208h140" />
        </g>
        <rect x="60" y="68" width="72" height="12" fill="#d6cc72" />
        <circle cx="380" cy="110" r="46" fill="none" stroke="#de4a2a" strokeWidth="1.5" />
        <circle cx="380" cy="110" r="18" fill="#f7d6ea" />
        <path d="M340 210h90M340 228h64" stroke="#201d1a" strokeWidth="1.25" />
        <text
          x="340"
          y="258"
          fill="#5b4fd4"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="18"
          fontStyle="italic"
        >
          notes
        </text>
      </svg>
    </Frame>
  );
}

/** Recovery / rhythm / privacy — circular calendar motifs. */
function AlmaOsArt({ className }: { className?: string }) {
  return (
    <Frame className={className} aspect="aspect-[3/4]" bg="bg-cream">
      <svg
        viewBox="0 0 300 400"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="300" height="400" fill="#f2ebdd" />
        <circle cx="150" cy="175" r="108" fill="none" stroke="#201d1a" strokeWidth="1.25" />
        <circle cx="150" cy="175" r="78" fill="none" stroke="#de4a2a" strokeWidth="1.5" strokeDasharray="4 6" />
        <circle cx="150" cy="175" r="46" fill="#f7d6ea" />
        <path
          d="M150 97a78 78 0 0 1 0 156"
          fill="none"
          stroke="#201d1a"
          strokeWidth="8"
          strokeOpacity="0.12"
        />
        {/* Day ticks */}
        {Array.from({ length: 12 }, (_, i) => {
          const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
          const x1 = 150 + Math.cos(a) * 96;
          const y1 = 175 + Math.sin(a) * 96;
          const x2 = 150 + Math.cos(a) * 108;
          const y2 = 175 + Math.sin(a) * 108;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#201d1a"
              strokeWidth="1.5"
            />
          );
        })}
        <rect x="86" y="308" width="128" height="16" fill="#d6cc72" />
        <text
          x="150"
          y="320"
          textAnchor="middle"
          fill="#201d1a"
          fontFamily="'Courier New', Courier, monospace"
          fontSize="11"
          letterSpacing="1.5"
        >
          RECOVERY · RHYTHM
        </text>
        <text
          x="150"
          y="348"
          textAnchor="middle"
          fill="#201d1a"
          fontFamily="'Courier New', Courier, monospace"
          fontSize="10"
          opacity="0.65"
          letterSpacing="1"
        >
          PRIVACY FIRST
        </text>
      </svg>
    </Frame>
  );
}

/** Systems / workflows / governance — modular connected blocks. */
function EnterpriseArt({ className }: { className?: string }) {
  return (
    <Frame className={className} aspect="aspect-[3/4]" bg="bg-cream">
      <svg
        viewBox="0 0 300 400"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="300" height="400" fill="#f2ebdd" />
        {/* Modular nodes */}
        <g fill="#fbf9f4" stroke="#201d1a" strokeWidth="1.25">
          <rect x="40" y="56" width="88" height="56" />
          <rect x="172" y="56" width="88" height="56" />
          <rect x="106" y="156" width="88" height="56" />
          <rect x="40" y="256" width="88" height="56" />
          <rect x="172" y="256" width="88" height="56" />
        </g>
        <g stroke="#de4a2a" strokeWidth="1.5" fill="none">
          <path d="M128 84h44" />
          <path d="M84 112v44l44 28" />
          <path d="M216 112v44l-44 28" />
          <path d="M128 212v44l-44 28" />
          <path d="M172 212v44l44 28" />
        </g>
        <g fill="#d6cc72">
          <circle cx="84" cy="84" r="5" />
          <circle cx="216" cy="84" r="5" />
          <circle cx="150" cy="184" r="5" />
          <circle cx="84" cy="284" r="5" />
          <circle cx="216" cy="284" r="5" />
        </g>
        <rect x="78" y="346" width="144" height="16" fill="#f7d6ea" />
        <text
          x="150"
          y="358"
          textAnchor="middle"
          fill="#201d1a"
          fontFamily="'Courier New', Courier, monospace"
          fontSize="11"
          letterSpacing="1.2"
        >
          HUMAN IN THE LOOP
        </text>
      </svg>
    </Frame>
  );
}

/** Structured flows / precision — grids and directional sequences. */
function TradingArt({ className }: { className?: string }) {
  return (
    <Frame className={className} aspect="aspect-[3/4]" bg="bg-cream">
      <svg
        viewBox="0 0 300 400"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="300" height="400" fill="#f2ebdd" />
        {/* Grid */}
        <g stroke="#201d1a" strokeOpacity="0.18" strokeWidth="1">
          {Array.from({ length: 8 }, (_, i) => (
            <line key={`v${i}`} x1={36 + i * 32} y1="40" x2={36 + i * 32} y2="300" />
          ))}
          {Array.from({ length: 9 }, (_, i) => (
            <line key={`h${i}`} x1="36" y1={40 + i * 32} x2="260" y2={40 + i * 32} />
          ))}
        </g>
        {/* Directional flow */}
        <g stroke="#201d1a" strokeWidth="2" fill="none">
          <path d="M52 88h160l-20-14M212 88l-20 14" />
          <path d="M52 152h120" />
          <path d="M52 216h180l-20-14M232 216l-20 14" />
          <path d="M52 280h96" />
        </g>
        <g fill="#de4a2a">
          <rect x="52" y="78" width="10" height="20" />
          <rect x="52" y="142" width="10" height="20" />
          <rect x="52" y="206" width="10" height="20" />
          <rect x="52" y="270" width="10" height="20" />
        </g>
        <rect x="70" y="334" width="160" height="16" fill="#d6cc72" />
        <text
          x="150"
          y="346"
          textAnchor="middle"
          fill="#201d1a"
          fontFamily="'Courier New', Courier, monospace"
          fontSize="11"
          letterSpacing="1.2"
        >
          FLOW · PRECISION
        </text>
      </svg>
    </Frame>
  );
}

/** Discovery / listening / careful experimentation — organic layered signals. */
function SymSenseArt({ className }: { className?: string }) {
  return (
    <Frame className={className} aspect="aspect-[3/4]" bg="bg-cream">
      <svg
        viewBox="0 0 300 400"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="300" height="400" fill="#f2ebdd" />
        <ellipse cx="150" cy="150" rx="96" ry="70" fill="#f7d6ea" />
        <ellipse
          cx="150"
          cy="150"
          rx="68"
          ry="48"
          fill="none"
          stroke="#201d1a"
          strokeWidth="1.25"
        />
        <ellipse
          cx="150"
          cy="150"
          rx="40"
          ry="28"
          fill="none"
          stroke="#5b4fd4"
          strokeWidth="1.5"
          strokeOpacity="0.7"
        />
        {/* Layered signal marks */}
        <g stroke="#201d1a" strokeWidth="1.25" fill="none" strokeOpacity="0.55">
          <path d="M54 250c28-22 54-22 82 0s54 22 82 0 54-22 82 0" />
          <path d="M54 278c28-18 54-18 82 0s54 18 82 0 54-18 82 0" />
          <path d="M54 306c28-14 54-14 82 0s54 14 82 0 54-14 82 0" />
        </g>
        <rect x="78" y="338" width="144" height="16" fill="#d6cc72" />
        <text
          x="150"
          y="350"
          textAnchor="middle"
          fill="#201d1a"
          fontFamily="'Courier New', Courier, monospace"
          fontSize="11"
          letterSpacing="1.2"
        >
          LISTEN · VALIDATE
        </text>
      </svg>
    </Frame>
  );
}
