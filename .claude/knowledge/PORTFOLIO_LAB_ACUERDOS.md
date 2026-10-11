# PORTFOLIO_LAB_ACUERDOS.md

> Nota de seguimiento. Complementa `PORTFOLIO_LAB_CONTEXT.md`, que sigue siendo
> la referencia de las decisiones generales. Aquí solo se anota lo acordado
> durante el trabajo, sin historial de conversaciones.

## Fase actual: prototipo de sitio y navegación

**Acordado**

- El objetivo es armar todo el sitio y entender cómo se navega antes de hacer
  nada visual.
- El prototipo es de fidelidad baja o media: bloques, estructura y textos de
  ejemplo. Sin colores, tipografías ni estilo.
- Se construye y se revisa en el navegador, con clics reales, en móvil y en
  escritorio.
- Work usa 6 proyectos de relleno, claramente marcados como ejemplo. No se
  inventan proyectos, métricas ni resultados.
- El lenguaje de trabajo con Dann es sencillo, sin términos técnicos.
- Nada se ejecuta sin que Dann lo pida.

**Decidido en el prototipo**

- Home: presentación breve, tarjeta de acceso a Work y, al final, un bloque
  de contacto que se descubre como detrás de una cortina.
  - Home por módulos de pantalla completa, para ir llenándolos (Dann). Cada
    uno mide una pantalla: la barra de arriba más el módulo suman el alto
    visible de la ventana (en celular, 375 × 750). Orden: 1 Portada ·
    2 Presentación · 3 Proyectos · 4 Imagen a pantalla completa (vacío) ·
    5 Cómo pienso (vacío) · 6 Trayectoria (vacío) · 7 Cierre de contacto.
    - Módulo 1, portada, con fondo oscuro (negro, textos blancos) para
      distinguirla del resto (referencia solo de comportamiento: midu.design): la
      frase "Diseño productos que parten de entender el problema." arriba a la
      derecha; abajo, el rol, "Bogotá, Colombia" con la hora actual y la
      invitación "Desplázate para explorar"; y una palabra gigante de borde a
      borde que por ahora dice "texto aquí" (Dann pidió no ponerle nada). En
      celular, la palabra se parte en dos líneas para que sea más grande. Al
      bajar, la portada se queda quieta y el módulo 2 sube y la tapa.
    - Módulo 2, presentación: frase grande "Convierto problemas reales en
      productos claros, útiles y con una idea detrás." (opción A elegida por
      Dann), un párrafo con las frases clave resaltadas y el resto en gris, un
      texto corto en otra columna y el botón "Ver mi trayectoria". Todo el
      texto aparece palabra por palabra, desenfocado primero y nítido después,
      al entrar en pantalla.
    - Módulo 3, proyectos (reemplaza la tarjeta única de Work): tres tarjetas
      de proyectos que, juntas, forman un solo rectángulo que ocupa el módulo
      completo (ley de cierre: sin huecos ni piezas sobrantes). Debajo, un
      botón "Ver todo mi trabajo" que lleva a Work (texto propuesto, se puede
      cambiar por "Ver más proyectos"). Cada tarjeta lleva a su caso.
      - Escritorio (768 px o más): dos columnas iguales; a la izquierda, una
        tarjeta que ocupa toda la columna; a la derecha, dos tarjetas apiladas
        que se reparten el alto. Separación de 24 px entre todas.
      - Celular: arriba, una tarjeta a todo el ancho; debajo, dos tarjetas más
        pequeñas, una al lado de la otra, que se reparten el ancho. La fila de
        arriba es más alta (proporción 3 a 2). Separación de 12 px entre todas.
        Las tarjetas pequeñas no llevan el botón "+" (la tarjeta entera es el
        enlace) para que el nombre use todo el ancho.
      - Por ahora muestra los proyectos de ejemplo 1, 2 y 3.
    - Módulo 4, imagen a pantalla completa (en la referencia iba justo
      después del texto; Dann pidió ponerla después de los proyectos): un espacio gris que dice "Imagen a pantalla
      completa". Asoma como un marco con márgenes a los lados (8 % del ancho
      en escritorio, 5 % en celular) y esquinas redondeadas (32 px) y, al
      hacer scroll, crece hacia los lados de forma continua hasta llenar la
      pantalla de borde a borde y sin esquinas; llega al 100 % un poco antes
      de quedar alineado. Va ligado al scroll suave del sitio, así que el
      crecimiento tiene ese mismo retraso. El recurso (imagen, video o
      animación) lo define Dann después. Hoy mide una pantalla menos la barra
      de arriba; si la barra pasa a ser transparente sobre la imagen, podría
      ocupar la ventana completa. Con "reducir movimiento", queda siempre
      de borde a borde.
    - Módulos 5 y 6: espacios con borde punteado que dicen qué irá ahí (la
      brújula Intuitiva · Adaptable · Conceptual, y una muestra de la línea
      de tiempo).
  - Arriba solo va el rol, "UX/UI & Product Designer". El nombre no aparece
    en la presentación (Dann lo quitó).
  - Texto (dirección "problema → concepto", borrador elegido por Dann, se
    puede afinar): "Diseño productos que parten de entender el problema." y
    "Conecto lo que necesitan las personas con los objetivos del negocio y lo
    que la tecnología permite, y lo convierto en soluciones con una idea
    propia."
  - Hay scroll en escritorio y en móvil: no tiene que caber todo en la primera
    pantalla.
  - El menú de arriba se mantiene en Home, aunque repite los accesos.
  - El menú tiene "Home" como primera opción (pedido de Dann): lleva a Home y
    se marca solo cuando se está en Home.
  - Menú en móvil (menos de 768 px de ancho): un solo botón que es a la vez
    hamburguesa y X. Al tocarlo, las tres rayas se mueven: la de arriba y la
    de abajo bajan y suben al centro mientras giran a 45° (en unos 400 ms), y
    la del medio se encoge hasta desaparecer, formando la X; al cerrar hacen el
    camino inverso. El botón no cambia de lugar. Al abrirse aparece un panel
    debajo de la barra (que queda siempre visible, con el logo y el botón) que
    ocupa el resto de la pantalla y muestra las cuatro opciones (Home, Work,
    Trayectoria, Contact), cada una con una línea que dice a dónde lleva, y la
    página actual subrayada. Se cierra con el mismo botón, con Escape o al
    elegir una opción; la página de atrás no se desplaza mientras está
    abierto. En escritorio no cambia: las opciones siguen en la barra.
  - La tarjeta de acceso es grande, a casi todo el ancho. En escritorio mide
    550 px de alto (decisión de Dann), desde pantallas de 640 px de ancho hacia
    arriba; en celular conserva la proporción 4:5 (unos 430 px de alto).
  - Tarjetas del Home: solo Work. Trayectoria no tiene tarjeta en Home y se
    alcanza desde el menú (decisión de Dann). La tarjeta de Contact se
    reemplazó por el bloque de contacto del final.
  - Sin texto sobre las tarjetas: se quitó "Elige por dónde empezar" (pedido de
    Dann). Los nombres de las tarjetas pasan a ser títulos de segundo nivel
    justo debajo del título principal.
  - Contacto al final del Home y de Work (Dann pidió replicarlo en Work).
    Referencias de Dann: karolinahess.com y dos capturas de "let's work
    together":
    - Cortina: todo lo anterior de la página sube con el scroll, con las
      esquinas de abajo redondeadas, y descubre el contacto, que queda fijo
      detrás y ocupa una pantalla. En pantallas muy bajas (menos de 600 px de
      alto) se muestra en su lugar, sin cortina, para que nada quede oculto.
    - Movimiento fluido con sensación de retraso (pedido de Dann): en Home y
      Work el scroll se suaviza con Lenis, la misma librería de la referencia
      (lerp 0.1). La página sigue a la rueda con un leve retraso y frena suave;
      "Volver arriba" también sube suave. En táctil queda el scroll del sistema
      y se apaga con "reducir movimiento". Trayectoria no lo usa (tiene su
      propio suavizado).
    - Fondo negro con letras y elementos blancos, provisional mientras Dann
      define el sistema de diseño.
    - Contenido: título en dos líneas ("Trabajemos" / "juntos", la segunda en
      gris; texto de ejemplo; 48 px en móvil → 96 px en escritorio, Dann lo
      pidió más pequeño), "Escríbeme:" con el correo del CV y un botón para
      copiarlo (avisa "Copiado"), botones de LinkedIn y "Descargar CV", y
      abajo "Volver arriba" y "Bogotá, Colombia".
    - Pendiente: enlace real de LinkedIn y archivo del CV.
