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
      derecha; abajo, el rol y la
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
    - Arreglo (Dann lo vio en Chrome en todas las páginas): al hacer scroll,
      "Trabajemos juntos" se asomaba en medio de la página, en una franja que
      cortaba las tarjetas. Causa: el contacto quedaba pintado detrás de toda
      la página, no solo al final, y Chrome pinta la página por franjas; si
      una franja tardaba un instante en pintarse, se veía el contacto por
      ahí. Ahora el contacto solo se pinta en su propio espacio al final de la
      página (el efecto de cortina se ve igual), y una franja tardía mostraría
      el mismo fondo oscuro de la página. Lo mismo con la portada del Home:
      queda quieta solo mientras la presentación y los proyectos la tapan, no
      detrás de todo el Home. Además, las etiquetas de los proyectos perdieron
      el desenfoque de fondo, que hacía más pesado pintar al hacer scroll (no
      se notaba sobre los fondos lisos de ahora).
    - Movimiento fluido con sensación de retraso (pedido de Dann): en Home y
      Work el scroll se suaviza con Lenis, la misma librería de la referencia
      (lerp 0.1). La página sigue a la rueda con un leve retraso y frena suave;
      "Volver arriba" también sube suave. En táctil queda el scroll del sistema
      y se apaga con "reducir movimiento". Trayectoria no lo usa (tiene su
      propio suavizado).
    - Fondo negro con letras y elementos blancos, provisional mientras Dann
      define el sistema de diseño.
    - Contenido: título en dos líneas ("Trabajemos" / "juntos", la segunda en
      gris; texto de ejemplo; en negrita, 48 px en móvil → 80 px en
      escritorio, pedido de Dann), "Escríbeme:" con el correo del CV (32 px
      en escritorio) y un botón para copiarlo (avisa "Copiado"), botones de
      LinkedIn y "Descargar CV", y abajo "Volver arriba".
    - Se quitó la ubicación y la hora de todo el sitio (portada y cierre).
    - Pendiente: enlace real de LinkedIn y archivo del CV.
- Tarjetas grandes (referencia: midu.design), en Home y en Work:
  - La imagen ocupa toda la tarjeta; el nombre va encima, abajo a la
    izquierda, con el contexto debajo. Esquinas redondeadas.
  - Al pasar el mouse, el nombre se cambia por la acción ("Ver proyectos",
    "Ver caso"...) y aparece un botón redondo "+" abajo a la derecha. En
    pantallas táctiles el botón se ve siempre. Respeta la opción de reducir
    movimiento.
  - Work: dos tarjetas por fila en escritorio, una en móvil. Son más anchas
    que altas (proporción 4:3); Dann pidió bajarles la altura.
  - Etiquetas (pedido de Dann): todas las tarjetas de proyecto (Work, bloque
    de proyectos del Home y "más proyectos" al final de cada caso) llevan 2
    palabras clave arriba a la derecha, en cápsulas translúcidas. Las de Planti
    salen de su ficha ("App móvil", "Investigación UX"); el resto son de
    ejemplo ("Palabra clave 1/2"). En las dos tarjetas pequeñas del Home en
    celular no se muestran porque no caben.
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

- El contexto (5 y 5.5) prevé una página de Contact. Por decisión de Dann se
  quitó: ya no está en el menú y /contact no existe. El contacto vive en el
  cierre de contacto al final de Home, Work, About y cada caso. En
  Trayectoria, que no tiene ese cierre, el botón de arriba dice "Escríbeme" y
  abre el correo de Dann.
- El contexto (5.2) pide tarjetas de Work sin listas de capacidades. Por
  decisión de Dann, las tarjetas de proyecto llevan 2 etiquetas con palabras
  clave.
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
- Cursor propio en todo el sitio (pedido de Dann): un punto de 12 px que va
  pegado al puntero y un círculo de 48 px que lo sigue con retraso (el mismo
  suavizado de 140 ms de Trayectoria; tarda cerca de 0,65 s en alcanzarlo).
  Ambos invierten el color del fondo: negros sobre claro y blancos sobre
  oscuro. Solo con mouse: en pantallas táctiles no aparece. Oculta la flecha del
  sistema. Con "reducir movimiento", el círculo va pegado al punto, sin
  retraso.
