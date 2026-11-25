# Toyota — Beyond the Model · Caso de estudio completo

Documento maestro del caso: definición, investigación, decisiones y **todos los textos de la presentación**, con su especificación. Actualizado el 19 nov 2026.

**Cómo leer este documento**

- **Parte A:** reglas y sistema de textos de la presentación.
- **Parte B:** copy final de cada sección del caso, listo para maquetar.
- **Parte C:** investigación de soporte.
- **Parte D:** copy de la interfaz del prototipo.
- **Parte E:** datos y lógica del prototipo.
- **Parte F:** registro de decisiones.
- **Parte G:** pendientes y verificaciones antes de publicar.

---

# PARTE A · Reglas y sistema de textos

## A.1 Reglas de redacción del caso

1. **No se menciona la IA como herramienta usada para producir la documentación.** La IA solo aparece como parte del producto diseñado.
2. **No se inventan fuentes, cifras, entrevistas ni resultados.**
3. **Cada afirmación lleva su nivel de evidencia:** información encontrada, investigación secundaria, hallazgo, hipótesis, supuesto de diseño, propuesta conceptual o validación (esta última solo con pruebas realizadas).
4. **No se atribuyen opiniones a usuarios que no fueron entrevistados.**
   - Mal: "Los usuarios de Toyota se sienten confundidos".
   - Bien: "El análisis del catálogo evidencia una diversidad de modelos que representa una oportunidad".
5. **El proyecto es un concepto independiente de portafolio.** No es un producto oficial de Toyota ni una iniciativa aprobada por la marca.
6. **La navegación del caso va en inglés** (Overview, Discovery, Strategy…). El contenido va en español.

## A.2 Roles de texto de la presentación

Basados en el manual de tipografía de Toyota (brand.toyota.com).

| Rol | Para qué se usa | Estilo | Extensión máxima |
|---|---|---|---|
| **Navegación** | Menú del caso | Inglés, 1 a 3 palabras | 3 palabras |
| **Índice** | Marca de sección ("01 — Overview") | Mayúsculas, semibold, tracking amplio, número en rojo | 4 palabras |
| **Eyebrow** | Etiqueta sobre el titular | Mayúsculas, semibold, 12 px | 5 palabras |
| **Titular (H2)** | Idea principal de la sección | En oración y semibold. Mayúsculas solo si tiene 7 palabras o menos (regla de marca). Interlineado ajustado (~90 %), tracking 0 | 14 palabras |
| **Bajada** | Complementa el titular | Book, 18 px | 35 palabras |
| **Cuerpo** | Explicación | Book, 16 px, interlineado 145 % | 90 palabras por bloque |
| **Dato destacado** | Cifras y hechos clave | Número grande + etiqueta corta | Número + 6 palabras |
| **Lista** | Hallazgos, principios, criterios | Viñetas cortas en estructura paralela | 12 palabras por ítem |
| **Nota / pie** | Fuentes, aclaraciones, nivel de evidencia | 13 px, gris #58595B | 30 palabras |

**Reglas visuales del manual que afectan los textos**

