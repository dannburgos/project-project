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
    place: 'Sala',
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
      question: '¿Cómo es tu planta?',
      options: [
        { key: 'large', label: 'Hojas grandes', isSelected: true },
        { key: 'slim', label: 'Hojas largas y finas' },
        { key: 'hanging', label: 'Cuelga o trepa' },
        { key: 'flowers', label: 'Tiene flores' }
      ]
    },
    more: {
      title: 'Cuéntanos más',
      sizeLabel: '¿Qué tan grande es?',
      sizes: [
        { key: 'small', label: 'Pequeña', hint: 'cabe sobre una mesa' },
        {
          key: 'medium',
          label: 'Mediana',
          hint: 'llega a la rodilla',
          isSelected: true
        },
        { key: 'big', label: 'Grande', hint: 'llega a la cintura o más' }
      ],
      sizeHintNone: 'Desliza para elegir un tamaño',
      colorLabel: '¿Cómo son sus hojas?',
      colors: [
        { key: 'plain', label: 'Verde parejo', isSelected: true },
        { key: 'patterned', label: 'Con manchas' },
        { key: 'other', label: 'Otros colores' }
      ],
      action: 'Mira las coincidencias'
    },
    gallery: {
      question: '¿Es alguna de estas?',
      summary: ['Hojas grandes', 'Mediana', 'Verde parejo'],
      items: [
        {
          key: 'pandurata',
          name: 'Ficus Pandurata',
          look: 'Hojas grandes en forma de violín',
          isActive: true
        },
        {
          key: 'elastica',
          name: 'Ficus Elástica',
          look: 'Hojas anchas y brillantes'
        },
        {
          key: 'benjamina',
          name: 'Ficus Benjamina',
          look: 'Hojas medianas y ramas que caen'
        }
      ],
      none: { title: '¿No está la tuya?', action: 'Escribe su nombre' }
    }
  },
  detail: {
    action: 'Elige esta planta',
    // Lo general de la planta: todavía no la eligió, solo está mirándola
    recommendationsTitle: 'Recomendaciones generales',
    recommendations: [
      {
        key: 'light',
        name: 'Luz',
        text: 'Le va bien la luz brillante, sin sol directo'
      },
      {
        key: 'water',
        name: 'Riego',
        text: 'Agradece riegos moderados, sin encharcar'
      },
      {
        key: 'humidity',
        name: 'Humedad',
        text: 'Prefiere un ambiente con algo de humedad'
      }
    ],
    note: 'Esto es lo general. Cuando la elijas, lo ajustamos a tu planta.'
  },
  board: {
    title: 'Recorrido del capítulo 1',
    hint: 'Cada pantalla tal como se ve en el prototipo, en orden. Desliza hacia el lado para ver todas.',
    entry: 'Entrada',
    chapter: 'Capítulo 1 · Primera vez',
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
      needs: {
        title: 'Necesidades de cuidado',
        note: 'Aparecen los datos y las recomendaciones; se guarda'
      },
      registered: {
        title: 'Planta registrada',
        note: 'Se confirma y se pulsa "Crea tu rutina"'
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
  registered: {
    title: 'Tu Ficus ya está en tu jardín',
    text: 'Programa sus cuidados y no se te pasará ninguno.',
    primary: 'Crea tu rutina',
    secondary: 'Ahora no'
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
      'search-gallery': 'Buscar · ¿Es alguna de estas?',
      'plant-detail': 'Detalle de la planta',
      personalize: 'Personalizar',
      needs: 'Necesidades de cuidado',
      registered: 'Planta registrada'
    },
    events: {
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
      chooseSize: 'La barra va de pequeña a grande y se queda en "Mediana"',
      chooseColor: 'Se elige "Verde parejo"',
      pressMore: 'Se pulsa "Mira las coincidencias"',
      gallery: 'Suben las tarjetas una tras otra',
      highlight: 'Se resalta la Ficus Pandurata',
      detail: 'Aparece la planta, con lo general',
      scrollDetail: 'Se baja para ver recomendaciones y cuidados',
      pressDetail: 'Se pulsa "Elige esta planta"',
      personalize: 'Aparecen los campos',
      typeName: 'Se escribe "Ficus de la sala"',
      fillPlace: 'Se elige "Sala"',
      fillLight: 'Se elige "Indirecta"',
      pressPersonalize: 'Se pulsa "Confirma tus datos"',
      needs: 'Aparecen los datos y las recomendaciones',
      pressNeeds: 'Se pulsa "Guarda tu planta"',
      registered: 'Se dibuja el check',
      pressRegistered: 'Se pulsa "Crea tu rutina"'
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
