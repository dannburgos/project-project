import type { PetrideStory } from '@/content/petride-story.types';

// Caso de PetRide. Fuente: .claude/knowledge/petride/ (documento de
// definición de producto). La persona, el mapa de empatía y el journey son
// hipótesis de diseño: no hubo entrevistas ni pruebas con usuarios.
export const petrideStory: PetrideStory = {
  sections: [
    'Introducción',
    'Investigación',
    'Usuario',
    'Arquitectura',
    'Diseño'
  ],
  labels: {
    nav: 'Capítulos del caso',
    navOpen: 'Ver capítulos',
    jumping: 'Vas a',
    placeholder: 'Espacio reservado'
  },
  intro: {
    wordmark: 'PetRide',
    logo: {
      src: '/petride/logos/petride_logo.svg',
      alt: 'Logo de PetRide: un perro y un gato dentro de un pin de ubicación, con una carretera'
    },
    tagline:
      'Transporte por app para moverte con tu mascota, con conductores preparados para recibirla.',
    facts: [
      { title: 'Plataforma', text: 'App móvil' },
      { title: 'Mercado', text: 'Principales ciudades de Colombia' },
      { title: 'Servicio', text: 'Viajes urbanos inmediatos' },
      { title: 'Alcance', text: '3 user flows' }
    ],
    coverLabel: 'Imagen principal · persona viajando con su mascota en PetRide',
    processTitle: 'Proceso de diseño',
    process: [
      { title: 'Investigación', text: 'Investigación secundaria · Benchmark' },
      { title: 'Usuario', text: 'Arquetipo · Empatía · Journey' },
      { title: 'Solución', text: 'Propuesta de valor · MVP' },
      { title: 'Arquitectura', text: 'Site map · User flows' },
      { title: 'Wireframes', text: 'Baja y media fidelidad' },
      { title: 'Diseño visual', text: 'Flujos · Sistema de diseño' }
    ]
  },
  research: {
    head: {
      title: 'Investigar y descubrir',
      lead: 'Qué pasa hoy cuando alguien necesita moverse con su mascota y duda si la aceptarán.'
    },
    problemLabel: 'El problema',
    problem:
      'Moverse con una mascota en la ciudad es incierto: no sabes si el conductor la va a aceptar, cómo es el vehículo ni si habrá alguien disponible.',
    opportunity: {
      title: 'La oportunidad',
      text: 'Una experiencia de movilidad especializada que tenga en cuenta a la mascota desde la solicitud hasta el final del viaje.'
    },
    method: {
      title: 'Cómo investigamos',
      text: 'Investigación secundaria, benchmark de apps de movilidad y análisis conceptual asistido por IA. No hubo entrevistas ni pruebas con usuarios: lo que sigue son hipótesis de diseño.'
    },
    benchmarkTitle: 'Benchmark',
    benchmarkFeatureLabel: 'Qué revisamos',
    competitors: ['Cabify Mascotas', 'Uber Pet', 'inDrive'],
    competitorLogos: [
      {
        src: '/petride/logos/cabify.png',
        alt: 'Logo de Cabify',
        tone: 'cabify'
      },
      { src: '/petride/logos/uber.webp', alt: 'Logo de Uber', tone: 'uber' },
      {
        src: '/petride/logos/indrive.png',
        alt: 'Logo de inDrive',
        tone: 'indrive'
      }
    ],
    benchmarkStates: {
      yes: 'Sí',
      partial: 'En parte',
      no: 'No',
      unknown: 'Sin dato'
    },
    benchmark: [
      {
        feature: 'Categoría para mascotas',
        cells: [
          { state: 'yes', note: 'Documentada en Bogotá' },
          { state: 'yes', note: 'Según la ubicación' },
          { state: 'no', note: 'No se identificó' }
        ]
      },
      {
        feature: 'Precio antes de confirmar',
        cells: [
          { state: 'unknown', note: 'No se consultó' },
          { state: 'yes', note: 'Antes de pedir' },
          { state: 'partial', note: 'Se negocia' }
        ]
      },
      {
        feature: 'Datos del conductor y seguimiento',
        cells: [
          { state: 'unknown', note: 'No se consultó' },
          { state: 'yes', note: 'Perfil y recorrido' },
          { state: 'partial', note: 'Compara perfiles' }
        ]
      },
      {
        feature: 'Aceptación clara de la mascota',
        cells: [
          { state: 'partial', note: 'Depende del conductor' },
          { state: 'partial', note: 'Según la ciudad' },
          { state: 'partial', note: 'Depende del conductor' }
        ]
      },
      {
        feature: 'Varios tipos de animales',
        cells: [
          { state: 'partial', note: 'Sobre todo perros y gatos' },
          { state: 'partial', note: 'Según las políticas' },
          { state: 'unknown', note: 'No se consultó' }
        ]
      }
    ],
    findingsTitle: 'Lo que encontramos',
    findings: [
      'Especializarse comunica con claridad que el servicio acepta mascotas.',
      'Conocer las condiciones antes de confirmar reduce la incertidumbre.',
      'El tamaño, la cantidad y el tipo de animal cambian la compatibilidad.',
      'Ver quién conduce y cómo es el vehículo genera confianza, y la aceptación del conductor y el estado del vehículo pesan en la decisión.'
    ],
    findingsPhotos: [
      {
        label: 'Foto · perro asomado en la ventana del carro',
        image: {
          src: '/petride/fotos/perrito3.jpg',
          alt: 'Chihuahua negro y café apoyado sobre un gato gris'
        }
      },
      {
        label: 'Foto · bulldog asomado por el borde',
        image: {
          src: '/petride/fotos/perrito2-recorte.webp',
          alt: 'Bulldog blanco asomándose por el borde de abajo'
        }
      }
    ],
    findingsOpportunity:
      'Movilidad pensada para la mascota, de la solicitud al final del viaje.',
    findingsPortrait: {
      src: '/petride/fotos/persona8.jpg',
      alt: 'Mujer de pelo rizado sonriendo mientras carga a su perro'
    }
  },
  user: {
    head: {
      title: 'Para quién es',
      lead: 'Una persona que vive en la ciudad y lleva a su mascota a todas partes.'
    },
    personaName: 'Gabriela',
    personaTags: ['32 años', 'Empleada', 'DogLover'],
    personaBio:
      'Gabriela vive en un apartamento en la ciudad. Trabaja de forma híbrida y se mueve todo el tiempo en apps de movilidad. Vive con su perro de tamaño mediano y suele llevarlo a distintos lugares.',
    personaPhoto: {
      src: '/petride/fotos/persona5-recorte.webp',
      alt: 'Mujer joven besando a su perro, un bóxer boston, mientras lo carga'
    },
    personaBlocks: [
      {
        title: 'Comportamiento',
        items: [
          'Usa apps de movilidad con frecuencia.',
          'Confirma si aceptan mascotas.',
          'Evita servicios con malas experiencias.'
        ]
      },
      {
        title: 'Necesidades',
        items: [
          'Seguridad para su mascota.',
          'Conductores dispuestos.',
          'Condiciones claras desde el inicio.'
        ]
      },
      {
        title: 'Frustraciones',
        items: [
          'Cancelaciones inesperadas.',
          'Falta de opciones especializadas.',
          'Incomodar por viajar con su mascota.'
        ]
      },
      {
        title: 'Motivaciones',
        items: [
          'Proteger a su mascota.',
          'Reducir el estrés del traslado.',
          'Sentirse respetada y comprendida.'
        ]
      }
    ],
    empathyTitle: 'Mapa de empatía',
    empathy: [
      {
        title: '¿Qué piensa y siente?',
        items: [
          'Necesita confiar en que su mascota será bien recibida.',
          'Siente ansiedad al no saber si el conductor aceptará el viaje.',
          'Su mascota es parte de su familia, no una carga.'
        ]
      },
      {
        title: '¿Qué hace y dice?',
        items: [
          'Pregunta antes de iniciar el viaje si aceptan mascotas.',
          'Busca recomendaciones con contactos de confianza.',
          'Está dispuesta a pagar más por un servicio adecuado.'
        ]
      },
      {
        title: '¿Qué la frustra?',
        items: [
          'Cancelaciones inesperadas al mencionar que viaja con mascota.',
          'Falta de opciones claras y especializadas.',
          'Tener que justificar a su mascota todo el tiempo.'
        ]
      },
      {
        title: '¿Qué la motiva?',
        items: [
          'Garantizar la seguridad y tranquilidad de su mascota.',
          'Ahorrar tiempo y reducir el estrés del traslado.',
          'Sentirse acompañada por un servicio empático y confiable.'
        ]
      }
    ],
    journeyTitle: 'Customer journey',
    journeyLabels: {
      emotion: 'Siente',
      opportunity: 'Oportunidad'
    },
    journey: [
      {
        name: 'Surge la necesidad',
        emotion: 'Incertidumbre',
        opportunity: 'Comunicar qué resuelve PetRide al inicio'
      },
      {
        name: 'Explora el servicio',
        emotion: 'Expectativa',
        opportunity: 'Explicar cómo funciona y sus condiciones'
      },
      {
        name: 'Configura el viaje',
        emotion: 'Duda y expectativa',
        opportunity: 'Cruzar mascota, conductor y compatibilidad'
      },
      {
        name: 'Espera la asignación',
        emotion: 'Expectativa',
        opportunity: 'Mostrar estados claros y datos del conductor'
      },
      {
        name: 'Hace el viaje',
        emotion: 'Tranquilidad',
        opportunity: 'Chat y seguimiento durante todo el viaje'
      },
      {
        name: 'Llega y califica',
        emotion: 'Satisfacción o inconformidad',
        opportunity: 'Facilitar la calificación del servicio'
      }
    ]
  },
  architecture: {
    head: {
      title: 'Cómo se organiza',
      hideTitle: true
    },
    siteMapTitle: 'Site map',
    siteMapCenter: 'PetRide',
    siteMap: [
      {
        name: 'Inicio',
        screens: ['Solicitar viaje', 'Mascotas registradas']
      },
      {
        name: 'Mis mascotas',
        screens: [
          'Agregar mascota',
          'Revisar información',
          'Detalle de mascota',
          'Editar mascota'
        ]
      },
      {
        name: 'Solicitar viaje',
        screens: [
          'Origen y destino',
          'Elegir mascotas',
          'Revisar solicitud',
          'Tarifa',
          'Buscando conductor'
        ]
      },
      {
        name: 'Viaje activo',
        screens: [
          'Conductor asignado',
          'Conductor en camino',
          'Viaje en curso',
          'Chat',
          'Calificar'
        ]
      }
    ],
    flowsTitle: 'User flows',
    flowsLead:
      'Los tres recorridos del prototipo, con sus decisiones y caminos alternos.',
    flowsHint: 'Elige un paso para ver qué pasa en él.',
    flowYes: 'Sí',
    flowNo: 'No',
    flows: [
      {
        name: 'Registrar mascota',
        goal: 'Registrar una o varias mascotas para tenerlas en cuenta al pedir un viaje.',
        nodes: [
          {
            label: 'Mis mascotas',
            kind: 'step',
            detail:
              'Lista de mascotas registradas y acceso para agregar una nueva. Sin mascotas, muestra un estado vacío.'
          },
          {
            label: 'Agregar mascota',
            kind: 'step',
            detail: 'Abre el formulario de registro.'
          },
          {
            label: 'Completar información',
            kind: 'step',
            detail:
              'Nombre, especie, tamaño y peso son obligatorios. Raza, foto y observaciones son opcionales.'
          },
          {
            label: '¿Datos válidos?',
            kind: 'decision',
            detail:
              'Si falta algo, se marcan los campos pendientes y se conserva lo que ya escribiste.',
            branch: 'Corregir campos',
            returnTo: 'Completar información'
          },
          {
            label: 'Revisar información',
            kind: 'step',
            detail:
              'Resumen para verificar antes de guardar. Editar vuelve al formulario con los datos.'
          },
          {
            label: 'Guardar',
            kind: 'step',
            detail:
              'Guarda el perfil una sola vez, aunque se pulse varias veces.'
          },
          {
            label: 'Mascota registrada',
            kind: 'end',
            detail:
              'Confirmación con nombre y foto. Ya se puede elegir al pedir un viaje.'
          }
        ]
      },
      {
        name: 'Solicitar viaje',
        goal: 'Configurar y confirmar un viaje inmediato y conseguir un conductor compatible.',
        nodes: [
          {
            label: 'Origen y destino',
            kind: 'step',
            detail:
              'Ambos son obligatorios y no pueden ser iguales. Se puede usar la ubicación actual.'
          },
          {
            label: '¿Tiene mascotas?',
            kind: 'decision',
            detail:
              'Si no hay mascotas registradas, abre el registro y vuelve a la solicitud.',
            branch: 'Registrar mascota',
            returnTo: 'Elegir mascotas'
          },
          {
            label: 'Elegir mascotas',
            kind: 'step',
            detail:
              'Al menos una. Se pueden elegir varias si el vehículo tiene capacidad.'
          },
          {
            label: '¿Es compatible?',
            kind: 'decision',
            detail:
              'Se evalúan especie, tamaño, peso y cantidad. Si no es compatible, se explica y se puede cambiar la selección.',
            branch: 'Cambiar selección',
            returnTo: 'Elegir mascotas'
          },
          {
            label: 'Tarifa y resumen',
            kind: 'step',
            detail:
              'El precio se muestra antes de confirmar y se recalcula si cambia algo del viaje.'
          },
          {
            label: 'Confirmar viaje',
            kind: 'step',
            detail: 'Crea la solicitud una sola vez y empieza la búsqueda.'
          },
          {
            label: '¿Hay conductor?',
            kind: 'decision',
            detail:
              'La asignación es automática entre conductores compatibles. Si uno rechaza, se busca otro.',
            branch: 'Sin disponibilidad'
          },
          {
            label: 'Conductor asignado',
            kind: 'end',
            detail:
              'Aparecen el conductor y su vehículo, y empieza la gestión del viaje.'
          }
        ]
      },
      {
        name: 'Gestionar viaje',
        goal: 'Acompañar el viaje desde la asignación hasta la calificación.',
        nodes: [
          {
            label: 'Conductor asignado',
            kind: 'step',
            detail:
              'Foto, nombre, calificación, vehículo y placa, con el tiempo estimado de llegada.'
          },
          {
            label: 'Conductor en camino',
            kind: 'step',
            detail:
              'Mapa con la ubicación del conductor, chat y opción de cancelar.'
          },
          {
            label: '¿Llegó al origen?',
            kind: 'decision',
            detail:
              'Mientras no llega, se sigue su ubicación. El viaje no empieza solo cuando el conductor llega.',
            branch: 'Seguir llegada',
            returnTo: 'Conductor en camino'
          },
          {
            label: 'Viaje en curso',
            kind: 'step',
            detail:
              'Ruta, ubicación, chat y opción de reportar un inconveniente.'
          },
          {
            label: 'Viaje finalizado',
            kind: 'step',
            detail: 'Resumen con origen, destino, mascotas, conductor y valor.'
          },
          {
            label: 'Calificar',
            kind: 'end',
            detail: 'Estrellas obligatorias y comentario opcional.'
          }
        ]
      }
    ]
  },
  design: {
    head: {
      title: 'De la estructura a la interfaz'
    },
    wireframesTitle: 'Wireframes',
    wireframeCount: 16,
    flowTitle: 'Registrar mascota',
    flowScreens: [
      {
        label: 'Pantalla · Mis mascotas',
        title: 'Empieza en Mis mascotas',
        text: 'Desde la lista de mascotas registradas, la persona elige agregar una nueva.'
      },
      {
        label: 'Pantalla · Registrar mascota',
        title: 'Solo lo necesario',
        text: 'Cuatro datos obligatorios para que la compatibilidad funcione; el resto es opcional.'
      }
    ],
    systemTitle: 'Sistema de diseño',
    systemText: 'Aquí va el sistema de diseño de PetRide.'
  }
};
