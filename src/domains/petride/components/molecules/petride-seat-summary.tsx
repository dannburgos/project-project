import { Plus } from 'lucide-react';

import { cn } from '@/lib/utils';

import { petrideMessages } from '../../messages';
import {
  fillPetrideTemplate,
  joinPetrideNames
} from '../../petride-template.util';
import type { PetridePet } from '../../types/petride.types';

type PetrideSeatSummaryProps = {
  pets: readonly PetridePet[];
  capacity: number;
};

// Puestos del vehículo en una frase: las fotos de quienes viajan apiladas
// (más un círculo punteado por cada puesto libre), sus nombres, cuánto
// espacio queda y el conteo. Debajo, una barra fina que se llena por puesto
export function PetrideSeatSummary({
  pets,
  capacity
}: PetrideSeatSummaryProps) {
  const { tripPets, trip } = petrideMessages;
  const free = Math.max(capacity - pets.length, 0);
  const freeText =
    free === 0
      ? tripPets.seatsFull
      : free === 1
        ? tripPets.seatsFreeOne
        : fillPetrideTemplate(tripPets.seatsFreeMany, { count: free });
  const seats = Array.from({ length: capacity }, (_, index) => index);

  return (
    <section
      className="petride-seats"
      aria-label={fillPetrideTemplate(tripPets.seatsCount, {
        count: pets.length,
        total: capacity
      })}
    >
      <div className="petride-seats__row">
        <span className="petride-seats__stack" aria-hidden="true">
          {pets.map(pet => (
            <img
              key={pet.id}
              className="petride-seats__photo"
              src={pet.photo}
              alt=""
            />
          ))}
          {seats.slice(pets.length).map(seat => (
            <span key={seat} className="petride-seats__free">
              <Plus />
            </span>
          ))}
        </span>
        <span className="petride-seats__text">
          <strong className="petride-seats__names">
            {joinPetrideNames(
              pets.map(pet => pet.name),
              trip.and
            )}
          </strong>
          {freeText}
        </span>
        <span className="petride-seats__count" aria-hidden="true">
          {pets.length}
          <small>
            {fillPetrideTemplate(tripPets.seatsFraction, { total: capacity })}
          </small>
        </span>
      </div>

      <span className="petride-seats__bar" aria-hidden="true">
        {seats.map(seat => (
          <span
            key={seat}
            className={cn(
              'petride-seats__fill',
              seat < pets.length && 'petride-seats__fill--on'
            )}
          />
        ))}
      </span>
    </section>
  );
}
