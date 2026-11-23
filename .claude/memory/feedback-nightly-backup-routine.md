---
name: feedback-nightly-backup-routine
description: 'Rutina de "guarda y sube" mientras Dann se muda de computador. Copiar la memoria al repo, commit y push, y armar el .zip liviano en el Escritorio'
metadata:
  node_type: memory
  type: feedback
  originSessionId: 7c584de4-006e-404c-8d5d-34c824605045
  modified: 2026-11-20T14:16:24.591Z
---

Dann acordó el 2026-11-20 lo siguiente. Mientras siga en este computador, cada noche, cuando diga "guarda y sube":

1. Copiar todas las notas de esta carpeta de memoria a `.claude/memory/` del proyecto.
2. Hacer commit y push de la rama actual.
3. Rehacer `~/Desktop/portafolio-proyecto.zip`, el proyecto liviano de unos 65 MB. Excluye `node_modules`, `.next`, los originales, `.playwright-mcp`, `tsconfig.tsbuildinfo` y `.DS_Store`. Dann lo sube a su Drive y reemplaza el del día anterior.

`~/Desktop/portafolio-originales.zip` se hizo una sola vez y lleva `public/petride/img `, `public/sonopizza/pizzas/`, `design-exports/` y `public/sketches/`.

**Why:** pueden quitarle los accesos sin aviso. Dann quiere perder como mucho un día de trabajo.

**How to apply:**

- Avisarle cuando algo nuevo deba entrar al zip de originales. Pasa con archivos que git ignora o que no se suben, por ejemplo fotos nuevas en carpetas ignoradas.
- No subir originales pesados a GitHub, porque el repo es público.
- En el computador nuevo, leer `.claude/memory/MEMORY.md` al empezar.

Ver [[project-move-to-personal-computer]].
