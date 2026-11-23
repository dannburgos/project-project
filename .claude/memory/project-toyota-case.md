---
name: project-toyota-case
description: Toyota — Beyond the Model es un caso del portafolio (rediseño de experiencia en una marca conocida) en la rama feat/toyota; se trabaja desde el caso de estudio y nada es privado
metadata:
  node_type: memory
  type: project
  originSessionId: 5a3dcf1a-edec-48ec-bc82-ba983a7c1218
  modified: 2026-11-23T06:47:24.959Z
---

Desde 2026-11-23, Toyota — Beyond the Model ("Encuentra tu Toyota") es un **caso del portafolio**: el rediseño de una experiencia en una marca conocida, no un proyecto del trabajo. Vive en la rama `feat/toyota`, sacada de `main`. Es un módulo de asesoría en el home de Toyota Colombia, solo para web desktop, que recomienda entre 6 modelos según las necesidades de la persona.

Fuentes en `.claude/knowledge/toyota/`, todas en git:

- `caso-de-estudio-beyond-the-model.md`: el documento maestro. Tiene el copy final por sección, los roles de texto del manual de Toyota, el copy y la lógica del prototipo, el registro de decisiones y los pendientes antes de publicar (Parte G).
- `beyond-the-model-contexto.md`: la bitácora de trabajo, solo de respaldo. Todo lo importante ya está en el caso de estudio.
- `ficha-datos-prototipo.md`, `copy/` y `prototipo-encuentra-tu-toyota.html`, que es el primer prototipo, hecho fuera de este repo.

**Why:** Dann aclaró que nada de Toyota tiene que ser privado. Primero puse la bitácora en una carpeta ignorada por git, y ella pidió que no.

**How to apply:** trabajar desde el caso de estudio, no desde la bitácora. Respetar sus reglas: no mencionar la IA como herramienta de producción, marcar el nivel de evidencia, aclarar que es un concepto de portafolio y poner la navegación en inglés y el contenido en español. No esconder archivos de Toyota de git. Aplican las mismas reglas de [[feedback-branch-per-feature]] y [[project-case-visual-identity]] (marca de Toyota: rojo #EB0A1E). Sonopizza sigue sin unir en `feat/sonopizza` ([[project-sonopizza-branch]]).

**Estado (2026-11-23):** la documentación del caso está construida en `/work/toyota`, con cajas grises en lugar de imágenes y la tarjeta 4 de Work en rojo. Falta el prototipo y las pantallas (capítulo 05), que Dann pidió hacer al final. El plan, los patrones por sección y los archivos están en `.claude/knowledge/toyota/TOYOTA_CASO.md`. Los referentes están en `referencias-web.md`.

