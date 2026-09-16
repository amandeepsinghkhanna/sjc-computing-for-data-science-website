# Deployment

## Local

Open `index.html` in a modern browser, or serve the repo root with any static server (example: `python -m http.server`). There is no build step.

## Hosting

The HTML canonical / OG URL and `robots.txt` sitemap point at **GitHub Pages**:

- Site: `https://amandeepsinghkhanna.github.io/`
- `robots.txt`: allow all; sitemap URL as above
- `sitemap.xml`: single URL, `changefreq` monthly, `priority` 1.0, `lastmod` 2026-07-05

If this repository is served from a project-pages path instead of the user site root, update canonical, OG, JSON-LD, robots, and sitemap together.

## Crawl and sharing

- `meta description` and OG/Twitter tags in `index.html`
- JSON-LD graph for website, learning resource, person, image, breadcrumbs
- Favicon is an inline SVG data URI

## Dependencies at runtime

- Google Fonts (network)
- Mermaid 11 from jsDelivr (network)

Visualizers and quiz do not need those CDNs.

## What not to deploy as “app config”

Theme is only `localStorage`. No environment variables, API keys, or backend.
