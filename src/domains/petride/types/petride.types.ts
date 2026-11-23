export type PetrideSpecies = 'Perro' | 'Gato';

export type PetrideSize = 'Pequeña' | 'Mediana' | 'Grande';

export type PetrideSex = 'Hembra' | 'Macho';

export type PetrideStage = 'Cachorro' | 'Adulto' | 'Senior';

export type PetridePet = {
  id: string;
  name: string;
  photo: string;
  species: PetrideSpecies;
  sex: PetrideSex;
  breed: string;
  size: PetrideSize;
  weight: number;
  // Opcionales: etapa, edad en años y si es animal de asistencia
  stage?: PetrideStage;
  age?: number;
  isAssistance: boolean;
  // Si se lleva bien con otras mascotas (viajes con varias)
  isFriendly: boolean;
  notes: string;
};

export type PetrideNavKey = 'home' | 'pets' | 'trip' | 'profile';

export type PetridePetsVariant = 'list' | 'updated';

// Microinteracciones de una pantalla en el caso: quieta y lista, o en marcha
export type PetrideMotionPhase = 'idle' | 'play';

// Flujo 2: un lugar sugerido al buscar el destino
export type PetridePlace = {
  id: string;
  name: string;
  // Cruce de calles y barrio
  address: string;
  area: string;
  distance: string;
  // Minutos en carro desde el origen
  minutes: number;
};

// Flujo 2: quien conduce el viaje asignado
export type PetrideDriver = {
  name: string;
  photo: string;
  rating: string;
  plate: string;
  carModel: string;
  carColor: string;
  trips: number;
  yearsOnApp: number;
  arrivalMinutes: number;
};

// Flujo 2: un lugar guardado (casa, veterinaria, último viaje)
export type PetrideSavedPlace = {
  id: string;
  kind: 'home' | 'vet' | 'park';
  name: string;
  detail: string;
};

// Flujo 2: una idea para el próximo viaje en Inicio
export type PetrideTripIdea = {
  id: string;
  kind: 'park' | 'vet' | 'daycare';
  title: string;
  place: string;
  minutes: number;
};
