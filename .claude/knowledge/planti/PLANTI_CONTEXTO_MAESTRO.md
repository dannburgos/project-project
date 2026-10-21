# PLANTI --- Documento maestro para Claude

**Documento vivo de trabajo · No definitivo**

## 0. Instrucciones de uso y gestión de decisiones

Este archivo reúne el contexto del producto, las decisiones acordadas y
la estructura del caso de estudio de Planti. Sirve para orientar el
contenido del portafolio y el trabajo futuro de UX/UI en Claude.

**Este documento no es la última palabra.** La usuaria puede modificar
cualquier decisión cuando lo considere necesario. Si una petición nueva
contradice una decisión anterior: 1. Señala brevemente qué contradice y
qué parte del proyecto afecta. 2. Pregunta si el cambio es intencional o
si debe mantenerse la decisión anterior. 3. Si la usuaria confirma el
cambio, actualiza este documento y las secciones relacionadas. No
continúes construyendo sobre una contradicción sin resolverla.

La decisión final siempre corresponde a la usuaria. Distingue hechos,
decisiones confirmadas, propuestas e hipótesis. No inventes
investigación, métricas, entrevistas, resultados ni pruebas.

### Forma de trabajo

-   Avanzar por etapas y responder de forma concreta.
-   Antes de añadir una sección a la presentación, comprobar si aporta
    valor y si existe trabajo real que la sustente.
-   Las imágenes/boards generados anteriormente para Framer quedan
    cancelados como entregable visual. El contenido conceptual se
    conserva como sustento.
-   El objetivo es un prototipo visual e interactivo para el portafolio,
    no una aplicación de producción.
-   La usuaria construirá wireframes, diseño visual y prototipo
    directamente en Claude.
-   La usuaria compartirá más adelante el sistema de diseño.
-   El `.md` es una guía viva, no una especificación inmutable.

------------------------------------------------------------------------

# PARTE I --- CONTEXTO DEL CASO DE ESTUDIO

## 1. Overview

**Planti** es una experiencia móvil conceptual de cuidado de plantas.

**Propuesta de valor:** Una experiencia que convierte las necesidades de
cada planta en acciones de cuidado simples y personalizadas.

-   **Rol:** Product Designer --- UX/UI.
-   **Tipo:** Proyecto personal/conceptual de portafolio.
-   **Plataforma:** Mobile.
-   **Alcance:** Concepto de producto, UX y UI.
-   **Herramienta original:** Figma.
-   No es un producto real lanzado ni un proyecto para un cliente.

## 2. Contexto

**Título:** *Cuidar una planta parece sencillo. Hasta que tienes que
hacerlo.*

Tener una planta en casa empieza con algo simple: elegirla, encontrarle
un lugar y disfrutarla. Mantenerla saludable implica entender que cada
planta tiene necesidades diferentes: luz, agua, frecuencia, ubicación y
cuidados específicos.

La información para conocer esas necesidades existe. El reto aparece
cuando hay que convertirla en decisiones y acciones que podamos
incorporar a nuestra rutina.

**Idea central:** La información sobre plantas existe. Lo difícil es
convertirla en cuidado.

## 3. Problema

**Título:** *La información existe. Convertirla en cuidado es el
problema.*

Las personas que tienen plantas de interior pueden encontrar información
sobre cómo cuidarlas, pero esta suele ser general y no siempre considera
las necesidades particulares de cada planta ni su contexto. Esto puede
dificultar transformar el conocimiento en acciones concretas: saber qué
hacer, cuándo hacerlo y cómo mantener una rutina constante.

**Tres fricciones conceptuales** 1. **Entender:** ¿Qué necesita
realmente mi planta? 2. **Decidir:** ¿Qué debería hacer? 3.
**Mantener:** ¿Cómo convierto ese cuidado en una rutina?

**Cierre:** El reto no es encontrar información. Es convertirla en
decisiones de cuidado.

**Nota metodológica:** es una hipótesis de diseño, no un hallazgo
validado mediante investigación primaria.

## 4. Usuario objetivo --- perfil hipotético

El perfil es una herramienta conceptual, no una persona entrevistada.

**Laura** - 28 años, diseñadora gráfica. - Vive en un apartamento. -
Tiene cuatro plantas de interior.

**Frase representativa:** "Quiero cuidar bien mis plantas, pero no
quiero tener que acordarme de qué necesita cada una".

**Objetivo:** mantener sus plantas saludables sin complicar su rutina.

