import type {
  PetrideSize,
  PetrideSpecies,
  PetrideStage
} from './types/petride.types';

// Límites de peso (kg) entre tamaños por especie. Son una propuesta del
// prototipo: el documento de PetRide no define rangos
const SIZE_LIMITS: Record<PetrideSpecies, readonly [number, number]> = {
  Perro: [10, 25],
  Gato: [4, 6]
};

const SIZES: readonly PetrideSize[] = ['Pequeña', 'Mediana', 'Grande'];

// El tamaño sale del peso, así no se pregunta dos veces
export function getPetrideSize(
  species: PetrideSpecies,
  weight: number
): PetrideSize {
  const [small, medium] = SIZE_LIMITS[species];
  if (weight <= small) return SIZES[0];
  if (weight <= medium) return SIZES[1];
  return SIZES[2];
}

// La etapa sale de la edad: hasta 1 año cachorro, 8 o más senior
export function getPetrideStage(age: number): PetrideStage {
  if (age <= 1) return 'Cachorro';
  if (age >= 8) return 'Senior';
  return 'Adulto';
}

export const PETRIDE_SIZES = SIZES;
