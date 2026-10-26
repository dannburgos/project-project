# Planti — Plan del caso de estudio

Documento de trabajo del caso de Planti en el portafolio. La fuente del
contenido es `PLANTI_CONTEXTO_MAESTRO.md` (copia del documento de Dann; el
original está en `Documents/Ref P/`).

## Acuerdos (21 de octubre de 2026)

- Cada proyecto tiene sus propios capítulos y su propio menú lateral. La
  cantidad varía por proyecto, nunca más de 10.
- Planti tiene **7 capítulos**. Se quitó "Aprendizajes" como capítulo; su
  contenido (alcance futuro y siguiente paso) se repartió en otros.
- Ninguna sección del documento maestro queda por fuera: todas tienen lugar.
- El documento maestro es una guía, no una ley: si Dann agrega una función que
  no estaba contemplada (aunque esté fuera del MVP), se agrega y se actualiza
  el caso. Se mantiene: la persona es simulada y no se inventan métricas.
- La persona (Laura) se construye en el sitio, no como imagen.
- El prototipo vive dentro de este proyecto (ver "Guía del prototipo").
- Forma de trabajo: primero un borrador completo del caso con los textos
  reales; después se itera capítulo por capítulo.
- Todo se diagrama de forma interactiva: el scroll es parte de la narrativa,
  con recursos visuales y microinteracciones cuidadas.

## Estructura

| Dónde                                   | Contenido                                                                                      | Secciones del documento maestro                                                      |
| --------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Banner                                  | Nombre, subtítulo, ficha, propuesta de valor, resumen y tipo de proyecto                       | 1 Overview · Resumen ejecutivo                                                       |
| Imagen principal                        | Tarjeta que crece con el scroll                                                                | Sale del prototipo                                                                   |
| 1. Problema                             | Contexto, idea central, problema, tres fricciones, cierre y nota metodológica                  | 2 Contexto · 3 Problema                                                              |
| 2. Usuario                              | Persona simulada (Laura), preguntas y respuestas simuladas, lo que no se hizo                  | 4 Usuario objetivo · 18 Estado ("no realizado")                                      |
| 3. Benchmark                            | Cuatro apps, ejes de comparación, síntesis y oportunidad                                       | 7 Benchmark                                                                          |
| 4. Concepto                             | Oportunidad, preguntas guía, idea principal, ciclo y tres pilares                              | 5 Oportunidad · 6 Concepto                                                           |
| 5. Definición                           | MVP (tres bloques y lo que queda fuera), navegación, decisiones clave y vistas complementarias | 8 MVP · 9 Arquitectura · 13 Vistas complementarias                                   |
| 6. Flujos                               | Los tres recorridos en pasos, sus pantallas y los flujos complementarios                       | 10, 11, 12 Flujos · 14 Flujos secundarios                                            |
| 7. Prototipo                            | Prototipo interactivo, cómo se construye, criterios de diseño y qué sigue                      | 15 Siguiente etapa · 16 Criterios · 18 Estado ("pendiente") · 1 Herramienta original |
| Reglas de trabajo (no van en la página) | Instrucciones de uso y gestión de cambios                                                      | 0 · 17 · reglas de 16 sobre no inventar datos                                        |

## Interacción por capítulo

El borrador trae lo común (los bloques aparecen al entrar en pantalla y el
menú lateral sigue la lectura). La interacción propia de cada capítulo se
diseña al iterarlo:

1. **Problema**: las frases clave aparecen palabra por palabra; las tres
   fricciones se encienden una a una con el scroll.
2. **Usuario**: la tarjeta de Laura se arma por partes; las preguntas y
   respuestas simuladas llegan como una conversación al bajar.
3. **Benchmark**: la tabla se llena celda por celda con el scroll; al pasar
   por una app se resalta su columna y al final se marca el espacio de Planti.
4. **Concepto**: el ciclo avanza paso a paso con el scroll; los pilares se
   apilan.
5. **Definición**: lo que entra al MVP se arma y lo que queda fuera se apaga;
   el mapa de navegación dibuja sus conexiones.
6. **Flujos**: sin capturas de pantalla (decisión de Dann); se diseñan de
   forma dinámica y visualmente atractiva al iterar el capítulo.
7. **Prototipo**: el celular sube a su lugar; un clic activa el prototipo y
   se puede abrir en pantalla completa.

## Guía del prototipo

- **Dónde se diseña**: en su propio espacio dentro del proyecto,
  `src/domains/planti/` (componentes, textos y lógica del prototipo) y
  `src/styles/domains/planti/` (su sistema de diseño). No usa nada del
  portafolio, para que sus estilos no se mezclen.
- **Dónde se ve solo**: en `/prototypes/planti`, a pantalla completa y sin
  la barra, el cursor ni el scroll suave del portafolio.
