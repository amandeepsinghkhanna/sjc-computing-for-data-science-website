# Agent instructions — Computing for Data Science Lab

This is a **vanilla HTML/CSS/JS** educational site (no build step, no framework, no package.json). Open `index.html` in a browser.

Before exploring code, query the Graphify graph (`graphify query`, `graphify path`, `graphify explain`). After changing source files, run `graphify update .`.

## YAGNI (You Aren't Gonna Need It)

Follow YAGNI in all code development:

- Do not build features, abstractions, helpers, or files that are not required to complete the requested change.
- Reuse existing helpers, CSS tokens, and visualizer patterns in `app.js` / `style.css` / `index.html`.
- Do not add dependencies, bundlers, or frameworks unless the user explicitly asks.
- Prefer deletion and the smallest working diff over clever architecture.
- Do not pre-empt future algorithms, pages, or CMS-style content unless asked.

## changelog.md

After every agent-made change that lands in the repo, append an entry to `changelog.md` at the project root. Do not skip this.

Each entry must include:

| Field | What to write |
| --- | --- |
| Timestamp | ISO-8601 local datetime (include timezone offset), e.g. `2026-09-07T16:16:00+05:30` |
| Changed by | `agent` (this assistant) |
| Change | Plain-language description a student or maintainer can understand |
| Benefit | Why the change helps (learning, reliability, maintainability, accessibility) |

Use the format documented in `.cursor/skills/maintain-changelog/SKILL.md`.

## Documentation (`/docs`)

Keep a detailed, comprehensive project record in `/docs`. When behavior, architecture, or content of the site changes, update the matching docs in the same turn:

- `docs/README.md` — index of all docs
- `docs/overview.md` — purpose, audience, course context
- `docs/architecture.md` — files, data flow, how the page boots
- `docs/features.md` — every user-facing feature
- `docs/algorithms.md` — searching and sorting topics and visualizers
- `docs/data-structures.md` — stack, queue, linked list
- `docs/frontend.md` — HTML/CSS/JS, theme, a11y, SEO
- `docs/agent-workflow.md` — Graphify, skills, changelog, YAGNI
- `docs/deployment.md` — how the site is served and crawled

Do not leave `/docs` stale relative to the code you just shipped.

## Stack constraints

- `index.html` — structure, copy, Mermaid diagrams, visualizer mounts
- `style.css` — design tokens, layout, dark/light theme, print
- `app.js` — snippets, visualizers, quiz, checkpoints, glossary, nav/theme
- CDN: Mermaid 11, Google Fonts (Inter + JetBrains Mono)
- Persist theme in `localStorage` key `theme`

Do not invent a backend. The site is static.