- Todo el sitio en modo oscuro (decisión de Dann; el prototipo ya no es en
  blanco y negro claro). Usa la paleta oscura del tema, que ya existía. Ajustes
  para que las capas se distingan:
  - El fondo general es un gris casi negro, un paso más claro que el negro puro
    de los banners, los casos y el cierre de contacto (la portada del Home ahora
    es naranja: ver "Color de marca en el sitio"). Las
    superficies elevadas (tarjetas, el módulo "Lo que hago") van un paso más
    claras.
  - Los bordes redondeados donde una capa sube sobre otra llevan una línea
    fina: arriba de la presentación del Home, abajo de la cortina que descubre
    el contacto y abajo de "Lo que hago".
  - Contraste revisado con una auditoría automática en Home, Work, un caso,
    About, Trayectoria y Contact (escritorio y celular): todos los textos
    cumplen el mínimo de legibilidad (4,5:1 normal, 3:1 grande).
- Entrada del sitio, en el Home real. Se propusieron 20 ideas
  (referencias de Dann: benjamincreative.me, dondeeselafter.com, bbdo.com,
  lusion.co y atomic.black). Dann eligió 7 para ver en bocetos (1, 3, 5, 12,
  13, 18 y 19) y dejó dos finalistas (1 y 18). Elegida: **1 · Ensamble del
  símbolo**; la 18 (Del boceto a la interfaz) quedó descartada por ahora y se
  quitó del código.
  - Dann pidió llevarla a una versión "pro" y eligió el paquete recomendado.
    Después dejó solo la versión pro (se quitó la anterior del código).
  - Cuándo corre (decisión de Dann: "completa siempre"): la versión completa,
    cada vez que alguien entra al Home o lo recarga. No se repite al moverse
    entre páginas del sitio, ni si alguien entra por otra página (por ejemplo
    Work) y llega al Home navegando. Al recargar con la página bajada, vuelve
    arriba antes de empezar. La capa viene pintada desde el servidor, así el
    Home no se asoma antes de que empiece; si algo fallara, se quita sola a los
    10 s. La página de prueba `/preview/intro` y la versión corta "al volver"
    se quitaron del código (ya no se usan).
  - Color de marca (dato de Dann): naranja y su gama, con degradados; ese
    estilo va en el banner principal del Home. Para la entrada, Dann eligió
    la propuesta **C · Cuatro tonos, un símbolo**, con la expansión de la B:
    cada pieza llega en un tono de la gama, al encajar se vuelven blancas y el
    naranja se abre desde el símbolo hasta llenar la pantalla (reemplaza la
    cápsula negra). Después Dann descartó el círculo que se abría (se veía
    como un círculo con degradado en el centro) y la línea de progreso: ahora
    el fondo oscuro se desvanece parejo mientras el símbolo viaja al logo.
  - Secuencia: espera las tipografías; las 4 piezas entran
    desde las esquinas en una curva suave, desenfocadas al ir rápido y en el
    orden del monograma, cada vez más seguido, cada una en su tono (ámbar,
    naranja, llama y brasa). Sin zigzag (Dann lo descartó): cada pieza frena
    una sola vez y nunca se pasa de su lugar ni vuelve atrás (verificado cuadro por cuadro). Al
    encajar, el símbolo se aplasta levemente ("clic") y las piezas pasan a
    blanco. Luego el símbolo viaja solo al logo real mientras el fondo oscuro
    se desvanece parejo, sin formas, y la portada entra en cadena (menú, frase
    palabra por palabra, rol y palabra gigante). El logo real toma el relevo
    con un pequeño rebote y recién ahí sale de él el nombre "Portfolio Lab"
    (antes aparecía durante el viaje y el símbolo le pasaba por encima).
    Medido: las piezas encajan cerca de 1,1 s, la pantalla se libera cerca de
    2,1 s y la portada termina de entrar cerca de 2,8 s (varía un poco según
    cuánto tarden las tipografías).
  - Se salta con clic, tecla o scroll: en vez de cortarse, se acelera 4 veces
    hasta el final. No corre con "reducir movimiento".
