import { cn } from '@/lib/utils';

import type { PetrideSpecies } from '../../types/petride.types';
import { PetrideSpeciesIcon } from '../atoms/petride-species-icon';

const SPECIES: readonly PetrideSpecies[] = ['Perro', 'Gato'];

type PetrideSpeciesPickerProps = {
  label: string;
  selected: PetrideSpecies;
};

// Perro o gato, con su ícono. Filtra las razas y ajusta los íconos del
// registro
export function PetrideSpeciesPicker({
  label,
  selected
}: PetrideSpeciesPickerProps) {
  return (
    <div className="petride-field">
      <span className="petride-field__label">{label}</span>
      <span className="petride-species" role="radiogroup" aria-label={label}>
        {SPECIES.map(value => {
          const isOn = value === selected;
          return (
            <span
              key={value}
              role="radio"
              aria-checked={isOn}
              className={cn(
                'petride-species__option',
                isOn && 'petride-species__option--on'
              )}
            >
              <PetrideSpeciesIcon
                species={value}
                className="petride-species__icon"
              />
              <span className="petride-species__name">{value}</span>
            </span>
          );
        })}
      </span>
    </div>
  );
}
