import type { SonopizzaStory } from '@/content/sonopizza-story.types';

// Caso de Sonopizza: rediseño conceptual de la app móvil para pedir pizza.
// Textos tomados del documento maestro (Sonopizza_contexto_maestro_Claude.md).
// Es una propuesta de portafolio: no hubo encargo ni colaboración con la
// marca, y la investigación no incluyó participantes reales.
export const sonopizzaStory: SonopizzaStory = {
  sections: [
    'Introducción',
    'El reto',
    'Lo que encontramos',
    'La experiencia propuesta',
    'La exploración visual'
  ],
  cover: {
    eyebrow: 'Caso de estudio conceptual',
    wordmark: ['SONO', 'PIZZA'],
    tagline: 'Rediseño de la app móvil para pedir pizza',
    facts: [
      { title: 'Tipo', text: 'Proyecto conceptual de portafolio' },
      { title: 'Plataforma', text: 'App móvil' },
      { title: 'Alcance', text: 'Explorar, personalizar y revisar el pedido' }
    ],
    disclaimer:
      'Propuesta independiente: no es un encargo ni una colaboración con Sonopizza.',
    photoLabel: 'Fotografía de pizza, vista cenital',
    mascotAlt: 'Mascota de Sonopizza comiendo una porción de pizza'
  },
  challenge: {
    number: '01',
    name: 'El reto',
    title: 'Una nueva experiencia para pedir pizza',
    context: {
      title: 'Contexto',
      text: 'Sonopizza cuenta con variedad de productos y opciones de personalización. La experiencia digital permite explorar el menú, consultar productos y configurar pizzas con ingredientes y extras, y deja ver oportunidades para organizar mejor la información y acompañar las decisiones.'
    },
    opportunity: {
      title: 'Oportunidad',
      text: 'Pedir pizza debería ser sencillo: encontrar lo que se antoja, entender las opciones disponibles y personalizar sin complicaciones.'
    },
    challengeLabel: 'El reto',
    challenge:
      'Transformar una experiencia de pedido funcional en una experiencia móvil más intuitiva, visual y fácil de recorrer.',
    goal: {
      title: 'Objetivo',
      text: 'Facilitar el proceso desde la exploración del menú hasta la revisión del pedido, combinando claridad funcional con una dirección visual que fortalezca la marca.'
    },
    scopeTitle: 'Alcance de diseño',
    scope: [
      'Navegación y exploración móvil',
      'Organización y descubrimiento de productos',
      'Tamaños, ingredientes y precios',
      'Personalización y extras',
      'Carrito y revisión del pedido'
    ]
  },
  audit: {
    number: '02',
    name: 'Lo que encontramos',
    subtitle: '02.1',
    title: 'Auditoría de la experiencia actual',
    captures: [
      'Captura principal de la app actual',
      'Captura 2 de la app actual',
      'Captura 3 de la app actual',
      'Captura 4 de la app actual',
      'Captura 5 de la app actual'
    ],
    dimensions: [
      {
        title: 'Navegación y categorías',
        text: 'Mejorar la organización y la jerarquía'
      },
      {
        title: 'Presentación y descubrimiento',
        text: 'Reforzar la jerarquía y la comparación'
      },
      {
        title: 'Información del producto',
        text: 'Ordenar la estructura del detalle'
      },
      {
        title: 'Personalización e ingredientes',
        text: 'Distinguir lo obligatorio de lo opcional'
      },
      {
        title: 'Presentación de precios',
        text: 'Separar precio base, adicionales y total'
      },
      {
        title: 'Jerarquía visual e identidad',
        text: 'Más consistencia en tipografía y fotografía'
      }
    ],
    note: 'Revisión visual y heurística con capturas. Un aviso de local cerrado impidió comprobar el recorrido real de pedido.'
  },
  benchmark: {
    subtitle: '02.2',
    title: 'Benchmark competitivo y patrones de diseño',
    references: ["Domino's", 'Pizza Hut', "Papa John's"],
    captureLabel: 'Capturas de',
    dimensionsTitle: 'Qué se comparó',
    dimensions: [
      'Descubrimiento y navegación',
      'Presentación de la información',
      'Personalización',
      'Claridad de precios',
      'Experiencia visual'
    ],
    note: 'Para observar patrones que orienten la propuesta, no para copiar interfaces.'
  },
  synthesis: {
    subtitle: '02.3',
    title: 'Síntesis de hallazgos',
    opportunities: [
      {
        title: 'Descubrir mejor',
        text: 'Una navegación más clara para encontrar lo que se antoja.'
      },
      {
        title: 'Personalizar sin complicaciones',
        text: 'Más claridad en cada elección.'
      },
      {
        title: 'Hacer protagonista al producto',
        text: 'Una experiencia visual más atractiva.'
      }
    ],
    direction:
      'La dirección de diseño debe facilitar descubrir, elegir y personalizar, combinando claridad funcional y una propuesta visual atractiva.'
  },
  concept: {
    number: '03',
    name: 'La experiencia propuesta',
    subtitle: '03.1',
    verticalTitle: 'Concepto',
    title: 'Una forma más sencilla de elegir y personalizar',
    text: 'La app convierte la elección de una pizza en algo sencillo, visual y flexible: descubrir productos, consultar sus características, personalizarlos de forma intuitiva y entender cómo cada elección cambia el precio.',
    principlesTitle: 'Principios',
    principles: [
      'Exploración intuitiva',
      'Personalización guiada',
      'Precios transparentes',
      'Diseño centrado en el producto'
    ],
    synthesis: ['Descubrir.', 'Elegir.', 'Personalizar.', 'Disfrutar.'],
    photoLabel: 'Fotografía de producto, acercamiento al queso'
  },
  persona: {
    subtitle: '03.2 · Persona',
    name: 'John Martínez',
    portraitLabel: 'Retrato ilustrado de John',
    facts: [
      { title: 'Edad', text: '27 años' },
      { title: 'Ocupación', text: 'Marketing digital' },
      { title: 'Ubicación', text: 'Bogotá' }
    ],
    context:
      'Joven, con poco tiempo libre, pide comida a domicilio con frecuencia y se mueve con facilidad en las apps.',
    note: 'Persona conceptual y ficticia: orienta decisiones, no sale de entrevistas reales.'
  },
  journey: {
    subtitle: '03.3 · Customer Journey Map',
    title: 'Del antojo al pedido',
    stages: [
      'Surge la necesidad',
      'Explora opciones',
      'Elige y personaliza',
      'Revisa el pedido',
      'Finaliza la compra'
    ],
    note: 'La curva emocional y las fricciones son hipótesis de diseño, no datos de participantes.'
  },
  architecture: {
    subtitle: '03.4',
    title: 'Arquitectura de información',
    sections: [
      {
        title: 'Inicio',
        items: ['Promociones', 'Destacados', 'Combos', 'Acceso al menú']
      },
      {
        title: 'Menú',
        items: [
          'Pizzas y especiales',
          'Mitad y mitad',
          'Combos y acompañamientos',
          'Bebidas y postres'
        ]
      },
      {
        title: 'Detalle',
        items: ['Fotografía', 'Ingredientes', 'Tamaños', 'Precio base']
      },
      {
        title: 'Personalización',
        items: ['Tamaño', 'Ingredientes', 'Extras con costo', 'Instrucciones']
      },
      {
        title: 'Carrito',
        items: ['Productos', 'Cantidades', 'Adicionales', 'Total']
      },
      { title: 'Confirmación', items: ['Confirmación visual del pedido'] }
    ],
    navigation:
      'Navegación principal: Inicio, Menú y Carrito. El detalle y la personalización son pasos del flujo.'
  },
  flows: {
    subtitle: '03.5',
    title: 'Flujos principales',
    items: [
      {
        number: '01',
        title: 'Descubrir y elegir una pizza',
        steps: [
          'Explora el menú o busca',
          'Abre el detalle',
          'Revisa foto, ingredientes, tamaños y precio',
          'Decide si es la que quiere'
        ]
      },
      {
        number: '02',
        title: 'Personalizar y agregar al carrito',
        steps: [
          'Parte de la receta original',
          'Elige el tamaño',
          'Quita ingredientes y suma extras',
          'Revisa el precio y agrega'
        ]
      },
      {
        number: '03',
        title: 'Revisar y confirmar el pedido',
        steps: [
          'Abre el carrito',
          'Verifica productos y precios',
          'Edita, cambia cantidades o elimina',
          'Confirma el pedido'
        ]
      }
    ],
    note: 'La confirmación es un estado visual del prototipo: no hay pago, dirección ni envío real.'
  },
  visual: {
    number: '04',
    name: 'La exploración visual',
    title: 'Juvenil, divertida y con inspiración retro',
    personality: [
      'Fondos en blanco hueso',
      'Titulares con carácter',
      'Sellos, stickers e ilustraciones',
      'La mascota como acento'
    ],
    paletteTitle: 'Paleta',
    palette: [
      { name: 'Navy Blue', hex: '#002B8F' },
      { name: 'Royal Blue', hex: '#0D47C9' },
      { name: 'Electric Blue', hex: '#2563EB' },
      { name: 'Bright Orange', hex: '#FF5A00' },
      { name: 'Soft Orange', hex: '#FF7A1A' },
      { name: 'Off White', hex: '#F4F4F4' },
      { name: 'Dark Gray', hex: '#1E1E1E' }
    ],
    paletteNote:
      'Tres azules para la estructura, dos naranjas para la energía y la acción, y blanco hueso y gris oscuro para el contraste.',
    typeTitle: 'Tipografía',
    typefaces: [
      { name: 'Titan One', role: 'Logotipo', sample: 'Sono Pizza' },
      { name: 'Bowlby One SC', role: 'Titulares', sample: 'Del antojo' },
      {
        name: 'DM Sans',
        role: 'Interfaz, precios y navegación',
        sample: 'Agrega al carrito'
      }
    ],
    brandTitle: 'Logotipo y mascota',
    logoLabel: 'Wordmark SONO PIZZA',
    mascotText:
      'Una mascota tipo sticker: gorra, sonrisa, lunar y una porción de pizza. Aparece en momentos puntuales, no en todas las pantallas.',
    photographyTitle: 'Fotografía',
    photography: [
      'Cenitales para el catálogo',
      'Acercamientos para queso y texturas',
      'Otros ángulos cuando muestran mejor el producto'
    ]
  }
};
