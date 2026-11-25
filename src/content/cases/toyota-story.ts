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
          text: 'Respuestas de la asesoría y catálogo Toyota.',
          guarantees: [
            'Mostrar información verificable',
            'Reconocer cuando falta información'
          ]
        },
        {
          number: '02',
          name: 'Interpretación',
          text: 'La IA interpreta necesidades y preferencias.',
          guarantees: [
            'Diferenciar hechos de interpretaciones',
            'No inventar características, precios, especificaciones ni beneficios'
          ]
        },
        {
          number: '03',
          name: 'Compatibilidad',
          text: 'La lógica de compatibilidad cruza perfil y catálogo.',
          guarantees: [
            'No mostrar un puntaje de compatibilidad sin una metodología definida'
          ]
        },
        {
          number: '04',
          name: 'Resultado',
          text: 'Recomendaciones, razones y diferencias.',
          guarantees: [
            'Explicar el porqué de cada recomendación',
            'Dejar la decisión en manos del usuario'
          ]
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
    mvp: {
      behaviorsLabel: 'Lo que el MVP garantiza',
      behaviors: [
        'Avanzar y regresar sin perder lo respondido.',
        '«Aún no lo sé» es una respuesta válida y no filtra resultados.'
      ]
    },
    logic: {
      head: {
        eyebrow: 'Lógica de recomendación',
        title: 'Una lógica simple y explicable'
      },
      statement:
        'Cada respuesta que coincide con una etiqueta del modelo suma un punto. El presupuesto es el único filtro. Se ordena por puntos y, si hay empate, por menor precio.',
      stats: [
        { value: 6, label: 'modelos del catálogo Toyota Colombia' },
        { value: 19, label: 'versiones con precio sugerido' }
      ],
      matrixTitle: 'Etiquetas de cada modelo',
      matrix: {
        modelsLabel: 'Modelo',
        tags: [
          'Ciudad',
          'Espacio',
          'Ahorro',
          'Comodidad',
          'Tecnología',
          'Potencia',
          'Versatilidad',
          'Carga',
          'Terreno',
          '7 puestos'
        ],
        models: [
          {
            name: 'Yaris HB',
            price: 'Desde $89.900.000',
            tags: ['Ciudad', 'Ahorro', 'Comodidad']
          },
          {
            name: 'Corolla',
            price: 'Desde $109.900.000',
            tags: ['Ciudad', 'Ahorro', 'Comodidad', 'Tecnología']
          },
          {
            name: 'Corolla Cross',
            price: 'Desde $139.900.000',
            tags: ['Ciudad', 'Espacio', 'Ahorro', 'Comodidad', 'Tecnología']
          },
          {
            name: 'Hilux',
            price: 'Desde $196.500.000',
            tags: ['Potencia', 'Versatilidad', 'Carga', 'Terreno']
          },
          {
            name: 'RAV4',
            price: 'Desde $207.500.000',
            tags: [
              'Espacio',
              'Ahorro',
              'Comodidad',
              'Tecnología',
              'Potencia',
              'Versatilidad'
            ]
          },
          {
            name: 'Fortuner',
            price: 'Desde $242.900.000',
            tags: [
              'Espacio',
              'Comodidad',
              'Potencia',
              'Versatilidad',
              'Terreno',
              '7 puestos'
            ]
          }
        ]
      }
    },
    flow: {
      head: {
        eyebrow: 'Flujo de usuario',
        title: 'Un solo recorrido que siempre termina en un resultado'
      },
      statement:
        'Un módulo en el home de Toyota Colombia, también accesible desde el menú como «Encuentra tu Toyota».',
      stagesLabel: 'Seis etapas, un recorrido continuo',
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
        { label: 'Asesoría', text: '9 preguntas. «Aún no lo sé» no bloquea.' },
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
      loop: {
        label: 'Editar perfil',
        text: 'Vuelve a la asesoría sin salir del recorrido',
        from: 3,
        to: 2
      },
      exitsLabel: 'Ya existen en Toyota',
      exits: ['Cotizador', 'Prueba de manejo'],
      decision:
        'La propuesta complementa el catálogo existente, no lo reemplaza.'
    },
    design: {
      head: {
        eyebrow: 'Sistema de diseño',
        title: 'De la definición a una experiencia que se puede recorrer'
      },
      system: {
        foundationsLabel: 'Fundamentos',
        essentialsLabel: 'Esenciales',
        indexLabel: 'Sistema de diseño',
        labels: {
          use: 'Usa',
          avoid: 'Evita',
          copy: 'Copiar',
          copied: 'Copiado'
        },
        sample: {
          type: {
            fieldLabel: 'Prueba con tu texto',
            placeholder: 'Escribe aquí',
            text: 'Encuentra el Toyota que se adapta a tu vida'
          },
          grid: {
            marginLabel: 'Margen',
            columnLabel: 'Columna',
            contentLabel: 'Ancho máximo 1440 px',
            spacingLabel: 'Escala de espacio',
            spacing: [8, 16, 24, 32, 48, 72],
            cornersLabel: 'Esquinas',
            squareLabel: 'Recta',
            roundedLabel: 'Redondeada'
          },
          shape: {
            squareLabel: 'Cuadrado',
            arrowLabel: 'Flecha',
            tagLabel: 'Etiqueta roja',
            crossLabel: 'Cruz',
            tag: 'Coincidencia total'
          },
          motion: {
            replay: 'Repetir',
            curveLabel: 'Curva',
            cards: ['Pregunta', 'Respuesta', 'Resultado', 'Comparación'],
            buttonLabel: 'El relleno sube',
            buttonText: 'Pasa el cursor'
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
            options: ['Ciudad', 'Familia', 'Trabajo', 'Viajes largos'],
            primary: 'Continuar',
            secondary: 'Aún no lo sé',
            progressTotal: 9,
            progressCurrent: 2
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
          ],
          reasons: [
            'Ahorra combustible en ciudad',
            'Tiene espacio para tu familia',
            'Incluye seguridad activa de serie'
          ],
          compare: {
            models: ['Corolla Cross', 'Yaris HB', 'RAV4'],
            counterLabel: 'elegidos',
            button: 'Comparar',
            hint: 'Elige al menos dos modelos'
          },
          legal: {
            content: 'Precio sugerido para este perfil.',
            text: 'Concepto de diseño. Precios sugeridos de toyota.com.co, noviembre de 2026.'
          }
        },
        note: 'Sistema del prototipo, inspirado en el manual de marca de Toyota. No es un sistema oficial.',
        items: [
          {
            id: 'color',
            group: 'foundation',
            number: '01',
            name: 'Color',
            summary:
              'Rojo para lo importante y contraste para todo lo demás: blanco, negro y un gris.',
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
            ],
            use: 'Un solo elemento rojo por vista: la acción principal.',
            avoid: 'Degradados, rojos a media opacidad o varios rojos a la vez.'
          },
          {
            id: 'type',
            group: 'foundation',
            number: '02',
            name: 'Tipografía',
            summary:
              'Toyota Type (temporal: Figtree). La jerarquía la dan el peso y el tamaño, no el color.',
            specs: [
              {
                label: 'Titular en mayúsculas',
                value: 'Negrita · interlineado 90 % · 7 palabras o menos'
              },
              {
                label: 'Titular en oración',
                value: 'Semibold · interlineado 98 %'
              },
              {
                label: 'Bajada',
                value: '18 px · interlineado 145 %'
              },
              { label: 'Cuerpo', value: '16 px · interlineado 145 %' },
              { label: 'Texto pequeño', value: '14 px' },
              {
                label: 'Etiqueta',
                value: '12 px · semibold · mayúsculas · espaciado 0,12 em'
              }
            ],
            use: 'Titulares en oración y con el interlineado ajustado.',
            avoid: 'Más de tres tamaños en un mismo bloque.'
          },
          {
            id: 'grid',
            group: 'foundation',
            number: '03',
            name: 'Retícula y espacio',
            summary:
              'Todo se alinea a una retícula de ancho limitado, con esquinas rectas y líneas finas.',
            specs: [
              { label: 'Ancho máximo', value: '1440 px' },
              { label: 'Márgenes', value: '24 a 72 px según el ancho' },
              { label: 'Esquinas', value: 'Rectas · 0 px' },
              { label: 'Líneas', value: '1 px' },
              { label: 'Sombras', value: 'Ninguna' }
            ],
            use: 'Alinear cada pieza a los márgenes de la retícula.',
            avoid: 'Esquinas redondeadas, sombras o tarjetas flotantes.'
          },
          {
            id: 'shape',
            group: 'foundation',
            number: '04',
            name: 'Formas e iconos',
            summary:
              'Pocas formas, todas rectas: el cuadrado como marcador y la flecha para avanzar.',
            specs: [
              {
                label: 'Cuadrado',
                value:
                  'Marca el avance y lo que aplica; en rojo si es el actual'
              },
              {
                label: 'Flecha',
                value: '→ para pasar de un estado al siguiente'
              },
              {
                label: 'Etiqueta roja',
                value: 'Rectángulo de 30 px de alto · 12 px · mayúsculas'
              }
            ],
            use: 'Un cuadrado rojo significa «esto aplica» o «aquí vas».',
            avoid: 'Iconos rellenos, ilustrados o con esquinas redondeadas.'
          },
          {
            id: 'motion',
            group: 'foundation',
            number: '05',
            name: 'Movimiento',
            summary:
              'Siempre hacia adelante y con aceleración suave: las piezas llegan escalonadas.',
            specs: [
              {
                label: 'Dirección',
                value: 'De izquierda a derecha y de abajo hacia arriba'
              },
              {
                label: 'Curva',
                value: 'cubic-bezier(0.16, 1, 0.3, 1)'
              },
              { label: 'Entrada', value: 'Escalonada · 80 ms entre piezas' },
              {
                label: 'Botón',
                value: 'El relleno sube desde abajo al pasar el cursor'
              },
              {
                label: 'Reducir movimiento',
                value: 'Todo aparece ya en su lugar'
              }
            ],
            use: 'Mover solo lo que ayuda a entender el orden.',
            avoid: 'Rebotes, giros o movimientos que no avanzan.'
          },
          {
            id: 'access',
            group: 'foundation',
            number: '06',
            name: 'Accesibilidad',
            summary: 'Contraste alto, foco visible y botones fáciles de tocar.',
            specs: [
              {
                label: 'Contraste',
                value:
                  'Negro sobre blanco 21 : 1 · gris sobre blanco 7 : 1 · blanco sobre rojo 4,6 : 1'
              },
              {
                label: 'Foco',
                value: 'Contorno rojo de 2 px, separado 3 px'
              },
              { label: 'Botones', value: '52 px de alto' },
              {
                label: 'Movimiento',
                value: 'Respeta la opción «reducir movimiento»'
              }
            ],
            use: 'Que todo se pueda recorrer con el teclado.',
            avoid:
              'Quitar el contorno de foco o dar información solo con color.'
          },
          {
            id: 'button',
            group: 'essential',
            number: '01',
            name: 'Botón',
            summary:
              'Tres tipos: primario en rojo, de contorno y de texto. Solo uno primario por pantalla.',
            specs: [
              { label: 'Alto', value: '52 px · 28 px de relleno a los lados' },
              {
                label: 'Primario',
                value:
                  'Fondo rojo · texto blanco · al pasar, se rellena de negro'
              },
              { label: 'De contorno', value: 'Borde de 1,5 px · texto negro' },
              {
                label: 'De texto',
                value: '13 px · negrita · mayúsculas · subrayado de 1,5 px'
              },
              { label: 'Deshabilitado', value: '35 % de opacidad' }
            ],
            use: 'Un verbo corto: Continuar, Ver resultado.',
            avoid: 'Dos botones rojos juntos o textos largos.'
          },
          {
            id: 'chip',
            group: 'essential',
            number: '02',
            name: 'Etiqueta y opción',
            summary:
              'Las respuestas cortas se eligen con etiquetas rectas, de una en una.',
            specs: [
              { label: 'Alto', value: '32 px' },
              { label: 'Borde', value: '1 px' },
              { label: 'Texto', value: '13 px · semibold' },
              {
                label: 'Elegida',
                value: 'Fondo negro · texto blanco'
              }
            ],
            use: 'Respuestas de una o dos palabras.',
            avoid: 'Frases largas o más de seis opciones en una fila.'
          },
          {
            id: 'question',
            group: 'essential',
            number: '03',
            name: 'Panel de pregunta',
            summary:
              'Una pregunta por pantalla, con su respuesta, el avance y la opción «aún no lo sé».',
            specs: [
              { label: 'Pregunta', value: 'Titular en oración' },
              {
                label: 'Avance',
                value: 'Un cuadrado por paso · el actual en rojo'
              },
              {
                label: 'Acciones',
                value: 'Primario a la izquierda · de texto al lado'
              },
              {
                label: 'Regla roja',
                value: 'Línea de 2 px en el borde izquierdo del panel'
              }
            ],
            use: '«Aún no lo sé» siempre es una respuesta válida.',
            avoid: 'Más de una pregunta o pedir datos personales.'
          },
          {
            id: 'card',
            group: 'essential',
            number: '04',
            name: 'Tarjeta de modelo',
            summary:
              'El modelo en mayúsculas, su precio sugerido y una etiqueta que dice qué tan bien encaja.',
            specs: [
              { label: 'Nombre', value: '26 a 30 px · negrita · mayúsculas' },
              { label: 'Precio', value: '«Desde» + precio sugerido' },
              { label: 'Etiqueta', value: 'Roja · 30 px de alto · 12 px' },
              { label: 'Borde', value: '1 px · sin sombra' }
            ],
            use: 'Un destacado y dos alternativas.',
            avoid: 'Más de tres modelos o precios sin la palabra «sugerido».'
          },
          {
            id: 'reasons',
            group: 'essential',
            number: '05',
            name: 'Razones',
            summary:
              'Cada recomendación explica por qué, en frases cortas y ligadas a lo que la persona respondió.',
            specs: [
              { label: 'Marcador', value: 'Cuadrado de 20 px' },
              { label: 'Separación', value: '12 px entre razones' },
              { label: 'Cantidad', value: 'Entre dos y cuatro' }
            ],
            use: 'Decir «tiene espacio para tu familia», no «tiene 5 puestos».',
            avoid: 'Beneficios que la persona no pidió o datos sin fuente.'
          },
          {
            id: 'compare',
            group: 'essential',
            number: '06',
            name: 'Comparador',
            summary:
              'Una barra abajo reúne los modelos elegidos y el botón para compararlos.',
            specs: [
              { label: 'Mínimo', value: 'Dos modelos' },
              { label: 'Máximo', value: 'Tres modelos' },
              {
                label: 'Botón',
                value: 'Deshabilitado hasta tener dos modelos'
              },
              { label: 'Diferencias', value: 'Lista con marcador de 20 px' }
            ],
            use: 'Mostrar solo las diferencias que importan.',
            avoid: 'Tablas con todos los datos técnicos.'
          },
          {
            id: 'legal',
            group: 'essential',
            number: '07',
            name: 'Nota legal',
            summary:
              'Una línea discreta que aclara que es un concepto y de dónde salen los datos.',
            specs: [
              { label: 'Texto', value: '13 px · gris #58595B' },
              { label: 'Margen', value: '32 px arriba' }
            ],
            use: 'Decir que es un concepto y citar la fuente de los precios.',
            avoid: 'Esconderla o escribirla en mayúsculas.'
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
