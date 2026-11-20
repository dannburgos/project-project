import type { SonopizzaIngredientKey } from '../../types/sonopizza.types';

// Trazos de cada ingrediente en un lienzo de 24 × 24, con el estilo de los
// íconos de la app: línea de 2 px y puntas redondas (los puntos son trazos
// de largo cero)
const PATHS: Record<SonopizzaIngredientKey, readonly string[]> = {
  tomato: [
    'M12 20.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z',
    'M9 6.5 12 8.5l3-2',
    'M12 8.5V4'
  ],
  onion: [
    'M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z',
    'M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z'
  ],
  pepper: [
    'M8.5 8C5 9 4 13.5 6 17.5c1.5 3 4.5 3 6 1.5 1.5 1.5 4.5 1.5 6-1.5 2-4 1-8.5-2.5-9.5-1.3-.4-2.3 0-3.5.8-1.2-.8-2.2-1.2-3.5-.8Z',
    'M12 8.5V6c0-1.2.8-2.2 2-2.5'
  ],
  mushroom: ['M4 12a8 7 0 0 1 16 0Z', 'M9 12v5a3 3 0 0 0 6 0v-5'],
  olive: [
    'M12 3.5c3.9 0 7 3.8 7 8.5s-3.1 8.5-7 8.5-7-3.8-7-8.5 3.1-8.5 7-8.5Z',
    'M12 9c1.4 0 2.5 1.3 2.5 3s-1.1 3-2.5 3-2.5-1.3-2.5-3 1.1-3 2.5-3Z'
  ],
  cheese: [
    'M3 17.5 17 9.5l4 3.5v4.5H3Z',
    'M8 15.5h.01',
    'M13.5 14h.01',
    'M17 16h.01'
  ],
  pepperoni: [
    'M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z',
    'M9 9.5h.01',
    'M14.5 9h.01',
    'M11.5 14h.01',
    'M15.5 14.5h.01'
  ]
};

type SonopizzaIngredientIconProps = {
  ingredient: SonopizzaIngredientKey;
};

// Ícono de un ingrediente, dibujado para Sonopizza. Es decorativo: va con su
// nombre
export function SonopizzaIngredientIcon({
  ingredient
}: SonopizzaIngredientIconProps) {
  return (
    <svg className="sp-ingredient-icon" viewBox="0 0 24 24" aria-hidden="true">
      {PATHS[ingredient].map(path => (
        <path key={path} d={path} />
      ))}
    </svg>
  );
}
