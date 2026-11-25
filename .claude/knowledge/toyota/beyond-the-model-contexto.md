# Toyota — Beyond the Model · Documento de contexto

Documento interno de trabajo: no es copy para el portafolio. Consolida todas las decisiones tomadas hasta el 18 nov 2026, módulo por módulo.

**Estados**

- **[Aprobado]**: decisión cerrada.
- **[Pendiente]**: propuesta sin aprobar.
- **[Por hacer]**: todavía no se trabaja.

**Estado actual:** módulos 01 a 10 aprobados. Lo siguiente es diseñar en Claude y después completar el módulo 11 con evidencia real.

---

## 0. Reglas del proyecto

**Metodología.** Se trabaja un módulo a la vez: objetivo → investigación y análisis → definiciones → entregables → cierre y aprobación. Cada ficha de módulo tiene: A. Objetivo, B. Investigación, C. Hallazgos, D. Definiciones, E. Entregables, F. Copy final, G. Estado y pendientes.

**Sistema de documentación**

- Nivel 1 · Case Study Content: solo lo que se publica (copies, títulos, hallazgos, diagramas, decisiones explicadas).
- Nivel 2 · Project Documentation: investigación, fuentes, hipótesis, alternativas, reglas y lo descartado con su motivo.
- Decision Log transversal: qué se decidió, cuándo, por qué y si sigue vigente.

**Reglas de evidencia**

1. No mencionar la IA como herramienta usada para producir la documentación del caso.
2. No inventar fuentes, estadísticas, entrevistas ni resultados.
3. Diferenciar información encontrada, investigación secundaria, hallazgos, hipótesis, supuestos de diseño, propuesta conceptual y validación (solo con pruebas que sí se hayan hecho).
4. Si falta información, usar supuestos explícitos y justificarlos.
5. Ejemplo: no decir "los usuarios de Toyota se sienten confundidos"; sí decir "el análisis del catálogo evidencia una diversidad de modelos, versiones y características que representa una oportunidad...".
6. No borrar decisiones anteriores; registrar qué cambió y por qué.
7. Un módulo no se cierra hasta aprobarlo.

**Importante:** no hay investigación primaria (entrevistas ni pruebas). Problema, público, necesidades, JTBD y canvas son hipótesis de diseño sustentadas en el análisis del catálogo y el benchmark.

---

## 1. Ficha del proyecto

| Dimensión | Decisión |
|---|---|
| Proyecto | Toyota — Beyond the Model |
| Tagline | De elegir un modelo a descubrir el vehículo adecuado |
| Reto | El reto no consiste en mostrar más vehículos, sino en ayudar a las personas a entender cuál responde mejor a sus necesidades y por qué |
| Tipo | Experience Redesign · Vehicle Discovery & Recommendation |
| Naturaleza | Concepto independiente para portafolio. No es oficial ni está aprobado por Toyota |
| Marca / mercado | Toyota Colombia |
| Plataforma | Web, solo desktop (sin mobile ni responsive) |
| Catálogo | Vehículos nuevos |
| Rol | Product Designer, End-to-End Experience Design (proyecto individual) |
| Integración | Módulo dentro del home de Toyota Colombia donde ocurre todo el recorrido. También se llega desde el menú |
| Nombre visible | "Encuentra tu Toyota" (Beyond the Model es el nombre del proyecto en el portafolio) |
| Diseño de pantallas, interacción, sistema visual y prototipo | Directamente en Claude |

**Tres pilares del proyecto (alcance):**

1. Rediseño de la experiencia de descubrimiento.
2. Nuevo flujo de asesoría y recomendación.
3. Incorporación de IA a la experiencia.

**Tres capacidades del producto:** Descubrir · Recomendar · Explicar.

---

## 2. Estructura del caso (11 módulos)

Pasó de 30 a 18 y luego a 11 módulos. El antiguo módulo 10 (Business Rules) se integra en 09 y 10. Los módulos 12 a 15 (wireframes, interacción, sistema visual, prototipo) se hacen en Claude. Los módulos 16 a 18 se unieron en uno solo.

| Capítulo | Módulo | Estado |
|---|---|---|
| 01 Overview | 01 Project Overview | Aprobado |
| 02 Discovery | 02 Context & Opportunity | Aprobado |
| | 03 Research & Benchmark | Aprobado |
| | 04 Problem & User Definition | Aprobado |
| | 05 Jobs to Be Done | Aprobado |
| 03 Strategy | 06 Value Proposition & Product Goals | Aprobado |
| | 07 Product Concept & AI Strategy | Aprobado |
| | 08 Data Architecture | Aprobado |
| 04 Product Definition | 09 MVP & Feature Definition | Aprobado |
| | 10 Information Architecture & User Flows | Aprobado |
| 05 Validation & Learnings | 11 Validation, Results, Learnings & Next Steps | Por hacer. Se llena con evidencia real |

Navegación del caso en el portafolio: nombres de capítulo en inglés, menú progresivo y agrupado (no mostrar todos los módulos a la vez), nombres cortos en el menú y títulos completos dentro de cada sección.

