import { Flag } from 'lucide-react';

import {
  PETRIDE_TRIP,
  PETRIDE_TRIP_DESTINATION,
  PETRIDE_TRIP_PETS
} from '../../example-trip';
import { petrideMessages } from '../../messages';
import {
  fillPetrideTemplate,
  joinPetrideNames
} from '../../petride-template.util';
import { PetrideCarWindows } from '../molecules/petride-car-windows';

// Buscando conductor: un póster de espera en la noche de la marca, sin mapa.
// El estado "Buscando…" va sobre el carro con Toby y Kira, entre anillos que
// salen hacia afuera; debajo, el mensaje y el viaje confirmado (destino y
// precio) para tenerlo presente mientras se espera
export function PetrideSearchingScreen() {
  const { searching, trip } = petrideMessages;
  const names = joinPetrideNames(
    PETRIDE_TRIP_PETS.map(pet => pet.name),
    trip.and
  );

  return (
    <div className="petride-screen petride-waiting">
      <span className="petride-waiting__grid" aria-hidden="true" />
      <span className="petride-waiting__glow" aria-hidden="true" />
      <span
        className="petride-waiting__ring petride-waiting__ring--inner"
        aria-hidden="true"
      />
      <span
        className="petride-waiting__ring petride-waiting__ring--middle"
        aria-hidden="true"
      />
      <span
        className="petride-waiting__ring petride-waiting__ring--outer"
        aria-hidden="true"
      />

      <span className="petride-waiting__status">
        <span className="petride-waiting__dot" aria-hidden="true" />
        {searching.status}
      </span>

      <span className="petride-waiting__car">
        <PetrideCarWindows
          pets={PETRIDE_TRIP_PETS}
          capacity={PETRIDE_TRIP.petCapacity}
        />
      </span>

      <div className="petride-waiting__copy">
        <h1 className="petride-waiting__title">
          {fillPetrideTemplate(searching.title, { names })}
        </h1>
        <p className="petride-waiting__text">{searching.text}</p>
      </div>

      <div className="petride-waiting__trip">
        <span className="petride-waiting__place">
          <Flag aria-hidden="true" />
          {PETRIDE_TRIP_DESTINATION.name}
        </span>
        <strong className="petride-waiting__price">{PETRIDE_TRIP.price}</strong>
      </div>

      <button type="button" className="petride-waiting__cancel">
        {searching.cancel}
      </button>
    </div>
  );
}
