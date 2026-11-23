import type { SonoDsIngredientId } from '@/content/sonopizza-design-system.types';

// Trazos de cada ingrediente en un lienzo de 24 × 24, con el mismo estilo de
// los íconos de la app: línea de 2 px y puntas redondas
const PATHS: Record<SonoDsIngredientId, readonly string[]> = {
  slice: [
    'M12 21 3.5 5.6a15 15 0 0 1 17 0Z',
    'M10 9.5a1.4 1.4 0 1 0 0 .1',
    'M14.5 12a1.4 1.4 0 1 0 0 .1'
  ],
  mushroom: ['M4 12a8 7 0 0 1 16 0Z', 'M9 12v5a3 3 0 0 0 6 0v-5'],
  olive: [
    'M12 3.5c3.9 0 7 3.8 7 8.5s-3.1 8.5-7 8.5-7-3.8-7-8.5 3.1-8.5 7-8.5Z',
    'M12 9c1.4 0 2.5 1.3 2.5 3s-1.1 3-2.5 3-2.5-1.3-2.5-3 1.1-3 2.5-3Z'
  ],
  basil: ['M5 19c0-8 6-14 14-14 0 8-6 14-14 14Z', 'M5 19 14 10']
};

type SonoIngredientIconProps = {
  id: SonoDsIngredientId;
};

// Ícono de un ingrediente de la pizza (porción, champiñón, aceituna o
// albahaca), dibujado para Sonopizza. Es decorativo: va con su nombre.
export function SonoIngredientIcon({ id }: SonoIngredientIconProps) {
  return (
    <svg
      className="sono-ingredient-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {PATHS[id].map(path => (
        <path key={path} d={path} />
      ))}
    </svg>
  );
}
