import { sonopizzaDesignSystem } from '@/content/cases/sonopizza-design-system';
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
    'Sistema de diseño',
    'El producto en acción'
  ],
  cover: {
    wordmark: ['SONO', 'PIZZA'],
    tagline: 'Rediseño de la app móvil para pedir pizza',
    facts: [
      { title: 'Tipo', text: 'Proyecto conceptual de portafolio' },
      { title: 'Plataforma', text: 'App móvil' },
      { title: 'Alcance', text: 'Explorar, personalizar y revisar el pedido' }
    ],
    photoLabel: 'Fotografía de pizza, vista cenital',
    mascotAlt: 'Mascota de Sonopizza comiendo una porción de pizza'
  },
  challenge: {
    number: '01',
    name: 'El reto',
    titleLines: ['Una nueva experiencia', 'para pedir pizza'],
    context: {
      title: 'Contexto',
      text: 'Sonopizza ofrece variedad de productos y de personalización. Su app permite explorar el menú, consultar productos y armar pizzas con ingredientes y extras, y deja ver oportunidades para organizar mejor la información y acompañar las decisiones.'
    },
    opportunity: {
      title: 'Oportunidad',
      text: 'Pedir pizza debería ser sencillo: encontrar lo que se antoja, entender las opciones y personalizar sin complicaciones.'
    },
    // La tarjeta naranja: la meta, cómo se llega y qué abarca (sin repetir
    // "el reto", que ya nombra la sección)
    challengeLabel: 'La meta',
    challenge:
      'Pasar de un pedido que funciona a una app más intuitiva, visual y fácil de usar.',
    goal: {
      title: '¿Cómo lo lograremos?',
      text: 'Aclarando el camino del menú al pedido, con una dirección visual que fortalezca la marca.'
    },
    scopeTitle: 'Alcance',
    // En este orden caben en dos filas de etiquetas
    scope: [
      'Navegación',
      'Productos',
      'Carrito',
      'Tamaños y precios',
      'Personalización'
    ]
  },
  audit: {
    number: '02',
    name: 'Lo que encontramos',
    title: 'Así se pide pizza hoy',
    // Capturas de la app actual que compartió Dann (originales en
    // .claude/knowledge/sonopizza/audit-originals), en el orden de la fila.
    // La última es la que queda cuando entran los hallazgos
    captures: [
      {
        src: '/sonopizza/audit/capture-04.jpg',
        alt: 'App actual: menú desplegable de categorías'
      },
      {
        src: '/sonopizza/audit/capture-01.jpg',
        alt: 'App actual: menú de pizzas personales con foto, descripción, precio y botón para agregar'
      },
      {
        src: '/sonopizza/audit/capture-03.jpg',
        alt: 'App actual: lista de ingredientes adicionales para personalizar la pizza'
      },
      {
        src: '/sonopizza/audit/capture-05.jpg',
        alt: 'App actual: detalle de una pizza extra grande con el borde de queso elegido'
      }
    ],
    // Título y texto cortos: cada hallazgo cabe en una línea
    dimensions: [
      { title: 'Navegación', text: 'Categorías más ordenadas' },
      { title: 'Descubrimiento', text: 'Comparar con más facilidad' },
      { title: 'Detalle', text: 'Una estructura más clara' },
      { title: 'Personalización', text: 'Distinguir lo obligatorio' },
      { title: 'Precios', text: 'Base, extras y total claros' },
      { title: 'Identidad visual', text: 'Más consistencia visual' }
    ]
  },
  // Benchmark y hallazgos en tres slides. Lo observado sale de una revisión
  // de las webs móviles de cada marca (menú, detalle y personalización) del
  // 2026-11-19, sin iniciar sesión ni hacer pedidos. Cada slide cierra con
  // su hallazgo, así que no hay una síntesis aparte
  benchmark: {
    eyebrow: 'Benchmark y hallazgos',
    navLabel: 'Aspectos comparados',
    previousLabel: 'Aspecto anterior',
    nextLabel: 'Siguiente aspecto',
    signals: {
      strength: 'Fortaleza',
      friction: 'Fricción',
      neutral: 'Neutral'
    },
    takeLabel: 'Lo tomamos',
    findingLabel: 'Hallazgo',
    forSonopizzaLabel: 'Para Sonopizza',
    paletteLabel: 'Su paleta',
    brands: [
      { name: "Domino's", logo: { src: '/sonopizza/benchmark/dominos.webp' } },
      {
        name: 'Pizza Hut',
        logo: { src: '/sonopizza/benchmark/pizza-hut.svg' }
      },
      {
        name: "Papa John's",
        logo: { src: '/sonopizza/benchmark/papa-johns.jpg', isCard: true }
      }
    ],
    slides: [
      {
        aspects: 'Descubrimiento e información',
        title: 'Descubrir mejor',
        rowLabels: ['Descubrimiento', 'Información'],
        cards: [
          {
            rows: [
              {
                icon: 'layout-list',
                text: 'Pocas categorías',
                signal: 'neutral'
              },
              {
                icon: 'image',
                text: 'Foto cenital y descripción',
                signal: 'strength'
              }
            ]
          },
          {
            rows: [
              {
                icon: 'flame',
                text: 'Pestañas y más vendidas',
                signal: 'strength'
              },
              {
                icon: 'id-card',
                text: 'Foto, nombre y precio',
                signal: 'strength'
              }
            ]
          },
          {
            rows: [
              { icon: 'search', text: 'Íconos y buscador', signal: 'strength' },
              {
                icon: 'ruler',
                text: 'Tamaño en la tarjeta',
                signal: 'strength'
              }
            ]
          }
        ],
        takenFrom: 2,
        finding: 'Una navegación más clara para encontrar lo que se antoja',
        decision: 'Categorías claras y el tamaño desde la tarjeta'
      },
      {
        aspects: 'Personalización y precios',
        title: 'Personalizar sin complicaciones',
        rowLabels: ['Personalización', 'Precios'],
        cards: [
          {
            rows: [
              {
                icon: 'store',
                text: 'Pide la tienda antes',
                signal: 'friction'
              },
              { icon: 'lock', text: 'Ocultos al inicio', signal: 'friction' }
            ]
          },
          {
            rows: [
              {
                icon: 'list-checks',
                text: 'Requerido u opcional',
                signal: 'strength'
              },
              { icon: 'receipt', text: 'Total en el botón', signal: 'strength' }
            ]
          },
          {
            rows: [
              {
                icon: 'chevrons-up-down',
                text: 'Listas desplegables',
                signal: 'friction'
              },
              {
                icon: 'map-pin',
                text: 'Según tamaño y zona',
                signal: 'neutral'
              }
            ]
          }
        ],
        takenFrom: 1,
        finding: 'Más claridad en cada elección',
        decision: 'Marcar lo obligatorio y desglosar base, extras y total'
      },
      {
        aspects: 'Experiencia visual',
        title: 'Producto protagonista',
        rowLabels: ['Su estilo'],
        cards: [
          {
            palette: ['#0B6DA8', '#E31837', '#FFF4E2'],
            rows: [
              {
                icon: 'camera',
                text: 'Fotos cenitales consistentes',
                signal: 'strength'
              }
            ]
          },
          {
            palette: ['#E4002B', '#1E1E1E', '#1E7B34'],
            rows: [
              {
                icon: 'shapes',
                text: 'Piezas de estilos mezclados',
                signal: 'friction'
              }
            ]
          },
          {
            palette: ['#2E5A2B', '#D4202A', '#FFFFFF'],
            rows: [
              {
                icon: 'layout-grid',
                text: 'Tarjetas blancas y limpias',
                signal: 'strength'
              }
            ]
          }
        ],
        takenFrom: 0,
        finding: 'Una experiencia visual más atractiva',
        decision: 'Fotos consistentes y un sistema propio'
      }
    ]
  },
  persona: {
    subtitle: 'Persona',
    title: 'Usuario de estudio',
    // Es una persona ficticia: no salió de entrevistas reales
    note: 'Una persona ficticia que nos ayuda a tomar decisiones de diseño pensando en quién va a pedir.',
    name: 'John Martínez',
    portrait: {
      src: '/sonopizza/persona-john.jpg',
      alt: 'John mira su celular mientras come una porción de pizza'
    },
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
      thought: 'Piensa',
      friction: 'Fricción',
      opportunity: 'Oportunidad'
    },
    stages: [
      {
        name: 'Surge la necesidad',
        thought: '“Quiero algo rápido y rico.”',
        friction: 'Poco tiempo para decidir',
        opportunity: 'Lo más pedido a la vista al abrir'
      },
      {
        name: 'Explora opciones',
        thought: '“¿Dónde está lo que quiero?”',
        friction: 'Etiquetas largas y cortadas',
        opportunity: 'Categorías claras y fáciles de ver'
      },
      {
        name: 'Elige y personaliza',
        thought: '“¿Cuánto cuesta cada extra?”',
        friction: 'No distingue lo obligatorio',
        opportunity: 'Agrupar opciones y mostrar costos'
      },
      {
        name: 'Revisa el pedido',
        thought: '“¿Quedó todo como lo pedí?”',
        friction: 'Precios que se confunden',
        opportunity: 'Desglose de base, extras y total'
      },
      {
        name: 'Finaliza la compra',
        thought: '“Listo, ya viene mi pizza.”',
        friction: 'Duda si el pedido quedó',
        opportunity: 'Una confirmación clara del pedido'
      }
    ]
  },
  architecture: {
    title: 'Arquitectura de información',
    root: 'App Sonopizza',
    // En el orden del flujo de compra
    sections: [
      {
        title: 'Inicio',
        kind: 'nav',
        items: ['Promociones', 'Destacados', 'Combos', 'Ir al menú']
      },
      {
        title: 'Menú',
        kind: 'nav',
        items: ['Pizzas', 'Mitad y mitad', 'Combos', 'Búsqueda']
      },
      {
        title: 'Detalle',
        kind: 'step',
        items: ['Foto', 'Ingredientes', 'Tamaños', 'Precio']
      },
      {
        title: 'Personalización',
        kind: 'step',
        items: ['Tamaño', 'Ingredientes', 'Extras', 'Notas']
      },
      {
        title: 'Carrito',
        kind: 'nav',
        items: ['Productos', 'Cantidades', 'Extras', 'Total']
      },
      {
        title: 'Confirmación',
        kind: 'end',
        items: ['Pedido confirmado']
      }
    ]
  },
  flows: {
    title: 'Flujos principales',
    navLabel: 'Flujos',
    previousLabel: 'Flujo anterior',
    nextLabel: 'Siguiente flujo',
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
              width: 160,
              order: 0
            },
            {
              label: 'Explora el menú',
              detail: 'Por categorías',
              kind: 'step',
              x: 420,
              y: 140,
              width: 200,
              order: 1
            },
            {
              label: 'Busca',
              detail: 'Por nombre',
              kind: 'step',
              x: 420,
              y: 380,
              width: 200,
              order: 1
            },
            {
              label: 'Revisa el detalle',
              detail: 'Foto, ingredientes, tamaños y precio',
              kind: 'step',
              x: 720,
              y: 260,
              width: 200,
              order: 2
            },
            {
              label: '¿Es la que quiere?',
              kind: 'decision',
              x: 1000,
              y: 260,
              width: 180,
              order: 3
            },
            {
              label: 'Pasa a personalizar',
              kind: 'end',
              x: 1270,
              y: 260,
              width: 170,
              order: 4
            }
          ],
          edges: [
            {
              path: 'M222 260 H253 Q265 260 265 248 V152 Q265 140 277 140 H304',
              order: 0
            },
            {
              path: 'M222 260 H253 Q265 260 265 272 V368 Q265 380 277 380 H304',
              order: 0
            },
            {
              path: 'M532 140 H563 Q575 140 575 152 V248 Q575 260 587 260 H604',
              order: 1
            },
            {
              path: 'M532 380 H563 Q575 380 575 368 V272 Q575 260 587 260 H604',
              order: 1
            },
            {
              path: 'M832 260 H894',
              order: 2
            },
            {
              path: 'M1102 260 H1169',
              order: 3,
              label: 'Sí',
              labelX: 1135,
              labelY: 244
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
              x: 150,
              y: 150,
              width: 160,
              order: 0
            },
            {
              label: 'Elige el tamaño',
              detail: 'Obligatorio',
              kind: 'step',
              x: 409,
              y: 150,
              width: 190,
              order: 1
            },
            {
              label: 'Falta el tamaño',
              detail: 'La app indica qué completar',
              kind: 'alt',
              x: 409,
              y: 330,
              width: 200,
              order: 2
            },
            {
              label: 'Quita ingredientes',
              kind: 'step',
              x: 683,
              y: 150,
              width: 190,
              order: 2
            },
            {
              label: 'Suma extras',
              detail: 'Con su costo visible',
              kind: 'step',
              x: 957,
              y: 150,
              width: 190,
              order: 3
            },
            {
              label: 'Instrucciones',
              detail: 'Opcional',
              kind: 'step',
              x: 1231,
              y: 150,
              width: 190,
              order: 4
            },
            {
              label: 'Revisa el precio',
              detail: 'Actualizado',
              kind: 'step',
              x: 1231,
              y: 370,
              width: 190,
              order: 5
            },
            {
              label: 'Agrega al carrito',
              kind: 'decision',
              x: 957,
              y: 370,
              width: 180,
              order: 6
            },
            {
              label: 'Va al carrito',
              kind: 'end',
              x: 683,
              y: 300,
              width: 170,
              order: 7
            },
            {
              label: 'Sigue explorando',
              kind: 'end',
              x: 683,
              y: 450,
              width: 170,
              order: 7
            }
          ],
          edges: [
            {
              path: 'M242 150 H298',
              order: 0
            },
            {
              path: 'M516 150 H572',
              order: 1
            },
            {
              path: 'M409 206 V270',
              isAlt: true,
              order: 1,
              label: 'Si falta',
              labelX: 448,
              labelY: 244
            },
            {
              path: 'M790 150 H846',
              order: 2
            },
            {
              path: 'M1064 150 H1120',
              order: 3
            },
            {
              path: 'M1231 206 V310',
              order: 4
            },
            {
              path: 'M1124 370 H1063',
              order: 5
            },
            {
              path: 'M855 370 H828 Q816 370 816 358 V312 Q816 300 804 300 H784',
              order: 6
            },
            {
              path: 'M855 370 H828 Q816 370 816 382 V438 Q816 450 804 450 H784',
              order: 6
            }
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
              x: 90,
              y: 300,
              width: 160,
              order: 0
            },
            {
              label: 'Verifica productos',
              detail: 'Tamaños, extras y precios',
              kind: 'step',
              x: 336,
              y: 300,
              width: 200,
              order: 1
            },
            {
              label: '¿Todo en orden?',
              kind: 'decision',
              x: 592,
              y: 300,
              width: 180,
              order: 2
            },
            {
              label: 'Edita o elimina',
              detail: 'Personalización y cantidades',
              kind: 'alt',
              x: 592,
              y: 100,
              width: 200,
              order: 3
            },
            {
              label: 'Revisa el total',
              kind: 'step',
              x: 838,
              y: 300,
              width: 180,
              order: 3
            },
            {
              label: 'Confirma',
              kind: 'step',
              x: 1074,
              y: 300,
              width: 160,
              order: 4
            },
            {
              label: 'Pedido confirmado',
              kind: 'end',
              x: 1305,
              y: 300,
              width: 170,
              order: 5
            }
          ],
          edges: [
            {
              path: 'M182 300 H220',
              order: 0
            },
            {
              path: 'M448 300 H486',
              order: 1
            },
            {
              path: 'M694 300 H732',
              order: 2,
              label: 'Sí',
              labelX: 713,
              labelY: 284
            },
            {
              path: 'M592 244 V160',
              isAlt: true,
              order: 2,
              label: 'No',
              labelX: 612,
              labelY: 205
            },
            {
              path: 'M480 100 H350 Q336 100 336 114 V240',
              isAlt: true,
              order: 3
            },
            {
              path: 'M940 300 H978',
              order: 3
            },
            {
              path: 'M1166 300 H1204',
              order: 4
            }
          ]
        }
      }
    ]
  },
  designSystem: sonopizzaDesignSystem,
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