- Color de marca en el sitio (provisional, hasta que Dann pase los valores
  finales): ámbar `#ffb067`, naranja `#ff7a2f`, llama `#f2541b`, brasa
  `#c2410c` y un casi negro cálido `#160803` de base. Están como colores
  `brand-*` en `globals.css`.
  - Portada del Home: el naranja sube desde el borde de abajo, detrás de la
    palabra gigante, como una luz que asoma, sobre el casi negro cálido; arriba
    a la izquierda, un brillo ámbar suave. Nunca forma un círculo cerrado en el
    centro (Dann lo descartó: en escritorio se veía como un óvalo, un
    "contenedor"). Se mide con el ancho de la pantalla, igual que la palabra,
    así no alcanza el rol ni "Desplázate para explorar", que van justo encima;
    esos textos pasaron de blanco al 60 % a blanco al 80 %.
  - Contraste calculado con el degradado bajo la posición real de cada texto,
    en celular (375 × 812), tableta (820 × 1100 y 1000 × 700) y escritorio
    (1024 × 700, 1076 × 885 y 1440 × 900): todo cumple. Los textos pequeños
    quedan en 6,3:1 o más (mínimo 4,5:1) y la frase grande, en 9,6:1 o más.

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

1. Banner oscuro de borde a borde (alto de pantalla): volver a Work, nombre centrado, industria · año, ficha del proyecto (Scope, Rol, Categoría, Año) e introducción conceptual en dos columnas.
2. Imagen principal en una tarjeta que crece hacia los lados con el scroll, sin llegar al borde (conserva márgenes y esquinas).
3. Dos columnas: izquierda angosta y fija con las etapas (la activa se abre con título y resumen; las demás recogidas); derecha con los bloques de cada etapa (texto, imagen, cita, gráfica de investigación, antes/después, galería, resultado/métricas).
   - Columnas: 25 % izquierda y 75 % derecha (separación de 48 px).
   - La derecha avanza con el scroll de la página (como el referente), la izquierda queda fija.
   - Etapas: Contexto, Problema, Investigación, Oportunidad, Concepto, Solución, Resultado, Síntesis.
   - En celular: una sola columna; cada etapa muestra su título y resumen encima de sus bloques.
4. Galería "Sigue explorando": tres proyectos para seguir viendo, y cierre de contacto.

- Todo con textos de ejemplo ("Por definir"); no se inventa contenido del proyecto.

## Home — módulo 6 (Trayectoria)

- No repite la línea de tiempo (Dann no quiere duplicar información). Es una invitación: una frase grande y tres datos sueltos que se cuentan al entrar en pantalla, y el botón "Ver mi trayectoria" (a /journey).
- Frase propuesta: "Mi recorrido se construyó entre la práctica y el aprendizaje constante." (texto por validar).
- Datos calculados desde el contenido real de Trayectoria: años diseñando (desde 2018), empresas y equipos (6), cursos y estudios (7). Si cambia la línea de tiempo, cambian solos.

## Barra de navegación flotante

