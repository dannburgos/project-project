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

## Ajustes del 23 nov 2026 (tarde)

- **Todo en español**, también el menú, las palabras gigantes y las etiquetas. Reemplaza la regla A.1.6 del caso de estudio («navegación en inglés»).
  - Capítulos: Panorama, Descubrimiento, Estrategia, Definición de producto, Diseño de experiencia, Validación y aprendizajes.
  - Las palabras largas, como DESCUBRIMIENTO, ajustan su tamaño al número de letras.
- **Aperturas:**
  - La celda del título muestra «Capítulo 0N» y la pregunta del capítulo.
  - Se quitó «En este capítulo»; esa celda quedó como ventana al fondo.
  - Sobre una foto de fondo, la palabra gigante va en blanco.
- **Módulos:** sin etiquetas numeradas («01 — Overview»…); solo la etiqueta corta.
- **Portada:**
  - Indicador de scroll: el velocímetro, con el texto «Baja para acelerar».
  - El texto es un solo párrafo.
  - La ficha tiene 4 datos: tipo, enfoque, marca y mercado, y plataforma.
- **Fotos:** los originales van en `public/toyota/originales/` (solo en este computador). Las copias WebP van en `public/toyota/fotos/`.
  - Listas: fondo del 01, Yaris azul; celda del 01, Fortuner roja.
  - Prompts: de día, luminosos, con autos de colores vivos, en español y sin repetir modelo.
