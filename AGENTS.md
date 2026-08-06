# AGENTS.md

Guidance for Cursor and other coding-agent sessions working in this repository.
Read this before making changes.

## What this project is

A statically-exported **Next.js (App Router)** personal website for Rachelle Del
Aguila, deployed to **GitHub Pages**. It is deliberately static, content-light,
and truthful.

## Non-negotiable rules

1. **Protect truthful professional claims.** Everything on this site must be
   accurate and supportable. Do not embellish roles, seniority, or scope.
2. **Never fabricate portfolio metrics.** Do not invent numbers, users,
   revenue, ROI, partnerships, clients, employers, budgets, staff, or technical
   architecture. If a metric is not already public and approved in this
   repository, keep descriptions qualitative. Respect confidentiality —
   do not name confidential employers, clients, or internal systems.
3. **Keep editable content centralized.** All copy and links live in
   `src/content/site.ts` and `src/content/projects.ts`. Do not scatter
   professional claims, URLs, or the Substack link across components. The
   Substack URL and contact email are defined once in `site.ts`.
4. **Preserve accessibility.** Maintain semantic HTML and a logical heading
   hierarchy (one `<h1>` per page), keep all interactive elements keyboard
   usable, keep visible focus states, provide meaningful `alt` text, and label
   icon-only controls. Do not regress the mobile navigation’s keyboard behavior
   (Escape to close, focus management).
5. **Preserve static-export compatibility.** The site must keep building with
   `output: "export"`. Do **not** introduce anything requiring a server:
   API routes, server actions, middleware, dynamic server rendering, image
   optimization (keep `images.unoptimized: true`), databases, authentication,
   or a CMS. Dynamic routes must provide `generateStaticParams`.
6. **Respect motion preferences.** Keep animations restrained and honor
   `prefers-reduced-motion`. Never rely on animation to convey information.
7. **Run lint and build before committing.**
   ```bash
   npm run lint
   npm run build
   ```
   Fix all errors. Do not claim a check passed unless it actually ran.
8. **Never commit directly to `master`.** Use a feature branch and open a pull
   request into `master`. Do not merge PRs without explicit approval.
9. **Do not add backend infrastructure without explicit approval.** No servers,
   databases, analytics, or contact-form backends. Contact routes through
   social links (LinkedIn/Substack/GitHub) — do not add an email address or
   `mailto:` to the site.
10. **Never commit secrets or sensitive personal information.** No API keys,
    tokens, phone numbers, home addresses, or private health data.

## Visual identity

The design direction is **"hard editorial"** — 032c one-accent discipline,
NYLON grotesque scale. **Three colors only:** `paper` #FAFAF7 (ground), `ink`
#131118 (all type, borders, rules), and a single accent `magenta` #E80D6E. Do
not reintroduce lilac, violet, yellow/tangerine, chrome, gradients, drop
shadows, or rounded corners.

- **Type does the work.** Anton via `.font-head` (tight caps) for the masthead
  and section headings and `.font-condensed` (0.15em caps) for kickers, nav,
  labels, buttons, ticker; Fraunces (serif) is body text plus one pull quote per
  page. No italic accent words in display; no pink text in headings.
- **Accent discipline:** magenta appears as large-area color in **exactly one
  place per page — the ticker**. Otherwise only as 2px rules, link underlines,
  and hover inversions. Never as a fill on rounded shapes, never on italic text,
  never at section-background scale. (Ticker text is sized as WCAG "large" so
  white-on-magenta clears AA.)
- **No decoration except editorial furniture:** oversized index numerals
  (`.numeral-outline`), 1px ink hairlines between sections, footnote-style
  asides, the folio line under the nav, and one footer barcode wink. No blobs,
  targets, checkerboards, stickers, or squiggles. Corners are 0px everywhere;
  buttons are squared 1px-ink blocks or underlined links; no shadows.
- Photography (`src/components/PhotoSlot.tsx`) is black & white only (no tint),
  1px ink border, square/3:4, with an 11px caps caption credit.
- **Interaction:** hover is background/text inversion (white↔ink) or an accent
  underline reveal, ≤200ms; nothing bounces, floats, or rotates (only the
  marquee scrolls). Everything honors `prefers-reduced-motion`.
- **Contrast discipline:** body text is ink on white only; verify WCAG AA before
  shipping color changes (Lighthouse a11y target 95+).
- Keep motion restrained and gated on `prefers-reduced-motion` (see the
  `.animate-pop-*` classes, which freeze under reduced motion).

## Deployment notes

- Deployment is via `.github/workflows/deploy.yml` (GitHub Actions → Pages).
- After the foundation PR merges, an admin must set **Settings → Pages →
  Source → “GitHub Actions”** once. Do not change repository settings from code.
- This is a GitHub Pages **user site** served at the domain root, so no
  `basePath` is required. If a project subpath or custom domain is ever added,
  update `siteUrl` in `src/content/site.ts` and the Next config accordingly.

## Content model quick reference

- `src/content/site.ts` — name, role, nav, hero/about/writing/contact copy,
  SEO metadata, and the centralized `links` (email, GitHub, LinkedIn, Substack).
- `src/content/projects.ts` — the selected-work entries; each generates a card
  and a `/work/<slug>` page.

Placeholders marked `TODO: confirm` should be verified with the site owner, not
guessed.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
