# Changelog

Agent-maintained log. Newest first. Each entry: timestamp, who changed it, a plain-language change, and the benefit.

## 2026-09-19T11:42:00-07:00

- **Timestamp:** 2026-09-19T11:42:00-07:00
- **Changed by:** agent
- **Change:** Fixed layout and viewport clipping for Hash Map and Breadth-First Search (BFS) / Tree Visualizers:
  1. **Hash Map Layout**: Replaced unstyled vertical stacking with a 7-column responsive grid (`.ds-hash-row`, 68px minimum bucket width, horizontal scroll on mobile). Added natural container expansion (`height: auto; min-height: 220px; overflow-x: auto`), bucket framing (`.ds-hash-bucket`, 110px min-height), vertical chain stacks (`.ds-hash-chain`), empty slot badges (`.ds-hash-empty`), and search hit glow animations (`.ds-hash-chain-item.is-hit`).
  2. **BFS & Pathfinding Tree Layout**: Resolved vertical clipping where Node A (top) and Nodes H & I (bottom) were cut off by the canvas bounds. Expanded `.path-tree-canvas` min-height to 380px with natural height (`height: auto`), shifted vertical alignment from centered to top-aligned (`justify-content: flex-start`), added 2.25rem top padding to provide clear headroom for floating `START` and `GOAL` badges, and tuned connector spacing.
  3. **Data Structure Stage Wrappers**: Styled `.ds-stack-wrapper`, `.ds-queue-wrapper`, and `.ds-ll-wrapper` with responsive flexbox and clear alignment, ensuring all four core data structures display consistently.
- **Benefit:** All 7 hash buckets are clearly visible side-by-side with collision chains legible, and the full multi-tier hierarchy in tree visualizers is fully visible from top to bottom with zero clipping.

## 2026-09-19T11:35:00-07:00

- **Timestamp:** 2026-09-19T11:35:00-07:00
- **Changed by:** agent
- **Change:** Refined hero header, knowledge check options ergonomics, and creator profile portrait:
  1. **Hero Badge Removal:** Removed the `INTERACTIVE LEARNING LABORATORY · SJU CDS LAB` pill element above the primary hero headline.
  2. **Knowledge Check Spacing:** Connected `.quiz-options` and `.quiz-opts` layout styles, increased vertical option spacing (`gap: 0.875rem`), expanded touch/click padding (`1.05rem 1.35rem`, 1rem text size), styled the question heading class, and added spacing above the next question navigation button.
  3. **Creator Profile Image Reframing:** Upgraded `.author-img` sizing to 120px with `object-position: center 12%`, properly framing the creator's full head, hair, face, and collar without any top-of-head cropping.
- **Benefit:** Cleaner hero aesthetic, significantly more comfortable and readable quiz answer selection, and a polished, professional creator presentation.

## 2026-09-19T00:11:00-07:00

- **Timestamp:** 2026-09-19T00:11:00-07:00
- **Changed by:** agent
- **Change:** Fixed navigation bar highlight lag and click synchronization across all sections (YAGNI):
  1. **Immediate Click Feedback:** Clicking any navigation link (such as "Pre-requisites" from Home) immediately activates the target anchor (`setActiveNav`), closing the mobile drawer and suppressing intermediate scroll events during smooth-scrolling with a clean 800ms debounce timer.
  2. **Viewport-Accurate Scroll Spy:** Switched from fragile element `offsetTop` calculations (which caused a one-section lag due to parent padding and CSS scroll margins) to direct viewport measurement using `getBoundingClientRect().top <= 150` (below the 64px sticky navbar).
  3. **Consistent Scroll Offsets:** Removed redundant `scroll-padding-top: 80px` on `html` and standardized `scroll-margin-top: 80px` across both `header#home` and `section` elements, preventing browser double-offset stacking and ensuring sections land at the exact target position.
