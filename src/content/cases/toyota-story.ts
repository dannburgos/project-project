import type { ToyotaStory } from '@/content/toyota-story.types';

// Caso Toyota — Beyond the Model, versión esencial: una idea por módulo, con
// su titular, una frase corta y su pieza visual. Las frases salen del
// documento maestro (.claude/knowledge/toyota/caso-de-estudio-beyond-the-model.md),
// que conserva el texto completo; la composición, de referencias-web.md. Las
// imágenes que aún no llegan van como cajas grises con su etiqueta.
export const toyotaStory: ToyotaStory = {
  sections: [
    { number: '01', name: 'Overview' },
    { number: '02', name: 'Discovery' },
    { number: '03', name: 'Strategy' },
    { number: '04', name: 'Product Definition' },
    { number: '05', name: 'Experience Design' },
    { number: '06', name: 'Validation & Learnings' }
  ],
  labels: {
    navigation: 'Capítulos del caso',
    menu: 'Capítulos',
    evidence: 'Nivel de evidencia',
    hypothesis: 'Hipótesis',
    trackHint: 'Sigue bajando para recorrer las referencias',
    trackProgress: 'Referencia {current} de {total}',
    pending: 'Por completar con evidencia real'
  },

  cover: {
    eyebrow: 'Caso de estudio · Product Design',
    title: 'Toyota — Beyond the Model',
    lead: 'De elegir un modelo a descubrir el vehículo adecuado.',
    body: 'El reto no consiste en mostrar más vehículos, sino en ayudar a las personas a entender cuál responde mejor a sus necesidades y por qué.',
    visual: {
      label:
        'Imagen principal · captura del módulo «Encuentra tu Toyota», inicio de la asesoría en panel oscuro'
    },
    factsTitle: 'Ficha del proyecto',
    facts: [
      { label: 'Tipo', value: 'Experience Redesign' },
      { label: 'Enfoque', value: 'Vehicle Discovery & Recommendation' },
      { label: 'Marca', value: 'Toyota' },
      { label: 'Mercado', value: 'Colombia' },
      { label: 'Plataforma', value: 'Web desktop' },
      {
        label: 'Rol',
        value: 'Product Designer — End-to-End Experience Design'
      },
      { label: 'Naturaleza', value: 'Concepto independiente para portafolio' }
    ],
    note: 'Propuesta conceptual independiente. No es un producto oficial de Toyota.',
    scrollHint: 'Baja para empezar'
  },

  overview: {
    opener: {
      number: '01',
      word: 'Overview',
      summary: 'Qué es Beyond the Model y qué problema aborda.',
      sectionsLabel: 'En este capítulo',
      sections: ['Descripción y pilares', 'Del problema a la oportunidad'],
      background: {
        label: 'Imagen de fondo · persona frente a un Toyota en la ciudad'
      },
      window: { label: 'Imagen · familia subiendo a un Toyota' }
    },
    description: {
      head: {
        index: '01 — Overview',
        eyebrow: 'Project Description',
        title: 'Una nueva forma de descubrir y elegir un Toyota'
      },
      statement:
        'Una propuesta conceptual de rediseño de la experiencia digital de Toyota Colombia, con asesoría personalizada y recomendaciones inteligentes.',
      pillarsWord: 'Tres pilares',
      pillars: [
        {
          number: '01',
          title: 'Rediseño de la experiencia de descubrimiento',
          text: 'Explorar los vehículos Toyota desde las necesidades del usuario.',
          visual: { label: 'Imagen · inicio del módulo «Encuentra tu Toyota»' }
        },
        {
          number: '02',
          title: 'Nuevo flujo de asesoría y recomendación',
          text: 'Un cuestionario guiado y vehículos compatibles con sus razones.',
          visual: { label: 'Imagen · pregunta de la asesoría guiada' }
        },
        {
          number: '03',
          title: 'Incorporación de IA a la experiencia',
          text: 'Interpretación de respuestas y orientación contextual.',
          visual: {
            label: 'Imagen · resultado con las razones de la recomendación'
          }
        }
      ]
    },
    problem: {
      problemEyebrow: 'Problema',
      problem:
        'Identificar qué modelo se adapta mejor puede ser difícil por la cantidad de alternativas y lo complejo de entender sus diferencias.',
      quote:
        'Encontrar un vehículo adecuado no siempre es fácil cuando no sabes qué modelo responde mejor a lo que necesitas.',
      note: 'Hipótesis de problema, trabajada en Discovery.',
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
      word: 'Discovery',
      summary:
        'El contexto de Toyota en Colombia, el benchmark y las personas detrás del problema.',
      sectionsLabel: 'En este capítulo',
      sections: [
        'Contexto y oportunidad',
        'Research & Benchmark',
        'Problema y usuario',
        'Jobs to Be Done'
      ],
      background: {
        label: 'Imagen de fondo · catálogo de vehículos Toyota en pantalla'
      },
      window: { label: 'Imagen · persona comparando modelos en el computador' }
    },
    context: {
      head: {
        index: '02 — Context & Opportunity',
        eyebrow: 'Toyota in Colombia',
        title: 'Una oferta diversa, múltiples criterios de elección.'
      },
      statement:
        'La oportunidad está en conectar esa diversidad de productos con las necesidades de cada persona.',
      stats: [
        { value: 6, label: 'categorías en el catálogo' },
        { value: 20, label: 'vehículos nuevos (noviembre de 2026)' },
        { value: 4, label: 'filtros: tipo, precio, asientos y modelo' }
      ],
      note: 'Información encontrada en toyota.com.co.',
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
        index: '03 — Research & Benchmark',
        eyebrow: 'Experience Benchmark',
        title: 'Cinco experiencias, siete criterios'
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
          name: 'Kia',
          strength: 'Catálogo, fichas y comparación de modelos',
          opportunity: 'Conectar asesoría y recomendación antes de cotizar',
          visual: { label: 'Captura · catálogo de Kia Colombia' }
        },
        {
          name: 'Hyundai',
          strength: 'Experiencias visuales, comparador y reserva online',
          opportunity:
            'Traducir características técnicas en necesidades cotidianas',
          visual: { label: 'Captura · comparador de Hyundai Colombia' }
        },
        {
          name: 'Renault',
          strength: 'Comunicación desde estilos de vida',
          opportunity:
            'Incorporar orientación antes de las herramientas comerciales',
          visual: { label: 'Captura · estilos de vida en Renault Colombia' }
        },
        {
          name: 'Volvo',
          strength: 'Beneficios, tecnología y comparación',
          opportunity: 'Recomendar alternativas a partir de necesidades',
          visual: { label: 'Captura · comparación en Volvo Cars Colombia' }
        },
        {
          name: 'Autocosmos',
          strength: 'Amplitud de información, filtros y comparación multimarca',
          opportunity: 'Convertir información en orientación',
          visual: { label: 'Captura · filtros y comparador de Autocosmos' }
        }
      ],
      decisionsTitle: 'De aprendizaje a decisión',
      decisions: {
        columns: ['Aprendizaje', 'Decisión de producto'],
        rows: [
          [
            'La exploración parte del catálogo',
            'Crear una entrada basada en necesidades'
          ],
          [
            'Los filtros exigen conocimiento técnico',
            'Preguntas en lenguaje cotidiano'
          ],
          [
            'La información técnica necesita contexto',
            'Explicar beneficios según cada necesidad'
          ],
          [
            'Los comparadores parten de modelos ya elegidos',
            'Recomendar primero, comparar después'
          ],
          [
            'La asesoría se concentra en lo comercial',
            'Orientar antes de la cotización'
          ]
        ]
      },
      note: 'Basado en las páginas y herramientas revisadas, no en una auditoría exhaustiva de cada marca.'
    },
    problem: {
      head: {
        index: '04 — Problem & User Definition',
        eyebrow: 'Problem Definition',
        title:
          'El desafío no es encontrar más vehículos, sino entender cuál es el adecuado.'
      },
      model: [
        { label: 'Necesidad del usuario' },
        { label: 'Exploración del catálogo' },
        { label: 'Brecha de interpretación', isHighlight: true },
        { label: 'Incertidumbre y mayor esfuerzo' }
      ],
      segmentsLabel: 'Para quién',
      segments: [
        'Compradores primerizos',
        'Compradores con necesidades nuevas',
        'Compradores que renuevan su vehículo',
        'Compradores con preferencias definidas (complementario)'
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
      ],
      note: 'Segmentos y puntos de dolor son hipótesis de diseño, no investigación primaria.'
    },
    hmw: {
      eyebrow: 'How might we?',
      question:
        '¿Cómo podríamos interpretar las necesidades y preferencias de cada persona para ayudarla a descubrir qué vehículo Toyota se adapta mejor a su contexto?'
    },
    jobs: {
      head: {
        index: '05 — Jobs to Be Done',
        eyebrow: 'Core Job',
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
      statementLabel: 'Job Statement',
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
      word: 'Strategy',
      summary:
        'La propuesta de valor, el concepto, la estrategia de IA y los datos que la sostienen.',
      sectionsLabel: 'En este capítulo',
      sections: [
        'Propuesta de valor y objetivos',
        'Concepto',
        'Estrategia de IA',
        'Arquitectura de datos'
      ],
      background: {
        label: 'Imagen de fondo · detalle nocturno de un Toyota híbrido'
      },
      window: {
        label: 'Imagen · tablero de un Toyota con la pantalla encendida'
      }
    },
    value: {
      head: {
        index: '06 — Value Proposition & Product Goals',
        eyebrow: 'Value Proposition',
        title:
          'Del catálogo de vehículos a una experiencia que entiende tus necesidades.'
      },
      promise: 'Encuentra el Toyota que se adapta a tu vida.',
      comparison: {
        columns: ['Experiencia tradicional', 'Beyond the Model'],
        rows: [
          [
            'Comienza desde modelos y categorías',
            'Comienza desde las necesidades del usuario'
          ],
          [
            'El usuario interpreta los filtros',
            'La experiencia interpreta sus preferencias'
          ],
          [
            'El usuario identifica qué explorar',
            'El producto presenta alternativas compatibles'
          ],
          [
            'El usuario consulta características',
            'El producto explica beneficios y relevancia'
          ],
          [
            'El usuario compara modelos que ya conoce',
            'Se comparan alternativas recomendadas'
          ]
        ]
      },
      note: 'Posicionamiento conceptual frente al benchmark; no implica que el catálogo de Toyota carezca de estas capacidades.',
      canvas: {
        label:
          'Imagen · Value Proposition Canvas completo (Customer Profile y Value Map)'
      },
      fit: 'Value fit: transformar la información del catálogo Toyota en orientación personalizada.'
    },
    goals: {
      head: {
        eyebrow: 'Product Goals & Success Criteria',
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
        index: '07 — Product Concept & AI Strategy',
        eyebrow: 'Product Concept',
        title:
          'Una experiencia que conecta personas con vehículos, no solamente modelos con características.'
      },
      notLabel: 'Qué no es',
      not: [
        'Un chatbot genérico',
        'Un catálogo tradicional',
        'Un marketplace ni un configurador',
        'Un sistema de compra o financiación',
        'Un reemplazo de los asesores',
        'Quien decide por el usuario'
      ],
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
        eyebrow: 'AI Strategy',
        title: 'La IA interpreta, la lógica recomienda y los datos respaldan'
      },
      layers: [
        {
          number: '01',
          name: 'Input',
          text: 'Respuestas de la asesoría y catálogo Toyota.'
        },
        {
          number: '02',
          name: 'Interpretation',
          text: 'La IA interpreta necesidades y preferencias.'
        },
        {
          number: '03',
          name: 'Matching',
          text: 'La lógica de compatibilidad cruza perfil y catálogo.'
        },
        {
          number: '04',
          name: 'Output',
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
    },
    data: {
      head: {
        index: '08 — Data Architecture',
        eyebrow: 'Data Model',
        title: 'Siete entidades, una cadena trazable'
      },
      entities: [
        { label: 'User Journey' },
        { label: 'User Response' },
        { label: 'User Profile' },
        { label: 'Recommendation', isHighlight: true },
        { label: 'Vehicle' },
        { label: 'Vehicle Version' },
        { label: 'Vehicle Attribute' }
      ],
      decision:
        'Se recomienda el modelo y se consultan las versiones, sin atribuir a todas una característica que solo tienen algunas.',
      rule: 'Un dato desconocido no se da por presente ni por ausente: se muestra como «No disponible en la ficha oficial».'
    }
  },

  product: {
    opener: {
      number: '04',
      word: 'Product',
      summary:
        'Qué entra en el MVP, cómo recomienda y cómo se recorre la experiencia.',
      sectionsLabel: 'En este capítulo',
      sections: [
        'MVP',
        'Lógica de recomendación',
        'Flujo y variantes de resultado'
      ],
      background: {
        label: 'Imagen de fondo · Toyota Corolla Cross en movimiento'
      },
      window: { label: 'Imagen · resultado de la asesoría en el prototipo' }
    },
    mvp: {
      head: {
        index: '09 — MVP & Feature Definition',
        eyebrow: 'Feature Inventory & Prioritization',
        title: '33 funcionalidades, 20 indispensables'
      },
      statement:
        'El MVP se centra en la experiencia principal de descubrimiento y recomendación personalizada.',
      total: '33 funcionalidades · método MoSCoW',
      moscow: [
        { value: 20, label: 'Must Have' },
        { value: 7, label: 'Should Have' },
        { value: 6, label: 'Could Have' }
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
        eyebrow: 'Recommendation Logic',
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
      ],
      note: 'Precios sugeridos vigentes del 1 al 30 de noviembre de 2026.'
    },
    flow: {
      head: {
        index: '10 — Information Architecture & User Flows',
        eyebrow: 'User Flow',
        title: 'Un solo recorrido que siempre termina en un resultado'
      },
      statement:
        'Un módulo en el home de Toyota Colombia, también accesible desde el menú como «Encuentra tu Toyota».',
      steps: [
        { label: 'Menú o Home' },
        { label: 'Inicio' },
        { label: 'Asesoría' },
        { label: 'Tu perfil' },
        { label: 'Evaluación' },
        { label: 'Resultado', isHighlight: true },
        { label: 'Detalle y comparación' },
        { label: 'Continuar en Toyota' }
      ],
      decision:
        'La propuesta complementa el catálogo existente, no lo reemplaza.'
    },
    variants: {
      head: {
        eyebrow: 'Result Variants',
        title:
          'Siempre hay una respuesta, incluso cuando nada coincide del todo'
      },
      items: [
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
      note: 'En el prototipo, «Similar» y «Con ventajas» son pantallas de ejemplo.'
    }
  },

  experience: {
    opener: {
      number: '05',
      word: 'Experience',
      summary: 'El prototipo funcional y el sistema visual.',
      sectionsLabel: 'En este capítulo',
      sections: ['Prototipo', 'Sistema visual'],
      background: {
        label: 'Imagen de fondo · prototipo «Encuentra tu Toyota» en pantalla'
      },
      window: { label: 'Imagen · panel oscuro de la asesoría' }
    },
    design: {
      head: {
        index: '11 — Experience Design',
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
      word: 'Validation',
      summary: 'Qué se va a comprobar, qué falta medir y qué sigue.',
      sectionsLabel: 'En este capítulo',
      sections: ['Plan de validación', 'Próximos pasos'],
      background: {
        label: 'Imagen de fondo · persona probando el prototipo'
      },
      window: { label: 'Imagen · sesión de prueba con el prototipo' }
    },
    plan: {
      head: {
        index: '12 — Validation & Learnings',
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
