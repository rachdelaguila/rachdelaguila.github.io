# rachdelaguila.github.io

Personal website for **Rachelle Del Aguila** — AI product strategist and technical product builder working at the intersection of enterprise systems, trustworthy AI, and operational transformation.

The site is a statically-exported Next.js app deployed to GitHub Pages. It is intentionally content-light and truthful: professional claims are centralized, and no metrics, employers, clients, or outcomes are fabricated.

## Technology stack

- [Next.js](https://nextjs.org/) (App Router) with **static export** (`output: "export"`)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/) in strict mode
- [Tailwind CSS](https://tailwindcss.com/) v4
- [ESLint](https://eslint.org/) (`eslint-config-next`)
- npm

There is **no** database, API route, server action, authentication, CMS, analytics, or functional contact-form backend. Contact is a `mailto:` link. The site is fully static.

## Local setup

Requires Node.js 22+ and npm (Node 22 is used in CI).

```bash
npm install
```

## Development commands

```bash
npm run dev     # Start the dev server at http://localhost:3000
npm run lint    # Run ESLint
npm run build   # Production build + static export to ./out
```

## Production build

```bash
npm run build
```

The static site is written to `out/`. You can preview the exported output with any static file server, for example:

```bash
npx serve out
```

## Project structure

```text
src/
  app/                 # App Router routes
    layout.tsx         # Root layout: fonts, metadata, header/footer, skip link
    page.tsx           # Home page (composes the sections)
    not-found.tsx      # Custom 404 page
    robots.ts          # robots.txt generation
    sitemap.ts         # sitemap.xml generation
    work/[slug]/       # Preliminary per-project pages (statically generated)
  components/          # Reusable, accessible UI components
  content/             # Centralized, editable content (see below)
  lib/                 # Small utilities
public/                # Static assets (favicon.svg, og.svg, .nojekyll)
.github/workflows/     # GitHub Pages deployment workflow
```

## Where content is edited

All editable copy and links live in `src/content/` — do not scatter professional claims across components.

- **Site copy, navigation, links, SEO** → `src/content/site.ts`
  - Hero, about, writing, and contact copy
  - Centralized links: LinkedIn, GitHub, Substack, and email (each used exactly once from here)
  - The Substack URL is defined **once** here and referenced everywhere

## Where project content is edited

- **Selected work / project pages** → `src/content/projects.ts`
  - Each project has a `title`, `category`, `status`, `summary`, optional `outcome`, and the longer `overview` / `problemSpace` / `approach` / `themes` used on its page.
  - Adding an entry automatically creates its card and its statically-generated page at `/work/<slug>`.

> Placeholder values marked `TODO: confirm` in `src/content/site.ts` (LinkedIn handle, Substack URL, and public contact email) should be verified before launch.

## GitHub Pages deployment

Deployment is handled by `.github/workflows/deploy.yml`, which on every push to `master`:

1. Checks out the repository
2. Sets up Node 22
3. Installs dependencies with `npm ci`
4. Runs `npm run lint`
5. Runs `npm run build` (produces `out/`)
6. Uploads `out/` as a Pages artifact
7. Deploys via the official GitHub Pages actions

### Required manual GitHub Pages configuration (after merge)

The repository currently publishes using the **legacy branch-based** Pages build (`master` → Jekyll). The new workflow deploys via **GitHub Actions** instead. After this PR is merged, a repository admin must change the source **once**:

> **Settings → Pages → Build and deployment → Source → “GitHub Actions”.**

Until that setting is changed, the Actions workflow will build successfully but the deploy step cannot publish. This task intentionally does **not** change repository settings automatically.

## Known next steps

- Confirm/replace the `TODO: confirm` links (LinkedIn, Substack) and public email in `src/content/site.ts`.
- Expand the preliminary project pages into full case studies as content becomes available and approved.
- Consider adding a raster (PNG) Open Graph image; `public/og.svg` is a placeholder that some social scrapers may not render.

## Contributing / agent guidance

See [`AGENTS.md`](./AGENTS.md) for rules that future coding-agent sessions must follow (truthfulness, accessibility, static-export compatibility, branch/PR workflow).
