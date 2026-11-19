import type { PetridePet } from './types/petride.types';

// Mascotas de ejemplo del prototipo. Los nombres y datos son de muestra; las
// fotos son libres de derechos
export const PETRIDE_EXAMPLE_PETS = {
  toby: {
    id: 'toby',
    name: 'Toby',
    photo: '/petride/pets/toby.jpg',
    species: 'Perro',
    sex: 'Macho',
    breed: 'Pinscher miniatura',
    size: 'Pequeña',
    weight: 5,
    stage: 'Adulto',
    age: 4,
    isAssistance: true,
    isFriendly: true,
    notes: ''
  },
  luna: {
    id: 'luna',
    name: 'Luna',
    photo: '/petride/pets/luna.jpg',
    species: 'Gato',
    sex: 'Hembra',
    breed: 'Siamés',
    size: 'Pequeña',
    weight: 4,
    stage: 'Senior',
    age: 11,
    isAssistance: false,
    isFriendly: true,
    notes: ''
  },
  kira: {
    id: 'kira',
    name: 'Kira',
    photo: '/petride/pets/kira.jpg',
    species: 'Perro',
    sex: 'Hembra',
    breed: 'Basenji',
    size: 'Mediana',
    weight: 11,
    stage: 'Adulto',
    age: 2,
    isAssistance: false,
    isFriendly: true,
    notes: 'Se marea en viajes largos.'
  }
} as const satisfies Record<string, PetridePet>;

// Lo que ve la cámara al registrar a Kira (la foto completa, sin recortar)
export const PETRIDE_CAMERA_PREVIEW = '/petride/pets/kira-camera.jpg';

// Foto completa de Kira (cabeza y pecho) para las vistas a pantalla completa
export const PETRIDE_NEW_PET_COVER = '/petride/pets/kira-full.jpg';

// La que se registra en el recorrido
export const PETRIDE_NEW_PET = PETRIDE_EXAMPLE_PETS.kira;

export const PETRIDE_PETS_BEFORE = [
  PETRIDE_EXAMPLE_PETS.toby,
  PETRIDE_EXAMPLE_PETS.luna
] as const;

export const PETRIDE_PETS_AFTER = [
  PETRIDE_EXAMPLE_PETS.toby,
  PETRIDE_EXAMPLE_PETS.luna,
  PETRIDE_EXAMPLE_PETS.kira
] as const;