- Tarjetas grandes (referencia: midu.design), en Home y en Work:
  - La imagen ocupa toda la tarjeta; el nombre va encima, abajo a la
    izquierda, con el contexto debajo. Esquinas redondeadas.
  - Al pasar el mouse, el nombre se cambia por la acción ("Ver proyectos",
    "Ver caso"...) y aparece un botón redondo "+" abajo a la derecha. En
    pantallas táctiles el botón se ve siempre. Respeta la opción de reducir
    movimiento.
  - Work: dos tarjetas por fila en escritorio, una en móvil. Son más anchas
    que altas (proporción 4:3); Dann pidió bajarles la altura. Sin etiquetas
    de capacidades, como ya estaba acordado.
  - Home y Work usan casi todo el ancho de la pantalla, con el mismo margen
    lateral que Trayectoria.
  - De midu solo se toma la estructura. El fondo oscuro, las fotos y los
    colores se ven en la dirección visual.
- Logo: siempre lleva a Home.
- Casos de estudio: índice lateral que marca dónde se está (desplegable en
  móvil).
- Trayectoria usa contenido real tomado del CV de Dann (ver
  `src/content/journey.ts`). Cada etapa tiene etiquetas y una sola frase que
  fusiona lo que hizo y lo que aprendió; textos aprobados por Dann. Los de
  Colectivo23 y Edison no se pudieron contrastar en internet.