- **Cómo llega al caso**: el capítulo "Prototipo" muestra esa misma dirección
  dentro de un celular. Todo lo que se cambie en el prototipo se ve en el caso
  sin hacer nada más.
- **Cómo trabajarlo**: en un chat aparte que trabaje solo en esas carpetas,
  para no pisar el trabajo de la página del caso.
- **Otros proyectos**: el mismo esquema (`src/domains/<proyecto>/` y
  `/prototypes/<proyecto>`).

## Pendientes

Se revisan al iterar el capítulo al que pertenecen. Los que bloquean varios
capítulos (marcados con ●) se resuelven aparte, cuanto antes.

| Estado            | Pendiente                                                                 | Dónde va                        | Quién                       |
| ----------------- | ------------------------------------------------------------------------- | ------------------------------- | --------------------------- |
| Hecho             | Categoría: Estilo de vida                                                 | Ficha del banner                | Dann                        |
| Descartado        | Año: no se usa en la ficha de ningún proyecto                             | —                               | Dann                        |
| ● Pendiente       | Sistema de diseño de Planti                                               | `src/styles/domains/planti/`    | Dann                        |
| ● Pendiente       | Prototipo interactivo (vibe coding)                                       | `src/domains/planti/` · Cap. 7  | Dann                        |
| Hecho en borrador | Contenido propio y menú propio por proyecto                               | Página del caso                 | Claude                      |
| Hecho en borrador | Textos de los 7 capítulos desde el documento maestro                      | Todo el caso                    | Claude escribe, Dann revisa |
| Hecho en borrador | Tarjeta de la persona (Laura)                                             | Cap. 2                          | Claude                      |
| Pendiente         | Foto o ilustración de Laura (o ninguna)                                   | Cap. 2                          | Dann decide                 |
| Hecho en borrador | Preguntas y respuestas simuladas                                          | Cap. 2                          | Claude                      |
| Descartado        | Tabla del benchmark (4 apps × 8 ejes): Dann prefirió una versión sencilla | Cap. 3                          | —                           |
| Hecho en borrador | Fricciones, pilares y decisiones en tarjetas                              | Cap. 1, 4 y 5                   | Claude                      |
| Hecho en borrador | Ciclo del concepto                                                        | Cap. 4                          | Claude                      |
| Hecho en borrador | MVP: lo que entra y lo que queda fuera                                    | Cap. 5                          | Claude                      |
| Hecho en borrador | Mapa de navegación                                                        | Cap. 5                          | Claude                      |
| Hecho en borrador | Recorrido de cada flujo en pasos                                          | Cap. 6                          | Claude                      |
| Pendiente         | Flujos dinámicos y visualmente atractivos, sin capturas de pantalla       | Cap. 6                          | Al iterar el capítulo       |
| Hecho en borrador | Espacio del prototipo y su celular en el caso                             | Cap. 7                          | Claude                      |
| Pendiente         | Imagen principal del caso                                                 | Debajo del banner               | Sale del prototipo          |
| Pendiente         | Imagen de la tarjeta de Planti                                            | Work, Home y "Sigue explorando" | Sale del prototipo          |
| Pendiente         | Interacción propia de cada capítulo                                       | Cap. 1 a 7                      | Al iterar cada capítulo     |

## Decisiones de diagramación

