# Caso Toyota — Beyond the Model: plan de construcción

Bitácora de pasos y decisiones de diseño del caso en el sitio. El contenido sale de `caso-de-estudio-beyond-the-model.md`, y los movimientos y la composición, de `referencias-web.md`.

## Orden de trabajo (Dann, 23 nov 2026)

1. **Documentación del caso:** capítulos 01 Overview, 02 Discovery, 03 Strategy, 04 Product Definition y 06 Validation & Learnings.
2. **Al final:** prototipo y pantallas (capítulo 05 Experience Design). Si se incluye en la navegación sigue por confirmar (Parte G, punto 9).

## Reglas de construcción

- **Usabilidad primero.** Navegación siempre visible con el capítulo activo y el avance. Todo se lee igual con «reducir movimiento». Contraste AA.
- **Imágenes faltantes:** caja gris con el nombre de la imagen que va ahí.
- **Marca:** rojo #EB0A1E plano y solo para destacar; negro, blanco y gris #58595B; esquinas rectas; Figtree en lugar de Toyota Type; nunca texto alineado a la derecha; mayúsculas solo con 7 palabras o menos.
- **Movimiento hacia adelante** (izquierda a derecha, abajo hacia arriba, de atrás hacia adelante), con aceleración suave, escalonado y revelado con máscara. Nada que encoja.
- **Tamaños en múltiplos de 2 px.** Las notas, que en el documento del caso miden 13 px, pasan a 14 px.
- **Módulos con scroll propio** (pista horizontal, gráficas que se dibujan): congelan la página hasta completarse, igual que en los otros casos.

## Dos mundos

- **Mundo claro (blanco):** portada, 01 Overview y 02 Discovery. Es la parte de entender a las personas.
- **Mundo oscuro (negro):** 03 Strategy y 04 Product Definition. Es el sistema (IA, datos y lógica), con estética de plano técnico: retícula con cruces y líneas que se dibujan.
- **Regreso al claro:** 06 Validation & Learnings y el cierre.

## Mapa de secciones y patrones

Las letras corresponden a los patrones de `referencias-web.md`.

| Sección del caso                 | Composición                                                                                                                                    | Patrones   |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Portada                          | Marco con la captura de «Encuentra tu Toyota» que crece hasta la pantalla completa. Titular y bajada; ficha del proyecto en celdas de retícula | N, H, C    |
| 01 · Descripción                 | Párrafo que se ilumina y tres pilares en tarjetas apiladas con textos alternos                                                                 | J, B       |
| 01 · Contexto y problema         | Pantalla dividida: eyebrow fijo a la izquierda y relato a la derecha; frase destacada como cita                                                | K, T       |
| 01 · Oportunidad y solución      | Secuencia Descubrir → Recomendar → Explicar que avanza de izquierda a derecha                                                                  | C, M       |
| 01 · Objetivos                   | Objetivo general y 4 objetivos en celdas numeradas                                                                                             | H          |
| 01 · Alcance y rol               | Incluye y No incluye enfrentados; entregables y responsabilidades como fichas técnicas                                                         | K          |
| 02 · Toyota en Colombia          | Cifras grandes que cuentan (6 · 20 · 4) y nota de fuente                                                                                       | C          |
| 02 · Experiencia actual          | Recorrido de 4 pasos que se dibuja; observaciones e implicaciones en filas                                                                     | M          |
| 02 · Oportunidad                 | Comparación actual frente a propuesta, con flujos lado a lado                                                                                  | M          |
| 02 · Benchmark                   | **Pista horizontal**: un capítulo por marca, con lomo vertical, captura, fortaleza y oportunidad                                               | P, Q, R, S |
| 02 · Síntesis y conclusiones     | Hallazgos y oportunidades; principios y la tabla de aprendizaje a decisión                                                                     | J, K       |
| 02 · Problema y usuario          | Modelo del problema con la brecha en rojo; segmentos, dolores y HMW como manifiesto                                                            | M, F, T    |
| 02 · Jobs to Be Done             | Punto de partida → progreso → resultado; Job Statement; resultados esperados                                                                   | C, T       |
| 03 · Propuesta de valor          | Promesa gigante; tradicional frente a Beyond the Model; canvas (imagen pendiente)                                                              | I, K       |
| 03 · Objetivos de producto       | Tabla PG01–PG05 como ficha técnica                                                                                                             | K          |
| 03 · Concepto y estrategia de IA | «Qué no es»; modelo de 6 etapas; 4 capas de IA en plano técnico                                                                                | M, L       |
| 03 · Arquitectura de datos       | Cadena de 7 entidades que se dibuja; perfil y reglas                                                                                           | M          |
| 04 · MVP                         | Barra MoSCoW que crece (20 · 7 · 6); comportamientos garantizados                                                                              | M, C       |
| 04 · Lógica de recomendación     | Matriz de 6 modelos por etiqueta que se completa con el scroll                                                                                 | H, M       |
| 04 · Arquitectura y flujo        | Dos niveles (sitio → módulo → salida); flujo único; 3 variantes de resultado                                                                   | M, Q       |
| 06 · Validación                  | Plan, criterios y tareas; resultados e iteraciones como cajas «por completar con evidencia real»                                               | K          |
| Cierre                           | Próximos pasos y aviso de concepto independiente                                                                                               | C          |

