// Textos del prototipo de Planti. Todo el texto de sus pantallas vive aquí.
export const plantiMessages = {
  meta: {
    title: 'Planti · Prototipo'
  },
  device: {
    time: '9:41'
  },
  nav: {
    label: 'Navegación principal',
    home: 'Inicio',
    plants: 'Mis plantas',
    routine: 'Rutina',
    profile: 'Perfil'
  },
  splash: {
    eyebrow: 'Esto es',
    name: 'Planti',
    tagline: ['Cuida', 'Conecta', 'Florece'],
    signIn: 'Iniciar sesión',
    signUp: 'Registrarse'
  },
  login: {
    title: 'Iniciar sesión',
    userPlaceholder: 'Usuario',
    userValue: 'laura',
    passwordPlaceholder: 'Contraseña',
    passwordValue: '••••••••',
    remember: 'Recuérdame',
    forgot: '¿Olvidaste tu contraseña?',
    action: 'Comencemos',
    actionLoading: 'Entrando…'
  },
  sequence: {
    start: 'Iniciar recorrido',
    pause: 'Pausar',
    resume: 'Seguir',
    replay: 'Repetir recorrido',
    previousStep: 'Paso anterior',
    nextStep: 'Paso siguiente',
    progress: 'Ir a un momento del recorrido'
  },
  onboarding: {
    title: 'Conoce mejor tus plantas',
    text: 'Luz, riego y cuidados explicados de forma simple',
    next: 'Continuar'
  },
  common: {
    back: 'Volver'
  },
  // La planta que recorre el capítulo 1 y el 2
  plant: {
    name: 'Ficus Pandurata',
    scientific: 'Ficus lyrata',
    tagline: 'Elegante y resistente',
    nickname: 'Ficus de la sala',
    description:
      'Planta de hojas grandes y brillantes, ideal para espacios con buena luz. Aporta un look tropical.',
    traits: ['Interior', 'Cuidado moderado']
  },
  search: {
    title: 'Busca tu planta',
    placeholder: 'Escribe cómo la llamas',
    // Búsqueda por nombre (camino alterno, para quien sí sabe cómo se llama)
    typed: 'Fic',
    query: 'Ficus',
    count: '3 resultados',
    results: [
      {
        key: 'pandurata',
        name: 'Ficus Pandurata',
        scientific: 'Ficus lyrata',
        isActive: true
      },
      {
        key: 'elastica',
        name: 'Ficus Elástica',
        scientific: 'Ficus elastica'
      },
      {
        key: 'benjamina',
        name: 'Ficus Benjamina',
        scientific: 'Ficus benjamina'
      }
    ],
    // Búsqueda por cómo se ve: forma, tamaño y color, en palabras de todos los días
    look: {
      question: '¿Cómo lucen las hojas de tu planta?',
      options: [
        { key: 'large', label: 'Hojas grandes', isSelected: true },
        { key: 'slim', label: 'Hojas largas' },
        { key: 'hanging', label: 'Hojas que cuelgan' },
        { key: 'flowers', label: 'Hojas y flores' }
      ]
    },
    more: {
      title: 'Cuéntanos más',
      sizeLabel: '¿Qué tan grande es?',
      sizes: [
        { key: 'small', label: 'Pequeña' },
        { key: 'medium', label: 'Mediana' },
        { key: 'big', label: 'Grande', isSelected: true }
      ],
      colorLabel: '¿Cómo son sus hojas?',
      colors: [
        { key: 'plain', label: 'Verde parejo', isSelected: true },
        { key: 'patterned', label: 'Con manchas' },
        { key: 'other', label: 'Otros colores' }
      ],
      action: 'Mira las coincidencias'
    },
    // Mientras se buscan las coincidencias: tres frases que se turnan
    loading: {
      messages: [
        'Mirando sus hojas…',
        'Comparando tamaños…',
        'Buscando coincidencias…'
      ]
    },
    gallery: {
      question: '¿Es alguna de estas?',
      items: [
        { key: 'pandurata', name: 'Ficus Pandurata', isActive: true },
        { key: 'elastica', name: 'Ficus Elástica' },
        { key: 'benjamina', name: 'Ficus Benjamina' }
      ],
      none: { title: '¿No está la tuya?', action: 'Escribe su nombre' }
    }
  },
  detail: {
    action: 'Elige esta planta'
  },
  board: {
    title: 'Recorrido del capítulo 1',
    titleTwo: 'Recorrido del capítulo 2',
    hint: 'Cada pantalla tal como se ve en el prototipo, en orden. Desliza hacia el lado para ver todas.',
    entry: 'Entrada',
    chapter: 'Capítulo 1 · Primera vez',
    chapterTwo: 'Capítulo 2 · Crear una rutina',
    framesTwo: {
      home: {
        title: 'Inicio, antes de la rutina',
        note: 'El Ficus ya está; se pulsa "Crea su rutina"'
      },
      start: {
        title: 'Iniciar rutina',
        note: 'La planta y sus necesidades; se pulsa "Crea tu rutina"'
      },
      cares: {
        title: 'Rutina · Cuidados',
        note: 'Se marcan regar, abonar y revisar hojas'
      },
      frequency: {
        title: 'Rutina · Frecuencias',
        note: 'El riego sube de 1 a 2 veces por semana'
      },
      review: {
        title: 'Rutina · Revisar',
        note: 'El resumen, con la opción de editar cada cuidado'
      },
      created: {
        title: 'Rutina creada',
        note: 'Se dibuja el check y se pulsa "Mira tus tareas"'
      },
      tab: {
        title: 'Pestaña Rutina',
        note: 'La semana ya programada con los cuidados'
      }
    },
    frames: {
      splash: { title: 'Portada', note: 'Espera a que inicies el recorrido' },
      login: {
        title: 'Inicio de sesión',
        note: 'Se pulsa el botón, sube el panel y se escriben usuario y contraseña'
      },
      intro: {
        title: 'Intro',
        note: 'Una línea rodea el botón durante 2 segundos'
      },
      homeEmpty: {
        title: 'Inicio, primera vez',
        note: 'Se pulsa "Añade tu planta"'
      },
      searchLook: {
        title: 'Buscar · ¿Cómo es?',
        note: 'Se pulsa "Hojas grandes"'
      },
      searchMore: {
        title: 'Buscar · Cuéntanos más',
        note: 'Se eligen el tamaño y el color'
      },
      searchLoading: {
        title: 'Buscar · Buscando',
        note: 'Brota una planta mientras se buscan las coincidencias'
      },
      searchGallery: {
        title: 'Buscar · ¿Es alguna?',
        note: 'La Ficus Pandurata se resalta y se elige'
      },
      detail: {
        title: 'Detalle de la planta',
        note: 'Se pulsa "Elige esta planta"'
      },
      personalize: {
        title: 'Personalizar',
        note: 'Se escribe el nombre y se eligen dónde vive y la luz'
      },
      registered: {
        title: 'Planta registrada',
        note: 'Se dibuja el check y la planta queda guardada'
      }
    }
  },
  personalize: {
    title: 'Personaliza tu planta',
    namePlaceholder: 'Ponle un nombre',
    placeLabel: '¿Dónde vive?',
    places: [
      { key: 'living', label: 'Sala', isSelected: true },
      { key: 'bedroom', label: 'Dormitorio' },
      { key: 'balcony', label: 'Balcón' }
    ],
    lightLabel: '¿Cuánta luz recibe?',
    lights: [
      { key: 'direct', label: 'Directa' },
      { key: 'indirect', label: 'Indirecta', isSelected: true },
      { key: 'low', label: 'Poca' }
    ],
    action: 'Confirma tus datos'
  },
  needs: {
    facts: [
      { key: 'indoor', text: 'Interior' },
      { key: 'light', text: 'Luz indirecta brillante' },
      { key: 'water', text: '2 riegos por semana' },
      { key: 'humidity', text: 'Humedad media' }
    ],
    sheetTitle: 'Recomendaciones',
    rows: [
      {
        key: 'light',
        label: 'Luz',
        value: 'Cerca de una ventana, sin sol directo'
      },
      {
        key: 'water',
        label: 'Riego',
        value: 'Cuando la tierra se sienta seca'
      },
      {
        key: 'humidity',
        label: 'Humedad',
        value: 'Rocía sus hojas de vez en cuando'
      }
    ],
    action: 'Guarda tu planta'
  },
  // Capítulo 2 · Crear una rutina: de las necesidades de la planta a cuidados
  // con fecha. Contenido de diseño, no consejo botánico validado.
  routine: {
    // Inicio antes de la rutina: el mismo Inicio completo, con solo el Ficus
    // y sin tareas todavía; el primer destacado invita a crearla
    home: {
      banner: {
        label: 'Destacados',
        slides: [
          {
            key: 'routine',
            tag: 'Tu planta',
            title: 'Tu Ficus no tiene rutina',
            text: 'Así no se te pasa nada',
            action: 'Crea su rutina'
          },
          {
            key: 'add',
            tag: 'Tu jardín',
            title: '¿Otra planta en casa?',
            text: 'Búscala en el catálogo',
            action: 'Busca una planta'
          }
        ]
      },
      plants: {
        title: 'Mis plantas',
        action: 'Ver todas',
        items: [
          {
            key: 'ficus',
            name: 'Ficus de la sala',
            place: 'Sala',
            status: 'Sin rutina',
            tone: 'pending'
          }
        ],
        add: 'Nueva planta'
      }
    },
    startAction: 'Crea tu rutina',
    title: 'Crea tu rutina',
    caresQuestion: '¿Qué cuidados quieres programar?',
    caresHint: 'Te recomendamos estos para tu Ficus.',
    cares: [
      {
        key: 'water',
        name: 'Regar',
        text: 'Cuando la tierra se sienta seca'
      },
      {
        key: 'fertilize',
        name: 'Abonar',
        text: 'Le da fuerza para crecer'
      },
      {
        key: 'leaves',
        name: 'Revisar hojas',
        text: 'Detecta manchas y plagas a tiempo'
      }
    ],
    caresAction: 'Elige la frecuencia',
    frequencyTitle: 'Elige la frecuencia',
    frequencyQuestion: '¿Cada cuánto?',
    // El riego se ajusta con − y +; los otros dos van con su valor
    waterUnit: (times: number) =>
      times === 1 ? '1 vez por semana' : `${times} veces por semana`,
    frequencies: [
      { key: 'water', next: 'Próximo: hoy' },
      {
        key: 'fertilize',
        value: '1 vez al mes',
        next: 'Próximo: lun 21 abr'
      },
      { key: 'leaves', value: 'Cada 15 días', next: 'Próximo: jue 1 may' }
    ],
    decrease: 'Menos',
    increase: 'Más',
    frequencyAction: 'Revisa tu rutina',
    reviewTitle: 'Revisa tu rutina',
    reviewPlant: 'Ficus de la sala',
    reviewPlantDetail: '3 cuidados programados',
    reviewItems: [
      { key: 'water', detail: '2 veces por semana · hoy' },
      { key: 'fertilize', detail: '1 vez al mes · lun 21 abr' },
      { key: 'leaves', detail: 'Cada 15 días · jue 1 may' }
    ],
    edit: 'Editar',
    reviewAction: 'Confirma tu rutina',
    createdTitle: 'Tu rutina está lista',
    createdText: 'Te avisaremos cuando le toque cada cuidado.',
    createdAction: 'Mira tus tareas',
    tabTitle: 'Tu rutina',
    // La semana del 14 al 20 de abril, recién programada: hoy (miércoles 16)
    // y el sábado toca regar; lo demás viene después
    week: {
      title: 'Esta semana',
      count: '2 cuidados',
      days: [
        { key: 'mon', label: 'L', number: '14' },
        { key: 'tue', label: 'M', number: '15' },
        {
          key: 'wed',
          label: 'M',
          number: '16',
          isToday: true,
          care: 'water'
        },
        { key: 'thu', label: 'J', number: '17' },
        { key: 'fri', label: 'V', number: '18' },
        { key: 'sat', label: 'S', number: '19', care: 'water' },
        { key: 'sun', label: 'D', number: '20' }
      ],
      comingTitle: 'Lo que viene',
      coming: [
        { key: 'water', name: 'Riega tu Ficus', time: 'Hoy · Sala' },
        { key: 'water', name: 'Riega tu Ficus', time: 'Sábado 19 · Sala' },
        { key: 'fertilize', name: 'Abona tu Ficus', time: 'Lunes 21 · Sala' },
        {
          key: 'review',
          name: 'Revisa las hojas de tu Ficus',
          time: 'Jueves 1 de mayo · Sala'
        }
      ]
    }
  },
  registered: {
    title: 'Tu Ficus ya está en tu jardín',
    text: 'Programa sus cuidados y no se te pasará ninguno.'
  },
  timeline: {
    title: 'Recorrido y tiempos',
    hint: 'El recorrido corre junto a la lista de pasos: ves cuándo empieza cada uno y cuánto dura. El paso que se está viendo se resalta.',
    total: 'Duración total',
    stepsLabel: 'Pasos del recorrido',
    from: 'Desde',
    lasts: 'Dura',
    steps: {
      splash: 'Portada e inicio de sesión',
      onboarding: 'Intro',
      'home-empty': 'Inicio, primera vez',
      'search-look': 'Buscar · ¿Cómo es?',
      'search-more': 'Buscar · Cuéntanos más',
      'search-loading': 'Buscar · Buscando coincidencias',
      'search-gallery': 'Buscar · ¿Es alguna de estas?',
      'plant-detail': 'Detalle de la planta',
      personalize: 'Personalizar',
      registered: 'Planta registrada',
      'home-routine': 'Inicio, antes de la rutina',
      'routine-start': 'Iniciar rutina',
      'routine-cares': 'Rutina · Cuidados',
      'routine-frequency': 'Rutina · Frecuencias',
      'routine-review': 'Rutina · Revisar',
      'routine-created': 'Rutina creada',
      routine: 'Pestaña Rutina'
    },
    events: {
      cover: 'La carátula da paso a la portada',
      pressSignIn: 'Se pulsa Iniciar sesión',
      sheetUp: 'Sube el panel de sesión',
      typeUser: 'Se escribe el usuario',
      typePassword: 'Se escribe la contraseña',
      checkRemember: 'Se marca "Recuérdame"',
      signingIn: 'Se pulsa Comencemos',
      intro: 'La línea rodea el botón durante 2 s',
      home: 'Aparece Inicio',
      pressAdd: 'Se pulsa "Añade tu planta"',
      look: 'Aparecen las cuatro formas',
      chooseLook: 'Se elige "Hojas grandes"',
      more: 'Aparecen tamaño y color',
      chooseSize: 'La barra va de pequeña a grande y se queda en "Grande"',
      chooseColor: 'Se elige "Verde parejo"',
      pressMore: 'Se pulsa "Mira las coincidencias"',
      searching: 'Brota la planta mientras se buscan las coincidencias',
      gallery: 'Suben las tarjetas una tras otra',
      highlight: 'Se resalta la Ficus Pandurata',
      detail: 'Aparece la planta, con lo general',
      scrollDetail: 'Se baja para ver la descripción',
      pressDetail: 'Se pulsa "Elige esta planta"',
      personalize: 'Aparecen los campos',
      typeName: 'Se escribe "Ficus de la sala"',
      openPlace: 'Se abre la lista de "¿Dónde vive?"',
      pickPlace: 'Se toca "Sala" en la lista',
      fillPlace: 'Se cierra la lista con "Sala"',
      fillLight: 'Se elige "Indirecta"',
      pressPersonalize: 'Se pulsa "Confirma tus datos"',
      registered: 'Se dibuja el check',
      homeRoutine: 'Aparece Inicio con el Ficus, todavía sin rutina',
      pressHomeRoutine: 'Se pulsa "Crea su rutina" en el banner',
      routineStart: 'Aparecen la planta y sus necesidades',
      pressRoutineStart: 'Se pulsa "Crea tu rutina"',
      cares: 'Aparecen los cuidados recomendados',
      checkWater: 'Se marca "Regar"',
      checkFertilize: 'Se marca "Abonar"',
      checkLeaves: 'Se marca "Revisar hojas"',
      pressCares: 'Se pulsa "Elige la frecuencia"',
      frequency: 'Aparece cada cuidado con su frecuencia',
      raiseWater: 'El riego sube a 2 veces por semana',
      pressFrequency: 'Se pulsa "Revisa tu rutina"',
      review: 'Aparece el resumen de la rutina',
      pressReview: 'Se pulsa "Confirma tu rutina"',
      routineCreated: 'Se dibuja el check',
      pressRoutineCreated: 'Se pulsa "Mira tus tareas"',
      routineTab: 'Aparece la semana en la pestaña Rutina'
    }
  },
  home: {
    notifications: 'Notificaciones',
    greeting: '¡Hola, Laura!',
    daypart: 'Buenos días',
    searchPlaceholder: 'Buscar…',
    date: 'Miércoles, 16 de abril',
    dateNote: '¡Un día increíble para tus plantas!',
    empty: {
      title: 'Tu jardín empieza aquí',
      body: 'Cuéntanos qué planta tienes y te ayudamos a cuidarla.',
      action: 'Añade tu planta'
    },
    // Inicio con tareas: el capítulo 3 pasa dos semanas después del 1 y el 2
    withTasks: {
      banner: {
        label: 'Destacados',
        slides: [
          {
            key: 'alert',
            tag: 'Aviso',
            title: 'Tu Ficus tiene sed',
            text: 'Hace 4 días que no la riegas',
            action: 'Riega ahora'
          },
          {
            key: 'needs',
            tag: 'Tu planta',
            title: 'Conoce tu Ficus',
            text: 'Luz, riego y humedad, explicados fácil',
            action: 'Ver necesidades'
          },
          {
            key: 'add',
            tag: 'Tu jardín',
            title: '¿Otra planta en casa?',
            text: 'Búscala en el catálogo',
            action: 'Busca una planta'
          }
        ]
      },
      care: {
        title: 'Cuidados de hoy',
        count: '0 de 2',
        primary: {
          name: 'Riega tu Ficus',
          place: 'Sala',
          time: '8:15 a. m.',
          status: 'Pendiente',
          instruction: 'Riega con moderación y deja escurrir el exceso.'
        },
        others: [
          {
            key: 'monstera-water',
            name: 'Riega tu Monstera',
            place: 'Balcón',
            time: '5:00 p. m.',
            status: 'Pendiente'
          }
        ]
      },
      week: {
        title: 'Tu semana',
        count: '4 cuidados',
        days: [
          { key: 'mon', label: 'L', number: '28' },
          { key: 'tue', label: 'M', number: '29' },
          {
            key: 'wed',
            label: 'M',
            number: '30',
            isToday: true,
            care: 'water'
          },
          { key: 'thu', label: 'J', number: '31' },
          { key: 'fri', label: 'V', number: '1', care: 'review' },
          { key: 'sat', label: 'S', number: '2', care: 'water' },
          { key: 'sun', label: 'D', number: '3' }
        ],
        comingTitle: 'Lo que viene',
        coming: [
          {
            key: 'review',
            name: 'Revisa las hojas de tu Pilea',
            time: 'Viernes 1 · Dormitorio'
          },
          { key: 'water', name: 'Riega tu Ficus', time: 'Sábado 2 · Sala' },
          {
            key: 'fertilize',
            name: 'Abona tu Monstera',
            time: 'Lunes 4 · Balcón'
          }
        ]
      },
      plants: {
        title: 'Mis plantas',
        action: 'Ver todas',
        items: [
          {
            key: 'ficus',
            name: 'Ficus Pandurata',
            place: 'Sala',
            status: 'Necesita agua',
            tone: 'pending'
          },
          {
            key: 'monstera',
            name: 'Monstera Deliciosa',
            place: 'Balcón',
            status: 'Saludable',
            tone: 'positive'
          },
          {
            key: 'pilea',
            name: 'Pilea peperomioides',
            place: 'Dormitorio',
            status: 'Saludable',
            tone: 'positive'
          }
        ],
        add: 'Nueva planta'
      }
    }
  }
} as const;
