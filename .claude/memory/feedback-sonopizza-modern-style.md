---
name: feedback-sonopizza-modern-style
description: "Estilo visual de la app de Sonopizza que Dann pidió el 2026-11-20. Retro pero moderno y limpio, sin sombras naranjas, botones planos de un solo color y texto en tinta oscura"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 7c584de4-006e-404c-8d5d-34c824605045
  modified: 2026-11-20T16:35:06.421Z
---

Dann pidió el 2026-11-20 que las pantallas de Sonopizza se vean modernas y limpias sin perder lo retro.

- **Superficies:** sin bordes gruesos ni sombras corridas. Las tarjetas son blancas y flotan con sombra suave (`--sp-shadow-soft`). Lo elegido lleva un anillo naranja de 2 px (`--sp-ring-orange`).
- **Sombra naranja:** nunca, ni en botones ni en tarjetas.
- **Botones:** planos de un solo color (`--sp-fill-orange` / `--sp-fill-navy` apuntan al color plano). Sin degradado, relieve ni sombra: Dann probó el realce y el degradado y pidió quitar ambos.
- **Texto:** descripciones y textos en tinta oscura (`--sp-ink: #1b2338`, azul casi gris), nunca negro puro. El azul marino queda para los títulos en Bowlby y los de sección.
- **Lo retro:** se queda en Bowlby, la paleta, las fotos, la palabra gigante en contorno y el estallido "2X1".

**Why:** quería que lo retro se sintiera actual y que los textos se leyeran mejor.

**How to apply:** usar estos tokens en las pantallas nuevas y en el módulo 04 del caso (Sistema de diseño, variables `--ds-*`), que ya se actualizó igual. Ver [[project-sonopizza-prototype]].
