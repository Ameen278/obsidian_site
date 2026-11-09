# Study Agent — Website

Marketing + docs site for the [Study Agent](https://github.com/ameen278/Study-Agent)
Obsidian plugin, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static build → dist/
npm run preview  # preview the production build
npm run check    # type-check with astro check
```

## Deploy (GitHub Pages)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` via GitHub Pages.

If your repo is not named `obsidian_site`, update `base` and `site` in
`astro.config.mjs` (and the URLs in `public/robots.txt` / `public/sitemap.xml`)
to match your Pages URL, e.g. for a repo named `study-agent-site` use
`base: '/study-agent-site/'` and `site: 'https://<user>.github.io/study-agent-site/'`.

In the GitHub repo settings, set **Settings → Pages → Source** to **GitHub Actions**.

## Content

Pages live in `src/pages/`:

| Page | File |
|---|---|
| Home | `src/pages/index.astro` |
| Features | `src/pages/features.astro` |
| Get Started | `src/pages/get-started.astro` |
| Guide | `src/pages/guide.astro` |
| Providers | `src/pages/providers.astro` |
| Docs index | `src/pages/docs.astro` |
| Privacy | `src/pages/privacy.astro` |
| Troubleshooting | `src/pages/troubleshooting.astro` |

Shared data (plugin links, version, providers) is in `src/data/site.ts` — update
there when the plugin version or links change. Screenshots in `public/images/`
come from the plugin's Obsidian Community page.