- Se quitó la franja blanca de arriba: la barra es una pastilla centrada y flotante (logo + Home, Work, Trayectoria, Contact) que deja ver el contenido por debajo. Las pantallas completas ahora miden toda la ventana.
- En celular: pastilla con logo y botón hamburguesa/X; el menú se abre como una tarjeta centrada debajo de la pastilla (ya no ocupa toda la pantalla ni bloquea el scroll). Escape lo cierra.
- El aviso "Prototipo · contenido de ejemplo" pasó a una etiqueta discreta abajo, al centro.
- La ficha usa "Categoría" (en vez de Plataforma), con temas de ejemplo como E-commerce · Fintech.
- El proyecto 1 se llama "Planti" (nombre real); los demás siguen como ejemplo.
- Banner de Planti: fondo con degradado por manchas verdes a distintas profundidades (referencia: Fabrica de Templifica, en verde). Verde notorio sobre fondo casi negro, con grano fino y oscurecido abajo para leer el texto. Zoom out solo al cargar (opción A): cada mancha se aleja a su ritmo, las cercanas más, para dar sensación 3D. El tono es por proyecto; los que no tienen tono usan el banner negro.
- Ficha del proyecto: Scope, Rol, Categoría y Año (se quitaron Duración, Equipo y Herramientas). El año ya no se repite bajo el título.
- El proyecto 2 se llama "Nodus" y su banner usa el mismo degradado en morados.
- Menú de la barra (desktop): efecto "exclusion tabs" (rauno.me/craft/exclusion-tabs). Una píldora blanca con mezcla "exclusion" se desliza y se estira hasta la opción activa; se ve oscura y el texto que cubre se invierte. Se mueve cuando cambia la página. En celular el menú sigue siendo la tarjeta con hamburguesa.
- El logo "Portfolio Lab" quedó fuera de la pastilla, fijo a la izquierda de la pantalla (blanco con mezcla "difference": se ve claro sobre oscuro y oscuro sobre claro). La pastilla solo lleva el menú: centrada en escritorio, a la derecha en celular.
- Logo de la web: el símbolo de Daniela Burgos (monograma de círculo, cuadrado y dos D) junto a "Portfolio Lab" en dos líneas, fijo a la izquierda. También es el ícono de la pestaña (src/app/icon.svg). Es oscuro sobre fondos claros y blanco sobre superficies oscuras (portadas, banners de proyecto y cierre de contacto).
- Símbolo del logo: figuras a un punto intermedio entre el original y la versión pequeña (95 % del tamaño, separación de 72 sobre 1024; en prueba); ocupa la misma superficie total. Se ajustó la versión usada en la web (icon.svg y brand-symbol); el archivo original de Dann no se tocó.
- Home, módulo 2: se eliminaron las dos columnas de texto ("Sobre mí..." y el párrafo de apoyo); quedan la frase grande y el botón "Ver mi trayectoria". Los textos siguen guardados en el contenido por si se reutilizan.
- Home, módulo 2: se quitó también el botón "Ver mi trayectoria"; queda solo la frase grande.
- Home, módulo 2: alto intermedio, unas tres cuartas partes de la ventana (antes una pantalla completa; luego solo el texto con margen).
- Home: se quitó el módulo "Cómo pienso" (la brújula Intuitiva · Adaptable · Conceptual). Orden actual: 1 Portada, 2 Frase, 3 Proyectos, 4 Imagen a pantalla completa, 5 Trayectoria, 6 Cierre de contacto. La brújula queda pendiente por si se retoma.
- Se quitó el aviso "Prototipo · contenido de ejemplo" del sitio. El texto sigue en el contenido (se usa como descripción de la página en el título del navegador).
- Work: solo se agrega un título grande (texto "Work" en tamaño enorme, estilo del referente); la cuadrícula de proyectos queda igual. Se descartó la propuesta de destacado + filtros + lista.
- Final del detalle de proyecto: galería de 3 proyectos ("Sigue explorando") en lugar de "¿Y ahora?". Regla: primero los que la persona aún no ha visto (se recuerdan en su navegador); si quedan menos de 3, se completan con los ya vistos; nunca aparece el proyecto actual. Incluye el enlace "Ver todos los proyectos".

## About (nueva interna del menú)

- Se agregó "About" al menú. Hoy el menú es Home, Work, About y Trayectoria (se quitó Contact, ver "Cambio respecto al contexto").
- Estructura: 1 Banner grande oscuro con el título "About" enorme (su información la define Dann después; hoy dice "Aquí irá la información del banner") · 2 Herramientas que domino · 3 Resumen de CV · 4 Skills (profesionales y como persona) · cierre de contacto. Cada sección va en dos columnas: título 25 % y contenido 75 %.
- Todo sale del CV de Dann: herramientas (Figma, Miro/FigJam, Google Suite, Notion, ChatGPT y Claude, IA aplicada), resumen (perfil, experiencia y educación/certificaciones tomadas del mismo contenido que la línea de tiempo) y skills profesionales (UX Strategy & Research, UX Design, Producto & Colaboración).
- Skills como persona: por ahora solo la brújula (Intuitiva · Adaptable · Conceptual); el resto está por definir. El botón "Descargar CV" sigue sin archivo real.

## About — ajustes tras los referentes (karolinahess.com/about y helloakriti.com/about)