- **Benefit:** Navigating by click or manual scrolling highlights the exact active section instantly without lagging or getting stuck on the previous section.

## 2026-09-18T23:45:00-07:00

- **Timestamp:** 2026-09-18T23:45:00-07:00
- **Changed by:** agent
- **Change:** Fixed navigation bar scroll spy highlight tracking across all sections (YAGNI refactor) and enriched BFS and A* pathfinding visualizers:
  1. **YAGNI Navigation Highlight Fix:** Replaced fragile IntersectionObserver margin threshold calculation with a robust, direct scroll offset listener (`updateActiveNav()`). As a result, the red active highlight seamlessly follows the student across all curriculum sections (Home, Pre-requisites, Data Structures, Searching, Sorting, Cheat Sheet, and Glossary), as well as on click and at document boundaries.
  2. **Explicit BFS & A* Visualizer Layouts:** Restored CSS Grid layout for the 2D maze (`.path-grid { display: grid; }`) and vertical tree level flex hierarchy (`.path-tree-level`), resolving squashed flex layout rendering defects.
  3. **Node & Cell State Indicators:** Styled explicit visual states with high-contrast color badges: Start (deep blue with 'S' badge), Goal (emerald green with 'G' badge), Frontier/Open Set (warm amber with glow), Visited/Closed Set (subtle crimson tint), and Shortest Path (vibrant emerald with glow).
  4. **Dynamic Telemetry & Descriptive Status Messages:** Added live mathematical telemetry on nodes and cells: A* displays explicit f, g, and h costs (`g + h = f`) in the cell and status bar, while BFS displays queue counts, node depth hops, and explicit distinction between uninformed breadth-first ripple vs. heuristic-directed exploration.
  5. **Visualizer Color Legends & Tabs:** Styled `.viz-legend` with descriptive labels matching course concepts and updated visualizer tabs to explicitly state "Org chart (Tree)" and "City grid (2D Maze)".
- **Benefit:** Ensures students can always track their exact position in the curriculum via the top navigation bar and makes the comparative mechanics of BFS vs. A* search visually transparent and intuitive to understand.

## 2026-09-16T05:20:00-07:00

- **Timestamp:** 2026-09-16T05:20:00-07:00
- **Changed by:** agent
- **Change:** Comprehensive curriculum reorganization, Quick Check redesign, Help fold styling fix, and Bento Grid Glossary implementation:
  1. **Logical Curriculum Hierarchy:** Reorganized the entire website layout into the requested order: **Data Structures** (Stack, Queue, Linked List, Hash Map) → **Searching Algorithms** (Linear Search, Binary Search, BFS, A* Search) → **Sorting Algorithms** (Selection Sort, Bubble Sort, Quick Sort, Merge Sort) → **Cheat Sheet** (reordered matching the curriculum) → **Knowledge Check** → **Glossary**.
  2. **Navigation & Scrollspy Sync:** Updated the sticky header links, hero quick-action buttons, and the right-hand dynamic Notion-style `scroll-outline` in `app.js` to mirror the new pedagogical sequence.
  3. **Help Section Styling Fix:** Resolved broken layout and border collisions in `.lesson-fold.fold-help` by providing dedicated breathing room, isolated 1.25rem padding, subtle border boundaries, and distinct visual accents.
  4. **Quick Check Redesign:** Elevated checkpoint cards with custom badge headers, question counters, clear A/B/C lettered option buttons, and animated feedback callouts with custom check/cross indicator icons.
  5. **Interactive Bento Grid Glossary:** Built a high-performance CSS Grid Bento dictionary featuring categorized term tags (Data Structures, Algorithms, Complexity, Python), featured wide cards, real-time live search with clear button, and category filter pills with live term counters.
- **Benefit:** Creates an intuitive pedagogical flow where students master data structures before algorithms, eliminates visual bugs in help and checkpoint folds, and provides a modern, instantly searchable reference glossary.

