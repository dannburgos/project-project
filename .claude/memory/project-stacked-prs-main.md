---
name: project-stacked-prs-main
description: "Pila de 5 PRs hacia main (23 nov 2026), con el orden, cómo se mergea y que las ramas se conservan"
metadata:
  node_type: memory
  type: project
  originSessionId: 5a3dcf1a-edec-48ec-bc82-ba983a7c1218
  modified: 2026-11-23T18:45:32.936Z
---

El 2026-11-23 Dann pidió PRs apilados hacia main para unir todo, conservando las ramas. `gh` no está instalado, así que preparé las ramas y le di enlaces de GitHub con el título y la descripción ya llenos. Ella crea y mergea los PRs.

**Orden de la pila:** main ← feat/header-brand ← feat/design-system-case ← feat/planti-flow-2 ← feat/sonopizza ← feat/toyota.

- Cada rama recibió solo commits de merge (nada reescrito ni borrado). Se verificó que cada nivel compila con `next build --webpack`, tsc y lint.
- feat/sonopizza-case ya va dentro de feat/sonopizza.
- **Choques resueltos:**
  - main.css: los imports de los tres casos.
  - prototypes.css: los estilos nuevos de Planti más los de PetRide.
  - site.ts: Toyota en la tarjeta 4 y el sistema de diseño en la 5.
  - page.tsx: las dos rutas.
  - MEMORY.md: la versión de Toyota.
- **Cómo se mergea:** de abajo hacia arriba. Se mergea el PR 1 en main; luego, en cada PR siguiente, se cambia la base a main y se mergea. Nunca «Delete branch».

**Why:** Dann quiere todo en main sin perder las ramas.

**How to apply:** si otro chat trabaja en feat/sonopizza, debe hacer pull antes de seguir, porque la rama ahora trae Planti, el sistema de diseño y el encabezado. Cuando los PRs estén en main, las ramas nuevas salen de main como siempre ([[feedback-branch-per-feature]]).

**Actualización (2026-11-23):** Dann pidió mergear en orden de PR. Como los PRs no se habían creado en GitHub, uní las 5 ramas directo a main, en ese orden, con commits `chore(main): merge feat/x into main`, y subí main (1ca7abd). Main quedó idéntico a feat/toyota, que ya se había compilado, y ninguna rama quedó sin unir. Todas las ramas se conservan. Las ramas nuevas salen de este main.
