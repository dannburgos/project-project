# Portfolio Lab · Resumen completo del proyecto

Portafolio profesional de Daniela Burgos (Dann), UX/UI & Product Designer. Este documento cuenta qué se hizo en cada página, cómo está construido y qué falta. Está escrito en lenguaje sencillo; los nombres de archivos van entre comillas de código para poder ubicarlos.

> **Cómo se armó este resumen.** Sale de leer el código actual, los documentos de acuerdos del proyecto (`.claude/knowledge/`) y el historial de git. Donde un acuerdo viejo ya no coincide con el código, manda el código y se avisa en la sección 13.

---

## 1. Qué es y para qué sirve

- **Propósito:** conseguir oportunidades remotas de Product Design. Debe ser una experiencia navegable y con personalidad, no una galería de pantallas.
- **Brújula:** Intuitiva · Adaptable · Conceptual.
- **Principios:** resolver el problema antes que decorar; justificar las decisiones; nunca inventar métricas, resultados ni investigación (lo simulado se dice como tal, salvo en el caso de Planti, donde por decisión de Dann no se menciona).
- **Forma de trabajo:** "Figma-light / Code-heavy": casi todo el diseño se hace directamente en código, con bocetos dibujados en el chat y revisión en el navegador.
- **Fuera de la primera versión:** laboratorio experiencial y CMS. El contenido igual vive separado de los componentes para poder cambiarlo sin tocar el diseño.

---

## 2. Tecnología

| Qué              | Con qué                                                                                                                     |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Framework        | Next.js 16.3.6 (App Router) y React 19.2.8                                                                                  |
| Lenguaje         | TypeScript                                                                                                                  |
| Estilos          | Tailwind CSS 4.1.13 con `@apply` en archivos CSS por componente                                                             |
| Componentes base | shadcn/ui (`button`, `input`, `select`), Radix, `class-variance-authority`, `cnfast` (función `cn()`)                       |
| Movimiento       | GSAP 3.13 (casos y detalle del prototipo), Lenis 1.3.26 (scroll suave) y mucho CSS propio                                   |
| Íconos           | lucide-react                                                                                                                |
| Tipografías      | Geist (principal), Geist Mono y Playfair Display (solo el título "About Me") en el sitio; Poppins en el prototipo de Planti |
| Calidad          | ESLint 9, Prettier, Husky + lint-staged + commitlint (commits con formato `tipo(alcance): descripción`)                     |
| Otros            | Storybook 10, Docker (imagen de producción), pnpm, Node 24                                                                  |

El proyecto nació de una plantilla de Next.js (de `josecortezz16`) y se transformó por completo; lo único que quedó de ella son las herramientas de calidad y los tres componentes de `src/components/ui/`.

---

## 3. Cómo está organizado el código

### 3.1 Carpetas principales

```
src/
├── app/
│   ├── (site)/            El portafolio: Home, Work, caso, About, Trayectoria
│   ├── (prototypes)/      Los prototipos de cada proyecto, a pantalla completa
│   └── globals.css        Colores y tema (modo oscuro, colores de marca)
├── components/            Piezas del sitio, en niveles de Atomic Design
│   ├── atoms/             Piezas simples (cursor, botón copiar, texto que aparece…)
│   ├── molecules/         Piezas compuestas (tarjetas, escenas del caso…)
│   ├── organisms/         Secciones completas (cabecera, portada, línea de tiempo…)
│   └── ui/                shadcn
├── content/               Todo el texto del sitio, separado del diseño
├── hooks/                 La lógica y el movimiento (los componentes solo dibujan)
├── lib/                   Cálculos de movimiento de los casos y de About
├── utils/                 Funciones sueltas (resortes, ejes, cortar líneas)
├── domains/planti/        El prototipo de Planti, autocontenido
└── styles/
    ├── main.css           Importa los estilos del portafolio
    ├── prototypes.css     Importa los estilos de los prototipos
    ├── components/        Un CSS por componente (atoms / molecules / organisms / layout)
    └── domains/planti/    Los estilos del prototipo de Planti
```

### 3.2 Dos "mundos" separados

- **`(site)`** es el portafolio. Tiene su propia cabecera, cursor propio y scroll suave.
- **`(prototypes)`** son las apps de los proyectos (hoy solo Planti). Se ven solas, sin la barra, el cursor ni el scroll suave del portafolio, porque cada prototipo trae su propio sistema de diseño.
- Las direcciones web no cambiaron al separarlos: son grupos de carpetas, no parte de la URL.