**Frustración:** recordar qué necesita cada planta y cuándo debe
cuidarla.

**Necesidades:** entender las necesidades específicas de cada planta;
saber qué hacer y cuándo hacerlo; organizar los cuidados de manera
sencilla.

### Preguntas y respuestas hipotéticas

Son ejemplos creados para orientar el diseño; no son citas ni resultados
de entrevistas reales. - **¿Qué te resulta más difícil?** Recordar qué
necesita cada planta. - **¿Dónde buscas información?** En internet y
diferentes aplicaciones. - **¿Cómo sabes cuándo regar?** Consulto la
información e intento recordarla. - **¿Qué haces si notas algo
extraño?** Busco información para entender qué sucede. - **¿Qué te
ayudaría?** Saber qué hacer y cuándo hacerlo. - **¿Qué esperas de una
aplicación?** Recomendaciones claras y recordatorios sencillos.

No afirmar que se realizaron diez entrevistas ni presentar respuestas
hipotéticas como evidencia real. Si en el futuro se realizan
entrevistas, sustituir estas hipótesis por resultados auténticos.

## 5. Oportunidad de diseño

**Título:** *Convertir información en acciones de cuidado.*

Si el problema no está en encontrar información, sino en saber cómo
aplicarla, la oportunidad consiste en transformar esa información en
decisiones concretas y fáciles de incorporar a la rutina.

**Oportunidad:** Crear una experiencia que transforme las necesidades
específicas de cada planta en acciones de cuidado simples,
personalizadas y fáciles de mantener.

Planti busca ayudar a responder: - ¿Qué necesita mi planta? - ¿Qué debo
hacer? - ¿Cuándo debo hacerlo?

**Cierre:** Planti no busca enseñar más sobre plantas. Busca ayudar a
las personas a cuidarlas mejor.

## 6. Concepto de producto

**Idea principal:** *Primero Planti aprende sobre tu planta. Después te
ayuda a aprender a cuidarla.*

Planti adapta la información sobre cada planta a su contexto y la
convierte en acciones concretas de cuidado.

**Ciclo conceptual:** Conocer → Entender → Actuar → Observar → Aprender.

**Tres pilares** - **Contexto:** entender las características y
condiciones de cada planta. - **Acción:** convertir necesidades en
recomendaciones concretas. - **Rutina:** organizar acciones a lo largo
del tiempo.

**Cierre:** Planti conecta lo que sabemos sobre una planta con lo que
hacemos por ella.

El ciclo es un concepto, no una funcionalidad inteligente validada. No
atribuir al producto automatizaciones avanzadas que no estén definidas
en el MVP.

## 7. Benchmark

Aplicaciones analizadas conceptualmente: - **PictureThis:**
identificación, información de cuidados y diagnóstico. - **Planta:**
guías de cuidado, recordatorios y organización. - **Greg:**
recomendaciones personalizadas, contexto y comunidad. - **LeafSnap:**
identificación, información básica y exploración de plantas.

**Ejes de comparación:** identificación; información de cuidados;
diagnóstico; consideración del contexto; recomendaciones y tareas;
recordatorios y seguimiento; organización de plantas; comunidad y
contenido educativo.

**Síntesis** - Existe abundante información sobre plantas, fichas y
contenido educativo. - Algunas aplicaciones consideran ubicación, luz,
clima o estación. - Varias ofrecen recordatorios y tareas; hay espacio
para explorar cómo conectar recomendaciones, contexto y acciones
cotidianas.

**Oportunidad:** Integrar el contexto específico de cada planta para
orientar acciones claras, relevantes y fáciles de mantener.

No afirmar que Planti es la primera o única solución contextual. No
utilizar puntuaciones, porcentajes ni comparaciones cuantitativas sin
evidencia verificada. El benchmark orienta el concepto; no demuestra
superioridad competitiva.

## 8. Priorización / MVP

El MVP busca transformar las necesidades de cada planta en acciones de
cuidado que el usuario pueda organizar y mantener.

### 01. Conocer mi planta

-   Buscar y seleccionar una planta.
-   Registrar su información y contexto.
-   Consultar necesidades de luz, riego y humedad.

### 02. Crear una rutina

-   Seleccionar cuidados.
-   Definir sus frecuencias.
-   Revisar y confirmar la rutina.

### 03. Mantener los cuidados

-   Consultar tareas pendientes y próximas.
-   Marcar cuidados como realizados.
-   Consultar un historial básico.

