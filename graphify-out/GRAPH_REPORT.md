# Graph Report - computing-for-datascience  (2026-09-08)

## Corpus Check
- 17 files · ~122,486 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 235 nodes · 369 edges · 16 communities (14 shown, 2 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `dbd0b405`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Features
- .render
- Data Structures and Algorithms
- README.md
- Visualizer
- Young adult man with short dark hair, dark eyes, light beard, smiling at camera
- Frontend
- Algorithms
- Overview
- Agent instructions — Computing for Data Science Lab
- Changelog
- Maintain changelog.md
- Graphify
- Project documentation in /docs
- Lazy senior developer mode
- app.js

## God Nodes (most connected - your core abstractions)
1. `Visualizer` - 15 edges
2. `Data Structures and Algorithms` - 11 edges
3. `TreeSearchVisualizer` - 10 edges
4. `Changelog` - 10 edges
5. `Algorithms` - 10 edges
6. `Features` - 10 edges
7. `DSA Learning Hub` - 9 edges
8. `setStatus()` - 8 edges
9. `StackVisualizer` - 8 edges
10. `QueueVisualizer` - 8 edges

## Surprising Connections (you probably didn't know these)
- `DSA Learning Hub` --semantically_similar_to--> `Computing for Data Science Lab`  [INFERRED] [semantically similar]
  README.md → index.html
- `index.html Entry Point` --references--> `Computing for Data Science Lab`  [AMBIGUOUS]
  README.md → index.html
- `Dark/Light Mode` --shares_data_with--> `Theme Toggle`  [INFERRED]
  README.md → index.html
- `GitHub Pages Sitemap` --conceptually_related_to--> `GitHub Pages Site`  [INFERRED]
  robots.txt → index.html
- `Knowledge Check Quiz` --conceptually_related_to--> `Knowledge Check`  [INFERRED]
  README.md → index.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Five Searching and Sorting Visualizers** — index_linear_search, index_binary_search, index_selection_sort, index_bubble_sort, index_quick_sort [EXTRACTED 1.00]
- **Three Fundamental Data Structures** — index_stack, index_queue, index_linked_list [EXTRACTED 1.00]
- **CDS Lab Pedagogical Loop** — index_brain_map, readme_algorithm_visualizers, index_knowledge_check [INFERRED 0.75]

## Communities (16 total, 2 thin omitted)

### Community 0 - "Features"
Cohesion: 0.20
Nodes (10): Algorithm and structure lessons, Author (`#author`), Cheat sheet (`#cheat-sheet`), Features, Glossary (`#glossary`), Knowledge check (`#quiz`), Navigation and chrome, Pre-requisites (`#prerequisites`) (+2 more)

### Community 1 - ".render"
Cohesion: 0.10
Nodes (5): dsEmpty(), HashMapVisualizer, LinkedListVisualizer, QueueVisualizer, StackVisualizer

### Community 2 - "Data Structures and Algorithms"
Cohesion: 0.09
Nodes (30): Big O Notation, Binary Search, Brain Map, Bubble Sort, Cheat Sheet, Computing for Data Science Lab, Divide and Conquer, Data Structures and Algorithms (+22 more)

### Community 3 - "README.md"
Cohesion: 0.09
Nodes (19): Agent workflow, changelog.md, Documentation, Graphify knowledge graph, YAGNI, Architecture, Boot order, Cross-file contracts (+11 more)

### Community 5 - "Young adult man with short dark hair, dark eyes, light beard, smiling at camera"
Cohesion: 0.40
Nodes (6): BB-8 spherical droid character, Stylized BB-8 graphic on light t-shirt (orange, blue, black line art with paint-splatter effects), Profile headshot photograph, Young adult man with short dark hair, dark eyes, light beard, smiling at camera, Likely website or project profile subject (author/contributor), Star Wars franchise

### Community 6 - "Frontend"
Cohesion: 0.13
Nodes (13): Crawl and sharing, Dependencies at runtime, Deployment, Hosting, Local, What not to deploy as “app config”, Accessibility, Design tokens (`style.css`) (+5 more)

### Community 8 - "Algorithms"
Cohesion: 0.20
Nodes (10): A* Search, Algorithms, Binary Search, Breadth-First Search, Bubble Sort, Checkpoints, Linear Search, Merge Sort (+2 more)

### Community 9 - "Overview"
Cohesion: 0.22
Nodes (8): Audience, Backlog (do not build yet), How to use the page, Overview, Pedagogical order (not textbook chapter order), What students learn, What this is, What this is not

### Community 10 - "Agent instructions — Computing for Data Science Lab"
Cohesion: 0.33
Nodes (5): Agent instructions — Computing for Data Science Lab, changelog.md, Documentation (`/docs`), Stack constraints, YAGNI (You Aren't Gonna Need It)

### Community 11 - "Changelog"
Cohesion: 0.18
Nodes (10): 2026-09-07T16:16:00+05:30, 2026-09-07T16:27:00+05:30, 2026-09-07T17:13:00+05:30, 2026-09-07T18:15:00+05:30, 2026-09-07T18:25:00+05:30, 2026-09-07T18:50:00+05:30, 2026-09-08T09:30:00+05:30, 2026-09-08T10:15:00+05:30 (+2 more)

### Community 12 - "Maintain changelog.md"
Cohesion: 0.40
Nodes (4): How, Maintain changelog.md, Template, When

### Community 13 - "Graphify"
Cohesion: 0.50
Nodes (3): After source changes, Before exploring, Graphify

### Community 14 - "Project documentation in /docs"
Cohesion: 0.50
Nodes (3): Map, Project documentation in /docs, Rules

### Community 16 - "app.js"
Cohesion: 0.09
Nodes (32): bindPathControls(), bindSearchControls(), bindSortControls(), buildCheckpoints(), buildGlossary(), buildQuiz(), buildScrollOutline(), cellKey() (+24 more)

## Ambiguous Edges - Review These
- `Computing for Data Science Lab` → `index.html Entry Point`  [AMBIGUOUS]
  README.md · relation: references

## Knowledge Gaps
- **84 isolated node(s):** `Before exploring`, `After source changes`, `When`, `How`, `Template` (+79 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Computing for Data Science Lab` and `index.html Entry Point`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **Why does `Visualizer` connect `Visualizer` to `app.js`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **Why does `Algorithms` connect `Algorithms` to `README.md`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Why does `Features` connect `Features` to `README.md`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Data Structures and Algorithms` (e.g. with `Knowledge Check` and `Python Starter Pack`) actually correct?**
  _`Data Structures and Algorithms` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Before exploring`, `After source changes`, `When` to the rest of the system?**
  _84 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `.render` be split into smaller, more focused modules?**
  _Cohesion score 0.0967741935483871 - nodes in this community are weakly interconnected._