import { Car, Clock, Plus, Search } from 'lucide-react';

import { PETRIDE_HOME_PETS } from '../../example-trip';
import { petrideMessages } from '../../messages';
import { PetrideSavedPlaces } from '../molecules/petride-saved-places';
import { PetrideTripIdeas } from '../molecules/petride-trip-ideas';

// Inicio: solo lo esencial. Arriba, un encabezado índigo de borde a borde con
// la ruta del carro al destino y el buscador; debajo, lugares guardados, las
// mascotas registradas e ideas para el próximo viaje
export function PetrideHomeScreen() {
  const { home } = petrideMessages;

  return (
    <div className="petride-screen petride-screen--tabbed petride-home">
      <header className="petride-hero">
        <span className="petride-hero__grid" aria-hidden="true" />
        <h1 className="petride-hero__heading">{home.title}</h1>

        <div className="petride-hero__trip" aria-hidden="true">
          <svg className="petride-hero__route" viewBox="0 0 342 56">
            <path d="M44 32 C 96 4, 150 54, 206 30 S 276 14, 300 26" />
          </svg>
          <span className="petride-hero__car">
            <Car />
          </span>
          <span className="petride-hero__pin" />
        </div>

        <div className="petride-hero__copy">
          <h2 className="petride-hero__title">{home.heroTitle}</h2>
          <p className="petride-hero__text">{home.heroText}</p>
        </div>
        <button type="button" className="petride-search">
          <Search className="petride-search__icon" aria-hidden="true" />
          <span className="petride-search__text">{home.search}</span>
          <span className="petride-search__when">
            <Clock aria-hidden="true" />
            {home.now}
          </span>
        </button>
      </header>

      <div className="petride-screen__body petride-home__body">
        <PetrideSavedPlaces label={home.quickTitle} />

        <section className="petride-home-pets">
          <div className="petride-section-head">
            <h2 className="petride-section-head__title">{home.petsTitle}</h2>
            <span className="petride-section-head__action">{home.petsAll}</span>
          </div>
          <ul className="petride-home-pets__list">
            {PETRIDE_HOME_PETS.map(pet => (
              <li key={pet.id} className="petride-home-pets__item">
                <img
                  className="petride-home-pets__photo"
                  src={pet.photo}
                  alt={pet.name}
                />
                <span className="petride-home-pets__name">{pet.name}</span>
              </li>
            ))}
            <li className="petride-home-pets__item">
              <span className="petride-home-pets__add" aria-hidden="true">
                <Plus />
              </span>
              <span className="petride-home-pets__name">{home.addPet}</span>
            </li>
          </ul>
        </section>

        <PetrideTripIdeas />
      </div>
    </div>
  );
}
