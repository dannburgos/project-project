import type { PetrideStory } from '@/content/petride-story.types';
import { petrideDesignSystem } from '@/content/cases/petride-design-system';

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
    cover: {
      src: '/petride/fotos/portada-carro.webp',
      alt: 'Dos perros asomados por las ventanas de un carro, listos para el viaje'
    },
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
      title: '¿Qué pasa hoy?'
    },
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
      title: 'Una usuaria,\nuna mascota'
    },
    personaName: 'Gabriela',
    personaTags: ['32 años', 'Empleada', 'DogLover'],
    personaBio:
      'Gabriela vive en un apartamento en la ciudad. Trabaja de forma híbrida y se mueve en apps de movilidad. Vive con su perro mediano y lo lleva a distintos lugares.',
    personaPhoto: {
      src: '/petride/fotos/persona5-recorte.webp',
      alt: 'Mujer joven besando a su perro, un bóxer boston, mientras lo carga'
    },
    personaBlocks: [
      {
        title: 'Comportamiento',
        items: [
          'Usa apps de movilidad con frecuencia.',
          'Confirma si aceptan mascotas y evita servicios con malas experiencias.'
        ]
      },
      {
        title: 'Necesidades',
        items: [
          'Seguridad para su mascota y conductores dispuestos.',
          'Condiciones claras desde el inicio.'
        ]
      },
      {
        title: 'Frustraciones',
        items: [
          'Cancelaciones inesperadas y falta de opciones especializadas.',
          'Incomodar por viajar con su mascota.'
        ]
      },
      {
        title: 'Motivaciones',
        items: [
          'Proteger a su mascota y reducir el estrés del traslado.',
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
        level: 1.5,
        opportunity: 'Comunicar qué resuelve PetRide al inicio'
      },
      {
        name: 'Explora el servicio',
        emotion: 'Expectativa',
        level: 3.2,
        opportunity: 'Explicar cómo funciona y sus condiciones'
      },
      {
        name: 'Configura el viaje',
        emotion: 'Duda y expectativa',
        level: 2.4,
        opportunity: 'Cruzar mascota, conductor y compatibilidad'
      },
      {
        name: 'Espera la asignación',
        emotion: 'Expectativa',
        level: 3,
        opportunity: 'Mostrar estados claros y datos del conductor'
      },
      {
        name: 'Hace el viaje',
        emotion: 'Tranquilidad',
        level: 4.6,
        opportunity: 'Chat y seguimiento durante todo el viaje'
      },
      {
        name: 'Llega y califica',
        emotion: 'Satisfacción o inconformidad',
        level: 3.6,
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
      'Los dos recorridos del prototipo, con sus decisiones y caminos alternos.',
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
      }
    ]
  },
  design: {
    flowShows: [
      {
        title: 'Registrar mascota',
        screens: [
          {
            key: 'list',
            label: 'Pantalla · Mis mascotas',
            title: 'Todas en un solo lugar',
            text: 'La persona ve las mascotas que ya registró, con su tamaño, su edad y si son de asistencia. Debajo de la lista, agrega una nueva.'
          },
          {
            key: 'camera',
            label: 'Pantalla · Foto de la mascota',
            title: 'Una cara para reconocerla',
            text: 'La cámara se abre dentro de la app y un recuadro ayuda a centrar a la mascota. La foto es opcional: se puede omitir y seguir.'
          },
          {
            key: 'identity',
            label: 'Pantalla · Paso 1',
            title: 'Lo esencial primero',
            text: 'Paso 1 de 2: nombre, perro o gato, hembra o macho y raza. La raza se busca escribiendo y, si no tiene una, se elige Mestizo.'
          },
          {
            key: 'travel',
            label: 'Pantalla · Paso 2',
            title: 'Lo que el conductor debe saber',
            text: 'El peso se elige por tamaño y la edad marca la etapa. Dos interruptores dicen si es de asistencia y si convive con otras mascotas, y queda un espacio para el conductor.'
          },
          {
            key: 'review',
            label: 'Pantalla · Revisar información',
            title: 'Un último vistazo',
            text: 'Antes de guardar, todo se resume en un carné sobre la foto. Si algo está mal se edita; si está bien, se guarda.'
          },
          {
            key: 'registered',
            label: 'Pantalla · Mascota registrada',
            title: 'Lista para su primer viaje',
            text: 'Un póster confirma el registro con los datos clave y lleva directo a pedir el primer viaje con esa mascota.'
          },
          {
            key: 'listUpdated',
            label: 'Pantalla · Mis mascotas actualizada',
            title: 'Una más en la familia',
            text: 'Al volver, la nueva mascota aparece resaltada junto a las demás, lista para elegirla en cualquier viaje.'
          }
        ]
      },
      {
        title: 'Solicitar viaje',
        screens: [
          {
            key: 'home',
            label: 'Pantalla · Inicio',
            title: 'Un viaje a un toque',
            text: 'Un buscador lleva al destino y debajo están los lugares guardados, las mascotas registradas e ideas para el próximo viaje.'
          },
          {
            key: 'places',
            label: 'Pantalla · Origen y destino',
            title: 'Lugares que las reciben',
            text: 'El origen arranca en la ubicación actual y el destino se busca escribiendo. Las categorías muestran parques, veterinarias y guarderías que admiten mascotas.'
          },
          {
            key: 'pets',
            label: 'Pantalla · Elegir mascotas',
            title: 'Un puesto para cada una',
            text: 'Se eligen una o varias mascotas y un resumen cuenta los puestos libres del carro. Si conviven bien, la app lo confirma antes de seguir.'
          },
          {
            key: 'fare',
            label: 'Pantalla · Tarifa y resumen',
            title: 'Sin sorpresas al confirmar',
            text: 'La ruta en el mapa, la tarifa, el tiempo, la distancia y la hora de llegada quedan a la vista antes de confirmar el viaje.'
          },
          {
            key: 'searching',
            label: 'Pantalla · Buscando conductor',
            title: 'Una espera que tranquiliza',
            text: 'Mientras se busca, la pantalla dice quiénes viajan y que el conductor asignado aceptará a esas mascotas. Se puede cancelar.'
          },
          {
            key: 'driver',
            label: 'Pantalla · Conductor asignado',
            title: 'Saber quién llega',
            text: 'Aparecen la conductora verificada, su calificación, el carro con la placa y el punto de recogida en el mapa, con accesos para escribirle o llamarla.'
          },
          {
            key: 'rating',
            label: 'Pantalla · Llegada y calificación',
            title: 'Cómo les fue',
            text: 'Al llegar se confirma el destino y lo pagado. Se califica con huellas, se marca lo que se destaca y, si se quiere, se agradece con propina.'
          }
        ]
      }
    ],
    system: petrideDesignSystem
  }
};
