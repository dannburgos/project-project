# Referencias web: caso Toyota — Beyond the Model

Cada referente lleva lo que Dann pidió tomar, el análisis y su posible uso en el caso. El 23 nov 2026 Dann entregó los tres referentes y el manual de marca, y pidió construir.

**Orden de trabajo:** primero la documentación del caso; al final, el prototipo y las pantallas.

**Pedido de Dann para la construcción**

- Alto nivel de detalle y esfuerzo en la composición: que se entienda mucho y se vea profesional.
- Vistas disruptivas y distintas, como las de los referentes, pero con la **usabilidad como prioridad**.
- Las imágenes van como **cajas grises** hasta que Dann suba las suyas. Cada caja lleva un letrero con la imagen que le corresponde.

---

## 1. Lightship: movimientos del scroll y composición

- **Web:** https://www.lightshiprv.com/ (home, revisada el 23 nov 2026 a 1728 × 997 px)
- **Qué tomar:** cómo se mueve la página con el scroll y cómo se componen las secciones.
- **Pantallazos de Dann:** pendientes.

### Base técnica

- **Scroll suavizado en toda la página** con Lenis. El sitio ya tiene `lenis` y `gsap`, así que todo se puede reproducir.
- **Animaciones de dos tipos:**
  - Las que se disparan una vez al entrar en pantalla, con la clase `is-inview`.
  - Las atadas al avance del scroll, con una variable `--progress` que va de 0 a 1.
- **Curvas y tiempos:**
  - **Letras de titulares:** suben y aparecen en 0,8 s, con `cubic-bezier(.38, 0, .215, 1)`.
  - **Líneas de texto:** se destapan con máscara en 0,9 s, con `cubic-bezier(.86, 0, .07, 1)`, después de las letras.
  - **Tarjetas y textos cortos:** se deslizan en 0,5 a 1,8 s con `cubic-bezier(0, 1, .4, 1)` y entran una tras otra cada 0,08 s.
- **Parallax suave** en las imágenes: se mueven entre 5 % y 10 % más lento que el scroll.
- **Una sola familia tipográfica** (grotesca), con contraste extremo entre titulares gigantes y cuerpo pequeño.
- **Menú flotante** en forma de píldora: fijo arriba con 8 px de margen, translúcido y con desenfoque.

### Recorrido, sección por sección

1. **Portada fijada (unas 3 pantallas de scroll).** Empieza con un video a pantalla completa y el titular partido en dos: una frase a la izquierda y otra a la derecha, a media altura. Al bajar, el video se encoge hasta una tarjeta vertical centrada. Al mismo tiempo, fotos más pequeñas entran desde los bordes, cada una a su velocidad, y forman un collage alrededor. Al final, el collage sale hacia arriba.
2. **Introducción.** Párrafo corto, centrado y angosto, en gris, con mucho aire arriba y abajo.
3. **Titular gigante con tarjetas apiladas.** Un titular de borde a borde ("This is the AE.1") queda fijo arriba. Por delante pasan 4 imágenes verticales centradas que se apilan una sobre otra, fijas al 20 % del alto. Cada imagen tiene un texto corto al costado (titular en negrita y 2 líneas en gris), que alterna entre izquierda y derecha.
4. **Carrusel horizontal.** Titular centrado de 2 líneas con una etiqueta en píldora debajo. Luego vienen tarjetas grandes, cada una con el título sobre la imagen y un botón «+» que abre el detalle. Las tarjetas entran escalonadas. Las flechas y la paginación van abajo a la izquierda.
5. **Imagen casi a todo el ancho.** Margen mínimo, titular centrado encima y botón en píldora.
6. **Párrafo-manifiesto gigante.** Alineado a la izquierda, ocupa cerca del 60 % del ancho y aparece línea por línea.
7. **Dos columnas.** A la izquierda, texto pequeño y un botón; a la derecha, una imagen grande.
8. **Carrusel de artículos.** Titular centrado y tarjetas con imagen, título y fecha.
9. **Cierre.** Bloque de dos columnas sobre fondo beige con un patrón de cruces; después, un footer limpio sobre blanco.

### Patrones de movimiento para reutilizar

| Patrón                                | Qué pasa con el scroll                                                                             |
| ------------------------------------- | -------------------------------------------------------------------------------------------------- |
| A. Portada que se encoge              | La imagen pasa de pantalla completa a tarjeta centrada mientras entra un collage                   |
| B. Titular fijo con tarjetas apiladas | El titular gigante queda quieto; las tarjetas suben, se apilan y llevan textos alternos al costado |
| C. Texto que se revela                | Las letras suben y las líneas se destapan con máscara                                              |
| D. Carrusel escalonado                | Las tarjetas entran una tras otra; se navega con flechas                                           |
| E. Imagen ancha con texto             | Imagen casi a todo el ancho con titular centrado encima                                            |
| F. Manifiesto línea por línea         | Párrafo grande que aparece por líneas                                                              |
| G. Parallax suave                     | Las imágenes se mueven un poco más lento que la página                                             |

