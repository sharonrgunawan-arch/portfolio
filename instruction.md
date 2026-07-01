# Build Instructions — Sharon Gunawan UX Portfolio

> A complete spec for turning the Figma design into a real, production website.
> Hand this file to a developer or a coding agent and it should be buildable end-to-end.

---

## 1. Overview

A personal **UX design portfolio** for **Sharon Gunawan, Senior UX Designer**. It is a small,
content-driven site: a home page, a project listing, long-form case-study pages, a "Play" page,
and a contact section. The visual source of truth is the Figma file below.

| | |
|---|---|
| **Figma file** | UX Design Portfolio |
| **URL** | https://www.figma.com/design/PTtxSxU08LCTiW6S7lWgOa/UX-Design-Portfolio |
| **fileKey** | `PTtxSxU08LCTiW6S7lWgOa` |
| **Home frame** | `Desktop - 5` → node `6:922` (1440×2213) |
| **Case-study frame** | `Desktop - 7` → node `35:1248` (1440×4939) |

> ⚠️ The Figma file also contains design explorations that are **not** part of the final site:
> `option-b-horizontal-timeline`, `option-c-accent-bar`, the `Conversational` variant, and the
> extra `Desktop 8/9/10` frames. Build from the frames listed above and ignore the rest unless
> told otherwise.

---

## 2. Tech stack

- **Next.js (App Router) + TypeScript** — file-based routing, great SEO/static rendering for a content site.
- **Tailwind CSS** — utility styling that maps directly to the Figma tokens.
- **MDX** (via `@next/mdx` or `contentlayer`) — case studies authored as content, not hand-coded pages.
- **Deploy on Netlify** — via the `@netlify/plugin-nextjs` runtime.

---

## 3. Project setup

```bash
npx create-next-app@latest portfolio \
  --typescript --tailwind --app --eslint --src-dir --import-alias "@/*"
cd portfolio
npm install @next/mdx @mdx-js/loader @mdx-js/react gray-matter
```

Folder structure:

```
src/
  app/
    layout.tsx          # root layout: fonts, <Nav>, <Footer>
    page.tsx            # Home (/)
    work/
      page.tsx          # All projects (/work)
      [slug]/page.tsx   # Case study (/work/[slug])
    play/page.tsx       # Play (/play)
    connect/page.tsx    # Connect (/connect)
  components/
    Nav.tsx  Hero.tsx  StatusTag.tsx  ProjectCard.tsx  ProjectGrid.tsx
    ScrollIndicator.tsx  CaseStudyHeader.tsx  MetaStrip.tsx  MetricsGrid.tsx  Footer.tsx
  content/
    projects/           # one .mdx file per case study
  lib/
    projects.ts         # load + type project content
public/
    images/             # exported Figma assets
```

---

## 4. Design tokens

> No Figma **variables** are defined in the file, so these were read directly from the frames.
> Put them in `tailwind.config.ts` so components reference tokens, not raw hex.

```ts
// tailwind.config.ts → theme.extend
colors: {
  ink:     "#000000",   // primary text
  paper:   "#ffffff",   // background
  surface: "#f1f5f9",   // cards / pills (Tailwind slate-100)
  line:    "#e2e8f0",   // borders (slate-200)
  muted:   "#64748b",   // secondary text (slate-500)
},
borderRadius: {
  card: "24px",         // cards, avatars
  pill: "100px",        // status tags
},
fontFamily: {
  display: ["var(--font-display)", "Sora", "ui-sans-serif", "sans-serif"],
  body:    ["var(--font-body)", "Inter", "ui-sans-serif", "sans-serif"],
  label:   ["var(--font-label)", "Inter", "sans-serif"],
  script:  ["var(--font-script)", "cursive"],
},
```

Type scale observed: hero `44px` (display), body `16px`, tag labels `13px` uppercase with letter-spacing.

---

## 5. Fonts

The Figma design uses these families:

| Role | Figma font | Status | Recommendation |
|---|---|---|---|
| Display / headings | **Samsung Sharp Sans** | 🔒 Proprietary | License it, **or** fall back to `Sora` / `Manrope` |
| Body | **SamsungOne** (400/700) | 🔒 Proprietary | License it, **or** fall back to `Inter` |
| Tag labels | Instrument Sans / Inter | ✅ Google Fonts | Use as-is |
| Script accent | Sacramento | ✅ Google Fonts | Use as-is |

> **Do not ship the Samsung fonts without a license.** Unless Sharon has the licenses/files,
> use the Google Fonts fallbacks above — they keep the same visual feel.

Load the Google fonts with `next/font`:

```ts
// src/app/layout.tsx
import { Sora, Inter, Instrument_Sans, Sacramento } from "next/font/google";
const display = Sora({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const label = Instrument_Sans({ subsets: ["latin"], variable: "--font-label" });
const script = Sacramento({ weight: "400", subsets: ["latin"], variable: "--font-script" });
// apply all four variables to <html className={...}>
```

If the licensed Samsung fonts are available, drop them in `src/app/fonts/` and load via `next/font/local`, pointing `--font-display`/`--font-body` at them instead.

