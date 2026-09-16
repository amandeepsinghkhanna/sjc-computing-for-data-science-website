# Overview

## What this is

An interactive educational website for learning searching algorithms, sorting algorithms, and three core data structures. It is built for the **Computing for Data Science Lab** course at **St. Joseph's University**.

Public title: **DSA without the emotional damage.** Author: Amandeep Singh Khanna (Sr. Data Scientist).

## Audience

Students with **little or no CS or programming**. The page assumes curiosity, not prior coding. English comes first; Python is optional (`<details>`).

## How to use the page

1. Read the story.
2. Press the main button on the picture (colors are labeled).
3. Answer the tiny checkpoint.

**Classroom navigation:** top nav for major section jumps; on desktop, hover the **right edge** for a Notion-style outline (`#scroll-outline`) with one dot per lesson topic. Every lesson is always on the page — nothing is hidden behind gates. Checkpoints still save to `checkpointDone` in `localStorage` (no accounts).

Nav: Home, Pre-requisites, Searching, Sorting, Data Structures, Cheat Sheet.

## Pedagogical order (not textbook chapter order)

1. Pre-requisites (`#prerequisites`) — program, indent, print vs return, lists from 0, loops, `range`/`len`, `=` vs `==`, functions, swap. Optional dict/grid fold.
2. Linear Search (`#searching`) — then a short “how we talk about speed” fold (`#speed-talk`). Big-O is **not** dumped before the first search.
3. Selection + Bubble (`#sorting`) after “why order matters.”
4. Binary Search (`#finding-sorted`) — only after sorted lists exist.
5. Stack then Queue (`#data-structures`).
6. BFS then A* (`#pathfinding`) — queue already taught. Org chart / city grid tabs.
7. Linked list then Hash Map (`#chains`).
8. Recursion bridge, Quick Sort, then Merge Sort (`#divide` / `#recursion-bridge`).
9. Cheat sheet, 18-question quiz, glossary.

## What students learn

Eight algorithms and four structures. Visualizers: Linear seed `[8, 3, 11, 5, 9]`; Binary seed sorted `[3, 7, 11, 15, 19, 23, 27]`. Bubble Sort **stops early** when a pass makes no swaps (matches the story and the Python). Merge Sort and Hash Map include new visualizers (`#canvas-merge`, `#canvas-hash-map`).

Python snippets are teaching code, not a runtime interpreter.

## What this is not

- Not a Python execution sandbox
- Not a SPA, CMS, or multi-page course
- Not a complete DSA textbook

## Backlog (do not build yet)

After the current path feels easy: debugging/tracebacks, DFS vs BFS on the same maze, trees as a structure, a full recursion lesson, open addressing / resize / load factor, heaps (`heapq`), Dijkstra/weighted edges, 2D arrays as a first-class lesson, Timsort as “what Python really does,” optional print worksheets.
