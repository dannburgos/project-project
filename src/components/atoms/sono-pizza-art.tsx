import { cn } from '@/lib/utils';

// Pepperonis repartidos sobre el queso (lienzo de 100 × 100)
const PEPPERONIS = [
  [34, 32],
  [62, 30],
  [48, 50],
  [28, 58],
  [70, 52],
  [44, 72],
  [66, 72]
] as const;

type SonoPizzaArtProps = {
  className?: string;
  // Color de cada pepperoni, en el orden de arriba (la paleta en pepperonis)
  pepperoniColors?: readonly string[];
  hasSlices?: boolean;
};

// Pizza vista desde arriba con el estilo de la marca: borde naranja suave,
// queso blanco hueso y pepperonis, todo con contorno azul marino como un
// sticker. Es decorativa: el texto que la acompaña dice qué es.
export function SonoPizzaArt({
  className,
  pepperoniColors,
  hasSlices = false
}: SonoPizzaArtProps) {
  return (
    <svg
      className={cn('sono-pizza-art', className)}
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <circle className="sono-pizza-art__crust" cx="50" cy="50" r="46" />
      <circle className="sono-pizza-art__cheese" cx="50" cy="50" r="37" />
      {hasSlices && (
        <path
          className="sono-pizza-art__slices"
          d="M50 13 V87 M13 50 H87 M23.8 23.8 L76.2 76.2 M76.2 23.8 L23.8 76.2"
        />
      )}
      {PEPPERONIS.map(([x, y], index) => (
        <circle
          key={`${x}-${y}`}
          className="sono-pizza-art__pepperoni"
          cx={x}
          cy={y}
          r="7"
          fill={pepperoniColors?.[index]}
        />
      ))}
    </svg>
  );
}