### 3.3 Reglas de construcción (las del proyecto)

- **Componentes "tontos".** Solo dibujan; el movimiento y la lógica viven en `hooks/`.
- **Texto fuera del código.** El sitio lee todo de `src/content/` y el prototipo de Planti de `src/domains/planti/messages.ts`. No hay textos escritos directamente en los componentes.
- **Nombres de clase estilo BEM** (`bloque__elemento--variante`) y estilos con `@apply` en un CSS por componente.
- **Clases condicionales** siempre con `cn()`, nunca armando texto a mano.
- **Todo en inglés en el código** (nombres de variables, funciones y archivos), con el texto visible en español.
- **Tamaños en múltiplos de 2 px** (decisión de Dann), con una regla de tres niveles de texto en los casos: 32 / 24 / 16 px.
- **"Reducir movimiento":** todo lo animado se apaga o se vuelve estático si la persona lo pidió en su sistema.
- **Dominios sin mezclarse:** un dominio (como `planti`) no importa nada de otro.

### 3.4 Dónde vive el contenido

| Archivo                                       | Qué guarda                                                                                               |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `content/site.ts`                             | Menú, Home, cierre de contacto, Work, About, y la lista de 6 proyectos con su tono, etiquetas y frase    |
| `content/journey.ts`                          | La línea de tiempo: etapas laborales y académicas del CV, con etiquetas y una frase cada una             |
| `content/cases/planti-story.ts`               | El caso de Planti contado como recorrido                                                                 |
| `content/cases/planti.ts`                     | La versión anterior del caso (por capítulos); ya no se muestra, se conserva por el detalle de los flujos |
| `content/cases/example-case.ts`               | Caso de ejemplo (8 etapas) para los proyectos sin contenido propio                                       |
| `content/case-stories.ts` / `case-studies.ts` | Eligen qué caso corresponde a cada proyecto                                                              |
| `content/*.types.ts`                          | Los tipos que describen cada contenido                                                                   |

Los **proyectos de Work** son 6: **Planti** (real), **Nodus** (con banner morado, aún sin contenido) y 4 de ejemplo claramente marcados.

---

## 4. Sistemas que recorren todo el sitio

| Pieza                           | Qué hace                                                                                                                                                                                                                                                                                                                                                                             | Dónde                                                           |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| **Cabecera flotante**           | Pastilla centrada con Home, Work, About y Trayectoria. En escritorio, una píldora con efecto "exclusion tabs" se desliza hasta la opción activa. En celular es un solo botón hamburguesa que se transforma en X y abre una tarjeta con las opciones. El logo va fijo a la izquierda, con mezcla "difference" (se ve claro sobre oscuro y oscuro sobre claro) y siempre lleva a Home. | `site-header.tsx`                                               |
| **Logo**                        | Monograma de Dann (círculo, cuadrado y dos D) más "Portfolio Lab". También es el ícono de la pestaña.                                                                                                                                                                                                                                                                                | `brand-symbol.tsx`, `app/icon.svg`                              |
| **Modo oscuro**                 | Todo el sitio va en oscuro, con una escala de grises casi negros para distinguir capas.                                                                                                                                                                                                                                                                                              | `layout.tsx`, `globals.css`                                     |
| **Color de marca**              | Ámbar `#ffb067`, naranja `#ff7a2f`, llama `#f2541b`, brasa `#c2410c` y casi negro cálido `#160803`. Son provisionales hasta que Dann pase los valores finales.                                                                                                                                                                                                                       | `globals.css`                                                   |
| **Scroll suave**                | Lenis con retraso leve (0,1). Aplica a todas las páginas **menos Trayectoria**, que ya suaviza su propio movimiento. En pantallas táctiles queda el scroll del sistema.                                                                                                                                                                                                              | `smooth-scroll.tsx`, `use-smooth-scroll.ts`                     |
| **Cursor propio**               | Un punto de 12 px y un círculo de 48 px que lo sigue con retraso; invierten el color del fondo. Solo con mouse.                                                                                                                                                                                                                                                                      | `custom-cursor.tsx`                                             |
| **Cortina**                     | El contenido de la página sube como una cortina y descubre el cierre de contacto, que queda fijo detrás.                                                                                                                                                                                                                                                                             | `page-curtain.tsx`                                              |
| **Cierre de contacto**          | "Trabajemos juntos", correo con botón de copiar ("Copiado"), LinkedIn, Descargar CV y Volver arriba. Está al final de Home, Work, cada caso y About.                                                                                                                                                                                                                                 | `closing-contact.tsx`                                           |
| **Módulos que toman el scroll** | Regla de Dann: un módulo con interacción propia congela la página y avanza con la rueda, el dedo o las flechas; al completarse, suelta. Se avisa con "Sigue bajando".                                                                                                                                                                                                                | `use-scroll-lock-sequence.ts`                                   |
| **Entrada del sitio**           | Al abrir o recargar Home, cuatro piezas del monograma llegan desde las esquinas en tonos de la gama naranja, encajan con un "clic", se vuelven blancas y viajan al logo mientras la portada entra en cadena. Dura unos 2,8 s; se salta con clic, tecla o scroll. No corre al navegar entre páginas ni con "reducir movimiento".                                                      | `site-intro.tsx`, `intro-assemble-pro.tsx`, `use-site-intro.ts` |

