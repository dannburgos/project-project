import { cn } from '@/lib/utils';

import type { SonopizzaCategoryArt } from '../../types/sonopizza.types';

// Colores de la ilustración: masa, queso, pepperoni, verduras, caja y vaso
const COLOR = {
  crust: '#e08a3c',
  cheese: '#ffcf5a',
  pepperoni: '#d6402b',
  leaf: '#3f9a4b',
  herb: '#5b7d2f',
  tomato: '#e5482f',
  olive: '#2b2b2b',
  pepper: '#48a14d',
  boxTop: '#f4c98f',
  boxLeft: '#d9a466',
  boxRight: '#e9b779',
  orange: '#ff5a00',
  cup: '#ffffff',
  lid: '#e9eef7',
  navy: '#002b8f'
} as const;

// Porción de pizza: queso, una gota que cae, la masa arriba, pepperonis y
// una hoja de albahaca
function SliceShapes() {
  return (
    <>
      <path
        fill={COLOR.cheese}
        d="M26 38 Q60 22 94 38 L63 104 Q60 110 57 104 Z"
      />
      <path
        fill={COLOR.cheese}
        d="M78 62 Q85 60 86 68 Q86 78 81 78 Q76 78 77 70 Z"
      />
      <path
        fill={COLOR.crust}
        d="M20 38 Q60 12 100 38 Q102 47 94 48 Q60 30 26 48 Q18 47 20 38 Z"
      />
      <circle fill={COLOR.pepperoni} cx="47" cy="56" r="8" />
      <circle fill={COLOR.pepperoni} cx="72" cy="57" r="7" />
      <circle fill={COLOR.pepperoni} cx="60" cy="77" r="6.5" />
      <circle fill={COLOR.pepperoni} cx="60" cy="94" r="4" />
      <path fill={COLOR.leaf} d="M35 70 Q41 59 50 64 Q44 75 35 70 Z" />
    </>
  );
}

// Pizza de dos sabores: mitad pepperoni y mitad vegetariana, separadas
function HalfShapes() {
  return (
    <>
      <g transform="translate(-3 0)">
        <path fill={COLOR.crust} d="M60 12 A48 48 0 0 0 60 108 Z" />
        <path fill={COLOR.cheese} d="M60 20 A40 40 0 0 0 60 100 Z" />
        <circle fill={COLOR.pepperoni} cx="44" cy="38" r="7" />
        <circle fill={COLOR.pepperoni} cx="31" cy="60" r="7" />
        <circle fill={COLOR.pepperoni} cx="49" cy="61" r="6" />
        <circle fill={COLOR.pepperoni} cx="42" cy="82" r="7" />
      </g>
      <g transform="translate(3 0)">
        <path fill={COLOR.crust} d="M60 12 A48 48 0 0 1 60 108 Z" />
        <path fill={COLOR.cheese} d="M60 20 A40 40 0 0 1 60 100 Z" />
        <circle fill={COLOR.tomato} cx="74" cy="34" r="7" />
        <circle fill={COLOR.olive} cx="86" cy="54" r="5" />
        <circle fill={COLOR.olive} cx="70" cy="86" r="5" />
        <path
          fill="none"
          stroke={COLOR.pepper}
          strokeWidth="5"
          d="M68 58 Q76 50 84 58"
        />
        <path
          fill="none"
          stroke={COLOR.pepper}
          strokeWidth="5"
          d="M78 74 Q86 70 90 78"
        />
      </g>
    </>
  );
}

// Combo: la caja de pizza y una gaseosa con pitillo
function ComboShapes() {
  return (
    <>
      <path fill={COLOR.boxLeft} d="M10 56 L50 70 L50 100 L10 86 Z" />
      <path fill={COLOR.boxRight} d="M50 70 L92 56 L92 86 L50 100 Z" />
      <path fill={COLOR.boxTop} d="M10 56 L52 42 L92 56 L50 70 Z" />
      <ellipse fill={COLOR.orange} cx="51" cy="56" rx="13" ry="6.5" />
      <path
        fill={COLOR.cup}
        d="M74 46 L106 46 L101 104 Q100 110 94 110 L86 110 Q80 110 79 104 Z"
      />
      <path fill={COLOR.orange} d="M76 66 L104 66 L102.4 84 L77.6 84 Z" />
      <rect fill={COLOR.lid} x="71" y="38" width="38" height="10" rx="5" />
      <path
        fill="none"
        stroke={COLOR.navy}
        strokeWidth="5"
        d="M94 38 L100 16 L108 14"
      />
    </>
  );
}

// Bebida: vaso para llevar con tapa, pitillo y la franja de la marca
function DrinkShapes() {
  return (
    <>
      <path
        fill="none"
        stroke={COLOR.navy}
        strokeWidth="7"
        d="M64 26 L72 6 L84 4"
      />
      <path
        fill={COLOR.cup}
        d="M34 40 L86 40 L79 104 Q78 110 71 110 L49 110 Q42 110 41 104 Z"
      />
      <path fill={COLOR.orange} d="M36.4 60 L83.6 60 L81 86 L39 86 Z" />
      <circle fill={COLOR.cup} cx="60" cy="73" r="8" />
      <path fill={COLOR.lid} d="M38 30 Q60 14 82 30 Z" />
      <rect fill={COLOR.lid} x="28" y="28" width="64" height="14" rx="7" />
    </>
  );
}

// Detalles sin contorno que van encima: orégano, centro de las aceitunas y el
// punto del logo del vaso
function Details({ art }: { art: SonopizzaCategoryArt }) {
  if (art === 'slice') {
    return (
      <g fill={COLOR.herb}>
        <circle cx="58" cy="46" r="1.4" />
        <circle cx="66" cy="68" r="1.4" />
        <circle cx="52" cy="84" r="1.4" />
        <circle cx="80" cy="46" r="1.4" />
      </g>
    );
  }
  if (art === 'half') {
    return (
      <g fill={COLOR.cheese}>
        <circle cx="89" cy="54" r="1.8" />
        <circle cx="73" cy="86" r="1.8" />
      </g>
    );
  }
  if (art === 'drink') {
    return <circle fill={COLOR.orange} cx="60" cy="73" r="3" />;
  }
  return null;
}

const SHAPES: Record<SonopizzaCategoryArt, () => React.JSX.Element> = {
  slice: SliceShapes,
  half: HalfShapes,
  combo: ComboShapes,
  drink: DrinkShapes
};

type SonopizzaCategoryStickerProps = {
  art: SonopizzaCategoryArt;
  className?: string;
};

// Ilustración de una categoría como sticker retro: primero un troquel blanco
// grueso alrededor de todo y encima la ilustración plana con contorno azul
export function SonopizzaCategorySticker({
  art,
  className
}: SonopizzaCategoryStickerProps) {
  const Shapes = SHAPES[art];

  return (
    <svg
      viewBox="0 0 120 120"
      className={cn('sp-category-sticker', className)}
      aria-hidden="true"
    >
      <g
        stroke="#fff"
        strokeWidth="14"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <Shapes />
      </g>
      <g
        stroke={COLOR.navy}
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <Shapes />
      </g>
      <Details art={art} />
    </svg>
  );
}