---

## 6. Pages & routes

| Route | Figma frame / node | Sections |
|---|---|---|
| `/` (Home) | `Desktop - 5` · `6:922` | Nav · Hero (dual-avatar) · status-row pills · tagline · scroll indicator · **Featured projects** 2-col grid · "See all projects" |
| `/work` | reuse home grid | Full grid of all project cards |
| `/work/[slug]` | `Desktop - 7` · `35:1248` | Case-study header · meta strip (Role/Industry/Platform/Timeline) · overview · problem & solution · full-bleed screenshots · "What changed after launch" metrics grid · methodology |
| `/play` | — | Gallery/list of lighter, experimental pieces |
| `/connect` | — | Contact: email + social links |

---

## 7. Components to build

| Component | Description | Source node |
|---|---|---|
| `Nav` | Sticky top bar: "Sharon Gunawan" wordmark (left) + Work / Play / Connect links (right) | `6:923` |
| `Hero` | "hello 👋🏻 I'm Sharon" with the tilted dual-avatar card (one slate card rotated −8°, one photo card rotated +8°, 115px, radius 24px) | `6:988` |
| `StatusTag` | Pill: emoji + uppercase label, `surface` bg, `line` border, radius `pill` | `6:995` |
| `ProjectCard` | Cover image (radius `card`) + company tag + title + subtitle | `6:1195` |
| `ProjectGrid` | Responsive 2-col grid of `ProjectCard` | `6:1194` |
| `ScrollIndicator` | "Scroll to discover" + down arrow | `6:1235` |
| `CaseStudyHeader` | Case-study title hero block | within `35:1248` |
| `MetaStrip` | Role / Industry / Platform / Timeline metadata row | within `35:1248` |
| `MetricsGrid` | "What changed after launch" outcome metrics | within `35:1248` |
| `Footer` | Site footer with contact/social links | — |

---

## 8. Content model

Author each case study as MDX in `src/content/projects/`. Frontmatter typed as:

```ts
// src/lib/projects.ts
export type Project = {
  slug: string;          // url segment, e.g. "career-buying-journey"
  title: string;         // "Transforming Fleet Logistics with a Purpose-Built OMS"
  company: string;       // "Samsung Electronics America"
  summary: string;       // "Simplifying complex workflows"
  cover: string;         // /images/...
  featured?: boolean;    // show on the home grid
  role: string;
  industry: string;
  platform: string;
  timeline: string;
  metrics?: { label: string; value: string }[];
  // body sections come from the MDX content itself
};
```

`/` reads projects where `featured`; `/work` reads all; `/work/[slug]` resolves one by slug.
This keeps new projects to "add an MDX file" rather than editing React.

---

## 9. Assets

- Export images/SVGs from Figma with the **Figma MCP** `get_design_context` (or `download_assets`)
  per frame. The returned asset URLs **expire after ~7 days**, so download them into
  `public/images/` during the build rather than hot-linking.
- The hero uses a tilted photo card and a conic-gradient overlay — capture the photo as a static
  image and recreate the gradient/rotation in CSS (rotation ±8°, radius 24px).
- **Ignore these exploration frames** when exporting: `option-b-horizontal-timeline`,
  `option-c-accent-bar`, `Desktop - 7 (Conversational)`, and the duplicate `Desktop 8/9/10`.

---

## 10. Responsive behavior

The design is drawn at **1440px desktop**. Define down from there:

- **Grid**: 2 columns ≥ `lg`, single column below.
- **Nav**: inline links on desktop; collapse to a stacked / hamburger menu on mobile.
- **Hero**: fluid type (`clamp()`), avatar card scales down; status pills wrap to multiple rows.
- **Case study**: full-bleed images stay edge-to-edge; meta strip stacks vertically on mobile.
- Target breakpoints: mobile `< 640`, tablet `640–1024`, desktop `≥ 1024`.

---

## 11. Implementation order

1. Tailwind tokens + fonts + root layout shell.
2. `Nav` and `Footer`.
3. Home: `Hero`, `StatusTag`, `ScrollIndicator`.
4. `ProjectCard` + `ProjectGrid`; wire Featured projects on `/`.
5. `/work` listing.
6. Case-study template (`/work/[slug]`) + content model + one real MDX project.
7. `/play` and `/connect`.
8. Responsive pass.
9. Polish: hover states, scroll animations, transitions.

---

## 12. Build & deploy

```bash
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the build locally
```

Deploy by importing the repo into **Netlify** (build settings auto-detected from `netlify.toml`,
which wires up `@netlify/plugin-nextjs`). Add a custom domain in the Netlify dashboard when ready.

---

## 13. Accessibility & SEO checklist

- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`; one `<h1>` per page.
- `alt` text on every project image; decorative gradients marked `aria-hidden`.
- Per-page `metadata` (title + description) via Next's `Metadata` API; Open Graph + Twitter cards.
- Color contrast: `muted` (#64748b) on white passes for body text — keep it for labels, not fine print.
- Keyboard-navigable nav and cards; visible focus states.
- `sitemap.xml` + `robots.txt` (Next can generate both).
```