---

## 3. Antecedentes (antes de Toyota)

- Se empezó buscando retos de e-commerce para portafolio UX y se llegó a una web automotriz.
- Primero se investigó una plataforma multimarca independiente. Competidores revisados: CarroYa, TuCarro, Autocosmos, Chileautos, Kavak, CarGurus, Consumer Reports y Drively. Señales de usuarios: filtros que se pierden al regresar, faltan filtros por carrocería, no hay comparador, anuncios desactualizados, precio publicado distinto del final.
- Luego se pasó a una sola marca, solo vehículos nuevos, modelo híbrido (guiado + asistencia) e IA sutil.
- Referencia Honda Motos (HTML): es una home con catálogo, filtros y carrusel; no tiene el flujo de asesoría implementado. Lo que se rescata es la idea de que el usuario entra por asesoría y no por catálogo.
- Se eligió Toyota por la variedad de su catálogo (19 resultados en Colombia: autos, SUV, pick-ups, híbridos, eléctricos y GR) y por la diversidad de necesidades que cubre.
- **Modelos del prototipo (aprobados):** Yaris HB, Corolla, Corolla Cross, RAV4, Hilux y Fortuner. El detalle está en el módulo 10, sección "Catálogo del prototipo".

---

## 4. Módulo por módulo

### 01 — Project Overview · [Aprobado]

- **Descripción:** Toyota — Beyond the Model es una propuesta conceptual de rediseño de la experiencia digital de Toyota Colombia, enfocada en transformar la manera en que las personas descubren y eligen un vehículo mediante asesoría personalizada y recomendaciones inteligentes.
- **Contexto:** Toyota tiene un portafolio que responde a diferentes necesidades, estilos de vida y preferencias. Para quien no tiene claro qué tipo de vehículo busca, explorar las alternativas y entender sus diferencias puede ser complejo.
- **Problema:** las personas que buscan un vehículo pueden tener dificultades para identificar qué modelo se adapta mejor a sus necesidades, por la cantidad de alternativas y la complejidad de comprender sus características, beneficios y diferencias.
- **Problema en una frase:** encontrar un vehículo adecuado no siempre es fácil cuando no sabes qué modelo responde mejor a lo que necesitas.
- **Oportunidad:** transformar el descubrimiento de vehículos Toyota en un proceso más intuitivo y personalizado, donde las necesidades del usuario sean el punto de partida.
- **Solución:** experiencia web desktop que, con asesoría guiada e IA, interpreta necesidades y preferencias para recomendar vehículos Toyota compatibles y explicar sus beneficios y diferencias. Complementa el catálogo, no lo reemplaza.
- **Concepto central:** de explorar vehículos a descubrir cuál es el adecuado para ti.
- **Objetivo general:** rediseñar la experiencia de descubrimiento para facilitar la identificación de modelos según las necesidades y preferencias de cada usuario.
- **Objetivos específicos:** simplificar el descubrimiento, personalizar la asesoría, facilitar la comparación, integrar IA.
- **Alcance:** experiencia de descubrimiento, flujo de asesoría, asistencia con IA, sistema de recomendación y evaluación de alternativas.
- **Fuera de alcance:** rediseño completo del sitio, mobile/responsive, compra, pagos y financiación, concesionarios, reservas de test drive, marketplace multimarca.
- **Entregables:** investigación y análisis, definición de producto, arquitectura UX, diseño UX/UI desktop, sistema visual, prototipo funcional y caso de estudio.
- **Rol:** Product Designer end-to-end (research, estrategia, definición de producto, UX, UI, experiencia de IA, prototipado y validación). Proyecto individual; no presentarlo como trabajo con un equipo real.

### 02 — Context & Opportunity · [Aprobado]

**02.1.1 Contexto de Toyota Colombia**

- Seis categorías: Autos, Camionetas y SUV, Pick-ups, Híbridos, Eléctricos, Deportivos GR. También usados y servicios.
- 19 resultados en el catálogo. Filtros por tipo, precio, asientos, modelo y año. Las categorías se superponen.
- Herramientas: catálogo, cotizador/configurador, test drive, concesionarios, simulador de carga, alquiler y financiación.

**02.1.2 Experiencia actual de descubrimiento**

- Recorrido identificado: home → catálogo (filtros y tarjetas) → detalle del vehículo → cotización.
- Las tarjetas muestran nombre, motorización, mensaje comercial, precio sugerido, ver detalles y cotizar.
- Hallazgos: la navegación parte de categorías y modelos; los filtros son por atributos del vehículo; las tarjetas resumen características pero no su relevancia para la persona; las herramientas comerciales están separadas.
- En las páginas revisadas no se encontró un recorrido de asesoría que primero interprete necesidades y luego recomiende. Eso no prueba que no exista en otros canales.
- Copy: "Una experiencia de exploración centrada en el producto." El desafío es pasar de facilitar la búsqueda de modelos a orientar la elección del vehículo.

**02.1.3 Síntesis y oportunidad**

