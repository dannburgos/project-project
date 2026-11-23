import { ChevronLeft, Pencil } from 'lucide-react';

import { PETRIDE_NEW_PET, PETRIDE_NEW_PET_COVER } from '../../example-pets';
import { petrideMessages } from '../../messages';
import { PETRIDE_SIZES } from '../../petride-pet-profile.util';
import type { PetridePet } from '../../types/petride.types';
import { PetrideButton } from '../atoms/petride-button';
import { PetridePetPassport } from '../molecules/petride-pet-passport';

// Revisar antes de guardar: la foto de la mascota llena la pantalla y el
// carné de viaje va encima, sutil, con todo lo diligenciado
export function PetridePetReviewScreen() {
  const { review, common, steps } = petrideMessages;
  const pet: PetridePet = PETRIDE_NEW_PET;
  const ranges =
    pet.species === 'Gato' ? steps.sizeRanges.cat : steps.sizeRanges.dog;
  const sizeRange = ranges[PETRIDE_SIZES.indexOf(pet.size)];

  return (
    <div className="petride-screen petride-review-photo">
      <img
        className="petride-review-photo__image"
        src={PETRIDE_NEW_PET_COVER}
        alt={pet.name}
      />

      <header className="petride-header petride-review-photo__header">
        <button
          type="button"
          className="petride-header__back petride-header__back--glass"
          aria-label={common.back}
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <h1 className="petride-header__title">{review.title}</h1>
      </header>

      <div className="petride-review-photo__content">
        <PetridePetPassport pet={pet} sizeRange={sizeRange} />
      </div>

      <footer className="petride-screen__footer">
        <PetrideButton isFull>{review.save}</PetrideButton>
        <PetrideButton variant="ghost-light" isFull>
          <Pencil aria-hidden="true" />
          {review.edit}
        </PetrideButton>
      </footer>
    </div>
  );
}
