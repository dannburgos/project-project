// Contenido de ejemplo del prototipo. Todo el texto del sitio vive aquí,
// separado de los componentes, para poder cambiarlo sin tocar el diseño.
// Salvo Trayectoria (ver journey.ts) y la presentación del Home, todo es
// contenido de ejemplo. La presentación del Home es el borrador elegido por
// Dann (dirección "problema → concepto"); se puede afinar. El correo del
// cierre de contacto sale del CV de Dann.

export const siteContent = {
  brand: 'Portfolio Lab',
  prototypeNotice: 'Prototipo · contenido de ejemplo',
  // "description" solo se muestra en el menú móvil, para que quede claro a
  // dónde lleva cada opción.
  navigation: [
    { label: 'Home', href: '/', description: 'Inicio y presentación.' },
    {
      label: 'Work',
      href: '/work',
      description: 'Proyectos y casos de estudio.'
    },
    {
      label: 'Trayectoria',
      href: '/journey',
      description: 'Experiencia, estudios y CV.'
    },
    {
      label: 'Contact',
      href: '/contact',
      description: 'Escríbeme o conéctate.'
    }
  ],
  menu: {
    open: 'Abrir menú',
    close: 'Cerrar menú',
    title: 'Menú'
  },
  home: {
    role: 'UX/UI & Product Designer',
    title: 'Diseño productos que parten de entender el problema.',
    // Borrador anterior de la presentación; el Home ahora usa "presentation".
    lead: 'Conecto lo que necesitan las personas con los objetivos del negocio y lo que la tecnología permite, y lo convierto en soluciones con una idea propia.',
    // Módulo 1: portada a pantalla completa (referencia: midu.design).
    cover: {
      word: 'texto aquí',
      location: 'Bogotá, Colombia',
      timeZone: 'America/Bogota',
      scrollHint: 'Desplázate para explorar'
    },
    // Módulo 2: frase grande y presentación. En "about", lo que lleva
    // isKey se resalta (el resto va en gris).
    presentation: {
      statement:
        'Convierto problemas reales en productos claros, útiles y con una idea detrás.',
      about: [
        { text: 'Sobre mí.', isKey: true },
        {
          text: 'Soy diseñadora UX/UI con mirada de producto. Antes de abrir Figma, pregunto: quién lo va a usar, qué necesita el negocio y qué se puede construir.'
        },
        {
          text: 'El resultado: experiencias claras, que se pueden construir y que cumplen su propósito.',
          isKey: true
        }
      ],
      secondary:
        'He diseñado para fintech, e-commerce y agencias: de la investigación y los flujos al prototipo, los sistemas de diseño y el trabajo con desarrollo, con IA integrada al proceso.',
      action: { label: 'Ver mi trayectoria', href: '/journey' }
    },
    // Módulo 3: bloque de proyectos. Tres tarjetas que juntas forman un solo
    // rectángulo (ley de cierre) y un botón que lleva a Work.
    projects: {
      count: 3,
      cta: { label: 'Ver todo mi trabajo', href: '/work' }
    },
    // Módulo 4: espacio de imagen a pantalla completa, de borde a borde. El
    // recurso (imagen, video o animación) se define después.
    mediaModule: {
      number: 4,
      title: 'Imagen a pantalla completa',
      note: 'Aquí irá una imagen, un video o una animación que ocupa toda la pantalla.'
    },
    // Módulos 5 y 6: espacios vacíos que se irán llenando. El 7 es el cierre
    // de contacto.
    placeholderModules: [
      {
        number: 5,
        title: 'Cómo pienso',
        note: 'Aquí irá la brújula: Intuitiva · Adaptable · Conceptual.'
      },
      {
        number: 6,
        title: 'Trayectoria',
        note: 'Aquí irá una muestra de la línea de tiempo.'
      }
    ],
    moduleLabel: 'Módulo',
    accessMediaLabel: 'Imagen o visual de la sección',
    // Ya no se usa en el Home (ahora muestra el bloque de proyectos); queda
    // como referencia de la tarjeta de acceso anterior. "action" reemplazaba
    // al título al pasar el mouse sobre la tarjeta.
    accesses: [
      {
        label: 'Work',
        description: 'Proyectos y casos de estudio.',
        action: 'Ver proyectos',
        href: '/work'
      }
    ]
  },
  // Cierre de contacto al final de Home y Work: queda fijo detrás y la página
  // sube como una cortina para descubrirlo (referencia: karolinahess.com).
  closingContact: {
    titleStart: 'Trabajemos',
    titleEnd: 'juntos',
    emailLabel: 'Escríbeme:',
    email: 'burgosrubiodaniela@gmail.com',
    copyLabel: 'Copiar correo',
    copiedLabel: 'Copiado',
    // LinkedIn y CV: pendientes del enlace y del archivo reales.
    linkedin: { label: 'LinkedIn', href: '#' },
    cv: { label: 'Descargar CV', href: '#' },
    backToTop: 'Volver arriba',
    location: 'Bogotá, Colombia'
  },
  work: {
    title: 'Work',
    exampleProjectName: 'Proyecto de ejemplo',
    exampleIndustry: 'Industria o contexto de ejemplo',
    imageLabel: 'Imagen del proyecto',
    caseAction: 'Ver caso',
    projectCount: 6
  },
  caseStudy: {
    backToWork: 'Volver a Work',
    indexTitle: 'En este caso',
    // 1. Banner: nombre, ficha del proyecto e introducción conceptual
    hero: {
      year: 'Año por definir',
      factsLabel: 'Ficha del proyecto',
      facts: [
        { label: 'Rol', value: 'Por definir' },
        { label: 'Duración', value: 'Por definir' },
        { label: 'Equipo', value: 'Por definir' },
        { label: 'Plataforma', value: 'Por definir' },
        { label: 'Herramientas', value: 'Por definir' }
      ],
      intro: [
        'Texto de ejemplo. Introducción conceptual: de qué trata el proyecto, para quién es y en qué contexto nace.',
        'Texto de ejemplo. Cuál fue el reto y desde qué enfoque se abordó, en pocas líneas.'
      ]
    },
    // 2. Imagen principal que crece con el scroll
    mediaLabel: 'Imagen principal del proyecto',
    // 3. Etapas del caso: resumen a la izquierda y bloques a la derecha
    stageText:
      'Texto de ejemplo. La profundidad de cada etapa depende de su importancia en este caso.',
    blockLabels: {
      image: 'Imagen de apoyo',
      chart: 'Gráfica de la investigación',
      before: 'Antes',
      after: 'Después',
      gallery: 'Imagen de la galería',
      quote: 'Cita de ejemplo de una persona usuaria o del equipo.',
      quoteSource: 'Fuente por definir',
      resultValue: '—',
      resultLabel: 'Métrica por definir'
    },
    stages: [
      {
        id: 'context',
        title: 'Contexto',
        heading: 'Título de ejemplo de la etapa',
        description: 'Texto de ejemplo. Resumen breve de esta etapa del caso.',
        blocks: ['text', 'image']
      },
      {
        id: 'problem',
        title: 'Problema',
        heading: 'Título de ejemplo de la etapa',
        description: 'Texto de ejemplo. Resumen breve de esta etapa del caso.',
        blocks: ['text', 'quote']
      },
      {
        id: 'understanding',
        title: 'Investigación',
        heading: 'Título de ejemplo de la etapa',
        description: 'Texto de ejemplo. Resumen breve de esta etapa del caso.',
        blocks: ['text', 'chart', 'quote']
      },
      {
        id: 'opportunity',
        title: 'Oportunidad',
        heading: 'Título de ejemplo de la etapa',
        description: 'Texto de ejemplo. Resumen breve de esta etapa del caso.',
        blocks: ['text', 'image']
      },
      {
        id: 'concept',
        title: 'Concepto',
        heading: 'Título de ejemplo de la etapa',
        description: 'Texto de ejemplo. Resumen breve de esta etapa del caso.',
        blocks: ['image', 'text']
      },
      {
        id: 'solution',
        title: 'Solución',
        heading: 'Título de ejemplo de la etapa',
        description: 'Texto de ejemplo. Resumen breve de esta etapa del caso.',
        blocks: ['text', 'beforeAfter', 'gallery']
      },
      {
        id: 'result',
        title: 'Resultado',
        heading: 'Título de ejemplo de la etapa',
        description: 'Texto de ejemplo. Resumen breve de esta etapa del caso.',
        blocks: ['result', 'text']
      },
      {
        id: 'synthesis',
        title: 'Síntesis',
        heading: 'Título de ejemplo del cierre',
        description:
          'Texto de ejemplo. Qué se entendió, qué se decidió y por qué.',
        blocks: ['text']
      }
    ],
    endNavigation: {
      title: '¿Y ahora?',
      nextProject: 'Siguiente proyecto',
      backToWork: 'Ver todos los proyectos',
      journey: 'Trayectoria',
      contact: 'Contact'
    }
  },
  contact: {
    title: 'Contact',
    lead: 'Cierre del recorrido. Mensaje corto de ejemplo para invitar a conversar.',
    actions: [
      { label: 'Email (ejemplo)', href: '#' },
      { label: 'LinkedIn (ejemplo)', href: '#' },
      { label: 'CV (ejemplo)', href: '#' }
    ]
  }
} as const;

export const exampleProjects = Array.from(
  { length: siteContent.work.projectCount },
  (_, index) => ({
    slug: `project-${index + 1}`,
    name: `${siteContent.work.exampleProjectName} ${index + 1}`,
    industry: siteContent.work.exampleIndustry
  })
);

export type ExampleProject = (typeof exampleProjects)[number];

export type CaseStudyStage = (typeof siteContent.caseStudy.stages)[number];
export type CaseStudyBlock = CaseStudyStage['blocks'][number];
