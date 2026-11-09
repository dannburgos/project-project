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
    'Sistema de diseño',
    'Flujos',
    'Prototipo'
  ],
  intro: {
    name: 'Planti',
    tagline: 'App móvil para el cuidado de plantas',
    headline: 'Saber qué necesita tu\u00a0planta es fácil. Recordarlo, no.',
    text: 'La información sobre plantas existe, pero convertirla en cuidado diario es difícil. Planti conecta las necesidades de cada planta con acciones claras y una rutina fácil de mantener.',
    facts: [
      { label: 'Scope', value: 'Investigación · UX · UI' },
      { label: 'Rol', value: 'Product Designer · UX/UI' }
    ]
  },
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
        question: '¿Qué necesita realmente mi planta?',
        text: 'La información es general e ignora el\ncontexto de cada planta.'
      },
      {
        number: '02',
        title: 'Decidir',
        question: '¿Qué debería hacer?',
        text: 'Convertir lo que sabes en acciones: qué hacer y cuándo hacerlo.'
      },
      {
        number: '03',
        title: 'Mantener',
        question: '¿Cómo lo vuelvo rutina?',
        text: 'Sostener esos cuidados como una rutina, semana tras semana.'
      }
    ],
    challenge:
      'El reto no es encontrar información. Es convertirla en decisiones de cuidado.',
    references: [
      {
        label: 'Referente · plantas en casa',
        src: '/planti/reference-sala-soleada.png'
      },
      {
        label: 'Referente · persona cuidando sus plantas',
        src: '/planti/reference-cuidando-planta.png'
      },
      {
        label: 'Referente · espacio con luz natural',
        src: '/planti/reference-rincon-luminoso.png'
      }
    ]
  },
  user: {
    quote:
      '“Quiero cuidar bien mis plantas, pero no quiero tener que acordarme de qué necesita cada una.”',
    name: 'Laura',
    details: '28 años · Diseñadora gráfica\nApartamento · Tiene 4 plantas',
    photo: '/planti/laura-planti.png',
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
        text: 'Consulta la información, pero no logra retenerla para cada planta ni aplicarla cuando la necesita.'
      },
      {
        number: '02',
        title: 'La información está dispersa',
        text: 'Busca en internet y en varias apps cada vez que algo cambia, sin un lugar único.'
      },
      {
        number: '03',
        title: 'Quiere claridad, no más datos',
        text: 'Espera saber qué hacer y cuándo, con recordatorios sencillos y sin tener que investigar.'
      }
    ],
    imageLabel: 'Contexto · Laura en su apartamento con sus plantas',
    image: '/planti/user-laura-contexto.png'
  },
  benchmark: {
    title: '¿Qué hacen hoy las apps de plantas?',
    // Dos categorías por app; lo que cada una podría mejorar ya lo resumen
    // los hallazgos del benchmark
    strengthsLabel: 'Lo que resuelve',
    gapsLabel: 'Lo que deja sin resolver',
    apps: [
      {
        name: 'PlantIn',
        icon: '/planti/benchmark/plantin.png',
        focus: 'Cuidado avanzado y herramientas técnicas',
        strengths: [
          'Medidor de luz y cálculo de riego',
          'Información detallada de cada planta',
          'Enfoque técnico y completo'
        ],
        gaps: ['Curva de aprendizaje alta', 'Mucha información al empezar']
      },
      {
        name: 'PictureThis',
        icon: '/planti/benchmark/picturethis.png',
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
        ]
      },
      {
        name: 'Plant Parent',
        icon: '/planti/benchmark/plant-parent.png',
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
  designSystem: {
    title: 'Sistema de diseño'
  },
  concept: {
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
    title: 'Dos momentos para cuidar una planta',
    imageLabel: 'Pantallas de los dos flujos',
    image: '/planti/flows-jardineria-bohemia.png',
    items: [
      {
        number: '01',
        title: 'Incorporar una planta',
        text: 'Registrar una planta y conocer sus necesidades.'
      },
      {
        number: '02',
        title: 'Crear una rutina',
        text: 'La app convierte las necesidades de la planta en una rutina de cuidados.'
      }
    ]
  },
  prototype: {
    title: 'Prototipo interactivo',
    src: '/prototypes/planti',
    eyebrow: 'Prototipo interactivo',
    heading: 'Cuida tus plantas, ',
    headingAccent: 'sin adivinar.',
    description: [
      { text: 'Planti reúne lo que necesita cada planta en un solo lugar. ' },
      { text: 'Le cuentas cómo es,', isStrong: true },
      { text: ' te ayuda a encontrarla y ' },
      { text: 'convierte sus necesidades en cuidados.', isStrong: true }
    ],
    soonLabel: 'Próximamente',
    flows: [
      { number: '01', title: 'Incorporar una planta', isReady: true },
      { number: '02', title: 'Crear una rutina', isReady: true }
    ],
    screens: [
      {
        label: 'Pantalla principal · Portada',
        src: '/planti/screens/splash.png',
        isMain: true
      },
      {
        label: 'Pantalla principal · Inicio',
        src: '/planti/screens/home.png',
        isMain: true
      },
      {
        label: 'Pantalla principal · Mis plantas',
        src: '/planti/screens/plants.png',
        isMain: true
      },
      { label: 'Rutina', src: '/planti/screens/routine.png' },
      { label: 'Buscar planta', src: '/planti/screens/search.png' },
      { label: 'Personalizar planta', src: '/planti/screens/personalize.png' },
      { label: 'Necesidades de cuidado', src: '/planti/screens/needs.png' },
      { label: 'Rutina creada', src: '/planti/screens/plan.png' },
      { label: 'Mockup · persona usando Planti' },
      { label: 'Logo · en contexto' }
    ]
  }
};
