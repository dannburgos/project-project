---
name: feedback-branch-per-feature
description: "Dann's git workflow: one branch per piece of work, merged into main when stable"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 9960531c-6a50-4587-8351-c71e0ea1e3fd
  modified: 2026-11-06T17:20:15.435Z
---

Dann agreed (2026-11-06) to work with one branch per piece of work (e.g. `feat/ecommerce-case`), created from `main`, and merged into `main` when she says it is ready. `main` is the stable version.

**Why:** `feat/planti-prototype` had grown to hold Planti, Sonopizza, PetRide, Work and the site theme; she wanted things more organized.

**How to apply:**

- When starting new work, create its branch from an up-to-date `main` myself.
- Commit and push only when she asks, per [[feedback-commit-reminders]].
- `gh` is not installed, so a PR can't be opened from here. When she asks to merge, do a `--no-ff` merge with a conventional message (commitlint rejects plain "Merge branch…"), or give her the GitHub compare link.
- Images are never a copyright concern for her; see [[feedback-images-royalty-free]].
