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
    trackHint: 'Sigue bajando para recorrer las referencias',
    trackProgress: 'Referencia {current} de {total}',
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
        src: '/toyota/fotos/01-fondo-yaris.webp'
      },
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
      stats: [
        { value: 6, label: 'categorías en el catálogo' },
        { value: 20, label: 'vehículos nuevos (noviembre de 2026)' },
        { value: 4, label: 'filtros: tipo, precio, asientos y modelo' }
      ],
      currentLabel: 'Experiencia actual · parte del producto',
      currentSteps: [
        { label: 'Página principal' },
        { label: 'Catálogo y filtros' },
        { label: 'Detalle del vehículo' },
        { label: 'Cotización' }
      ]
    },
    description: {
      head: {
        eyebrow: 'Solución',
        title: 'Una nueva forma de descubrir y elegir un Toyota'
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
          'Vista aérea de vehículos Toyota de colores vivos estacionados en filas',
        src: '/toyota/fotos/02-fondo-vista-aerea.webp'
      },
      window: {
        label:
          'Hombre sonriente comparando vehículos Toyota en su portátil, con una Hilux naranja estacionada afuera',
        src: '/toyota/fotos/02-celda-hilux.webp'
      }
    },
    benchmark: {
      head: {
        eyebrow: 'Análisis de referentes',
        title: 'Tres experiencias, siete criterios'
      },
      criteriaLabel:
        'Criterios · el objetivo no fue copiar interfaces, sino identificar patrones y oportunidades',
      criteria: [
        'Descubrimiento',
        'Navegación',
        'Filtros',
        'Información',
        'Comparación',
        'Asesoría',
        'Conversión'
      ],
      strengthLabel: 'Fortaleza identificada',
      opportunityLabel: 'Oportunidad observada',
      references: [
        {
          name: 'Hyundai',
          strength: 'Experiencias visuales, comparador y reserva online',
          opportunity:
            'Traducir características técnicas en necesidades cotidianas',
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
        { label: 'Brecha de interpretación', isHighlight: true },
        { label: 'Incertidumbre y mayor esfuerzo' }
      ]
    },
    user: {
      head: {
        eyebrow: 'Usuario',
        title:
          'Personas que necesitan orientación para elegir su próximo vehículo.'
      },
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
      ]
    },
    hmw: {
      eyebrow: '¿Cómo podríamos…?',
      question:
        '¿Cómo podríamos interpretar las necesidades y preferencias de cada persona para ayudarla a descubrir qué vehículo Toyota se adapta mejor a su contexto?'
    },
    jobs: {
      head: {
        eyebrow: 'Trabajos por hacer (JTBD)',
        title: 'Encontrar el vehículo adecuado para mi contexto.'
      },
      statementLabel: 'Declaración del trabajo',
      statement: [
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
      summary:
        'La propuesta de valor, la trazabilidad de los objetivos y la estrategia de IA.',
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
      head: {
        eyebrow: 'Propuesta de valor',
        title:
          'Del catálogo de vehículos a una experiencia que entiende tus necesidades.'
      },
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
    goals: {
      head: {
        eyebrow: 'Objetivos, criterios y métricas',
        title: 'Una experiencia exitosa ayuda a elegir con mayor claridad.'
      },
      table: {
        columns: ['Punto de dolor', 'Objetivo', 'Criterio de éxito', 'Métrica'],
        rows: [
          [
            'Exploración: no saber por dónde comenzar',
            'PG01 Descubrimiento',
            'Comprende las preguntas e identifica sus prioridades',
            'Comprensión del recorrido'
          ],
          [
            'Relevancia: no saber qué características son importantes',
            'PG02 Personalización',
            'Las recomendaciones corresponden a lo que expresó',
            'Relevancia percibida'
          ],
          [
            'Información: dificultad para interpretar características técnicas',
            'PG03 Comprensión',
            'Entiende beneficios y características',
            'Comprensión de beneficios'
          ],
          [
            'Evaluación y decisión: dificultad para identificar diferencias relevantes e incertidumbre frente a la elección',
            'PG04 Evaluación',
            'Identifica diferencias relevantes',
            'Efectividad de comparación'
          ],
          [
            'Confianza: necesidad de entender por qué una recomendación es adecuada',
            'PG05 Confianza',
            'Entiende por qué se le recomienda cada vehículo',
            'Confianza antes y después'
          ]
        ]
      },
      note: 'Métricas para validar el concepto. No se miden resultados comerciales.'
    },
    ai: {
      head: {
        eyebrow: 'Estrategia de IA',
        title: 'La IA interpreta, la lógica recomienda y los datos respaldan'
      },
      layers: [
        {
          number: '01',
          name: 'Entrada',
          text: 'Respuestas de la asesoría y catálogo Toyota.'
        },
        {
          number: '02',
          name: 'Interpretación',
          text: 'La IA interpreta necesidades y preferencias.'
        },
        {
          number: '03',
          name: 'Compatibilidad',
          text: 'La lógica de compatibilidad cruza perfil y catálogo.'
        },
        {
          number: '04',
          name: 'Resultado',
          text: 'Recomendaciones, razones y diferencias.'
        }
      ],
      rule: 'La IA no inventa características, precios, especificaciones ni beneficios.',
      trustLabel: 'Confianza: útil, comprensible y sin presión',
      mechanisms: [
        'Explicar el porqué de cada recomendación',
        'Mostrar información verificable',
        'Diferenciar hechos de interpretaciones',
        'Reconocer cuando falta información',
        'Dejar la decisión en manos del usuario'
      ],
      trustRule:
        'No se muestra un puntaje de compatibilidad sin una metodología definida.'
    }
  },

  product: {
    opener: {
      number: '04',
      kicker: 'Capítulo 04',
      word: 'Producto',
      summary:
        'Qué entra en el MVP, cómo recomienda, cómo se recorre y cómo se ve.',
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
      head: {
        eyebrow: 'Inventario y priorización de funcionalidades',
        title: '33 funcionalidades, 20 indispensables'
      },
      statement:
        'El MVP se centra en la experiencia principal de descubrimiento y recomendación personalizada.',
      total: 'Método MoSCoW',
      moscow: [
        { value: 20, label: 'Imprescindibles' },
        { value: 7, label: 'Importantes' },
        { value: 6, label: 'Deseables' }
      ],
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
      },
      rules: [
        {
          title: 'Uso',
          text: 'El día a día → Ciudad · Viajes en familia → Espacio · Trabajo → Carga.'
        },
        {
          title: 'Qué llevas',
          text: 'Maletas, mercado y mascotas no suman: no hay dato oficial de baúl.'
        }
      ]
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
      resultsLabel: 'Un destacado y dos alternativas, en tres variantes',
      results: [
        {
          name: 'Coincidencia total',
          title: 'Estos Toyota se ajustan a lo que buscas',
          example:
            'Familia de 5, ciudad y carretera, $100 a $150 M → Corolla Cross, Yaris HB y Corolla'
        },
        {
          name: 'Similar a tu perfil',
          title: 'Estos se acercan a lo que buscas',
          example:
            'SUV híbrida de 7 puestos → Fortuner (7 puestos) o RAV4 (híbrida)'
        },
        {
          name: 'Con ventajas',
          title: 'La opción más cercana a lo que buscas',
          example:
            '7 puestos con $150 a $220 M → Fortuner SR 2.8 diésel 4x2, que se pasa $22,9 M'
        }
      ],
      exampleLabel: 'Ejemplo',
      decision:
        'La propuesta complementa el catálogo existente, no lo reemplaza.'
    },
    design: {
      head: {
        eyebrow: 'Prototipo y sistema visual',
        title: 'De la definición a una experiencia que se puede recorrer'
      },
      screens: [
        { label: 'Pantalla · inicio del módulo' },
        { label: 'Pantalla · pregunta de la asesoría' },
        { label: 'Pantalla · tu perfil' },
        { label: 'Pantalla · resultado' },
        { label: 'Pantalla · detalle del vehículo' },
        { label: 'Pantalla · comparación' }
      ],
      systemLabel: 'Rojo para lo importante, contraste para todo lo demás',
      decisions: [
        'Rojo #EB0A1E a opacidad completa',
        'Negro, blanco y gris #58595B',
        'Toyota Type (temporal: Figtree)',
        'Esquinas rectas',
        'Siluetas de referencia'
      ]
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