- **Problema (sin las fricciones)**: se vieron 10 propuestas en el chat
  (titular y resumen, escalera numerada, pares, parece/es, chips de
  necesidades, texto con resaltados, pestañas, línea narrativa, leer más, y
  existe/falta). Dann eligió la 10 y pidió trabajarla más sin depender del
  scroll; de sus tres variantes (contraste conectado, la brecha, tres filas)
  eligió **10B · La brecha**: frase y contexto arriba; "Lo que sabes" y "Lo que
  haces" separados por un vacío con una línea; al tocar "La brecha" se
  despliega el problema completo. Todo se ve desde que se llega; la entrada
  corre una vez. Textos condensados del documento maestro, aprobados por
  Dann; la frase de arriba es la de apertura ("Cuidar una planta parece
  sencillo…") para no repetir la frase de cierre.
- **Usuario**: Dann descartó las seis primeras propuestas (ficha + chat,
  contacto de chat, tarjeta que se voltea, mapa de empatía, sus plantas, cita
  protagonista) y pidió algo resumido, con avatar y sin depender del scroll.
  De tres nuevas (grilla bento, perfil + hallazgos, preguntas a un clic)
  eligió **A · Grilla resumida**: Laura y su frase arriba, tres rasgos en el
  medio y tres hallazgos (sintetizados de las 6 respuestas simuladas) abajo;
  al pasar el mouse por un hallazgo se ve de qué preguntas sale. Sin la
  etiqueta "Persona simulada" ni la nota final (decisión de Dann); queda la
  marca "Hallazgos de 6 respuestas simuladas" en el título de los hallazgos.
- **Usuario · casilla de Laura**: de tres opciones (datos con íconos, ficha
  con cifras, plantas en órbita) Dann eligió **L3 · plantas en órbita**: el
  avatar al centro y sus 4 plantas girando lento alrededor; debajo, "Laura" y
  "28 años · Diseñadora gráfica · Apartamento". Hallazgos más bajos (la fuente
  se despliega al pasar el mouse) y "Necesita" en una línea menos.
- **Problema · nota metodológica**: Dann la quitó; la frase de cierre ocupa
  todo el ancho. "Lo que haces" de la brecha se ilumina en verde cuando la
  línea termina de dibujarse. Se quitó el ícono animado del aviso de las
  fricciones.
- **Benchmark**: tras varias rondas (matriz, mapa, Venn, camino, constelación,
  etc.), Dann pidió algo sencillo: una fila de tarjetas, una por app, con lo
  que hace en una palabra y 3 palabras clave (PictureThis · Identifica;
  Planta · Organiza; Greg · Personaliza; LeafSnap · Explora), y al final
  Planti destacado ("Lo convierte en cuidado diario" · Contexto, Acción,
  Rutina). Debajo, una frase: "Cada app resuelve una parte. Planti busca unir
  el contexto de cada planta con lo que hay que hacer cada día." Se quitaron
  los 8 ejes, la síntesis y la nota de alcance.
- **Benchmark (versión final)**: Dann pidió sacar a Planti del benchmark
  (Planti nace de esta investigación, no se compara aquí), no inventar nada,
  todo visible a la vez sin interacción y sin textos largos. Quedan 4 tarjetas
  con el nombre de cada app y sus 3 palabras clave (las funciones que el
  documento maestro les atribuye) y la frase "Cada app resuelve una parte.".
  Se quitaron las palabras resumen ("Identifica", "Organiza"…) y la tarjeta de
  Planti. No se usan porcentajes: el proyecto no tiene datos cuantitativos.
- **Jerarquía de texto (regla para todo el caso, aprobada por Dann)**: tres
  niveles. 1 · Idea principal: 32 px (24 px en celular). 2 · Título de
  tarjeta: 24 px. 3 · Texto de apoyo: 16 px en gris. Las etiquetas en
  mayúsculas solo nombran un grupo.
- **Concepto + Definición fusionados** (aprobado por Dann): el caso queda en 6
  capítulos (Problema, Usuario, Benchmark, Concepto, Flujos, Prototipo).
  Concepto = idea principal ("Primero Planti aprende sobre tu planta. Después
  te ayuda a cuidarla.") con la oportunidad como subtítulo; tres tarjetas, una
  por pilar (Contexto, Acción, Rutina), cada una con su pregunta y lo que entra
  al MVP; "Fuera del MVP" tachado; y la navegación de la app en cuatro
  pestañas con una línea cada una. Se quitaron el ciclo, los párrafos, las
  frases repetidas, las decisiones clave y las vistas complementarias.

## Recorrido (aprobado por Dann el 2026-10-25)

La interna de Planti dejó los capítulos y ahora se cuenta como **recorrido**,
a partir del boceto `public/sketches/planti-scroll.html` (no se sube).

- **Código**: contenido en `src/content/cases/planti-story.ts` (tipo
  `CaseStory`), escenas en `src/components/molecules/case-story-*.tsx`,
  organismo `case-story.tsx`, movimiento en `src/hooks/use-case-story.ts` y
  `src/lib/case-story/` (GSAP + ScrollTrigger). `planti.ts` (capítulos) ya
  no se usa; se conserva por el detalle de los flujos (pantallas y pasos).
- **Computador**: un escenario fijo con esqueleto de líneas y un eje que se
  desliza; un gesto de scroll = un paso (14 pasos), con la curva de impulso
  y frenado. Lo anterior sale antes de que entre lo nuevo. Rodado horizontal
  solo en 3 cambios (brecha → fricciones, usuario → benchmark, idea →
  ¿Qué hace Planti?). De los flujos a la lluvia, el scroll mueve todo de
  forma continua.
- **Celular**: todo en columna, con aire entre secciones, entradas calmadas;
  la lluvia y el celular del prototipo se fijan y los mueve el scroll.
- **Marca**: mundo crema claro para la investigación y mundo verde con
  degradado desde el concepto. Franjas de hojas solo en títulos grandes y
  respiros; el título del concepto va troquelado en una placa crema.
- **Benchmark**: PlantIn, PictureThis y Plant Parent (hace bien, le falta,
  puede mejorar) y una vista de hallazgos con el cierre "Planti guía,
  acompaña y educa, sin abrumar."
- **Regla**: en ningún lado se dice que la investigación es simulada.