- Tres observaciones: diversidad de productos, exploración centrada en el catálogo, información repartida en distintas etapas.
- Oportunidad: "De explorar modelos a descubrir posibilidades." No se trata de agregar información, sino de cambiar el punto de partida: empezar por la persona.
- Principios iniciales: user-centered discovery, guided exploration, explainable recommendations, contextual AI.
- Copy: "El punto de partida no debería ser el vehículo, sino la persona."

### 03 — Research & Benchmark · [Aprobado]

**03.1 Alcance.** Cinco referencias evaluadas con siete criterios (descubrimiento, navegación, filtros, información, comparación, asesoría, conversión):

| Referencia | Tipo | Fortaleza | Oportunidad observada |
|---|---|---|---|
| Kia Colombia | Directo | Catálogo, fichas y comparador | Conectar asesoría y recomendación antes de cotizar |
| Hyundai Colombia | Directo | Experiencias visuales, comparador, reserva online | Traducir lo técnico a necesidades cotidianas |
| Renault Colombia | Directo | Comunicación desde estilos de vida | Orientar antes de las herramientas comerciales |
| Volvo Cars | Experiencia premium | Beneficios, tecnología, comparación, configurador | Recomendar a partir de necesidades |
| Autocosmos | Multimarca | Amplitud, filtros, comparación | Convertir información en orientación |

**03.3 Cinco hallazgos transversales**

1. La exploración parte del producto.
2. Los filtros exigen conocimiento previo.
3. La información técnica necesita contexto.
4. La comparación ocurre después de elegir los modelos.
5. La asesoría se concentra en las etapas comerciales.

**Cuatro oportunidades:** descubrimiento centrado en necesidades, asesoría guiada y personalizada, recomendaciones explicables, comparación orientada a la decisión.

**03.4 Conclusiones.** Descubrir desde el usuario; reducir la complejidad de elección; recomendaciones con argumentos; comparación que facilite decidir.

**Cinco principios de diseño:** User-centered discovery · Guided exploration · Explainable recommendations · Contextual AI · Decision-oriented comparison.

**Decisiones derivadas:** entrada por necesidades, preguntas en lenguaje cotidiano, explicar beneficios por necesidad, recomendar primero y comparar después, orientar antes de cotizar.

**Ocho criterios de experiencia**

1. Se puede iniciar sin conocer los modelos Toyota.
2. Las preguntas son claras y se relacionan con usos reales.
3. No se pide información que no sirva para recomendar.
4. Solo se recomiendan vehículos del catálogo Toyota Colombia definido.
5. Cada recomendación explica su compatibilidad.
6. Las especificaciones salen de fuentes verificables.
7. El usuario puede entender las diferencias entre alternativas.
8. La IA complementa el recorrido y no es una barrera.

### 04 — Problem & User Definition · [Aprobado]

**04.1 Problem Definition**

- Descomposición: situación (no sabe qué modelo elegir) → dificultad (interpretar y evaluar) → consecuencia (incertidumbre) → necesidad de diseño (conectar necesidades con vehículos).
- Cuatro factores (hipótesis): exploración centrada en productos, complejidad de la información, dificultad para relacionar necesidades con características, comparación sin orientación personalizada.
- Punto crítico: la brecha entre la información disponible y la capacidad de interpretarla para una decisión personal.
- Formulación: "La dificultad no está solamente en encontrar vehículos, sino en comprender cuáles responden mejor a las necesidades de cada persona."

**04.2 Target Audience**

- Segmentos: primerizos (alta), necesidades nuevas (alta), renovación (alta), preferencias definidas (complementario).
- Público principal: personas que están considerando comprar un vehículo nuevo y necesitan orientación para identificar cuál se adapta mejor a sus necesidades.
- Colombia; cualquier nivel de conocimiento automotriz. Sin restricción por edad, género ni nivel socioeconómico.
- Secundario: quien ya tiene categoría o modelo en mente y quiere comparar versiones.
- Fuera de foco: repuestos y accesorios, usados multimarca, solo posventa, quien ya decidió y solo quiere cotizar.

**04.3 Needs & Pain Points**

- Necesidades: funcionales, de información, emocionales y de orientación.
- Seis pain points: no saber por dónde empezar, interpretar lo técnico, no saber qué priorizar, distinguir alternativas, incertidumbre, entender por qué se recomienda.
- Motivaciones: adaptación, practicidad, comodidad, seguridad, economía, confianza.
- Prioridad alta: identificar el vehículo adecuado, entender por qué se recomienda, ver diferencias relevantes.

**04.4 Problem Statement & HMW**

> Elegir un vehículo adecuado puede convertirse en un proceso complejo cuando las personas no tienen claridad sobre qué necesitan y deben interpretar múltiples modelos, características y especificaciones para encontrar una alternativa compatible con su situación. Las personas necesitan una manera más sencilla de conectar sus necesidades y preferencias con los vehículos disponibles, comprender sus características y evaluar las alternativas que mejor responden a su contexto.

