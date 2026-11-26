---
name: project-qubo-case
description: "Caso Pulso by Qubo Bank — rama feat/qubo-bank, slug qubo-pulso, 8 capítulos, marca verde/negro con General Sans, app en dark mode"
metadata:
  node_type: memory
  type: project
  originSessionId: 773f3a32-d5e9-488d-88f6-fd48446db17d
  modified: 2026-11-26T21:48:16.725Z
---

Caso de estudio «Pulso by Qubo Bank» (crédito para microcomercios, banco ficticio) en la rama `feat/qubo-bank`, creada desde `main` (Toyota sigue aparte en `feat/toyota-prototype`, sin terminar).

- Documento base: `.claude/knowledge/qubo-bank/qubo-bank-pulso-caso-de-estudio.md`. Es guía: Dann recortó mucho del caso (sin decisiones, sin validación, sin aprendizajes, sin fuentes).
- Ruta: `/work/qubo-pulso`. Contenido en `src/content/cases/qubo-story.ts`; componentes `qubo-*`; estilos `qubo-story.css`, `qubo-blocks.css` y `qubo-diagrams.css`.
- Capítulos (26 nov): 01 Contexto · 02 Problema · 03 Research (con 03.1 Usuario dentro; en el submenú Usuario no sale) · 04 Estrategia · 05 Arquitectura · 06 User flow · 07 Sistema · 08 Prototipo.
- Marca desde el 26 nov: menta #55D396, verde #169A50, grafito #272C2A, negro #040605, blanco; General Sans Regular y Medium (descargada de Fontshare en `src/fonts/general-sans/`). La app y el caso van en dark mode. Blanco sobre #169A50 da 3,6:1: solo texto grande.
- Estilos que Dann eligió: user flow con píldoras y ramas punteadas (referencia «Creación de una cuenta de ahorros»); persona en tarjeta oscura con foto a la izquierda; sistema de diseño con las mismas categorías y cantidad de elementos que el de PetRide (Fundamentos: color marca/neutros/estados, tipografía de 6 pasos, forma, 12 íconos, motion; Componentes: botones 3×4, campos, tarjetas, navegación, avisos, estados de pantalla), estático y sin hoja de contraste. Degradado menta solo en el CTA principal y barras de avance; los demás menta van planos.
- El prototipo de pantallas queda para después; el capítulo 08 tiene las dos pantallas héroe en cajas grises.

**Why:** Dann quiso avanzar con un proyecto nuevo mientras Toyota no está terminado.
**How to apply:** trabajar Qubo en su rama; no mezclar con Toyota. Dann prefiere poco texto y menos scroll: sintetizar antes que agregar. Las imágenes son cajas grises con etiqueta.
