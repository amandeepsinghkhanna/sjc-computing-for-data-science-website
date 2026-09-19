# Algorithms

Teaching Python lives in `app.js` `snippets`. List search/sort animations live on `Visualizer`. Pathfinding uses `TreeSearchVisualizer` and `GridSearchVisualizer` (`mode: 'bfs' | 'astar'`). Complexities below match the on-page cheat sheet.

On-page order (not textbook order): Linear Search → Selection/Bubble → Binary Search → Stack/Queue → BFS/A* → Linked List → Hash Map → recursion bridge + Quick Sort + Merge Sort.

## Linear Search

- **Need sorted?** No
- **Time:** best O(1), average/worst O(n); **space** O(1)
- **Visualizer:** `vizLinear.linearSearch` on `#canvas-linear` (seed `[8, 3, 11, 5, 9]`)
- **Controls:** `#input-linear`, `#btn-linear-search`, `#btn-linear-reset`
- **Snippet:** `code-linear-search` — scan indices, return index or `-1`
- **Use when:** small, unsorted, or one-off search

Animation: each bar `active`, then `inactive` if miss; match becomes `sorted`.

## Binary Search

- **Need sorted?** Yes
- **Time:** best O(1), average/worst O(log n); **space** O(1)
- **Visualizer:** `vizBinary.binarySearch` on `#canvas-binary` (seed `[3, 7, 11, 15, 19, 23, 27]`)
- **Snippet:** `code-binary-iter` — iterative `low`/`high`/`mid`, integer `//`
- **Use when:** sorted list, many queries

Animation: bars outside `[low, high]` get `inactive`; `mid` is `active`.

## Breadth-First Search

- **Need sorted?** No (not a list search). Unweighted hops on a graph.
- **Time:** O(V+E) (grid ≈ rows×cols); **space** O(V)
- **Visualizers:** `TreeSearchVisualizer('canvas-bfs-tree', 'bfs')`, `GridSearchVisualizer('canvas-bfs-grid', 'bfs')` sharing `sharedMaze`
- **Controls:** Find path / New tree; Find path / New maze (`#btn-bfs-tree-run`, `#btn-bfs-grid-run`, …)
- **Tabs:** Switch between "Org chart (Tree)" and "City grid (2D Maze)"
- **Snippets:** `code-bfs-tree` (`deque` + adjacency dict), `code-bfs-grid` (4-neighbors, `#` walls)
- **Use when:** fewest hops on a tree, maze, or unweighted graph

Tree paints level-order via a FIFO queue, displaying explicit depth hops on nodes (`hop <depth>`). Grid visually displays an expanding ripple across all unblocked directions, tracking queue size and cell visits until reaching the goal, followed by vibrant shortest path reconstruction.

## A* Search

- **Heuristic:** Manhattan `|dx|+|dy|` on grids (admissible with 4-way moves). Tree uses `|depth(goal) − depth(node)|`.
- **Time:** typical O(E log V) with a heap; JS visualizer scans the tiny open list
- **Visualizers:** same two classes with `mode: 'astar'` (`#canvas-astar-tree`, `#canvas-astar-grid`)
- **Tabs:** Switch between "Org chart (Tree)" and "City grid (2D Maze)"
- **Snippets:** `code-astar-tree`, `code-astar-grid` (`heapq`, `f = g + h`)
- **Use when:** pathfinding with a guess toward the goal. `h = 0` behaves like Dijkstra / BFS on equal costs.

Displays mathematical costs directly on nodes and cells: `g` (steps taken), `h` (estimated remaining), and `f = g + h` (total estimated cost). Status telemetry explicitly reports the minimum `f` node popped on each cycle. Reconstructs and highlights the shortest path in emerald once the goal is popped. Stop when the goal is **popped**, not merely discovered.

## Selection Sort

- **Time:** O(n²) all cases; **space** O(1); **stable?** No
- **Visualizer:** `vizSelection.selectionSort`
- **Snippet:** `code-selection-sort` — outer `i`, inner min scan, one swap per pass
- **Use when:** tiny lists or swap count matters

`min_idx` uses `pivot` class while scanning; placed bars become `sorted`.

## Bubble Sort

- **Time:** best O(n) with early-exit (a swap-free pass stops the JS visualizer and the Python snippet), average/worst O(n²); **space** O(1); **stable?** Yes
- **Visualizer:** `vizBubble.bubbleSort` (early-exit when a pass makes no swaps)
- **Snippet:** `code-bubble-sort` — adjacent swaps, inner bound `n - i - 1`, `swapped` flag
- **Use when:** teaching, or nearly sorted data (with early exit)

## Quick Sort

- **Time:** best/average O(n log n), worst O(n²); **space** O(log n); **stable?** No
- **Visualizer:** `vizQuick.quickSort` + `partition` (pivot = last element; swap when `array[j] < pivot`)
- **Snippet:** `code-quick-sort` — recursive `quick_sort` + `partition` with `<=` pivot
- **Use when:** general-purpose sort on large data

Root call sets `isSorting`; after recursion all bars marked `sorted`.

## Merge Sort

- **Time:** O(n log n) all cases; **space** O(n) for merge buffers; **stable?** Yes
- **Visualizer:** `vizMerge.mergeSort` + `merge` on `#canvas-merge` (≤12 bars). Split highlights left/right halves; merge compares fronts.
- **Snippet:** `code-merge-sort` — recursive `merge_sort` + `merge` with temp left/right copies
- **Use when:** guaranteed O(n log n), stable ordering, or teaching split-and-merge recursion

Contrasts with Quick Sort: no pivot, no O(n²) worst case on sorted input, but needs extra array space.

## Checkpoints

`checkpointData` keys: `linear-search`, `binary-search`, `bfs`, `astar`, `selection-sort`, `bubble-sort`, `quick-sort`, `merge-sort`, `stack`, `queue`, `linked-list`, `hash-map`. About 4–5 questions each (predict-the-picture + why). HTML `.checkpoint[data-algo]` must match.
