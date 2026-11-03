# Planti · Estructura del prototipo

Prototipo que cierra el caso de estudio. Se recorre solo, en capítulos, sin que
la persona lo toque (referencia: clip corto en bucle de un solo celular, con
transiciones entre pantallas y sin cursor). Parte de `PLANTI_CONTEXTO_MAESTRO.md`;
la primera versión de pantallas es solo referencia visual.

## Organización

- Un celular y tres capítulos. La persona elige el capítulo y arranca solo, en bucle.
- Cambiar de capítulo reinicia el celular en el nuevo.
- Al terminar un capítulo pasa al siguiente, y el cambio se señala resaltando el capítulo activo.
- Cada capítulo tiene su propio estado inicial, así que se puede ver suelto.
- Hilo conductor: una misma planta (Ficus Pandurata) y una misma persona (Laura).
- Cada capítulo muestra título con etiqueta del MVP, una frase corta por paso, barra de avance, pausa y repetir.
- Navegación del celular: Inicio · Mis plantas · Rutina · Perfil.
- Todo el contenido es de diseño, no consejo botánico validado. Sin identificación por cámara.

| Capítulo                 | Etiqueta MVP          | Empieza con                          | Termina en                             |
| ------------------------ | --------------------- | ------------------------------------ | -------------------------------------- |
| 1. Incorporar una planta | Conocer mi planta     | Onboarding, luego Inicio sin plantas | Planta registrada + botón Crear rutina |
| 2. Crear una rutina      | Crear una rutina      | La planta ya registrada              | Rutina creada + acceso a tareas        |
| 3. Completar un cuidado  | Mantener los cuidados | Inicio con tareas del día            | Cuidado completado + Historial         |

## Vistas complementarias

Aparecen dentro de los flujos como destino, sin recorrido propio:
Mis plantas (final del flujo 1), Rutina (final del flujo 2), Historial (final del flujo 3),
Detalle de planta (= Necesidades de cuidado). Perfil: versión mínima, al final del capítulo 3.
Persona del prototipo: Laura.

## Dirección visual (aprobada en chat, opción A)

- App clara y limpia: fondo blanco y **todas las tarjetas blancas**, con borde verde suave (`--planti-card-border`) y sombra marcada (`--planti-shadow`). **No hay tarjetas crema.** La sombra es suave (dos capas leves). El botón de volver no lleva sombra. El verde, solo como acento y para acciones.
- Esquinas suaves (16 en tarjetas, 12 en botones y barra) y bordes finos y sutiles.
- Tipografía: ningún texto baja de 14 px, salvo las etiquetas de la barra de navegación inferior (12 px).
- Una sola sombra, muy suave. Barra de navegación flotante.
- Plantas recortadas con sombra suave; etiquetas de luz, riego y temperatura apuntando a la planta.
- Sin lector con cámara (fuera del MVP); sus referentes solo se usan para la presentación de la planta.
- Entrada con fotografía a pantalla completa, como en la primera versión: portada "Esto es Planti" (Iniciar sesión y Registrarse; sin "Entra como invitado", como en el frame de Figma) y luego una pantalla de intro.

## Flujo 1 · Incorporar una planta (~20 s)

0. Portada y onboarding. Portada "Esto es Planti"; el recorrido toca Inicia sesión y pasa a **una sola pantalla de intro** ("Conoce mejor tus plantas"), sin barra de pasos ni Omitir. Dura unos 3 segundos: una línea rodea el botón de avance y, al completar la circunferencia, el botón se pulsa solo y entra a Inicio.
1. Inicio: saludo, resumen vacío, botón Añadir planta. Estado de primera vez.
2. Buscar planta: búsqueda, sugerencias, resultados con foto y nombre. Se escribe "Ficus".
3. Detalle de selección: foto, nombre común y científico, botón Seleccionar.
4. Personalizar planta: nombre, ubicación, luz. Confirma los datos.
5. Necesidades de cuidado: luz, riego, humedad, recomendaciones principales.
6. Planta registrada: confirmación, resumen, botón Crear rutina (opcional).

## Flujo 2 · Crear una rutina (~13 s)

1. Iniciar rutina: planta, resumen de necesidades, botón Crear rutina.
2. Seleccionar cuidados: recomendados, con descripción breve, se marcan.
3. Configurar frecuencias: frecuencia de cada cuidado y fecha del próximo.
4. Revisar rutina: resumen, con opción de volver y editar.
5. Rutina creada: confirmación y acceso a tareas; termina en la pestaña Rutina.

## Flujo 3 · Completar un cuidado (~9 s)

1. Inicio con tareas: pendientes y próximas; puede abrir con una notificación.
2. Detalle de la tarea: planta, cuidado, instrucciones breves, Marcar como realizado.
3. Cuidado completado: estado de la misma pantalla, con lo que sigue pendiente; luego aparece en Historial.

## Contenido de ejemplo (de diseño)

