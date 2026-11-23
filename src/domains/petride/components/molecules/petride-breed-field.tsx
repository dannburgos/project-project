import { Cat, Check, Dog, Search } from 'lucide-react';

import { cn } from '@/lib/utils';

import type { PetrideSpecies } from '../../types/petride.types';

type PetrideBreedFieldProps = {
  label: string;
  query: string;
  options: readonly string[];
  selected: string;
  species: PetrideSpecies;
  // Abierto: buscando, con la lista de coincidencias. Cerrado: raza elegida
  isOpen?: boolean;
};

// Raza con buscador: muestra solo razas de la especie elegida y Mestizo
// siempre está al final de las opciones
export function PetrideBreedField({
  label,
  query,
  options,
  selected,
  species,
  isOpen = false
}: PetrideBreedFieldProps) {
  const Icon = species === 'Gato' ? Cat : Dog;

  return (
    <div className="petride-field petride-breed">
      <span className="petride-field__label">{label}</span>
      {isOpen ? (
        <span className="petride-field__box petride-field__box--focus">
          <Search className="petride-field__icon" aria-hidden="true" />
          <span className="petride-field__value">{query}</span>
          <span className="petride-field__caret" />
        </span>
      ) : (
        <span className="petride-field__box">
          <span className="petride-field__value">{selected}</span>
          <Check className="petride-field__done" aria-hidden="true" />
        </span>
      )}
      {isOpen && (
        <ul className="petride-options" role="listbox" aria-label={label}>
          {options.map(option => {
            const isOn = option === selected;
            return (
              <li
                key={option}
                role="option"
                aria-selected={isOn}
                className={cn('petride-option', isOn && 'petride-option--on')}
              >
                <Icon aria-hidden="true" />
                {option}
                {isOn && (
                  <Check className="petride-option__check" aria-hidden="true" />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
