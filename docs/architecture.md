# Architecture

## Layout (three runtime files)

```
computing-for-datascience/
├── index.html      Page structure, copy, Mermaid source, canvas IDs
├── style.css       Tokens, layout, visualizer, quiz, DS, print
├── app.js          Snippets, Visualizer + pathfinding + DS classes, quiz, UI chrome
├── server.js       Minimal Express static file server for container/preview environments
├── package.json    Node configuration for scripts and dependencies (Express)
├── profile.png     Author photo
├── robots.txt
├── sitemap.xml
├── AGENTS.md       Instructions for coding agents
├── changelog.md    Agent change log
├── docs/           This documentation
└── graphify-out/   Knowledge graph (query with graphify)
```

No bundler required. Open `index.html` locally, serve the folder as static files, or run `npm run dev` with Express.

## Boot order

1. Browser parses `index.html` (`lang="en"`, `data-theme="light"`).
2. CSS from `style.css`; fonts from Google Fonts (Inter, JetBrains Mono).
3. Inline script initializes **Mermaid 11** (`startOnLoad: true`, `theme: 'base'`).
4. `app.js` loads with `defer` inside an IIFE, then:
   - Injects highlighted Python into empty `<code id="code-…">` nodes
   - Constructs visualizers bound to canvas IDs
   - Builds checkpoints, glossary, quiz, color legends (listeners, not inline `onclick`)
   - Wires buttons via `readInt`, `bindSearchControls`, `bindSortControls`
   - Captures Mermaid source text so dark mode can re-render diagrams
   - Wires scroll outline, Org chart / City grid tabs, glossary tap
   - Optional `?selfcheck=1` banner asserts snippets, quiz length, and HTML escaping

## Data flow

| Data | Lives in | Consumed by |
| --- | --- | --- |
| Teaching Python | `snippets` in `app.js` | `renderCode` / `highlightPython`; copy buttons |
| Random arrays | `Visualizer.init` | Search/sort bar animations |
| Shared maze | `sharedMaze` / `generateMaze` | Both BFS and A* grid canvases |
| Tree layouts | `generateTree` | BFS/A* tree canvases |
| Stack/queue/list items | `*Visualizer.items` | DS canvases (JS arrays, not pointer graphs) |
| Quiz items | `quizQuestions` | `buildQuiz` / `selectAnswer` |
| Checkpoints | `checkpointData` keyed by `data-algo` | `.checkpoint` nodes in HTML |
| Glossary | `glossaryTerms` | `#glossary-grid` |
| Theme | `localStorage.theme` | `document.documentElement data-theme` |
| Finished checkpoints | `localStorage.checkpointDone` | optional internal tracking |

## Visualizer engine (`Visualizer`)

Shared bar chart for search and sort:

- Constructor: `(containerId, isSorted, arraySize, seed)`
- Values: random integers 10–99 unless `seed` is passed (Linear `[8,3,11,5,9]`, Binary sorted walkthrough list)
- `init(true)` uses the seed once; **New Array** calls `init(false)` for a fresh random list
- `isSorting` prevents overlapping runs; Reset sets `isSorting = false` and explains that the run stopped
- `delay` (300 ms) scales sleeps per algorithm
- CSS classes on bars: `active`, `comparing`, `sorted`, `pivot`, `inactive`
- Search **and** sort canvases get the bar color legend; pathfinding uses waiting/checked/walk/wall

Instances:

| Variable | Canvas | Sorted | Size |
| --- | --- | --- | --- |
| `vizLinear` | `canvas-linear` | no | 5 (seeded) |
| `vizBinary` | `canvas-binary` | yes | 7 (seeded) |
| `vizSelection` | `canvas-selection` | no | 12 |
| `vizBubble` | `canvas-bubble` | no | 12 |
| `vizQuick` | `canvas-quick` | no | 16 |

DS visualizers are separate classes (`StackVisualizer`, `QueueVisualizer`, `LinkedListVisualizer`), each capped at 10 items.

Pathfinding (not bars): `TreeSearchVisualizer` and `GridSearchVisualizer`, each constructed with `mode` `'bfs'` or `'astar'`. Grid instances subscribe to one `sharedMaze` so **New maze** on either canvas regenerates both. Helpers: `neighbors4`, `manhattan`, `reconstruct`. `isSorting` aborts mid-run on Reset.

## Cross-file contracts

- Every snippet key (`code-lists`, `code-linear-search`, …) must match a `<code id="…">` in HTML.
- Every checkpoint `data-algo` must exist in `checkpointData`.
- Button IDs (`btn-linear-search`, `btn-stack-push`, …) are wired by `getElementById` — missing IDs throw at load.
- Status spans use `aria-live="polite"` for animation messages.
- DS visualizers share `MAX_DS_ITEMS` (10) and `dsEmpty()` for the empty label.
- `app.js` is an IIFE; quiz/checkpoint handlers are not on `window`.
- Open `index.html?selfcheck=1` (or [scripts/self-check.html](../scripts/self-check.html)) for a one-shot sanity banner.

## Graphify

Structural AST of `app.js` plus semantic nodes from README, `index.html`, `robots.txt`, and `profile.png` live in `graphify-out/graph.json`. See [agent-workflow.md](agent-workflow.md).