**Fuera del MVP:** identificación mediante cámara; diagnóstico avanzado
de enfermedades; comunidad y funciones sociales; asistente
conversacional; recomendaciones avanzadas basadas en la evolución de la
planta.

**Cierre:** Planti conecta las necesidades de cada planta con acciones
concretas que el usuario puede incorporar a su rutina.

No introducir identificación por cámara en los flujos principales: quedó
fuera del MVP.

## 9. Arquitectura de información y navegación

La experiencia se organiza alrededor de dos necesidades: conocer cada
planta y actuar sobre sus cuidados.

**Navegación principal** - **Inicio:** resumen de cuidados, tareas del
día y accesos rápidos. - **Mis plantas:** listado y gestión de plantas;
acceso para añadir una. - **Rutina:** cuidados programados y tareas
pendientes. - **Perfil:** preferencias y configuración.

**Estructura conceptual** - **Inicio:** resumen de cuidados, próximas
tareas, acceso rápido para añadir planta. - **Mis plantas:** lista,
añadir planta, planta específica (resumen, cuidados, historial). -
**Rutina:** tareas, calendario/seguimiento. - **Perfil:** cuenta,
preferencias y notificaciones.

**Decisiones clave** 1. La planta es la unidad principal de información:
sus necesidades se consultan dentro de su contexto. 2. La rutina es una
capa transversal que reúne acciones de cuidado a lo largo del tiempo. 3.
Añadir planta pertenece a Mis plantas, pero también puede iniciarse
desde Inicio. Ambos accesos conducen al mismo flujo.

------------------------------------------------------------------------

# PARTE II --- FLUJOS PRINCIPALES DEL PROTOTIPO

Los tres flujos principales están aprobados. El objetivo del prototipo
es visual e interactivo, no desarrollar una aplicación de producción.

## 10. User Flow 01 --- Incorporar una planta

**Objetivo:** registrar una planta y conocer sus necesidades.

**Recorrido:** Inicio → Añadir planta → Buscar planta → Seleccionar →
Personalizar planta → Necesidades de cuidado → Planta registrada →
opción para crear rutina.

### Pantallas aprobadas

1.  **Inicio:** resumen de cuidados, acceso a Mis plantas y botón Añadir
    planta.
2.  **Buscar planta:** campo de búsqueda, sugerencias y resultados con
    fotografía y nombre.
3.  **Detalle de selección:** fotografía, nombre común, nombre
    científico y opción de seleccionar.
4.  **Personalizar planta:** nombre personalizado, ubicación y
    condiciones de luz. La confirmación de datos puede integrarse aquí.
5.  **Necesidades de cuidado:** luz, riego, humedad y recomendaciones
    principales.
6.  **Planta registrada:** confirmación, resumen y acceso a Crear
    rutina.

**Notas:** la búsqueda se realiza mediante catálogo; no hay
identificación por cámara en el MVP. Crear rutina es una continuación
opcional, no un paso obligatorio. Se pueden combinar vistas si mejora la
experiencia.

## 11. User Flow 02 --- Crear una rutina de cuidado

**Objetivo:** convertir las necesidades de una planta en cuidados
organizados.

**Recorrido:** Iniciar rutina → Seleccionar cuidados → Configurar
frecuencias → Revisar rutina → Confirmar rutina → Consultar tareas
programadas.

### Pantallas aprobadas

1.  **Iniciar rutina:** planta seleccionada, resumen de necesidades y
    botón Crear rutina.
2.  **Seleccionar cuidados:** cuidados recomendados, descripciones
    breves y selección de los que se incluirán.
3.  **Configurar frecuencias:** frecuencia de cada cuidado y fecha del
    próximo cumplimiento.
4.  **Revisar rutina:** resumen de cuidados, frecuencias y programación;
    opción de volver y editar.
5.  **Rutina creada:** confirmación, resumen y acceso a tareas
    programadas.

La rutina debe partir de las necesidades de la planta, para que el
usuario no tenga que definir todos los cuidados desde cero. Las
recomendaciones concretas son contenido de diseño, no consejo botánico
validado.

## 12. User Flow 03 --- Completar un cuidado

**Objetivo:** consultar tareas y registrar los cuidados realizados.

**Recorrido:** Consultar tareas del día → Seleccionar una tarea →
Consultar instrucciones → Marcar como realizado → Ver confirmación y
tareas pendientes.

### Pantallas aprobadas

1.  **Inicio:** tareas pendientes del día, próximas actividades y acceso
    a los cuidados.
