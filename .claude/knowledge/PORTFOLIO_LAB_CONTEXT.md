# PORTFOLIO_LAB_CONTEXT.md

> Documento de referencia para las decisiones generales de Portfolio
> Lab.\
> Contiene definiciones consolidadas, no el historial de
> conversaciones.\
> Los detalles visuales, comportamientos específicos y contenidos de los
> casos se definirán en sus fases correspondientes.

## 1. Propósito

Portfolio Lab es el portafolio profesional de Dann, orientado a
oportunidades remotas de Product Design. Debe mostrar capacidad para
comprender problemas, conectar necesidades de usuarios con objetivos de
negocio y viabilidad tecnológica, y transformar ese entendimiento en
soluciones relevantes y diferenciadoras.

El portafolio debe funcionar como una experiencia digital dinámica,
visual, navegable y distintiva, no como una galería de pantallas.

## 2. Posicionamiento

**Rol:** Product Designer, con una perspectiva amplia y capacidad para
abordar problemas de producto de principio a fin.

**Brújula:** Intuitiva · Adaptable · Conceptual.

**Propuesta central:** capacidad de resolver problemas centrados en el
usuario y transformar esa resolución en soluciones con una idea
conceptual diferenciadora.

**Jerarquía de pensamiento:**

Problema → comprensión → análisis → estrategia → concepto → experiencia
→ expresión visual.

La resolución del problema y el concepto tienen prioridad sobre la
decoración visual. La calidad visual sigue siendo importante, pero debe
responder a una intención.

El portafolio debe comunicar pensamiento estratégico, problem solving,
product thinking, diseño centrado en el usuario, colaboración
interdisciplinaria, integración de IA y tecnología, y adaptación a
distintos contextos.

## 3. Capacidades prioritarias

Estas capacidades orientan el portafolio en conjunto. Su asignación a
proyectos concretos queda pendiente de la futura curación de Work.

1.  Resolución de problemas.
2.  Investigación y análisis.
3.  Pensamiento conceptual.
4.  Product thinking.
5.  Diseño de experiencias.
6.  Diseño visual y UI.
7.  Pensamiento sistémico.
8.  Colaboración interdisciplinaria.
9.  IA y tecnología.
10. Adaptabilidad.

## 4. Principios de consistencia

### 4.1 Resolución antes que decoración

El diseño visual debe responder a un problema y una intención, no ser un
fin en sí mismo.

### 4.2 Decisiones justificadas

Las decisiones importantes deben conectar evidencia o razonamiento con
una solución.

### 4.3 Consistencia con personalidad

El sistema transversal mantiene coherencia sin borrar la identidad
particular de cada proyecto.

### 4.4 Usuario, negocio y tecnología

Las soluciones deben considerar necesidades de usuario, objetivos de
negocio y viabilidad tecnológica.

### 4.5 IA con intención

La IA se incorpora cuando aporta valor y se distingue claramente la
contribución de la diseñadora de la contribución de la IA.

## 5. Arquitectura global

La arquitectura V1 está definida así:

-   **Home**
-   **Work**
    -   Colección de proyectos.
    -   Cada proyecto publicado tiene su propia vista de caso de
        estudio.
-   **Trayectoria**
-   **Contact**

La navegación debe ser reconocible y permitir moverse entre las
secciones sin forzar un recorrido lineal. Los detalles exactos de
interacción se resolverán durante el diseño e implementación en Claude
Code.

### 5.1 Home

-   Presentación breve.
-   Acceso inmediato a Work, Trayectoria y Contact.
-   Las tres rutas tienen el mismo nivel de importancia.
-   No depende de una interacción para entender el sitio.
-   La experiencia inicial exacta se definirá durante la etapa de
    diseño.

### 5.2 Work

-   Una colección única de proyectos.
-   Objetivo aproximado inicial: 6--7 proyectos, sujeto a la futura
    curación.
-   Sin filtros ni categorías.
-   Sin jerarquía de proyectos destacados frente a secundarios.
-   Las tarjetas muestran nombre, imagen e industria/contexto.
-   No añadir frases ni listas de capacidades a las tarjetas por
    defecto.

### 5.3 Casos de estudio

-   Los casos no tendrán una plantilla narrativa rígida.
-   Modelo narrativo orientativo: Contexto → Problema → Comprensión →
    Oportunidad → Concepto → Solución → Resultado.
-   Las etapas pueden variar según lo que necesite demostrar cada caso.
-   La profundidad de cada decisión debe ser proporcional a su
    importancia.
