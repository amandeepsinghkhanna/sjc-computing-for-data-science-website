---
name: project-documentation
description: Keep /docs complete and current. Use when documenting the project, adding features, changing architecture, or when the user mentions docs, documentation, or /docs.
---

# Project documentation in /docs

Create a detailed and comprehensive documentation of the project in `/docs` that captures everything about the project.

## Map

| File | Covers |
| --- | --- |
| `docs/README.md` | Table of contents |
| `docs/overview.md` | Audience, course, goals |
| `docs/architecture.md` | Files, boot order, data flow |
| `docs/features.md` | UI features |
| `docs/algorithms.md` | Search and sort topics |
| `docs/data-structures.md` | Stack, queue, linked list |
| `docs/frontend.md` | Theme, CSS, a11y, SEO |
| `docs/agent-workflow.md` | AGENTS.md, skills, Graphify, changelog |
| `docs/deployment.md` | Static hosting, robots, sitemap |

## Rules

- Update the matching file in the same turn as a code change.
- Document real IDs, functions, and section anchors — not imagined APIs.
- If a new major section is added to the site, add it to `docs/features.md` and `docs/README.md`.
