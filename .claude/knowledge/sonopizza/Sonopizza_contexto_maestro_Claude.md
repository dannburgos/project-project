# SONOPIZZA — Documento maestro de contexto para Claude

> Documento de contexto para construir el prototipo móvil y apoyar la elaboración del caso de estudio de Sonopizza.
>
> **Regla de trabajo:** las decisiones de este documento son una base de trabajo flexible, no obligaciones inamovibles. Durante la ejecución, la usuaria puede modificarlas. Si una nueva indicación o propuesta contradice una decisión anterior, señalar la contradicción de forma concreta y permitir que la usuaria decida si mantiene o ajusta la definición. No bloquear cambios ni asumir que lo anterior debe prevalecer.

---

## 1. Contexto general del proyecto

**Sonopizza** es un caso de estudio conceptual e independiente de rediseño de una aplicación móvil para pedir pizza.

El proyecto busca replantear la experiencia móvil para que las personas puedan descubrir productos, elegir una pizza, personalizarla y revisar su pedido de una manera más clara, visual e intuitiva.

Este trabajo es una propuesta de portafolio. No representa un encargo de la empresa real, una colaboración con ella ni una implementación publicada. No afirmar que la usuaria trabajó para Sonopizza ni que los cambios se desplegaron en un producto real.

### Objetivo del rediseño

Transformar una experiencia de pedido funcional en una experiencia móvil más intuitiva, visual y fácil de recorrer, mejorando la navegación, el descubrimiento de productos, la comprensión de las opciones y la personalización.

### Alcance funcional

El prototipo se concentra en:

- Explorar el menú y sus categorías.
- Buscar y descubrir pizzas y otros productos.
- Consultar el detalle de un producto.
- Elegir tamaño y personalizar ingredientes.
- Añadir extras y comprender sus costos.
- Añadir productos al carrito.
- Revisar, editar y confirmar visualmente un pedido.

### Fuera del alcance actual

No desarrollar ni presentar como funcionalidad real:

- Registro o autenticación de usuarios.
- Gestión de direcciones.
- Pasarela o procesamiento de pagos.
- Seguimiento real de domicilios.
- Gestión administrativa de pedidos.
- Integraciones reales con el restaurante.
- Envío real del pedido al restaurante.

La confirmación final es un estado visual del prototipo. No representa una transacción real ni un pedido efectivamente enviado.

**Plataforma:** aplicación móvil únicamente. No crear versiones web, tablet o desktop ni instrucciones de diseño responsive para esos formatos.

---

## 2. Estructura del caso de estudio del portafolio

El caso de estudio se organiza en seis módulos:

1. **El reto**
2. **Lo que encontramos**
3. **La experiencia propuesta**
4. **La exploración visual**
5. **El producto en acción**
6. **La validación**

Los módulos 01–04 están definidos conceptualmente. El módulo 05 corresponde a la construcción y presentación de la experiencia móvil. El módulo 06 se trabajará después de construir el prototipo.

---

## 3. Módulo 01 — El reto

### Título

**Una nueva experiencia para pedir pizza**

### Contexto

Sonopizza cuenta con variedad de productos y opciones de personalización. La experiencia digital revisada permite explorar el menú, consultar productos y configurar pizzas con ingredientes y extras. Se identificaron oportunidades para mejorar la organización de la información y la manera en que la interfaz acompaña las decisiones.

### Oportunidad

Pedir pizza debería ser sencillo: encontrar lo que se antoja, entender las opciones disponibles y personalizar sin complicaciones. La oportunidad consiste en reconsiderar la estructura de la información y la manera en que la interfaz guía al usuario durante el recorrido.

### Reto

**Transformar una experiencia de pedido funcional en una experiencia móvil más intuitiva, visual y fácil de recorrer.**

### Objetivo

Rediseñar la aplicación móvil de Sonopizza para facilitar el proceso desde la exploración del menú hasta la revisión del pedido, combinando claridad funcional con una dirección visual que fortalezca la identidad de marca.

### Alcance de diseño

- Navegación y exploración móvil.
- Organización y descubrimiento de productos.
- Presentación de tamaños, ingredientes y precios.
- Personalización de pizzas y selección de extras.
- Carrito y revisión del pedido.

---

## 4. Módulo 02 — Lo que encontramos

Este módulo contiene tres apartados:

- **02.1 Auditoría de la experiencia actual**
- **02.2 Benchmark competitivo y patrones de diseño**
- **02.3 Síntesis de hallazgos**

### 02.1 Auditoría de la experiencia actual