-   La evidencia y el razonamiento deben conectar con las decisiones.
-   Cada caso debe cerrar con una síntesis final antes de las opciones
    de navegación.
-   Los resultados deben ser honestos: no inventar métricas ni atribuir
    impacto no demostrado.
-   Se pueden usar hipótesis o investigación simulada cuando sea
    pertinente, identificándolas metodológicamente y sin presentarlas
    como investigación real.
-   La introducción de cada caso será conceptual/narrativa y podrá
    variar según las necesidades del proyecto.
-   La navegación interna, el índice y sus comportamientos se definirán
    durante la implementación.

### 5.4 Trayectoria

-   Incluye formación y experiencia profesional.
-   Se plantea como una línea de tiempo cronológica e interactiva, con
    etapas ampliables.
-   Puede incluir institución/empresa, rol o formación, periodo,
    responsabilidades y aprendizajes.
-   Incluye una síntesis del perfil profesional actual y acceso al CV
    descargable.
-   El CV forma parte de esta experiencia y no requiere una sección
    principal independiente.

### 5.5 Contact

-   Debe sentirse como una experiencia de cierre, no como una página
    tradicional extensa.
-   Acciones previstas: email, LinkedIn y CV.
-   El diseño y el comportamiento concretos se resolverán durante la
    implementación.

### 5.6 Logo

-   El comportamiento del logo aún no está confirmado como decisión
    formal. Resolver durante la definición de navegación/implementación.

## 6. Alcance de V1

### Incluido

-   Home.
-   Work.
-   Trayectoria.
-   Contact.
-   Casos de estudio.
-   Diseño responsive para móvil y escritorio.
-   Integración de IA cuando aporte valor real a la experiencia o al
    proceso.

### Pospuesto

-   Motion e interacciones avanzadas como fase de trabajo independiente.
    Esto no excluye los comportamientos básicos necesarios para que el
    sitio funcione ni impide incorporar mejoras durante la iteración.

### Fuera de V1

-   Laboratorio experiencial.
-   CMS para administrar contenido.

Aunque el CMS queda fuera de V1, el contenido debe mantenerse separado
de los componentes cuando sea viable, para facilitar futuras
actualizaciones. La estructura técnica concreta se decidirá al iniciar
la construcción.

## 7. Dirección de diseño y Design System

El Design System debe crear consistencia sin eliminar la personalidad de
cada proyecto.

### Capas previstas

1.  Foundations.
2.  Components.
3.  Patterns.
4.  Templates.
5.  Behaviors / Motion.

### Elementos que conviene estandarizar

-   Tipografía estructural.
-   Espaciado y grid.
-   Navegación.
-   Accesibilidad.
-   Componentes compartidos.
-   Comportamientos base.
-   Responsive.
-   Principios de movimiento.

### Elementos que pueden variar por proyecto

-   Color contextual.
-   Tratamiento de imágenes.
-   Composición.
-   Recursos gráficos.
-   Metáforas.
-   Dirección de arte.
-   Interacciones especiales justificadas por el concepto.

El sistema debe ser suficientemente completo para sostener el
portafolio, pero no convertirse en un sistema sobredimensionado. Sus
valores concretos se definirán después de establecer la dirección visual
y comenzar a construir necesidades reales.

## 8. Investigación, razonamiento y resultados

Principios de trabajo para los casos:

-   **Investigación:** Pregunta → evidencia → interpretación → decisión.
-   **Insights:** Observación → interpretación → oportunidad → decisión
    → solución.
-   **Cadena de decisión:** Evidencia → razonamiento → decisión →
    resultado.
-   Elegir métodos según la pregunta y el contexto, no aplicar recetas
    de UX de forma automática.
-   Conectar la investigación con las decisiones de diseño.
-   Diferenciar hechos, hipótesis y resultados esperados.
-   No inventar métricas ni presentar supuestos como resultados
    comprobados.
-   La investigación simulada debe identificarse como tal
    metodológicamente.
-   No es obligatorio mostrar transcripciones ni todos los materiales de
    investigación; se mostrará lo que ayude a comprender el
    razonamiento.

## 9. IA y tecnología

La IA forma parte de la perspectiva de diseño de Portfolio Lab, pero no
debe añadirse solo como elemento decorativo o requisito artificial.

Puede aparecer en el proceso de investigación, exploración,
conceptualización, prototipado o en una solución cuando exista una
justificación concreta. Debe quedar claro qué decisiones y aportes
corresponden a la diseñadora y cuáles a la herramienta o sistema de IA.