## Imágenes pendientes (cajas grises)

Se llenan a medida que Dann suba las imágenes. La lista exacta queda en el código del caso, con un letrero en cada caja.

## Registro

- **23 nov 2026:** referentes analizados (Lightship, Longbow, S-2K, Later y el manual de Toyota). Se arma la documentación del caso con cajas grises.
- **23 nov 2026, construcción:** el caso vive en `/work/toyota`. Está en la tarjeta 4 de Work, en rojo plano. Tiene seis capítulos en el índice: 01 Overview, 02 Discovery, 03 Strategy, 04 Product Definition, 05 Experience Design y 06 Validation & Learnings.
  - **05 Experience Design** lleva por ahora el texto del sistema visual y seis cajas grises de pantallas. El prototipo entra al final.
  - **06 Validation** muestra los resultados y las iteraciones como espacios «por completar con evidencia real».
  - **Portada:** la captura crece de tarjeta a pantalla completa y el titular va partido.
  - **Ficha:** en celdas de retícula.
  - **Aperturas de capítulo:** palabra gigante fija, fondo casi quieto y una retícula de celdas encima.
  - **Tres pilares:** tarjetas apiladas con su texto alternado a los lados.
  - **Benchmark:** pista horizontal que congela la página. Cada marca tiene su lomo girado y sus notas se mueven en vertical. En celular se desliza con el dedo.
  - **Mundo oscuro:** plano técnico, las cuatro capas de IA, la barra MoSCoW y la matriz de etiquetas por modelo.
  - **Índice:** siempre un botón abajo a la derecha, en todos los tamaños (decisión de Dann, 23 nov 2026). Dice en qué capítulo vas y tiene una línea roja de avance en su borde de abajo. Al pasar el cursor, al tocarlo o con el teclado, la lista de capítulos se despliega hacia arriba. No hay columna a la izquierda.
  - **Indicador de scroll de la portada:** a la derecha, encima del botón. Es el texto «Baja para empezar» de pie y, al lado, una vía con su línea de carril roja que avanza sin parar. Termina en el cuadrado rojo de la marca. Sube y se desvanece apenas se empieza a bajar.

## Archivos del caso

- **Contenido:** `src/content/cases/toyota-story.ts`. Los tipos están en `src/content/toyota-story.types.ts`.
- **Recorrido:**
  - `src/components/organisms/toyota-story.tsx`.
  - Un organismo por capítulo: `toyota-cover`, `toyota-overview`, `toyota-discovery`, `toyota-strategy`, `toyota-product`, `toyota-experience` y `toyota-validation`.
  - La pista del benchmark: `toyota-benchmark-track`.
- **Piezas:** `src/components/atoms/toyota-*` y `src/components/molecules/toyota-*`.
- **Movimiento:** `src/lib/case-story/toyota-motion.ts`, con atributos `data-ty-*`, y `src/hooks/use-toyota-story.ts`.
- **Estilos:**
  - `src/styles/components/organisms/toyota-story.css`: mundos, índice, portada, aperturas, pila, pista y cierre.
  - `src/styles/components/molecules/toyota-blocks.css`: el resto de piezas.
- **Imágenes:** cada caja gris sale de un `{ label }` del contenido. Al llegar la imagen se agrega `src` y la caja se convierte en la foto.

## Versión esencial (23 nov 2026, aprobada por Dann)

Dann sintió que había mucha información y demasiado scroll. Se redujo el caso sin perder la dinámica.

- **Medición en 1440 × 900:**
  - Antes: 61 pantallas de scroll y 52 módulos.
  - Ahora: unas 31 pantallas y 28 módulos.
  - Por capítulo: portada 2,3 · Overview 6,1 · Discovery 6,7 · Strategy 5,6 · Product 4,9 · Experience 2,5 · Validation 2,8.
- **Reglas del texto:**
  - Una idea por módulo, con su titular, una frase de 25 palabras como máximo y su pieza visual.
  - No se escribe nada nuevo: se resume desde el caso de estudio, que conserva el texto completo.
  - Las listas largas pasan a etiquetas.
  - Las notas de evidencia se mantienen.
- **Qué salió de la página:**
  - El módulo de objetivos.
  - La síntesis y las conclusiones del benchmark (queda la tabla de aprendizaje a decisión).
  - La tabla de principios.
  - Las dimensiones y los resultados esperados de JTBD.
  - Los 4 HMW de apoyo.
  - La visión como cita aparte.
  - Los dominios de datos, las dimensiones del perfil y los principios de gobierno.
  - Las tablas de entregables y responsabilidades, que ahora son etiquetas.
- **Ritmo:**
  - Aperturas de dos filas de celdas, con la cuadrícula a 24svh. En celular, las filas se ajustan a su contenido.
  - Pila de pilares más corta: tarjetas de 64svh con 8svh entre una y otra.
  - Portada con una pista de 160svh.
  - Espacio entre módulos: 80 px en computador.
