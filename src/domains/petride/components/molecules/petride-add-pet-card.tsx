import { PawPrint, Plus } from 'lucide-react';

import { petrideMessages } from '../../messages';

// Agregar mascota como un bloque lila de la marca al final de la lista, con
// el botón índigo y una huella grande de fondo
export function PetrideAddPetCard() {
  return (
    <li>
      <button type="button" className="petride-add-card">
        <PawPrint className="petride-add-card__paw" aria-hidden="true" />
        <span className="petride-add-card__icon">
          <Plus aria-hidden="true" />
        </span>
        {petrideMessages.list.add}
      </button>
    </li>
  );
}