---

## 5. Cada página del sitio

### 5.1 Home (`/`)

Archivo: `app/(site)/page.tsx`. Está armado por módulos de pantalla completa que van subiendo uno sobre otro:

1. **Portada** (`home-cover.tsx`): fondo casi negro cálido con una luz naranja que asoma desde abajo, detrás de una palabra gigante de borde a borde. Arriba a la derecha, la frase "Diseño productos que parten de entender el problema."; abajo, el rol y "Desplázate para explorar". La palabra gigante hoy dice "texto aquí" (pendiente).
2. **Frase** (`home-intro.tsx`): "Convierto problemas reales en productos claros, útiles y con una idea detrás." El texto aparece palabra por palabra, desenfocado y luego nítido. Sube y tapa la portada.
3. **Proyectos** (`home-projects.tsx`): tres tarjetas que juntas forman un rectángulo sin huecos (una grande a la izquierda y dos apiladas a la derecha en escritorio; una arriba y dos abajo en celular), más el botón "Ver todo mi trabajo".
4. **Imagen a pantalla completa** (`home-media-placeholder.tsx`): espacio gris con marco redondeado que crece hacia los lados con el scroll hasta llenar la pantalla. Falta el recurso real.
5. **Invitación a Trayectoria** (`home-journey-teaser.tsx`): una frase y tres datos que se cuentan al entrar (años diseñando, empresas y equipos, cursos y estudios), calculados desde el contenido real de Trayectoria, más el botón "Ver mi trayectoria".
6. **Cierre de contacto** detrás de la cortina.

Se quitó de Home: el nombre en la presentación, la ubicación y la hora, y el módulo "Cómo pienso" (la brújula; queda pendiente por si se retoma).

### 5.2 Work (`/work`)

Archivos: `work-carousel.tsx`, `work-carousel-card.tsx`, `use-work-carousel.ts`. Referencias de Dann: productionportugal.com y alcove.com.au.

- La sección se fija y el scroll mueve los proyectos **de lado**, en ciclo sin fin.
- El proyecto del centro es el protagonista: grande, con un **marco de línea fina y un cuadrito en cada esquina**, su nombre y categoría a los lados y su frase debajo. El fondo se mezcla con el color de cada proyecto.
- Al soltar el scroll, el impulso lo lleva hasta la siguiente carta. Un clic en el protagonista abre su marco a pantalla completa y entra al caso; un clic en otro lo trae al centro.
- Entra con un fundido y un deslizamiento. Al completar una vuelta, la página sigue hacia el cierre de contacto.
- Con "reducir movimiento" el nombre y la frase van debajo de cada carta.
- Las imágenes de cada proyecto aún no existen; se ve su etiqueta sobre el color de la marca.

### 5.3 Detalle de proyecto (`/work/[slug]`)

Archivo: `app/(site)/work/[slug]/page.tsx`. Direcciones reales: `/work/planti`, `/work/nodus`, `/work/project-3`… (la vieja `/work/project-1` ya no existe). Hay dos tipos de caso:

**A. Caso contado como recorrido (Planti).** Ver sección 6.

**B. Caso por capítulos (Nodus y los de ejemplo).**

