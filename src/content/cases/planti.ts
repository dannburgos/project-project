import type { CaseStudy } from '@/content/case-study.types';

// Caso de Planti. Fuente: documento maestro de Dann
// (.claude/knowledge/planti/PLANTI_CONTEXTO_MAESTRO.md); el plan del caso, con
// dónde va cada sección, está en .claude/knowledge/planti/PLANTI_CASO.md.
// Borrador: se itera capítulo por capítulo.
export const plantiCase: CaseStudy = {
  facts: [
    { label: 'Scope', value: 'Investigación · UX · UI' },
    { label: 'Rol', value: 'Product Designer · UX/UI' },
    { label: 'Categoría', value: 'Estilo de vida' },
    // No es un producto lanzado ni un encargo para un cliente
    { label: 'Tipo', value: 'Proyecto conceptual' }
  ],
  headline: 'Saber qué necesita tu planta es fácil. Recordarlo, no.',
  intro: [
    'La información sobre plantas existe, pero convertirla en cuidado diario es difícil. Planti conecta las necesidades de cada planta con acciones claras y una rutina fácil de mantener.'
  ],
  mediaLabel: 'Imagen principal: sale del prototipo',
  chapters: [
    {
      id: 'problem',
      title: 'Problema',
      heading: 'La información existe. Convertirla en cuidado es el problema.',
      summary:
        'Cuidar una planta parece sencillo. Hasta que tienes que hacerlo.',
      blocks: [
        {
          type: 'gap',
          headline:
            'Cuidar una planta parece sencillo. Hasta que tienes que hacerlo.',
          lead: 'Tener una planta empieza con algo simple: elegirla, encontrarle un lugar y disfrutarla. Mantenerla saludable es otra historia.',
          known: {
            label: 'Lo que sabes',
            title:
              'Cada planta necesita luz, agua, frecuencia, ubicación y cuidados distintos'
          },
          done: {
            label: 'Lo que haces',
            title:
              'Intentar recordarlo todo: consultar la información, olvidarla y volver a buscarla'
          },
          gapLabel: 'La brecha',
          detailLabel: 'El problema',
          detail:
            'Las personas que tienen plantas de interior pueden encontrar información sobre cómo cuidarlas, pero esta suele ser general y no siempre considera las necesidades particulares de cada planta ni su contexto. Esto puede dificultar transformar el conocimiento en acciones concretas: saber qué hacer, cuándo hacerlo y cómo mantener una rutina constante.'
        },
        {
          type: 'sequence',
          title: 'Tres fricciones',
          items: [
            {
              eyebrow: '01',
              title: 'Entender',
              text: '¿Qué necesita realmente mi planta?'
            },
            {
              eyebrow: '02',
              title: 'Decidir',
              text: '¿Qué debería hacer?'
            },
            {
              eyebrow: '03',
              title: 'Mantener',
              text: '¿Cómo lo vuelvo rutina?'
            }
          ]
        },
        {
          type: 'statement',
          tone: 'flat',
          text: 'El reto no es encontrar información. Es convertirla en decisiones de cuidado.'
        }
      ]
    },
    {
      id: 'user',
      title: 'Usuario',
      heading: 'Laura, una persona simulada para orientar el diseño',
      summary:
        'Un perfil construido a partir de supuestos. No es una persona entrevistada.',
      blocks: [
        {
          type: 'profile',
          name: 'Laura',
          facts: '28 años · Diseñadora gráfica · Apartamento',
          orbitCount: 4,
          orbitLabel: 'Tiene 4 plantas',
          quote:
            'Quiero cuidar bien mis plantas, pero no quiero tener que acordarme de qué necesita cada una.',
          traits: [
            {
              label: 'Objetivo',
              value: 'Plantas sanas sin complicar su rutina.'
            },
            {
              label: 'Frustración',
              value: 'Recordar qué necesita cada una y cuándo.'
            },
            {
              label: 'Necesita',
              value: 'Saber qué hacer con cada planta y cuándo.'
            }
          ],
          findingsTitle: 'Hallazgos de 6 respuestas simuladas',
          findings: [
            {
              title: 'Recordar es lo más difícil',
              text: 'Consulta la información, pero no logra retenerla para cada planta.',
              source: '¿Qué te resulta más difícil? · ¿Cómo sabes cuándo regar?'
            },
            {
              title: 'La información está dispersa',
              text: 'Busca en internet y en varias apps cada vez que algo cambia.',
              source:
                '¿Dónde buscas información? · ¿Qué haces si notas algo extraño?'
            },
            {
              title: 'Quiere claridad, no más datos',
              text: 'Espera saber qué hacer y cuándo, con recordatorios sencillos.',
              source: '¿Qué te ayudaría? · ¿Qué esperas de una aplicación?'
            }
          ]
        }
      ]
    },
    {
      id: 'benchmark',
      title: 'Benchmark',
      heading: 'Qué hacen hoy las apps de plantas',
      summary:
        'Cuatro aplicaciones de cuidado de plantas y lo que ofrece cada una.',
      blocks: [
        {
          type: 'benchmark',
          apps: [
            {
              name: 'PictureThis',
              keywords: ['Identificación', 'Cuidados', 'Diagnóstico']
            },
            {
              name: 'Planta',
              keywords: ['Guías', 'Recordatorios', 'Organización']
            },
            {
              name: 'Greg',
              keywords: ['Recomendaciones', 'Contexto', 'Comunidad']
            },
            {
              name: 'LeafSnap',
              keywords: ['Identificación', 'Información básica', 'Exploración']
            }
          ]
        },
        {
          type: 'statement',
          tone: 'flat',
          text: 'Cada app resuelve una parte.'
        }
      ]
    },
    {
      id: 'concept',
      title: 'Concepto',
      heading:
        'Primero Planti aprende sobre tu planta. Después te ayuda a cuidarla.',
      summary:
        'La idea, lo que entra en la primera versión y cómo se organiza.',
      blocks: [
        {
          type: 'statement',
          text: 'Primero Planti aprende sobre tu planta. Después te ayuda a cuidarla.',
          subtitle: 'Convertir información en acciones de cuidado.'
        },
        {
          type: 'scope',
          groups: [
            {
              eyebrow: '01',
              label: 'Contexto',
              title: '¿Qué necesita mi planta?',
              items: [
                'Buscar y seleccionar una planta.',
                'Registrar su información y contexto.',
                'Consultar necesidades de luz, riego y humedad.'
              ]
            },
            {
              eyebrow: '02',
              label: 'Acción',
              title: '¿Qué debo hacer?',
              items: [
                'Seleccionar cuidados.',
                'Definir sus frecuencias.',
                'Revisar y confirmar la rutina.'
              ]
            },
            {
              eyebrow: '03',
              label: 'Rutina',
              title: '¿Cuándo debo hacerlo?',
              items: [
                'Consultar tareas pendientes y próximas.',
                'Marcar cuidados como realizados.',
                'Consultar un historial básico.'
              ]
            }
          ],
          outTitle: 'Fuera del MVP',
          out: [
            'Identificación mediante cámara',
            'Diagnóstico avanzado de enfermedades',
            'Comunidad y funciones sociales',
            'Asistente conversacional',
            'Recomendaciones avanzadas basadas en la evolución de la planta'
          ]
        },
        {
          type: 'navigation',
          title: 'Navegación de la app',
          sections: [
            {
              name: 'Inicio',
              description: 'Resumen de cuidados y tareas del día.',
              children: []
            },
            {
              name: 'Mis plantas',
              description: 'Cada planta con sus cuidados e historial.',
              children: []
            },
            {
              name: 'Rutina',
              description: 'Cuidados programados y tareas pendientes.',
              children: []
            },
            {
              name: 'Perfil',
              description: 'Cuenta, preferencias y notificaciones.',
              children: []
            }
          ]
        }
      ]
    },
    {
      id: 'flows',
      title: 'Flujos',
      heading: 'Tres momentos para cuidar una planta',
      summary:
        'Incorporar una planta, crear una rutina y completar un cuidado.',
      blocks: [
        {
          type: 'flow',
          number: '01',
          title: 'Incorporar una planta',
          goal: 'Registrar una planta y conocer sus necesidades.',
          steps: [
            'Inicio',
            'Añadir planta',
            'Buscar planta',
            'Seleccionar',
            'Personalizar planta',
            'Necesidades de cuidado',
            'Planta registrada',
            'Crear rutina'
          ],
          screens: [
            {
              title: 'Inicio',
              description:
                'Resumen de cuidados, acceso a Mis plantas y botón Añadir planta.'
            },
            {
              title: 'Buscar planta',
              description:
                'Campo de búsqueda, sugerencias y resultados con fotografía y nombre.'
            },
            {
              title: 'Detalle de selección',
              description:
                'Fotografía, nombre común, nombre científico y opción de seleccionar.'
            },
            {
              title: 'Personalizar planta',
              description:
                'Nombre personalizado, ubicación y condiciones de luz.'
            },
            {
              title: 'Necesidades de cuidado',
              description: 'Luz, riego, humedad y recomendaciones principales.'
            },
            {
              title: 'Planta registrada',
              description: 'Confirmación, resumen y acceso a Crear rutina.'
            }
          ],
          notes: [
            'La búsqueda se hace en un catálogo: no hay identificación por cámara en el MVP.',
            'Crear la rutina es una continuación opcional, no un paso obligatorio.'
          ]
        },
        {
          type: 'flow',
          number: '02',
          title: 'Crear una rutina de cuidado',
          goal: 'Convertir las necesidades de una planta en cuidados organizados.',
          steps: [
            'Iniciar rutina',
            'Seleccionar cuidados',
            'Configurar frecuencias',
            'Revisar rutina',
            'Confirmar rutina',
            'Tareas programadas'
          ],
          screens: [
            {
              title: 'Iniciar rutina',
              description:
                'Planta seleccionada, resumen de necesidades y botón Crear rutina.'
            },
            {
              title: 'Seleccionar cuidados',
              description:
                'Cuidados recomendados con descripciones breves para elegir cuáles incluir.'
            },
            {
              title: 'Configurar frecuencias',
              description:
                'Frecuencia de cada cuidado y fecha del próximo cumplimiento.'
            },
            {
              title: 'Revisar rutina',
              description:
                'Resumen de cuidados, frecuencias y programación, con opción de volver y editar.'
            },
            {
              title: 'Rutina creada',
              description:
                'Confirmación, resumen y acceso a las tareas programadas.'
            }
          ],
          notes: [
            'La rutina parte de las necesidades de la planta: el usuario no define todos los cuidados desde cero.'
          ]
        },
        {
          type: 'flow',
          number: '03',
          title: 'Completar un cuidado',
          goal: 'Consultar tareas y registrar los cuidados realizados.',
          steps: [
            'Tareas del día',
            'Seleccionar una tarea',
            'Consultar instrucciones',
            'Marcar como realizado',
            'Confirmación y pendientes'
          ],
          screens: [
            {
              title: 'Inicio',
              description:
                'Tareas pendientes del día, próximas actividades y acceso a los cuidados.'
            },
            {
              title: 'Detalle de la tarea',
              description:
                'Planta asociada, tipo de cuidado, instrucciones breves y botón Marcar como realizado.'
            },
            {
              title: 'Cuidado completado',
              description:
                'Confirmación visual y resumen de tareas pendientes, como un estado dentro de la misma pantalla.'
            }
          ]
        },
        {
          type: 'list',
          title: 'Flujos complementarios, para una siguiente etapa',
          items: [
            { title: 'Consultar el detalle de una planta' },
            { title: 'Editar una rutina' },
            { title: 'Gestionar varias plantas' }
          ]
        }
      ]
    },
    {
      id: 'prototype',
      title: 'Prototipo',
      heading: 'Un prototipo visual e interactivo',
      summary: 'Los tres flujos, listos para recorrer.',
      blocks: [
        {
          type: 'prototype',
          span: 'half',
          src: '/prototypes/planti',
          title: 'Prototipo interactivo de Planti'
        },
        {
          type: 'cards',
          span: 'half',
          title: 'Cómo se construye',
          items: [
            {
              eyebrow: '01',
              title: 'Wireframes',
              text: 'De los tres flujos principales.'
            },
            {
              eyebrow: '02',
              title: 'Sistema de diseño',
              text: 'Aplicado a todas las pantallas.'
            },
            {
              eyebrow: '03',
              title: 'Prototipo',
              text: 'Visual e interactivo, construido con vibe coding a partir del diseño original en Figma.'
            },
            {
              eyebrow: '04',
              title: 'Revisión',
              text: 'De la coherencia de los recorridos.'
            }
          ]
        },
        {
          type: 'list',
          span: 'twoThirds',
          title: 'Criterios de diseño',
          items: [
            {
              title: 'Priorizar claridad y continuidad entre los tres flujos.'
            },
            {
              title:
                'Reutilizar Inicio y otros componentes cuando tenga sentido.'
            },
            {
              title:
                'No crear una pantalla por cada estado si una misma vista puede resolverlo.'
            },
            {
              title:
                'Mantener la navegación: Inicio, Mis plantas, Rutina y Perfil.'
            },
            { title: 'Diseñar para móvil.' },
            {
              title:
                'Mostrar cómo la información de cada planta se convierte en acciones.'
            },
            { title: 'Mantener el MVP enfocado.' }
          ]
        },
        {
          type: 'note',
          span: 'third',
          tone: 'tint',
          label: 'Qué sigue',
          text: 'Validar el prototipo con usuarios reales y reemplazar las hipótesis por resultados.'
        }
      ]
    }
  ]
};