- **Menos texto (Dann, 23 nov 2026, noche):**
  - Panorama: la gráfica de la solución (Descubrir → Recomendar → Explicar) lleva la explicación debajo de cada paso. Se quitó el cuadro que la repetía.
  - Descubrimiento: se quitaron las notas «Nivel de evidencia» del contexto y del benchmark, y el cuadro «De aprendizaje a decisión».
  - Pista del benchmark: las notas (fortaleza y oportunidad) quedan fijas en su panel. Solo la captura cambia de ritmo.
  - Estrategia: se quitaron «Nivel de evidencia», «Qué no es» y el módulo «Modelo de datos».
  - Propuesta de valor: el cuadro de dos columnas pasó a ser cinco cambios en una sola fila. Cada uno tiene un tema, la frase tradicional que se tacha en rojo y la nueva que se enciende con el scroll, una tras otra.
  - Ya no queda ningún «Nivel de evidencia» en el caso. También se quitó la nota «En el prototipo, “Similar” y “Con ventajas” son pantallas de ejemplo». El único aviso con etiqueta que queda es «Por completar con evidencia real», en Validación.
  - Panorama: se quitó la cita «Encontrar un vehículo adecuado no siempre es fácil…». En los tres pilares, las imágenes pasan por debajo de la palabra gigante.
  - Aperturas: el vidrio esmerilado se quitó (los referentes no lo tenían). Ahora la celda sólida de arriba se desliza a la derecha con el scroll y se esconde detrás de la celda del número; abre una ventana limpia a la foto y la palabra se completa. En celular no se muestra y con «reducir movimiento» queda quieta. Un rediseño con el hero de S-2K (foto a pantalla completa y escalera de bloques) se probó el 23 nov y se revirtió a pedido de Dann.
  - Benchmark: quedan tres referentes, cada uno de un tipo distinto: Hyundai (herramientas: comparador y reserva), Renault (estilos de vida) y Autocosmos (multimarca). Se quitaron Kia y Volvo porque se cruzaban con Hyundai. El título ahora dice «Tres experiencias, siete criterios».
  - Fotos listas del 02: el fondo es una vista aérea de Toyota de colores en filas (`02-fondo-vista-aerea.webp`, 1672 × 941 px). La celda muestra a un hombre que compara vehículos en su portátil, con una Hilux naranja afuera (`02-celda-hilux.webp`, 1254 × 1254 px).
  - Tres pilares: una sola imagen larga (vertical, 1:3) en un marco fijo en el centro. La imagen baja por dentro más lento que el scroll: en computador, a poco más de un cuarto de la velocidad, mientras pasan los tres pilares; en celular, a casi la mitad, mientras el marco cruza la pantalla. Cada pilar muestra otra parte de la misma imagen. La imagen es el frente de una Land Cruiser Prado amarilla, del techo al asfalto (`01-pilares-land-cruiser.webp`, 724 × 2172 px). El pilar 01 muestra el cielo y el techo, el 02 el parabrisas y la parrilla, y el 03 el emblema, el faro y el asfalto.
  - Imágenes del benchmark: hechas con IA, sin interfaces. Son autos en diagonal, en ángulo de tres cuartos de frente, mirando a la derecha (hacia donde avanza la pista): Hyundai Tucson azul en una calle moderna, Renault Duster naranja en la montaña y, para Autocosmos (multimarca), tres vehículos de distintos tipos sin logos. El letrero dice «Imagen de referencia».
  - Fotos del benchmark listas: Hyundai (`02-ref-hyundai.webp`), Renault (`02-ref-renault.webp`) y multimarca para Autocosmos (`02-ref-multimarca.webp`), todas de 1254 × 1254 px.
  - Apertura 03, fotos listas: de fondo, la RAV4 híbrida verde en un puente atirantado (`03-fondo-rav4.webp`, 1672 × 941 px); en la celda, el tablero con una ruta en la pantalla (`03-celda-tablero.webp`, 1254 × 1254 px).
  - Apertura 04, pendiente: de fondo, una Corolla Cross cobriza en movimiento (toma en paneo con fondo barrido). La celda («resultado de la asesoría en el prototipo») será una captura del prototipo cuando exista, no una imagen de IA.
  - Avance del caso: una GR Yaris blanca (`public/toyota/indice/gr-yaris.webp`, volteada para mirar a la derecha) recorre todo el borde de abajo de la pantalla, de izquierda a derecha, y deja detrás una línea roja sobre una línea fina. Sus llantas (`llanta.webp`, encima de las que trae dibujadas) giran con el scroll: una vuelta cada 600 px, hacia atrás al subir. Con «reducir movimiento», el auto avanza pero las llantas no giran. El botón del índice subió (48 px en celular, 56 px en computador) para quedar encima de su camino.
  - Interacciones del auto (aprobadas por Dann):
    1. Suspensión: la carrocería (`gr-yaris-carroceria.webp`, sin las llantas dibujadas) sube la trompa al acelerar con el scroll y, al frenar, cabecea y vuelve con un rebote. Solo con movimiento.
    2. Luces: freno al detenerse y en reversa; faros con haz en el mundo oscuro.
    3. Hitos: una marca por capítulo sobre la línea. Se pone roja al pasar, su nombre aparece un instante, al pasar el cursor muestra el capítulo y con un clic salta a él.
    4. Control: el auto se arrastra para recorrer el caso (mouse o dedo). Con el teclado es un control deslizante: flechas, Inicio y Fin saltan de capítulo, y el foco se queda en el auto. Al pasar el cursor dice «Arrástrame para avanzar».
    5. Meta: se quitó a pedido de Dann (23 nov 2026).
    - Código: física y luces en `src/lib/case-story/toyota-progress-car.ts`; hitos, arrastre y teclado en `src/hooks/use-progress-car.ts`. El botón del índice subió a 72 px para quedar encima de los globos.
  - Descubrimiento: el usuario volvió a tener su propio módulo, después de «Definición del problema». Lleva el eyebrow «Usuario», el título «Personas que necesitan orientación para elegir su próximo vehículo.», los cuatro segmentos como tarjetas con su necesidad principal (el cuarto marcado como complementario) y los seis puntos de dolor como hipótesis. El problema quedó solo con su modelo de cuatro pasos.
  - Definición de producto, flujo de usuario como diagrama (`toyota-flow.tsx`): el camino de 8 pasos con su línea que se dibuja con el scroll; notas en «Asesoría» (9 preguntas, «Aún no lo sé» no bloquea) y en «Resultado» (siempre hay una respuesta); un arco «Editar perfil» que vuelve de «Tu perfil» a «Asesoría»; las salidas «Cotizador» y «Prueba de manejo» bajo el último paso; y un hilo rojo que baja de «Resultado» hasta sus tres variantes. El módulo «Variantes de resultado» se fusionó aquí. En celular todo va en una columna.
  - Portada: la imagen principal será una foto de impacto de un solo auto (Hilux roja en carretera de montaña, auto abajo y cielo azul profundo arriba para que el título blanco se lea), no la captura del prototipo; esa va en el capítulo 05. El párrafo de la portada bajó de seminegrita a peso normal.
  - Apertura 04, fotos listas: de fondo, la Corolla Cross cobriza en movimiento (`04-fondo-corolla-cross.webp`, 1672 × 941 px); en la celda, el detalle del faro y el emblema (`04-celda-faro.webp`, 1254 × 1254 px). La celda deja de esperar la captura del prototipo; esa captura irá en otras partes del capítulo 05.
  - Portada, foto lista: Hilux roja a toda velocidad en los Andes (`00-portada-hilux.webp`, 1672 × 941 px). Los textos de la portada llevan una sombra suave para que se lean sobre el destello del faro. Pendiente de decidir: si el auto debería quedar más abajo para dejar cielo detrás del título.
  - Portada: el titular pasó a la tipografía más negra (900) con un filo oscuro corto y un velo amplio en la sombra para contrastar sin oscurecer la foto. Se quitó el texto «Caso de estudio · Diseño de producto» de arriba.
  - Portada, titular en dos líneas: «Toyota —» justo encima de «Beyond the Model», alineado con su borde izquierdo; «Beyond the Model» sigue en la posición que ya tenía (a la derecha, a media altura). Además, en celular el velocímetro ya no aparece (otra regla lo mostraba encima del párrafo) y el párrafo sube para no quedar bajo el botón del índice.
  - Portada: el titular suma contraste con una sombra de tres capas (filo, velo medio y velo amplio) y un velo oscuro radial desenfocado detrás del bloque del texto. Deja el resto de la foto limpio y sobre el fondo negro no se nota.
  - Portada, nueva composición (boceto de Dann): la foto queda al centro como tarjeta; el titular («Toyota —» sobre «Beyond the Model») se sobrepone a su esquina de arriba a la izquierda y se sale por la izquierda; la descripción se sobrepone a su esquina de abajo a la derecha y se sale por la derecha (desde tableta; en celular queda abajo a la izquierda). Ambos textos llevan sombra y velo suave. Variante posible: tarjetas blancas detrás de los textos, como en el boceto.
  - Portada: al empezar a crecer, la foto pasa por encima del titular y la descripción y los deja detrás (el velocímetro queda siempre encima y bajó 20 px). Aperturas: las celdas bajaron de 25 % a 21 % del ancho de alto, para que se vea más foto.
  - Tres pilares, arreglo del final de la sección: el marco de la foto y la lista de pilares ahora comparten un mismo cuerpo, así que el marco fijo termina junto con la lista y ya no se pasa al módulo siguiente (antes tapaba el texto de «Problema» por un margen negativo). El último texto se desvanece antes de llegar a la palabra gigante y la foto se desvanece al salir, en vez de quedar cortada.
  - Portada: el titular y la descripción, además de quedar detrás de la foto al crecer, se desvanecen en el primer 40 % del recorrido (así no asoman letras por los costados). Capítulo 01: su pregunta ahora lleva signos: «¿Qué es Beyond the Model y qué problema aborda?».
  - Compactación del contenido (24 nov 2026): la página pasó de 30,6 a 27,5 pantallas (−3,1, −10 %), medida a 1280 × 800. Qué se unió, sin perder datos:
    - Panorama: los tres pilares absorben las tres capacidades (Descubrir / Recomendar y explicar); sin la frase final ni el párrafo de la descripción.
    - Descubrimiento: sin el texto del contexto, la cita ni la «experiencia propuesta» (queda la actual); sin el párrafo del benchmark (pasó a la etiqueta de criterios); el problema lleva la pregunta «¿Cómo podríamos…?» en el mismo módulo; los 6 dolores son etiquetas (su descripción completa está en la tabla de Estrategia); el trabajo por hacer queda solo con su declaración.
    - Estrategia: sin el «encaje de valor» ni el módulo de concepto; los objetivos pasaron a una tabla de trazabilidad (punto de dolor → objetivo → criterio de éxito → métrica).
    - Producto: el MVP conserva 2 comportamientos propios (los otros 3 ya están en los principios de confianza de la IA); la lógica sin cifras repetidas ni la regla de orden (pasó al texto); el flujo lleva una banda con las seis etapas del concepto sobre sus pasos y dice «hasta 3 modelos» en la comparación.
    - Experiencia: sin el texto que repetía el flujo. Validación: los 7 criterios se fusionaron con las métricas de la tabla (más la eficiencia, en el texto), y los próximos pasos pasaron al módulo del plan.
    - Pendientes para ahorrar más: aperturas más cortas (unas 5,7 pantallas hoy), menos espacio entre módulos, matriz de la lógica más baja, y la fusión del capítulo 05 con el 04.
  - Capítulos renombrados y reorganizados (24 nov 2026, definido con Dann): 01 Contexto, 02 Descubrimiento, 03 Estrategia, 04 Producto, 05 Experiencia, 06 Validación; el menú y la palabra gigante dicen lo mismo. El 01 ahora es: Toyota en Colombia (movido desde Descubrimiento) → problema y oportunidad → solución («Solución» como encabezado y la frase «Una nueva forma de descubrir y elegir un Toyota» sobre «TRES PILARES»). Se quitó el módulo que solo tenía el título. Descubrimiento empieza ahora con el benchmark. Total de la página: sin cambio (27,5 pantallas).
  - Cuatro ahorros de scroll aplicados (24 nov 2026): la página pasó de 27,5 a 24,3 pantallas a 1280 × 800 (−3,2). 1) Aperturas más cortas: de unas 0,95 a 0,65–0,70 pantallas (hueco de foto de 18 % de la pantalla y filas de 15 % del ancho; la palabra queda a la altura de la primera fila; la foto de la celda ya no marca la altura de la fila). 2) El capítulo 05 Experiencia se fusionó en 04 Producto (queda como último módulo: prototipo y sistema visual); el caso tiene ahora 5 capítulos y Validación es el 05. 3) Menos aire entre módulos (48 / 72 / 56 px según el ancho). 4) Matriz de la lógica con filas más bajas.
