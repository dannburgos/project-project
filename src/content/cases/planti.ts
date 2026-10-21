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
              'Cada planta necesita luz, agua, frecuencia, ubicación y cuidados distintos',
            text: 'La información para conocer esas necesidades existe, en internet y en diferentes aplicaciones.'
          },
          done: {
            label: 'Lo que haces',
            title: 'Intentar recordarlo todo',
            text: 'Consultar la información, olvidarla y volver a buscarla.'
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
              text: '¿Cómo convierto ese cuidado en una rutina?'
            }
          ]
        },
        {
          type: 'statement',
          span: 'twoThirds',
          tone: 'flat',
          text: 'El reto no es encontrar información. Es convertirla en decisiones de cuidado.'
        },
        {
          type: 'note',
          span: 'third',
          label: 'Nota metodológica',
          text: 'El problema es una hipótesis de diseño, no un hallazgo validado mediante investigación primaria.'
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
          type: 'persona',
          badge: 'Persona simulada · construida a partir de supuestos',
          name: 'Laura',
          facts: [
            '28 años',
            'Diseñadora gráfica',
            'Vive en un apartamento',
            'Tiene cuatro plantas de interior'
          ],
          quote:
            'Quiero cuidar bien mis plantas, pero no quiero tener que acordarme de qué necesita cada una.',
          goal: 'Mantener sus plantas saludables sin complicar su rutina.',
          frustration:
            'Recordar qué necesita cada planta y cuándo debe cuidarla.',
          needs: [
            'Entender las necesidades específicas de cada planta.',
            'Saber qué hacer y cuándo hacerlo.',
            'Organizar los cuidados de manera sencilla.'
          ],
          photoLabel: 'Foto o ilustración'
        },
        {
          type: 'interview',
          title: 'Preguntas y respuestas simuladas',
          note: 'Ejemplos creados para orientar el diseño. No son citas ni resultados de entrevistas reales.',
          speaker: 'Laura',
          items: [
            {
              question: '¿Qué te resulta más difícil?',
              answer: 'Recordar qué necesita cada planta.'
            },
            {
              question: '¿Dónde buscas información?',
              answer: 'En internet y en diferentes aplicaciones.'
            },
            {
              question: '¿Cómo sabes cuándo regar?',
              answer: 'Consulto la información e intento recordarla.'
            },
            {
              question: '¿Qué haces si notas algo extraño?',
              answer: 'Busco información para entender qué sucede.'
            },
            {
              question: '¿Qué te ayudaría?',
              answer: 'Saber qué hacer y cuándo hacerlo.'
            },
            {
              question: '¿Qué esperas de una aplicación?',
              answer: 'Recomendaciones claras y recordatorios sencillos.'
            }
          ]
        },
        {
          type: 'note',
          label: 'Lo que no se hizo',
          text: 'Este proyecto no incluyó entrevistas reales, pruebas con usuarios ni validación empírica. Si se hacen entrevistas, estas hipótesis se reemplazan por sus resultados.'
        }
      ]
    },
    {
      id: 'benchmark',
      title: 'Benchmark',
      heading: 'Qué hacen hoy las apps de plantas',
      summary:
        'Un análisis conceptual de cuatro aplicaciones para encontrar el espacio de Planti.',
      blocks: [
        {
          type: 'benchmark',
          apps: [
            {
              name: 'PictureThis',
              features: [
                'Identificación',
                'Información de cuidados',
                'Diagnóstico'
              ]
            },
            {
              name: 'Planta',
              features: ['Guías de cuidado', 'Recordatorios', 'Organización']
            },
            {
              name: 'Greg',
              features: [
                'Recomendaciones personalizadas',
                'Contexto',
                'Comunidad'
              ]
            },
            {
              name: 'LeafSnap',
              features: [
                'Identificación',
                'Información básica',
                'Exploración de plantas'
              ]
            }
          ],
          axesTitle: 'Ejes de comparación',
          axes: [
            'Identificación',
            'Información de cuidados',
            'Diagnóstico',
            'Consideración del contexto',
            'Recomendaciones y tareas',
            'Recordatorios y seguimiento',
            'Organización de plantas',
            'Comunidad y contenido educativo'
          ],
          synthesisTitle: 'Síntesis',
          synthesis: [
            'Existe abundante información sobre plantas, fichas y contenido educativo.',
            'Algunas aplicaciones consideran ubicación, luz, clima o estación.',
            'Varias ofrecen recordatorios y tareas; hay espacio para explorar cómo conectar recomendaciones, contexto y acciones cotidianas.'
          ]
        },
        {
          type: 'statement',
          span: 'twoThirds',
          text: 'Integrar el contexto específico de cada planta para orientar acciones claras, relevantes y fáciles de mantener.'
        },
        {
          type: 'note',
          span: 'third',
          label: 'Alcance del análisis',
          text: 'Análisis cualitativo: orienta el concepto, no mide ni compara puntajes entre aplicaciones.'
        }
      ]
    },
    {
      id: 'concept',
      title: 'Concepto',
      heading:
        'Primero Planti aprende sobre tu planta. Después te ayuda a aprender a cuidarla.',
      summary:
        'De la oportunidad a una idea de producto: convertir información en acciones de cuidado.',
      blocks: [
        {
          type: 'statement',
          text: 'Convertir información en acciones de cuidado.'
        },
        {
          type: 'text',
          paragraphs: [
            'Si el problema no está en encontrar información, sino en saber cómo aplicarla, la oportunidad consiste en transformar esa información en decisiones concretas y fáciles de incorporar a la rutina.',
            'Crear una experiencia que transforme las necesidades específicas de cada planta en acciones de cuidado simples, personalizadas y fáciles de mantener.'
          ]
        },
        {
          type: 'cards',
          title: 'Planti busca ayudar a responder',
          items: [
            { title: '¿Qué necesita mi planta?' },
            { title: '¿Qué debo hacer?' },
            { title: '¿Cuándo debo hacerlo?' }
          ]
        },
        {
          type: 'statement',
          span: 'half',
          tone: 'flat',
          text: 'Planti no busca enseñar más sobre plantas. Busca ayudar a las personas a cuidarlas mejor.'
        },
        {
          type: 'text',
          span: 'half',
          paragraphs: [
            'Planti adapta la información sobre cada planta a su contexto y la convierte en acciones concretas de cuidado.'
          ]
        },
        {
          type: 'cycle',
          title: 'Ciclo conceptual',
          steps: ['Conocer', 'Entender', 'Actuar', 'Observar', 'Aprender'],
          note: 'El ciclo es un concepto, no una funcionalidad inteligente validada.'
        },
        {
          type: 'cards',
          title: 'Tres pilares',
          items: [
            {
              eyebrow: '01',
              title: 'Contexto',
              text: 'Entender las características y condiciones de cada planta.'
            },
            {
              eyebrow: '02',
              title: 'Acción',
              text: 'Convertir necesidades en recomendaciones concretas.'
            },
            {
              eyebrow: '03',
              title: 'Rutina',
              text: 'Organizar acciones a lo largo del tiempo.'
            }
          ]
        },
        {
          type: 'statement',
          text: 'Planti conecta lo que sabemos sobre una planta con lo que hacemos por ella.'
        }
      ]
    },
    {
      id: 'definition',
      title: 'Definición',
      heading: 'Un MVP enfocado en convertir necesidades en cuidados',
      summary:
        'Qué entra en la primera versión, qué queda fuera y cómo se organiza la experiencia.',
      blocks: [
        {
          type: 'text',
          paragraphs: [
            'El MVP busca transformar las necesidades de cada planta en acciones de cuidado que el usuario pueda organizar y mantener.'
          ]
        },
        {
          type: 'scope',
          groups: [
            {
              eyebrow: '01',
              title: 'Conocer mi planta',
              items: [
                'Buscar y seleccionar una planta.',
                'Registrar su información y contexto.',
                'Consultar necesidades de luz, riego y humedad.'
              ]
            },
            {
              eyebrow: '02',
              title: 'Crear una rutina',
              items: [
                'Seleccionar cuidados.',
                'Definir sus frecuencias.',
                'Revisar y confirmar la rutina.'
              ]
            },
            {
              eyebrow: '03',
              title: 'Mantener los cuidados',
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
          type: 'statement',
          span: 'twoThirds',
          text: 'Planti conecta las necesidades de cada planta con acciones concretas que el usuario puede incorporar a su rutina.'
        },
        {
          type: 'text',
          span: 'third',
          paragraphs: [
            'La experiencia se organiza alrededor de dos necesidades: conocer cada planta y actuar sobre sus cuidados.'
          ]
        },
        {
          type: 'navigation',
          title: 'Navegación principal',
          sections: [
            {
              name: 'Inicio',
              description:
                'Resumen de cuidados, tareas del día y accesos rápidos.',
              children: [
                'Resumen de cuidados',
                'Próximas tareas',
                'Añadir planta'
              ]
            },
            {
              name: 'Mis plantas',
              description: 'Listado y gestión de plantas.',
              children: [
                'Lista',
                'Añadir planta',
                'Planta específica: resumen, cuidados e historial'
              ]
            },
            {
              name: 'Rutina',
              description: 'Cuidados programados y tareas pendientes.',
              children: ['Tareas', 'Calendario y seguimiento']
            },
            {
              name: 'Perfil',
              description: 'Preferencias y configuración.',
              children: ['Cuenta', 'Preferencias', 'Notificaciones']
            }
          ]
        },
        {
          type: 'cards',
          title: 'Decisiones clave',
          items: [
            {
              eyebrow: '01',
              title: 'La planta es la unidad principal',
              text: 'Sus necesidades se consultan dentro de su contexto.'
            },
            {
              eyebrow: '02',
              title: 'La rutina atraviesa todo',
              text: 'Es una capa transversal que reúne las acciones de cuidado a lo largo del tiempo.'
            },
            {
              eyebrow: '03',
              title: 'Un solo flujo para añadir',
              text: 'Añadir planta pertenece a Mis plantas, pero también puede iniciarse desde Inicio. Ambos accesos llevan al mismo flujo.'
            }
          ]
        },
        {
          type: 'list',
          title: 'Vistas complementarias',
          items: [
            {
              title: 'Inicio',
              text: 'Punto de entrada compartido para los tres flujos.'
            },
            {
              title: 'Detalle de planta',
              text: 'Imagen, nombre, características, necesidades y acceso a su rutina.'
            },
            {
              title: 'Rutina',
              text: 'Cuidados programados, frecuencias, próximas tareas y estado.'
            },
            {
              title: 'Historial',
              text: 'Cuidados realizados, fechas y planta asociada.'
            },
            {
              title: 'Perfil',
              text: 'Preferencias, configuración y notificaciones.'
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