2.  **Detalle de la tarea:** planta asociada, tipo de cuidado,
    instrucciones breves y botón Marcar como realizado.
3.  **Cuidado completado:** confirmación visual y resumen de tareas
    pendientes. Puede resolverse como un estado visual dentro de la
    interfaz, sin abrir una pantalla completamente nueva.

------------------------------------------------------------------------

# PARTE III --- VISTAS COMPLEMENTARIAS Y ALCANCE FUTURO

## 13. Vistas compartidas y complementarias

No necesitan convertirse en flujos independientes para el primer
prototipo: - **Inicio:** punto de entrada compartido para los tres
flujos. - **Detalle de planta:** imagen, nombre, características,
necesidades y acceso a su rutina. - **Rutina:** cuidados programados,
frecuencias, próximas tareas y estado. - **Historial:** cuidados
realizados, fechas y planta asociada. - **Perfil:** preferencias,
configuración y notificaciones.

## 14. Flujos secundarios para diagramar si se solicitan

Conservar como alcance complementario: - Consultar el detalle de una
planta. - Editar una rutina. - Gestionar varias plantas.

No desarrollarlos ahora como recorridos completos a menos que la usuaria
lo solicite. Cuando se pidan, diagramarlos y señalar cualquier
dependencia o contradicción con el MVP.

------------------------------------------------------------------------

# PARTE IV --- GUÍA PARA EL TRABAJO EN CLAUDE

## 15. Siguiente etapa

La usuaria trabajará directamente en Claude: 1. Crear wireframes de los
tres flujos principales. 2. Aplicar el sistema de diseño que compartirá
más adelante. 3. Construir el prototipo visual e interactivo. 4. Revisar
la coherencia de los recorridos.

Este documento guía el trabajo, pero no obliga a conservar cada detalle
si una nueva decisión justifica un cambio.

## 16. Criterios para diseño y prototipo

-   Priorizar claridad y continuidad entre los tres flujos.
-   Reutilizar Inicio y otros componentes cuando tenga sentido.
-   No crear una pantalla por cada estado si una misma vista puede
    resolverlo claramente.
-   Mantener la navegación: Inicio, Mis plantas, Rutina y Perfil.
-   Diseñar para móvil.
-   Mostrar cómo la información de cada planta se convierte en acciones.
-   Mantener el MVP enfocado.
-   No añadir funciones fuera del MVP sin plantearlas primero como
    propuesta.
-   No inventar datos de usuarios, resultados, métricas o validaciones.
-   Las pantallas y los comportamientos pueden evolucionar durante la
    exploración; documentar los cambios relevantes.

## 17. Gestión de cambios y contradicciones

Antes de realizar un cambio importante, compara la nueva petición con
este documento.

Ejemplos que requieren aviso: - Añadir identificación por cámara,
actualmente fuera del MVP. - Cambiar los tres flujos principales. -
Cambiar la navegación principal. - Añadir una función avanzada que
cambie el alcance. - Presentar hipótesis como investigación real. -
Cambiar el concepto central.

Si detectas una contradicción, formula una pregunta breve: \> "Esto
contradice la decisión anterior de \_\_\_\_. El cambio afectaría
\_\_\_\_. ¿Quieres reemplazar la decisión anterior o mantenerla?"

Si la usuaria confirma el cambio: - Acepta su decisión. - Actualiza la
sección afectada y las dependencias relacionadas. - No mantengas
versiones contradictorias como si ambas estuvieran vigentes.

## 18. Estado del proyecto

**Definido y aprobado:** fundamentos del caso, MVP, arquitectura, tres
flujos principales, inventarios de pantallas, contenido principal y
vistas complementarias.

**Pendiente:** recibir el sistema de diseño y comenzar
wireframes/prototipo en Claude.

**No realizado:** entrevistas reales, pruebas con usuarios y validación
empírica. No presentar esas actividades como realizadas.

------------------------------------------------------------------------

## Resumen ejecutivo

Planti parte de un problema: la información sobre plantas existe, pero
convertirla en cuidados cotidianos puede ser difícil. La propuesta
conecta las necesidades específicas de cada planta con acciones claras y
una rutina fácil de mantener.

El prototipo visual e interactivo demostrará tres momentos: 1.
Incorporar una planta. 2. Crear una rutina de cuidado. 3. Completar un
cuidado.

**Este documento es una base viva. La usuaria puede cambiar cualquier
decisión. Claude debe señalar contradicciones, pedir confirmación cuando
sea necesario y mantener la documentación coherente con la decisión más
reciente aprobada.**
