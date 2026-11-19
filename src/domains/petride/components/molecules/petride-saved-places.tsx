import { House, Stethoscope, Trees } from 'lucide-react';

import { PETRIDE_SAVED_PLACES } from '../../example-trip';
import type { PetrideSavedPlace } from '../../types/petride.types';

const ICONS: Record<PetrideSavedPlace['kind'], typeof House> = {
  home: House,
  vet: Stethoscope,
  park: Trees
};

type PetrideSavedPlacesProps = {
  label: string;
};

// Lugares guardados en fila: casa, veterinaria y el último viaje, para pedir
// sin escribir. La fila se corta al borde para invitar a deslizar
export function PetrideSavedPlaces({ label }: PetrideSavedPlacesProps) {
  return (
    <ul className="petride-saved" aria-label={label}>
      {PETRIDE_SAVED_PLACES.map(place => {
        const Icon = ICONS[place.kind];
        return (
          <li key={place.id} className="petride-saved__item">
            <span className="petride-saved__icon" aria-hidden="true">
              <Icon />
            </span>
            <span className="petride-saved__text">
              <strong>{place.name}</strong>
              {place.detail}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
