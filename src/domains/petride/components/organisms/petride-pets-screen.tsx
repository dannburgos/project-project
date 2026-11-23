import {
  PETRIDE_NEW_PET,
  PETRIDE_PETS_AFTER,
  PETRIDE_PETS_BEFORE
} from '../../example-pets';
import { petrideMessages } from '../../messages';
import type { PetridePetsVariant } from '../../types/petride.types';
import { PetrideAddPetCard } from '../molecules/petride-add-pet-card';
import { PetridePetRow } from '../molecules/petride-pet-row';

type PetridePetsScreenProps = {
  variant?: PetridePetsVariant;
};

// Mis mascotas: la lista antes del registro y con la nueva mascota marcada
export function PetridePetsScreen({
  variant = 'list'
}: PetridePetsScreenProps) {
  const { list } = petrideMessages;
  const pets = variant === 'updated' ? PETRIDE_PETS_AFTER : PETRIDE_PETS_BEFORE;

  return (
    <div className="petride-screen petride-screen--tabbed">
      <header className="petride-top">
        <h1 className="petride-top__title">{list.title}</h1>
      </header>

      <div className="petride-screen__body">
        <ul className="petride-pets">
          {pets.map(pet => (
            <PetridePetRow
              key={pet.id}
              pet={pet}
              isNew={variant === 'updated' && pet.id === PETRIDE_NEW_PET.id}
            />
          ))}
          <PetrideAddPetCard />
        </ul>
      </div>
    </div>
  );
}
