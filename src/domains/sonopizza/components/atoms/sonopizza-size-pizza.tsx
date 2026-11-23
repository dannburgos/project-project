import type { SonopizzaSliceCount } from '../../types/sonopizza.types';

const COLOR = {
  crust: '#e08a3c',
  crustEdge: '#c46f2c',
  sauce: '#d8452a',
  cheese: '#ffcf5a',
  cut: '#fff4e2',
  tomato: '#e5482f',
  tomatoCenter: '#ff8a6c',
  olive: '#2b2430',
  pepper: '#48a14d'
} as const;

const CENTER = 50;
// Radio al que va el ingrediente de cada porción
const TOPPING_RADIUS = 25;
const TOPPINGS = ['tomato', 'olive', 'pepper'] as const;

const round = (value: number) => Math.round(value * 10) / 10;
const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

type SonopizzaSizePizzaProps = {
  slices: SonopizzaSliceCount;
  className?: string;
};

// Pizza dibujada vista desde arriba, partida en tantas porciones como tiene el
// tamaño: la masa, la salsa, el queso y un ingrediente por porción (tomate,
// aceituna, pimentón) para poder contarlas. Es decorativa
export function SonopizzaSizePizza({
  slices,
  className
}: SonopizzaSizePizzaProps) {
  const step = 360 / slices;
  const slotIndexes = Array.from({ length: slices }, (_, index) => index);

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx={CENTER} cy={CENTER} r="48" fill={COLOR.crust} />
      <circle
        cx={CENTER}
        cy={CENTER}
        r="47"
        fill="none"
        stroke={COLOR.crustEdge}
        strokeWidth="2"
        opacity="0.6"
      />
      <circle cx={CENTER} cy={CENTER} r="42" fill={COLOR.sauce} />
      <circle cx={CENTER} cy={CENTER} r="39" fill={COLOR.cheese} />

      {slotIndexes.map(index => {
        const middle = toRadians(-90 + (index + 0.5) * step);
        const x = round(CENTER + TOPPING_RADIUS * Math.cos(middle));
        const y = round(CENTER + TOPPING_RADIUS * Math.sin(middle));
        const topping = TOPPINGS[index % TOPPINGS.length];

        if (topping === 'tomato') {
          return (
            <g key={index}>
              <circle cx={x} cy={y} r="5.6" fill={COLOR.tomato} />
              <circle
                cx={x}
                cy={y}
                r="3.4"
                fill={COLOR.tomatoCenter}
                opacity="0.55"
              />
            </g>
          );
        }
        if (topping === 'olive') {
          return (
            <g key={index}>
              <circle cx={x} cy={y} r="4.4" fill={COLOR.olive} />
              <circle cx={x} cy={y} r="1.9" fill={COLOR.cheese} />
            </g>
          );
        }
        return (
          <path
            key={index}
            d={`M${round(x - 5)} ${round(y + 2)} Q${x} ${round(y - 5)} ${round(x + 5)} ${round(y + 2)}`}
            fill="none"
            stroke={COLOR.pepper}
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        );
      })}

      {slotIndexes.map(index => {
        const angle = toRadians(-90 + index * step);
        return (
          <line
            key={index}
            x1={round(CENTER + 4 * Math.cos(angle))}
            y1={round(CENTER + 4 * Math.sin(angle))}
            x2={round(CENTER + 50 * Math.cos(angle))}
            y2={round(CENTER + 50 * Math.sin(angle))}
            stroke={COLOR.cut}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        );
      })}

      <path
        d="M16 34 A36 36 0 0 1 34 16"
        fill="none"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}