## 2026-09-16T05:08:00-07:00

- **Timestamp:** 2026-09-16T05:08:00-07:00
- **Changed by:** agent
- **Change:** Addressed hero cleanliness, pre-requisites section layout, and codeblock syntax highlighting:
  1. **Hero Headline & Cards Clean-up:** Removed "Through Live Execution" from the hero title leaving a clean, punchy headline ("Master Data Structures & Algorithms"). Removed the 4 metric cards (algorithms, data structures, checkpoints, and quiz questions) to eliminate visual noise.
  2. **Spacious Pre-requisites Section:** Redesigned `.starter-grid` and `.starter-card` to eliminate horizontal cramping. Upgraded column sizing from cramped 280px minimums to a comfortable 360px+ baseline, gave cards generous 1.75rem padding, styled the concept icons into floating badges with subtle borders, and added dedicated padding and borders for practice question accordions.
  3. **Vibrant Codeblock Syntax Highlighting:** Engineered full syntax highlighting across all code containers (`.kw` in coral/crimson `#ff5277`, `.func` in sky blue `#38bdf8`, `.str` in emerald green `#34d399`, `.num` in tangerine orange `#fb923c`, and `.comment` in muted slate italic `#94a3b8`). Formatted code lines with flex alignment, fixed line-number gutters, and border separators so numbers and code never collide.
- **Benefit:** Dramatically increases code and text legibility, removes horizontal squeezing and unnecessary scrollbars on prerequisite cards, and delivers a clean, modern aesthetic.

## 2026-09-16T05:00:00-07:00

- **Timestamp:** 2026-09-16T05:00:00-07:00
- **Changed by:** agent
- **Change:** Refined the visual design system and overhauled the hero section:
  1. **Professional Hero Redesign & Explicit Content:** Replaced informal taglines with an explicit educational headline ("Master Data Structures & Algorithms Through Live Execution") and clear course context detailing 8 algorithms, 4 data structures, and interactive checkpoints.
  2. **Gen-Z Interactive Algorithm Deck:** Designed and engineered a live terminal-style algorithm arena in the hero (`#hero-algo-deck`) featuring automated quick-sort partitioning, a laser sweep beam, live O(n log n) telemetry, hover pulse effects, and an interactive scramble button.
  3. **Softened Color Scheme & Fixed Border Rendering:** Calibrated `--color-bg-primary` to a glare-free off-white (`#fbfbfc`), replaced harsh 2px black slabs with crisp, single-pixel borders (`#e2e8f0`) and layered soft-tech shadows. Fixed table and accordion border-rendering issues by enforcing clean cell separation without subpixel double-border clipping.
- **Benefit:** Eliminates visual harshness and rendering defects while delivering an engaging, tech-forward first impression that clearly communicates the course's academic purpose.

## 2026-09-16T04:55:00-07:00

- **Timestamp:** 2026-09-16T04:55:00-07:00
- **Changed by:** agent
- **Change:** Transformed the site aesthetic to high-end Neo-Brutalism in Black, White, and Crimson Red:
  1. **Color System & Gradients:** Completely eliminated purple and pink in favor of an authoritative palette of obsidian black (`#09090b`), crisp whites (`#ffffff`, `#fafafa`), and energetic crimson reds (`#e11d48`, `#ff1e42`). Integrated rich fiery gradients for hero headlines, primary actions, and visualizer comparison bars.
  2. **Standardized Typography:** Realigned the entire typographic scale to a strict modular hierarchy using *Outfit* for punchy display headers, *Plus Jakarta Sans* for readable 16px body copy at 1.65 line-height, and *JetBrains Mono* for technical telemetry and code badges.
  3. **Professional & Intuitive Navigation:** Upgraded navigation from a floating capsule to a sticky, edge-to-edge header with containerized layout, bold brutalist `[CDS]` badge, clear section links, automated scroll spy tracking, and an accessible mobile accordion menu.
  4. **Neo-Brutalist Accents:** Replaced soft rounded cards with crisp 2px solid outlines, hard offset shadows (`3px 3px 0px` / `4px 4px 0px`), red accent borders, and tactile button presses.
