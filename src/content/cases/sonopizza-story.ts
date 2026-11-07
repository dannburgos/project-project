import type { SonopizzaStory } from '@/content/sonopizza-story.types';

// Caso de Sonopizza: rediseño conceptual de la app móvil para pedir pizza.
// Textos tomados del documento maestro (Sonopizza_contexto_maestro_Claude.md).
// Es una propuesta de portafolio: no hubo encargo ni colaboración con la
// marca, y la investigación no incluyó participantes reales.
export const sonopizzaStory: SonopizzaStory = {
  sections: [
    'Introducción',
    'El reto',
    'Lo que encontramos',
    'La experiencia propuesta',
    'La exploración visual',
    'El producto en acción'
  ],
  cover: {
    eyebrow: 'Caso de estudio conceptual',
    wordmark: ['SONO', 'PIZZA'],
    tagline: 'Rediseño de la app móvil para pedir pizza',
    facts: [
      { title: 'Tipo', text: 'Proyecto conceptual de portafolio' },
      { title: 'Plataforma', text: 'App móvil' },
      { title: 'Alcance', text: 'Explorar, personalizar y revisar el pedido' }
    ],
    disclaimer:
      'Propuesta independiente: no es un encargo ni una colaboración con Sonopizza.',
    photoLabel: 'Fotografía de pizza, vista cenital',
    mascotAlt: 'Mascota de Sonopizza comiendo una porción de pizza'
  },
  challenge: {
    number: '01',
    name: 'El reto',
    title: 'Una nueva experiencia para pedir pizza',
    context: {
      title: 'Contexto',
      text: 'Sonopizza cuenta con variedad de productos y opciones de personalización. La experiencia digital permite explorar el menú, consultar productos y configurar pizzas con ingredientes y extras, y deja ver oportunidades para organizar mejor la información y acompañar las decisiones.'
    },
    opportunity: {
      title: 'Oportunidad',
      text: 'Pedir pizza debería ser sencillo: encontrar lo que se antoja, entender las opciones disponibles y personalizar sin complicaciones.'
    },
    challengeLabel: 'El reto',
    challenge:
      'Transformar una experiencia de pedido funcional en una experiencia móvil más intuitiva, visual y fácil de recorrer.',
    goal: {
      title: 'Objetivo',
      text: 'Facilitar el proceso desde la exploración del menú hasta la revisión del pedido, combinando claridad funcional con una dirección visual que fortalezca la marca.'
    },
    scopeTitle: 'Alcance de diseño',
    scope: [
      'Navegación y exploración móvil',
      'Organización y descubrimiento de productos',
      'Tamaños, ingredientes y precios',
      'Personalización y extras',
      'Carrito y revisión del pedido'
    ]
  },
  audit: {
    number: '02',
    name: 'Lo que encontramos',
    title: 'Auditoría de la experiencia actual',
    captures: [
      'Captura principal de la app actual',
      'Captura 2 de la app actual',
      'Captura 3 de la app actual',
      'Captura 4 de la app actual',
      'Captura 5 de la app actual'
    ],
    dimensions: [
      {
        title: 'Navegación y categorías',
        text: 'Mejorar la organización y la jerarquía'
      },
      {
        title: 'Presentación y descubrimiento',
        text: 'Reforzar la jerarquía y la comparación'
      },
      {
        title: 'Información del producto',
        text: 'Ordenar la estructura del detalle'
      },
      {
        title: 'Personalización e ingredientes',
        text: 'Distinguir lo obligatorio de lo opcional'
      },
      {
        title: 'Presentación de precios',
        text: 'Separar precio base, adicionales y total'
      },
      {
        title: 'Jerarquía visual e identidad',
        text: 'Más consistencia en tipografía y fotografía'
      }
    ],
    note: 'Revisión visual y heurística con capturas. Un aviso de local cerrado impidió comprobar el recorrido real de pedido.'
  },
  benchmark: {
    title: 'Benchmark competitivo y patrones de diseño',
    lead: 'Tres apps de pizza, cinco aspectos y lo que tomamos de cada una.',
    captureLabel: 'Captura de',
    dimensionsTitle: 'Qué se comparó',
    dimensions: [
      'Descubrimiento y navegación',
      'Presentación de la información',
      'Personalización',
      'Claridad de precios',
      'Experiencia visual'
    ],
    takeawayTitle: 'Qué tomamos',
    pending: 'Por completar',
    // Lo observado en cada app aún no está documentado en el .md del caso:
    // se llena cuando Dann lo defina
    apps: [
      { name: "Domino's", observations: [], takeaway: '' },
      { name: 'Pizza Hut', observations: [], takeaway: '' },
      { name: "Papa John's", observations: [], takeaway: '' }
    ],
    note: 'Para observar patrones que orienten la propuesta, no para copiar interfaces.'
  },
  synthesis: {
    title: 'Síntesis de hallazgos',
    opportunities: [
      {
        title: 'Descubrir mejor',
        text: 'Una navegación más clara para encontrar lo que se antoja.'
      },
      {
        title: 'Personalizar sin complicaciones',
        text: 'Más claridad en cada elección.'
      },
      {
        title: 'Hacer protagonista al producto',
        text: 'Una experiencia visual más atractiva.'
      }
    ],
    direction:
      'La dirección de diseño debe facilitar descubrir, elegir y personalizar, combinando claridad funcional y una propuesta visual atractiva.'
  },
  concept: {
    number: '03',
    name: 'La experiencia propuesta',
    verticalTitle: 'Concepto',
    title: 'Una forma más sencilla de elegir y personalizar',
    text: 'La app convierte la elección de una pizza en algo sencillo, visual y flexible: descubrir productos, consultar sus características, personalizarlos de forma intuitiva y entender cómo cada elección cambia el precio.',
    principlesTitle: 'Principios',
    principles: [
      'Exploración intuitiva',
      'Personalización guiada',
      'Precios transparentes',
      'Diseño centrado en el producto'
    ],
    synthesis: ['Descubrir.', 'Elegir.', 'Personalizar.', 'Disfrutar.'],
    photoLabel: 'Fotografía de producto, acercamiento al queso',
    imageLabel: 'Imagen del concepto'
  },
  persona: {
    subtitle: 'Persona',
    name: 'John Martínez',
    portraitLabel: 'Retrato ilustrado de John',
    facts: [
      { title: 'Edad', text: '27 años' },
      { title: 'Ocupación', text: 'Marketing digital' },
      { title: 'Ubicación', text: 'Bogotá' }
    ],
    context: [
      { text: 'Joven, con ' },
      { text: 'poco tiempo libre', isStrong: true },
      { text: ', ' },
      { text: 'pide comida a domicilio con frecuencia', isStrong: true },
      { text: ' y ' },
      { text: 'se mueve con facilidad en las apps', isStrong: true },
      { text: '.' }
    ]
  },
  journey: {
    subtitle: 'Customer Journey Map',
    title: 'Del antojo al pedido',
    rowLabels: {
      action: 'Hace',
      thought: 'Piensa',
      friction: 'Fricción',
      opportunity: 'Oportunidad'
    },
    stages: [
      {
        name: 'Surge la necesidad',
        action: 'Le da hambre y decide pedir desde la app.',
        thought: '“Quiero algo rápido que me provoque.”',
        friction: 'Tiene poco tiempo para decidir.',
        opportunity: 'Promociones y destacados desde el inicio.'
      },
      {
        name: 'Explora opciones',
        action: 'Recorre las categorías o busca en el menú.',
        thought: '“¿Dónde encuentro lo que se me antoja?”',
        friction: 'Etiquetas extensas y descripciones truncadas.',
        opportunity: 'Una navegación más clara para descubrir mejor.'
      },
      {
        name: 'Elige y personaliza',
        action: 'Abre el detalle y elige tamaño, ingredientes y extras.',
        thought: '“¿Qué es obligatorio y cuánto cuesta cada extra?”',
        friction: 'Lo obligatorio y lo opcional no se distinguen.',
        opportunity: 'Agrupar opciones y mostrar el costo de cada una.'
      },
      {
        name: 'Revisa el pedido',
        action: 'Abre el carrito y verifica productos y precios.',
        thought: '“¿Quedó todo como lo pedí?”',
        friction: 'Precio base, adicionales y total se confunden.',
        opportunity: 'Separar precio base, adicionales y total.'
      },
      {
        name: 'Finaliza la compra',
        action: 'Confirma el pedido.',
        thought: '“Listo, ya viene mi pizza.”',
        friction: 'Necesita saber que el pedido quedó hecho.',
        opportunity: 'Una confirmación visual clara.'
      }
    ]
  },
  architecture: {
    title: 'Arquitectura de información',
    root: 'App Sonopizza',
    legend: {
      nav: 'Navegación principal',
      step: 'Paso del flujo',
      flow: 'Flujo de compra'
    },
    // En el orden del flujo de compra
    sections: [
      {
        title: 'Inicio',
        kind: 'nav',
        items: ['Promociones', 'Destacados', 'Combos', 'Acceso al menú']
      },
      {
        title: 'Menú',
        kind: 'nav',
        items: ['Pizzas y especiales', 'Mitad y mitad', 'Combos', 'Búsqueda']
      },
      {
        title: 'Detalle',
        kind: 'step',
        items: ['Fotografía', 'Ingredientes', 'Tamaños', 'Precio base']
      },
      {
        title: 'Personalización',
        kind: 'step',
        items: ['Tamaño', 'Ingredientes', 'Extras con costo', 'Instrucciones']
      },
      {
        title: 'Carrito',
        kind: 'nav',
        items: ['Productos', 'Cantidades', 'Adicionales', 'Total']
      },
      {
        title: 'Confirmación',
        kind: 'end',
        items: ['Confirmación visual del pedido']
      }
    ],
    navigation:
      'Inicio, Menú y Carrito son la navegación principal. El detalle y la personalización son pasos del flujo, y la confirmación cierra el recorrido.'
  },
  flows: {
    title: 'Flujos principales',
    items: [
      {
        number: '01',
        title: 'Descubrir y elegir una pizza',
        steps: [
          'Explora el menú o busca',
          'Abre el detalle',
          'Revisa foto, ingredientes, tamaños y precio',
          'Decide si es la que quiere'
        ],
        goal: 'Encontrar la pizza que se le antoja por el menú o la búsqueda.',
        map: {
          nodes: [
            {
              label: 'Entra a la app',
              kind: 'start',
              x: 130,
              y: 260,
              order: 0
            },
            {
              label: 'Explora el menú',
              detail: 'Por categorías',
              kind: 'step',
              x: 420,
              y: 140,
              order: 1
            },
            {
              label: 'Busca',
              detail: 'Por nombre',
              kind: 'step',
              x: 420,
              y: 380,
              order: 1
            },
            {
              label: 'Revisa el detalle',
              detail: 'Foto, ingredientes, tamaños y precio',
              kind: 'step',
              x: 720,
              y: 260,
              order: 2
            },
            {
              label: '¿Es la que quiere?',
              kind: 'decision',
              x: 1000,
              y: 260,
              order: 3
            },
            {
              label: 'Pasa a personalizar',
              kind: 'end',
              x: 1270,
              y: 260,
              order: 4
            }
          ],
          edges: [
            { path: 'M230 260 C280 260 280 140 320 140', order: 0 },
            { path: 'M230 260 C280 260 280 380 320 380', order: 0 },
            { path: 'M520 140 C570 140 570 260 620 260', order: 1 },
            { path: 'M520 380 C570 380 570 260 620 260', order: 1 },
            { path: 'M820 260 H900', order: 2 },
            {
              path: 'M1100 260 H1170',
              order: 3,
              label: 'Sí',
              labelX: 1135,
              labelY: 244
            },
            {
              path: 'M1000 220 V60 H420 V100',
              isAlt: true,
              order: 3,
              label: 'No · vuelve al catálogo',
              labelX: 710,
              labelY: 48
            }
          ]
        }
      },
      {
        number: '02',
        title: 'Personalizar y agregar al carrito',
        steps: [
          'Parte de la receta original',
          'Elige el tamaño',
          'Quita ingredientes y suma extras',
          'Revisa el precio y agrega'
        ],
        goal: 'Ajustar la pizza a su gusto y agregarla al carrito con el precio claro.',
        map: {
          nodes: [
            {
              label: 'Receta original',
              kind: 'start',
              x: 130,
              y: 150,
              order: 0
            },
            {
              label: 'Elige el tamaño',
              detail: 'Obligatorio',
              kind: 'step',
              x: 370,
              y: 150,
              order: 1
            },
            {
              label: 'Falta el tamaño',
              detail: 'La app indica qué completar',
              kind: 'alt',
              x: 300,
              y: 330,
              order: 2
            },
            {
              label: 'Quita ingredientes',
              kind: 'step',
              x: 610,
              y: 150,
              order: 2
            },
            {
              label: 'Suma extras',
              detail: 'Con su costo visible',
              kind: 'step',
              x: 850,
              y: 150,
              order: 3
            },
            {
              label: 'Instrucciones',
              detail: 'Opcional',
              kind: 'step',
              x: 1090,
              y: 150,
              order: 4
            },
            {
              label: 'Revisa el precio',
              detail: 'Actualizado',
              kind: 'step',
              x: 1090,
              y: 370,
              order: 5
            },
            {
              label: 'Agrega al carrito',
              kind: 'decision',
              x: 820,
              y: 370,
              order: 6
            },
            { label: 'Va al carrito', kind: 'end', x: 560, y: 300, order: 7 },
            { label: 'Sigue explorando', kind: 'end', x: 560, y: 450, order: 7 }
          ],
          edges: [
            { path: 'M230 150 H270', order: 0 },
            { path: 'M470 150 H510', order: 1 },
            {
              path: 'M350 190 C350 240 300 240 300 290',
              isAlt: true,
              order: 1,
              label: 'Si falta',
              labelX: 360,
              labelY: 250
            },
            { path: 'M710 150 H750', order: 2 },
            { path: 'M950 150 H990', order: 3 },
            { path: 'M1090 190 V330', order: 4 },
            { path: 'M990 370 H920', order: 5 },
            { path: 'M720 370 C690 370 690 300 660 300', order: 6 },
            { path: 'M720 370 C690 370 690 450 660 450', order: 6 }
          ]
        }
      },
      {
        number: '03',
        title: 'Revisar y confirmar el pedido',
        steps: [
          'Abre el carrito',
          'Verifica productos y precios',
          'Edita, cambia cantidades o elimina',
          'Confirma el pedido'
        ],
        goal: 'Verificar el pedido, ajustarlo si hace falta y confirmarlo.',
        map: {
          nodes: [
            {
              label: 'Abre el carrito',
              kind: 'start',
              x: 120,
              y: 300,
              order: 0
            },
            {
              label: 'Verifica productos',
              detail: 'Tamaños, extras y precios',
              kind: 'step',
              x: 360,
              y: 300,
              order: 1
            },
            {
              label: '¿Todo en orden?',
              kind: 'decision',
              x: 600,
              y: 300,
              order: 2
            },
            {
              label: 'Edita o elimina',
              detail: 'Personalización y cantidades',
              kind: 'alt',
              x: 600,
              y: 100,
              order: 3
            },
            {
              label: 'Revisa el total',
              kind: 'step',
              x: 840,
              y: 300,
              order: 3
            },
            { label: 'Confirma', kind: 'step', x: 1060, y: 300, order: 4 },
            {
              label: 'Pedido confirmado',
              kind: 'end',
              x: 1280,
              y: 300,
              order: 5
            }
          ],
          edges: [
            { path: 'M220 300 H260', order: 0 },
            { path: 'M460 300 H500', order: 1 },
            {
              path: 'M700 300 H740',
              order: 2,
              label: 'Sí',
              labelX: 720,
              labelY: 284
            },
            {
              path: 'M600 260 V140',
              isAlt: true,
              order: 2,
              label: 'No',
              labelX: 620,
              labelY: 205
            },
            { path: 'M500 100 H360 V260', isAlt: true, order: 3 },
            { path: 'M940 300 H960', order: 3 },
            { path: 'M1160 300 H1180', order: 4 }
          ]
        }
      }
    ],
    note: 'La confirmación es un estado visual del prototipo: no hay pago, dirección ni envío real.'
  },
  visual: {
    number: '04',
    name: 'La exploración visual',
    title: 'Juvenil, divertida y con inspiración retro',
    personality: [
      'Fondos en blanco hueso',
      'Titulares con carácter',
      'Sellos, stickers e ilustraciones',
      'La mascota como acento'
    ],
    paletteTitle: 'Paleta',
    palette: [
      { name: 'Navy Blue', hex: '#002B8F' },
      { name: 'Royal Blue', hex: '#0D47C9' },
      { name: 'Electric Blue', hex: '#2563EB' },
      { name: 'Bright Orange', hex: '#FF5A00' },
      { name: 'Soft Orange', hex: '#FF7A1A' },
      { name: 'Off White', hex: '#F4F4F4' },
      { name: 'Dark Gray', hex: '#1E1E1E' }
    ],
    paletteNote:
      'Tres azules para la estructura, dos naranjas para la energía y la acción, y blanco hueso y gris oscuro para el contraste.',
    typeTitle: 'Tipografía',
    typefaces: [
      { name: 'Titan One', role: 'Logotipo', sample: 'Sono Pizza' },
      { name: 'Bowlby One SC', role: 'Titulares', sample: 'Del antojo' },
      {
        name: 'DM Sans',
        role: 'Interfaz, precios y navegación',
        sample: 'Agrega al carrito'
      }
    ],
    brandTitle: 'Logotipo y mascota',
    logoLabel: 'Wordmark SONO PIZZA',
    mascotText:
      'Una mascota tipo sticker: gorra, sonrisa, lunar y una porción de pizza. Aparece en momentos puntuales, no en todas las pantallas.',
    photographyTitle: 'Fotografía',
    photography: [
      'Cenitales para el catálogo',
      'Acercamientos para queso y texturas',
      'Otros ángulos cuando muestran mejor el producto'
    ],
    elements: {
      title: 'Elementos de marca',
      lead: 'Las partes de la pizza convertidas en piezas de la interfaz.',
      pending: 'Por diseñar',
      items: [
        {
          title: 'Paleta en pepperonis',
          text: 'Cada pepperoni es un color de la marca, con su nombre y su uso.'
        },
        {
          title: 'Selector de tamaño',
          text: 'Tres pizzas que crecen: el tamaño se elige viéndolo.'
        },
        {
          title: 'Íconos de ingredientes',
          text: 'Porción, champiñón, aceituna y albahaca como íconos de navegación y estados.'
        },
        {
          title: 'Carga por porciones',
          text: 'El progreso se llena porción a porción mientras la pizza gira.'
        },
        {
          title: 'Chips de toppings',
          text: 'Ingredientes agregados, retirados y extras con su costo.'
        },
        {
          title: 'Ticket de pedido',
          text: 'El resumen del carrito como el ticket de la caja: base, extras y total.'
        }
      ]
    },
    system: {
      title: 'Sistema de diseño de Sonopizza',
      lead: 'Las piezas que construiríamos para diseñar y desarrollar la app con el mismo lenguaje.',
      pending: 'Por construir',
      groups: [
        {
          title: 'Fundamentos',
          items: ['Color', 'Tipografía', 'Iconografía', 'Espaciado y grilla']
        },
        {
          title: 'Componentes',
          items: [
            'Botones',
            'Tarjeta de producto',
            'Selector de tamaño',
            'Chips de ingredientes',
            'Contador de cantidad',
            'Resumen de precio',
            'Barra de navegación'
          ]
        },
        {
          title: 'Patrones',
          items: [
            'Personalización guiada',
            'Carrito editable',
            'Confirmación del pedido'
          ]
        }
      ]
    }
  },
  product: {
    number: '05',
    name: 'El producto en acción',
    stepLabel: 'Flujo',
    scenes: [
      {
        number: '01',
        title: 'Descubre tu pizza',
        text: 'Explora el menú o busca, y abre el detalle para ver foto, ingredientes, tamaños y precio.',
        screenLabel: 'Pantalla · Inicio',
        chips: [
          { title: 'Menú', text: 'Por categorías' },
          { title: 'Buscar', text: 'Por nombre' },
          { title: 'Detalle', text: 'Foto y precio' }
        ]
      },
      {
        number: '02',
        title: 'Hazla a tu gusto',
        text: 'Parte de la receta original: elige el tamaño, quita ingredientes, suma extras y mira el precio actualizado.',
        screenLabel: 'Pantalla · Personalizar',
        chips: [
          { title: 'Tamaño', text: 'Obligatorio' },
          { title: 'Extras', text: 'Con su costo' },
          { title: 'Precio', text: 'Al instante' }
        ]
      },
      {
        number: '03',
        title: 'Confirma el pedido',
        text: 'Revisa el carrito, edita o cambia cantidades, mira el total y confirma.',
        screenLabel: 'Pantalla · Carrito',
        chips: [
          { title: 'Carrito', text: 'Editable' },
          { title: 'Total', text: 'Sin sorpresas' },
          { title: 'Confirmación', text: 'Visual' }
        ]
      }
    ]
  }
};
