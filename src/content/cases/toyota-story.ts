import type { ToyotaStory } from '@/content/toyota-story.types';

// Caso Toyota — Beyond the Model, versión esencial: una idea por módulo, con
// su titular, una frase corta y su pieza visual. Las frases salen del
// documento maestro (.claude/knowledge/toyota/caso-de-estudio-beyond-the-model.md),
// que conserva el texto completo; la composición, de referencias-web.md. Las
// imágenes que aún no llegan van como cajas grises con su etiqueta.
export const toyotaStory: ToyotaStory = {
  sections: [
    { number: '01', name: 'Contexto' },
    { number: '02', name: 'Descubrimiento' },
    { number: '03', name: 'Estrategia' },
    { number: '04', name: 'Producto' },
    { number: '05', name: 'Validación' }
  ],
  labels: {
    navigation: 'Capítulos del caso',
    menu: 'Capítulos',
    pending: 'Por completar con evidencia real',
    carControl: 'Avance del caso',
    carHint: 'Arrástrame para avanzar'
  },

  progressCar: {
    body: '/toyota/indice/gr-yaris-carroceria.webp',
    wheel: '/toyota/indice/llanta.webp'
  },

  cover: {
    title: 'Toyota — Beyond the Model',
    intro:
      'Del modelo al vehículo adecuado: ayudar a cada persona a entender qué Toyota responde mejor a sus necesidades, y por qué.',
    visual: {
      label:
        'Toyota Hilux roja a toda velocidad por una carretera de los Andes, con polvo y cielo azul profundo',
      src: '/toyota/fotos/00-portada-hilux.webp'
    },
    factsTitle: 'Ficha del proyecto',
    facts: [
      { label: 'Tipo', value: 'Rediseño de experiencia' },
      {
        label: 'Enfoque',
        value: 'Descubrimiento y recomendación de vehículos'
      },
      { label: 'Marca y mercado', value: 'Toyota Colombia' },
      { label: 'Plataforma', value: 'Web de escritorio' }
    ],
    scrollHint: 'Baja para acelerar'
  },

  overview: {
    opener: {
      number: '01',
      kicker: 'Capítulo 01',
      word: 'Contexto',
      summary: '¿Qué es Beyond the Model y qué problema aborda?',
      background: {
        label:
          'Mujer sonriente junto a un Toyota Yaris Hatchback azul en una calle de Bogotá',
        src: '/toyota/fotos/01-fondo-yaris-vertical.jpg'
      },
      isBackgroundTall: true,
      window: {
        label:
          'Familia subiendo a una Toyota Fortuner roja en un barrio de Medellín',
        src: '/toyota/fotos/01-celda-fortuner.webp'
      }
    },
    context: {
      head: {
        eyebrow: 'Toyota en Colombia',
        title: 'Una oferta diversa, múltiples criterios de elección.'
      },
      journeyLabel: 'Experiencia actual · parte del producto',
      journey: [
        { label: 'Página principal' },
        { label: 'Catálogo y filtros' },
        { label: 'Detalle del vehículo' },
        { label: 'Cotización' }
      ]
    },
    description: {
      head: {
        eyebrow: 'Solución',
        isEyebrowAccent: true,
        title: 'Una nueva forma de descubrir y elegir un Toyota',
        accents: ['descubrir', 'elegir']
      },
      pillarsWord: 'Tres pilares',
      pillarsVisual: {
        label:
          'Frente de una Toyota Land Cruiser Prado amarilla, del techo al asfalto, bajo un cielo azul',
        src: '/toyota/fotos/01-pilares-land-cruiser.webp'
      },
      pillars: [
        {
          number: '01',
          title: 'Rediseño de la experiencia de descubrimiento',
          text: 'Descubrir: explorar los vehículos Toyota desde las necesidades y preferencias del usuario.'
        },
        {
          number: '02',
          title: 'Nuevo flujo de asesoría y recomendación',
          text: 'Recomendar y explicar: un cuestionario guiado y vehículos compatibles con su perfil, cada uno con sus razones.'
        },
        {
          number: '03',
          title: 'Incorporación de IA a la experiencia',
          text: 'Interpretación de respuestas y orientación contextual.'
        }
      ]
    },
    problem: {
      problemEyebrow: 'Problema',
      problem:
        'Identificar qué modelo se adapta mejor puede ser difícil por la cantidad de alternativas y lo complejo de entender sus diferencias.',
      opportunityEyebrow: 'Oportunidad',
      opportunity:
        'Que las necesidades del usuario sean el punto de partida para explorar las alternativas disponibles.'
    }
  },

  discovery: {
    opener: {
      number: '02',
      kicker: 'Capítulo 02',
      word: 'Descubrimiento',
      summary: 'El benchmark, el problema y las personas que lo viven.',
      background: {
        label:
          'Vista aérea de una fila de 14 Toyota de colores vivos estacionados en un parqueadero',
        src: '/toyota/fotos/02-fondo-panoramica.jpg'
      },
      isBackgroundWide: true,
      window: {
        label:
          'Hombre sonriente comparando vehículos Toyota en su portátil, con una Hilux naranja estacionada afuera',
        src: '/toyota/fotos/02-celda-hilux.webp'
      }
    },
    benchmark: {
      head: {
        title: 'Análisis de referentes'
      },
      strengthLabel: 'Fortaleza identificada',
      opportunityLabel: 'Oportunidad observada',
      references: [
        {
          name: 'Hyundai',
          strength: 'Experiencias visuales, comparador y reserva online',
          opportunity:
            'Traducir características técnicas en necesidades cotidianas',
          criteria: ['Descubrimiento', 'Comparación', 'Conversión'],
          visual: {
            label:
              'Hyundai Tucson azul en diagonal, en una calle con edificios de vidrio',
            src: '/toyota/fotos/02-ref-hyundai.webp'
          }
        },
        {
          name: 'Renault',
          strength: 'Comunicación desde estilos de vida',
          opportunity:
            'Incorporar orientación antes de las herramientas comerciales',
          criteria: ['Descubrimiento', 'Información'],
          visual: {
            label:
              'Renault Duster naranja con equipaje en el techo, en una carretera de montaña',
            src: '/toyota/fotos/02-ref-renault.webp'
          }
        },
        {
          name: 'Autocosmos',
          strength: 'Amplitud de información, filtros y comparación multimarca',
          opportunity: 'Convertir información en orientación',
          criteria: ['Información', 'Filtros', 'Comparación'],
          visual: {
            label:
              'Un sedán rojo, un SUV verde y una camioneta blanca de distintas marcas, escalonados en diagonal',
            src: '/toyota/fotos/02-ref-multimarca.webp'
          }
        }
      ]
    },
    problem: {
      head: {
        eyebrow: 'Definición del problema',
        title:
          'El desafío no es encontrar más vehículos, sino entender cuál es el adecuado.'
      },
      model: [
        { label: 'Necesidad del usuario' },
        { label: 'Exploración del catálogo' },
        { label: 'Brecha de interpretación' },
        { label: 'Incertidumbre y mayor esfuerzo' }
      ]
    },
    user: {
      head: {
        eyebrow: 'Usuario',
        title: 'Personas que necesitan orientación.'
      },
      visual: {
        label:
          'Conductor sonriente al volante de una camioneta Toyota, mirando a la cámara',
        src: '/toyota/fotos/02-usuario-conductor.jpg'
      },
      segmentsLabel: 'Quiénes son',
      segments: [
        {
          title: 'Compradores primerizos',
          text: 'Saber qué tipo de vehículo necesitan y por dónde empezar.'
        },
        {
          title: 'Compradores con necesidades nuevas',
          text: 'Encontrar el vehículo que responda a su nueva realidad.'
        },
        {
          title: 'Compradores que renuevan su vehículo',
          text: 'Evaluar alternativas y entender sus diferencias.'
        },
        {
          title: 'Compradores con preferencias definidas',
          text: 'Validar su elección y comparar. Segmento complementario.'
        }
      ],
      painsLabel: 'Puntos de dolor (hipótesis)',
      pains: [
        'Exploración',
        'Información',
        'Relevancia',
        'Evaluación',
        'Decisión',
        'Confianza'
      ],
      jobLabel: 'Trabajo por hacer (JTBD)',
      job: [
        {
          title: 'Cuando',
          text: 'necesito un vehículo nuevo porque mis necesidades han cambiado,'
        },
        {
          title: 'quiero',
          text: 'identificar qué alternativas responden mejor a ellas,'
        },
        {
          title: 'para',
          text: 'elegir uno que se adapte a mi contexto y sentirme seguro.'
        }
      ]
    }
  },

  strategy: {
    opener: {
      number: '03',
      kicker: 'Capítulo 03',
      word: 'Estrategia',
      summary: 'La propuesta de valor y la estrategia de IA.',
      background: {
        label:
          'Toyota RAV4 híbrida verde cruzando un puente atirantado bajo un cielo azul',
        src: '/toyota/fotos/03-fondo-rav4.webp'
      },
      window: {
        label:
          'Tablero de una RAV4 con un mapa y una ruta en la pantalla central',
        src: '/toyota/fotos/03-celda-tablero.webp'
      }
    },
    value: {
      promise: 'Encuentra el Toyota que se adapta a tu vida.',
      shifts: {
        beforeLabel: 'Experiencia tradicional',
        afterLabel: 'Beyond the Model',
        items: [
          {
            topic: 'Punto de partida',
            before: 'Modelos y categorías',
            after: 'Tus necesidades'
          },
          {
            topic: 'Filtros',
            before: 'Tú los interpretas',
            after: 'La experiencia te interpreta'
          },
          {
            topic: 'Exploración',
            before: 'Tú decides qué ver',
            after: 'Alternativas compatibles'
          },
          {
            topic: 'Información',
            before: 'Características técnicas',
            after: 'Beneficios que te importan'
          },
          {
            topic: 'Comparación',
            before: 'Modelos que ya conoces',
            after: 'Alternativas recomendadas'
          }
        ]
      },
      canvas: {
        label:
          'Imagen · lienzo de la propuesta de valor completo (perfil del cliente y mapa de valor)'
      }
    },
    ai: {
      head: {
        eyebrow: 'Estrategia de IA',
        title: 'La IA interpreta, la lógica recomienda y los datos respaldan',
        lead: 'Útil, comprensible y sin presión.'
      },
      layers: [
        {
          number: '01',
          name: 'Entrada',
          text: 'Asesoría y catálogo Toyota.',
          guarantees: ['Información verificable', 'Avisa cuando falta un dato']
        },
        {
          number: '02',
          name: 'Interpretación',
          text: 'La IA entiende necesidades.',
          guarantees: [
            'Separa hechos de interpretación',
            'No inventa datos ni precios'
          ]
        },
        {
          number: '03',
          name: 'Compatibilidad',
          text: 'Cruza perfil y catálogo.',
          guarantees: ['Sin puntaje sin metodología']
        },
        {
          number: '04',
          name: 'Resultado',
          text: 'Opciones, razones y diferencias.',
          guarantees: ['Explica cada opción', 'La decisión es del usuario']
        }
      ]
    }
  },

  product: {
    opener: {
      number: '04',
      kicker: 'Capítulo 04',
      word: 'Producto',
      summary: 'La lógica, el flujo y el sistema de diseño del MVP.',
      background: {
        label:
          'Toyota Corolla Cross cobriza en movimiento por una avenida arbolada, con el fondo barrido',
        src: '/toyota/fotos/04-fondo-corolla-cross.webp'
      },
      window: {
        label:
          'Detalle del faro LED y la parrilla con el emblema de una Corolla Cross cobriza',
        src: '/toyota/fotos/04-celda-faro.webp'
      }
    },
    logic: {
      head: {
        eyebrow: 'Lógica de recomendación',
        title: 'Una lógica simple y explicable'
      },
      statement:
        'Cada respuesta que coincide con una etiqueta del modelo suma un punto. El presupuesto es el único filtro. Se ordena por puntos y, si hay empate, por menor precio.',
      example: {
        label: 'Un ejemplo',
        answers: {
          title: 'La persona responde',
          tags: ['Ciudad', 'Ahorro', 'Comodidad', 'Tecnología']
        },
        budget: {
          title: 'El presupuesto filtra',
          text: 'Hasta $150.000.000. Hilux, RAV4 y Fortuner quedan fuera.'
        },
        ranking: {
          title: 'Los puntos ordenan',
          models: [
            {
              name: 'Corolla',
              price: '$109.900.000',
              points: '4 pts',
              isWinner: true
            },
            { name: 'Corolla Cross', price: '$139.900.000', points: '4 pts' },
            { name: 'Yaris HB', price: '$89.900.000', points: '3 pts' }
          ],
          note: 'Corolla y Corolla Cross empatan: gana el de menor precio.'
        }
      }
    },
    flow: {
      head: {
        eyebrow: 'Flujo propuesto',
        title: 'Un solo recorrido que siempre termina en un resultado'
      },
      stages: [
        { label: 'Descubrir', span: 2 },
        { label: 'Comprender', span: 1 },
        { label: 'Interpretar', span: 2 },
        { label: 'Recomendar', span: 1, isHighlight: true },
        { label: 'Evaluar', span: 1 },
        { label: 'Continuar', span: 1 }
      ],
      steps: [
        { label: 'Menú o Home' },
        { label: 'Inicio' },
        { label: 'Asesoría' },
        { label: 'Tu perfil' },
        { label: 'Evaluación' },
        {
          label: 'Resultado',
          text: 'Siempre hay una respuesta.',
          isHighlight: true
        },
        { label: 'Detalle y comparación', text: 'Hasta 3 modelos.' },
        { label: 'Continuar en Toyota' }
      ],
      exitsLabel: 'Ya existen en Toyota',
      exits: ['Cotizador', 'Prueba de manejo']
    },
    design: {
      head: {
        eyebrow: 'Sistema de diseño',
        title: 'De la definición a una experiencia que se puede recorrer'
      },
      system: {
        foundationsLabel: 'Fundamentos',
        essentialsLabel: 'Componentes',
        indexLabel: 'Sistema de diseño',
        labels: {
          copy: 'Copiar',
          copied: 'Copiado'
        },
        sample: {
          type: {
            fieldLabel: 'Prueba con tu texto',
            placeholder: 'Escribe aquí',
            text: 'Encuentra el Toyota que se adapta a tu vida'
          },
          icons: {
            groups: [
              {
                label: 'Para el prototipo',
                items: [
                  { id: 'arrow-right', name: 'Siguiente' },
                  { id: 'arrow-left', name: 'Atrás' },
                  { id: 'plus', name: 'Agregar' },
                  { id: 'close', name: 'Cerrar' },
                  { id: 'check', name: 'Confirmar' },
                  { id: 'search', name: 'Buscar' },
                  { id: 'compare', name: 'Comparar' },
                  { id: 'info', name: 'Información' },
                  { id: 'external', name: 'Continuar en Toyota' },
                  { id: 'profile', name: 'Tu perfil' },
                  { id: 'menu', name: 'Menú' }
                ]
              },
              {
                label: 'De la marca y del catálogo',
                items: [
                  { id: 'car', name: 'Modelo' },
                  { id: 'hybrid', name: 'Híbrido' },
                  { id: 'quote', name: 'Cotizador' },
                  { id: 'test-drive', name: 'Prueba de manejo' },
                  { id: 'city', name: 'Ciudad' },
                  { id: 'space', name: 'Espacio' },
                  { id: 'saving', name: 'Ahorro' },
                  { id: 'comfort', name: 'Comodidad' },
                  { id: 'technology', name: 'Tecnología' },
                  { id: 'power', name: 'Potencia' },
                  { id: 'versatility', name: 'Versatilidad' },
                  { id: 'cargo', name: 'Carga' },
                  { id: 'terrain', name: 'Terreno' },
                  { id: 'seven', name: '7 puestos' }
                ]
              }
            ]
          },
          motion: {
            demos: [
              {
                id: 'fill',
                name: 'Responde al cursor',
                spec: 'Rápida · 400 ms · el relleno sube',
                label: 'Ver resultado'
              },
              {
                id: 'enter',
                name: 'Entra en orden',
                spec: 'Escalonada · 80 ms entre piezas'
              },
              {
                id: 'advance',
                name: 'Marca el avance',
                spec: 'Media · 240 ms · de izquierda a derecha'
              }
            ]
          },
          access: {
            pairs: [
              { name: 'Negro sobre blanco', fg: '#000000', bg: '#ffffff' },
              { name: 'Gris sobre blanco', fg: '#58595b', bg: '#ffffff' },
              { name: 'Blanco sobre rojo', fg: '#ffffff', bg: '#eb0a1e' },
              { name: 'Rojo sobre negro', fg: '#eb0a1e', bg: '#000000' }
            ],
            ratioLabel: 'Contraste',
            focusLabel: 'Foco',
            touchLabel: 'Alto del botón',
            focusText: 'Continuar'
          },
          button: {
            variants: ['Primario', 'De contorno', 'De texto'],
            states: ['Reposo', 'Cursor encima', 'Foco', 'Deshabilitado'],
            text: 'Continuar',
            link: 'Aún no lo sé'
          },
          chip: {
            stateLabels: ['Sin elegir', 'Elegida', 'Deshabilitada'],
            options: ['Ciudad', 'Familia', 'Trabajo'],
            groupLabel: 'Pruébalas',
            tagLabel: 'Etiqueta roja',
            tag: 'Coincidencia total'
          },
          question: {
            step: 'Paso 2 de 9',
            title: '¿Para qué vas a usar tu Toyota?',
            progressTotal: 9,
            progressCurrent: 2,
            statesLabel: 'Avance',
            states: [
              { label: 'Al empezar', current: 1 },
              { label: 'A la mitad', current: 5 },
              { label: 'Al terminar', current: 9 }
            ]
          },
          cards: [
            {
              tag: 'Coincidencia total',
              model: 'Corolla Cross',
              price: 'Desde $139.900.000'
            },
            {
              tag: 'Similar a tu perfil',
              model: 'Yaris HB',
              price: 'Desde $89.900.000'
            },
            {
              tag: 'Con ventajas',
              model: 'RAV4',
              price: 'Desde $207.500.000'
            }
          ]
        },
        items: [
          {
            id: 'color',
            group: 'foundation',
            number: '01',
            name: 'Color',
            specs: [
              {
                label: 'Rojo',
                value: 'Acción principal y lo destacado',
                swatch: '#eb0a1e'
              },
              {
                label: 'Negro',
                value: 'Texto y fondos oscuros',
                swatch: '#000000'
              },
              {
                label: 'Blanco',
                value: 'Fondos claros',
                swatch: '#ffffff'
              },
              {
                label: 'Gris',
                value: 'Texto secundario',
                swatch: '#58595b'
              },
              {
                label: 'Líneas',
                value: 'Negro al 14 % en fondo claro · blanco al 22 % en oscuro'
              }
            ]
          },
          {
            id: 'type',
            group: 'foundation',
            number: '02',
            name: 'Tipografía',
            specs: [
              {
                label: 'Titular en mayúsculas',
                value: 'Negrita · 7 palabras o menos'
              },
              {
                label: 'Titular en oración',
                value: 'Semibold'
              },
              {
                label: 'Bajada',
                value: '18 px'
              },
              { label: 'Cuerpo', value: '16 px' },
              { label: 'Texto pequeño', value: '14 px' },
              {
                label: 'Etiqueta',
                value: '12 px · semibold · mayúsculas · espaciado 0,12 em'
              }
            ]
          },
          {
            id: 'icons',
            group: 'foundation',
            number: '03',
            name: 'Iconos'
          },
          {
            id: 'motion',
            group: 'foundation',
            number: '04',
            name: 'Movimiento'
          },
          {
            id: 'access',
            group: 'foundation',
            number: '05',
            name: 'Accesibilidad'
          },
          {
            id: 'button',
            group: 'essential',
            number: '01',
            name: 'Botón'
          },
          {
            id: 'chip',
            group: 'essential',
            number: '02',
            name: 'Etiqueta y opción'
          },
          {
            id: 'question',
            group: 'essential',
            number: '03',
            name: 'Panel de pregunta'
          },
          {
            id: 'card',
            group: 'essential',
            number: '04',
            name: 'Tarjeta de modelo'
          }
        ]
      }
    }
  },

  validation: {
    opener: {
      number: '05',
      kicker: 'Capítulo 05',
      word: 'Validación',
      summary: 'Qué se va a comprobar, qué falta medir y qué sigue.',
      background: {
        label: 'Imagen de fondo · persona probando el prototipo'
      },
      window: { label: 'Imagen · sesión de prueba con el prototipo' }
    },
    plan: {
      head: {
        eyebrow: 'Plan de validación',
        title: 'Qué vamos a comprobar'
      },
      statement:
        'Si las personas comprenden la asesoría, si las recomendaciones corresponden a lo que expresaron y si entienden sus razones. Se miden con las cinco métricas de la tabla de Estrategia (claridad, relevancia, comprensión, comparación y confianza) y con la eficiencia al completar las tareas.',
      tasksLabel: 'Tareas de la prueba',
      tasks: [
        'Completar la asesoría con tu situación real.',
        'Explicar por qué apareció el modelo destacado.',
        'Comparar dos alternativas y elegir una.',
        'Encontrar el precio de una versión específica.'
      ],
      pending:
        'Resultados e iteraciones: participantes, método, hallazgos, métricas y qué cambió después de las pruebas.'
    },
    next: {
      head: {
        eyebrow: 'Próximos pasos',
        title: 'Lo que sigue'
      },
      steps: [
        'Validar el problema con entrevistas a compradores reales.',
        'Completar la ficha de la RAV4 con la fuente oficial.',
        'Agregar datos de baúl y consumo con fuente oficial.',
        'Evaluar la asistencia conversacional.',
        'Explorar la versión mobile.'
      ]
    },
    closing: {
      title: 'Toyota — Beyond the Model',
      note: 'Concepto de diseño para portafolio. No es un sitio oficial de Toyota. Datos y precios sugeridos tomados de toyota.com.co, vigentes del 1 al 30 de noviembre de 2026.'
    }
  }
};
