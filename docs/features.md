# Features

## Navigation and chrome

- Fixed `.site-nav` with section labels: Home, Pre-requisites, Searching, Sorting, Data Structures, Cheat Sheet. About is in the footer. Pathfinding is reached via scroll or by scrolling past Data Structures (no separate top-nav item).
- Skip link to `#main-content`
- Notion-style **scroll outline** (`#scroll-outline`) on the right edge — hover to see **per-topic** labels (Linear Search … Hash Map, Cheat Sheet, Quiz) and jump (desktop only)
- All lesson sections always visible (no collapse gates)
- Scroll progress bar (`#progress-bar`)
- Dark/light toggle (`#theme-toggle`); preference stored as `localStorage.theme`
- Pathfinding visualizers: Org chart / City grid tabs
- Footer year filled from `new Date().getFullYear()`

## Theme and diagrams

Mermaid flowcharts are authored in HTML. Colors are baked at render time, so `reThemeMermaid` resets each `.mermaid` node from a captured source map and calls `mermaid.run` when the theme changes. Returning visitors in dark mode re-theme on `window.load`.

## Pre-requisites (`#prerequisites`)

Formal section title **Pre-requisites** with `.section-lede`. Nine `.starter-card` items use `.lesson-header` (eyebrow `Pre-requisites · N of 9`, explicit `.lesson-title`). Folds: `.lesson-fold.fold-code` (Python), `.lesson-fold.fold-paper` (practice question with hidden answer line). Optional dict/grid fold at the end.

## Algorithm and structure lessons

Each lesson opens with `.lesson-header`: `.lesson-eyebrow` (parent section), `.lesson-title` (algorithm name), `.lesson-meta` tags. Folds use `.lesson-fold` modifiers: `fold-flowchart`, `fold-steps`, `fold-code`, `fold-help` (per-algorithm help title). Big-O intro after Linear Search is a static `.lesson-aside` (`#speed-talk`), not a collapsed box. Brain-map cards, visualizers, and Quick Checks unchanged. Details: [algorithms.md](algorithms.md), [data-structures.md](data-structures.md).

## Cheat sheet (`#cheat-sheet`)

Comparison tables for list search, pathfinding, sorting, and structures, including **Use it when…** and **Do not use when…**, plus a decision list.

## Knowledge check (`#quiz`)

Eighteen multiple-choice questions in `quizQuestions`. One card visible at a time. Keys `1`–`4` select options. Results show `score/18` and **Review …** links for missed topics. `resetQuiz` rebuilds the DOM.

## Glossary (`#glossary`)

Terms from `glossaryTerms`, sorted A–Z into `#glossary-grid`. Inline `.glossary-term` tooltips use `data-definition`.

## Author (`#author`)

`profile.png`, short bio, portfolio link.

## Print

`@media print` hides nav, visualizers, buttons, and quiz chrome; expands flowchart details.