- Cinco HMW: descubrimiento, comprensión, personalización, evaluación y confianza.
- **Pregunta central:** ¿Cómo podríamos interpretar las necesidades y preferencias de cada persona para ayudarla a descubrir qué vehículo Toyota se adapta mejor a su contexto?
- Copy: "El desafío no es encontrar más vehículos, sino entender cuál es el adecuado."

### 05 — Jobs to Be Done · [Aprobado]

**05.1 Situaciones.** Primer vehículo, nuevas necesidades, renovación. Progreso compartido: de "tengo que comprar un vehículo pero no sé cuál" a "comprendo mis necesidades, identifico alternativas y sé cuál me sirve" y, de ahí, a una decisión informada y segura. Motivaciones: movilidad, adaptación, mejoramiento, tranquilidad.

**05.2 Core Job**

> Encontrar un vehículo que se adapte a mis necesidades, preferencias y circunstancias actuales, para resolver mi movilidad y tomar una decisión de compra con confianza.

Job Statement: *Cuando* necesito adquirir un vehículo nuevo porque mis necesidades de movilidad o circunstancias personales han cambiado, *quiero* identificar qué alternativas responden mejor a mis necesidades y preferencias, *para* elegir un vehículo que se adapte a mi contexto y sentirme seguro con mi decisión.

El trabajo es independiente de la solución: no es "usar un recomendador con IA".

**05.3 Jobs**

- Funcionales F01 a F06 (prioridad principal): identificar el tipo de vehículo, reconocer características importantes, explorar según preferencias y presupuesto, entender especificaciones, evaluar diferencias, seleccionar.
- Emocionales E01 a E05 (complementarios): seguridad, menos incertidumbre, comprender, confiar en los argumentos, tranquilidad.
- Sociales S01 a S04 (contextuales, hipótesis): familia y acompañantes, reflejar su estilo de vida, poder justificar la elección, responsabilidades.

**05.4 Desired Outcomes.** Quince resultados (DO01 a DO15) en cinco dimensiones: claridad, relevancia, comprensión, confianza y eficiencia. Prioridad alta: relevancia y comprensión; media: claridad y confianza; complementaria: eficiencia.

Siete criterios para evaluar el prototipo: claridad, relevancia, comprensión, explicabilidad, comparación, confianza, eficiencia. Todavía sin metas numéricas.

Síntesis: "El usuario no busca solamente un vehículo. Busca la confianza de estar eligiendo uno adecuado para su vida."

### 06 — Value Proposition & Product Goals · [Aprobado]

**06.1 Propuesta de valor**

- Promesa: **"Encuentra el Toyota que se adapta a tu vida."**
- Componentes: descubrimiento guiado, personalización, recomendaciones relevantes, explicaciones claras.
- Dimensiones de valor: claridad, relevancia, comprensión, confianza.
- Statement: *Para* personas que consideran adquirir un vehículo nuevo y necesitan orientación…, *Beyond the Model es* una experiencia digital de descubrimiento y recomendación personalizada, *que* les permite explorar alternativas Toyota compatibles, comprender sus beneficios y evaluar sus diferencias, *para* tomar una decisión más clara, informada y fundamentada.

**06.2 Value Proposition Canvas**

- Pains P01 a P06 y Gains G01 a G06.
- Productos y servicios: asesoría guiada, interpretación inteligente, recomendaciones personalizadas, explicación de beneficios, comparación contextualizada.
- Value fit: transformar la información del catálogo Toyota en orientación personalizada.

**06.3 Visión y diferenciación**

- Visión: transformar la manera en que las personas descubren y eligen un vehículo Toyota.
- Diferenciadores: needs-first discovery, contextual AI, explainable recommendations, decision-oriented experience.
- Principios: personalización, transparencia, relevancia, control, confiabilidad.

**06.4 Objetivos y criterios de éxito**

| Objetivo | Criterio de éxito | Métrica principal |
|---|---|---|
| PG01 Descubrimiento | Entiende las preguntas e identifica sus prioridades | Comprensión del recorrido |
| PG02 Personalización | Las recomendaciones corresponden a lo que expresó | Relevancia percibida |
| PG03 Comprensión | Entiende beneficios y características | Comprensión de beneficios |
| PG04 Evaluación | Identifica diferencias relevantes | Efectividad de comparación |
| PG05 Confianza | Entiende por qué se le recomienda | Confianza (escala antes y después) |

- Métricas adicionales: finalización de la asesoría (transversal) y comprensión de recomendaciones.
- No se miden resultados comerciales (ventas, cotizaciones, conversión): el prototipo no opera dentro del ecosistema comercial de Toyota.

### 07 — Product Concept & AI Strategy · [Aprobado]

**07.1 Concepto**

- Experiencia digital de descubrimiento y asesoría personalizada.
- Lo que no es: chatbot genérico, catálogo tradicional, marketplace, configurador ni sistema de compra. No reemplaza a los asesores ni decide por el usuario.

**07.2 Journey de seis etapas:** Descubrir → Comprender → Interpretar → Recomendar → Evaluar → Continuar.

- Principios: progresión natural, preguntas relevantes, transparencia, control, continuidad.
- Recorrido progresivo pero no rígido: se puede volver, editar, ver detalle y comparar sin perder el progreso.

