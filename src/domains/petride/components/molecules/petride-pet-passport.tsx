import { Cake, Cat, Dog, MessageCircle, PawPrint } from 'lucide-react';

import { petrideMessages } from '../../messages';
import { getPetrideStage } from '../../petride-pet-profile.util';
import { formatPetrideAge } from '../../petride-template.util';
import type { PetridePet } from '../../types/petride.types';

type PetridePetPassportProps = {
  pet: PetridePet;
  sizeRange: string;
};

// Carné de viaje sobre la foto: el nombre con un sello, una barra de cristal
// sutil con tamaño, edad y convivencia, y la nota para el conductor
export function PetridePetPassport({
  pet,
  sizeRange
}: PetridePetPassportProps) {
  const { pass, list } = petrideMessages;
  const Icon = pet.species === 'Gato' ? Cat : Dog;
  const age = pet.age ?? 1;

  return (
    <article className="petride-passport">
      <div className="petride-passport__id">
        <div>
          <span className="petride-passport__eyebrow">{pass.eyebrow}</span>
          <h2 className="petride-passport__name">{pet.name}</h2>
          <span className="petride-passport__breed">
            {pet.breed} · {pet.species}
          </span>
        </div>
        <span className="petride-passport__stamp">
          <PawPrint aria-hidden="true" />
          {pass.stamp}
        </span>
      </div>

      <dl className="petride-passport__stats">
        <div className="petride-passport__stat">
          <Icon aria-hidden="true" />
          <dt className="sr-only">{pass.sizeLabel}</dt>
          <dd>
            <strong>{pet.size}</strong>
            <span>{sizeRange}</span>
          </dd>
        </div>
        <div className="petride-passport__stat">
          <Cake aria-hidden="true" />
          <dt className="sr-only">{pass.ageLabel}</dt>
          <dd>
            <strong>{formatPetrideAge(age, list)}</strong>
            <span>{pet.stage ?? getPetrideStage(age)}</span>
          </dd>
        </div>
        <div className="petride-passport__stat">
          <PawPrint aria-hidden="true" />
          <dt className="sr-only">{pass.friendlyLabel}</dt>
          <dd>
            <strong>{pet.isFriendly ? pass.friendly : pass.notFriendly}</strong>
            <span>
              {pet.isAssistance ? pass.withAssistance : pass.noAssistance}
            </span>
          </dd>
        </div>
      </dl>

      {pet.notes && (
        <p className="petride-passport__note">
          <MessageCircle aria-hidden="true" />
          {pet.notes}
        </p>
      )}
    </article>
  );
}
