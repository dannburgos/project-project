---
name: project-petride-prototype
description: "Estado del prototipo de PetRide (flujo 1 con 7 pantallas, ya en el caso; Inicio va en el flujo 2) y dónde vive todo"
metadata:
  node_type: memory
  type: project
  originSessionId: 2f26a9f1-386e-4dd6-a9d1-1ee95f3d3544
  modified: 2026-11-19T07:07:14.747Z
---

Desde 2026-11-19 el prototipo de PetRide vive en la rama `feat/petride-prototype` (sin commit), dominio `src/domains/petride/`, estilos `src/styles/domains/petride/`, tablero en `/prototypes/petride/board`. Flujo 1 "Registrar mascota" tiene 7 pantallas (01 Mis mascotas a 07 Mis mascotas actualizada); detalle, editar, guardado y vacío se quitaron.

Esa rama ya incluye el caso (`feat/petride-case` avanzó en fast-forward). El módulo Flow del caso (`/work/petride`) muestra cada pantalla real en un iframe de `/prototypes/petride/screens/<key>`; la lista de pantallas sale de `petride-flow-screens.tsx` (la comparten tablero y caso), y los textos de cada paso están en `flowScreens` de `src/content/cases/petride-story.ts`.

Flujo 2 "Solicitar viaje" (desde 2026-11-19) en la rama `feat/petride-flow-2`, sacada de `feat/petride-prototype` porque main aún no tiene el prototipo. Tablero en `/prototypes/petride/board/2`; solo recorrido principal de 7 pantallas (Inicio, Origen y destino, Elegir mascotas, Tarifa, Buscando, Conductor, Llegada y calificación con huellas), sin desvíos. Desde 2026-11-19 también está en el caso: `design.flowShows` en `petride-story.ts` tiene un bloque por flujo y el flujo 2 va debajo del 1. Ramas que esperan main: Dann las une una por una al terminar cada caso.

Dann decidió que la pantalla de **Inicio** se diseña como primera pantalla del **flujo 2** (Solicitar viaje), con solo acceso a pedir viaje y mascotas registradas.

**Why:** el documento la nombra en la arquitectura pero ningún flujo la detalla, y la barra inferior ya tiene la pestaña Inicio.

**How to apply:** al empezar el flujo 2, arrancar por Inicio y sumar sus pantallas al registro compartido para que también lleguen al caso. Ver [[feedback-keep-board-visible]] y [[feedback-proposal-workflow]].


**2026-11-19:** PetRide se dio por terminado y `feat/petride-flow-2` se unió a `main` (commit de merge 472027d). Ajustes futuros: rama nueva desde `main`.