**07.3 Estrategia de IA**

- Capa contextual, no chatbot.
- Cinco responsabilidades: interpretar necesidades, identificar criterios, personalizar, explicar, facilitar la evaluación.
- Cuatro capas: Input → Interpretation (IA) → Matching (lógica de compatibilidad) → Output.
- **La IA interpreta y explica, la lógica de compatibilidad recomienda y los datos verificados respaldan.** La IA no inventa datos.

**07.4 Interacción y confianza**

- Cuatro formas de intervención: asistencia contextual, explicación de recomendaciones, orientación durante la evaluación, adaptación cuando cambian las preferencias.
- Seis principios de interacción: contextualidad, claridad, transparencia, control, consistencia, proporcionalidad (la IA no interviene si basta una interacción simple).
- Cinco mecanismos de confianza: explicar el porqué, mostrar información verificable, diferenciar hechos de interpretaciones, reconocer limitaciones, dejar la decisión al usuario.
- Reglas:
  - El usuario revisa su perfil antes de recibir recomendaciones.
  - Puede editar en cualquier momento.
  - Las recomendaciones se actualizan y siempre muestran sus razones.
  - Se pueden consultar los datos que respaldan cada explicación.
  - **No se muestra una puntuación de compatibilidad sin una metodología definida.**
  - La IA no presiona al usuario para elegir.
- Ejemplo ilustrativo usado: Corolla Cross para un perfil familiar, de ciudad con viajes, que prioriza espacio y comodidad (no es una recomendación validada). Microcopy de ejemplo: "Tu elección sigue siendo tuya."

### 08 — Data Architecture · [Aprobado]

**08.1 Cuatro dominios:** User Data, Vehicle Data, Recommendation Data, Experience Data.

- Fuentes: usuario, catálogo Toyota, lógica del producto, IA (solo interpretaciones y explicaciones) y sistema de experiencia.
- Reglas: trazabilidad, actualización, consistencia, privacidad, separación.

**08.2 Siete entidades:** User Profile, User Response, Vehicle, Vehicle Version, Vehicle Attribute, Recommendation, User Journey.

- **Modelo vs. versión:** primero se recomiendan modelos y luego se consultan las versiones. Se aclara cuándo un dato es del modelo o de una versión concreta, y no se atribuye a todas las versiones algo que solo tienen algunas.

**08.3 Perfil en seis dimensiones** (no son seis pasos del cuestionario): contexto de movilidad, espacio y pasajeros, presupuesto (sin ingresos ni datos financieros sensibles), preferencias del vehículo, prioridades (seguridad, espacio, comodidad, economía, tecnología, desempeño, versatilidad) y contexto de compra.

- Atributos en siete categorías: identificación, capacidad, motorización, uso y desempeño, seguridad, confort y tecnología, información comercial.
- Un atributo desconocido no se interpreta como presente ni como ausente: se distingue entre confirmado, no disponible y no aplica.
- Tres tipos de necesidad: restricciones obligatorias, preferencias prioritarias, preferencias flexibles o desconocidas.

**08.4 Flujo de datos en seis etapas:** recopilación → estructuración → interpretación (IA) → evaluación de compatibilidad → generación → presentación.

- Siete principios de gobernanza: exactitud, trazabilidad, consistencia, vigencia, privacidad, integridad, control del usuario.

### 09 — MVP & Feature Definition · [Aprobado]

**09.1 MVP.** Web desktop de descubrimiento y asesoría personalizada: compartir necesidades → recibir recomendaciones Toyota compatibles → entender las razones.

- Seis capacidades: descubrimiento guiado, construcción del perfil, interpretación inteligente, recomendación, explicación, evaluación.
- Fuera: compra y pago, financiación, reservas, test drive, concesionarios, marketplace, app, cuentas y perfiles persistentes, historial, integraciones comerciales. El progreso sí se conserva durante la sesión.
- Criterios de inclusión: valor central, necesidad funcional, coherencia, viabilidad, validación.

**09.2 y 09.3 Inventario (33) y priorización MoSCoW**

| ID | Funcionalidad | Prioridad |
|---|---|---|
| F01 | Product Introduction | Must |
| F02 | Start Advisory | Must |
| F03 | Journey Guidance | Should |
| F04 | Guided Questionnaire | Must |
| F05 | Answer Selection | Must |
| F06 | Contextual Questions | Should |
| F07 | Progress Indicator | Must |
| F08 | Answer Editing | Must |
| F09 | Optional Responses ("no sé", "sin preferencia") | Must |
| F10 | Profile Generation | Must |
| F11 | Priority Identification | Must |
| F12 | Constraint Identification | Must |
| F13 | Profile Review | Should |
| F14 | Response Interpretation (IA) | Must |
| F15 | Context Understanding (IA) | Should |
| F16 | Ambiguity Detection (IA) | Could |
| F17 | Contextual Explanation (IA) | Should |
| F18 | Contextual Assistance (IA conversacional) | Could |
| F19 | Vehicle Catalogue | Must |
| F20 | Compatibility Evaluation | Must |
| F21 | Recommendation Generation | Must |
| F22 | Recommendation Ranking | Could |
| F23 | Recommendation Explanation | Must |
| F24 | Recommendation Update | Should |
| F25 | Vehicle Detail | Must |
| F26 | Benefit Explanation | Could |
| F27 | Vehicle Comparison (básica) | Must |
| F28 | Relevant Differences | Should |
| F29 | Version Comparison | Could |
| F30 | Journey State | Must |
| F31 | Return to Profile | Must |
| F32 | Recommendation Navigation | Must |
| F33 | Alternative Exploration | Could |

