// Textos del prototipo de PetRide (flujo 1: registrar mascota). Los textos con
// {llaves} son plantillas: se llenan con fillPetrideTemplate
export const petrideMessages = {
  meta: {
    boardTitle: 'PetRide · Registrar mascota',
    boardTwoTitle: 'PetRide · Solicitar viaje'
  },
  boardTwo: {
    eyebrow: 'Flujo 02',
    title: 'Solicitar viaje',
    hint: 'Todas las pantallas del flujo, en orden.',
    groups: {
      main: 'Recorrido principal'
    },
    frames: {
      home: {
        title: 'Inicio',
        note: 'Pedir un viaje y ver las mascotas, nada más.'
      },
      places: {
        title: 'Origen y destino',
        note: 'Buscador índigo, categorías para mascotas y resultados cercanos.'
      },
      pets: {
        title: 'Elegir mascotas',
        note: 'Una o varias, según el espacio del vehículo.'
      },
      fare: {
        title: 'Tarifa y resumen',
        note: 'El mismo carro con las mascotas y el precio antes de confirmar.'
      },
      searching: {
        title: 'Buscando conductor',
        note: 'Póster de espera con el carro de las mascotas, sin mapa.'
      },
      driver: {
        title: 'Conductor asignado',
        note: 'Tarjeta de presentación: quién llega y por qué confiar.'
      },
      rating: {
        title: 'Llegada y calificación',
        note: 'Resumen del viaje y estrellas para la conductora.'
      }
    }
  },
  home: {
    title: '¿A dónde vamos hoy?',
    heroTitle: 'Viaja con tus mascotas',
    heroText: 'Conductores que las aceptan, en cada viaje.',
    search: '¿A dónde vamos?',
    now: 'Ahora',
    petsTitle: 'Tus mascotas',
    petsAll: 'Ver todas',
    addPet: 'Agregar',
    quickTitle: 'Ir a un lugar guardado',
    planTitle: 'Planea tu próximo viaje',
    ideaMeta: '{place} · {minutes} min'
  },
  places: {
    title: '¿A dónde vamos?',
    originLabel: 'Origen',
    destinationLabel: 'Destino',
    origin: 'Ubicación actual',
    originDetail: 'Cra. 7 # 72-10',
    swap: 'Intercambiar origen y destino',
    categoriesLabel: 'Tipo de lugar',
    categories: ['Parques', 'Veterinarias', 'Guarderías', 'Tiendas'],
    results: '{count} parques cerca de ti',
    petFriendly: 'Admite mascotas',
    minutes: '{minutes} min',
    placeLine: '{address} · {area}'
  },
  tripPets: {
    title: '¿Quién viaja?',
    lead: 'Elige una o varias mascotas.',
    capacity: '{count} de {total} puestos para mascotas',
    seatsCount: '{count} de {total} puestos',
    seatsFraction: '/{total}',
    seatsFreeOne: 'Queda 1 puesto libre',
    seatsFreeMany: 'Quedan {count} puestos libres',
    seatsFull: 'El carro va completo',
    petMeta: '{breed} · {size}',
    select: 'Elegir a {name}',
    assistance: 'Asistencia',
    friendlyTitle: 'Pueden viajar juntos',
    friendlyText: '{names} conviven con otras mascotas.',
    freeSlot: 'Puesto libre',
    continue: 'Continuar'
  },
  fare: {
    title: 'Tu viaje',
    priceLabel: 'Tarifa',
    arrivalLabel: 'Llegas',
    minutesUnit: 'min',
    you: 'Tú',
    chipMinutes: '{minutes} min',
    chipDistance: '{distance} km',
    chipArrival: 'Llegas {time}',
    confirm: 'Confirmar viaje'
  },
  searching: {
    status: 'Buscando…',
    title: 'Buscamos a quien lleve a {names}',
    text: 'Te asignaremos un conductor compatible con tus preferencias.',
    cancel: 'Cancelar viaje'
  },
  driver: {
    verified: 'Verificada',
    title: '{name} llega en {minutes} min',
    pickup: 'Te recoge aquí',
    statsLabel: 'Datos de {name}',
    ratingLabel: 'Calificación',
    tripsLabel: 'Viajes',
    yearsValue: '{count} años',
    yearsLabel: 'En PetRide',
    plateLabel: 'Placa',
    message: 'Mensaje',
    call: 'Llamar'
  },
  rating: {
    close: 'Cerrar',
    eyebrow: 'Llegaste',
    meta: 'A las {time}',
    petsArrived: '{names} llegaron',
    paidLabel: 'Pagaste',
    question: '¿Cómo te fue con {name}?',
    scoreLabel: 'Calificación',
    scoreRead: '{score} de 5',
    scores: [
      { label: 'Mal' },
      { label: 'Regular' },
      { label: 'Bien' },
      { label: 'Muy bien' },
      { label: 'Excelente' }
    ],
    positiveTitle: '¿Qué destacas?',
    positiveTags: [
      'Trato con mascotas',
      'Puntual',
      'Conducción tranquila',
      'Carro limpio'
    ],
    negativeTitle: '¿Qué falló?',
    negativeTags: [
      'Trato con mascotas',
      'Llegó tarde',
      'Conducción brusca',
      'Carro sucio'
    ],
    optionalTitle: 'Opcional · Agradece a {name}',
    tipTitle: '¿Agradecer con propina?',
    tips: ['$2.000', '$3.000', '$5.000', 'Otro'],
    message: 'Escríbele algo a {name}',
    send: 'Enviar calificación'
  },
  trip: {
    and: '{first} y {second}'
  },
  board: {
    eyebrow: 'Flujo 01',
    title: 'Registrar mascota',
    hint: 'Todas las pantallas del flujo, en orden.',
    groups: {
      main: 'Recorrido principal'
    },
    frames: {
      list: {
        title: 'Mis mascotas',
        note: 'Ve sus mascotas y entra a agregar una nueva.'
      },
      camera: {
        title: 'Foto de la mascota',
        note: 'Cámara dentro de la app; la foto es opcional.'
      },
      identity: {
        title: 'Paso 1 · Quién viaja',
        note: 'Foto, nombre, perro o gato y raza.'
      },
      travel: {
        title: 'Paso 2 · Así viaja',
        note: 'El peso marca el tamaño y la edad, la etapa.'
      },
      review: {
        title: 'Revisar información',
        note: 'El carné de viaje resume todo antes de guardar.'
      },
      registered: {
        title: 'Mascota registrada',
        note: 'Póster con ruta: lista para su primer viaje.'
      },
      listUpdated: {
        title: 'Mis mascotas · actualizado',
        note: 'La nueva mascota ya aparece en la lista.'
      }
    }
  },
  device: {
    time: '9:41'
  },
  nav: {
    home: 'Inicio',
    pets: 'Mascotas',
    request: 'Pedir viaje',
    trip: 'Mi viaje',
    profile: 'Perfil'
  },
  common: {
    back: 'Volver',
    close: 'Cerrar',
    optional: 'Opcional',
    weightUnit: 'kg',
    yearUnit: 'años',
    yes: 'Sí',
    less: 'Menos',
    more: 'Más'
  },
  list: {
    title: 'Mis mascotas',
    add: 'Agregar mascota',
    open: 'Ver el perfil de {name}',
    petLine: '{species} · {size}',
    petStats: '{size} · {weight} kg',
    petAge: '{stage} · {age}',
    years: '{count} años',
    year: '{count} año',
    assistance: 'Asistencia',
    friendly: 'Sociable',
    options: 'Opciones de {name}'
  },
  camera: {
    title: 'Foto de tu mascota',
    flash: 'Flash',
    hint: 'Centra a tu mascota en el recuadro',
    gallery: 'Elegir de la galería',
    shutter: 'Tomar foto',
    flip: 'Girar cámara',
    skip: 'Omitir por ahora'
  },
  form: {
    titleNew: 'Registrar mascota',
    titleEdit: 'Editar mascota',
    photo: {
      change: 'Cambiar foto'
    },
    fields: {
      name: { label: 'Nombre', placeholder: 'Kira' },
      species: { label: 'Especie', options: ['Perro', 'Gato'] },
      sex: { label: '¿Es hembra o macho?', options: ['Hembra', 'Macho'] },
      breed: { label: 'Raza', placeholder: 'Pinscher miniatura' },
      size: { label: 'Tamaño', options: ['Pequeña', 'Mediana', 'Grande'] },
      weight: { label: 'Peso aproximado', placeholder: '5' },
      stage: {
        label: 'Etapa',
        options: ['Cachorro', 'Adulto', 'Senior']
      },
      age: { label: 'Edad aproximada' },
      assistance: { label: 'Es animal de asistencia' },
      friendly: { label: 'Convive con otras mascotas' },
      notes: {
        label: 'Observaciones',
        placeholder: 'Algo que el conductor deba saber'
      }
    },
    continue: 'Continuar',
    saveChanges: 'Guardar cambios'
  },
  steps: {
    count: '{current} de {total}',
    identityTitle: '¿Quién viaja contigo?',
    travelTitle: 'Así viaja {name}',
    breedPlaceholder: 'Busca su raza',
    breedQuery: 'Bas',
    breeds: ['Basenji', 'Basset hound', 'Mestizo'],
    sizeRanges: {
      dog: ['Hasta 10 kg', '10 a 25 kg', 'Más de 25 kg'],
      cat: ['Hasta 4 kg', '4 a 6 kg', 'Más de 6 kg']
    },
    notesLabel: 'Para el conductor',
    notesPlaceholder: 'Algo que el conductor deba saber'
  },
  pass: {
    eyebrow: 'Carné de viaje',
    sizeLabel: 'Tamaño',
    ageLabel: 'Edad',
    friendlyLabel: 'Convivencia',
    notes: 'Para el conductor',
    stamp: 'Lista para viajar',
    friendly: 'Convive',
    notFriendly: 'No convive',
    withAssistance: 'Con asistencia',
    noAssistance: 'Sin asistencia'
  },
  review: {
    title: 'Revisar información',
    lead: 'Confirma que todo esté bien antes de guardar.',
    edit: 'Editar',
    save: 'Guardar mascota'
  },
  registered: {
    eyebrow: 'Registro completo',
    title: 'Tu mascota ya puede subir a bordo',
    friendly: 'Convive',
    request: 'Pedir un viaje con {name}'
  }
} as const;
