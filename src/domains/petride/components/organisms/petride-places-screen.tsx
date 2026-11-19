import {
  ArrowUpDown,
  Bone,
  ChevronLeft,
  PawPrint,
  ShoppingBag,
  Stethoscope,
  Trees
} from 'lucide-react';

import { cn } from '@/lib/utils';

import {
  PETRIDE_PLACE_QUERY,
  PETRIDE_PLACE_SUGGESTIONS
} from '../../example-trip';
import { petrideMessages } from '../../messages';
import { fillPetrideTemplate } from '../../petride-template.util';

// Ícono de cada categoría, en el orden de places.categories
const CATEGORY_ICONS = [Trees, Stethoscope, Bone, ShoppingBag];
// Categoría elegida en el ejemplo: parques
const ACTIVE_CATEGORY = 0;

// Origen y destino: el buscador sigue la tarjeta índigo de Inicio. El origen
// ya es la ubicación actual y, al escribir el destino, las categorías para
// mascotas filtran los resultados; cada lugar dice si admite mascotas
export function PetridePlacesScreen() {
  const { places, common } = petrideMessages;
  const query = PETRIDE_PLACE_QUERY;
  const results = PETRIDE_PLACE_SUGGESTIONS;

  return (
    <div className="petride-screen petride-places-screen">
      <header className="petride-place-search">
        <span className="petride-place-search__grid" aria-hidden="true" />
        <div className="petride-place-search__bar">
          <button
            type="button"
            className="petride-place-search__back"
            aria-label={common.back}
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <h1 className="petride-place-search__title">{places.title}</h1>
        </div>

        <div className="petride-place-search__fields">
          <div className="petride-place-field">
            <span className="petride-place-field__origin" aria-hidden="true" />
            <span className="petride-place-field__text">
              <span className="petride-place-field__label">
                {places.originLabel}
              </span>
              {places.origin}
            </span>
          </div>
          <div className="petride-place-field petride-place-field--focus">
            <span className="petride-place-field__pin" aria-hidden="true" />
            <span className="petride-place-field__text">
              <span className="petride-place-field__label">
                {places.destinationLabel}
              </span>
              <span className="petride-place-field__value">
                {query}
                <span className="petride-field__caret" />
              </span>
            </span>
          </div>
          <button
            type="button"
            className="petride-place-search__swap"
            aria-label={places.swap}
          >
            <ArrowUpDown aria-hidden="true" />
          </button>
        </div>
      </header>

      <div className="petride-screen__body petride-places">
        <ul className="petride-categories" aria-label={places.categoriesLabel}>
          {places.categories.map((category, index) => {
            const Icon = CATEGORY_ICONS[index];
            return (
              <li
                key={category}
                className={cn(
                  'petride-categories__item',
                  index === ACTIVE_CATEGORY && 'petride-categories__item--on'
                )}
              >
                <Icon aria-hidden="true" />
                {category}
              </li>
            );
          })}
        </ul>

        <ul
          className="petride-places__list"
          aria-label={fillPetrideTemplate(places.results, {
            count: results.length
          })}
        >
          {results.map(place => (
            <li key={place.id} className="petride-place">
              <span className="petride-place__icon" aria-hidden="true">
                <Trees />
              </span>
              <span className="petride-place__body">
                <span className="petride-place__name">
                  <strong>{query}</strong>
                  {place.name.slice(query.length)}
                </span>
                <span className="petride-place__area">
                  {fillPetrideTemplate(places.placeLine, {
                    address: place.address,
                    area: place.area
                  })}
                </span>
                <span className="petride-place__badge">
                  <PawPrint aria-hidden="true" />
                  {places.petFriendly}
                </span>
              </span>
              <span className="petride-place__distance">
                <strong>{place.distance}</strong>
                {fillPetrideTemplate(places.minutes, {
                  minutes: place.minutes
                })}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