### Composición

- **Mucho aire:** entre secciones queda casi una pantalla vacía.
- **Alternancia de ejes:** bloques centrados (titulares, introducción) y bloques asimétricos (manifiesto a la izquierda, textos alternos en las tarjetas).
- **Escala extrema:** titulares de borde a borde junto a cuerpo de unos 16 px.
- **Fondo blanco** en casi todo. Solo el cierre cambia de superficie.
- **Imágenes verticales** en las secuencias y horizontales en los momentos amplios.

### Choques con el manual de Toyota (resolver al construir)

- Lightship usa esquinas redondeadas pequeñas; el prototipo de Toyota usa **esquinas rectas**.
- El cierre de Lightship va en beige. En Toyota la superficie tendría que salir de negro, blanco o gris, y el **rojo #EB0A1E** se reserva para destacar.
- Lightship es en inglés y con titulares cortos. En el caso, la navegación va en inglés, pero los titulares en español son largos (hasta 14 palabras). Los de borde a borde solo funcionan con frases cortas.

### Posible uso en el caso (por confirmar cuando lleguen todos los referentes)

- **Portada (B.0):** patrón A. La captura de «Encuentra tu Toyota» se encoge a tarjeta y las pantallas del prototipo forman el collage.
- **Overview, tres pilares o tres capacidades:** patrón B, con una tarjeta por pilar y el texto alterno al costado.
- **Benchmark de 5 referencias:** patrón D, con una tarjeta por marca.
- **Problem Statement y HMW:** patrón F, con la pregunta principal como manifiesto.
- **Experience Model (6 etapas):** patrón B o D.
- **Experience Design:** patrones A o E, con las pantallas del prototipo.

---

## 2. Longbow y S-2K: revelado de información, imágenes y datos

- **Webs:** https://db-longbow.webflow.io/ y https://s-2k.webflow.io/ (revisadas el 23 nov 2026 a 1492 × 812 px)
- **Qué tomar:** cómo se revelan la información y las imágenes. Las imágenes del fondo se mueven a otra velocidad que la cuadrícula, y con el scroll van apareciendo información, gráficas, imágenes y datos importantes.

### Longbow (Webflow, ~18 pantallas)

- **Cuadrícula visible de 4 columnas.** Líneas finas y marcas en cruz («+») en cada cruce. Todo se apoya en esa retícula: las celdas son imágenes, paneles de color sólido o fichas de texto.
- **Dos velocidades.** La imagen grande del fondo se mueve más lento, o queda casi fija. Las celdas de la cuadrícula suben a velocidad normal, tapan partes del fondo y lo dejan ver a través de las celdas vacías, como ventanas.
- **Tipografía en capas.** Un titular gigante condensado queda detrás de algunas celdas y delante de otras, así que se lee cortado y se completa con el scroll («A NEW … SPECIES … IS BORN»).
- **Fichas de información.** Número en píldora («.01», «.02»), titular serif con una parte en cursiva y cuerpo en mono pequeño en mayúsculas.
- **Video que se expande.** Un video fijo empieza dentro de un marco con bordes negros y crece hasta ocupar todo el ancho.
- **Ritmo.** Alterna fondos gris, negro e imagen. Hay una cinta de texto en movimiento arriba, y la sección de equipo usa la misma cuadrícula con firmas manuscritas.

### S-2K (GSAP + ScrollTrigger + Lenis, ~25 pantallas)

- **Capítulos numerados como marchas:** «GEAR 01» a «GEAR 06», con el total «(06)» en la portada.
- **Indicadores fijos en pantalla:**
  - Un velocímetro abajo a la derecha marca el avance del scroll de 0 a 99.
  - Un índice vertical a la izquierda (Brief, Engineering, Milestones…) marca el capítulo activo.
