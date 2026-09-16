---
name: graphify-knowledge-graph
description: Query and refresh the Graphify knowledge graph for this repo. Use when exploring architecture, tracing features, or after modifying source files.
---

# Graphify

Graph lives in `graphify-out/`.

## Before exploring

```text
graphify query "<question>"
graphify path "<A>" "<B>"
graphify explain "<concept>"
```

Prefer `graphify-out/wiki/index.md` when present.

## After source changes

```text
graphify update .
```

Do not rebuild from scratch unless `graphify-out/graph.json` is missing.
