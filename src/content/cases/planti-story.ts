import type { CaseStory } from '@/content/case-story.types';

// Caso de Planti contado como recorrido. Base: el documento maestro de Planti
// (.claude/knowledge/planti/PLANTI_CONTEXTO_MAESTRO.md) y lo definido con
// Dann en el boceto del recorrido.
export const plantiStory: CaseStory = {
  sections: [
    'Introducción',
    'Problema',
    'Usuario',
    'Benchmark',
    'Concepto',
    'Flujos',
    'Prototipo'
  ],
  intro: {
    name: 'Planti',
    tagline: 'App móvil para el cuidado de plantas',
    headline: 'Saber qué necesita tu planta es fácil. Recordarlo, no.',
    text: 'La información sobre plantas existe, pero convertirla en cuidado diario es difícil. Planti conecta las necesidades de cada planta con acciones claras y una rutina fácil de mantener.',
    facts: [
      { label: 'Scope', value: 'Investigación · UX · UI' },
      { label: 'Rol', value: 'Product Designer · UX/UI' },
      { label: 'Categoría', value: 'Estilo de vida' },
      { label: 'Tipo', value: 'Proyecto conceptual' }
    ],
    imageLabel: 'Imagen principal · mockup de una persona usando Planti'
  },
  respiteLabel: 'Respiro · hojas de cerca, a todo el ancho',
  problem: {
    headline:
      'Cuidar una planta parece sencillo. Hasta que tienes que hacerlo.',
    known: {
      label: 'Lo que sabes',
      text: 'Cada planta necesita luz, agua, frecuencia, ubicación y cuidados distintos'
    },
    done: {
      label: 'Lo que haces',
      text: 'Intentar recordarlo todo: consultar la información, olvidarla y volver a buscarla'
    },
    frictionsLabel: 'Tres fricciones',
    frictions: [
      {
        number: '01',
        title: 'Entender',
        question: '¿Qué necesita realmente mi planta?'
      },
      { number: '02', title: 'Decidir', question: '¿Qué debería hacer?' },
      { number: '03', title: 'Mantener', question: '¿Cómo lo vuelvo rutina?' }
    ],
    challenge:
      'El reto no es encontrar información. Es convertirla en decisiones de cuidado.',
    references: [
      'Referente · plantas en casa',
      'Referente · persona cuidando sus plantas',
      'Referente · espacio con luz natural'
    ]
  },
  user: {
    quote:
      '“Quiero cuidar bien mis plantas, pero no quiero tener que acordarme de qué necesita cada una.”',
    name: 'Laura',
    details: '28 años · Diseñadora gráfica · Apartamento · Tiene 4 plantas',
    traits: [
      { label: 'Objetivo', text: 'Plantas sanas sin complicar su rutina.' },
      {
        label: 'Frustración',
        text: 'Recordar qué necesita cada una y cuándo.'
      },
      {
        label: 'Necesita',
        text: 'Saber qué hacer con cada planta y cuándo.'
      }
    ],
    findingsLabel: 'Hallazgos',
    findings: [
      {
        number: '01',
        title: 'Recordar es lo más difícil',
        text: 'Consulta la información, pero no logra retenerla para cada planta.'
      },
      {
        number: '02',
        title: 'La información está dispersa',
        text: 'Busca en internet y en varias apps cada vez que algo cambia.'
      },
      {
        number: '03',
        title: 'Quiere claridad, no más datos',
        text: 'Espera saber qué hacer y cuándo, con recordatorios sencillos.'
      }
    ],
    imageLabel: 'Contexto · Laura en su apartamento con sus plantas'
  },
  benchmark: {
    title: '¿Qué hacen hoy las apps de plantas?',
    strengthsLabel: 'Hace bien',
    gapsLabel: 'Le falta',
    improvementsLabel: 'Puede mejorar',
    apps: [
      {
        name: 'PlantIn',
        focus: 'Cuidado avanzado y herramientas técnicas',
        strengths: [
          'Medidor de luz y cálculo de riego',
          'Información detallada de cada planta',
          'Enfoque técnico y completo'
        ],
        gaps: ['Curva de aprendizaje alta', 'Mucha información al empezar'],
        improvements: [
          'Simplificar el inicio',
          'Mostrar la información de forma progresiva'
        ]
      },
      {
        name: 'PictureThis',
        focus: 'Identificación y diagnóstico por imagen',
        strengths: [
          'Identificación rápida y precisa',
          'Diagnóstico visual atractivo',
          'Alta percepción tecnológica'
        ],
        gaps: [
          'Depende del escaneo',
          'Muchas funciones con suscripción',
          'Poco acompañamiento después del diagnóstico'
        ],
        improvements: [
          'Conectar el diagnóstico con acciones claras',
          'Acompañar después del análisis'
        ]
      },
      {
        name: 'Plant Parent',
        focus: 'Seguimiento y estado de la planta',
        strengths: [
          'Seguimiento del estado de salud',
          'Recordatorios según el tipo de planta',
          'Mantenimiento continuo'
        ],
        gaps: [
          'Experiencia visual poco emocional',
          'Poca sensación de acompañamiento',
          'Personalización limitada'
        ],
        improvements: [
          'Crear conexión emocional',
          'Mostrar el progreso de forma motivadora'
        ]
      }
    ],
    findingsLabel: 'Hallazgos del benchmark',
    findings: [
      'Las apps resuelven partes del problema, no el proceso completo.',
      'Hay una brecha entre la información y el acompañamiento real.',
      'La personalización y la progresividad son claves para evitar el abandono.'
    ],
    closing: 'Planti guía, acompaña y educa, sin abrumar.'
  },
  concept: {
    idea: 'Primero Planti aprende sobre tu planta. Después te ayuda a cuidarla.',
    subtitle: 'Convertir información en acciones de cuidado.',
    logoLabel: 'Logo de Planti',
    capabilitiesTitle: '¿Qué hace Planti?',
    pillars: [
      {
        number: '01',
        label: 'Contexto',
        question: '¿Qué necesita mi planta?',
        items: [
          'Buscar y seleccionar una planta',
          'Registrar su información y contexto',
          'Consultar luz, riego y humedad'
        ]
      },
      {
        number: '02',
        label: 'Acción',
        question: '¿Qué debo hacer?',
        items: [
          'Seleccionar cuidados',
          'Definir sus frecuencias',
          'Revisar y confirmar la rutina'
        ]
      },
      {
        number: '03',
        label: 'Rutina',
        question: '¿Cuándo debo hacerlo?',
        items: [
          'Tareas pendientes y próximas',
          'Marcar cuidados como realizados',
          'Historial básico'
        ]
      }
    ],
    navigationTitle: 'Navegación de la app',
    navigation: [
      { name: 'Inicio', description: 'Resumen y tareas del día' },
      { name: 'Mis plantas', description: 'Cuidados e historial' },
      { name: 'Rutina', description: 'Cuidados programados' },
      { name: 'Perfil', description: 'Cuenta y preferencias' }
    ]
  },
  flows: {
    title: 'Tres momentos para cuidar una planta',
    imageLabel: 'Pantallas de los tres flujos',
    items: [
      {
        number: '01',
        title: 'Incorporar una planta',
        text: 'Registrar una planta y conocer sus necesidades.'
      },
      {
        number: '02',
        title: 'Crear una rutina de cuidado',
        text: 'Convertir las necesidades de una planta en cuidados organizados.'
      },
      {
        number: '03',
        title: 'Completar un cuidado',
        text: 'Consultar tareas y registrar los cuidados realizados.'
      }
    ]
  },
  prototype: {
    title: 'Prototipo interactivo',
    src: '/prototypes/planti',
    screens: [
      { label: 'Pantalla principal · Inicio', isMain: true },
      { label: 'Pantalla principal · Mis plantas', isMain: true },
      { label: 'Pantalla principal · Rutina', isMain: true },
      { label: 'Buscar planta' },
      { label: 'Personalizar planta' },
      { label: 'Necesidades de cuidado' },
      { label: 'Rutina creada' },
      { label: 'Cuidado completado' },
      { label: 'Mockup · persona usando Planti' },
      { label: 'Logo · en contexto' }
    ]
  }
};
