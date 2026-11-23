import { Ellipsis, HeartHandshake } from 'lucide-react';

import { petrideMessages } from '../../messages';
import {
  fillPetrideTemplate,
  formatPetrideAge
} from '../../petride-template.util';
import type { PetridePet } from '../../types/petride.types';
import { PetridePetPhoto } from '../atoms/petride-pet-photo';

type PetridePetRowProps = {
  pet: PetridePet;
  isNew?: boolean;
};

// Una mascota en la lista: foto (con franja si es de asistencia), nombre,
// raza, especie, etapa con edad, tamaño y peso. Tocarla abre su perfil; el
// menú ⋯ da acceso a editar
export function PetridePetRow({ pet, isNew = false }: PetridePetRowProps) {
  const { list } = petrideMessages;
  const ageText = pet.age ? formatPetrideAge(pet.age, list) : '';
  const stageText =
    pet.stage && ageText
      ? fillPetrideTemplate(list.petAge, { stage: pet.stage, age: ageText })
      : pet.stage || ageText;

  return (
    <li className="petride-pet-row" data-new={isNew || undefined}>
      <button
        type="button"
        className="petride-pet-row__open"
        aria-label={fillPetrideTemplate(list.open, { name: pet.name })}
      >
        <span className="petride-pet-row__media">
          <PetridePetPhoto src={pet.photo} name={pet.name} />
          {pet.isAssistance && (
            <span className="petride-pet-row__ribbon">
              <HeartHandshake aria-hidden="true" />
              {list.assistance}
            </span>
          )}
        </span>
        <span className="petride-pet-row__body">
          <span className="petride-pet-row__title">
            <span className="petride-pet-row__name">{pet.name}</span>
            {pet.breed && (
              <span className="petride-pet-row__breed">{pet.breed}</span>
            )}
          </span>
          <span className="petride-pet-row__chips">
            <span className="petride-tag">{pet.species}</span>
            {stageText && (
              <span className="petride-tag petride-tag--muted">
                {stageText}
              </span>
            )}
          </span>
          <span className="petride-pet-row__meta">
            {fillPetrideTemplate(list.petStats, {
              size: pet.size,
              weight: pet.weight
            })}
          </span>
        </span>
      </button>
      <button
        type="button"
        className="petride-pet-row__more"
        aria-label={fillPetrideTemplate(list.options, { name: pet.name })}
      >
        <Ellipsis aria-hidden="true" />
      </button>
    </li>
  );
}