- Total: 20 Must, 7 Should, 6 Could. No hay Won't.
- Decisiones: la comparación básica es Must y la de versiones es Could; la interpretación de IA es Must y la asistencia conversacional avanzada puede esperar.
- Dependencias: F10 ← F04 y F05; F20 ← F10, F19 y atributos; F21 ← F20; F23 ← F21 y datos; F27 ← F19 y F25.
- Para el prototipo: catálogo con datos seleccionados y verificados, compatibilidad por reglas y explicaciones preparadas a partir de los resultados. La IA puede estar simulada, pero **no se debe presentar una simulación como si fuera una integración real**.

**09.4 Experiencia del MVP**

- Cinco momentos: descubrir → responder la asesoría → comprender el perfil → recomendaciones → evaluar.
- Siete bloques funcionales: Introducción, Asesoría, Perfil, Interpretación, Recomendación, Explicación, Evaluación.
- Ocho comportamientos transversales: avanzar y regresar; editar sin perder el progreso; "no sé" no cuenta como preferencia negativa; respetar las restricciones cuando hay datos para comprobarlas; razones verificables; actualizar con los cambios; señalar los datos faltantes sin inventarlos; el usuario decide.
- Criterios de completitud: completar la asesoría, perfil coherente, relación necesidades–atributos, recomendaciones compatibles, explicación por recomendación, consultar y comparar, modificar y ver resultados actualizados.

### 10 — Information Architecture & User Flows · [Aprobado]

**10.1 Arquitectura**

- Se parte de la opción A (integrado al ecosistema Toyota). Se descartaron la plataforma independiente y la herramienta dentro del catálogo.
- **Es un módulo dentro del home de Toyota y todo el recorrido ocurre ahí.** Cada paso reemplaza al anterior dentro del módulo, sin abrir páginas nuevas.
- Acceso: desde el home o desde el menú del sitio, que lleva al módulo.
- Nombre visible: "Encuentra tu Toyota".
- Salida: enlaces a las páginas existentes de Toyota (cotizar, test drive). Esas no se diseñan.
- No se rediseña el resto del sitio. El módulo complementa el catálogo, no lo reemplaza.

**10.2 Pasos dentro del módulo**

1. **Inicio:** qué es, qué obtienes y el botón para empezar.
2. **Asesoría guiada en 5 bloques:**
   - Tu momento.
   - Cómo te mueves.
   - Quién viaja contigo y qué llevas.
   - Qué es lo más importante.
   - Presupuesto y preferencias (opcional).
3. **Tu perfil:** resumen de respuestas, con opción de editar cualquiera.
4. **Resultado:** siempre aparece una de las tres variantes (ver 10.4).
5. **Detalle y comparación:** dentro del módulo. El detalle se abre como un panel expandido y se comparan hasta 3 vehículos.
6. **Continuar en Toyota.**

Equivalencia con el journey del 07.2: Descubrir = Inicio · Comprender = Asesoría · Interpretar = Perfil · Recomendar = Resultado · Evaluar = Detalle y comparación · Continuar = Salida a Toyota.

**10.3 User flow**

- Un solo flujo, el happy path, que siempre termina en un resultado: Menú o Home → Inicio → Asesoría → Perfil → Evaluación de compatibilidad → Resultado (una de tres variantes) → Detalle y comparación → Continuar en Toyota.
- "No sé" es una respuesta válida y nunca bloquea el avance.
- Editar el perfil es una acción dentro del mismo flujo, no un flujo aparte.

**10.4 Variantes de resultado (pantallas sueltas)**

No se documentan casos especiales: se diseña el happy path y tres versiones de la pantalla de resultado.

| Variante | Cuándo aparece | Qué muestra |
|---|---|---|
| Coincidencia total | Hay modelos que cumplen lo que pidió el usuario | "Estos Toyota se ajustan a lo que buscas", con las razones de cada uno |
| Similar a tu perfil | Ninguno cumple todo, pero hay modelos cercanos | "Estos se acercan a lo que buscas": qué cumplen y en qué se diferencian |
| Con ventajas | Un modelo no cumple algo, pero compensa en otra cosa | La alternativa con sus ventajas destacadas frente a lo que se pidió |

En las variantes 2 y 3 siempre se dice qué es distinto a lo que pidió el usuario (principio de transparencia del 07).

**Cuántas recomendaciones por variante · [Aprobado]**

