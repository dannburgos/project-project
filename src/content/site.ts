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
      label: 'About',
      href: '/about',
      description: 'Herramientas, resumen del CV y skills.'
    },
    {
      label: 'Trayectoria',
      href: '/journey',
      description: 'Experiencia, estudios y CV.'
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
    // Módulo 5: invitación a Trayectoria (sin repetir la línea de tiempo).
    // Los datos se cuentan a partir del contenido real de Trayectoria.
    journeyTeaser: {
      statement: [
        { text: 'Mi recorrido se construyó entre la' },
        { text: 'práctica', isKey: true },
        { text: 'y el' },
        { text: 'aprendizaje constante.', isKey: true }
      ],
      stats: {
        years: 'Años diseñando',
        companies: 'Empresas y equipos',
        studies: 'Cursos y estudios'
      },
      action: { label: 'Ver mi trayectoria', href: '/journey' }
    },
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
    backToTop: 'Volver arriba'
  },
  work: {
    title: 'Work',
    exampleProjectName: 'Proyecto de ejemplo',
    exampleIndustry: 'Industria o contexto de ejemplo',
    // Palabras clave de ejemplo para los proyectos que aún no tienen las suyas
    exampleTags: ['Palabra clave 1', 'Palabra clave 2'],
    imageLabel: 'Imagen del proyecto',
    caseAction: 'Ver caso',
    projectCount: 6
  },
  caseStudy: {
    backToWork: 'Volver a Work',
    indexTitle: 'En este caso',
    factsLabel: 'Ficha del proyecto',
    // Cada proyecto arma su ficha, su introducción y sus capítulos en
    // src/content/cases/. Aquí, las etiquetas que comparten los bloques.
    labels: {
      flow: {
        goal: 'Objetivo',
        steps: 'Recorrido',
        screens: 'Pantallas'
      },
      benchmark: {
        apps: 'Aplicaciones analizadas'
      },
      sequence: {
        hint: 'Sigue bajando'
      },
      prototype: {
        activate: 'Haz clic para probarlo',
        open: 'Abrir en pantalla completa',
        mobileHint: 'Pruébalo a pantalla completa'
      }
    },
    // Final del caso: tres proyectos que la persona aún no ha visto
    imageLabelCard: 'Imagen del proyecto',
    endNavigation: {
      title: 'Sigue explorando',
      backToWork: 'Ver todos los proyectos'
    }
  },
  about: {
    title: 'About',
    // Banner grande: su información la define Dann después
    banner: {
      photoLabel: 'Foto',
      note: 'Aquí irá la información del banner.'
    },
    // Las herramientas se muestran solo con su logo; por ahora, cuadros con el
    // nombre hasta que Dann suba los logos en alta.
    tools: {
      title: 'Herramientas que domino',
      items: [
        { name: 'Figma' },
        { name: 'Miro / FigJam' },
        { name: 'Google Suite' },
        { name: 'Notion' },
        { name: 'ChatGPT' },
        { name: 'Claude' }
      ]
    },
    // Resumen corto del CV de Dann: perfil, estudios y certificaciones. La
    // experiencia vive en el CV y en Trayectoria.
    cv: {
      title: 'Resumen de CV',
      // Síntesis (cerca de la mitad) del perfil del CV; ver copy/changelog.md
      summary:
        'UX/UI Designer enfocada en experiencias intuitivas y alineadas al negocio. Diseño flujos, arquitectura de información y prototipos con sistemas de diseño, y los valido para mejorar usabilidad y conversión.',
      educationLabel: 'Educación y certificaciones'
    },
    // Dos módulos con la misma diagramación (referencia: la web de Fixa): los
    // profesionales en modo claro, que sube como cortina, y debajo los
    // personales en modo oscuro. Título en dos tonos: una línea gris y una
    // frase grande (las frases "Lo que hago" y "Cómo lo hago" son texto de
    // ejemplo).
    skills: {
      professionalTitle: 'Skills profesionales',
      professionalStatement: 'Lo que hago',
      // Los grupos y sus habilidades vienen del CV de Dann
      professional: [
        {
          name: 'UX Strategy & Research',
          items: [
            'User research',
            'User testing',
            'Pruebas de concepto',
            'Análisis heurístico',
            'Entrevistas',
            'Análisis cualitativo y cuantitativo',
            'Síntesis de insights',
            'Validación con stakeholders'
          ]
        },
        {
          name: 'UX Design',
          items: [
            'Arquitectura de información',
            'Diseño de flujos',
            'Wireframing',
            'Prototipado de baja y alta fidelidad',
            'Diseño de interfaces',
            'Sistemas de diseño',
            'Accesibilidad',
            'Optimización de experiencia y conversión'
          ]
        },
        {
          name: 'Producto & Colaboración',
          items: [
            'Trabajo con equipos multidisciplinarios',
            'Definición de requerimientos',
            'Alineación con objetivos de negocio',
            'Iteración continua',
            'Validación previa a desarrollo'
          ]
        }
      ],
      personalTitle: 'Skills como persona',
      personalStatement: 'Cómo lo hago',
      // La brújula de Dann. Cada frase cuenta cómo se nota la cualidad al
      // trabajar, sin repetir lo que ya dice el Home. Por validar (ver
      // copy/changelog.md).
      personal: [
        {
          word: 'Intuitiva',
          text: 'Sigo mi intuición y después la pongo a prueba con usuarios'
        },
        {
          word: 'Adaptable',
          text: 'Aprendo las reglas de cada proyecto antes de proponer'
        },
        {
          word: 'Conceptual',
          text: 'Busco primero la idea; las pantallas llegan después'
        }
      ]
    }
  }
} as const;

// Nombres reales de los proyectos ya definidos; el resto sigue como ejemplo.
// Los reales tienen su propia dirección (/work/planti); los de ejemplo, una
// numerada (/work/project-3).
const projectNames: readonly string[] = ['Planti', 'Nodus'];
const projectSlugs: readonly string[] = ['planti', 'nodus'];

// Subtítulo de cada proyecto, bajo su nombre en el banner y en su tarjeta
const projectIndustries: readonly string[] = [
  'App móvil para el cuidado de plantas'
];

// Tono del fondo del banner de cada caso (degradado con profundidad). Los
// proyectos sin tono usan el banner negro.
export type ProjectTone = 'green' | 'purple';
const projectTones: readonly (ProjectTone | undefined)[] = ['green', 'purple'];

// Dos palabras clave por proyecto, para las etiquetas de su tarjeta. Las de
// Planti salen de su ficha real; el resto usa las de ejemplo.
const projectTags: readonly (readonly string[] | undefined)[] = [
  ['App móvil', 'Investigación UX']
];

export const exampleProjects = Array.from(
  { length: siteContent.work.projectCount },
  (_, index) => ({
    slug: projectSlugs[index] ?? `project-${index + 1}`,
    name:
      projectNames[index] ??
      `${siteContent.work.exampleProjectName} ${index + 1}`,
    industry: projectIndustries[index] ?? siteContent.work.exampleIndustry,
    tone: projectTones[index],
    tags: projectTags[index] ?? siteContent.work.exampleTags
  })
);

export type ExampleProject = (typeof exampleProjects)[number];
