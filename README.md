# DSA Learning Hub — SJU CDS Lab

Interactive educational site for the **Computing for Data Science Lab** at St. Joseph's University. Students learn searching, sorting, and three core data structures with analogies, Mermaid flowcharts, annotated Python, and in-page visualizers.

Public title: **DSA without the emotional damage.**

## What is on the page

- **7 algorithm visualizers** — Linear Search, Binary Search, BFS (tree + grid), A* (tree + grid), Selection Sort, Bubble Sort, Quick Sort
- **3 data-structure visualizers** — Stack, Queue, Linked List
- **Lessons** — everyday analogies, short history where it helps, walkthrough tables, complexity, mistakes, copyable Python
- **Checks** — in-section checkpoints, a 16-question quiz with review links, glossary, and a cheat sheet (including “Do not use when…”)
- **Theme** — light/dark, stored as `localStorage` key `theme`

## Topics

| Area | Topics |
| --- | --- |
| Searching | Linear Search, Binary Search, Breadth-First Search, A* |
| Sorting | Selection Sort, Bubble Sort, Quick Sort |
| Structures | Stack (LIFO), Queue (FIFO), singly Linked List |

BFS and A* each teach **trees and grids separately**. Grids use 4-way moves and equal step cost so the two algorithms are comparable.

## Run locally

No build step and no `package.json`. Open `index.html` in a modern browser, or from this folder:

```bash
python -m http.server 8765
```

Then visit `http://127.0.0.1:8765/`. Optional sanity banner: `index.html?selfcheck=1` (or [scripts/self-check.html](scripts/self-check.html)) — it should read `self-check: ok`.

## Tech stack

- Vanilla HTML, CSS, and JavaScript (three runtime files: `index.html`, `style.css`, `app.js`)
- [Mermaid 11](https://mermaid.js.org/) from a CDN for flowcharts
- Google Fonts: Inter + JetBrains Mono
- Clipboard API for snippet copy

## Project structure

```
├── index.html          # Page structure and lesson copy
├── style.css           # Design tokens, layout, themes, pathfinding UI
├── app.js              # Snippets, visualizers, quiz, glossary, chrome
├── profile.png         # Author photo
├── robots.txt
├── sitemap.xml
├── AGENTS.md           # Instructions for coding agents
├── changelog.md        # Agent change log
├── docs/               # Full project documentation
├── scripts/            # Helper pages (self-check)
├── .cursor/            # Project skills and always-on rules
├── graphify-out/       # Knowledge graph (query with graphify)
└── README.md
```

Longer documentation: [`docs/`](docs/README.md). Agent contract: [`AGENTS.md`](AGENTS.md). History of agent edits: [`changelog.md`](changelog.md).

## Author

Built by [Amandeep Singh Khanna](https://amandeepsinghkhanna.github.io/), Sr. Data Scientist.