- Banner: se agregó un cuadro con la palabra "Foto" para tener presente dónde va la foto (arriba a la izquierda); la nota del banner sigue pendiente.
- Herramientas: solo logos, con el efecto de la referencia que pasó Dann (franja de logos de marcas): una franja a todo el ancho, un paso más clara que el fondo, con los logos en gris, sin cajas y bien separados. Se desliza sola y lento de derecha a izquierda (unos 20 px por segundo, pedido de Dann) y los bordes se desvanecen. Hoy son los nombres escritos como marca (Figma, Miro / FigJam, Google Suite, Notion, ChatGPT, Claude) hasta que Dann suba los logos en alta. Con "reducir movimiento" queda quieta y muestra cada herramienta una vez.
- Resumen de CV: se quitó la experiencia (ya está en el CV y en Trayectoria). Quedan el perfil, la educación y certificaciones y el botón de descargar.
- Skills profesionales y Skills como persona: reemplazados por los dos módulos hermanos descritos en la última viñeta de esta sección (antes eran una lista numerada estilo Karolina y notas escalonadas estilo Akriti).
- Se omitió la sección de intereses personales (decisión de Dann).
- Skills profesionales y Skills como persona: dos módulos distintos que se
  complementan. Dann descartó diez propuestas (espejo, hilos, cortina interna,
  pantalla dividida, banda tipográfica, recorrido horizontal, zoom, dos caras,
  interruptor y apilado) porque se veían como diagramas. Lo decidido: módulos
  "hermanos", con la misma estructura visual y sin emparejar cada cualidad con
  un grupo profesional. Referencia de Dann: la web de Fixa (proyecto de
  midu.design), con composición limpia y editorial:
  - Skills profesionales: módulo gris que hace de cortina, con las esquinas de
    abajo redondeadas y al menos una pantalla de alto. Título en dos tonos
    ("Skills profesionales" en gris y "Lo que hago" grande) y tres tarjetas
    parejas con el nombre del grupo y sus habilidades.
  - Skills como persona: la misma diagramación que skills profesionales, en
    modo oscuro (pedido de Dann; se quitaron las pestañas y la tarjeta de
    detalle). Negro con un degradado en grises (provisional). Título en dos
    tonos ("Skills como persona" y "Cómo lo hago") y tres tarjetas con la
    cualidad y su frase. Los dos módulos usan la misma pieza, así un ajuste
    se aplica a ambos.
  - Tarjetas (pedido de Dann): sin íconos, más bajas (unos 176 px en
    escritorio cuando el texto es corto; antes 320) y con efecto de vidrio:
    velo blanco muy suave que difumina lo de atrás, brillo fino arriba y un
    borde delicado más luminoso en las esquinas de arriba a la izquierda y
    abajo a la derecha. Si la persona pide menos transparencias, la tarjeta
    es sólida.
  - Cortina entre los dos: en escritorio el oscuro queda quieto detrás y
    aparece mientras el claro sube. En celular (sus tres tarjetas no caben en
    una pantalla) y en pantallas de menos de 700 px de alto, van uno debajo
    del otro, sin cortina. Bajo las esquinas redondeadas del claro se ve negro.
  - Pendiente: "Lo que hago" y "Cómo lo hago" son texto de ejemplo.

## Casos de estudio por proyecto y caso de Planti (21 de octubre de 2026)

- Cada proyecto tiene su propio contenido de caso y su propio menú lateral de
  capítulos (entre 1 y 10). Los casos con contenido propio viven en
  `src/content/cases/` (Planti: `planti.ts`); los demás usan el caso de
  ejemplo (`example-case.ts`, con las 8 etapas orientativas).
- Planti y Nodus tienen dirección propia: `/work/planti` y `/work/nodus`. Los
  proyectos de ejemplo siguen numerados (`/work/project-3`…). La dirección
  vieja `/work/project-1` ya no existe.
- El plan completo del caso de Planti (estructura de 7 capítulos, dónde va
  cada sección del documento maestro, interacción por capítulo, guía del
  prototipo y pendientes) está en `.claude/knowledge/planti/PLANTI_CASO.md`.
  La fuente es la copia del documento maestro de Dann en la misma carpeta.
- Primer borrador de Planti armado con los textos reales: Problema, Usuario
  (persona simulada Laura y preguntas y respuestas simuladas), Benchmark,
  Concepto (con el ciclo en círculo), Definición (MVP, lo que queda fuera
  tachado, mapa de navegación), Flujos (recorridos en pasos y espacios de
  pantallas) y Prototipo. Cada bloque entra al llegar a él con el scroll; la
  interacción propia de cada capítulo se diseña al iterarlo.