- `case-hero.tsx`: banner de borde a borde con nombre, subtítulo, ficha (Scope, Rol, Categoría) e introducción en dos columnas. Si el proyecto tiene tono, el fondo es un degradado de manchas de color a distintas profundidades que "se aleja" al cargar (verde para Planti, morado para Nodus); si no, es negro.
- `case-media.tsx`: imagen principal en una tarjeta que crece hacia los lados con el scroll.
- `case-chapters.tsx`: dos columnas (25 % / 75 %). A la izquierda, un menú fijo con los capítulos del proyecto (entre 1 y 10): el activo crece y se abre con título y resumen, los demás quedan recogidos (animación de 0,45 s, medida en el referente midu.design). A la derecha, los bloques en tarjetas (texto, imagen, cita, gráfica, antes/después, galería, resultado).
- Todo con textos de ejemplo ("Por definir"): no se inventa contenido.

**Final de todo caso:** `case-more-projects.tsx`, galería "Sigue explorando" con tres proyectos. Primero salen los que la persona aún no ha visto (el navegador lo recuerda con `use-viewed-projects.ts`), nunca el actual, y enlaza a "Ver todos los proyectos". Luego, el cierre de contacto.

### 5.4 About (`/about`)

Archivo: `app/(site)/about/page.tsx`. Todo el contenido sale del CV de Dann.

1. **Banner** (`about-banner.tsx`, `use-about-intro.ts`, `lib/about-intro/`): el título "About Me" está hecho de ventanas recortadas en una capa oscura; de cada letra sale una línea con una nota sobre cómo trabaja. Con el scroll, la pantalla se acerca a la "o", las letras crecen hasta ser enormes y por dentro aparece "Quién soy". Con "reducir movimiento" no hay zoom.
2. **Herramientas** (`about-tools.tsx`): franja de logos en gris que se desliza lento de derecha a izquierda (unos 20 px por segundo) y se desvanece en los bordes. Hoy son los nombres escritos (Figma, Miro / FigJam, Google Suite, Notion, ChatGPT, Claude) hasta que lleguen los logos.
3. **Resumen de CV** (`about-cv.tsx`): perfil, estudios y certificaciones, y el botón de descargar. La experiencia no va aquí porque ya está en Trayectoria.
4. **Skills profesionales** (`about-skills.tsx`): módulo claro que sube como cortina, con las esquinas de abajo redondeadas. Título en dos tonos ("Skills profesionales" y "Lo que hago") y tres tarjetas de vidrio (UX Strategy & Research, UX Design, Producto & Colaboración).
5. **Skills como persona** (`about-personal.tsx`): la misma pieza (`skills-module.tsx`) en modo oscuro con un degradado de grises, que aparece detrás cuando sube el módulo anterior. Hoy muestra la brújula; "Cómo lo hago" es texto de ejemplo.
6. **Cierre de contacto.**

En celular y en pantallas de menos de 700 px de alto, los dos módulos de skills van uno debajo del otro, sin cortina.

### 5.5 Trayectoria (`/journey`)

Archivos: `journey-timeline.tsx` (333 líneas), `use-journey-scroll.ts`, `use-journey-intro.ts`, `journey-year-counter.tsx`, `journey-stage-*.tsx`, `content/journey.ts`, `utils/journey-axis.util.ts`. La única página que **no** usa el scroll suave del sitio.

- **Contenido real del CV:** 13 etapas, desde 3k Concept Events (jul 2018) hasta Omnicom Production (abr 2026, "Actualidad"), más estudios y cursos (Universidad Jorge Tadeo Lozano, Coder House, Uxcel, Colectivo23, Edison, Anthropic, Interaction Design Foundation). Cada etapa lleva etiquetas y una sola frase que une lo que hizo y lo que aprendió.
- **Escritorio:** una línea de tiempo horizontal con dos carriles (profesional arriba, académico abajo) que avanza con el scroll vertical. La línea muestra solo los años y mide el tiempo real en meses; el vacío de jun 2024 a mar 2026 se comprime y se marca con un corte "//". La tarjeta de la etapa queda fija en el centro mientras dura. Un año gigante de fondo funciona como odómetro mecánico: al cambiar de año ruedan solo los dígitos que cambian.
- **Entrada:** el año gira desde 2000 hasta el actual, aparece la marca de 2018 y la línea crece hasta el borde encendiendo cada año; las dos palabras del título y los dos botones ("Descargar CV" y "Escríbeme") entran a la vez.
- **Microinteracciones:** scroll con inercia (unos 140 ms de retraso), punta de la línea que late, "imán" suave que acomoda la línea al inicio de un año, marcas de año que crecen al acercarse al centro. Las tarjetas aparecen con un fundido corto (se descartó el efecto de gota).
- **Móvil:** línea a la izquierda y tarjetas a la derecha agrupadas por año. Cada tarjeta lleva etiqueta con ícono ("Experiencia laboral" con maletín, "Estudios" con birrete); las laborales tienen borde sólido y las de estudios, punteado. Al tocar una tarjeta se despliega su detalle; solo una abierta a la vez.
- **Teclado:** flechas y barra espaciadora avanzan la línea; un botón permite saltar al final.
- **Cierre:** un solo botón, "Ver mis proyectos", que lleva a Work. En escritorio vive al final de la línea.
- Pantallas bajas (menos de 760 px de alto): versión compacta.