- **Transición de portada.** Bloques blancos rectangulares tapan el video de forma escalonada, como píxeles grandes, y dan paso al capítulo siguiente.
- **Párrafo que se ilumina con el scroll.** El texto empieza en gris claro y cada palabra pasa a negro a medida que se baja.
- **Contorno que se dibuja.** El logotipo «S2000» aparece en contorno y se traza con el scroll.
- **Pantalla dividida con ficha técnica.** Una mitad queda fija con el título del modelo y una tabla de especificaciones (filas con líneas finas y etiquetas en mono). La otra mitad sube con el texto y las fotos. En el modelo siguiente las mitades se invierten.
- **Plano técnico.** Un dibujo de líneas del chasis sobre fondo negro, con textos que aparecen encima a medida que se baja.
- **Titular con eco.** Titular condensado centrado y, detrás, el mismo texto gigante en contorno, muy tenue.
- **Cierre:** párrafo grande sobre una imagen oscura, revelado palabra por palabra.

### Patrones de revelado para reutilizar

| Patrón | Qué pasa con el scroll |
|---|---|
| H. Cuadrícula sobre fondo lento | La retícula sube rápido y el fondo se mueve despacio; las celdas vacías son ventanas |
| I. Titular en capas | El titular gigante queda entre capas y se completa al bajar |
| J. Párrafo que se ilumina | Cada palabra pasa de gris a negro según el avance |
| K. Pantalla dividida con datos | Una mitad fija con la ficha y la otra sube con el relato; se alternan |
| L. Indicador de avance | Un medidor fijo con el progreso y el capítulo activo |
| M. Trazo que se dibuja | Líneas, contornos o gráficas que se dibujan con el scroll |
| N. Marco que se expande | La imagen o el video crece desde un marco hasta todo el ancho |
| O. Transición por bloques | Bloques rectangulares tapan una sección y abren la siguiente |

---

## 3. Later — Made You Look: narración con scroll horizontal

- **Web:** https://later.com/made-you-look/ (revisada el 23 nov 2026 a 1492 × 812 px)
- **Qué tomar:** cómo se narra con el scroll horizontal y cómo hay elementos que se mueven en vertical mientras la página avanza en horizontal.

### Cómo está armado

- **El scroll vertical mueve una pista horizontal.** La pista queda fija a pantalla completa y mide unos 22.700 px de ancho. Lenis suaviza el movimiento.
- **Un capítulo por historia.** Cada uno ocupa un panel de unos 180 vw y sigue el mismo orden:
  1. Bloque de color con el nombre grande, la descripción corta y un video principal.
  2. Fotos de distintos tamaños, repartidas a alturas distintas (arriba, al medio, abajo). Se colocan con medidas en vw y vh.
  3. Cita grande en negrita con comillas de color.
  4. Columna de texto pequeño con un titular corto en negrita.
- **Separador vertical.** Entre capítulos, el nombre de la siguiente historia aparece gigante y girado 90°, con degradado. Funciona como lomo de libro y anuncia lo que viene.
- **Movimiento en dos ejes.** Mientras la pista avanza en horizontal, algunas fotos y textos suben o bajan a su propio ritmo. Eso da profundidad y evita que se sienta como un carrusel plano.
- **Portada editorial.** Título gigante en tres líneas («MADE / YOU / LOOK»), bajada en negrita y créditos pequeños. Al lado, el texto de introducción en columnas.
- **Fondo crema casi blanco.** El color fuerte se reserva para los bloques de cada historia.

### Patrones de narración para reutilizar

| Patrón | Qué pasa con el scroll |
|---|---|
| P. Pista horizontal fijada | La sección queda fija y el scroll vertical la recorre de lado a lado |
| Q. Capítulo con estructura repetida | Bloque de color, imagen principal, fotos, cita y texto, siempre en el mismo orden |
| R. Lomo vertical | Nombre gigante girado 90° que separa capítulos |
| S. Doble eje | Elementos que suben o bajan mientras la pista avanza |
| T. Cita protagonista | Frase grande en negrita con comillas de color, en medio del recorrido |

### Cuidado de usabilidad

- La pista horizontal tiene que mostrar dónde va: barra de avance y capítulo actual.
- Debe funcionar con teclado y con la rueda del mouse sin saltos.
- Si el usuario prefiere menos movimiento, se convierte en una lista vertical normal.

---

## 4. Manual de marca de Toyota

- **Fuente:** https://brand.toyota.com/guidelines (Visual: colores, tipografía, íconos, diagramación; Dinámico: textos animados). Revisado el 23 nov 2026.

### Colores

| Color | HEX | Uso |
|---|---|---|
| Toyota Red | #EB0A1E | Color protagonista. Se usa con intención para dirigir la mirada: elementos clave, acentos y, en expresiones audaces, fondos, sin saturar |
| Blanco | #FFFFFF | Espacio en blanco para que la información respire |
| Negro | #000000 | Tipografía, y fondo digital cuando se necesita contraste |
| Gris | #58595B | Secundario en titulares y cuerpo, solo con contraste suficiente |