- Escritorio, línea limpia con escala de tiempo real: la línea solo muestra los
  años (y el trazo que se llena); no hay barras, etiquetas ni marcadores sobre
  ella. Por debajo mide el tiempo en meses, así ningún año queda "vacío" por
  una etapa larga (Psigma cubre 2020; Mercado Libre, hasta mayo de 2024).
  - La línea empieza en el primer trabajo (jul 2018), no en enero de 2018, y
    termina en el final de 2026.
  - El tramo sin experiencia profesional (jun 2024 – mar 2026, todo 2025) se
    comprime a un tramo corto marcado con un corte "//". En ese tramo solo se
    abre lo académico (Anthropic, IDF).
- Tarjetas en escritorio: quedan fijas en el centro de la pantalla mientras la
  etapa dura (profesional arriba de la línea, académico abajo). Cada una
  muestra periodo, empresa, rol, etiquetas y frase. Una etapa muy corta (Di
  Paola, 3 meses) permanece abierta un mínimo para poder leerla. Sin hover y
  sin clics sobre la línea. Ninguna tarjeta tiene scroll propio. Si coinciden
  dos académicas (2023) se muestran lado a lado.
- Lo académico se ubica en su año (no se conocen los meses). Universidad Jorge
  Tadeo Lozano: estudió de 2015 a 2019; la tarjeta dice "2015 – 2019" y se
  ubica en 2019, el año en que terminó. La línea no empieza en 2015 porque no
  es relevante.
- La línea empieza y termina en el centro de la pantalla; el trazo oscuro llega
  hasta el centro, con una punta que late.
- Scroll suave en todo el sitio (pedido de Dann): todas las páginas tienen el
  scroll con el mismo leve retraso que la línea de tiempo (Home, Work, los
  casos de estudio y Contact). Trayectoria queda fuera porque su línea de
  tiempo ya suaviza su propio movimiento y, si se sumara el otro, el retraso
  se duplicaría. En pantallas táctiles queda el scroll del sistema.
