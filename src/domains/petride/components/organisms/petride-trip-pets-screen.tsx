import { Check, ChevronLeft, HeartHandshake } from 'lucide-react';

import { cn } from '@/lib/utils';

import {
  PETRIDE_HOME_PETS,
  PETRIDE_TRIP,
  PETRIDE_TRIP_PETS
} from '../../example-trip';
import { petrideMessages } from '../../messages';
import {
  fillPetrideTemplate,
  joinPetrideNames
} from '../../petride-template.util';
import { PetrideButton } from '../atoms/petride-button';
import { PetrideSeatSummary } from '../molecules/petride-seat-summary';

// Elegir mascotas: una o varias, con los puestos del vehículo a la vista.
// Cuando van varias, confirma que conviven y pueden viajar juntas
export function PetrideTripPetsScreen() {
  const { tripPets, trip, common } = petrideMessages;
  const selected: string[] = PETRIDE_TRIP_PETS.map(pet => pet.id);
  const names = joinPetrideNames(
    PETRIDE_TRIP_PETS.map(pet => pet.name),
    trip.and
  );
  const canTravelTogether = PETRIDE_TRIP_PETS.every(pet => pet.isFriendly);

  return (
    <div className="petride-screen">
      <header className="petride-header">
        <button
          type="button"
          className="petride-header__back"
          aria-label={common.back}
        >
          <ChevronLeft aria-hidden="true" />
        </button>
      </header>

      <div className="petride-screen__body petride-trip-pets">
        <div className="petride-trip-pets__head">
          <h1 className="petride-trip-pets__title">{tripPets.title}</h1>
          <p className="petride-trip-pets__lead">{tripPets.lead}</p>
        </div>

        <PetrideSeatSummary
          pets={PETRIDE_TRIP_PETS}
          capacity={PETRIDE_TRIP.petCapacity}
        />

        <ul className="petride-trip-pets__list">
          {PETRIDE_HOME_PETS.map(pet => {
            const isOn = selected.includes(pet.id);
            return (
              <li key={pet.id}>
                <span
                  role="checkbox"
                  aria-checked={isOn}
                  aria-label={fillPetrideTemplate(tripPets.select, {
                    name: pet.name
                  })}
                  className={cn(
                    'petride-trip-pet',
                    isOn && 'petride-trip-pet--on'
                  )}
                >
                  <img
                    className="petride-trip-pet__photo"
                    src={pet.photo}
                    alt=""
                  />
                  <span className="petride-trip-pet__body">
                    <span className="petride-trip-pet__name">
                      {pet.name}
                      {pet.isAssistance && (
                        <span className="petride-trip-pet__badge">
                          <HeartHandshake aria-hidden="true" />
                          {tripPets.assistance}
                        </span>
                      )}
                    </span>
                    <span className="petride-trip-pet__meta">
                      {fillPetrideTemplate(tripPets.petMeta, {
                        breed: pet.breed,
                        size: pet.size
                      })}
                    </span>
                  </span>
                  <span className="petride-trip-pet__check" aria-hidden="true">
                    <Check />
                  </span>
                </span>
              </li>
            );
          })}
        </ul>

        {canTravelTogether && (
          <p className="petride-together">
            <span className="petride-together__icon" aria-hidden="true">
              <Check />
            </span>
            <span className="petride-together__text">
              <strong>{tripPets.friendlyTitle}</strong>
              {fillPetrideTemplate(tripPets.friendlyText, { names })}
            </span>
          </p>
        )}
      </div>

      <footer className="petride-screen__footer petride-screen__footer--raised">
        <PetrideButton isFull>{tripPets.continue}</PetrideButton>
      </footer>
    </div>
  );
}