| Variante | Cuántas | ¿Ordenadas? |
|---|---|---|
| Coincidencia total | 1 destacada + hasta 2 más | Sí. La destacada es la que cubre más prioridades, explicado en texto ("cumple 3 de tus 4 prioridades"), sin puntajes |
| Similar a tu perfil | 2 | No. Se presentan como trade-off: "Si priorizas X…" / "Si priorizas Y…" |
| Con ventajas | 1 | No aplica. Una opción, con lo que cambia frente a lo pedido y lo que gana |

Nunca hay más de 3 resultados, que es el máximo de la comparación. El orden de la coincidencia total activa una versión simple de F22.

### Asesoría guiada · [Aprobado]

Son 5 bloques y 10 preguntas, una pregunta por pantalla, con "Atrás" siempre disponible. La barra de progreso muestra: Tu momento · Tu uso · Tu espacio · Tus prioridades · Tus preferencias. El copy completo y su terminología están en la carpeta `copy/`.

| Bloque | Pregunta | Opciones | Tipo |
|---|---|---|---|
| Tu momento | ¿En qué momento estás? | Voy a comprar mi primer carro · Quiero cambiar mi carro · Mis necesidades cambiaron · Solo estoy explorando | Una opción (no filtra) |
| Tu uso | ¿Para qué vas a usar el carro principalmente? | El día a día · Viajes en familia · Trabajo · Un poco de todo | Una opción |
| Tu uso | ¿Por dónde sueles manejar? | Ciudad · Carretera · Destapado o terreno difícil · Aún no lo sé | Varias |
| Tu espacio | ¿Cuántas personas viajan normalmente, contándote a ti? | 1 o 2 · 3 a 5 · 6 o más · Aún no lo sé | Una opción |
| Tu espacio | ¿Qué sueles llevar? | Maletas de viaje · Mercado y compras · Herramientas o carga pesada · Mascotas · Nada en especial | Varias |
| Tus prioridades | ¿Qué es lo que más te importa? (Elige hasta 3) | Espacio · Comodidad · Seguridad · Ahorro de combustible · Tecnología · Potencia · Versatilidad · Aún no lo sé | Hasta 3 |
| Tus preferencias (opcional) | ¿Cuánto tienes pensado invertir? (Usamos el precio sugerido de cada modelo) | Hasta $100 millones · $100 a $150 millones · $150 a $220 millones · Más de $220 millones · Prefiero no decirlo | Una opción |
| Tus preferencias | ¿Prefieres algún tipo de motor? | Híbrido · Gasolina o diésel · No tengo preferencia | Una opción |
| Tus preferencias | ¿Tienes un tipo de carro en mente? | Automóvil · Camioneta o SUV · Pick-up · No tengo preferencia | Una opción |
| Tus preferencias | ¿Hay algo en lo que no cederías? | Opciones armadas con las respuestas anteriores · Nada, soy flexible | Varias |

- CTA final: "Ver perfil".
- "Aún no lo sé" nunca filtra.
- Los indispensables se preguntan una sola vez, al final.
- Se sacaron dos preguntas del 08.3 (frecuencia de uso y nivel de claridad) porque no cambian la recomendación.
- Trato de "tú" y uso de "carro" inferidos del sitio de Toyota Colombia (supuesto, porque no hay manual de marca).

### Lógica del prototipo · [Aprobado, versión simple]

- **Un solo happy path** que siempre termina en un resultado: un Toyota destacado y hasta 2 alternativas. Las variantes "Similar" y "Con ventajas" quedan como pantallas sueltas de ejemplo, sin lógica.
- **Se quitó del prototipo la pregunta "¿Hay algo en lo que no cederías?".** La asesoría quedó en 9 preguntas y el 25 nov 2026 se integró en 4 (ver D.3 del caso).
- **Calculadora de costos y favoritos:** fuera del MVP.
- **Puntos por coincidencia:** cada respuesta que coincide con una etiqueta del modelo suma 1 punto. Gana el que más puntos tiene y, si hay empate, el más económico.
- **El presupuesto es el único filtro** (precio "desde" menor o igual al tope del rango). "Prefiero no decirlo" no filtra.
- **Seguridad no suma puntos** (la cumplen los 6), pero sí aparece en las razones.
- **Las razones del resultado** son frases fijas por modelo, basadas en la ficha. Se muestran hasta 3.

| Modelo | Etiquetas |
|---|---|
| Yaris HB | Ciudad · Ahorro de combustible · Comodidad · Automóvil · Híbrido |
| Corolla | Ciudad · Ahorro de combustible · Comodidad · Tecnología · Automóvil · Híbrido |
| Corolla Cross | Ciudad · Espacio · Ahorro de combustible · Comodidad · Tecnología · SUV · Híbrido |
| RAV4 | Espacio · Ahorro de combustible · Comodidad · Tecnología · Potencia · Versatilidad · SUV · Híbrido |
| Hilux | Carga · Terreno difícil · Potencia · Versatilidad · Pick-up · Gasolina o diésel |
| Fortuner | 7 puestos · Espacio · Terreno difícil · Comodidad · Potencia · Versatilidad · SUV · Gasolina o diésel |