### 5.6 Lo que ya no existe

- **No hay página de Contact.** El contacto vive en el cierre de cada página. En Trayectoria el botón dice "Escríbeme" y abre el correo.
- Se quitaron el aviso "Prototipo · contenido de ejemplo", los dos bloques de texto del módulo 2 de Home, y la síntesis del perfil en Trayectoria.

---

## 6. El caso de Planti (la interna más trabajada)

Planti es una app móvil conceptual para el cuidado de plantas. Su caso se cuenta como un **recorrido** (no como capítulos), en `case-story.tsx`.

- **Idea central:** "Saber qué necesita tu planta es fácil. Recordarlo, no." La información existe; lo difícil es convertirla en cuidado diario.
- **Ficha:** Scope "Investigación · UX · UI"; Rol "Product Designer · UX/UI"; Categoría "Estilo de vida"; Tipo "Proyecto conceptual".

### 6.1 Las siete escenas

| #   | Escena       | Archivo                    | Qué cuenta                                                                                                                                                                            |
| --- | ------------ | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 01  | Introducción | `case-story-intro.tsx`     | La imagen crece desde un eje central y se destapan nombre, titular y ficha                                                                                                            |
| 02  | Problema     | `case-story-problem.tsx`   | "La brecha" entre lo que la persona sabe y lo que hace; tres fricciones (Entender, Decidir, Mantener) que llegan rodando con el chat de Laura                                         |
| 03  | Usuario      | `case-story-user.tsx`      | Laura, la persona simulada: su frase, rasgos y hallazgos de sus respuestas                                                                                                            |
| 04  | Benchmark    | `case-story-benchmark.tsx` | PlantIn, PictureThis y Plant Parent: lo que resuelven y lo que dejan sin resolver, y el cierre "Planti guía, acompaña y educa, sin abrumar."                                          |
| 05  | Concepto     | `case-story-concept.tsx`   | "Primero Planti aprende sobre tu planta. Después te ayuda a cuidarla." Tres pilares (Contexto, Acción, Rutina), lo que queda fuera del MVP tachado y la navegación en cuatro pestañas |
| 06  | Flujos       | `case-story-flows.tsx`     | Las pantallas y los tres recorridos                                                                                                                                                   |
| 07  | Prototipo    | `case-story-prototype.tsx` | Las pantallas suben como una "lluvia al revés" y luego llega el celular con el prototipo interactivo                                                                                  |

Entre bloques hay "respiros" (`case-story-respite.tsx`): una imagen a todo el ancho para dar aire.

### 6.2 Cómo se mueve

- **Computador** (`lib/case-story/desktop-stage.ts`, 613 líneas, con GSAP y ScrollTrigger): un escenario fijo con un esqueleto de líneas. **Un gesto de scroll es un paso** (14 pasos en total); entra el siguiente módulo con una curva de impulso y frenado y mientras corre no cuenta otro paso. Solo hay rodado horizontal en tres cambios (brecha → fricciones, usuario → benchmark, idea → "¿Qué hace Planti?"). De los flujos a la lluvia, el scroll mueve todo de forma continua.
- **Celular** (`lib/case-story/mobile-flow.ts`): todo en columna, con entradas calmadas; la lluvia y el celular del prototipo se fijan y los mueve el scroll.
- **Contador** (`case-story-counter.tsx`): reemplaza al menú lateral; dice en qué sección va y deja saltar a otra. En celular, cada sección abre con un "opener" (`case-story-opener.tsx`).
- **Marca propia:** mundo crema claro para la investigación y mundo verde con degradado desde el concepto. Franjas de hojas solo en títulos grandes y respiros.
- **Imágenes:** hay espacios marcados (`case-story-image.tsx`) que dicen qué foto va ahí; las imágenes llegan después, generadas por IA.
- **Prototipo dentro del caso:** se ve en un celular. Queda quieto hasta hacer clic (`use-prototype-activation.ts`), para que el scroll de la página no se atrape adentro; se puede abrir a pantalla completa y en celular se abre directo así.

