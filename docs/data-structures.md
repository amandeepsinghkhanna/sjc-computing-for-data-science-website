# Data structures

Visualizers store values in JavaScript arrays (max 10). They illustrate access patterns; they are not pointer-accurate memory models. Teaching Python is in `snippets`. On the page, **Queue is taught before BFS**. A short “what `class` means here” note sits above the Stack/Queue snippets (not a full OOP lesson). The linked-list picture is display-only boxes; it is not RAM with arrows.

## Stack (LIFO)

- **Ops:** `push` / `pop` O(1); `peek`, `is_empty`, `size`
- **Visualizer:** `StackVisualizer` on `#canvas-stack` — items stacked, last item visually on top
- **Controls:** `#input-stack`, `#btn-stack-push`, `#btn-stack-pop`, `#btn-stack-reset`
- **Snippet:** `code-stack` — list-backed `class Stack`
- **Use when:** undo, call stack, nested “return points”

## Queue (FIFO)

- **Ops (Python list teaching code):** `enqueue` = `append` O(1); `dequeue` = `pop(0)` O(n)
- **Cheat sheet note:** `collections.deque` is O(1) on both ends; the visualizer still uses an array (`push` / `shift`)
- **Visualizer:** `QueueVisualizer` on `#canvas-queue` — Front → items → Rear
- **Controls:** enqueue, dequeue, reset
- **Snippet:** `code-queue`
- **Use when:** fair, arrival-order processing

## Linked list (singly)

- **Ops:** insert head O(1); insert tail O(n) walk in Python; delete/search by value O(n)
- **Visualizer:** `LinkedListVisualizer` on `#canvas-linked-list` — Head, nodes with `next`, `None`
- **JS model:** `unshift` / `push` / `indexOf`+`splice` on an array (display only)
- **Snippet:** `code-linked-list` — `Node` + `LinkedList` with real `next` pointers
- **Use when:** frequent insert/delete, no random access required

## Hash map

- **Ops:** `put` / `get` average O(1); worst O(n) if all keys collide in one bucket
- **Visualizer:** `HashMapVisualizer` on `#canvas-hash-map` — 7 buckets rendered in a responsive grid (`.ds-hash-row`, min 68px/bucket with horizontal scroll on mobile), vertical chains per bucket, `hashKey` from char codes
- **Controls:** `#input-hash-key`, `#input-hash-val`, `#btn-hash-put`, `#btn-hash-get`, `#btn-hash-reset`
- **Snippet:** `code-hash-map` — list-of-lists buckets + simple string hash
- **Use when:** fast lookup by key (counts, visited sets, caches). Collisions use chains (linked lists in buckets).

Taught after linked list because collision chains are miniature linked lists. Links back to optional `code-dict` in prerequisites.

## Checkpoints

Keys: `stack`, `queue`, `linked-list`, `hash-map`.