La revisión fue visual y heurística, basada en las capturas disponibles. No afirmar que se completó una compra real ni que se probaron todos los estados del sistema. Durante la revisión apareció un mensaje de local cerrado que impidió comprobar el recorrido real de pedido. No describirlo como un error confirmado.

Se revisaron estas dimensiones:

1. **Navegación y categorías:** categorías con desplazamiento horizontal y un selector desplegable; algunas etiquetas son extensas. Oportunidad: mejorar la organización y jerarquía.
2. **Presentación y descubrimiento:** tarjetas con imagen, nombre, descripción, precio y acción para agregar. Algunas descripciones se muestran truncadas y hay variedad de productos. Oportunidad: reforzar jerarquía y comparación.
3. **Información del producto:** vista de detalle con imagen, nombre, descripción y opciones. Oportunidad: mejorar la estructura y jerarquía de la información.
4. **Personalización e ingredientes:** opciones de combinación, ingredientes requeridos u opcionales, extras con precio e instrucciones especiales. Oportunidad: agrupar opciones, distinguir lo obligatorio de lo opcional y comunicar costos.
5. **Presentación de precios:** precios en catálogo y personalización, con variaciones según tamaño y extras. Oportunidad: diferenciar precio base, adicionales y total.
6. **Jerarquía visual e identidad:** uso de tonos crema, marrones, coral y rosa, además de fotografía de producto. Oportunidad: fortalecer consistencia de componentes, tipografía, contraste y tratamiento fotográfico.

No inventar hallazgos adicionales ni atribuir problemas técnicos que no se hayan comprobado.

### 02.2 Benchmark competitivo y patrones de diseño

Referentes considerados:

- Domino’s Pizza Colombia.
- Pizza Hut.
- Papa John’s.

El benchmark se utiliza para observar patrones que pueden orientar la propuesta, no para copiar interfaces. Las dimensiones de comparación son:

- Descubrimiento y navegación.
- Presentación de la información.
- Personalización.
- Claridad de precios.
- Experiencia visual.

No afirmar que se realizó una auditoría exhaustiva de todas las pantallas de los referentes si no existe evidencia de ello.

### 02.3 Síntesis de hallazgos

Tres oportunidades principales:

1. **Descubrir mejor:** una navegación más clara para encontrar lo que se antoja.
2. **Personalizar sin complicaciones:** más claridad en cada elección.
3. **Una experiencia visual más atractiva:** hacer que cada producto sea protagonista.

La dirección de diseño debe facilitar descubrir, elegir y personalizar pizzas, combinando claridad funcional y una propuesta visual atractiva.

---

## 5. Módulo 03 — La experiencia propuesta

### 03.1 Concepto del producto

**Una forma más sencilla de elegir y personalizar.**

La aplicación convierte la elección de una pizza en una experiencia sencilla, visual y flexible. Permite descubrir productos, consultar sus características, personalizarlos intuitivamente y comprender las selecciones y sus efectos en el precio.

Principios:

- Exploración intuitiva.
- Personalización guiada.
- Precios transparentes.
- Diseño visual centrado en el producto.

Idea síntesis: **Descubrir. Elegir. Personalizar. Disfrutar.**

### 03.2 Persona — John Martínez

Persona conceptual y ficticia. No presentarla como participante real de investigación.

- **Nombre:** John Martínez.
- **Edad:** 27 años.
- **Ocupación:** profesional de marketing digital.
- **Ubicación:** Bogotá.
- **Contexto:** persona joven, con poco tiempo libre, que pide comida a domicilio con frecuencia y se desenvuelve con facilidad en aplicaciones digitales.

La persona funciona como herramienta de diseño para orientar decisiones, no como resultado de entrevistas reales.

### 03.3 Customer Journey Map

**Título:** Del antojo al pedido.

Cinco etapas:

1. Surge la necesidad.
2. Explora opciones.
3. Elige y personaliza.
4. Revisa el pedido.
5. Finaliza la compra.

El mapa contempla acciones, pensamientos, fricciones y oportunidades de diseño. La curva emocional y los puntos de fricción son hipótesis de diseño, no datos empíricos de participantes.

### 03.4 Arquitectura de información

La aplicación se organiza en seis secciones:

1. **Inicio:** promociones, productos destacados, combos/ofertas y acceso al menú.
2. **Menú:** pizzas, pizzas especiales, pizzas mitad y mitad, combos, acompañamientos, bebidas, postres y búsqueda.
3. **Detalle del producto:** fotografía, nombre, descripción, ingredientes, tamaños, precio base y acción para personalizar.
4. **Personalización:** tamaño, ingredientes y combinaciones, extras, costos adicionales e instrucciones especiales; acción para agregar al carrito.
5. **Carrito:** productos seleccionados, detalles de personalización, cantidades, subtotal, adicionales y total.
6. **Confirmación:** confirmación visual del pedido dentro del prototipo.