- **Benefit:** Elevates the learning hub to a professional, high-impact aesthetic that guides students with unambiguous visual hierarchy and intuitive section navigation.

## 2026-09-16T04:40:00-07:00

- **Timestamp:** 2026-09-16T04:40:00-07:00
- **Changed by:** agent
- **Change:** Complete 2026 UI/UX design overhaul:
  1. **Typography & Expressive Hierarchy:** Paired bold display typeface *Outfit* (headings, stats, Big-O metrics) with clean humanist body typeface *Plus Jakarta Sans* and *JetBrains Mono* for code. Transformed the hero title with an energetic dopamine gradient punchline and live interactive pulsing edition badge.
  2. **Organic Layouts & Anti-Grid Design:** Introduced calm floating ambient gradient mesh backgrounds (`.ambient-mesh` with drifting organic blobs), curved radial section dividers, and optical squircle container curves (`--border-radius: 20px`). Redesigned the brain map cards with an organic pill callout aesthetic.
  3. **Motion Design & Micro-Interactions:** Added spring physics transitions (`cubic-bezier(0.16, 1, 0.3, 1)`), tactile magnetic button interactions, animated halo glows on active/comparing/sorted visualizer bars, and responsive interactive feedback on checkpoints and quiz options.
  4. **Vibrant "Dopamine Design" with Calm Tech:** Formulated an eye-safe, glare-free light canvas (`#f8fafc`) and cosmic obsidian dark canvas (`#090a10`), highlighted with cyber cobalt, electric ultra-violet, neo-emerald, and solar amber dopamine accents meeting strict WCAG AA contrast standards.
- **Benefit:** Gives students and educators a visually stimulating, modern learning experience with smoother visual feedback during algorithm execution while preserving eye comfort and accessibility across all screen sizes.

## 2026-09-16T04:26:00-07:00

- **Timestamp:** 2026-09-16T04:26:00-07:00
- **Changed by:** agent
- **Change:** Configured minimal Node.js runtime support (`package.json`, `server.js` with Express) and platform metadata (`metadata.json`, `.env.example`) so the static site can boot on port 3000 in containerized environments like Google AI Studio.
- **Benefit:** Students and evaluators can interact with the educational DSA site and visualizers directly in the AI Studio preview environment without modifying the vanilla HTML/CSS/JS source or introducing complex build tools.

## 2026-09-08T11:00:00+05:30

- **Timestamp:** 2026-09-08T11:00:00+05:30
- **Changed by:** agent
- **Change:** Formalized all section and lesson headers to match the top nav (e.g. Searching, not “messy list”), added a consistent `.lesson-header` block on every algorithm and prerequisite card, split overloaded fold UI into `.lesson-fold` types (code, paper, help, flowchart), and turned the Big-O aside into a visible callout instead of a misleading collapsed box.
- **Benefit:** Students see the real topic name first, help panels look different from Python/flowchart folds, and practice answers stay hidden until they open the question.

## 2026-09-08T10:15:00+05:30

- **Timestamp:** 2026-09-08T10:15:00+05:30
- **Changed by:** agent
- **Change:** Added Merge Sort and Hash Map lessons (story, Python, visualizers, checkpoints), restored original top-nav section names, rebuilt the right-edge scroll outline to list each topic by name, extended the quiz to 18 questions, and updated the cheat sheet and glossary.
- **Benefit:** Students get stable O(n log n) sorting and key–value lookup with the same lesson template as existing topics; teachers can jump straight to any algorithm from the hover outline without student slang in the nav bar.

## 2026-09-08T09:30:00+05:30