---

## 7. El prototipo de Planti (`/prototypes/planti`)

Es la app misma, construida dentro del proyecto. Vive en `src/domains/planti/` y sus estilos en `src/styles/domains/planti/`. Tiene su propio sistema de diseño (no se mezcla con el del portafolio).

### 7.1 Tres direcciones

| Dirección                     | Para qué                                                                                                                                                                                                                                                      |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/prototypes/planti`          | El prototipo con su recorrido. Con `?screen=` se ve una pantalla suelta (`splash`, `onboarding`, `home-empty`, `search-look`, `search-more`, `search-gallery`, `search-typing`, `search`, `plant-detail`, `personalize`, `needs`, `registered`, `home-tasks`) |
| `/prototypes/planti/board`    | Tablero: las 11 pantallas del capítulo 1 en fila, una al lado de otra, para revisar el conjunto de un vistazo                                                                                                                                                 |
| `/prototypes/planti/timeline` | Revisión con tiempos: el recorrido corriendo y, al lado, cada paso con cuándo empieza y cuánto dura; tocar un paso lleva el recorrido a ese punto                                                                                                             |

### 7.2 El recorrido del capítulo 1 (primera vez que añade una planta)

Dura unos **28,4 segundos** y recorre:

1. **Portada** con el logo y la foto de hojas. Se pulsa "Iniciar sesión".
2. **Panel de inicio de sesión** (sube con rebote): se escribe usuario y contraseña, se marca "Recuérdame" y se pulsa "Comencemos".
3. **Intro** con foto a pantalla completa: una línea rodea el botón durante 2 s y, al completarse, el botón se pulsa solo.
4. **Inicio** (primera vez): saludo, buscador, fecha, tarjeta "Tu jardín empieza aquí" y botón "Añade tu planta".
5. **Buscar · ¿Cómo es tu planta?**: cuatro tarjetas con foto ("Hojas grandes", "Hojas largas y finas", "Cuelga o trepa", "Tiene flores"). Se eligió esta forma de buscar porque quien empieza no conoce los nombres.
6. **Cuéntanos más**: tamaño con un deslizador (la bolita va de Pequeña a Grande y se queda en Mediana mientras la hoja crece y se encoge con ella) y color de las hojas en muestras redondas.
7. **¿Es alguna de estas?**: galería de coincidencias; se resalta la Ficus Pandurata.
8. **Detalle de la planta**: solo lo general (el cuidado especial se quitó); baja despacio hasta las recomendaciones.
9. **Personalizar**: se escribe el nombre ("Ficus de la sala"), se elige dónde vive (Sala) y cuánta luz recibe (Indirecta).
10. **Necesidades de cuidado**: datos y recomendaciones en una hoja que sube.
11. **Planta registrada**: se dibuja un check y se pulsa "Crea tu rutina", que es el puente al flujo 2.

### 7.3 Cómo funciona por dentro

- **Un solo reloj.** `chapter-one-timeline.ts` tiene una lista de "momentos" (`at`: milisegundo en que empieza, `event`: qué pasa, `scene`: qué se ve). La función `getChapterOneScene(ms)` calcula la escena de cualquier instante, y agrega valores continuos (cuántas letras van escritas, cuánto de la línea del botón está dibujado). Por eso el recorrido se puede **pausar, seguir, repetir, ir al paso anterior o siguiente y arrastrar a cualquier momento**.
- **Una escena, una pantalla.** Cada pantalla recibe como propiedades solo lo que cambia en el tiempo; si no se le indica nada, se ve en su estado final (así funcionan el tablero y `?screen=`).
- **Celular de tamaño real.** El marco mide 375 × 750 con un bisel de 12 px. El escenario (`planti-stage.tsx`) lo escala para que quepa en cualquier ventana sin deformarlo (`use-planti-stage-scale.ts`).
- **Barra de navegación del celular.** Es del marco, no de cada pantalla, así queda quieta mientras las pantallas cambian. Se ve desde Inicio hasta "Planta registrada"; no está en la portada, el inicio de sesión ni la intro. Marcada "Inicio" en Inicio y "Mis plantas" durante todo el flujo de añadir planta.
- **Efecto de toque.** Todo lo que se pulsa o se elige muestra un punto donde se tocó y una onda que se expande, con un pequeño rebote.
- **Pausa total.** En pausa también se congelan las animaciones de CSS; al adelantar o retroceder, las de la pantalla nueva corren un momento.

### 7.4 Sistema de diseño de Planti

- **Verdes:** Forest `#23330e`, Leaf `#3d5718`, Grass `#678e35`, Sprout `#a2c96c`, Dew `#eef4e2`.
- **Neutros:** blancos, grises `#9e9e9e` y `#444444`, y un gris suave `--planti-fog` `#f3f4f6` para el buscador y los botones circulares.
- **Tipografía:** Poppins en sus pesos 300 a 800.
- **Reglas fijas** (de Dann): tamaños en múltiplos de 2 px; todo texto de al menos 14 px (salvo las etiquetas de la barra inferior, 12 px); sin palabras sueltas al final de un texto centrado; tarjetas blancas con borde verde suave, sin tarjetas color crema; la flecha de volver sin sombra; la voz de los textos es de "tú" e imperativo, sin repetir lo que la interfaz ya dice.
- **Cuidado con el contenido:** los textos de cuidado son contenido de diseño, no consejos botánicos; y no hay identificación por cámara (fuera del MVP).

