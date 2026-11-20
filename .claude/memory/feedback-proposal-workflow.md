---
name: feedback-proposal-workflow
description: "Lo que Dann pide va directo al código; propuestas solo si las pide, en la cantidad que diga y dibujadas en el chat (nunca HTML)"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 9960531c-6a50-4587-8351-c71e0ea1e3fd
  modified: 2026-11-19T20:52:32.646Z
---

**Regla vigente (Dann, 2026-11-19):**

1. Lo que Dann pide (en el caso o el prototipo) va **directo al código del proyecto**: se hace, se verifica y se le muestra. Nada de rondas de opciones por mi cuenta.
2. Cuando ella considere que hace falta decidir algo, me pedirá **una cantidad concreta de propuestas** y yo las **dibujo en el chat** (bocetos o widgets dentro de la conversación), cada una con su interacción explicada y mi recomendación.
3. Cuando elija una, esa se construye directo en el proyecto.
4. **Nunca armar HTML de propuestas** (ni archivos en `design-exports/` para eso): cuesta más esfuerzo y tiempo del que ella quiere invertir. El 2026-11-19 lo hice para el submenú de Sonopizza y se molestó.

Si de verdad no sé hacia dónde va un pedido, hago una pregunta corta en el chat; no construyo alternativas.

Registrar decisiones de diseño importantes en breve en el plan del caso (p. ej. `.claude/knowledge/planti/PLANTI_CASO.md` para Planti), no como código.

**Al terminar un caso:** Dann solo quiere conservar las pantallas finales del prototipo (en `design-exports/<caso>/pantallas/`, por flujo); lo demás de propuestas se manda a la Papelera.

**Why:** quiere avanzar rápido viendo los cambios en el sitio real; las propuestas aparte y los HTML cuestan tiempo y no los pidió.

**How to apply:** en todo pedido sobre los casos y prototipos. Related: [[feedback-scroll-locked-modules]], [[project-case-studies]]