Ficus Pandurata · interior, 19–35 °C, cuidado moderado · cuidados: regar, abonar,
revisar hojas · frecuencias: regar 2 veces por semana, abonar una vez al mes,
revisar hojas cada 15 días.

## Línea de tiempo del capítulo 1 (construida, ~28,4 s)

Un solo reloj recorre la lista de momentos de `src/domains/planti/chapter-one-timeline.ts`; para ajustar un tiempo se cambia el número de ese momento. Lo que cambia de forma continua (usuario y contraseña, la línea del botón de la intro y las letras del nombre) sale del mismo tiempo, así se puede adelantar y retroceder.

| Segundo | Qué se ve |
|---|---|
| 0 · 0,5 · 1,3 · 1,8 · 2,4 · 3,1 | Portada con el botón pulsado · sube el panel (con rebote) · se escribe el usuario · se escribe la contraseña · se marca Recuérdame · se pulsa Comencemos |
| 3,5 | Intro: la línea rodea el botón (2 s) y el botón se pulsa a los 5,5 |
| 6,0 · 7,5 | Inicio primera vez (con pausa) · se pulsa Añade tu planta |
| 8,2 · 9,0 | Buscar ¿Cómo es? · se elige Hojas grandes |
| 9,7 · 10,1 · 10,8 · 11,5 | Cuéntanos más · se elige Mediana · se elige Verde parejo · se pulsa el botón |
| 12,2 · 13,3 | ¿Es alguna de estas? (2,3 s) · se resalta la Ficus |
| 14,5 · 15,3 · 17,5 | Detalle solo con lo general · baja despacio (1,8 s) a las recomendaciones · se pulsa Elige esta planta |
| 18,2 · 18,6 · 20,1 · 20,7 · 21,3 | Personalizar (planta grande arriba y nombre abajo) · se escribe el nombre · se elige Sala · se elige Indirecta · se pulsa el botón |
| 22,0 · 23,7 | Necesidades (planta fuera de la tarjeta, datos al lado y recomendaciones en una hoja) · se pulsa Guarda tu planta |
| 24,4 · 26,2 | Planta registrada · se pulsa Crea tu rutina |
| 26,6 | Fin (después pasa al capítulo 2) |

- Controles debajo del celular: Iniciar recorrido, Pausar, Seguir, Repetir, **paso anterior, paso siguiente y una barra para llevar el recorrido a cualquier momento**. En pausa también se detienen las animaciones de CSS; al adelantar o retroceder en pausa, las de la pantalla nueva corren un momento.
- En `/prototypes/planti/timeline`, tocar el nombre de un paso lleva el recorrido a ese paso.
- "Crea tu rutina" (final del capítulo 1) es el puente al flujo 2, "Crear una rutina".
- El Detalle y Necesidades tienen contenido que se desliza; en Necesidades se le sumará más información.
- Las pantallas de un flujo entran deslizando desde la derecha; la entrada y Inicio, con fundido.
- Revisión con tiempos: `/prototypes/planti/timeline` muestra el recorrido corriendo y, al lado, cada paso con cuándo empieza y cuánto dura (se resalta el activo).
- Con `?screen=` se ve una pantalla suelta; `/prototypes/planti/board` muestra las 11 pantallas en fila.

## Portada (frame de Figma)

- Tomada del frame "Esto es Planti" de Daniela (PORTAFOLIO, nodo 2414:144). Figma no se pudo leer (la conexión es de otra cuenta), así que las medidas salen de su captura de 722 px = 375 px.
- "Esto es" 32 px medio y "Planti" 76 px negrita, centrados; línea blanca de 280 px; "Cuida • Conecta • Florece" de 16 px repartido a lo ancho.
- Dos botones de 40 px de alto con esquina de 14 px (no píldora): "Iniciar sesión" en verde Pasto con texto blanco y "Registrarse" en blanco con texto gris Piedra. Sin "Entra como invitado".
- La foto de hojas de fondo está en `public/planti/splash-leaves.webp` (491 x 874 px; conviene una versión más grande para pantallas de alta densidad). "Planti" va en Poppins ExtraBold (800); el resto, en Medium y Regular.

## Panel de inicio de sesión (frame de Figma)

- Título "Iniciar sesión" centrado, 24 px medio. Campos con ícono a la izquierda (usuario y candado, línea fina), borde gris claro, esquinas de 16 y solo el texto de ayuda dentro ("Usuario", "Contraseña"); 12 px entre campos.
- Casilla "Recuérdame" (se marca en el recorrido) y "¿Olvidaste tu contraseña?" debajo. Botón verde "Comencemos" de 40 px con esquina de 14.
- El panel blanco sube con un rebote suave (se pasa un poco y se asienta).
- Los campos de Personalizar (nombre, con lápiz; ubicación, con pin y flecha) usan el mismo estilo de campo; la luz sigue en opciones.
- Efecto de toque: todo lo que se pulsa o elige muestra un punto (dónde tocó), una onda que sale de ese punto y un pequeño rebote.

## Secuencia de entrada (construida)