- Si la imagen ya tiene rojo (logo o vehículo), se deja que ese rojo resalte en vez de agregar más.
- Para el caso, los colores van en HEX y RGB, porque es una pieza digital.

### Tipografía (Toyota Type)

- **Pesos principales:** Book, Semibold y Bold. Light y Black se usan para casos expresivos.
- **Titular en mayúsculas:** Bold o Semibold, interlineado 90 %, tracking 0, solo con 7 palabras o menos.
- **Titular en oración y subtítulos:** Semibold, interlineado 90 % en digital, tracking 0.
- **Cuerpo:** Book en fondos claros y Regular en texto chico sobre fondo oscuro. Interlineado 145 %.
- **Números:** fuera del titular pueden variar de escala y peso para crear jerarquía. La base de la última línea del texto de apoyo se alinea con la base del número.
- **Alineación:** a la izquierda, centrada o escalonada. **Nunca a la derecha.**
- **Comillas:** colgantes en titulares alineados a la izquierda.
- **No:** otras fuentes, dos textos de la misma escala en el mismo lugar, sombras o efectos de texto.
- **Fuente en el caso:** Toyota Type requiere acceso. Mientras tanto se usa **Figtree**, como en el prototipo (decisión B.11).

### Diagramación

- Retícula de 2 a 12 columnas según el tamaño.
- Margen mínimo de 2X, donde X es la mitad del alto de la plataforma del logo.
- **Motivos:**
  - **Banda gráfica:** franja que ocupa de 1/8 a 1/4 del alto y aloja el texto cuando no puede ir sobre la imagen.
  - **Imagen a sangre:** para poco texto.
  - **Editorial:** varias cajas de texto en la retícula, para contenido extenso.
- **Evitar:** saturar, elementos de la misma escala compitiendo y elementos flotando fuera de la retícula.

### Íconos

- Simples y geométricos, con terminales rectos, círculos y cuadrados perfectos, y ángulos en múltiplos de 15°.
- Tamaños de 16, 32 y 64 px, con trazo de 1, 2 y 3 px.
- Una sola tinta (negro o blanco). A 32 y 64 px se puede sumar un cuadrado u óvalo rojo, de 1/6 a 1/3 del ancho.

### Movimiento (Animated Supers)

- **Dirección hacia adelante:** de izquierda a derecha (progreso), de abajo hacia arriba (positivo) o de atrás hacia adelante (impacto). **Evitar** movimientos hacia atrás, que caen o que encogen.
- **Aceleración suave** al entrar y al salir, como acelerar y frenar un carro.
- **Escalonado:** los elementos llegan uno tras otro, como carros llegando a un destino.
- **Revelado con máscara:** líneas que se dibujan o texto que aparece detrás de una pared invisible.

---

## Síntesis para construir el caso

### Lo que manda cada fuente

- **Lightship:** estructura general, aire, escala extrema y recorrido vertical de la página.
- **Longbow y S-2K:** cómo aparece la información (cuadrícula sobre fondo lento, datos que se dibujan, fichas técnicas, indicador de avance).
- **Later:** los tramos narrativos en horizontal, con movimiento en dos ejes.
- **Manual de Toyota:** color, tipografía, diagramación, íconos y dirección del movimiento.

### Choques resueltos a favor del manual

| Referente | Manual de Toyota | Decisión |
|---|---|---|
| La portada de Lightship encoge el video | Evitar movimientos que encogen | La imagen crece de marco a pantalla completa (patrón N) |
| Esquinas redondeadas (Lightship, Later) | Esquinas rectas, ángulos | Esquinas rectas en todo el caso |
| Fondos beige o crema | Blanco, negro y gris #58595B | Blanco y negro como superficies; gris para lo secundario |
| Degradados de color (Later) | Rojo plano a opacidad completa | Rojo plano, solo en acentos y momentos clave |
| Fuentes serif, mono y condensada (Longbow, S-2K) | Solo Toyota Type | Una sola familia; la jerarquía sale de peso y escala |
| Titulares gigantes en mayúsculas | Mayúsculas solo con 7 palabras o menos | Mayúsculas solo en frases cortas; el resto en oración |

### Usabilidad (prioridad de Dann)

- Navegación del caso siempre visible, con el capítulo activo y el avance (inspirada en el índice de S-2K).
- Ningún texto importante depende solo de la animación: con «reducir movimiento» todo queda visible y estático.
- Las secciones con scroll interno o horizontal congelan la página hasta completarse (regla del sitio) y muestran cuánto falta.
- Contraste AA en todo el texto. El gris #58595B solo va sobre blanco.
- Tamaños en múltiplos de 2 px (regla del sitio).
