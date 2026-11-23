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
    playPrototype: 'Reproducir prototipo',
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
  // Los flujos del prototipo, para pasar de uno a otro en la página completa
  flows: {
    label: 'Elige un flujo',
    soon: 'Próximamente',
    items: [
      { number: 1, title: 'Incorporar una planta', isReady: true },
      { number: 2, title: 'Crear una rutina', isReady: true }
    ]
  },
  common: {
    back: 'Volver',
    more: 'Más opciones'
  },
  // La planta que recorre el capítulo 1 y el 2
  plant: {
    name: 'Ficus Pandurata',
    scientific: 'Ficus lyrata',
    tagline: 'Elegante y resistente',
    nickname: 'Ficus de la sala',
    cutoutImage: '/planti/FicusPandurata2.png',
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
      title: 'Buscando tu planta',
      messages: [
        'Mirando sus hojas…',
        'Comparando tamaños…',
        'Buscando coincidencias…'
      ]
    },
    gallery: {
      question: '¿Es alguna de estas?',
      items: [
        {
          key: 'pandurata',
          name: 'Ficus Pandurata',
          image: '/planti/match-pandurata.png',
          isActive: true
        },
        {
          key: 'elastica',
          name: 'Ficus Elástica',
          image: '/planti/match-elastica.png'
        },
        {
          key: 'benjamina',
          name: 'Ficus Benjamina',
          image: '/planti/match-benjamina.png'
        }
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
    titleThree: 'Recorrido del capítulo 3',
    hint: 'Cada pantalla tal como se ve en el prototipo, en orden. Desliza hacia el lado para ver todas. Puedes tocar y hacer scroll en cada una para probarlas.',
    entry: 'Entrada',
    chapter: 'Capítulo 1 · Primera vez',
    chapterTwo: 'Capítulo 2 · Crear una rutina',
    chapterThree: 'Capítulo 3 · Completar un cuidado',
    framesThree: {
      lock: {
        title: 'Pantalla bloqueada',
        note: 'Llega el aviso del riego; se toca y abre el cuidado'
      },
      notices: {
        title: 'Notificaciones',
        note: 'La app se abre en Notificaciones; se pulsa "Ver cómo hacerlo"'
      },
      detail: {
        title: 'Detalle del cuidado',
        note: 'Qué toca, cuándo y los pasos; se pulsa "Marcar como realizado"'
      },
      done: {
        title: 'Cuidado completado',
        note: 'Check de confirmación y el cuidado que queda pendiente'
      }
    },
    framesTwo: {
      home: {
        title: 'Inicio, antes de la rutina',
        note: 'El Ficus ya está; se toca su tarjeta'
      },
      start: {
        title: 'Mis plantas · Ficus',
        note: 'La planta y sus datos; se pulsa "Generar rutina"'
      },
      generating: {
        title: 'Armando la rutina',
        note: 'La app revisa luz y riego y programa los cuidados'
      },
      plan: {
        title: 'Tu rutina, paso a paso',
        note: 'Qué hacer, cuándo y cómo; se pulsa "Activar avisos"'
      },
      tab: {
        title: 'Pestaña Rutina',
        note: 'Hoy es jueves; se toca el sábado y aparece lo que toca ese día'
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
        note: 'Se escribe el nombre y se eligen dónde vive, la luz y cuándo se regó'
      },
      registered: {
        title: 'Planta registrada',
        note: 'Se dibuja el check y la planta queda guardada'
      }
    }
  },
  personalize: {
    title: 'Tu planta',
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
    wateringLabel: '¿Cuándo la regaste por última vez?',
    wateringPlaceholder: 'Elige una opción',
    waterings: [
      { key: 'today', label: 'Hoy', isSelected: true },
      { key: 'week', label: 'Esta semana' },
      { key: 'older', label: 'Hace más de una semana' }
    ],
    action: 'Confirma tus datos'
  },
  needs: {
    facts: [
      { key: 'indoor', text: 'Interior' },
      { key: 'water', text: '2 riegos por semana' },
      { key: 'care', text: 'Cuidado moderado' }
    ],
    screenTitle: 'Mis plantas',
    descriptionTitle: 'Descripción',
    description:
      'Planta de hojas grandes y brillantes, ideal para espacios con buena luz. Aporta un look tropical. Con luz y riego moderado se mantiene verde y fuerte.',
    action: 'Guarda tu planta'
  },
  // Capítulo 2 · Crear una rutina: de las necesidades de la planta a cuidados
  // con fecha. Contenido de diseño, no consejo botánico validado.
  routine: {
    // Inicio antes de la rutina: el mismo Inicio completo, con solo el Ficus
    // y sin tareas todavía; el primer destacado invita a crearla
    home: {
      // En este flujo, hoy es jueves
      date: 'Jueves, 17 de abril',
      banner: {
        label: 'Destacados',
        title: '¿Viajas?',
        text: 'Cuidados especiales\nsi no estás en casa',
        action: 'Conoce más'
      },
      plants: {
        title: 'Mis plantas',
        timeLabel: 'Tiempo contigo',
        placeLabel: 'Ubicación',
        items: [
          {
            key: 'ficus',
            name: 'Ficus Pandurata',
            time: '1 día',
            place: 'Sala',
            tone: 'green',
            image: '/planti/FicusPandurata.png'
          },
          {
            key: 'pilea',
            name: 'Pilea peperomioides',
            time: '3 semanas',
            place: 'Sala',
            tone: 'cream'
          }
        ],
        add: 'Nueva planta'
      }
    },
    startAction: 'Generar rutina',
    // La app arma la rutina: la persona no elige cuidados ni frecuencias
    generating: {
      title: 'Armando la rutina de tu Ficus Pandurata',
      steps: [
        'Revisando su luz y su riego',
        'Eligiendo los días de cada cuidado',
        'Programando tus avisos'
      ]
    },
    plan: {
      title: 'Tu rutina',
      question: 'Hecha para tu Ficus',
      hint: 'Solo sigue estos pasos.',
      steps: [
        {
          key: 'water',
          name: 'Regar',
          when: 'Lunes y jueves',
          how: 'Hasta que gotee abajo'
        },
        {
          key: 'fertilize',
          name: 'Abonar',
          when: 'Un sábado al mes',
          how: 'Una dosis en el agua'
        },
        {
          key: 'leaves',
          name: 'Revisar hojas',
          when: 'Cada 15 días',
          how: 'Mira bajo las hojas'
        }
      ],
      action: 'Activar avisos'
    },
    // Pestaña Rutina, donde termina el flujo: los avisos ya están activos, se
    // ve la semana y, al tocar un día, lo que toca ese día
    tab: {
      title: 'Tu rutina',
      status: 'Avisos activos',
      empty: 'Este día no toca ningún cuidado.',
      // Hoy es jueves 17; se riega lunes y jueves, y el sábado toca abonar
      days: [
        {
          key: 'mon',
          label: 'L',
          number: '14',
          heading: 'Lunes 14',
          care: 'water',
          task: {
            title: 'Riega tu Ficus',
            hour: '8:00',
            period: 'a. m.',
            how: 'Hasta que gotee abajo',
            careKey: 'water',
            care: 'Regar',
            frequency: 'Lun y jue'
          }
        },
        { key: 'tue', label: 'M', number: '15', heading: 'Martes 15' },
        { key: 'wed', label: 'M', number: '16', heading: 'Miércoles 16' },
        {
          key: 'thu',
          label: 'J',
          number: '17',
          heading: 'Jueves 17 · hoy',
          isToday: true,
          care: 'water',
          task: {
            title: 'Riega tu Ficus',
            hour: '8:00',
            period: 'a. m.',
            how: 'Hasta que gotee abajo',
            careKey: 'water',
            care: 'Regar',
            frequency: 'Lun y jue'
          }
        },
        { key: 'fri', label: 'V', number: '18', heading: 'Viernes 18' },
        {
          key: 'sat',
          label: 'S',
          number: '19',
          heading: 'Sábado 19',
          care: 'fertilize',
          task: {
            title: 'Abona tu Ficus',
            hour: '5:00',
            period: 'p. m.',
            how: 'Una dosis en el agua',
            careKey: 'fertilize',
            care: 'Abonar',
            frequency: '1 vez al mes'
          }
        },
        { key: 'sun', label: 'D', number: '20', heading: 'Domingo 20' }
      ]
    }
  },
  // Capítulo 3 · Completar un cuidado: le llega el aviso, lo toca, sigue unos
  // pasos simples y lo marca como hecho. Es jueves 1 de mayo,
  // dos semanas después de crear la rutina del Ficus.
  tasks: {
    // La persona no abre la app: el aviso llega con el celular bloqueado y lo
    // toca desde ahí
    lock: {
      date: 'Jueves 1 de mayo',
      time: '8:00',
      appName: 'Planti',
      when: 'ahora',
      title: 'Hoy toca regar tu Ficus',
      text: 'Hasta que gotee abajo.'
    },
    // Al tocar el aviso, la app se abre en Notificaciones: una línea de tiempo
    // por día, con filtros arriba y el aviso de hoy grande
    notices: {
      title: 'Notificaciones',
      filters: [
        { key: 'all', label: 'Todas' },
        { key: 'todo', label: 'Por hacer', count: 1 },
        { key: 'done', label: 'Hechas', count: 2 }
      ],
      days: [
        {
          key: 'today',
          heading: 'Hoy · jueves 1',
          status: 'todo',
          title: 'Hoy toca regar tu Ficus',
          text: 'Hasta que gotee abajo.',
          time: '8:00 a. m.',
          image: '/planti/FicusPandurata.png',
          action: 'Ver cómo hacerlo'
        },
        {
          key: 'monday',
          heading: 'Lunes 28',
          status: 'done',
          title: 'Riegaste tu Ficus',
          text: 'Hecho',
          time: '8:00 a. m.'
        },
        {
          key: 'thursday',
          heading: 'Jueves 24',
          status: 'done',
          title: 'Riegaste tu Ficus',
          text: 'Hecho',
          time: '8:00 a. m.'
        }
      ]
    },
    detail: {
      title: 'Tu cuidado de hoy',
      image: '/planti/FicusPandurata2.png',
      // La actividad es lo principal; la hora y la frecuencia ya las dijo el
      // aviso, así que van solo como texto
      care: 'Regar',
      plant: 'Ficus Pandurata',
      when: 'Hoy · 8:00 a. m.',
      frequency: 'Lunes y jueves',
      howTitle: 'Cómo hacerlo',
      steps: [
        'Revisa que la tierra esté seca',
        'Riega hasta que gotee abajo',
        'Vacía el plato de agua'
      ],
      action: 'Marcar como realizado'
    },
    done: {
      title: '¡Listo! Regaste tu Ficus',
      text: 'Su próximo riego es el lunes 5 de mayo.',
      pendingTitle: 'Te queda 1 cuidado hoy',
      pending: {
        title: 'Revisa las hojas de tu Ficus',
        plant: 'Ficus Pandurata · Sala',
        hour: '5:00',
        period: 'p. m.',
        careKey: 'leaves',
        care: 'Revisar hojas'
      },
      action: 'Volver al inicio'
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
      'lock-screen': 'Pantalla bloqueada, llega el aviso',
      notices: 'Notificaciones',
      'task-detail': 'Detalle del cuidado',
      'task-done': 'Cuidado completado',
      'routine-generating': 'Armando la rutina',
      'routine-plan': 'Tu rutina, paso a paso',
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
      openWatering: 'Se abre la lista de "¿Cuándo la regaste?"',
      pickWatering: 'Se toca "Hoy" en la lista',
      fillWatering: 'Se cierra la lista con "Hoy"',
      pressPersonalize: 'Se pulsa "Confirma tus datos"',
      registered: 'Se dibuja el check',
      homeRoutine: 'Aparece Inicio con el Ficus, todavía sin rutina',
      pressHomeRoutine: 'Se toca la tarjeta del Ficus',
      routineStart: 'Aparecen la planta y sus datos',
      pressRoutineStart: 'Se pulsa "Generar rutina"',
      routineGenerating: 'La app arma la rutina del Ficus',
      routinePlan: 'Aparece la rutina, paso a paso',
      pressRoutinePlan: 'Se pulsa "Activar avisos"',
      routineTab: 'Aparece la rutina, con los avisos activos y hoy elegido',
      lockScreen: 'Pantalla bloqueada: llega el aviso del riego',
      pressNotice: 'Se toca el aviso',
      noticesScreen: 'Se abre la app en Notificaciones',
      pressNoticeItem: 'Se pulsa "Ver cómo hacerlo"',
      taskDetail: 'Aparece el cuidado, con sus pasos',
      pressTaskDetail: 'Se pulsa "Marcar como realizado"',
      taskDone: 'Se dibuja el check y queda 1 cuidado pendiente',
      tapSaturday: 'Se toca el sábado 19',
      showSaturday: 'Aparece lo que toca el sábado: abonar'
    }
  },
  home: {
    notifications: 'Notificaciones',
    greeting: '¡Hola, Laura!',
    daypart: 'Buenos días',
    date: 'Miércoles, 16 de abril',
    dateNote: '¡Un día increíble para tus plantas!',
    empty: {
      title: 'Tu jardín empieza aquí',
      body: 'Cuéntanos qué planta tienes y te ayudamos a cuidarla.',
      action: 'Añade tu planta'
    }
  }
} as const;
