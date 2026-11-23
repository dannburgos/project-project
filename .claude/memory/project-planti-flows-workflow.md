---
name: project-planti-flows-workflow
description: Cómo se construyen los flujos del prototipo de Planti (1 y 2 listos, falta el 3) y dónde se activan en el caso
metadata:
  node_type: memory
  type: project
  originSessionId: 9960531c-6a50-4587-8351-c71e0ea1e3fd
  modified: 2026-11-06T06:45:08.750Z
---

Desde el 2026-11-06 el flujo 1 de Planti ("Incorporar una planta") quedó cerrado por ahora. La vista del prototipo en el caso (`/work/planti`, sección 07) tiene texto a la izquierda y el celular a la derecha, con un botón por flujo: 01 y 02 activos, 03 "Completar un cuidado" en "Próximamente" (`isReady: false` en `planti-story.ts`).

**Why:** Dann quiere trabajar cada flujo nuevo igual que el 1: tablero `/prototypes/planti/board` con el prototipo en vivo al lado, recorrido con un solo reloj y ajustes pantalla por pantalla.

**How to apply:** el flujo 2 ("Crear una rutina") quedó construido el 2026-11-06 (botón 02 activo). Para el flujo 3: crear `chapter-three-timeline.ts` con un `PlantiChapter`, registrarlo en `planti-chapters.ts` (así `?flow=3` lo elige en el prototipo y en el tablero), sumar sus grupos en `planti-board.tsx` y poner `isReady: true` en su botón de `planti-story.ts`. Ver [[project-case-studies]] y [[feedback-proposal-workflow]].