### 7.5 Estructura interna del dominio

```
domains/planti/
├── chapter-one-timeline.ts   La lista de momentos y el cálculo de la escena
├── messages.ts               Todo el texto de la app
├── prototype-screens.ts      Las pantallas que se pueden ver sueltas
├── planti-nav.util.ts        Qué pestaña va marcada en cada pantalla
├── components/atoms/         Botón, casilla, chip, muestra de color, tarjeta de forma…
├── components/molecules/     Campo de texto, buscador, deslizador, cabecera, barra de navegación…
├── components/organisms/     Las pantallas, el celular, el escenario, el reproductor y el tablero
├── hooks/                    Reloj del recorrido, escala del escenario, autoavance del banner…
└── types/                    Los tipos de la escena
```

### 7.6 Lo que aún no está

- **Flujo 2 (Crear una rutina) y flujo 3 (Completar un cuidado):** sin construir. Existen la pantalla de Inicio con tareas y sus piezas (banner, resumen de cuidados, semana, plantas) para cuando lleguen.
- Más información en la pantalla de Necesidades (Dann dirá cuál).
- Transición entre pantallas (Dann aún no elige entre A empuje, B revelado desde el botón o C fundido con profundidad).
- Fotos de las otras tres tarjetas de "¿Cómo es tu planta?" (solo está "Hojas grandes").

---

## 8. Los hooks (lo que mueve las cosas)

| Grupo            | Hooks                                                                                                                              |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Scroll y entrada | `use-smooth-scroll`, `use-scroll-lock-sequence`, `use-site-intro`, `use-intro-run`, `use-intro-assemble-pro`, `use-entry-progress` |
| Home y Work      | `use-work-carousel`, `use-count-up`, `use-rolling-value`, `use-in-view`, `use-surface-under`                                       |
| Trayectoria      | `use-journey-scroll`, `use-journey-intro`, `use-stage-selection`, `use-stable-slots`, `use-slot-presence`, `use-active-section`    |
| About            | `use-about-intro`                                                                                                                  |
| Casos            | `use-case-story`, `use-case-story-counter`, `use-prototype-activation`, `use-viewed-projects`                                      |
| Utilidades       | `use-custom-cursor`, `use-copy-to-clipboard`, `use-disclosure`, `use-measured-height`                                              |

En `lib/` están los cálculos de los casos (`desktop-stage`, `mobile-flow`, `motion`, `rain`) y de About (`layout`, `title-shapes`); en `utils/`, funciones de resorte, ejes de la línea de tiempo y corte de líneas de texto.

---

## 9. Herramientas de trabajo con Claude (carpeta `.claude/`)

