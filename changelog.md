# Changelog

Agent-maintained log. Newest first. Each entry: timestamp, who changed it, a plain-language change, and the benefit.

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
