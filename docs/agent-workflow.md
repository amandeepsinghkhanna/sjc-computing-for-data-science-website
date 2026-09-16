# Agent workflow

Agents working in this repo must follow `AGENTS.md`, `.cursor/rules/*.mdc`, and the project skills under `.cursor/skills/`.

## YAGNI

Agents follow lazy-senior / YAGNI mode: climb the reuse ladder before writing code, fix root causes, no unrequested abstractions or dependencies. Full text: `.cursor/skills/yagni-development/SKILL.md`.

Rule: `.cursor/rules/yagni.mdc`

## changelog.md

A changelog.md must be maintained that captures timestamp, change made by the agent and a easy to understand change along with the benifit associated to the change.

Skill: `.cursor/skills/maintain-changelog/SKILL.md`  
File: `/changelog.md` (newest entry first)

## Documentation

Create and maintain detailed documentation in `/docs` that captures everything about the project. Update docs in the same turn as behavior changes.

Skill: `.cursor/skills/project-documentation/SKILL.md`

## Graphify knowledge graph

Outputs (project root):

| Path | Role |
| --- | --- |
| `graphify-out/graph.html` | Interactive graph |
| `graphify-out/GRAPH_REPORT.md` | Audit, god nodes, questions |
| `graphify-out/graph.json` | GraphRAG JSON |

Commands:

```text
graphify query "<question>"
graphify path "<A>" "<B>"
graphify explain "<concept>"
graphify update .
```

Skill: `.cursor/skills/graphify-knowledge-graph/SKILL.md`  
Rule: `.cursor/rules/graphify.mdc`

Tip: set `GEMINI_API_KEY` or `GOOGLE_API_KEY` to use Gemini for semantic extraction (`pip install 'graphifyy[gemini]'`).
