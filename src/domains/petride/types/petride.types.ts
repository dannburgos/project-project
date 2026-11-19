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
