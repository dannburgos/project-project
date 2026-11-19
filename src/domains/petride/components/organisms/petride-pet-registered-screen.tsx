import { Cake, Car, Check, CircleCheck, Dog, PawPrint, X } from 'lucide-react';

import { PETRIDE_NEW_PET, PETRIDE_NEW_PET_COVER } from '../../example-pets';
import { petrideMessages } from '../../messages';
import { PETRIDE_SIZES } from '../../petride-pet-profile.util';
import { fillPetrideTemplate } from '../../petride-template.util';
import type { PetridePet } from '../../types/petride.types';
import { PetrideButton } from '../atoms/petride-button';

// Mascota registrada: póster nocturno con el nombre gigante detrás de la foto
// en arco, que se vuelve el pin de destino de una ruta desde el carro
export function PetridePetRegisteredScreen() {
  const { registered, steps, list, common } = petrideMessages;
  const pet: PetridePet = PETRIDE_NEW_PET;
  const ranges =
    pet.species === 'Gato' ? steps.sizeRanges.cat : steps.sizeRanges.dog;
  const sizeRange = ranges[PETRIDE_SIZES.indexOf(pet.size)];
  const name = { name: pet.name };

  return (
    <div className="petride-screen petride-poster">
      <span className="petride-poster__grid" aria-hidden="true" />
      <button
        type="button"
        className="petride-poster__close"
        aria-label={common.close}
      >
        <X aria-hidden="true" />
      </button>
      <span className="petride-poster__glow" aria-hidden="true" />
      <span
        className="petride-poster__ring petride-poster__ring--inner"
        aria-hidden="true"
      />
      <span
        className="petride-poster__ring petride-poster__ring--outer"
        aria-hidden="true"
      />
      <span className="petride-poster__word" aria-hidden="true">
        {pet.name}
      </span>

      <svg
        className="petride-poster__route"
        viewBox="0 0 390 560"
        aria-hidden="true"
      >
        <path
          className="petride-poster__route-glow"
          d="M54 476 C 40 410, 150 452, 195 404"
        />
        <path
          className="petride-poster__route-line"
          d="M54 476 C 40 410, 150 452, 195 404"
        />
      </svg>

      <span className="petride-poster__arch">
        <img src={PETRIDE_NEW_PET_COVER} alt={pet.name} />
      </span>
      <span className="petride-poster__pin" aria-hidden="true" />
      <span className="petride-poster__check" aria-hidden="true">
        <Check />
      </span>

      <span className="petride-poster__chip petride-poster__chip--size">
        <Dog aria-hidden="true" />
        {pet.size} · {sizeRange}
      </span>
      <span className="petride-poster__chip petride-poster__chip--friendly">
        <PawPrint aria-hidden="true" />
        {registered.friendly}
      </span>
      <span className="petride-poster__chip petride-poster__chip--stage">
        <Cake aria-hidden="true" />
        {pet.stage}
      </span>

      <span className="petride-poster__car" aria-hidden="true">
        <Car />
      </span>

      <div className="petride-poster__message">
        <span className="petride-poster__eyebrow">
          <CircleCheck aria-hidden="true" />
          {registered.eyebrow}
        </span>
        <h1 className="petride-poster__title">
          {fillPetrideTemplate(registered.title, name)}
        </h1>
      </div>

      <footer className="petride-poster__footer">
        <PetrideButton variant="lime" isFull>
          <Car aria-hidden="true" />
          {fillPetrideTemplate(registered.request, name)}
        </PetrideButton>
      </footer>
      <span className="sr-only">{list.title}</span>
    </div>
  );
}
