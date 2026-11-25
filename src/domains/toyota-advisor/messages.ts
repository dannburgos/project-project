// Textos del prototipo «Encuentra tu Toyota» (copy de la parte D del caso).
// Los textos con {llaves} son plantillas
export const toyotaAdvisorMessages = {
  meta: {
    boardTitle: 'Toyota · Encuentra tu Toyota · Pantallas'
  },
  board: {
    eyebrow: 'Prototipo · Toyota — Beyond the Model',
    title: 'Encuentra tu Toyota',
    hint: 'Las pantallas del recorrido a tamaño real (1440 px). Las cards grises marcan dónde va cada recurso visual.',
    sizeLabel: '1440 × {height}',
    frames: {
      home: {
        title: 'Home de Toyota',
        note: 'El módulo vive dentro del home: desde el hero, el menú o la sección 01 se entra a la asesoría sin salir del sitio.'
      },
      use: {
        title: 'Asesoría · Pregunta 1',
        note: 'Una sola pregunta junta uso, caminos y carga: se eligen todas las situaciones que aplican y cada una muestra qué suma.'
      },
      car: {
        title: 'Asesoría · Pregunta 2',
        note: 'Personas, tipo y motor en tres filas, como un configurador. Las personas se ven como puestos; tipo y motor son opcionales.'
      },
      priorities: {
        title: 'Asesoría · Pregunta 3',
        note: 'Elige hasta 3. A la derecha, el sistema muestra en vivo qué suma cada respuesta y cómo se reordena el ranking.'
      },
      budget: {
        title: 'Asesoría · Pregunta 4',
        note: 'El presupuesto se elige sobre una regla con el precio real de cada modelo: se ve al instante quién queda en juego.'
      },
      profile: {
        title: 'Tu perfil',
        note: 'Las respuestas, lo que suma cada una y la lectura del sistema marcada como interpretación. Se edita sin salir del recorrido.'
      },
      edit: {
        title: 'Tu perfil · Editando',
        note: 'Editar abre la pregunta en un panel al costado. Antes de guardar, se ve cómo cambiaría el ranking.'
      },
      result: {
        title: 'Resultado',
        note: 'Un destacado grande y dos alternativas. Cada razón dice a qué respuesta responde; la barra de comparar acompaña al bajar.'
      },
      near: {
        title: 'Resultado · Se acercan',
        note: 'Ninguno cumple todo: dos caminos enfrentados, cada uno con lo que cumple y lo que es distinto a lo pedido.'
      },
      closest: {
        title: 'Resultado · La opción más cercana',
        note: 'La alternativa se pasa del presupuesto: se ve cuánto sobre la regla y qué se gana a cambio.'
      },
      detail: {
        title: 'Detalle del vehículo',
        note: 'Por qué es para ti, un recorrido con puntos sobre la foto unidos a tus prioridades, versiones con tu presupuesto marcado y la ficha.'
      },
      compare: {
        title: 'Comparación',
        note: 'Columnas fijas arriba, «Solo diferencias» encendido y el mejor valor de cada fila marcado en rojo.'
      },
      analysis: {
        title: 'Análisis',
        note: 'Propuesta pendiente de aprobación: el perfil se cruza con los 6 modelos mientras una línea los recorre.'
      }
    }
  },
  site: {
    logo: 'Logo Toyota',
    menu: ['Vehículos', 'Encuentra tu Toyota', 'Cotizador', 'Concesionarios'],
    newBadge: 'Nuevo',
    search: 'Buscar',
    quote: 'Cotizar',
    exit: 'Salir',
    module: 'Encuentra tu Toyota'
  },
  home: {
    hero: {
      eyebrow: 'Toyota Colombia',
      titleTop: 'Vehículos nuevos',
      titleBottom: 'Toyota en Colombia',
      lead: 'Autos, camionetas, pick-ups e híbridos para cada forma de moverte.',
      primary: 'Encuentra tu Toyota',
      secondary: 'Ver catálogo',
      visual:
        'Foto · Corolla Cross roja en carretera de montaña colombiana, de día, luz cálida, encuadre 3/4 frontal',
      teaserEyebrow: '¿No sabes cuál elegir?',
      teaserText:
        'Responde 4 preguntas y te mostramos los que mejor se ajustan.',
      teaserCta: 'Empezar'
    },
    marquee: [
      'Automóviles',
      'Camionetas y SUV',
      'Pick-ups',
      'Híbridos',
      'Encuentra tu Toyota'
    ],
    module: {
      index: '01',
      indexLabel: 'Encuentra tu Toyota',
      eyebrow: 'Encuentra tu Toyota',
      titleLight: 'Encuentra el Toyota',
      titleBold: 'que se adapta a tu vida',
      lead: 'Responde 4 preguntas sobre cómo te mueves y qué te importa. Te mostramos los modelos que mejor se ajustan y por qué.',
      chips: ['4 preguntas', '1 minuto', 'Sin registrarte'],
      primary: 'Empezar asesoría',
      secondary: 'Ver catálogo',
      note: 'Las recomendaciones salen del catálogo de vehículos nuevos de Toyota Colombia.',
      steps: [
        {
          title: 'Cuéntanos cómo te mueves',
          text: 'Uso, espacio, prioridades y presupuesto'
        },
        { title: 'Revisa tu perfil', text: 'Confirma o ajusta tus respuestas' },
        {
          title: 'Descubre tus opciones',
          text: 'Con las razones de cada recomendación'
        }
      ],
      scanner:
        'Silueta lateral de un Toyota en línea blanca, sobre fondo negro',
      scannerTags: ['Largo 4.460 mm', 'Alto 1.620 mm', 'Al piso 161 mm'],
      scannerCaption: '6 modelos · 19 versiones'
    },
    catalog: {
      index: '02',
      indexLabel: 'Catálogo',
      title: 'Explora los modelos',
      link: 'Ver catálogo completo',
      filters: ['Todos', 'Automóviles', 'Camionetas y SUV', 'Pick-ups'],
      from: 'Desde',
      seats: 'Puestos',
      engine: 'Motor',
      hybrid: 'Híbrido',
      compare: 'Comparar',
      visual: 'Foto · {model}, perfil lateral, fondo de estudio gris',
      priceNote: '*Precio sugerido'
    },
    footer: {
      legal:
        'Concepto de diseño para portafolio. No es un sitio oficial de Toyota. Datos y precios sugeridos tomados de toyota.com.co, vigentes del 1 al 30 de noviembre de 2026. Siluetas e imágenes de referencia.',
      columns: [
        {
          title: 'Vehículos',
          links: ['Automóviles', 'Camionetas y SUV', 'Pick-ups', 'Híbridos']
        },
        {
          title: 'Compra',
          links: ['Encuentra tu Toyota', 'Cotizador', 'Prueba de manejo']
        },
        { title: 'Toyota', links: ['Concesionarios', 'Servicios', 'Contacto'] }
      ]
    }
  },
  advisor: {
    blocks: {
      use: 'Tu uso',
      car: 'Tu carro',
      priorities: 'Tus prioridades',
      budget: 'Tu presupuesto'
    },
    counter: 'Pregunta {current} de {total}',
    counterDone: 'Asesoría completa',
    toProfile: 'Ver mi perfil',
    optional: 'Opcional',
    back: 'Atrás',
    next: 'Siguiente pregunta',
    keyHint: 'Enter para seguir',
    letterHint: 'Teclas {first}–{last} para elegir',
    chosen: '{count} de 3 elegidas',
    limitReached: 'Ya elegiste 3. Quita una para cambiarla.',
    scanner: {
      eyebrow: 'Así te vamos entendiendo',
      visual: 'Silueta del Toyota que se va formando, en línea blanca',
      tagsTitle: 'Lo que suma',
      tagSource: 'por «{source}»',
      tagsEmpty: 'Aún nada suma',
      rankingTitle: 'Ranking en vivo',
      inPlay: '{count} en juego',
      leader: 'Va primero',
      outOfBudget: 'Fuera de tu presupuesto',
      points: '{points} pts',
      rule: 'Cada respuesta que coincide con una etiqueta del modelo suma un punto. El presupuesto es el único filtro.'
    },
    budget: {
      inRange: 'modelos empiezan dentro de este tope',
      allIn: 'modelos en juego: sin tope, entran todos',
      scaleStart: '$80 M',
      scaleEnd: '$260 M',
      cap: 'Tope · ${value} M',
      fromLabel: 'Desde ${value} M'
    }
  },
  profile: {
    eyebrow: 'Tu perfil',
    title: 'Esto es lo que entendimos',
    lead: 'Revisa que esté bien antes de ver tus resultados.',
    readingLabel: 'Así lo entendimos',
    readingNote:
      'Es una interpretación del sistema. Si algo no es así, edítalo.',
    reading: {
      start: 'Buscas un carro para ',
      people: ', en el que viajen ',
      peopleEnd: ' personas',
      car: '. Lo imaginas ',
      and: ' y ',
      priorities: '. Te importan ',
      budget: ' y piensas invertir ',
      noBudget: ' y no definiste presupuesto',
      end: '.'
    },
    rows: {
      use: 'Cómo te mueves',
      people: 'Personas',
      body: 'Tipo de carro',
      engine: 'Motor',
      priorities: 'Prioridades',
      budget: 'Presupuesto'
    },
    empty: 'Sin definir',
    emptyNote: 'no filtra',
    edit: 'Editar',
    editing: 'Editando',
    noScore: 'No suma',
    inBudget: 'modelos dentro de tu presupuesto',
    leader: 'Hoy va primero',
    cta: 'Ver resultados',
    back: 'Volver a la asesoría',
    drawer: {
      title: 'Editar respuesta',
      cancel: 'Cancelar',
      save: 'Guardar cambio',
      keep: 'El resto de tus respuestas se mantiene.',
      impact: 'Con este cambio',
      impactLeader: 'va primero'
    }
  },
  analysis: {
    eyebrow: 'Encuentra tu Toyota',
    title: 'Buscando tu Toyota',
    crossing: 'Cruzando tu perfil',
    steps: [
      'Revisando tus prioridades',
      'Comparando con el catálogo',
      'Preparando tus resultados'
    ],
    progress: '{current} de {total}',
    visual: 'Foto · {model}, perfil lateral, fondo negro',
    from: 'Desde ${value} M',
    outOfBudget: 'Fuera de tu presupuesto',
    match: 'Coincide en {points}'
  },
  result: {
    eyebrow: 'Tus resultados',
    title: 'Estos Toyota se ajustan a lo que buscas',
    adjust: 'Ajustar perfil',
    profileLabel: 'Tu perfil',
    featuredTag: 'La que más se ajusta a ti',
    from: 'Desde',
    suggested: 'Precio sugerido',
    match: 'Cumple {met} de tus {total} prioridades',
    reasonsTitle: 'Por qué te la recomendamos',
    asked: 'Pediste',
    also: 'Además',
    alternatives: 'También te pueden servir',
    missing: 'Le falta',
    detail: 'Ver detalle',
    compare: 'Comparar',
    visual: 'Foto · {model}, 3/4 frontal, fondo de estudio gris claro',
    smallVisual: 'Foto · {model}, perfil lateral',
    legal:
      'Precios sugeridos al público por Automotores Toyota Colombia, vigentes del 1 al 30 de noviembre de 2026. Pueden variar según el concesionario.',
    bar: {
      selected: 'Seleccionados',
      count: '{count} de 3',
      hint: 'Elige al menos 2 para comparar',
      add: 'Agrega uno',
      cta: 'Comparar modelos',
      remove: 'Quitar {model}'
    }
  },
  near: {
    eyebrow: 'Tus resultados',
    title: 'Estos se acercan a lo que buscas',
    lead: 'Ninguno cumple todo lo que pediste. Cada uno cumple una parte.',
    asked: 'Pediste',
    requests: ['6 o más personas', 'Camioneta o SUV', 'Híbrido'],
    cards: [
      {
        id: 'fortuner',
        priority: 'Si priorizas 7 puestos',
        meets: ['7 puestos en 3 filas', 'SUV grande de 4.795 mm de largo'],
        differs: ['No es híbrido: motor diésel 2.8 L o gasolina 2.7 L'],
        requestsMet: [true, true, false]
      },
      {
        id: 'rav4',
        priority: 'Si priorizas que sea híbrido',
        meets: ['Motor híbrido de 2.5 L', 'SUV mediana con tracción 4x4'],
        differs: ['Tiene 5 puestos, no 7'],
        requestsMet: [false, true, true]
      }
    ],
    meetsTitle: 'Lo que cumple',
    differsTitle: 'Qué es distinto',
    or: 'o',
    compare: 'Comparar los dos',
    adjust: 'Ajustar perfil'
  },
  closest: {
    eyebrow: 'Tus resultados',
    title: 'La opción más cercana a lo que buscas',
    asked: 'Pediste',
    requests: ['6 o más personas', '$150 a $220 millones'],
    model: 'Fortuner',
    version: 'SR 2.8 Diésel 4x2 AT',
    over: '+$22.900.000',
    budgetLabel: 'Tu presupuesto',
    rangeValue: '${min}–{max} M',
    priceValue: '${value} M',
    priceLabel: 'Fortuner desde',
    changeTitle: 'Qué cambia',
    change: 'Se pasa $22.900.000 de tu presupuesto',
    gainTitle: 'Lo que ganas',
    gains: [
      '7 puestos en 3 filas: el único del catálogo',
      '279 mm de altura al piso',
      'Hasta 201 hp con el motor diésel 2.8 L'
    ],
    why: 'Es el único Toyota con 7 puestos. Ninguno entra en tu presupuesto con ese espacio.',
    detail: 'Ver detalle',
    adjust: 'Ajustar presupuesto',
    visual: 'Foto · Fortuner, 3/4 frontal, en carretera de montaña, de día'
  },
  detail: {
    back: 'Tus resultados',
    category: 'Camioneta o SUV · SUV compacta',
    from: 'Desde',
    suggested: 'Precio sugerido',
    forYou: 'Cumple {met} de tus {total} prioridades',
    versionLabel: 'Versión',
    quote: 'Cotizar',
    testDrive: 'Test drive',
    external: 'Se abre toyota.com.co en una pestaña nueva',
    visual: 'Foto · Corolla Cross, 3/4 frontal, fondo de estudio gris claro',
    whyTitle: 'Por qué es para ti',
    tourIndex: '01',
    tourTitle: 'Recorrido por el vehículo',
    tourLead: 'Lo que responde a lo que pediste, en el carro.',
    tourVisual:
      'Foto · Corolla Cross, perfil lateral completo, fondo de estudio',
    hotspots: [
      {
        title: 'Pantalla de 10"',
        text: 'CarPlay y Android Auto inalámbricos, según versión',
        tag: 'Tecnología',
        visual: 'Primer plano · pantalla central y tablero',
        x: 46,
        y: 38
      },
      {
        title: '161 mm al piso',
        text: 'SUV de 1.620 mm de alto: entras y sales sin agacharte',
        tag: 'Espacio',
        visual: 'Primer plano · rueda delantera y altura al piso',
        x: 24,
        y: 74
      },
      {
        title: 'Híbrido 1.8 L',
        text: 'Versiones híbridas con transmisión E-CVT',
        tag: 'Ahorro',
        visual: 'Primer plano · emblema Hybrid en la compuerta',
        x: 86,
        y: 46
      },
      {
        title: '4.460 mm de largo',
        text: 'Más corta que el Corolla: fácil de parquear en ciudad',
        tag: 'Ciudad',
        visual: 'Primer plano · vista trasera en parqueadero',
        x: 64,
        y: 62
      }
    ],
    versionsIndex: '02',
    versionsTitle: 'Versiones y precios',
    columns: ['Versión', 'Motor, transmisión y tracción', 'Precio sugerido'],
    inBudget: 'Dentro de tu presupuesto',
    overBudget: 'Sobre tu presupuesto',
    specsIndex: '03',
    specsTitle: 'Ficha técnica',
    missing: 'No disponible en la ficha oficial',
    pending:
      '* Dato por confirmar en la ficha técnica oficial de Toyota Colombia.',
    context:
      'Foto · Corolla Cross en carretera colombiana, de día, color llamativo',
    contextCaption: 'Ciudad y carretera, como lo pediste.',
    bandTitle: '¿Te interesa el Corolla Cross?',
    bandText:
      'Cotízalo o agenda una prueba de manejo en toyota.com.co. Se abre en una pestaña nueva.'
  },
  compare: {
    back: 'Tus resultados',
    title: 'Compara tus opciones',
    lead: 'Las diferencias entre los modelos que elegiste, con los datos de la ficha técnica oficial.',
    onlyDiff: 'Solo diferencias',
    hidden: '{count} filas iguales ocultas',
    best: 'Mejor valor de la fila',
    remove: 'Quitar',
    priorities: 'Tus prioridades que cumple',
    none: 'Ninguna',
    price: 'Precio desde',
    type: 'Tipo',
    detail: 'Ver detalle',
    missing: 'No disponible',
    visual: 'Foto · {model}, perfil lateral'
  },
  specs: {
    seats: 'Puestos',
    engine: 'Motor',
    power: 'Potencia',
    transmission: 'Transmisión',
    traction: 'Tracción',
    length: 'Largo',
    width: 'Ancho',
    height: 'Alto',
    clearance: 'Altura al piso',
    airbags: 'Bolsas de aire',
    payload: 'Capacidad de carga',
    trunk: 'Baúl'
  },
  tags: {
    city: 'Ciudad',
    space: 'Espacio',
    saving: 'Ahorro',
    comfort: 'Comodidad',
    technology: 'Tecnología',
    power: 'Potencia',
    versatility: 'Versatilidad',
    cargo: 'Carga',
    terrain: 'Terreno',
    sevenSeats: '7 puestos',
    car: 'Automóvil',
    suv: 'SUV',
    pickup: 'Pick-up',
    hybrid: 'Híbrido',
    combustion: 'Gasolina o diésel'
  }
} as const;

export function fillTemplate(
  template: string,
  values: Record<string, string | number>
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match
  );
}
