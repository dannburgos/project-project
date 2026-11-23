---
name: project-case-studies
description: "How case studies are structured in Portfolio Lab (per-project chapters, Planti first, prototype inside the case)"
metadata:
  node_type: memory
  type: project
  originSessionId: ce1e77da-847b-4e9f-9680-e72b9164cf74
  modified: 2026-11-06T16:17:42.328Z
---

Decisions from Dann (2026-10-21) for the case study pages:

- Each project defines its own chapters and its own side menu; count varies per project, never more than 10.
- Planti is the first real case. Its evidence/research comes from her master doc (see [[reference-planti-source]]). Every section of that doc must land in some chapter — do not omit information.
- The case must include a part where the project's interactive prototype lives (Planti's prototype, which she will vibe-code). Decided: inside this project, in `src/domains/<project>/` + `src/styles/domains/<project>/`, served at `/prototypes/<project>` (route group `src/app/(prototypes)/`), embedded in the case's "Prototipo" chapter in a phone frame.
- Planti now has 6 chapters (Problema, Usuario, Benchmark, Concepto, Flujos, Prototipo) — Concepto and Definición were merged on 2026-10-24; no "Aprendizajes" chapter. Type hierarchy rule for all cases: 3 levels (32/24/16 px). Dann prefers simple, summarized, all-visible layouts without long texts or required interaction; don't invent data. Plan and pending list: `.claude/knowledge/planti/PLANTI_CASO.md`. Workflow: full draft first, then iterate chapter by chapter with scroll-driven narrative and microinteractions.
- The user persona (proto-persona "Laura", simulated, not interviews) is built directly in the site, not as an image.
- Ficha: Planti is a mobile app product. Category and year still missing.
- Work order (2026-11-06): 1 Planti, 2 PetRide (pet ride-hailing app, sources in `.claude/knowledge/petride/`), 3 Sonopizza, 4 an e-commerce, 5 a design system, 6 Nodus.

**Why:** She wants the portfolio to show real process evidence per project, with flexible narratives instead of one rigid template.

**How to apply:** Model case content per project; keep chapter lists short (≤10). The Planti doc rules are flexible: [[feedback-planti-md-flexible]].
