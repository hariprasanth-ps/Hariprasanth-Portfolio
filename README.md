# Hariprasanth — Portfolio

A modern, accessible portfolio built with **Next.js 15 (App Router)**, **JavaScript**,
**Tailwind CSS**, and **Framer Motion** — populated with your real resume content
(Prodapt Solutions, education, certifications) and wired up with a free, automatic
deployment pipeline via GitHub Actions.

## Stack

- Next.js 15 (App Router, `next/font`, `next/metadata`, `sitemap.js`, `robots.js`)
- JavaScript (JSX), no TypeScript tooling required
- Tailwind CSS (custom design tokens in `tailwind.config.js`)
- Framer Motion for scroll reveals, page transitions, and micro-interactions
- `next-themes` for dark/light mode with system-preference detection
- `lucide-react` for icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.js           — fonts, metadata, theme provider, skip link
  page.js              — assembles all sections
  globals.css          — Tailwind directives + base theme
  sitemap.js / robots.js — SEO
components/
  navbar.jsx, theme-toggle.jsx, theme-provider.jsx, github-stats.jsx
  sections/            — Hero, About, Skills, Experience, Education, Projects,
                          Certifications, Testimonials, Contact (.jsx)
  ui/                  — Reveal (scroll animation), SectionHeading, ScrollProgress (.jsx)
lib/
  data.js              — ALL content lives here (single source of truth)
  utils.js
public/
  Hariprasanth.pdf           — one-page resume generated from your real resume (see below)
scripts/
  generate_resume.py   — regenerates Hariprasanth.pdf from your resume content
.github/workflows/
  ci.yml               — lints and builds on every push/PR
  deploy.yml           — deploys to GitHub Pages on every push to main
jsconfig.json           — enables the @/* import alias used throughout
```

## Content — what's real vs. placeholder

Everything in **`lib/data.js`** is now sourced from your actual resume:

- `profile` — real name, email, phone, location, links
- `about`, `skillGroups` — rewritten around your real stack and role
- `experience` — Software Engineer @ Prodapt Solutions (June 2022–Present), with
  the real Rapid Response / Bad Debt Application outcomes
- `achievements` — your Key Accomplishments (Data Validation Framework, Azure
  DevOps KPI Reporting, Star Award)
- `education` — B.E. Computer Science, St. Joseph's College of Engineering
- `certifications` — your real Udemy and Databricks Academy credentials
- `projects` — pulled from your verified public GitHub repos
- `testimonials` — **still an empty array on purpose**. No real testimonials were
  provided, so the section doesn't render. Add entries in the shown shape and
  it'll appear automatically.

### Resume

`public/Hariprasanth.pdf` is generated from your real resume content by
`scripts/generate_resume.py`. To regenerate after editing the script:

```bash
cd public && python3 ../scripts/generate_resume.py
```

(requires `pip install reportlab`)

### Colors & type

Design tokens live at the top of `tailwind.config.js` (`ink`, `paper`, `teal`, `amber`,
`muted`, `line`) — change them there to retheme the whole site.

## Deployment pipeline (free)

This repo ships with a working GitHub Actions pipeline that deploys to
**GitHub Pages** — completely free, no third-party signup, no credit card.
Every push to `main` runs CI, builds a static export, and publishes it.

### One-time setup

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions** (not "Deploy from a branch"). The workflow also tries to
   enable this automatically (via `enablement: true`), but setting it manually
   once is the more reliable path, especially the very first time.
3. Push to `main` (or run the "Deploy to GitHub Pages" workflow manually from
   the **Actions** tab).
4. Your site goes live at `https://<your-username>.github.io/<repo-name>/`.

That's it — `.github/workflows/deploy.yml` handles the rest automatically on
every future push.

**If the first run fails with `Get Pages site failed... Not Found`:** this
means Pages hasn't been enabled for the repo yet. Go to **Settings → Pages**
and set the source to **GitHub Actions** as in step 2 above, then re-run the
workflow from the **Actions** tab. After that first successful run, it won't
happen again.

### How it works

- `.github/workflows/ci.yml` — runs `npm run lint` and `npm run build` on every
  push and pull request, so broken code never reaches `main`.
- `.github/workflows/deploy.yml` — builds a static export (`next build` with
  `GITHUB_PAGES=true`) and publishes the `out/` folder to GitHub Pages using
  the official `actions/deploy-pages` action.
- `next.config.js` detects the `GITHUB_PAGES` env var and automatically
  configures `output: 'export'` plus the correct `basePath` for a project page
  (`/repo-name`), so internal links and the resume download work correctly
  under the GitHub Pages subpath. Local dev and other hosts are unaffected.

### Custom domain (optional)

GitHub Pages supports custom domains for free — add a `CNAME` file to
`public/` with your domain, and configure the DNS records GitHub gives you
under **Settings → Pages → Custom domain**.

### Alternative: Vercel

If you'd rather use Vercel (also free for personal projects, and avoids the
GitHub Pages subpath entirely — you'd get a clean root domain and full
Next.js feature support with zero config):

1. Go to [vercel.com](https://vercel.com), sign in with GitHub, and import
   this repository.
2. Leave all settings as default — Vercel auto-detects Next.js.
3. Every push to `main` deploys automatically; every PR gets a preview URL.

In that case, you can ignore `.github/workflows/deploy.yml` (or delete it) —
`ci.yml` is still useful to keep as a pre-merge check either way.

## Accessibility & performance notes

- Visible focus rings everywhere (`:focus-visible` in `globals.css`)
- `prefers-reduced-motion` respected globally and inside Framer Motion components
- Skip-to-content link for keyboard/screen-reader users
- Semantic landmarks (`header`, `main`, `section` with ids)
- Fonts loaded via `next/font` (self-hosted, no layout shift)
- Static generation — no server data fetching required at runtime except the
  optional live GitHub stats call (client-side, fails gracefully)

### Before going live

`app/layout.js`, `app/sitemap.js`, and `app/robots.js` reference
`https://hariprasanth-ps.github.io/Hariprasanth-Portfolio/` as a placeholder — replace with your real deployed URL
(e.g. `https://your-username.github.io/repo-name`) once you know it.
