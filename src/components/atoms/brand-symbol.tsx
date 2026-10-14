type BrandSymbolProps = {
  className?: string;
};

type BrandSymbolPieceProps = {
  // 0 círculo (arriba a la izquierda) · 1 forma D (arriba a la derecha) ·
  // 2 cuadrado redondeado (abajo a la izquierda) · 3 forma D (abajo a la
  // derecha)
  index: number;
  className?: string;
};

// Las cuatro piezas del símbolo, en su lugar dentro del mismo cuadro
const PIECES = [
  <circle key="circle" cx="270" cy="270" r="190" />,
  <path key="top-d" d="M532 80h190a190 190 0 0 1 0 380H532z" />,
  <rect key="square" x="80" y="532" width="380" height="380" rx="84" />,
  <path key="bottom-d" d="M532 532h190a190 190 0 0 1 0 380H532z" />
];

export const BRAND_SYMBOL_PIECE_COUNT = PIECES.length;

// Símbolo de Daniela Burgos: un monograma modular formado por un círculo, un
// cuadrado redondeado y dos formas D. Toma el color del texto que lo rodea.
export function BrandSymbol({ className }: BrandSymbolProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      {PIECES}
    </svg>
  );
}

// Una sola pieza del símbolo, en el mismo cuadro que el símbolo completo: si se
// superponen las cuatro, forman el símbolo (lo usa la entrada del sitio).
export function BrandSymbolPiece({ index, className }: BrandSymbolPieceProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      {PIECES[index]}
    </svg>
  );
}
