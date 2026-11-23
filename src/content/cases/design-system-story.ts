import type { DesignSystemStory } from '@/content/design-system-story.types';

// Caso del sistema de diseño. Todo el contenido es de ejemplo hasta que Dann
// defina el proyecto real (nombre, marca y decisiones).
export const designSystemStory: DesignSystemStory = {
  labels: {
    example: 'Ejemplo',
    pending:
      'Contenido de ejemplo: se reemplaza cuando el sistema esté definido.',
    topicsNav: 'Temas del sistema de diseño',
    goTo: 'Ir a'
  },
  hero: {
    eyebrow: 'Sistema de diseño',
    title: 'Un sistema para diseñar y construir con el mismo lenguaje.',
    text: 'De los colores a la voz, cada pieza del sistema es la base de cómo se ve, se mueve y suena el producto.',
    hint: 'Desplázate para armarlo',
    mark: 'DS'
  },
  docsIntro: {
    title: 'Documentación',
    text: 'Cada tema del mosaico, con sus reglas y ejemplos de uso.'
  },
  topics: [
    {
      id: 'color',
      group: 'Fundamentos',
      name: 'Color',
      summary:
        'Una paleta con roles claros: superficie, texto, acento y estados.'
    },
    {
      id: 'voice',
      group: 'Contenido',
      name: 'Voz y tono',
      summary: 'Cómo habla el producto: claro, cercano y directo.'
    },
    {
      id: 'typography',
      group: 'Fundamentos',
      name: 'Tipografía',
      summary: 'Una familia y una escala corta para toda la jerarquía.'
    },
    {
      id: 'iconography',
      group: 'Fundamentos',
      name: 'Iconografía',
      summary: 'Íconos de trazo, en una grilla de 24 px.'
    },
    {
      id: 'spacing',
      group: 'Fundamentos',
      name: 'Espaciado y grilla',
      summary: 'Una escala en múltiplos de 4 y una grilla de 12 columnas.'
    },
    {
      id: 'components',
      group: 'Componentes',
      name: 'Componentes',
      summary: 'Piezas reutilizables con todos sus estados.'
    },
    {
      id: 'motion',
      group: 'Experiencia',
      name: 'Motion',
      summary: 'Duraciones y curvas que dan ritmo sin distraer.'
    },
    {
      id: 'accessibility',
      group: 'Experiencia',
      name: 'Accesibilidad',
      summary:
        'Criterios para que el producto funcione para todas las personas.'
    }
  ],
  color: {
    swatches: [
      { name: 'Tinta', hex: '#161615', role: 'Texto principal' },
      { name: 'Grafito', hex: '#4a4a46', role: 'Texto secundario' },
      { name: 'Niebla', hex: '#c9c9c3', role: 'Bordes y divisores' },
      { name: 'Hueso', hex: '#f2f2ee', role: 'Superficies' },
      { name: 'Señal', hex: '#ffd23f', role: 'Acento y foco' }
    ]
  },
  typography: {
    family: 'Space Grotesk',
    steps: [
      { name: 'Display', size: '64 px', sample: 'Diseñar con sistema' },
      { name: 'Título', size: '32 px', sample: 'Un lenguaje compartido' },
      { name: 'Subtítulo', size: '24 px', sample: 'Reglas claras y simples' },
      {
        name: 'Cuerpo',
        size: '16 px',
        sample: 'El texto de lectura nunca baja de 16 px.'
      }
    ]
  },
  iconography: {
    names: [
      'Inicio',
      'Buscar',
      'Perfil',
      'Ajustes',
      'Alerta',
      'Favorito',
      'Mensaje',
      'Calendario'
    ],
    rules: [
      { title: 'Trazo de 2 px', text: 'Esquinas redondeadas y sin rellenos.' },
      { title: 'Grilla de 24 px', text: 'Con 2 px de margen de seguridad.' },
      {
        title: 'Siempre con nombre',
        text: 'Un ícono solo lleva su etiqueta accesible.'
      }
    ]
  },
  spacing: {
    steps: [4, 8, 12, 16, 24, 32, 48, 64],
    rules: [
      {
        title: 'Múltiplos de 4',
        text: 'Todos los espacios salen de la escala.'
      },
      {
        title: '12 columnas',
        text: 'Con márgenes de 16 px en celular y 48 px en escritorio.'
      }
    ]
  },
  components: {
    buttons: ['Principal', 'Secundario', 'Texto'],
    states: ['Normal', 'Hover', 'Foco', 'Deshabilitado'],
    inputLabel: 'Correo electrónico',
    inputPlaceholder: 'nombre@empresa.com',
    inputHelp: 'Te enviaremos la confirmación a este correo.'
  },
  voice: {
    principles: [
      {
        title: 'Claro',
        text: 'Una idea por frase y las palabras de quien lo usa.'
      },
      { title: 'Cercano', text: 'Hablamos de tú, sin tecnicismos.' },
      { title: 'Directo', text: 'Lo importante va primero.' }
    ],
    examples: [
      { isDo: true, label: 'Sí', text: 'Guardamos tus cambios.' },
      {
        isDo: false,
        label: 'No',
        text: '¡La operación se ha completado exitosamente!'
      }
    ]
  },
  motion: {
    tokens: [
      { name: 'Rápido', value: '150 ms', use: 'Hover y cambios de color' },
      { name: 'Base', value: '300 ms', use: 'Menús y tarjetas' },
      { name: 'Lento', value: '600 ms', use: 'Entradas de pantalla' }
    ]
  },
  accessibility: {
    rules: [
      { title: 'Contraste 4.5:1', text: 'Para todo el texto de lectura.' },
      {
        title: 'Foco visible',
        text: 'Un anillo de 2 px en todo lo que se puede usar.'
      },
      { title: 'Áreas de 44 px', text: 'Como mínimo en lo que se toca.' },
      {
        title: 'Menos movimiento',
        text: 'Se respeta la preferencia del sistema.'
      }
    ]
  }
};
