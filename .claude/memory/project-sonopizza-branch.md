---
name: project-sonopizza-branch
description: Sonopizza sigue en la rama feat/sonopizza (desde main + el avance de feat/sonopizza-case); se continúa en un chat nuevo
metadata:
  node_type: memory
  type: project
  originSessionId: 2f26a9f1-386e-4dd6-a9d1-1ee95f3d3544
  modified: 2026-11-19T20:14:28.554Z
---

Desde 2026-11-19 el trabajo de Sonopizza vive en la rama `feat/sonopizza`, sacada de `main` (ya con PetRide) y con el avance que estaba solo en `feat/sonopizza-case` ("extend the Sonopizza case story", del 2026-11-06) unido sin conflictos. `feat/sonopizza-case` queda como rama vieja; no se usa más.

El contexto del proyecto está en `.claude/knowledge/sonopizza/Sonopizza_contexto_maestro_Claude.md` (guía flexible, como el de Planti). El caso vive en `/work/sonopizza` (`src/content/cases/sonopizza-story.ts`, `src/components/organisms/sonopizza-story.tsx`).

**Why:** Dann quiso seguir Sonopizza en un chat aparte para no cargar el contexto de PetRide.

**How to apply:** al retomar Sonopizza, trabajar en `feat/sonopizza`, leer primero el documento maestro y el caso actual. Mismas reglas que [[feedback-branch-per-feature]] y [[feedback-proposal-workflow]].
