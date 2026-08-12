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

The design direction is **"warm editorial collage"** — fashion serif over
photography (Tuesday Marketing Co), chunky cropped logotype + mono highlighter
labels + olive ticker (WANDA), scrapbook layering.

- **Palette (7 tokens):** grounds `cream` #F2EBDD (primary) + `blush` (alternate);
  `ink` #201D1A (warm black, all body/borders); `coral` #DE4A2A is **display
  headlines + primary buttons only** (never body text; verify ≥3:1 at display
  size — coral buttons use large-bold labels so cream-on-coral clears 3:1);
  `olive` #D6CC72 is the ticker + small highlights; `violet` is script
  annotations only; `gold` is micro star marks + one footer sun stamp. Body text
  is always ink on cream/blush. (Blush is tuned slightly lighter than the brief's
  #F6CFE4 so coral display text clears 3:1 on it.)
- **Four type registers, one job each:** Bodoni Moda serif (`.font-display`) =
  hero name + section headlines; Bricolage Grotesque (body 400, `.font-chunk`
  800 caps) = card titles/numerals/"HI" moments; Courier Prime (`.mono`, with a
  `.hl` highlighter background) = kickers/labels/captions/tags; Caveat
  (`.script`, violet) = handwritten annotations. Max **3 scripts** site-wide.
- **Collage furniture:** tilted polaroids (`.polaroid`, ±3° max, soft shadow),
  a subtle site-wide paper `.grain` (~3% multiply), 1px ink hairlines. No
  geometric shapes, checkerboards, chrome, or stickers except one gold sun stamp
  in the footer. Exactly **1 ticker** (olive) and **1 stamp**.
- **Photography / editorial art** is the system (`src/content/photos.ts`
  manifest + `src/components/PhotoSlot.tsx` + `EditorialArt.tsx`): b&w or
  warm-muted photos when supplied; until then, same-dimension editorial
  graphics keep the layout final. **Never use stock photography.**
- **Verify:** squint test — the dominant element per section is the serif
  display or a photo, never a colored shape. AA contrast on all body pairs
  (Lighthouse a11y target 95+); respect `prefers-reduced-motion`.
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

Do not invent credentials, metrics, or outcomes. Keep uncertain language
qualitative and truthful.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
