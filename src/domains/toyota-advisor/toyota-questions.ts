import type {
  ToyotaAnswerOption,
  ToyotaQuestion
} from './types/toyota-advisor.types';

const UNSURE: ToyotaAnswerOption = {
  id: 'unsure',
  label: 'Aún no lo sé',
  isUnsure: true
};

const NO_PREFERENCE: ToyotaAnswerOption = {
  id: 'unsure',
  label: 'Sin preferencia',
  isUnsure: true
};

// Las 4 preguntas de la asesoría (antes 9, integradas el 25 nov 2026). Cada
// opción dice qué etiqueta suma. Salieron «¿En qué momento estás?» y
// maletas, mercado y mascotas porque no cambiaban el resultado
export const TOYOTA_QUESTIONS: readonly ToyotaQuestion[] = [
  {
    id: 'use',
    number: 1,
    block: 'use',
    title: '¿Cómo te mueves?',
    help: 'Elige todas las que apliquen',
    parts: [
      {
        id: 'use',
        kind: 'multiple',
        options: [
          {
            id: 'city',
            label: 'Día a día en ciudad',
            icon: 'city',
            tag: 'city'
          },
          {
            id: 'family',
            label: 'Viajes en familia',
            icon: 'family',
            tag: 'space'
          },
          { id: 'highway', label: 'Carretera', icon: 'road' },
          {
            id: 'offroad',
            label: 'Destapado o terreno difícil',
            icon: 'terrain',
            tag: 'terrain'
          },
          {
            id: 'work',
            label: 'Trabajo o carga pesada',
            icon: 'cargo',
            tag: 'cargo'
          },
          {
            id: 'mixed',
            label: 'Un poco de todo',
            icon: 'versatility',
            tag: 'versatility'
          },
          UNSURE
        ]
      }
    ]
  },
  {
    id: 'car',
    number: 2,
    block: 'car',
    title: '¿Cómo te imaginas tu carro?',
    help: 'Tipo y motor son opcionales',
    parts: [
      {
        id: 'people',
        label: 'Personas que viajan, contándote a ti',
        kind: 'single',
        options: [
          { id: 'two', label: '1 o 2' },
          { id: 'five', label: '3 a 5' },
          { id: 'seven', label: '6 o más', tag: 'sevenSeats' },
          UNSURE
        ]
      },
      {
        id: 'body',
        label: 'Tipo de carro',
        kind: 'single',
        isOptional: true,
        options: [
          { id: 'car', label: 'Automóvil', icon: 'car', tag: 'car' },
          { id: 'suv', label: 'Camioneta o SUV', icon: 'car', tag: 'suv' },
          { id: 'pickup', label: 'Pick-up', icon: 'cargo', tag: 'pickup' },
          NO_PREFERENCE
        ]
      },
      {
        id: 'engine',
        label: 'Motor',
        kind: 'single',
        isOptional: true,
        options: [
          { id: 'hybrid', label: 'Híbrido', icon: 'hybrid', tag: 'hybrid' },
          {
            id: 'combustion',
            label: 'Gasolina o diésel',
            icon: 'saving',
            tag: 'combustion'
          },
          NO_PREFERENCE
        ]
      }
    ]
  },
  {
    id: 'priorities',
    number: 3,
    block: 'priorities',
    title: '¿Qué es lo que más te importa?',
    help: 'Elige hasta 3',
    parts: [
      {
        id: 'priorities',
        kind: 'upToThree',
        options: [
          { id: 'space', label: 'Espacio', icon: 'space', tag: 'space' },
          {
            id: 'comfort',
            label: 'Comodidad',
            icon: 'comfort',
            tag: 'comfort'
          },
          {
            id: 'safety',
            label: 'Seguridad',
            icon: 'shield',
            noScoreReason: 'Seguridad no suma puntos: los 6 modelos la cumplen.'
          },
          {
            id: 'saving',
            label: 'Ahorro de combustible',
            icon: 'saving',
            tag: 'saving'
          },
          {
            id: 'technology',
            label: 'Tecnología',
            icon: 'technology',
            tag: 'technology'
          },
          { id: 'power', label: 'Potencia', icon: 'power', tag: 'power' },
          {
            id: 'versatility',
            label: 'Versatilidad',
            icon: 'versatility',
            tag: 'versatility'
          },
          UNSURE
        ]
      }
    ]
  },
  {
    id: 'budget',
    number: 4,
    block: 'budget',
    title: '¿Cuánto tienes pensado invertir?',
    help: 'Usamos el precio sugerido de cada modelo',
    isOptional: true,
    parts: [
      {
        id: 'budget',
        kind: 'single',
        isOptional: true,
        options: [
          { id: 'upTo100', label: 'Hasta $100 millones' },
          { id: 'from100to150', label: '$100 a $150 millones' },
          { id: 'from150to220', label: '$150 a $220 millones' },
          { id: 'over220', label: 'Más de $220 millones' },
          { id: 'unsure', label: 'Prefiero no decirlo', isUnsure: true }
        ]
      }
    ]
  }
];

// Todas las partes, en orden (para sumar etiquetas y armar el perfil)
export const TOYOTA_QUESTION_PARTS = TOYOTA_QUESTIONS.flatMap(
  question => question.parts
);

// Las respuestas de la persona de ejemplo del tablero: familia en ciudad y
// carretera, 3 a 5 personas, SUV híbrida, hasta $150 millones (escenario
// «Coincidencia total» de la ficha de datos)
export const TOYOTA_SAMPLE_ANSWERS = {
  use: ['city', 'family', 'highway'],
  people: ['five'],
  body: ['suv'],
  engine: ['hybrid'],
  priorities: ['space', 'saving'],
  budget: ['from100to150']
} as const;