- Microinteracciones de Trayectoria:
  - Entrada (al entrar o recargar), en escritorio: toda la línea del
    encabezado sale al mismo tiempo (Dann): las dos palabras del título salen
    de detrás de una línea invisible y los dos botones ("Descargar CV" y
    "Contact") llegan con un pequeño rebote, todo con el mismo retraso inicial
    (120 ms); el año grande gira como un odómetro mecánico desde
    2000 hasta el año actual, de forma continua y frenando al llegar; en cuanto
    el número se lee en ese año aparece solo la marca vertical de 2018 (antes no
    se ve); desde ella la línea horizontal crece de forma fluida hasta el borde
    de la pantalla (arranca suave y frena al llegar), y cada año siguiente
    aparece únicamente cuando la línea llega a su punto. Mientras la línea
    termina de crecer, la primera tarjeta se despliega desde ella. En móvil:
    título, botones, línea que se dibuja hacia abajo y filas en cascada.
  - Scroll con inercia: el movimiento alcanza al scroll con un retraso ligero
    (unos 140 ms de suavizado). Al recargar a mitad de página no anima desde
    cero.
  - Punta de la línea: un punto que late en el centro de la pantalla, siempre
    igual (sin estela de velocidad, por decisión de Dann).
  - Imán suave: al dejar de hacer scroll a menos de 6 rem del inicio de un
    año, la línea se acomoda sola en ese año.
  - Marcas de año: crecen al acercarse al centro y vuelven a su tamaño al
    alejarse.
  - Tarjetas, sin desvanecidos: nacen del punto exacto de la línea por donde
    pasa el recorrido, como una gota pegajosa (Dann). La tarjeta parte de un
    punto sobre la línea, se estira hacia su lugar como una gota alta y
    delgada (profesional hacia arriba, académico hacia abajo), se pasa un poco
    de ancho, se aplasta y se asienta con rebote (unos 900 ms), con las
    esquinas pasando de muy redondas a las de la tarjeta. Un hilo oscuro la
    une a la línea mientras nace y se afina hasta cortarse. El contenido
    aparece cuando la gota ya casi tiene su forma. Al quedar vacía, la línea
    la reabsorbe (la tarjeta se infla un instante y se encoge hacia el
    punto). No se desliza desde un lado: el punto de origen coincide con el de
    la línea, también cuando hay dos tarjetas académicas lado a lado (2023).
    Si una etapa reemplaza a otra, la tarjeta se queda con el mismo ancho y su
    contenido cambia de forma simple y en secuencia: el anterior se va en un
    instante y luego aparece el nuevo, sin cruzarse ni desplazarse (nada que
    simule un scroll), mientras la tarjeta ajusta su alto. Una tarjeta que
    sigue abierta conserva su lugar aunque cambien sus vecinas.
  - Año grande de fondo: contador mecánico; cada dígito es una columna. Al
    cambiar de año, los dígitos que cambian ruedan con un frenado suave y un
    leve rebote (de 2019 a 2020 giran el último y el penúltimo).
  - Todo se apaga si la persona tiene activada la opción de reducir
    movimiento.
- Teclado: la página avanza con las flechas o la barra espaciadora y las
  tarjetas cambian igual; el botón del cierre, al enfocarlo, lleva al final.
- Pantallas bajas (menos de 760 px de alto): versión compacta para que todo
  quepa sin scroll interno.
- Móvil: la línea de tiempo va a la izquierda y todas las tarjetas a la
  derecha, en una sola columna, agrupadas bajo el año en que empezó cada
  etapa (la Tadeo, en 2019). La escala de tiempo real aplica solo a
  escritorio por ahora.
  - Cómo se distingue la experiencia laboral de los estudios en móvil: cada
    tarjeta lleva una etiqueta con ícono ("Experiencia laboral" con maletín,
    "Estudios" con birrete); la experiencia tiene borde sólido y fondo blanco,
    y los estudios, borde punteado y un fondo gris suave.
  - Al tocar una tarjeta, su detalle (etiquetas y frase) se despliega dentro de
    ella; solo una abierta a la vez.
- Trayectoria en escritorio es una sola línea de tiempo con dos carriles:
  profesional arriba y académico/aprendizajes abajo.
- Escritorio: recorrido horizontal que avanza con el scroll vertical. El año
  que pasa por el centro queda en foco, con el año gigante de fondo. Sin
  panel inferior.
- Móvil: recorrido vertical (ver arriba).
- Título de la página: "Trayectoria profesional", con el botón "Descargar CV"
  a la derecha, a la altura del título. Sin texto introductorio, sin bloque de
  perfil y sin etiquetas de carril ("Profesional" / "Académico"). En el menú
  se mantiene "Trayectoria".
- Botones arriba a la derecha, a la altura del título: "Descargar CV" y
  "Contact" (siempre visibles).
- Cierre: solo un botón, "Ver mis proyectos", que lleva a Work (sin frase,
  por decisión de Dann). No repite Contact, que ya está siempre arriba. En escritorio vive al final de la línea, en la mitad
  derecha que queda libre cuando 2026 llega al centro, y aparece solo al final
  del recorrido; la página termina donde termina la línea. En móvil va debajo
  de la línea de tiempo.
- Año grande de fondo: fijo en la mitad izquierda, apoyado justo encima de la
  línea, lo más grande posible (ocupa todo el ancho libre hasta unos 20 px
  antes de la tarjeta del centro) y con el grosor máximo (900). No toca nunca
  las tarjetas y ya no se desplaza con el recorrido.
