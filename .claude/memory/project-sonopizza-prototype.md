---
name: project-sonopizza-prototype
description: "Dónde vive el prototipo de Sonopizza (tablero /prototypes/sonopizza/board, 11 pantallas clave) y qué decidió Dann sobre qué pantallas entran"
metadata:
  node_type: memory
  type: project
  originSessionId: 7c584de4-006e-404c-8d5d-34c824605045
  modified: 2026-11-20T05:37:10.106Z
---

Desde 2026-11-20 el prototipo de Sonopizza vive en la rama `feat/sonopizza` (sin commit), dominio `src/domains/sonopizza/`, estilos `src/styles/domains/sonopizza/` (importados en `src/styles/prototypes.css`), tablero en `/prototypes/sonopizza/board`. Fotos de producto: `public/sonopizza/app/pizza-pepperoni.webp` y `pizza-veggie.webp` (sacadas de los PNG que Dann dejó en `public/sonopizza/pizzas/`).

Pantallas que Dann eligió (del inventario de flujos), agrupadas por flujo en el tablero: 01 Inicio, 02 Menú, 02·b búsqueda (estado), 03 Detalle, 04 Personalización, 04·b falta el tamaño (estado), 05 Agregado al carrito, 06 Carrito, 06·b eliminar y deshacer (estado), 07 Pedido confirmado, 08 Carrito vacío. Quedaron fuera: carga, búsqueda sin resultados, mitad y mitad, combos, instrucciones, editar desde el carrito, checkout, seguimiento, login/perfil.

Las pantallas usan el sistema de diseño del caso (módulo 04): azul marino/naranja, Bowlby One SC + DM Sans, sombras corridas, stickers. Dann pidió alto nivel de detalle, composición pro, propuestas disruptivas y prioridad a la usabilidad, a partir de referentes de apps de pizza que envió.

**Why:** cumple el enfoque de [[project-sonopizza-flows-approach]]: pantallas clave rediseñadas, no flujos completos.

**How to apply:** el registro de pantallas está en `sonopizza-flow-screens.tsx` (lo usa el tablero); textos en `messages.ts`, datos en `example-menu.ts`. Falta llevarlas al caso (módulo 05) con el porqué de cada mejora. Ver [[feedback-keep-board-visible]].
