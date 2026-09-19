# Features

## Navigation and chrome

- Full-width sticky `.site-nav` with containerized layout, ordered section labels (Home, Pre-requisites, Data Structures, Searching, Sorting, Cheat Sheet, Glossary), immediate click activation, and accurate active red highlight tracking across all sections via YAGNI `getBoundingClientRect` viewport detection. About is in the footer.
- Hero interactive algorithm arena with real-time partitioning and telemetry.
- Ambient organic gradient mesh backdrop with slow drift animation for visual depth.
- Skip link to `#main-content`
- Notion-style **scroll outline** (`#scroll-outline`) on the right edge — dynamically tracks the pedagogical order: Pre-requisites → Data Structures (Stack, Queue, Linked List, Hash Map) → Searching (Linear Search, Binary Search, BFS, A*) → Sorting (Selection Sort, Bubble Sort, Quick Sort, Merge Sort) → Cheat Sheet → Quiz → Glossary (desktop only)
- All lesson sections always visible (no collapse gates)
- Scroll progress bar (`#progress-bar`) with dynamic gradient trail
- Dark/light toggle (`#theme-toggle`) with tactile hover rotation; preference stored as `localStorage.theme`
- Pathfinding visualizers: Org chart / City grid tabs
- Footer year filled from `new Date().getFullYear()`

## Theme and diagrams

Mermaid flowcharts are authored in HTML. Colors are baked at render time, so `reThemeMermaid` resets each `.mermaid` node from a captured source map and calls `mermaid.run` when the theme changes. Returning visitors in dark mode re-theme on `window.load`.

## Pre-requisites (`#prerequisites`)

Formal section title **Pre-requisites** with `.section-lede`. Nine `.starter-card` items use `.lesson-header` (eyebrow `Pre-requisites · N of 9`, explicit `.lesson-title`). Spacious multi-column responsive layout without horizontal cramping. Folds: `.lesson-fold.fold-code` (Python with vibrant syntax highlighting), `.lesson-fold.fold-paper` (practice question with hidden answer line).

## Section Organization & Pedagogical Flow

The entire curriculum is logically organized into dedicated, sequential modules:
1. **Data Structures (`#data-structures`)**: Stack, Queue, Linked List, and Hash Map. Foundational memory organization before complex algorithmic processing.
2. **Searching Algorithms (`#searching`)**: Linear Search, Big-O aside, Binary Search, and Graph Pathfinding (BFS, A* Search).
3. **Sorting Algorithms (`#sorting`)**: Selection Sort, Bubble Sort, Recursion Bridge, Quick Sort, and Merge Sort.
4. **Cheat Sheet (`#cheat-sheet`)**: Unified quick-reference tables ordered by Data Structures, Searching, Pathfinding, and Sorting.
5. **Knowledge Check (`#quiz`)**: 18-question interactive assessment.
6. **Bento Grid Glossary (`#glossary`)**: Modular, categorized dictionary with instant search and filtering.

## Algorithm and structure lessons

Each lesson opens with `.lesson-header`: `.lesson-eyebrow` (parent section), `.lesson-title` (algorithm name), `.lesson-meta` tags. Folds use `.lesson-fold` modifiers: `fold-flowchart`, `fold-steps`, `fold-code` (vibrant syntax highlighting), `fold-help` (spacious, isolated card padding without double borders). Quick Checks use dedicated badge headers, lettered option buttons (A, B, C), and instant visual feedback callouts with custom icons. Details: [algorithms.md](algorithms.md), [data-structures.md](data-structures.md).

## Cheat sheet (`#cheat-sheet`)

Comparison tables ordered to match curriculum (Data Structures, Searching, Pathfinding, Sorting), including **Use it when…** and **Do not use when…**, plus a decision list.

## Knowledge check (`#quiz`)

Eighteen multiple-choice questions in `quizQuestions`. One card visible at a time. Generously spaced options (`.quiz-opts`, `.quiz-options`) with clear vertical separation, touch-friendly padding, and keyboard accessibility (keys `1`–`4` or Enter/Space). Results show `score/18` and **Review …** links for missed topics. `resetQuiz` rebuilds the DOM.

## Bento Grid Glossary (`#glossary`)

Terms from `glossaryTerms` rendered in a modern CSS Grid Bento layout with category tags (`structures`, `algorithms`, `complexity`, `python`), featured wide-span items, instant live search filtering, clear buttons, and category filter pills. Inline `.glossary-term` tooltips use `data-definition`.

## Author (`#author`)

`profile.png` presented with professional circular framing (`object-position: center 12%`, 120px) preventing top-of-head cropping, short bio, and portfolio link.

## Print

`@media print` hides nav, visualizers, buttons, and quiz chrome; expands flowchart details.
