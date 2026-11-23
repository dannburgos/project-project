import { CircleCheck, X } from 'lucide-react';

import { cn } from '@/lib/utils';

import {
  PETRIDE_DRIVER,
  PETRIDE_RATING,
  PETRIDE_RATING_POSITIVE_FROM,
  PETRIDE_TRIP,
  PETRIDE_TRIP_DESTINATION,
  PETRIDE_TRIP_PETS
} from '../../example-trip';
import { petrideMessages } from '../../messages';
import {
  fillPetrideTemplate,
  joinPetrideNames
} from '../../petride-template.util';
import { PetrideButton } from '../atoms/petride-button';
import { PetridePawMark } from '../atoms/petride-paw-mark';
import { PetridePetAvatars } from '../molecules/petride-pet-avatars';

// Llegada y calificación: arriba, de noche, el destino, la hora de llegada,
// las mascotas que llegaron y lo pagado. Abajo, lo que hay que hacer
// (calificar con huellas; las etiquetas aparecen al elegir una y cambian si
// fue bien o mal) y, en gris, lo opcional (propina y mensaje). Un solo
// botón envía todo; sin cara elegida queda apagado. La X permite salir
// sin calificar
export function PetrideRatingScreen() {
  const { rating, trip } = petrideMessages;
  const driver = PETRIDE_DRIVER;
  const { score, selectedTags, selectedTip } = PETRIDE_RATING;
  const isPositive = score !== null && score >= PETRIDE_RATING_POSITIVE_FROM;
  const tags = isPositive ? rating.positiveTags : rating.negativeTags;
  const tagsTitle = isPositive ? rating.positiveTitle : rating.negativeTitle;

  return (
    <div className="petride-screen petride-arrived">
      <div className="petride-arrived__top">
        <span className="petride-arrived__grid" aria-hidden="true" />
        <span className="petride-arrived__glow" aria-hidden="true" />
        <button
          type="button"
          className="petride-arrived__close"
          aria-label={rating.close}
        >
          <X aria-hidden="true" />
        </button>

        <div className="petride-arrived__copy">
          <span className="petride-arrived__eyebrow">
            <CircleCheck aria-hidden="true" />
            {rating.eyebrow}
          </span>
          <h1 className="petride-arrived__title">
            {PETRIDE_TRIP_DESTINATION.name}
          </h1>
          <p className="petride-arrived__meta">
            {fillPetrideTemplate(rating.meta, {
              time: PETRIDE_TRIP.arrivalTime
            })}
          </p>
        </div>

        <div className="petride-arrived__facts">
          <span className="petride-arrived__fact">
            <PetridePetAvatars pets={PETRIDE_TRIP_PETS} />
            {fillPetrideTemplate(rating.petsArrived, {
              names: joinPetrideNames(
                PETRIDE_TRIP_PETS.map(pet => pet.name),
                trip.and
              )
            })}
          </span>
          <span className="petride-arrived__fact petride-arrived__fact--paid">
            <span>{rating.paidLabel}</span>
            <strong>{PETRIDE_TRIP.price}</strong>
          </span>
        </div>
      </div>

      <div className="petride-rate">
        <div className="petride-rate__who">
          <img
            className="petride-rate__photo"
            src={driver.photo}
            alt={driver.name}
          />
          <h2 className="petride-rate__question">
            {fillPetrideTemplate(rating.question, { name: driver.name })}
          </h2>
        </div>

        <section className="petride-rate__score">
          <div
            className="petride-rate__paws"
            role="radiogroup"
            aria-label={rating.scoreLabel}
          >
            {rating.scores.map((option, index) => {
              const level = index + 1;
              const isFilled = score !== null && level <= score;
              const isChosen = level === score;
              return (
                <span
                  key={option.label}
                  role="radio"
                  aria-checked={isChosen}
                  aria-label={option.label}
                  className={cn(
                    'petride-rate__paw',
                    isFilled && 'petride-rate__paw--on',
                    isChosen && 'petride-rate__paw--chosen'
                  )}
                >
                  <PetridePawMark />
                </span>
              );
            })}
          </div>

          {score !== null && (
            <p className="petride-rate__read">
              <strong>{rating.scores[score - 1].label}</strong>
              {fillPetrideTemplate(rating.scoreRead, { score })}
            </p>
          )}

          {score !== null && (
            <div className="petride-rate__tags">
              <h3 className="petride-rate__tags-title">{tagsTitle}</h3>
              <ul className="petride-rate__tag-list">
                {tags.map((tag, index) => {
                  const isOn = selectedTags.includes(index);
                  return (
                    <li
                      key={tag}
                      className={cn(
                        'petride-rate__tag',
                        isOn && 'petride-rate__tag--on'
                      )}
                    >
                      {tag}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </section>

        <section className="petride-rate__card petride-rate__card--optional">
          <h3 className="petride-rate__optional">
            {fillPetrideTemplate(rating.optionalTitle, { name: driver.name })}
          </h3>
          <div className="petride-rate__tips">
            <h3 className="sr-only">{rating.tipTitle}</h3>
            <ul className="petride-rate__tip-list">
              {rating.tips.map((tip, index) => (
                <li
                  key={tip}
                  className={cn(
                    'petride-rate__tip',
                    index === selectedTip && 'petride-rate__tip--on'
                  )}
                >
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="petride-rate__message">
            {fillPetrideTemplate(rating.message, { name: driver.name })}
          </div>
        </section>

        <PetrideButton isFull isDisabled={score === null}>
          {rating.send}
        </PetrideButton>
      </div>
    </div>
  );
}