Cómo se convierten las respuestas en etiquetas:

- **Uso:** El día a día → Ciudad · Viajes en familia → Espacio · Trabajo → Carga · Un poco de todo → Versatilidad.
- **Por dónde manejas:** Ciudad → Ciudad · Destapado → Terreno difícil.
- **Personas:** 6 o más → 7 puestos.
- **Qué llevas:** Herramientas o carga pesada → Carga. Maletas, mercado y mascotas no suman, porque no hay dato de baúl.
- **Prioridades:** cada una suma su etiqueta. Seguridad no suma.
- **Motor y tipo de carro:** suman su etiqueta.

Prueba: familia de 5, ciudad y carretera, $100 a $150 M, prioridades espacio y comodidad → Corolla Cross destacado, Yaris HB y Corolla como alternativas.

### Catálogo del prototipo · [Aprobado]

Consultado en el catálogo oficial de Toyota Colombia el 18 nov 2026 (20 vehículos en total). Precios sugeridos al público "desde":

| Modelo | Tipo | Motor | Desde | Necesidad que representa |
|---|---|---|---|---|
| Yaris HB | Automóvil | Híbrido | $89.900.000 | Ciudad, primer carro |
| Corolla | Sedán | Híbrido | $109.900.000 | Uso diario y confort |
| Corolla Cross | SUV compacta | Híbrido | $139.900.000 | Familia y versatilidad |
| RAV4 | SUV mediana | Híbrido | $207.500.000 | Viajes y aventura |
| Hilux | Pick-up | Gasolina / diésel | $196.500.000 | Trabajo y carga |
| Fortuner | SUV grande | Gasolina / diésel | $242.900.000 | 7 puestos y espacio (confirmar en ficha) |

Fuera del prototipo: versiones GR, Land Cruiser (Prado, 300, 79), Hilux Chasís y Overlander, bZ4X (eléctrico) y Yaris Cross ($126,9 M; se excluye para que las diferencias entre modelos sean más claras).

Escenarios de ejemplo para cada variante:

- **Coincidencia total:** familia de 5, ciudad y carretera, hasta $150 M → Corolla Cross.
- **Similar a tu perfil:** SUV híbrida de 7 puestos (no existe entre los 6) → Fortuner (7 puestos, no híbrida) y RAV4 (híbrida, 5 puestos).
- **Con ventajas:** SUV de hasta $130 M → Corolla Cross, que se pasa $9,9 M pero es la SUV híbrida que busca.

### 11 — Validation, Results, Learnings & Next Steps · [Por hacer]

Se completa con evidencia real del diseño, el prototipo y las pruebas hechas en Claude. No se inventan resultados.

---

## 5. Reglas de recomendación (referencia para construir en Claude)

1. Solo vehículos del catálogo Toyota Colombia definido.
2. Se recomiendan modelos primero y luego se consultan versiones. No se generalizan atributos de una versión a todas.
3. Las restricciones obligatorias excluyen alternativas cuando los datos permiten comprobarlo.
4. Las preferencias prioritarias pesan más que las flexibles. Las respuestas "no sé" o "sin preferencia" no se vuelven restricciones.
5. Un atributo desconocido no cuenta como presente ni como ausente (confirmado, no disponible o no aplica).
6. Cada recomendación guarda los criterios y datos que la justifican.
7. Si cambia una respuesta, se actualiza el perfil; si cambia una prioridad, se vuelve a evaluar; si se agrega una restricción, se excluye lo que no cumple; si no hay información suficiente, se dice.
8. No se muestra un puntaje de compatibilidad sin metodología.
9. La IA no inventa datos, no presenta interpretaciones como hechos, pide aclaración si algo es ambiguo y no presiona la decisión.

10. Siempre hay un resultado. Si nada cumple todo, se usa la variante "Similar a tu perfil" o "Con ventajas", diciendo qué es distinto (10.4).

---

## 6. Puntos abiertos

1. **Diseño en Claude:** inicio del módulo en el home, asesoría, perfil, las tres variantes de resultado, detalle y comparación.
2. **Ficha de datos de los 6 modelos:** armada en `ficha-datos-prototipo.md`, con 19 versiones y precios vigentes en noviembre de 2026. Pendiente de aprobación. Faltan datos de baúl y consumo, y la RAV4 está por confirmar.
3. **Preguntas de la asesoría:** aprobadas (ver módulo 10).
4. **Reglas respuesta → atributo:** definir qué atributo revisa cada respuesta y si cuenta como indispensable, prioridad o flexible. Esto decide qué variante de resultado aparece.
5. **Calculadora de costos y favoritos:** venían de la fase multimarca y no quedaron en el inventario de 33 funcionalidades, así que hoy están fuera.
6. **Investigación primaria:** ninguna. Para el módulo 11, planear al menos una ronda corta de pruebas del prototipo o declarar la limitación en el caso.
7. **Fuentes:** verificar las referencias externas (catálogo Toyota, sitios del benchmark) antes de citarlas en el portafolio.
