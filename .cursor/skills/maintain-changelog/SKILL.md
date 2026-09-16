---
name: maintain-changelog
description: Append changelog.md entries with timestamp, agent, plain-language change, and benefit. Use after any agent-made code or docs change, and when the user mentions changelog, change log, or release notes.
---

# Maintain changelog.md

A changelog.md must be maintained that captures timestamp, change made by the agent and a easy to understand change along with the benifit associated to the change.

## When

After every completed agent change to this repo (code, styles, docs, skills, graph pipeline artifacts that are meant to be committed). Skip only if nothing was written.

## How

1. Open `/changelog.md`.
2. Append a new heading (newest first, under the `# Changelog` title).
3. Fill all four fields. Do not omit Benefit.

## Template

```markdown
## YYYY-MM-DDTHH:MM:SS+05:30

- **Timestamp:** YYYY-MM-DDTHH:MM:SS+05:30
- **Changed by:** agent
- **Change:** One or two sentences in plain English (what a maintainer would tell a colleague).
- **Benefit:** Why this helps students, operators, or future agents.
```

Use the real local timezone offset. `Changed by` is `agent` unless a human explicitly asked to be named.
