import { cn } from '@/lib/utils';

import type { PetrideSpecies } from '../../types/petride.types';

type PetrideSpeciesIconProps = {
  species: PetrideSpecies;
  className?: string;
};

// Ícono de línea de un perro o un gato, sencillo y del mismo estilo: orejas
// con relleno (lima al elegirlo) y nariz llena. Toma el color del texto (currentColor)
export function PetrideSpeciesIcon({
  species,
  className
}: PetrideSpeciesIconProps) {
  if (species === 'Gato') {
    return (
      <svg
        className={cn('petride-species-icon', className)}
        viewBox="0 0 40 40"
        aria-hidden="true"
      >
        <path
          className="petride-species-icon__fill"
          d="M9.5 15.5 8 5.5l8 5M30.5 15.5 32 5.5l-8 5"
        />
        <path d="M8 5.5 9.6 16.2A12.5 12.5 0 0 0 7.5 23c0 7.4 5.6 12 12.5 12s12.5-4.6 12.5-12c0-2.5-.8-4.8-2.1-6.8L32 5.5l-8.2 5.2A13.4 13.4 0 0 0 20 10c-1.3 0-2.6.2-3.8.7Z" />
        <path
          className="petride-species-icon__accent"
          d="M18.2 24.6h3.6L20 26.8Z"
        />
        <path d="M15 21.2v1.6M25 21.2v1.6M20 26.8v1.4c0 1.2-1.1 2-2.4 2M20 28.2c0 1.2 1.1 2 2.4 2M5 24.5l6 .6M5.5 28.5l5.8-1.4M35 24.5l-6 .6M34.5 28.5l-5.8-1.4" />
      </svg>
    );
  }

  return (
    <svg
      className={cn('petride-species-icon', className)}
      viewBox="0 0 40 40"
      aria-hidden="true"
    >
      <path d="M20 10.5a11.5 11.5 0 1 1 0 23 11.5 11.5 0 0 1 0-23Z" />
      <path
        className="petride-species-icon__fill"
        d="M13 12.5c-3.2-1.6-7 .4-7.6 4.6-.5 3.6.8 7 3.2 7.6 2 .5 3.6-1.2 4.2-4 .6-2.8.6-6.2.2-8.2ZM27 12.5c3.2-1.6 7 .4 7.6 4.6.5 3.6-.8 7-3.2 7.6-2 .5-3.6-1.2-4.2-4-.6-2.8-.6-6.2-.2-8.2Z"
      />
      <path d="M16.5 21.2v1.6M23.5 21.2v1.6" />
      <path
        className="petride-species-icon__accent"
        d="M18.2 25.4h3.6L20 27.6Z"
      />
      <path d="M20 27.6v1.2c0 1-.9 1.8-2 1.8M20 28.8c0 1 .9 1.8 2 1.8" />
    </svg>
  );
}