- Nunca alinear a la derecha.
- Sin sombras ni efectos de texto.
- No poner dos textos de la misma escala compitiendo en el mismo lugar.
- El rojo Toyota (#EB0A1E) se usa a opacidad completa y solo para destacar.

## A.3 Estructura de navegación del caso

| Capítulo | Navegación | Secciones |
|---|---|---|
| 01 | Overview | Project Overview |
| 02 | Discovery | Context & Opportunity · Research & Benchmark · Problem & User Definition · Jobs to Be Done |
| 03 | Strategy | Value Proposition & Product Goals · Product Concept & AI Strategy · Data Architecture |
| 04 | Product Definition | MVP & Feature Definition · Information Architecture & User Flows |
| 05 | Experience Design | Prototipo y sistema visual **(capítulo agregado para mostrar el diseño; por confirmar)** |
| 06 | Validation & Learnings | Validation, Results, Learnings & Next Steps |

**Nota:** La estructura aprobada tiene 11 módulos de documentación. El diseño se hizo directamente en el prototipo, así que el capítulo Experience Design se agrega solo para presentarlo en el caso. Por eso las secciones del caso llegan a 12.

Menú progresivo y agrupado: no se muestran todas las secciones a la vez. Nombres cortos en el menú y títulos completos dentro de cada sección.

---

# PARTE B · Copy de la presentación, sección por sección

> **Formato de cada bloque:** índice · eyebrow · titular · bajada · cuerpo · datos o listas · visual sugerido · evidencia.

## B.0 Portada del caso

- **Eyebrow:** Caso de estudio · Product Design
- **Titular:** Toyota — Beyond the Model
- **Bajada:** De elegir un modelo a descubrir el vehículo adecuado.
- **Cuerpo:** El reto no consiste en mostrar más vehículos, sino en ayudar a las personas a entender cuál responde mejor a sus necesidades y por qué.

**Ficha del proyecto**

| Campo | Texto |
|---|---|
| Tipo | Experience Redesign |
| Enfoque | Vehicle Discovery & Recommendation |
| Marca | Toyota |
| Mercado | Colombia |
| Plataforma | Web desktop |
| Rol | Product Designer — End-to-End Experience Design |
| Naturaleza | Concepto independiente para portafolio |

- **Visual sugerido:** captura del módulo "Encuentra tu Toyota" (inicio de la asesoría en panel oscuro).
- **Nota al pie:** Propuesta conceptual independiente. No es un producto oficial de Toyota.

---

## B.1 · 01 Overview — Project Overview

**Índice:** 01 — Overview

### Project Description

- **Titular:** Una nueva forma de descubrir y elegir un Toyota
- **Cuerpo:** Toyota — Beyond the Model es una propuesta conceptual de rediseño de la experiencia digital de Toyota Colombia, enfocada en transformar la manera en que las personas descubren y eligen un vehículo mediante asesoría personalizada y recomendaciones inteligentes.

**Tres pilares del proyecto (lista)**

1. Rediseño de la experiencia de descubrimiento.
2. Nuevo flujo de asesoría y recomendación.
3. Incorporación de IA a la experiencia.

### Context & Problem

- **Eyebrow:** Contexto
- **Cuerpo:** Toyota cuenta con un portafolio de vehículos que responde a diferentes necesidades, estilos de vida y preferencias. Sin embargo, para quienes aún no tienen claridad sobre qué tipo de vehículo buscan, explorar las alternativas disponibles y comprender las diferencias entre modelos puede resultar un proceso complejo.
- **Eyebrow:** Problema
- **Cuerpo:** Las personas que buscan un vehículo pueden experimentar dificultades para identificar cuál modelo se adapta mejor a sus necesidades, debido a la cantidad de alternativas y a la complejidad de comprender sus características, beneficios y diferencias.
- **Dato destacado / frase:** Encontrar un vehículo adecuado no siempre es fácil cuando no sabes qué modelo responde mejor a lo que necesitas.
- **Nota:** Hipótesis de problema, trabajada en Discovery.

### Opportunity & Solution

- **Eyebrow:** Oportunidad
- **Cuerpo:** Transformar la experiencia de descubrimiento de vehículos Toyota en un proceso más intuitivo y personalizado, donde las necesidades del usuario sean el punto de partida para explorar las alternativas disponibles.
- **Eyebrow:** Solución
- **Cuerpo:** Diseñar una experiencia web desktop que, mediante asesoría guiada e inteligencia artificial, interprete las necesidades y preferencias del usuario para recomendar vehículos Toyota compatibles, explicando sus beneficios y diferencias de manera clara.
- **Titular de cierre:** De explorar vehículos a descubrir cuál es el adecuado para ti.

**Tres capacidades (lista)**

- **Descubrir:** identificar las necesidades y preferencias del usuario.
- **Recomendar:** presentar vehículos compatibles con su perfil.
- **Explicar:** ayudarle a comprender por qué cada alternativa responde a sus necesidades.

**Nota:** La propuesta no reemplaza el catálogo tradicional; lo complementa con un nuevo recorrido de asesoría y recomendación.

### Project Objectives

- **Eyebrow:** Objetivo general
- **Cuerpo:** Rediseñar la experiencia de descubrimiento de vehículos Toyota para facilitar la identificación de modelos que respondan a las necesidades y preferencias de cada usuario.

**Objetivos específicos (lista)**

- **Simplificar el descubrimiento:** facilitar la exploración sin depender exclusivamente de la navegación por catálogo.
- **Personalizar la asesoría:** comprender las necesidades del usuario para ofrecer recomendaciones relevantes.
- **Facilitar la comparación:** comunicar diferencias, características y beneficios de cada alternativa.
- **Integrar inteligencia artificial:** interpretar preferencias y ofrecer orientación contextual durante la elección.

**Titular de bloque:** Una decisión más clara e informada.

**Bajada:** Que las personas puedan pasar de tener dudas sobre qué vehículo elegir a comprender qué alternativas se ajustan mejor a sus necesidades y por qué.

### Scope & Deliverables

**Incluye (lista)**

- **Experiencia de descubrimiento:** una nueva forma de explorar los vehículos Toyota desde las necesidades del usuario.
- **Flujo de asesoría:** cuestionario guiado para identificar necesidades, uso y prioridades.
- **Asistencia con IA:** interpretación de respuestas y orientación contextual.
- **Sistema de recomendación:** vehículos compatibles y los motivos de cada recomendación.
- **Evaluación de alternativas:** características, beneficios y comparación.

**No incluye (lista)**

- Rediseño completo del sitio de Toyota.
- Versión mobile o responsive.
- Compra, pagos o financiación.
- Gestión de concesionarios.
- Reserva de pruebas de manejo.
- Marketplace multimarca.

**Entregables (tabla)**

| Entregable | Resultado |
|---|---|
| Investigación y análisis | Contexto, benchmark y hallazgos |
| Definición de producto | Estrategia, funcionalidades y reglas |
| Arquitectura UX | Arquitectura de experiencia y flujo |
| Diseño UX/UI | Interfaces desktop |
| Sistema visual | Componentes y patrones alineados al manual de Toyota |
| Prototipo funcional | Experiencia interactiva de asesoría y recomendación |
| Caso de estudio | Documentación del proceso y decisiones |

**Titular de cierre:** Diseñar una experiencia web desktop que permita descubrir, recibir recomendaciones y evaluar vehículos Toyota a partir de las necesidades de cada persona.

### Role & Responsibilities

- **Eyebrow:** Rol
- **Titular:** Product Designer — End-to-End Experience Design

**Responsabilidades (tabla)**

| Área | Responsabilidades |
|---|---|
| Research | Investigación, análisis del contexto y benchmark |
| Product Strategy | Problema, oportunidad y propuesta de valor |
| Product Definition | Alcance, funcionalidades, reglas y arquitectura |
| UX Design | Arquitectura de experiencia, flujo e interacción |
| UI Design | Diseño visual, componentes e interfaces desktop |
| AI Experience | Rol de la IA y su integración en la experiencia |
| Prototyping | Construcción del prototipo funcional |
| Validation | Diseño de pruebas, análisis e iteraciones |

**Nota:** Proyecto conceptual independiente, desarrollado de manera individual.

---

## B.2 · 02 Discovery — Context & Opportunity

**Índice:** 02 — Context & Opportunity

### Toyota en Colombia

- **Eyebrow:** Toyota in Colombia
- **Titular:** Una oferta diversa, múltiples criterios de elección.
- **Cuerpo 1:** Toyota cuenta con un portafolio de vehículos que responde a diferentes necesidades, estilos de vida y preferencias. Su ecosistema digital permite explorar modelos, conocer sus características, configurar versiones y acceder a herramientas comerciales.
- **Cuerpo 2:** Sin embargo, la diversidad de alternativas implica que el usuario debe comprender diferentes atributos y criterios para identificar qué vehículo responde mejor a sus necesidades. La oportunidad está en conectar esa diversidad de productos con las necesidades de cada persona.

**Datos destacados**

- **6** categorías en el catálogo
- **20** vehículos nuevos (noviembre de 2026)
- **4** filtros: tipo, precio, asientos y modelo

**Nota:** Información encontrada en toyota.com.co. Las categorías se superponen: un vehículo puede ser SUV, híbrido y GR a la vez.

### Experiencia actual

- **Eyebrow:** Current Experience
- **Titular:** Una experiencia de exploración centrada en el producto.
- **Cuerpo:** La experiencia digital de Toyota permite explorar su portafolio mediante categorías, filtros y fichas de vehículos que presentan sus principales características y beneficios. El recorrido facilita el acceso a información y herramientas comerciales, pero plantea una oportunidad para explorar una experiencia complementaria que parta de las necesidades del usuario y lo acompañe en la identificación del vehículo más adecuado.
- **Frase destacada:** El desafío está en pasar de facilitar la búsqueda de modelos a orientar la elección del vehículo.
- **Visual sugerido:** recorrido actual en 4 pasos: Página principal → Catálogo y filtros → Detalle del vehículo → Cotización.

**Observaciones e implicaciones (tabla)**

| Observación | Implicación para el diseño |
|---|---|
| La navegación comienza desde categorías y modelos | Explorar una entrada basada en necesidades |
| El catálogo filtra por atributos del vehículo | Usar criterios más cercanos al lenguaje del usuario |
| Las tarjetas resumen características | Explicar su relevancia para cada persona |
| Hay herramientas para cotizar y probar | Conectar mejor el descubrimiento con la decisión |

**Nota:** En las páginas revisadas no se identificó un recorrido de asesoría que primero interprete necesidades y después recomiende. Eso no prueba que no exista en otros canales.

### Oportunidad

- **Eyebrow:** The Opportunity
- **Titular:** El punto de partida no debería ser el vehículo, sino la persona.
- **Cuerpo:** La experiencia actual facilita la exploración del portafolio Toyota a través de modelos, categorías y características. Sin embargo, existe una oportunidad para acompañar a quienes todavía no tienen claridad sobre qué vehículo necesitan. La propuesta busca transformar la exploración tradicional en un proceso de descubrimiento guiado, conectando las necesidades individuales con las alternativas más relevantes del catálogo.
- **Visual sugerido:** comparación lado a lado.
  - **Experiencia actual:** Vehículos disponibles → Exploración y comparación.
  - **Experiencia propuesta:** Necesidades del usuario → Asesoría y análisis → Vehículos recomendados.

**Principios iniciales (lista):** User-centered discovery · Guided exploration · Explainable recommendations · Contextual AI.

---

## B.3 · 02 Discovery — Research & Benchmark

**Índice:** 03 — Research & Benchmark

### Alcance del benchmark

- **Titular:** Cinco experiencias, siete criterios
- **Cuerpo:** Se analizaron experiencias digitales del sector automotriz para entender cómo ayudan a las personas a descubrir, evaluar y elegir vehículos. El objetivo no fue copiar interfaces, sino identificar patrones, buenas prácticas y oportunidades.
- **Referencias:** Kia Colombia · Hyundai Colombia · Renault Colombia · Volvo Cars · Autocosmos
- **Criterios:** Descubrimiento · Navegación · Filtros · Información · Comparación · Asesoría · Conversión

### Comparación

| Referencia | Fortaleza identificada | Oportunidad observada |
|---|---|---|
| Kia | Catálogo, fichas y comparación de modelos | Conectar asesoría y recomendación antes de cotizar |
| Hyundai | Experiencias visuales, comparador y reserva online | Traducir características técnicas en necesidades cotidianas |
| Renault | Comunicación desde estilos de vida | Incorporar orientación antes de las herramientas comerciales |
| Volvo | Beneficios, tecnología y comparación | Recomendar alternativas a partir de necesidades |
| Autocosmos | Amplitud de información, filtros y comparación multimarca | Convertir información en orientación |

**Nota:** Conclusiones basadas en las páginas y herramientas revisadas, no en una auditoría exhaustiva de cada marca.

### Síntesis

- **Eyebrow:** Experience Benchmark · Synthesis
- **Titular:** La oportunidad está en conectar las necesidades con los vehículos.
- **Cuerpo:** El análisis de cinco experiencias digitales del sector automotriz permitió identificar patrones en la forma de descubrir, explorar, evaluar y elegir vehículos. Aunque las plataformas ofrecen catálogos, filtros, fichas técnicas, comparadores y herramientas comerciales, la exploración revisada parte principalmente de modelos y características que el usuario debe conocer previamente. A partir de estos aprendizajes, se identifica una oportunidad para transformar el descubrimiento en un proceso más personalizado: comenzar desde las necesidades de las personas, interpretar sus preferencias y recomendar alternativas compatibles, explicando sus beneficios y diferencias.

**Cinco hallazgos transversales (lista)**

1. La exploración comienza principalmente desde el producto.
2. Los filtros requieren conocimientos previos.
3. La información técnica necesita contexto.
4. La comparación suele ocurrir después de elegir los modelos.
5. La asesoría se concentra en etapas comerciales.

**Cuatro oportunidades (lista)**

1. Descubrimiento centrado en las necesidades.
2. Asesoría guiada y personalizada.
3. Recomendaciones explicables.
4. Comparación orientada a la decisión.

### Conclusiones

- **Eyebrow:** Benchmark Conclusions
- **Titular:** De la exploración de productos a una elección orientada por necesidades.
- **Cuerpo:** El benchmark permitió identificar una oportunidad para transformar la manera en que las personas descubren y evalúan vehículos. Las experiencias analizadas ofrecen herramientas para explorar catálogos, consultar características, comparar modelos y avanzar hacia procesos comerciales. Sin embargo, existe espacio para conectar estas capacidades mediante una experiencia que comience desde las necesidades del usuario. A partir de estos aprendizajes, Beyond the Model plantea un proceso de descubrimiento guiado, recomendaciones explicables y comparación contextualizada, utilizando inteligencia artificial como apoyo para interpretar las preferencias y orientar la elección.

**Cinco principios de diseño (tabla)**

| Principio | Qué significa |
|---|---|
| User-centered discovery | La exploración comienza desde situaciones de uso, preferencias y estilo de vida |
| Guided exploration | Preguntas y opciones fáciles de comprender y responder |
| Explainable recommendations | La compatibilidad se explica con necesidades y atributos verificables |
| Contextual AI | La IA interpreta y ayuda a comprender; no inventa información |
| Decision-oriented comparison | Las diferencias se presentan según su importancia para el usuario |

**De aprendizaje a decisión (tabla)**

| Aprendizaje | Decisión de producto |
|---|---|
| La exploración parte del catálogo | Crear una entrada basada en necesidades |
| Los filtros exigen conocimiento técnico | Preguntas en lenguaje cotidiano |
| La información técnica necesita contexto | Explicar beneficios según cada necesidad |
| Los comparadores parten de modelos ya elegidos | Recomendar primero, comparar después |
| La asesoría se concentra en lo comercial | Orientar antes de la cotización |

---

## B.4 · 02 Discovery — Problem & User Definition

**Índice:** 04 — Problem & User Definition

### Problem Definition

- **Titular:** La dificultad no está solamente en encontrar vehículos, sino en comprender cuáles responden mejor a las necesidades de cada persona.
- **Cuerpo:** Las experiencias de exploración automotriz ofrecen acceso a modelos, características y herramientas de comparación. Sin embargo, para quienes todavía no tienen claridad sobre qué vehículo necesitan, relacionar esa información con sus preferencias y situaciones de uso puede convertirse en un proceso complejo. Esto plantea la necesidad de una experiencia que ayude a interpretar las necesidades personales y facilite la identificación de alternativas relevantes.
- **Visual sugerido:** modelo del problema en 4 pasos: Necesidad del usuario → Exploración del catálogo → **Brecha de interpretación** (resaltada en rojo) → Incertidumbre y mayor esfuerzo.

**Factores que contribuyen al problema (lista, marcados como hipótesis)**

1. Exploración centrada en productos.
2. Complejidad de la información.
3. Dificultad para relacionar necesidades y características.
4. Comparación sin orientación personalizada.

### Target Audience

- **Eyebrow:** Target Audience
- **Titular:** Personas que necesitan orientación para elegir su próximo vehículo.
- **Cuerpo:** Beyond the Model está dirigido a personas en Colombia que consideran adquirir un vehículo nuevo, pero todavía necesitan claridad para identificar cuál alternativa responde mejor a sus necesidades. Incluye tanto compradores primerizos como personas que buscan renovar su vehículo o adaptarse a nuevas circunstancias de vida. La experiencia está pensada para acompañar diferentes niveles de conocimiento automotriz, facilitando la exploración y comprensión de las alternativas disponibles en el portafolio Toyota.

**Segmentos (tabla)**

| Segmento | Necesidad principal | Relevancia |
|---|---|---|
| Compradores primerizos | Saber qué tipo de vehículo necesitan y por dónde empezar | Alta |
| Compradores con necesidades nuevas | Encontrar el vehículo que responda a su nueva realidad | Alta |
| Compradores que renuevan su vehículo | Evaluar alternativas y entender diferencias | Alta |
| Compradores con preferencias definidas | Validar su elección y comparar | Complementaria |

**Nota:** Segmentación construida como hipótesis de diseño a partir del problema y el alcance, no a partir de investigación primaria. Sin restricción por edad, género ni nivel socioeconómico.

### User Needs & Pain Points

- **Eyebrow:** User Needs & Pain Points
- **Titular:** Más información no siempre significa mayor claridad.
- **Cuerpo:** Durante la búsqueda de un vehículo, las personas necesitan identificar qué características responden a su situación, comprender las diferencias entre modelos y evaluar sus alternativas. Sin embargo, la cantidad de información técnica y la necesidad de interpretar múltiples atributos pueden dificultar este proceso, especialmente cuando todavía no tienen claridad sobre qué vehículo necesitan. Más allá de consultar un catálogo, necesitan orientación para conectar sus preferencias con alternativas relevantes, comprender las recomendaciones y tomar una decisión informada.

**Seis puntos de dolor (lista, como hipótesis)**

1. **Exploración:** no saber por dónde comenzar.
2. **Información:** dificultad para interpretar características técnicas.
3. **Relevancia:** no saber qué características son importantes.
4. **Evaluación:** dificultad para identificar diferencias relevantes.
5. **Decisión:** incertidumbre frente a la elección.
6. **Confianza:** necesidad de entender por qué una recomendación es adecuada.

### Problem Statement & HMW

- **Eyebrow:** Problem Definition
- **Titular:** El desafío no es encontrar más vehículos, sino entender cuál es el adecuado.
- **Cuerpo:** Para quienes consideran adquirir un vehículo nuevo, identificar la alternativa más adecuada puede resultar complejo cuando no tienen claridad sobre sus necesidades o deben interpretar múltiples características y especificaciones. La oportunidad está en transformar la exploración tradicional en una experiencia que conecte las necesidades personales con los vehículos disponibles, facilitando su comprensión y evaluación.
- **Eyebrow:** How might we?
- **Frase destacada:** ¿Cómo podríamos interpretar las necesidades y preferencias de cada persona para ayudarla a descubrir qué vehículo Toyota se adapta mejor a su contexto?

**HMW de apoyo (lista)**

- **Descubrimiento:** ¿Cómo podríamos ayudar a descubrir qué tipo de vehículo responde mejor a cada persona, sin exigirle que conozca el catálogo?
- **Comprensión:** ¿Cómo podríamos transformar las características técnicas en información fácil de comprender y relacionar con situaciones cotidianas?
- **Evaluación:** ¿Cómo podríamos facilitar la comparación destacando las diferencias que realmente importan para cada persona?
- **Confianza:** ¿Cómo podríamos ayudar a comprender por qué un vehículo es una alternativa adecuada?

---

## B.5 · 02 Discovery — Jobs to Be Done

**Índice:** 05 — Jobs to Be Done

### Situaciones de uso

- **Titular:** Tres situaciones, un mismo progreso
- **Cuerpo:** Comprar el primer vehículo, adaptarse a nuevas necesidades o renovar el vehículo actual son situaciones distintas, pero comparten un progreso: pasar de una necesidad de movilidad a una elección que tenga sentido para la situación personal.
- **Visual sugerido:** Punto de partida ("Tengo la necesidad de adquirir un vehículo, pero no sé cuál elegir") → Progreso buscado ("Comprendo mis necesidades, identifico alternativas y entiendo cuál responde mejor a ellas") → Resultado esperado ("Puedo tomar una decisión informada y sentirme más seguro con mi elección").

### Core Job

- **Eyebrow:** Core Job
- **Titular:** Encontrar el vehículo adecuado para mi contexto.
- **Cuerpo:** Las personas no buscan simplemente adquirir un vehículo; buscan encontrar una alternativa que responda a sus necesidades de movilidad, preferencias y circunstancias actuales. Su objetivo es comprender qué opciones tienen disponibles, evaluar cuál se adapta mejor a su situación y tomar una decisión con confianza.
- **Job Statement (frase destacada):** *Cuando* necesito adquirir un vehículo nuevo porque mis necesidades de movilidad o circunstancias personales han cambiado, *quiero* identificar qué alternativas responden mejor a mis necesidades y preferencias, *para* elegir un vehículo que se adapte a mi contexto y sentirme seguro con mi decisión.

### Functional, Emotional & Social Jobs

- **Eyebrow:** Functional, Emotional & Social Jobs
- **Titular:** Elegir un vehículo implica mucho más que comparar características.
- **Cuerpo:** La búsqueda de un vehículo reúne diferentes necesidades. Desde una perspectiva funcional, las personas necesitan identificar alternativas, comprender sus características y evaluar cuál responde mejor a su situación. A nivel emocional, buscan reducir la incertidumbre y sentir confianza en su elección. Desde una perspectiva social, pueden considerar las necesidades de su familia, sus responsabilidades y la manera en que el vehículo se integra en su estilo de vida.

**Prioridad (tabla)**

| Dimensión | Rol en el producto |
|---|---|
| Funcional | Prioridad principal: es el trabajo central que la experiencia debe facilitar |
| Emocional | Complementaria: define cómo debe sentirse la experiencia |
| Social | Contextual: ayuda a entender las motivaciones (hipótesis) |

### Desired Outcomes

- **Eyebrow:** Desired Outcomes
- **Titular:** Una elección más clara, relevante y fundamentada.
- **Cuerpo:** El usuario espera encontrar alternativas que respondan a sus necesidades, comprender los beneficios de cada vehículo y reconocer las diferencias que influyen en su decisión. Más allá de acceder a información, busca reducir el esfuerzo de exploración, recibir recomendaciones comprensibles y contar con argumentos suficientes para evaluar sus opciones con confianza.
- **Frase de cierre del capítulo:** El usuario no busca solamente un vehículo. Busca la confianza de estar eligiendo uno adecuado para su vida.

**Datos destacados**

- **15** resultados esperados
- **5** dimensiones: claridad, relevancia, comprensión, confianza y eficiencia
- **7** criterios para evaluar el prototipo

---

## B.6 · 03 Strategy — Value Proposition & Product Goals

**Índice:** 06 — Value Proposition & Product Goals

### Propuesta de valor

- **Eyebrow:** Value Proposition
- **Titular:** Del catálogo de vehículos a una experiencia que entiende tus necesidades.
- **Promesa (frase destacada):** Encuentra el Toyota que se adapta a tu vida.
- **Cuerpo:** Beyond the Model propone una nueva manera de descubrir vehículos Toyota, partiendo de las necesidades, preferencias y circunstancias de cada persona. Mediante una experiencia guiada y recomendaciones personalizadas, ayuda a identificar alternativas compatibles, comprender sus beneficios y reconocer las diferencias relevantes entre modelos. Su valor está en transformar la información del catálogo en orientación útil para facilitar una elección más clara y fundamentada.

**Dimensiones de valor (lista):** Claridad · Relevancia · Comprensión · Confianza

**Diferencia frente a la experiencia tradicional (tabla)**

| Experiencia tradicional | Beyond the Model |
|---|---|
| Comienza desde modelos y categorías | Comienza desde las necesidades del usuario |
| El usuario interpreta los filtros | La experiencia interpreta sus preferencias |
| El usuario identifica qué explorar | El producto presenta alternativas compatibles |
| El usuario consulta características | El producto explica beneficios y relevancia |
| El usuario compara modelos que ya conoce | Se comparan alternativas recomendadas |

**Nota:** Posicionamiento conceptual frente al patrón del benchmark. No implica que el catálogo actual de Toyota carezca de estas capacidades.

### Value Proposition Canvas

- **Eyebrow:** Value Proposition Canvas
- **Titular:** Conectar las necesidades de las personas con el valor de cada vehículo.
- **Cuerpo:** El Value Proposition Canvas permitió relacionar las principales necesidades y dificultades del usuario con las capacidades propuestas para Beyond the Model. La solución busca reducir la complejidad de exploración mediante asesoría guiada, interpretación de preferencias, recomendaciones personalizadas y explicaciones contextualizadas. De esta manera, la información del catálogo deja de ser únicamente descriptiva y se convierte en una herramienta para orientar la elección.
- **Visual sugerido:** canvas completo (Customer Profile / Value Map) y su "Value fit": transformar la información del catálogo Toyota en orientación personalizada.

### Visión y diferenciación

- **Eyebrow:** Product Vision & Differentiation
- **Titular:** Una nueva forma de descubrir vehículos, empezando por las personas.
- **Cuerpo:** Beyond the Model plantea una evolución de la experiencia tradicional de exploración automotriz hacia un modelo de descubrimiento centrado en las necesidades individuales. Su propuesta combina asesoría guiada, inteligencia artificial contextual y recomendaciones explicables para conectar las preferencias de cada persona con los vehículos Toyota disponibles. La diferenciación está en integrar descubrimiento, recomendación y comparación dentro de una experiencia continua que facilite la comprensión y evaluación de alternativas.
- **Visión (frase destacada):** Transformar la manera en que las personas descubren y eligen un vehículo Toyota.

**Diferenciadores (lista):** Needs-first discovery · Contextual AI · Explainable recommendations · Decision-oriented experience

### Objetivos y criterios de éxito

- **Eyebrow:** Product Goals & Success Criteria
- **Titular:** Una experiencia exitosa es aquella que ayuda a elegir con mayor claridad.
- **Cuerpo:** Los objetivos de Beyond the Model se centran en facilitar el descubrimiento, ofrecer recomendaciones relevantes, mejorar la comprensión de los vehículos y simplificar la comparación entre alternativas. Para evaluar su efectividad, se plantean criterios relacionados con la comprensión del recorrido, la relevancia de las recomendaciones, la claridad de la información y la confianza durante la evaluación. Estos criterios servirán como base para validar el prototipo e identificar oportunidades de mejora antes de considerar una implementación real.

| Objetivo | Criterio de éxito | Métrica |
|---|---|---|
| PG01 Descubrimiento | Comprende las preguntas e identifica sus prioridades | Comprensión del recorrido |
| PG02 Personalización | Las recomendaciones corresponden a lo que expresó | Relevancia percibida |
| PG03 Comprensión | Entiende beneficios y características | Comprensión de beneficios |
| PG04 Evaluación | Identifica diferencias relevantes | Efectividad de comparación |
| PG05 Confianza | Entiende por qué se le recomienda cada vehículo | Confianza antes y después |

**Nota:** Métricas propuestas para validar el concepto. No se miden resultados comerciales (ventas, cotizaciones, conversión), porque el prototipo no opera dentro del ecosistema comercial de Toyota.

---

## B.7 · 03 Strategy — Product Concept & AI Strategy

**Índice:** 07 — Product Concept & AI Strategy

### Concepto

- **Eyebrow:** Product Concept
- **Titular:** Una experiencia que conecta personas con vehículos, no solamente modelos con características.
- **Cuerpo:** Beyond the Model es una propuesta conceptual de experiencia digital que transforma la exploración de vehículos Toyota en un proceso de descubrimiento personalizado. A través de una asesoría guiada y una capa de inteligencia artificial contextual, interpreta las necesidades de cada persona, identifica alternativas compatibles y explica los beneficios y diferencias de cada vehículo. Su propósito es convertir la información del catálogo en orientación útil para facilitar una elección más clara y fundamentada.

**Qué no es (lista)**

- No es un chatbot genérico.
- No es un catálogo tradicional.
- No es un marketplace ni un configurador.
- No es un sistema de compra o financiación.
- No reemplaza a los asesores comerciales.
- No decide por el usuario.

### Modelo de experiencia

- **Eyebrow:** Experience Model
- **Titular:** Seis etapas, un recorrido continuo
- **Cuerpo:** La experiencia de Beyond the Model se estructura en seis etapas que acompañan al usuario desde el descubrimiento de sus necesidades hasta la evaluación de alternativas Toyota. El recorrido comienza con una asesoría guiada para comprender su contexto, continúa con la interpretación de sus preferencias y la presentación de vehículos compatibles, y finaliza facilitando la comprensión y comparación de las opciones. Esta estructura busca conectar cada etapa de la exploración en una experiencia progresiva, personalizada y orientada a la toma de decisiones.
- **Visual sugerido:** Descubrir → Comprender → Interpretar → Recomendar → Evaluar → Continuar.

### Estrategia de IA

- **Eyebrow:** AI Strategy
- **Titular:** La IA interpreta, la lógica recomienda y los datos respaldan
- **Cuerpo:** Beyond the Model incorpora una capa de inteligencia artificial contextual que interpreta las necesidades y preferencias de cada persona para personalizar su experiencia de descubrimiento. La IA participa en la comprensión del perfil, la contextualización de recomendaciones y la explicación de características y diferencias entre vehículos. Su funcionamiento se complementa con una lógica de compatibilidad y una fuente estructurada de información del catálogo Toyota, buscando ofrecer recomendaciones relevantes, transparentes y fundamentadas. La inteligencia artificial actúa como una herramienta de orientación, mientras que el usuario conserva el control sobre su proceso de evaluación y decisión.
- **Visual sugerido:** 4 capas: Input (respuestas + catálogo) → Interpretation (IA) → Matching (lógica de compatibilidad) → Output (recomendaciones, razones y diferencias).
- **Regla destacada:** La IA no inventa características, precios, especificaciones ni beneficios.

### Interacción y confianza

- **Eyebrow:** AI Interaction & Trust
- **Titular:** Útil, comprensible y sin presión
- **Cuerpo:** La inteligencia artificial se integra en Beyond the Model como una capa de asistencia contextual que acompaña al usuario durante el descubrimiento y la evaluación de vehículos. Su intervención se orienta a interpretar necesidades, explicar recomendaciones y facilitar la comprensión de las diferencias entre alternativas. Para construir una experiencia confiable, se establecen principios de transparencia, claridad, consistencia y control. Las recomendaciones deben estar respaldadas por información verificable y presentar argumentos comprensibles, manteniendo siempre la autonomía del usuario sobre su decisión.

**Mecanismos de confianza (lista)**

1. Explicar el porqué de cada recomendación.
2. Mostrar información verificable.
3. Diferenciar hechos de interpretaciones.
4. Reconocer cuando falta información.
5. Dejar la decisión en manos del usuario.

**Regla destacada:** No se muestra un puntaje de compatibilidad sin una metodología definida.

---

## B.8 · 03 Strategy — Data Architecture

**Índice:** 08 — Data Architecture

### Dominios de información

- **Titular:** Cuatro dominios de información
- **Cuerpo:** La arquitectura de información de Beyond the Model se organiza en cuatro dominios: datos del usuario, información de los vehículos, datos de recomendación y datos de la experiencia. Esta estructura permite conectar las necesidades y preferencias de cada persona con los atributos verificados del catálogo Toyota, proporcionando la información necesaria para evaluar compatibilidad y generar recomendaciones contextualizadas. La separación entre datos estructurados, lógica de recomendación e interpretaciones de inteligencia artificial busca mantener la consistencia, trazabilidad y confiabilidad de los resultados.

### Modelo de datos

- **Eyebrow:** Data Model
- **Titular:** Siete entidades, una cadena trazable
- **Cuerpo:** Se definió un modelo conceptual de datos compuesto por siete entidades que organizan la información del usuario, el catálogo de vehículos y los resultados de recomendación. La estructura conecta las respuestas de la asesoría con un perfil de necesidades, que posteriormente se relaciona con los modelos, versiones y atributos disponibles en el catálogo Toyota. Esta organización permite mantener la trazabilidad entre las necesidades identificadas, las características de los vehículos y los argumentos que respaldan cada recomendación.
- **Visual sugerido:** User Journey → User Response → User Profile → Recommendation → Vehicle → Vehicle Version → Vehicle Attribute.
- **Decisión destacada:** Un modelo no es lo mismo que sus versiones. Se recomienda el modelo y se consultan las versiones, sin atribuir a todas una característica que solo tienen algunas.

### Perfil y atributos

- **Eyebrow:** User Profile & Vehicle Attributes
- **Titular:** Lo que necesitamos saber de una persona y de un vehículo
- **Cuerpo:** Para conectar las necesidades de los usuarios con el portafolio Toyota, se propone una estructura de perfil organizada en seis dimensiones: contexto de movilidad, espacio y pasajeros, presupuesto, preferencias del vehículo, prioridades de decisión y contexto de compra. Paralelamente, los atributos del catálogo se organizan en categorías que permiten evaluar características funcionales, técnicas y comerciales de cada modelo y versión. Esta relación establece una base para identificar criterios de compatibilidad y construir recomendaciones fundamentadas en información verificable.
- **Regla destacada:** Un dato desconocido no se interpreta como presente ni como ausente: se muestra como "No disponible en la ficha oficial".

### Flujo y gobierno de datos

- **Eyebrow:** Data Flow & Governance
- **Titular:** Del perfil a la recomendación, sin perder la trazabilidad
- **Cuerpo:** Se definió un flujo de información que conecta las respuestas del usuario con el catálogo estructurado de vehículos Toyota para generar recomendaciones contextualizadas. El proceso contempla la recopilación y organización de necesidades, su interpretación, la evaluación de compatibilidad y la presentación de alternativas explicadas. Para garantizar la confiabilidad de los resultados, se establecen principios de exactitud, trazabilidad, consistencia, vigencia, privacidad e integridad de los datos, manteniendo al usuario en control de la información que comparte.

---

## B.9 · 04 Product Definition — MVP & Feature Definition

**Índice:** 09 — MVP & Feature Definition

### Definición del MVP

- **Titular:** Lo mínimo para demostrar el valor
- **Cuerpo:** El MVP de Beyond the Model se centra en materializar la experiencia principal de descubrimiento y recomendación personalizada. La primera versión contempla un recorrido guiado para comprender las necesidades del usuario, interpretar sus preferencias, identificar vehículos Toyota compatibles y explicar las razones detrás de cada recomendación. El alcance prioriza las funcionalidades necesarias para facilitar la evaluación de alternativas, dejando fuera procesos comerciales y funcionalidades complementarias que no son indispensables para demostrar el valor central de la propuesta.

### Inventario y priorización

- **Eyebrow:** Feature Inventory & Prioritization
- **Titular:** 33 funcionalidades, 20 indispensables
- **Cuerpo:** A partir de las capacidades definidas, se identificaron 33 funcionalidades organizadas en siete grupos: descubrimiento, asesoría guiada, perfil del usuario, inteligencia artificial, recomendación de vehículos, evaluación de alternativas y continuidad de la experiencia. Las funcionalidades se priorizaron con el método MoSCoW, considerando su contribución al valor central del producto y su necesidad dentro del recorrido principal.

**Datos destacados**

- **20** Must Have
- **7** Should Have
- **6** Could Have

**Decisiones destacadas (lista)**

- La comparación básica es indispensable; la comparación entre versiones queda para después.
- La interpretación de respuestas es indispensable; la asistencia conversacional avanzada queda para después.

### Experiencia del MVP

- **Eyebrow:** MVP Experience Definition
- **Titular:** Un recorrido guiado de principio a fin
- **Cuerpo:** El MVP se estructura alrededor de una experiencia de descubrimiento guiado que conecta las necesidades del usuario con el catálogo de vehículos Toyota. La primera versión permite completar una asesoría personalizada, construir un perfil de necesidades, recibir recomendaciones explicadas y evaluar alternativas mediante la consulta y comparación de vehículos, manteniendo la flexibilidad del recorrido y el control sobre las decisiones.

**Comportamientos que garantiza (lista)**

1. Se puede avanzar y regresar sin perder lo respondido.
2. "Aún no lo sé" es una respuesta válida y no filtra resultados.
3. Cada recomendación tiene razones comprensibles y verificables.
4. Los datos faltantes se señalan; no se inventan.
5. El usuario conserva el control de su elección.

**Fuera del MVP (lista):** compra y financiación · reservas y test drive · cuentas de usuario · calculadora de costos · favoritos · otras marcas · app móvil.

### Lógica de recomendación

- **Eyebrow:** Recommendation Logic
- **Titular:** Una lógica simple y explicable
- **Cuerpo:** Cada modelo del catálogo tiene un conjunto de etiquetas construidas a partir de su ficha técnica oficial, como espacio, ahorro de combustible, potencia o tracción 4x4. Cada respuesta de la asesoría que coincide con una etiqueta suma un punto. El presupuesto funciona como único filtro. Así, el resultado siempre es explicable: el modelo destacado es el que más coincide con lo que la persona pidió, y cada razón visible corresponde a un dato verificable.

**Datos destacados**

- **6** modelos del catálogo Toyota Colombia
- **19** versiones con precio sugerido
- **4** preguntas, una por pantalla
- **1** destacado + 2 alternativas

**Nota:** Modelos del prototipo: Yaris HB, Corolla, Corolla Cross, RAV4, Hilux y Fortuner. Precios sugeridos vigentes del 1 al 30 de noviembre de 2026.

---

## B.10 · 04 Product Definition — Information Architecture & User Flows

**Índice:** 10 — Information Architecture & User Flows

### Arquitectura de experiencia

- **Titular:** Un módulo en el home, donde ocurre todo
- **Cuerpo:** Beyond the Model se plantea como un módulo dentro del home de Toyota Colombia, también accesible desde el menú principal como "Encuentra tu Toyota". Todo el recorrido sucede dentro del módulo: cada paso reemplaza al anterior sin abrir páginas nuevas. Al terminar, la persona continúa hacia las herramientas que Toyota ya tiene, como el cotizador o la prueba de manejo. La propuesta complementa el catálogo existente, no lo reemplaza.
- **Visual sugerido:** dos niveles. Sitio Toyota (home + menú) → módulo "Encuentra tu Toyota" → salida a las páginas existentes.

**Decisión destacada:** Se evaluaron tres opciones: sección propia, plataforma independiente o herramienta dentro del catálogo. Se eligió integrar la experiencia al ecosistema de Toyota, con identidad y recorrido propios.

### Flujo

- **Eyebrow:** User Flow
- **Titular:** Un solo recorrido que siempre termina en un resultado
- **Cuerpo:** El flujo se diseñó como un único camino: inicio, asesoría de 4 preguntas, revisión del perfil, resultado, detalle y comparación, y continuidad en Toyota. Responder "Aún no lo sé" nunca bloquea el avance, y editar el perfil es una acción dentro del mismo recorrido. Así, la experiencia se mantiene simple de entender y siempre entrega una respuesta.
- **Visual sugerido:** diagrama del flujo único. Menú o Home → Inicio → Asesoría → Tu perfil → Evaluación → Resultado (3 variantes) → Detalle y comparación → Continuar en Toyota.

### Variantes de resultado

- **Eyebrow:** Result Variants
- **Titular:** Siempre hay una respuesta, incluso cuando nada coincide del todo
- **Cuerpo:** La pantalla de resultado tiene tres variantes. Si hay modelos que cumplen lo que la persona pidió, se presentan con sus razones. Si ninguno cumple todo, se muestran las opciones más cercanas y en qué se diferencian. Y si una alternativa no cumple algo pero compensa en otra cosa, se explica qué cambia y qué se gana. En todos los casos se dice con claridad qué es distinto a lo que se pidió.

| Variante | Titular en pantalla | Ejemplo |
|---|---|---|
| Coincidencia total | Estos Toyota se ajustan a lo que buscas | Familia de 5, ciudad y carretera, $100 a $150 M → Corolla Cross, Yaris HB y Corolla |
| Similar a tu perfil | Estos se acercan a lo que buscas | SUV híbrida de 7 puestos → Fortuner (7 puestos) o RAV4 (híbrida) |
| Con ventajas | La opción más cercana a lo que buscas | 7 puestos con $150 a $220 M → Fortuner SR 2.8 diésel 4x2, que se pasa $22,9 M |

**Nota:** En el prototipo, las variantes "Similar" y "Con ventajas" son pantallas de ejemplo.

---

## B.11 · 05 Experience Design — Prototipo y sistema visual

**Índice:** 11 — Experience Design

### Prototipo

- **Titular:** De la definición a una experiencia que se puede recorrer
- **Cuerpo:** El prototipo funcional desktop materializa el recorrido completo dentro del home de Toyota: una asesoría de 4 preguntas, la revisión del perfil, un resultado con un modelo destacado y dos alternativas, el detalle de cada vehículo con versiones y ficha técnica, y la comparación de hasta tres modelos. Los datos y precios corresponden al catálogo oficial de Toyota Colombia.
- **Visual sugerido:** secuencia de pantallas: inicio, pregunta, perfil, resultado, detalle, comparación.

### Sistema visual

- **Eyebrow:** Visual System
- **Titular:** Rojo para lo importante, contraste para todo lo demás
- **Cuerpo:** El sistema visual sigue el manual de marca de Toyota. El rojo Toyota se usa a opacidad completa y solo para la acción principal, las selecciones y los acentos. Negro, blanco y gris construyen el resto. La asesoría vive en un panel oscuro con un visual de escaneo que acompaña cada pregunta. Los resultados y los datos se presentan sobre superficie clara para facilitar la lectura. Los titulares en mayúsculas se reservan para frases de siete palabras o menos.

**Decisiones visuales (lista)**

- Rojo Toyota #EB0A1E a opacidad completa, sin degradados.
- Funcionales: negro, blanco y gris #58595B.
- Tipografía Toyota Type (reemplazo temporal en el prototipo: Figtree).
- Esquinas rectas; botones con relleno que sube al pasar el cursor.
- Imágenes de referencia: siluetas genéricas, a reemplazar por fotografía oficial.

---

## B.12 · 06 Validation & Learnings

**Índice:** 12 — Validation & Learnings

> **Esta sección se completa solo con evidencia real.** No publicar resultados que no se hayan medido.

### Plan de validación

- **Titular:** Qué vamos a comprobar
- **Cuerpo:** La validación del prototipo busca comprobar si las personas comprenden la asesoría, si las recomendaciones corresponden a lo que expresaron, si entienden las razones detrás de cada vehículo y si pueden identificar las diferencias importantes entre alternativas.

**Criterios (lista):** Claridad · Relevancia · Comprensión · Explicabilidad · Comparación · Confianza · Eficiencia

**Tareas sugeridas para la prueba**

1. Completar la asesoría con tu situación real.
2. Explicar por qué apareció el modelo destacado.
3. Comparar dos alternativas y elegir una.
4. Encontrar el precio de una versión específica.

### Resultados

[Por completar: participantes, método, hallazgos y métricas reales]

### Iteraciones

[Por completar: qué cambió después de las pruebas y por qué]

### Aprendizajes y próximos pasos

**Próximos pasos posibles (lista, como propuestas)**

- Validar el problema con entrevistas a compradores reales.
- Completar la ficha de la RAV4 con la fuente oficial.
- Agregar datos de baúl y consumo cuando haya fuente oficial.
- Evaluar la asistencia conversacional y la comparación entre versiones.
- Explorar la versión mobile.

---

# PARTE C · Investigación de soporte

## C.1 Información encontrada (Toyota Colombia, toyota.com.co)

- **Catálogo:** 20 vehículos nuevos en 6 categorías (Autos, Camionetas y SUV, Pick-ups, Híbridos, Eléctricos, Deportivos GR). Consultado el 18 nov 2026.
- **Filtros del catálogo:** tipo, precio, asientos y modelo y año.
- **Herramientas digitales:** catálogo, cotizador y configurador, test drive, concesionarios, simulador de carga, alquiler y financiación.
- **Recorrido observado:** home → catálogo → detalle → cotización.

## C.2 Investigación secundaria (verificar antes de publicar)

| Dato | Fuente |
|---|---|
| Los electrificados pasaron del 7 % de las ventas en 2021 al 40 % de las matrículas nuevas en el primer trimestre de 2026 | Autocosmos Colombia, 20 abr 2026 |
| Toyota fue líder en electrificados en Colombia en 2025, con 14,2 % de participación | Autocosmos Colombia, 20 abr 2026 |
| Toyota alcanzó 43,4 % de participación en el nicho de híbridos (HEV) en 2025 | Autocosmos Colombia, 20 abr 2026 |
| 80 % de compradores y vendedores en EE. UU. está abierto a usar IA en la compra; 44 % para comparar vehículos | CarGurus, Consumer Insights 2025 (EE. UU., no representativo de Colombia) |
| El 53 % de compradores consideró 3 o más marcas al empezar su búsqueda | CarGurus, Consumer Insights 2025 (EE. UU.) |
| Valor, asequibilidad, confianza y transparencia aparecen como factores relevantes en Latinoamérica | Deloitte, Global Automotive Consumer Study 2026 |
| La confianza en los datos y la legitimidad de los anuncios son factores importantes en sitios automotrices | MeasuringU, Automotive UX Benchmark 2026 (EE. UU.) |
| Reseñas de la app CarroYa: el filtro se borra al regresar, faltan filtros por carrocería, no hay comparador | Google Play, reseñas de 2026 |

## C.3 Benchmark

Ver B.3. Referencias: Kia Colombia, Hyundai Colombia, Renault Colombia, Volvo Cars Colombia y Autocosmos.

## C.4 Hipótesis de diseño (no validadas)

Problema, factores del problema, segmentos, necesidades, pain points, motivaciones, trabajos sociales y encaje de valor.

---

# PARTE D · Copy de la interfaz del prototipo

**Trato y terminología**

- Trato de "tú".
- "Carro" en la asesoría; "vehículo" en textos formales.
- Las opciones de respuesta van en primera persona.
- "Aún no lo sé" (sin marca de género).
- CTAs de 2 palabras como máximo.

## D.1 Home

| Elemento | Texto |
|---|---|
| Menú | Vehículos · Encuentra tu Toyota · Cotizador · Concesionarios |
| Hero, titular | VEHÍCULOS NUEVOS / Toyota en Colombia |
| Hero, bajada | Autos, camionetas, pick-ups e híbridos para cada forma de moverte. |
| Hero, CTAs | Ver catálogo · Encuentra tu Toyota |
| Marquesina | Automóviles · Camionetas y SUV · Pick-ups · Híbridos · Encuentra tu Toyota |
| Índice del módulo | 01 — Encuentra tu Toyota |
| Catálogo | 02 — Catálogo · Explora los modelos · Ver catálogo completo |
| Footer | Concepto de diseño para portafolio. No es un sitio oficial de Toyota. Datos y precios sugeridos tomados de toyota.com.co, vigentes del 1 al 30 de noviembre de 2026. Siluetas e imágenes de referencia. |

## D.2 Inicio del módulo

| Elemento | Texto |
|---|---|
| Eyebrow | Encuentra tu Toyota |
| Titular | Encuentra el Toyota que se adapta a tu vida |
| Bajada | Responde 4 preguntas sobre cómo te mueves y qué te importa. Te mostramos los modelos que mejor se ajustan y por qué. |
| Chips | 4 preguntas · 1 minuto · Sin registrarte |
| CTA principal | Empezar asesoría |
| Enlace | Ver catálogo |
| Nota | Las recomendaciones salen del catálogo de vehículos nuevos de Toyota Colombia. |
| Paso 01 | Cuéntanos cómo te mueves · Uso, espacio, prioridades y presupuesto |
| Paso 02 | Revisa tu perfil · Confirma o ajusta tus respuestas |
| Paso 03 | Descubre tus opciones · Con las razones de cada recomendación |

## D.3 Asesoría (4 preguntas)

Integrada el 25 nov 2026: de 9 preguntas en 5 bloques pasó a 4, una por pantalla. Salieron «¿En qué momento estás?» y maletas, mercado y mascotas, porque no cambiaban el resultado (no suman puntos; no hay dato oficial de baúl). Cada respuesta suma las mismas etiquetas que antes.

- **Barra de progreso:** Tu uso · Tu carro · Tus prioridades · Tu presupuesto
- **Contador:** Pregunta [n] de 4
- **Botones:** Atrás · Siguiente pregunta · Ver mi perfil (en la última) · Cancelar / Guardar cambio (al editar)

| # | Bloque | Pregunta | Ayuda | Opciones | Tipo |
|---|---|---|---|---|---|
| 1 | Tu uso | ¿Cómo te mueves? | Elige todas las que apliquen | Día a día en ciudad · Viajes en familia · Carretera · Destapado o terreno difícil · Trabajo o carga pesada · Un poco de todo · Aún no lo sé | Varias |
| 2 | Tu carro | ¿Cómo te imaginas tu carro? | Tipo y motor son opcionales | Personas que viajan: 1 o 2 · 3 a 5 · 6 o más · Aún no lo sé. Tipo de carro (opcional): Automóvil · Camioneta o SUV · Pick-up · Sin preferencia. Motor (opcional): Híbrido · Gasolina o diésel · Sin preferencia | Tres filas, una respuesta cada una |
| 3 | Tus prioridades | ¿Qué es lo que más te importa? | Elige hasta 3 | Espacio · Comodidad · Seguridad · Ahorro de combustible · Tecnología · Potencia · Versatilidad · Aún no lo sé | Hasta 3 |
| 4 | Tu presupuesto | ¿Cuánto tienes pensado invertir? | Usamos el precio sugerido de cada modelo | Hasta $100 millones · $100 a $150 millones · $150 a $220 millones · Más de $220 millones · Prefiero no decirlo | Una, opcional |

## D.4 Tu perfil

| Elemento | Texto |
|---|---|
| Titular | Tu perfil |
| Bajada | Esto es lo que entendimos. Revisa que esté bien antes de ver tus resultados. |
| Etiquetas | Cómo te mueves · Personas · Tipo de carro · Motor · Prioridades · Presupuesto |
| Valor vacío | Sin definir |
| Acción por fila | Editar |
| CTA | Ver resultados |

## D.5 Análisis (propuesta pendiente de aprobación)

| Elemento | Texto |
|---|---|
| Titular | Buscando tu Toyota |
| Mensajes | Revisando tus prioridades · Comparando con el catálogo · Preparando tus resultados |

## D.6 Resultado

| Elemento | Texto |
|---|---|
| Eyebrow | Tus resultados |
| Titular | Estos Toyota se ajustan a lo que buscas |
| Acción | Ajustar perfil |
| Etiqueta del destacado | La que más se ajusta a ti |
| Precio | Desde $[precio] · Precio sugerido |
| Coincidencia | Cumple [n] de tus [n] prioridades |
| Título de razones | Por qué te la recomendamos |
| Alternativas | También te pueden servir |
| Selección | Comparar |
| Barra de comparación | Seleccionados: [n] de 3 · Elige al menos 2 para comparar · Comparar modelos |
| CTA de tarjeta | Ver detalle |
| Legal | Precios sugeridos al público por Automotores Toyota Colombia, vigentes del 1 al 30 de noviembre de 2026. Pueden variar según el concesionario. |

**Razones por modelo**

| Modelo | Razones disponibles |
|---|---|
| Yaris HB | Mide 3.955 mm de largo: el más compacto del catálogo · Motor híbrido de 1.5 L · Transmisión automática en todas sus versiones · Automóvil hatchback para 5 personas · 7 bolsas de aire y sistema de pre-colisión |
| Corolla | Sedán de 4.630 mm de largo con tracción delantera · Motor híbrido de 1.8 L · Transmisión automática en todas sus versiones · Pantalla de 10" con CarPlay y Android Auto inalámbricos, según versión · Sedán para 5 personas · 7 bolsas de aire y sistema de pre-colisión |
| Corolla Cross | Mide 4.460 mm de largo: más corta que el Corolla · SUV de 1.620 mm de alto y 161 mm de altura al piso · Versiones híbridas de 1.8 L · Transmisión automática en todas sus versiones · Pantalla de 10" con CarPlay y Android Auto inalámbricos, según versión · SUV compacta para 5 personas · 7 bolsas de aire y sistema de pre-colisión |
| RAV4 | SUV mediana de 4.600 mm de largo · Motor híbrido de 2.5 L · Transmisión automática en todas sus versiones · Pantalla táctil de 10,5" o 12,9", según versión · 239 hp de potencia combinada · Tracción 4x4 integral eléctrica · SUV mediana para 5 personas · 8 bolsas de aire y Toyota Safety Sense 4.0 |
| Hilux | Hasta 875 kg de capacidad de carga · Tracción 4x4 con bajo y 286 mm de altura al piso · Hasta 201 hp con el motor diésel 2.8 L · Pick-up doble cabina para 5 personas y carga · Motores a gasolina o diésel · 7 bolsas de aire y sistema de pre-colisión |
| Fortuner | 7 puestos en 3 filas · SUV grande de 4.795 mm de largo · 279 mm de altura al piso y versiones 4x4 con bajo · Transmisión automática en todas sus versiones · Hasta 201 hp con el motor diésel 2.8 L · Versiones 4x2 y 4x4 con bajo · Motores a gasolina o diésel · 7 bolsas de aire y sistema de pre-colisión |
| Todos | Desde $[precio], dentro de tu presupuesto |

## D.7 Detalle del vehículo

| Elemento | Texto |
|---|---|
| Volver | Tus resultados · Tu comparación |
| Título de razones | Por qué es para ti |
| Secciones | Versiones y precios · Ficha técnica |
| Encabezados de la tabla | Versión · Motor, transmisión y tracción · Precio sugerido |
| Etiquetas de la ficha | Puestos · Motor · Potencia · Transmisión · Tracción · Largo · Ancho · Alto · Altura al piso · Bolsas de aire · Capacidad de carga · Baúl |
| Dato faltante | No disponible en la ficha oficial |
| Dato por confirmar | * Dato por confirmar en la ficha técnica oficial de Toyota Colombia. |
| Banda final, titular | ¿Te interesa el [modelo]? |
| Banda final, texto | Cotízalo o agenda una prueba de manejo en toyota.com.co. Se abre en una pestaña nueva. |
| CTAs | Test drive · Cotizar |

## D.8 Comparación

| Elemento | Texto |
|---|---|
| Titular | Compara tus opciones |
| Bajada | Las diferencias entre los modelos que elegiste, con los datos de la ficha técnica oficial. |
| Filas | Tus prioridades que cumple · Precio desde · Tipo · Puestos · Motor · Potencia · Transmisión · Tracción · Largo · Ancho · Alto · Altura al piso · Bolsas de aire · Capacidad de carga · Baúl |
| Sin coincidencia | Ninguna |

## D.9 Pantallas sueltas

**Similar a tu perfil**

- **Eyebrow:** Tus resultados
- **Titular:** Estos se acercan a lo que buscas
- **Bajada:** Ninguno cumple todo lo que pediste. Cada uno cumple una parte.
- **Chips:** 6 o más personas · Camioneta o SUV · Híbrido
- **Tarjeta 1:** Si priorizas 7 puestos · Fortuner
  - **Lo que cumple:** 7 puestos en 3 filas · SUV grande de 4.795 mm de largo
  - **Qué es distinto:** No es híbrido: motor diésel 2.8 L o gasolina 2.7 L
- **Tarjeta 2:** Si priorizas que sea híbrido · RAV4
  - **Lo que cumple:** Motor híbrido de 2.5 L · SUV mediana con tracción 4x4
  - **Qué es distinto:** Tiene 5 puestos, no 7

**Con ventajas**

- **Titular:** La opción más cercana a lo que buscas
- **Chips:** 6 o más personas · $150 a $220 millones
- **Etiqueta:** Fortuner SR 2.8 Diésel 4x2 AT · $242.900.000
- **Qué cambia:** Se pasa $22.900.000 de tu presupuesto
- **Lo que ganas:** 7 puestos en 3 filas: el único del catálogo · 279 mm de altura al piso · Hasta 201 hp con el motor diésel 2.8 L

---

# PARTE E · Datos y lógica del prototipo

El detalle completo está en `ficha-datos-prototipo.md`.

## E.1 Modelos

| Modelo | Tipo | Motor | Desde | Puestos |
|---|---|---|---|---|
| Yaris HB | Automóvil · Hatchback | Híbrido 1.5 L | $89.900.000 | 5 |
| Corolla | Automóvil · Sedán | Híbrido 1.8 L | $109.900.000 | 5 |
| Corolla Cross | SUV compacta | Híbrido 1.8 L o gasolina 2.0 L | $139.900.000 | 5 |
| RAV4 | SUV mediana | Híbrido 2.5 L | $207.500.000 | 5 |
| Hilux | Pick-up doble cabina | Gasolina 2.7 L o diésel 2.4 / 2.8 L | $196.500.000 | 5 |
| Fortuner | SUV grande · 3 filas | Gasolina 2.7 L o diésel 2.8 L | $242.900.000 | 7 |

## E.2 Etiquetas y respuestas

| Modelo | Etiquetas |
|---|---|
| Yaris HB | Ciudad · Ahorro · Comodidad · Automóvil · Híbrido |
| Corolla | Ciudad · Ahorro · Comodidad · Tecnología · Automóvil · Híbrido |
| Corolla Cross | Ciudad · Espacio · Ahorro · Comodidad · Tecnología · SUV · Híbrido |
| RAV4 | Espacio · Ahorro · Comodidad · Tecnología · Potencia · Versatilidad · SUV · Híbrido |
| Hilux | Carga · Terreno · Potencia · Versatilidad · Pick-up · Gasolina o diésel |
| Fortuner | 7 puestos · Espacio · Terreno · Comodidad · Potencia · Versatilidad · SUV · Gasolina o diésel |

**Cómo se convierten las respuestas en etiquetas**

- **¿Cómo te mueves?:** Día a día en ciudad → Ciudad · Viajes en familia → Espacio · Destapado o terreno difícil → Terreno · Trabajo o carga pesada → Carga · Un poco de todo → Versatilidad. Carretera no suma.
- **Personas:** 6 o más → 7 puestos.
- **Prioridades, motor y tipo de carro:** cada respuesta suma su etiqueta. Seguridad no suma, porque los 6 modelos la cumplen.

**Cómo se arma el resultado**

- Solo entran los modelos cuyo precio "desde" no supera el tope del presupuesto elegido.
- Se ordenan por puntos y, si hay empate, por menor precio.
- Se muestran 1 destacado y hasta 2 alternativas.

---

# PARTE F · Registro de decisiones

| # | Decisión | Motivo |
|---|---|---|
| 1 | Pasar de una plataforma multimarca a una sola marca (Toyota) | Catálogo variado y necesidades diversas, ideal para demostrar la recomendación |
| 2 | Solo vehículos nuevos, Colombia, web desktop | Alcance acotado para el portafolio |
| 3 | Nombre: Toyota — Beyond the Model | Refleja el reto: ir más allá del modelo hacia la necesidad |
| 4 | Pasar de 30 a 18 y luego a 11 módulos | El diseño se hace en el prototipo y la validación se agrupa en un solo módulo |
| 5 | IA sutil y contextual, no un chatbot | Interés en la IA, pero con dudas sobre precisión y confianza |
| 6 | Separar la IA, la lógica y los datos | Recomendaciones consistentes y explicables |
| 7 | Recomendar modelos y consultar versiones | Evitar atribuir características de una versión a todas |
| 8 | Experiencia como módulo en el home, accesible desde el menú | Resolver el proceso sin rediseñar todo el sitio |
| 9 | Nombre visible: "Encuentra tu Toyota" | Claro para el usuario; "Beyond the Model" queda como nombre del proyecto |
| 10 | Un solo happy path que siempre da un resultado | Experiencia simple de entender |
| 11 | Tres variantes de resultado; dos como pantallas sueltas | Mostrar cómo se comunica una coincidencia parcial sin complicar el flujo |
| 12 | Quitar la pregunta "¿Hay algo en lo que no cederías?" | No es necesaria sin lógica de variantes |
| 13 | Lógica por puntos y presupuesto como único filtro | Simple, explicable y siempre con resultado |
| 14 | Seis modelos del prototipo | Cubren ciudad, familia, viajes, trabajo y 7 puestos, entre $89,9 M y $326,9 M |
| 15 | Fuera del MVP: calculadora de costos, favoritos y RAV4 enchufable | Mantener el alcance enfocado |
| 16 | Baúl y consumo como "No disponible" | Las fichas oficiales no los traen; el prototipo no inventa datos |
| 17 | Sistema visual basado en el manual de Toyota y en la referencia editorial | Coherencia de marca con un estilo premium |

---

# PARTE G · Pendientes y verificaciones antes de publicar

1. **Aprobar o quitar** la pantalla de análisis ("Buscando tu Toyota").
2. **Validación:** probar el prototipo con personas o declarar la limitación en el caso. Completar B.12 con evidencia real.
3. **Fuentes:** verificar todas las fuentes de C.2 antes de citarlas. Las cifras de EE. UU. deben presentarse como contexto, no como datos de Colombia.
4. **RAV4:** confirmar medidas, potencia y altura al piso en la ficha oficial.
5. **Precios:** están vigentes hasta el 30 nov 2026. Actualizarlos o indicar la fecha de consulta en el caso.
6. **Tipografía:** usar Toyota Type en la versión final (descarga con acceso en brand.toyota.com).
7. **Imágenes:** reemplazar las siluetas por fotografía con permiso de uso, o mantenerlas como referencia.
8. **Uso de marca:** mantener visible que es un concepto de portafolio, no un sitio oficial.
9. **Capítulo Experience Design:** confirmar si se incluye en la navegación del caso (secciones 11 y 12).
