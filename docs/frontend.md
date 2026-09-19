# Frontend

## Markup (`index.html`)

Single HTML document. `html` has `data-theme` (`light` | `dark`). Head includes:

- Viewport and title/description
- Open Graph / Twitter cards
- Canonical URL and JSON-LD (`WebSite`, `LearningResource`, `Person`, `ImageObject`, `BreadcrumbList`)
- Inline SVG favicon
- `style.css`
- Google Fonts: Outfit (Display/Headings), Plus Jakarta Sans (Body), JetBrains Mono (Code & Stats)
- `app.js` with `defer`
- Mermaid 11 from jsDelivr, initialized inline

Section IDs: `home`, `prerequisites`, `searching`, `sorting`, `finding-sorted`, `data-structures`, `pathfinding`, `chains`, `divide`, `cheat-sheet`, `quiz`, `glossary`, `author`. Nested topic IDs: `linear-search`, `binary-search`, `bfs`, `astar`, `selection-sort`, `bubble-sort`, `quick-sort`, `merge-sort`, `stack`, `queue`, `linked-list`, `hash-map`.

## Refined Neo-Minimalist Design System & Tokens (`style.css`)

CSS custom properties on `:root` and `[data-theme="dark"]`:

- **Surfaces & Palette:** Glare-Free Soft Slate, Crisp White, and Crimson Red:
  - Light mode: Soft glare-free canvas `--color-bg-primary` (`#fbfbfc`), crisp white surface `--color-bg-secondary` (`#ffffff`), subtle elevated panel `--color-bg-tertiary` (`#f1f3f7`), refined border `--color-border` (`#e2e8f0`), and slate text (`#0f172a`).
  - Dark mode: Cosmic space obsidian canvas `--color-bg-primary` (`#09090e`), elevated surface `--color-bg-secondary` (`#12121a`), panel `--color-bg-tertiary` (`#181824`), crisp border (`#262633`), and white text (`#f8fafc`).
  - Accents: Vibrant Crimson `--color-accent-red` (`#e11d48`), Electric Scarlet `--color-accent-red-bright` (`#f43f5e`), and Deep Ruby Wine `--color-accent-red-dark` (`#be123c`).
- **Typography & Scale:** Standardized mathematical scale:
  - Display & Headings: *Outfit* (bold geometric display weights 800–900).
  - Body Copy: *Plus Jakarta Sans* (standard 16px / `1rem` baseline, 1.65 line-height, constrained reading width).
  - Code & Telemetry: *JetBrains Mono* for code snippets, Big-O badges, stats, and memory traces.
- **Pixel-Perfect Borders & Elevation:** Crisp 1px borders with zero double-border overlap on tables (`border-collapse: separate; border-spacing: 0;`), cards, and lesson folds. Soft-tech modern elevation replacing raw harsh 0-blur slabs with subtle multi-layer drop shadows (`--shadow-card`, `--shadow-card-hover`, `--shadow-btn-hover`).
- **Interactive Gen-Z Hero Algorithm Deck:** Terminal-style live execution stage (`#hero-algo-deck`) featuring animated quick sort partitioning, crimson pivot selection, comparison scanning beam, live O(n log n) telemetry, hover pulse waves, and instant scramble controls. Clean hero title without noisy stat boxes.
- **Spacious Pre-requisites Layout:** Un-cramped 360px+ responsive grid (`.starter-grid`) with generous 1.75rem padding, rounded floating icon badges, readable text hierarchy, and dedicated spacing for practice question accordions.
- **Vibrant Codeblock Syntax Highlighting:** Multi-token theme for `.code-container`: `.kw` in vivid coral/crimson (`#ff5277`), `.func` in sky blue (`#38bdf8`), `.str` in emerald green (`#34d399`), `.num` in tangerine orange (`#fb923c`), and `.comment` in muted slate italic (`#94a3b8`), with clean line-number gutters and border separators.
- **Professional Navigation:** Full-width sticky top navigation bar (`.site-nav`) with containerized layout, `[CDS]` logo badge, clear section links, instant click feedback, automated scroll spy highlight tracking based on viewport `getBoundingClientRect` (YAGNI refactor supporting all sections), and a responsive mobile menu.
- **Visualizer Colors:** Visualizer bars use `.viz-bar.comparing` (crimson red fiery gradient with glowing drop shadow), `.active` (amber), `.pivot` (deep wine), and `.sorted` (emerald).

Bar states: `.viz-bar.active` (checking), `.comparing`, `.sorted`, `.pivot`, `.inactive`. Pathfinding cells/nodes: `.path-cell--*` / `.path-node--*` (frontier, visited, path, wall, start, goal), with explicit CSS Grid 2D maze layout, tree hierarchy, `.viz-legend` swatches, and telemetry indicators.

Layout utilities (`.mt-3`, `.lede-tight`, `.tag-easy`, …) replace one-off inline styles on lesson copy. **Header hierarchy:** `.section-heading-row` + `.section-lede` (section), `.lesson-header` / `.lesson-eyebrow` / `.lesson-title` / `.lesson-meta` (lesson). **Folds:** `.lesson-fold` with `.fold-flowchart`, `.fold-steps`, `.fold-code`, `.fold-help`, `.fold-paper`; **asides:** `.lesson-aside`. Quiz chrome uses `.quiz-feedback`, `.quiz-score`, `.quiz-nav-btn.is-visible`. Glossary tooltips use `--color-bg-secondary` / `--color-text-primary`.

Breakpoints: hamburger at 1140px; column algorithm layout at 992px; mobile padding/stats at 768px.

## JavaScript surface (`app.js`)

Wrapped in an IIFE with `"use strict"`. File order:

1. `snippets`, `escapeHtml`, `highlightPython`, `renderCode`, helpers (`readInt`, `dsEmpty`, `bindSortControls`, `bindSearchControls`)
2. `Visualizer` (list search/sort)
3. `StackVisualizer`, `QueueVisualizer`, `LinkedListVisualizer`, `HashMapVisualizer`
4. `TreeSearchVisualizer`, `GridSearchVisualizer` (BFS / A*)
5. `quizQuestions` + quiz functions (`createElement` + `addEventListener`)
6. `checkpointData` + `buildCheckpoints`
7. `glossaryTerms` + `buildGlossary`
8. `buildColorLegends`
9. Instance construction and control listeners
10. Mermaid re-theme, theme toggle, quiz keys `1`–`4`, mobile nav, copy, scroll progress
11. Scroll outline (`buildScrollOutline` with per-lesson `SCROLL_OUTLINE_SECTIONS`), BFS/A* tabs, glossary tap
12. `?selfcheck=1` assertions

## Accessibility

Skip link targets `#main-content`. Landmarks, `aria-label` on theme/hamburger and `#scroll-outline`, `:focus-visible`, `aria-live` on status spans, quiz options as buttons with Enter/Space, 44px min tap targets on small screens and viz tabs. Glossary terms toggle `.is-open` on click (hover still works on desktop; on small screens the definition drops under the word). Scroll outline hidden below 768px.

## SEO and crawl

See [deployment.md](deployment.md). JSON-LD `teaches` lists eight algorithms (including BFS, A*, Merge Sort) and four structures (including Hash Map).

## External assets

| Asset | Why |
| --- | --- |
| Google Fonts | Inter UI, JetBrains Mono for code |
| Mermaid 11 CDN | Flowcharts |
| `profile.png` | Author photo |

Offline use: fonts and Mermaid fail closed (system fonts; diagrams may not render). Core visualizers still work from `app.js` + `style.css`.
