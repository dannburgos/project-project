import type { ToyotaStory } from '@/content/toyota-story.types';

// Caso Toyota — Beyond the Model, versión esencial: una idea por módulo, con
// su titular, una frase corta y su pieza visual. Las frases salen del
// documento maestro (.claude/knowledge/toyota/caso-de-estudio-beyond-the-model.md),
// que conserva el texto completo; la composición, de referencias-web.md. Las
// imágenes que aún no llegan van como cajas grises con su etiqueta.
export const toyotaStory: ToyotaStory = {
  sections: [
    { number: '01', name: 'Panorama' },
    { number: '02', name: 'Descubrimiento' },
    { number: '03', name: 'Estrategia' },
    { number: '04', name: 'Definición de producto' },
    { number: '05', name: 'Diseño de experiencia' },
    { number: '06', name: 'Validación y aprendizajes' }
  ],
  labels: {
    navigation: 'Capítulos del caso',
    menu: 'Capítulos',
    hypothesis: 'Hipótesis',
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
    eyebrow: 'Caso de estudio · Diseño de producto',
    title: 'Toyota — Beyond the Model',
    intro:
      'Del modelo al vehículo adecuado: ayudar a cada persona a entender qué Toyota responde mejor a sus necesidades, y por qué.',
    visual: {
      label:
        'Imagen principal · captura del módulo «Encuentra tu Toyota», inicio de la asesoría en panel oscuro'
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
      word: 'Panorama',
      summary: 'Qué es Beyond the Model y qué problema aborda.',
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
    description: {
      head: {
        eyebrow: 'Descripción del proyecto',
        title: 'Una nueva forma de descubrir y elegir un Toyota'
      },
      statement:
        'Una propuesta conceptual de rediseño de la experiencia digital de Toyota Colombia, con asesoría personalizada y recomendaciones inteligentes.',
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
          text: 'Explorar los vehículos Toyota desde las necesidades del usuario.'
        },
        {
          number: '02',
          title: 'Nuevo flujo de asesoría y recomendación',
          text: 'Un cuestionario guiado y vehículos compatibles con sus razones.'
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
        'Que las necesidades del usuario sean el punto de partida para explorar las alternativas disponibles.',
      solutionLabel: 'Solución',
      capabilities: [
        {
          title: 'Descubrir',
          text: 'Identificar las necesidades y preferencias del usuario.'
        },
        {
          title: 'Recomendar',
          text: 'Presentar vehículos compatibles con su perfil.'
        },
        {
          title: 'Explicar',
          text: 'Comprender por qué cada alternativa responde a sus necesidades.'
        }
      ],
      closing: 'De explorar vehículos a descubrir cuál es el adecuado para ti.'
    }
  },

  discovery: {
    opener: {
      number: '02',
      kicker: 'Capítulo 02',
      word: 'Descubrimiento',
      summary:
        'El contexto de Toyota en Colombia, el benchmark y las personas detrás del problema.',
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
    context: {
      head: {
        eyebrow: 'Toyota en Colombia',
        title: 'Una oferta diversa, múltiples criterios de elección.'
      },
      statement:
        'La oportunidad está en conectar esa diversidad de productos con las necesidades de cada persona.',
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
      ],
      proposedLabel: 'Experiencia propuesta · parte de la persona',
      proposedSteps: [
        { label: 'Necesidades del usuario', isHighlight: true },
        { label: 'Asesoría y análisis' },
        { label: 'Vehículos recomendados' }
      ],
      quote: 'El punto de partida no debería ser el vehículo, sino la persona.'
    },
    benchmark: {
      head: {
        eyebrow: 'Análisis de referentes',
        title: 'Tres experiencias, siete criterios'
      },
      statement:
        'El objetivo no fue copiar interfaces, sino identificar patrones, buenas prácticas y oportunidades.',
      criteriaLabel: 'Criterios',
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
      painsLabel: 'Puntos de dolor',
      pains: [
        { title: 'Exploración', text: 'No saber por dónde comenzar.' },
        {
          title: 'Información',
          text: 'Dificultad para interpretar características técnicas.'
        },
        {
          title: 'Relevancia',
          text: 'No saber qué características son importantes.'
        },
        {
          title: 'Evaluación',
          text: 'Dificultad para identificar diferencias relevantes.'
        },
        { title: 'Decisión', text: 'Incertidumbre frente a la elección.' },
        {
          title: 'Confianza',
          text: 'Necesidad de entender por qué una recomendación es adecuada.'
        }
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
      progress: [
        {
          title: 'Punto de partida',
          text: '«Necesito un vehículo, pero no sé cuál elegir».'
        },
        {
          title: 'Progreso buscado',
          text: '«Entiendo mis necesidades e identifico mis alternativas».'
        },
        {
          title: 'Resultado esperado',
          text: '«Tomo una decisión informada y me siento seguro».'
        }
      ],
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
        'La propuesta de valor, el concepto y la estrategia de IA detrás de la experiencia.',
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
      },
      fit: 'Encaje de valor: transformar la información del catálogo Toyota en orientación personalizada.'
    },
    goals: {
      head: {
        eyebrow: 'Objetivos y criterios de éxito',
        title: 'Una experiencia exitosa ayuda a elegir con mayor claridad.'
      },
      table: {
        columns: ['Objetivo', 'Criterio de éxito', 'Métrica'],
        rows: [
          [
            'PG01 Descubrimiento',
            'Comprende las preguntas e identifica sus prioridades',
            'Comprensión del recorrido'
          ],
          [
            'PG02 Personalización',
            'Las recomendaciones corresponden a lo que expresó',
            'Relevancia percibida'
          ],
          [
            'PG03 Comprensión',
            'Entiende beneficios y características',
            'Comprensión de beneficios'
          ],
          [
            'PG04 Evaluación',
            'Identifica diferencias relevantes',
            'Efectividad de comparación'
          ],
          [
            'PG05 Confianza',
            'Entiende por qué se le recomienda cada vehículo',
            'Confianza antes y después'
          ]
        ]
      },
      note: 'Métricas para validar el concepto. No se miden resultados comerciales.'
    },
    concept: {
      head: {
        eyebrow: 'Concepto de producto',
        title:
          'Una experiencia que conecta personas con vehículos, no solamente modelos con características.'
      },
      stagesLabel: 'Seis etapas, un recorrido continuo',
      stages: [
        { label: 'Descubrir' },
        { label: 'Comprender' },
        { label: 'Interpretar' },
        { label: 'Recomendar', isHighlight: true },
        { label: 'Evaluar' },
        { label: 'Continuar' }
      ]
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
        'Qué entra en el MVP, cómo recomienda y cómo se recorre la experiencia.',
      background: {
        label:
          'Imagen de fondo · Toyota Corolla Cross cobriza en movimiento, con fondo barrido'
      },
      window: { label: 'Imagen · resultado de la asesoría en el prototipo' }
    },
    mvp: {
      head: {
        eyebrow: 'Inventario y priorización de funcionalidades',
        title: '33 funcionalidades, 20 indispensables'
      },
      statement:
        'El MVP se centra en la experiencia principal de descubrimiento y recomendación personalizada.',
      total: '33 funcionalidades · método MoSCoW',
      moscow: [
        { value: 20, label: 'Imprescindibles' },
        { value: 7, label: 'Importantes' },
        { value: 6, label: 'Deseables' }
      ],
      behaviorsLabel: 'Lo que el MVP garantiza',
      behaviors: [
        'Avanzar y regresar sin perder lo respondido.',
        '«Aún no lo sé» es una respuesta válida y no filtra resultados.',
        'Cada recomendación tiene razones verificables.',
        'Los datos faltantes se señalan; no se inventan.',
        'El usuario conserva el control de su elección.'
      ]
    },
    logic: {
      head: {
        eyebrow: 'Lógica de recomendación',
        title: 'Una lógica simple y explicable'
      },
      statement:
        'Cada respuesta que coincide con una etiqueta del modelo suma un punto. El presupuesto es el único filtro.',
      stats: [
        { value: 6, label: 'modelos del catálogo Toyota Colombia' },
        { value: 19, label: 'versiones con precio sugerido' },
        { value: 9, label: 'preguntas en 5 bloques' },
        { value: 3, label: 'resultados: 1 destacado y 2 alternativas' }
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
        },
        {
          title: 'Resultado',
          text: 'Se ordena por puntos y, si hay empate, por menor precio.'
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
        { label: 'Detalle y comparación' },
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
      resultsLabel: 'El resultado, en tres variantes',
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
    }
  },

  experience: {
    opener: {
      number: '05',
      kicker: 'Capítulo 05',
      word: 'Experiencia',
      summary: 'El prototipo funcional y el sistema visual.',
      background: {
        label: 'Imagen de fondo · prototipo «Encuentra tu Toyota» en pantalla'
      },
      window: { label: 'Imagen · panel oscuro de la asesoría' }
    },
    design: {
      head: {
        eyebrow: 'Prototipo y sistema visual',
        title: 'De la definición a una experiencia que se puede recorrer'
      },
      statement:
        'Asesoría de 9 preguntas, perfil, resultado con un destacado y dos alternativas, detalle y comparación de hasta tres modelos.',
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
      number: '06',
      kicker: 'Capítulo 06',
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
        'Si las personas comprenden la asesoría, si las recomendaciones corresponden a lo que expresaron y si entienden sus razones.',
      criteriaLabel: 'Criterios',
      criteria: [
        'Claridad',
        'Relevancia',
        'Comprensión',
        'Explicabilidad',
        'Comparación',
        'Confianza',
        'Eficiencia'
      ],
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