La navegación principal incluye **Inicio, Menú y Carrito**. El detalle y la personalización son pasos del flujo de compra, no pestañas principales. La confirmación aparece al final del recorrido.

No agregar registro, direcciones, pagos ni seguimiento de entrega.

### 03.5 Flujos principales

#### Flujo 01 — Descubrir y elegir una pizza

1. John entra a la aplicación.
2. Puede explorar el menú y sus categorías o utilizar la búsqueda.
3. Ambos caminos conducen al detalle del producto.
4. Consulta fotografía, descripción, ingredientes, tamaños y precio.
5. Decide si esa es la pizza que quiere.
6. Si la elige, continúa a personalización; si no, regresa al catálogo.

#### Flujo 02 — Personalizar y agregar al carrito

1. Parte de la receta original de la pizza.
2. Selecciona el tamaño requerido.
3. Revisa los ingredientes originales y puede retirar los que no desea.
4. Agrega extras, con sus costos visibles.
5. Puede incluir instrucciones especiales.
6. Revisa el resumen y el precio actualizado.
7. Agrega la pizza al carrito.
8. Recibe una confirmación visual con opción de ir al carrito o continuar explorando.

Si falta una selección obligatoria, la interfaz debe indicar qué necesita completar.

#### Flujo 03 — Revisar y confirmar el pedido

1. John consulta el carrito.
2. Verifica pizzas, tamaños, ingredientes, extras, cantidades y precios.
3. Puede editar la personalización, cambiar cantidades o eliminar productos.
4. Revisa el resumen final y el total.
5. Confirma y llega a una pantalla de confirmación visual.

La confirmación es parte del prototipo: no hay pago real, dirección, seguimiento ni envío del pedido al restaurante.

---

## 6. Módulo 04 — La exploración visual

La dirección visual debe sentirse juvenil, divertida, expresiva y con inspiración retro/editorial. Se busca una identidad con personalidad, evitando una interfaz genérica o excesivamente neutra.

### Personalidad y recursos gráficos

- Personalidad divertida y juvenil.
- Fondos cálidos, especialmente crema, en lugar de blanco puro.
- Tipografía expresiva y titulares de carácter.
- Inspiración retro/editorial.
- Formas gráficas, sellos, stickers e ilustraciones.
- La mascota funciona como recurso de identidad y acento gráfico; no es necesario colocarla en todas las pantallas.

### Tipografías definidas

- **Titan One:** exploración del logotipo/wordmark.
- **Bowlby One SC:** titulares principales.
- **DM Sans:** interfaz, textos, botones, precios y navegación.

Se pueden cargar desde Google Fonts o utilizar archivos locales si eso facilita la consistencia del prototipo. Mantener jerarquías legibles y reservar las tipografías más expresivas para usos de identidad y titulares.

### Paleta cromática

Se seleccionó como referencia una paleta con estos grupos:

- Navy Blue.
- Royal Blue.
- Electric Blue.
- Bright Orange.
- Soft Orange.
- Off White.
- Dark Gray.

La paleta debe conservar el contraste entre azules y naranjas, con una base clara y cálida. Los códigos HEX exactos deben tomarse de la referencia original o confirmarse con la usuaria. **No inventar ni presentar códigos aproximados como valores definitivos.** La referencia inicial de off-white puede ajustarse hacia un crema cálido para mantener la dirección aprobada.

### Logotipo

Se exploró una propuesta de wordmark **SONO PIZZA**, con letras blancas sobre fondo azul profundo y recursos gráficos relacionados con pizza. Es una dirección visual de referencia para el prototipo, no necesariamente un archivo vectorial final. No sustituir el nombre Sonopizza por el nombre de otra marca.

### Mascota

Se exploró una mascota ilustrada basada en una fotografía de referencia proporcionada por la usuaria. Rasgos que se busca conservar en la dirección del personaje:

- Estilo ilustrativo, plano y tipo sticker; evitar un retrato realista.
- Gorra.
- Sonrisa y gesto amigable.
- Lunar distintivo.
- Personaje comiendo una porción de pizza.
- Línea y formas gráficas limpias, con colores coherentes con la identidad.

La mascota puede aparecer en momentos puntuales de la experiencia y como recurso de marca. No es necesario forzarla en cada pantalla. La ilustración explorada es una referencia de estilo; la usuaria puede ajustarla durante la ejecución.

### Fotografía de producto

No se requiere definir un sistema publicitario fotográfico extenso. Utilizar fotografías realistas y apetitosas, eligiendo el encuadre según el contenido:

- Cenitales para catálogo o vistas generales.
- Acercamientos para ingredientes, queso y texturas.
- Otros ángulos cuando ayuden a mostrar mejor el producto.

La fotografía debe apoyar la comprensión y el atractivo del producto sin competir con la información funcional.

### Criterios de componentes ya conversados

Estos criterios son referencias iniciales, no especificaciones exhaustivas de UI:

- **Tarjetas de producto:** fotografía protagonista; nombre y descripción breve debajo; precio visible y acción para agregar al carrito; fondo crema y acentos de la identidad; esquinas moderadamente redondeadas.
- **Selectores de personalización:** combinación de patrones; tarjetas seleccionables para tamaños, listas sencillas para ingredientes y extras, y tarjetas para opciones especiales cuando necesiten imagen o explicación.

El resto del sistema de componentes, medidas, espaciados, estados detallados, microinteracciones y decisiones específicas de pantalla se puede resolver durante la ejecución del prototipo.

---

## 7. Módulo 05 — El producto en acción

Este módulo se desarrollará durante la construcción del prototipo móvil.

Objetivo: traducir el concepto, la arquitectura, los flujos y la dirección visual en una experiencia navegable y coherente.

### Orden de trabajo sugerido

1. Revisar este documento y confirmar el alcance.
2. Preparar la base visual del prototipo con la identidad de Sonopizza.
3. Construir las pantallas necesarias para la arquitectura de información.
4. Implementar los tres flujos principales.
5. Conectar navegación, controles y estados necesarios para recorrer el prototipo.
6. Revisar consistencia visual, comprensión, contenido y comportamiento.
7. Ajustar la experiencia según lo que se observe durante la construcción.

No crear pantallas o funcionalidades fuera del alcance sin conversarlo con la usuaria. Si una funcionalidad adicional parece necesaria, explicar por qué y pedir una decisión.

---

## 8. Módulo 06 — La validación

**Pendiente para después de construir el prototipo.**

Una vez construidos visualmente el prototipo, las pantallas y los tres flujos, se definirá una evaluación simulada con apoyo de IA.

La evaluación podrá contemplar:

- Pruebas de usabilidad simuladas.
- Escenarios y tareas basados en los flujos reales del prototipo.
- Evaluación de la facilidad para descubrir y elegir una pizza.
- Evaluación de la comprensión de opciones, ingredientes y precios.
- Evaluación de la revisión y edición del carrito.
- Identificación de posibles fricciones.
- Registro de hallazgos y oportunidades de mejora.
- Propuesta de ajustes.

El diseño concreto de las pruebas, escenarios y criterios dependerá de las pantallas e interacciones que finalmente se construyan. No anticipar resultados.

**Transparencia:** esta será una validación simulada/asistida por IA, no una investigación con participantes reales. No inventar citas, participantes, tasas de éxito, métricas ni resultados y no presentar la simulación como una prueba real de usuarios.

---

## 9. Instrucciones de colaboración para Claude

- Utiliza este documento como contexto de partida del proyecto.
- Trabaja en español, salvo que la usuaria solicite otro idioma.
- Mantén el foco en una aplicación móvil.
- Prioriza claridad funcional, jerarquía visual y consistencia de marca.
- Respeta el alcance conceptual y no simules integraciones reales.
- No inventes investigación, métricas, testimonios, resultados ni capacidades de negocio.
- No presentes hipótesis como hechos comprobados.
- No agregues funcionalidades no definidas sin explicar su propósito y consultarlo.
- No conviertas este documento en una especificación rígida: las decisiones pueden cambiar durante la ejecución.
- Si una nueva solicitud contradice una definición anterior, explica brevemente qué entra en conflicto y pregunta qué decisión debe prevalecer. La usuaria puede cambiar libremente una definición anterior.
- Cuando una decisión esté incompleta (por ejemplo, un código de color exacto), no rellenar el vacío con datos inventados. Proponer una opción y dejar claro que requiere confirmación.
- Trabaja de forma progresiva: construir, revisar y ajustar; evita entregar demasiadas decisiones nuevas de una sola vez.

## 10. Estado general

| Módulo | Estado |
|---|---|
| 01. El reto | Definido |
| 02. Lo que encontramos | Definido |
| 03. La experiencia propuesta | Definido |
| 04. La exploración visual | Dirección definida; detalles visuales pueden evolucionar |
| 05. El producto en acción | Por construir |
| 06. La validación | Pendiente hasta contar con el prototipo |

**Principio final:** Sonopizza es un proyecto de diseño en evolución. Este documento conserva el contexto y evita perder decisiones, pero siempre debe permitir que la usuaria refine, reconsidere o cambie el rumbo durante la ejecución.
