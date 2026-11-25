import type {
  ToyotaBudgetRange,
  ToyotaModel
} from './types/toyota-advisor.types';

// Los seis modelos del prototipo con su precio sugerido de entrada (Toyota
// Colombia, vigente del 1 al 30 de noviembre de 2026) y sus etiquetas, tal
// como están en .claude/knowledge/toyota/ficha-datos-prototipo.md
export const TOYOTA_MODELS: readonly ToyotaModel[] = [
  {
    id: 'yaris',
    name: 'Yaris HB',
    body: 'Hatchback',
    category: 'Automóvil',
    seats: 5,
    engine: 'Híbrido 1.5 L',
    priceFrom: 89_900_000,
    tags: ['city', 'saving', 'comfort', 'car', 'hybrid']
  },
  {
    id: 'corolla',
    name: 'Corolla',
    body: 'Sedán',
    category: 'Automóvil',
    seats: 5,
    engine: 'Híbrido 1.8 L',
    priceFrom: 109_900_000,
    tags: ['city', 'saving', 'comfort', 'technology', 'car', 'hybrid']
  },
  {
    id: 'corollaCross',
    name: 'Corolla Cross',
    body: 'SUV compacta',
    category: 'Camioneta o SUV',
    seats: 5,
    engine: 'Híbrido 1.8 L',
    priceFrom: 139_900_000,
    tags: ['city', 'space', 'saving', 'comfort', 'technology', 'suv', 'hybrid']
  },
  {
    id: 'hilux',
    name: 'Hilux',
    body: 'Pick-up doble cabina',
    category: 'Pick-up',
    seats: 5,
    engine: 'Gasolina o diésel',
    priceFrom: 196_500_000,
    tags: ['cargo', 'terrain', 'power', 'versatility', 'pickup', 'combustion']
  },
  {
    id: 'rav4',
    name: 'RAV4',
    body: 'SUV mediana',
    category: 'Camioneta o SUV',
    seats: 5,
    engine: 'Híbrido 2.5 L',
    priceFrom: 207_500_000,
    tags: [
      'space',
      'saving',
      'comfort',
      'technology',
      'power',
      'versatility',
      'suv',
      'hybrid'
    ]
  },
  {
    id: 'fortuner',
    name: 'Fortuner',
    body: 'SUV grande, 3 filas',
    category: 'Camioneta o SUV',
    seats: 7,
    engine: 'Gasolina o diésel',
    priceFrom: 242_900_000,
    tags: [
      'sevenSeats',
      'space',
      'terrain',
      'comfort',
      'power',
      'versatility',
      'suv',
      'combustion'
    ]
  }
];

// Rangos de la pregunta 7. Entran los modelos cuyo precio «desde» no supera
// el tope del rango elegido
export const TOYOTA_BUDGET_RANGES: readonly ToyotaBudgetRange[] = [
  { id: 'upTo100', label: 'Hasta $100 millones', min: 0, max: 100_000_000 },
  {
    id: 'from100to150',
    label: '$100 a $150 millones',
    min: 100_000_000,
    max: 150_000_000
  },
  {
    id: 'from150to220',
    label: '$150 a $220 millones',
    min: 150_000_000,
    max: 220_000_000
  },
  { id: 'over220', label: 'Más de $220 millones', min: 220_000_000 }
];

// Escala de la regla de precios (en pesos)
export const TOYOTA_PRICE_SCALE = { min: 80_000_000, max: 260_000_000 };