## 10. Flujo de trabajo y responsabilidades

### ChatGPT --- estrategia y definición

-   Posicionamiento y principios.
-   Arquitectura de información.
-   Decisiones de UX y producto.
-   Coherencia entre decisiones.
-   Planificación.
-   Estructura y contenido de casos cuando se trabaje esa fase.

### Figma --- apoyo puntual

-   Wireframes mínimos.
-   Organización estructural.
-   Referencias y exploraciones visuales cuando sea útil definir algo
    antes de implementarlo.

### Claude Code --- entorno principal de diseño e implementación

-   Diseño visual directamente en código.
-   Construcción de páginas y componentes.
-   Responsive.
-   Estados y comportamientos.
-   Motion cuando corresponda.
-   Depuración, iteración y refactorización.

El enfoque acordado es **Figma-light / Code-heavy**: no diseñar todas
las pantallas en Figma para reconstruirlas después en código. Se
utilizarán wireframes mínimos, referencias y criterios definidos para
iterar principalmente en Claude Code.

### GitHub --- código y control de versiones

-   Repositorio y registro de cambios.
-   Recuperación de versiones y trabajo seguro sobre la implementación.

### Vercel --- publicación

-   Despliegue del sitio y publicación de actualizaciones.

## 11. Dirección técnica propuesta

Stack propuesto, pendiente de confirmación técnica al iniciar la
construcción:

-   Next.js.
-   TypeScript.
-   CSS y sistema visual propio.
-   Motion para animaciones cuando sean necesarias.
-   GitHub para control de versiones.
-   Vercel para despliegue.

No usar una plantilla visual de portafolio como base. Se prefiere una
base técnica que permita construir una experiencia propia. La
configuración definitiva se resolverá en la fase de implementación.

## 12. Estado de decisiones

### Definido

-   Propósito y posicionamiento general.
-   Brújula: Intuitiva · Adaptable · Conceptual.
-   Capacidades prioritarias.
-   Arquitectura global: Home, Work, Trayectoria, Contact.
-   Criterios generales de Work y narrativa flexible de casos.
-   Estructura general de Trayectoria y Contact.
-   Alcance de V1 y exclusiones.
-   Reglas de consistencia.
-   Design System como sistema transversal con personalidad por
    proyecto.
-   Flujo Figma-light / Code-heavy.
-   Responsabilidades generales de las herramientas.

### Abierto

-   Curación y selección definitiva de proyectos.
-   Asignación de capacidades a los proyectos seleccionados.
-   Contenido y profundidad de cada caso.
-   Dirección visual.
-   Valores concretos del Design System.
-   Estructura técnica definitiva.
-   Experiencia inicial detallada de Home.
-   Comportamientos de navegación y logo.
-   Detalles visuales y de interacción durante la implementación.

### Fuera de alcance por ahora

-   Laboratorio experiencial en V1.
-   CMS en V1.
-   Definición exhaustiva de animaciones y microinteracciones antes de
    diseñar.
-   Diseño completo de todas las pantallas en Figma antes de construir.

## 13. Instrucciones para Claude Code

-   Tratar este documento como referencia de las decisiones generales
    del proyecto.
-   No reinterpretar ni cambiar decisiones definidas sin plantear
    explícitamente la contradicción y pedir confirmación.
-   Distinguir entre decisiones confirmadas, propuestas técnicas y temas
    abiertos.
-   No inventar contenido, métricas, investigación o resultados de
    proyectos.
-   Priorizar claridad, accesibilidad, responsive, rendimiento y
    mantenibilidad.
-   Mantener el contenido separado de los componentes cuando sea
    razonable.
-   Evitar complejidad o funcionalidades que no sean necesarias para V1.
-   No implementar Laboratorio ni CMS en V1.
-   No añadir IA, animaciones o interacciones solo por decoración.
-   Cuando falte una decisión importante, presentar opciones concretas y
    una recomendación antes de asumirla.

## 14. Próximos pasos

1.  Revisar este documento y corregir cualquier decisión que no
    represente fielmente lo acordado.
2.  Continuar la planificación de Portfolio Lab sin mezclarla con la
    selección ni el contenido de casos hasta que Dann decida abordarlos.
3.  Definir la dirección visual.
4.  Establecer las bases necesarias del Design System.
5.  Preparar el entorno técnico e iniciar la implementación iterativa en
    Claude Code.
6.  Añadir motion y pulido de interacción de forma progresiva, según el
    valor y las necesidades reales.
7.  Hacer QA responsive y funcional antes de publicar.
