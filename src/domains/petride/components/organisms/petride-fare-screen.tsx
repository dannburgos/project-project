import { ChevronLeft, Clock, Flag, Route } from 'lucide-react';

import { cn } from '@/lib/utils';

import {
  PETRIDE_TRIP,
  PETRIDE_TRIP_DESTINATION,
  PETRIDE_TRIP_PETS
} from '../../example-trip';
import { petrideMessages } from '../../messages';
import { fillPetrideTemplate } from '../../petride-template.util';
import { PetrideButton } from '../atoms/petride-button';
import { PetrideCarWindows } from '../molecules/petride-car-windows';
import { PetrideMap } from '../molecules/petride-map';

// Tarifa y resumen: la ruta en el mapa con la hora de llegada y los minutos.
// En la hoja, el mismo carro de Elegir mascotas con Toby y Kira en las
// ventanas y el precio grande al lado; debajo, tiempo, distancia y llegada en
// chips, y el recorrido antes de confirmar
export function PetrideFareScreen() {
  const { fare, places, common } = petrideMessages;
  const destination = PETRIDE_TRIP_DESTINATION;
  const chips = [
    {
      key: 'minutes',
      icon: Clock,
      text: fillPetrideTemplate(fare.chipMinutes, {
        minutes: PETRIDE_TRIP.minutes
      })
    },
    {
      key: 'distance',
      icon: Route,
      text: fillPetrideTemplate(fare.chipDistance, {
        distance: PETRIDE_TRIP.distance
      })
    },
    {
      key: 'arrival',
      icon: Flag,
      text: fillPetrideTemplate(fare.chipArrival, {
        time: PETRIDE_TRIP.arrivalTime
      })
    }
  ];

  return (
    <div className="petride-screen petride-trip petride-trip--fare">
      <PetrideMap
        variant="route"
        destination={{
          name: PETRIDE_TRIP_DESTINATION.name,
          arrivalLabel: fare.arrivalLabel,
          time: PETRIDE_TRIP.arrivalTime
        }}
        routeMinutes={{ value: PETRIDE_TRIP.minutes, unit: fare.minutesUnit }}
        originLabel={fare.you}
      />
      <button
        type="button"
        className="petride-trip__back"
        aria-label={common.back}
      >
        <ChevronLeft aria-hidden="true" />
      </button>

      <section className="petride-sheet petride-sheet--fare">
        <span className="petride-sheet__handle" aria-hidden="true" />
        <h1 className="sr-only">{fare.title}</h1>

        <div className="petride-fare-hero">
          <PetrideCarWindows
            pets={PETRIDE_TRIP_PETS}
            capacity={PETRIDE_TRIP.petCapacity}
          />
          <span className="petride-fare-hero__price">
            <span className="petride-fare-hero__label">{fare.priceLabel}</span>
            {PETRIDE_TRIP.price}
          </span>
        </div>

        <ul className="petride-fare-chips">
          {chips.map(({ key, icon: Icon, text }) => (
            <li
              key={key}
              className={cn(
                'petride-fare-chips__item',
                key === 'arrival' && 'petride-fare-chips__item--lime'
              )}
            >
              <Icon aria-hidden="true" />
              {text}
            </li>
          ))}
        </ul>

        <ol className="petride-stops">
          <li className="petride-stops__item">
            <span className="petride-stops__origin" aria-hidden="true" />
            {places.origin}
          </li>
          <li className="petride-stops__item">
            <span className="petride-stops__pin" aria-hidden="true" />
            {destination.name}
          </li>
        </ol>

        <PetrideButton isFull>{fare.confirm}</PetrideButton>
      </section>
    </div>
  );
}
