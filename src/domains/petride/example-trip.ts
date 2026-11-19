import { PETRIDE_EXAMPLE_PETS } from './example-pets';
import type {
  PetrideDriver,
  PetridePlace,
  PetrideSavedPlace,
  PetrideTripIdea
} from './types/petride.types';

// Viaje de ejemplo del flujo 2: de Chapinero a la zona norte de Bogotá. Los
// lugares y sus cruces son reales; distancias, tiempos, tarifa, capacidad y
// conductora son datos de muestra
export const PETRIDE_PLACE_QUERY = 'Parque';

export const PETRIDE_PLACE_SUGGESTIONS: PetridePlace[] = [
  {
    id: 'parque-93',
    name: 'Parque de la 93',
    address: 'Calle 93A con Cra. 13',
    area: 'Chicó Norte',
    distance: '3,2 km',
    minutes: 9
  },
  {
    id: 'parque-virrey',
    name: 'Parque El Virrey',
    address: 'Calle 88 con Cra. 15',
    area: 'El Virrey',
    distance: '2,6 km',
    minutes: 8
  },
  {
    id: 'parque-japon',
    name: 'Parque Japón',
    address: 'Calle 87 con Cra. 9',
    area: 'El Retiro',
    distance: '1,8 km',
    minutes: 6
  },
  {
    id: 'parque-usaquen',
    name: 'Parque de Usaquén',
    address: 'Cra. 6 con Calle 119',
    area: 'Usaquén',
    distance: '5,6 km',
    minutes: 15
  }
];

export const PETRIDE_TRIP_DESTINATION = PETRIDE_PLACE_SUGGESTIONS[0];

// Mascotas que viajan y las que se quedan
export const PETRIDE_TRIP_PETS = [
  PETRIDE_EXAMPLE_PETS.toby,
  PETRIDE_EXAMPLE_PETS.kira
];

export const PETRIDE_HOME_PETS = [
  PETRIDE_EXAMPLE_PETS.toby,
  PETRIDE_EXAMPLE_PETS.luna,
  PETRIDE_EXAMPLE_PETS.kira
];

export const PETRIDE_TRIP = {
  // Se pide a las 9:41 a. m. (la hora del celular) y son 16 min de viaje
  arrivalTime: '9:57 a. m.',
  minutes: 16,
  distance: '3,2',
  price: '$13.400',
  // Puestos para mascotas del vehículo
  petCapacity: 3
};

export const PETRIDE_DRIVER: PetrideDriver = {
  name: 'Laura',
  photo: '/petride/trip/driver.jpg',
  rating: '4,9',
  plate: 'JKL 482',
  carModel: 'Renault Duster',
  carColor: 'Gris',
  trips: 312,
  yearsOnApp: 2,
  arrivalMinutes: 4
};

// Lugares guardados para pedir más rápido desde Inicio y al buscar destino
export const PETRIDE_SAVED_PLACES: PetrideSavedPlace[] = [
  { id: 'home', kind: 'home', name: 'Casa', detail: 'Cra. 7 # 72-10' },
  { id: 'vet', kind: 'vet', name: 'Veterinaria', detail: 'Usaquén' },
  { id: 'last', kind: 'park', name: 'Parque de la 93', detail: 'Último viaje' }
];

// Nombres de calles del mapa ilustrado (coordenadas en el mapa de 390 x 844)
export const PETRIDE_MAP_STREETS = [
  { name: 'Calle 93', x: 104, y: 259, isVertical: false },
  { name: 'Calle 90', x: 316, y: 447, isVertical: false },
  { name: 'Cra. 15', x: 93, y: 246, isVertical: true }
];

// Calificación de ejemplo al terminar el viaje
type PetrideRatingExample = {
  // Cara elegida (1 a 5); sin elegir, el botón de enviar queda apagado
  score: number | null;
  selectedTags: number[];
  // Propina elegida (índice en rating.tips); es opcional y arranca sin elegir
  selectedTip: number | null;
};

export const PETRIDE_RATING: PetrideRatingExample = {
  score: 4,
  selectedTags: [0, 2],
  selectedTip: null
};

// Desde esta calificación las etiquetas preguntan qué destacas; por debajo,
// qué falló
export const PETRIDE_RATING_POSITIVE_FROM = 4;

// Ideas para el próximo viaje en Inicio. Los lugares son reales; los planes,
// distancias y minutos son de muestra
export const PETRIDE_TRIP_IDEAS: PetrideTripIdea[] = [
  {
    id: 'park',
    kind: 'park',
    title: 'Tarde de parque',
    place: 'Parque El Virrey',
    minutes: 8
  },
  {
    id: 'vet',
    kind: 'vet',
    title: 'Control en la veterinaria',
    place: 'Usaquén',
    minutes: 15
  },
  {
    id: 'daycare',
    kind: 'daycare',
    title: 'Día de guardería',
    place: 'Cedritos',
    minutes: 20
  }
];