- En escritorio, título, CTA y línea de tiempo se ven juntos al entrar, sin
  bajar: forman un área fija del alto de la pantalla. Trayectoria usa todo el
  ancho de la pantalla (las demás páginas siguen con el ancho centrado).
- Rol en Home: "UX/UI & Product Designer" (los cargos reales se muestran como
  UX/UI).
- El vacío entre junio de 2024 y marzo de 2026 se deja visible, sin contenido
  profesional, pero comprimido.

**Cambio respecto al contexto**

- El motion estaba previsto como fase aparte. Por decisión de Dann, Trayectoria
  incluye microinteracciones desde ya (foco, expansión, línea de progreso, año
  de fondo), respetando la opción de reducir movimiento del sistema. El resto
  del sitio sigue en baja fidelidad.
- El contexto (5.4) prevé una "síntesis del perfil profesional actual" en
  Trayectoria. Por decisión de Dann se quitó de la página.
- El contexto (5.1) pide que Home dé acceso inmediato a Work, Trayectoria y
  Contact con el mismo nivel de importancia. Por decisión de Dann, Home muestra
  la tarjeta de Work y termina con el bloque de contacto; Trayectoria se
  alcanza desde el menú. Queda por confirmar si se mantiene así en la versión
  final.
- El contexto dejaba el motion para una fase aparte. Por decisión de Dann,
  Home y Work tienen el efecto de cortina y el scroll suavizado.

**Fuera de esta fase**

- Dirección visual: sensación general, referentes, colores y letras. Se aborda
  después del prototipo.
- Dominios de negocio y estructura técnica del código. No se trabajan ahora.
- Motion en el resto del sitio, laboratorio experiencial y CMS.
- Contenido real de los casos de estudio.

## Orden de trabajo

1. Guardar esta nota.
2. Mapa del sitio y de la navegación, con las decisiones abiertas resueltas.
3. Prototipo navegable en el navegador.
4. Actualizar esta nota con lo decidido y pasar a la dirección visual.

## Decisiones abiertas de esta fase

- Confirmar los textos de Colectivo23 y Edison.
- Omnicom ("Actualidad") llega hasta el final de la línea (dic 2026); revisar
  si se prefiere cortarla en el mes actual.
- La página usa la tipografía del sistema, no la Geist que trae el proyecto
  (no se está aplicando). Revisarlo al definir la dirección visual.
- Palabra gigante de la portada del Home: hoy dice "texto aquí".
- Recurso del módulo 4 del Home (imagen, video o animación).
- Qué tres proyectos van en el módulo 3 del Home, y el texto final del botón
  ("Ver todo mi trabajo").
- Visor de móvil de 375 × 750 (se dejó para después, ver conversación).
- Decidir si la escala de tiempo real llega a móvil (ahí los años vacíos
  siguen existiendo).
- Archivo del CV descargable (el botón aún no descarga nada).

## Pendiente de validar más adelante

- Si la base técnica actual se mantiene o se ajusta (el contexto propone CSS
  propio y el proyecto ya incluye otras herramientas).

## Aparición de las tarjetas de la línea de tiempo
- Sin efecto de gota: la tarjeta solo aparece y desaparece con un fundido corto.

## Detalle de proyecto (/work/[slug]) — referencia midu.design/nova
1. Banner oscuro de borde a borde (alto de pantalla): volver a Work, nombre centrado, industria · año, ficha del proyecto (Rol, Duración, Equipo, Plataforma, Herramientas) e introducción conceptual en dos columnas.
2. Imagen principal en una tarjeta que crece hacia los lados con el scroll, sin llegar al borde (conserva márgenes y esquinas).
3. Dos columnas: izquierda angosta y fija con las etapas (la activa se abre con título y resumen; las demás recogidas); derecha con los bloques de cada etapa (texto, imagen, cita, gráfica de investigación, antes/después, galería, resultado/métricas).
   - Columnas: 25 % izquierda y 75 % derecha (separación de 48 px).
   - La derecha avanza con el scroll de la página (como el referente), la izquierda queda fija.
   - Etapas: Contexto, Problema, Investigación, Oportunidad, Concepto, Solución, Resultado, Síntesis.
   - En celular: una sola columna; cada etapa muestra su título y resumen encima de sus bloques.
4. "¿Y ahora?" (siguiente proyecto, Work, Trayectoria, Contact) y cierre de contacto.
- Todo con textos de ejemplo ("Por definir"); no se inventa contenido del proyecto.