1. La persona llega al prototipo y ve la **portada** con el logo "Planti" sobre un fondo de plantas, quieta.
2. Al darle **Iniciar recorrido** (botón debajo del celular), el botón **Inicia sesión** se pulsa y **sube un panel desde abajo** sobre la portada oscurecida, con "Inicia sesión", usuario y contraseña. A 1,1 s los campos se llenan de una vez (como un autocompletado); a 1,9 s el botón **Entrar** se pulsa y queda cargando ("Entrando…").
3. A los 3 s aparece la **intro** (onboarding de una sola pantalla). Una línea rodea el botón durante 3 segundos y, al completar la circunferencia, el botón se pulsa solo.
4. Entra a **Inicio** (primera vez) y el control pasa a **Repetir recorrido**.
- Sin `?screen=` corre esta secuencia; con `?screen=` se ve una pantalla suelta.
- Esto reemplaza lo anterior de "tocar Registrarse": el recorrido inicia sesión.

## Buscar planta pensado para quien no sabe de plantas (aprobado)

- Laura no sabe cómo se llama ni cómo se clasifica su planta: reconoce **cómo se ve**. Por eso se quitaron las "sugerencias" y los filtros técnicos (interior, exterior).
- Paso 1 `search-look`: "¿Cómo es tu planta?" con cuatro **tarjetas grandes** (imagen arriba y nombre abajo): Hojas grandes, Hojas largas y finas, Cuelga o trepa, Tiene flores. La elegida lleva borde verde oscuro y su nombre sobre verde claro. El campo de nombre queda arriba para quien sí sabe cómo se llama.
- Paso 2 `search-more`: "Cuéntanos más": el **tamaño** con una tarjeta donde la planta crece o se encoge y un **deslizador** de tres paradas (Pequeña: cabe sobre una mesa · Mediana: llega a la rodilla · Grande: llega a la cintura o más), y el **color de las hojas** en muestras redondas (Verde parejo, Con manchas, Otros colores). En el recorrido la bolita se desliza sola hasta Mediana y luego se elige Verde parejo. Botón "Mira las coincidencias".
- Paso 3 `search-gallery`: "¿Es alguna de estas?": plantas con foto y una frase de cómo son, con la Ficus Pandurata resaltada y una tarjeta de salida "¿No está la tuya? Escribe su nombre".
- La búsqueda por nombre (`search-typing`, `search`) queda como camino alterno que el recorrido no muestra.
- Capítulo 1 completo: unos 28 segundos (6 de entrada y 22 de flujo). Tablero: `/prototypes/planti/board`.
- Todas las frases ("cabe sobre una mesa", "hojas grandes en forma de violín") son contenido de diseño, no datos botánicos.

## Flujo 1 construido

- Pantallas (`?screen=`): `splash`, `onboarding`, `home-empty`, `search`, `plant-detail`, `personalize`, `needs`, `registered`.
- Botones del flujo en voz de tú: "Elige esta planta", "Confirma tus datos", "Guarda tu planta", "Crea tu rutina" y "Ahora no".
- Los campos de Personalizar se ven ya elegidos (nombre, dónde vive, cuánta luz) porque en el prototipo nadie los escribe. Si más adelante se activa "Pruébalo tú", pasan a ser formularios con React Hook Form y Zod.
- Datos de la planta del capítulo 1 y 2: Ficus Pandurata (Ficus lyrata), llamada "Ficus de la sala", en la sala con luz indirecta.

## Inicio con tareas (capítulo 3, construido)

- El capítulo 3 pasa **dos semanas después** de los capítulos 1 y 2: miércoles 30. Laura ya tiene tres plantas (Ficus Pandurata en la sala, Monstera Deliciosa en el balcón y Pilea peperomioides en el dormitorio).
- Orden: saludo grande (menú y notificaciones fijos arriba), banner de tres destacados que se mueve solo (primer movimiento al segundo de entrar; destacado 1 es un aviso: "Tu Ficus tiene sed"), cuidados de hoy (el primero completo, con cómo hacerlo, y lleva al detalle), tu semana (los siete días y "Lo que viene") y mis plantas en dos columnas.
- Las pantallas del capítulo 3 dibujadas antes (notificación, detalle de la tarea, cuidado completado, historial) deben ajustarse a esta fecha y a estas plantas al construirlas.

## Voz y textos

- Se le habla de tú y con cercanía: "Añade tu planta", "Mira tu rutina", "Cuéntanos cuál es".
- Los botones van en imperativo de tú, no en infinitivo.
- En una secuencia (título, texto, botón) no se repite la misma idea ni la misma palabra.
- Cuando un texto va centrado, se reparte parejo entre sus líneas: nunca queda una palabra sola abajo (`text-wrap: balance`).
- Los textos de las pantallas dibujadas antes en el chat (flujos 1 a 3) se ajustan a esta voz al construirlas.

## Estado

- Definido: estructura, flujos y pantallas.
- Pendiente: sistema de diseño de Planti (`src/styles/domains/planti/`), textos de cada paso.