- **`CLAUDE.md`** (raíz): las instrucciones del proyecto para el asistente.
- **`.claude/rules/`**: las reglas que se aplican solas (calidad de código, nombres, estructura, estilos, formularios, textos, dominios).
- **`.claude/knowledge/`**: la memoria del proyecto. Los documentos más importantes son `PORTFOLIO_LAB_CONTEXT.md` (decisiones generales), `PORTFOLIO_LAB_ACUERDOS.md` (lo acordado durante el trabajo), y en `planti/` el documento maestro, el plan del caso y la guía del prototipo.
- **`.claude/agents/`**: agentes especializados (análisis de negocio, arquitectura Next, diseño UX/UI, revisión de código, etc.).
- **`copy/`**: perfil de producto, terminología y registro de cambios del texto.

---

## 10. Historia del trabajo (por commits)

| Fecha       | Qué se hizo                                                                                           |
| ----------- | ----------------------------------------------------------------------------------------------------- |
| 11 oct 2026 | Primer prototipo del sitio y teaser de Trayectoria en Home (se quitaron ubicación y hora)             |
| 14 oct      | Página About, entrada naranja de marca y modo oscuro en todo el sitio                                 |
| 21 oct      | Caso de Planti, intro del Home y espacio para prototipos                                              |
| 26 oct      | El caso de Planti pasa a contarse como recorrido con scroll                                           |
| 3 nov       | Prototipo de Planti del capítulo 1 con recorrido cronometrado; carrusel de Work; nueva intro de About |

(Antes de octubre, el historial es de la plantilla original: actualización de dependencias, Docker, Storybook 10 y Next 16.)

Los cambios de noviembre están en la rama `feat/planti-prototype` en GitHub; falta abrir la Pull Request para llevarlos a `main`.

---

## 11. Pendientes

**Contenido que falta**

- Palabra gigante de la portada del Home (hoy "texto aquí") y el recurso del módulo 4 (imagen, video o animación).
- Archivo real del CV y enlace real de LinkedIn.
- Logos de las herramientas de About en alta resolución; "Cómo lo hago" de las skills.
- Imágenes de los casos (portadas de Work, mockups, respiros).
- Contenido real de Nodus y de los cuatro proyectos de ejemplo.
- Confirmar los textos de Colectivo23 y Edison; revisar si "Actualidad" de Omnicom se corta en el mes actual.
- Valores finales del color de marca y tipografía definitiva.
- Confirmar la licencia de las fotos de Planti (el repositorio es público).

**Decisiones abiertas**

- Si la escala de tiempo real de Trayectoria llega a móvil.
- Si Home mantiene sin tarjeta propia a Trayectoria (el contexto original pedía acceso inmediato a las tres rutas).
- Qué proyectos van en el módulo 3 del Home y el texto final de su botón.

**Prototipo de Planti**

- Flujos 2 y 3, más información en Necesidades, transición entre pantallas y las tres fotos que faltan.

---

## 12. Cómo verlo en local

```bash
pnpm install
pnpm dev
```

El sitio abre en `http://localhost:3000` (si el puerto está ocupado, Next usa el siguiente, por ejemplo 3001). Otras tareas: `pnpm lint`, `pnpm build`, `pnpm storybook`.

---

## 13. Qué cambió respecto a lo que decían los acuerdos viejos

El documento `PORTFOLIO_LAB_ACUERDOS.md` guarda decisiones por fecha y algunas ya fueron reemplazadas. Si hay duda, manda el código, y estas son las diferencias:

| Antes                                                           | Ahora                                                      |
| --------------------------------------------------------------- | ---------------------------------------------------------- |
| Work era una cuadrícula de dos tarjetas por fila                | Work es un carrusel que se mueve con el scroll             |
| El caso de Planti tenía capítulos con menú lateral (7, luego 6) | Se cuenta como recorrido de 7 escenas con contador         |
| El banner de About decía "Aquí irá la información del banner"   | Es el título "About Me" con ventanas recortadas y zoom     |
| Las tarjetas de Trayectoria nacían como una gota                | Aparecen con un fundido corto                              |
| El sitio era blanco y negro                                     | Todo en modo oscuro, con color de marca naranja            |
| Había página de Contact                                         | Ya no existe; el contacto vive en el cierre de cada página |
| El Home tenía 7 módulos                                         | Tiene 6 (se quitó "Cómo pienso")                           |