- El color de acento de los capítulos sale del tono del proyecto (verde en
  Planti, morado en Nodus).
- Prototipos: viven dentro del proyecto, cada uno en su carpeta
  (`src/domains/<proyecto>/` y `src/styles/domains/<proyecto>/`) y se ven solos
  en `/prototypes/<proyecto>`, sin la barra, el cursor ni el scroll suave del
  portafolio. Para eso las páginas del portafolio pasaron al grupo
  `src/app/(site)/` y los prototipos al grupo `src/app/(prototypes)/` (las
  direcciones del sitio no cambiaron). El capítulo "Prototipo" del caso lo
  muestra dentro de un celular: queda quieto hasta hacer clic y se puede abrir
  a pantalla completa; en celular se abre directo a pantalla completa.
- Arreglo: el menú lateral de los casos quedaba debajo del logo al hacer
  scroll; ahora queda debajo del logo y la barra.
- Estructura de los casos (aprobada por Dann, referencia midu.design/kiwebank):
  - Menú lateral: el capítulo recogido mide el 80 % de la columna y va corrido
    un poco hacia adentro; el activo crece hacia los dos lados hasta ocupar
    toda la columna y se abre con su título y resumen. El que se abre y el que
    se cierra se animan a la vez, en ancho y alto, en 0,45 s, frenando suave y
    sin rebote (medido en la referencia).
  - Contenido de la derecha: todo va en tarjetas, nada de texto suelto. Cada
    bloque ocupa todo el ancho, la mitad, un tercio o dos tercios (en celular,
    siempre todo), y su tarjeta es plana o con un degradado sutil del color de
    acento del proyecto. Cada párrafo de un texto va en su propia tarjeta. Qué
    se queda del estilo del portafolio y qué toma de Planti se define con el
    sistema de diseño.
- Banner de los casos: la ficha ya no lleva el año (en ningún proyecto). La
  introducción puede tener una frase protagonista grande a la izquierda y un
  texto de apoyo a la derecha. El subtítulo bajo el nombre se lee más grande
  y claro. Planti: subtítulo "App móvil para el cuidado de plantas"; ficha
  Scope "Investigación · UX · UI", Rol "Product Designer · UX/UI", Categoría
  "Estilo de vida", Tipo "Proyecto conceptual"; frase protagonista "Saber qué
  necesita tu planta es fácil. Recordarlo, no."; un solo párrafo de apoyo.
- Planti · capítulo Problema: el nombre de cada capítulo pasó a 24 px en
  todos los casos (Dann pide tamaños siempre en múltiplos de 2). Las tres
  fricciones son un recorrido (opción A, elegida por Dann): al llegar, la
  sección se queda fija al centro de la pantalla y las tarjetas se encienden
  una a una con el scroll (Entender, Decidir, Mantener) mientras una línea las
  une. En celular y con "reducir movimiento" se ven apiladas y encendidas.
- Regla de scroll por módulo (Dann, 21 de octubre): un módulo con
  interacción propia toma el scroll cuando está completo en pantalla. La
  página se congela (lo de arriba no se mueve y lo de abajo no sube); la
  rueda, el trackpad, el dedo o las flechas avanzan la interacción; al subir
  retrocede y en el inicio suelta hacia arriba; al completarse suelta hacia
  abajo con el siguiente gesto (la inercia del mismo gesto no se salta lo que
  viene). Lo que sigue en el capítulo espera escondido y aparece al
  completarse. Mientras tanto, el scroll suave del sitio se pausa y un aviso
  discreto ("Sigue bajando") lo indica. Un enlace interno (por ejemplo un
  capítulo del menú) siempre suelta el módulo. Con "reducir movimiento" no
  toma el scroll. Primer módulo con esta regla: las tres fricciones de
  Planti. Las propuestas visuales de cada módulo se dibujan en el chat y solo
  la elegida pasa al código.
- Planti · Problema: el contexto y el problema pasaron de cinco tarjetas a "La
  brecha" (opción 10B, elegida por Dann): frase y contexto arriba; "Lo que
  sabes" y "Lo que haces" separados por un vacío con una línea que se dibuja al
  llegar; el botón "La brecha" despliega el problema completo. No depende del
  scroll. Detalle de las opciones vistas en PLANTI_CASO.md.