- **Timestamp:** 2026-09-08T09:30:00+05:30
- **Changed by:** agent
- **Change:** Fixed the broken layout where the “You are here” block acted as a second fixed navbar (bare `nav` CSS hit the wrong element). Removed “Open this part” gates, the duplicate how-to strip, and progress-based collapsing. Added a Notion-style right-edge scroll outline for classroom jumps and Pathfinding to the top nav.
- **Benefit:** Returning students see every lesson immediately; teachers can jump to today’s topic from the nav or the hover outline without fighting hidden sections or a box over the hero.

## 2026-09-07T18:50:00+05:30

- **Timestamp:** 2026-09-07T18:50:00+05:30
- **Changed by:** agent
- **Change:** Reworked the page for students with no CS background: shorter nav, a three-step how-to, a You-are-here path, later parts collapsed, slower Python bits, lessons reordered (sort before Binary, Queue before BFS, recursion before Quick Sort), optional Python folds, visualizer hints and legends, honest Bubble early-exit, richer checkpoints, a 16-question quiz that links back to lessons, and tap-to-open glossary words. Extra DSA topics stay listed as backlog in the docs only.
- **Benefit:** A complete beginner can follow one next step, press a labeled button, and get doubts answered on the same page without extra courses or tools.

## 2026-09-07T18:25:00+05:30

- **Timestamp:** 2026-09-07T18:25:00+05:30
- **Changed by:** agent
- **Change:** Expanded the README so it lists every algorithm and data structure, how to open or serve the site, self-check, and the real repo layout (docs, agents, Graphify). Ignored the Graphify cache folder so it is not committed.
- **Benefit:** Newcomers and GitHub visitors can run the lab and see what is in the repo without opening the HTML first.

## 2026-09-07T18:15:00+05:30

- **Timestamp:** 2026-09-07T18:15:00+05:30
- **Changed by:** agent
- **Change:** Added Breadth-First Search and A* to Part 1 with separate tree and grid lessons, four Python snippets, pathfinding visualizers, cheat-sheet table, glossary terms, checkpoints, and four extra quiz questions (14 total).
- **Benefit:** Students can see why a queue finds fewest hops and why a heuristic paints fewer cells, without mixing those ideas into Linear/Binary Search.

## 2026-09-07T17:13:00+05:30

- **Timestamp:** 2026-09-07T17:13:00+05:30
- **Changed by:** agent
- **Change:** Cleaned the three runtime files in place: IIFE, no unused quiz/bubble flags, quiz and checkpoints use real event listeners, CSS utilities instead of inline lesson styles, glossary tooltip tokens, skip-link to main content, and a `?selfcheck=1` banner. Visualizer algorithms and copy were not changed (aside from a linear-search comment typo).
- **Benefit:** The site is safer to maintain and less likely to throw or show a fake 0/4 score, while students still see the same lessons, quizzes, and animations.

## 2026-09-07T16:27:00+05:30

- **Timestamp:** 2026-09-07T16:27:00+05:30
- **Changed by:** agent
- **Change:** Replaced the short YAGNI skill with the full lazy-senior development ladder (understand the problem, then reuse or write the minimum), without product-specific branding. Corner-cutting notes use a `simplification:` comment instead of a branded tag.
- **Benefit:** Agents get a complete, generic decision ladder for every change, not just a short “don’t add frameworks” list, so they skip unneeded work and still fix the real bug.

## 2026-09-07T16:16:00+05:30

- **Timestamp:** 2026-09-07T16:16:00+05:30
- **Changed by:** agent
- **Change:** Added `AGENTS.md`, Cursor skills and always-on rules for YAGNI, changelog, `/docs`, and Graphify; wrote comprehensive documentation under `/docs`; built the project knowledge graph in `graphify-out/`; started this changelog.
- **Benefit:** Future agents get a single contract for how to change the site, a place to record what they did and why it helps, full project documentation, and a queryable map of the codebase instead of grepping blindly.
