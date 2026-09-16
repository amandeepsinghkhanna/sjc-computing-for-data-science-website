# Frontend

## Markup (`index.html`)

Single HTML document. `html` has `data-theme` (`light` | `dark`). Head includes:

- Viewport and title/description
- Open Graph / Twitter cards
- Canonical URL and JSON-LD (`WebSite`, `LearningResource`, `Person`, `ImageObject`, `BreadcrumbList`)
- Inline SVG favicon
- `style.css`
- Google Fonts: Inter, JetBrains Mono
- `app.js` with `defer`
- Mermaid 11 from jsDelivr, initialized inline

Section IDs: `home`, `prerequisites`, `searching`, `sorting`, `finding-sorted`, `data-structures`, `pathfinding`, `chains`, `divide`, `cheat-sheet`, `quiz`, `glossary`, `author`. Nested topic IDs: `linear-search`, `binary-search`, `bfs`, `astar`, `selection-sort`, `bubble-sort`, `quick-sort`, `merge-sort`, `stack`, `queue`, `linked-list`, `hash-map`.

## Design tokens (`style.css`)

CSS custom properties on `:root` and `[data-theme="dark"]`:

- Surfaces: `--color-bg-primary/secondary/tertiary`
- Text: `--color-text-primary/secondary`
- Accents: search blue, sort purple, success, warning, error
- Syntax: `--syn-kw`, `--syn-str`, `--syn-num`, `--syn-comment`, `--syn-func`
- Radii and shadows

Bar states: `.viz-bar.active` (checking), `.comparing`, `.sorted`, `.pivot`, `.inactive`. Pathfinding cells/nodes: `.path-cell--*` / `.path-node--*` (frontier, visited, path, wall, start, goal).

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
