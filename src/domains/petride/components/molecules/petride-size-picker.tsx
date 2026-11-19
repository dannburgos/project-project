import { cn } from '@/lib/utils';

import { PETRIDE_SIZES } from '../../petride-pet-profile.util';
import type { PetrideSize, PetrideSpecies } from '../../types/petride.types';
import { PetrideSpeciesIcon } from '../atoms/petride-species-icon';

type PetrideSizePickerProps = {
  label: string;
  species: PetrideSpecies;
  selected: PetrideSize;
  ranges: readonly string[];
};

// Tamaño con siluetas que crecen y su rango de peso. Se marca solo según el
// peso; tocar otro lo corrige
export function PetrideSizePicker({
  label,
  species,
  selected,
  ranges
}: PetrideSizePickerProps) {
  return (
    <span className="petride-sizes" role="radiogroup" aria-label={label}>
      {PETRIDE_SIZES.map((size, index) => {
        const isOn = size === selected;
        return (
          <span
            key={size}
            role="radio"
            aria-checked={isOn}
            className={cn('petride-size', isOn && 'petride-size--on')}
          >
            <PetrideSpeciesIcon
              species={species}
              className={cn(
                'petride-size__icon',
                `petride-size__icon--${index}`
              )}
            />
            <span className="petride-size__name">{size}</span>
            <span className="petride-size__range">{ranges[index]}</span>
          </span>
        );
      })}
    </span>
  );
}
