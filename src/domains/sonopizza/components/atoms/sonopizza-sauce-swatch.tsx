import type { SonopizzaSauce } from '../../types/sonopizza.types';

type SonopizzaSauceSwatchProps = {
  tone: SonopizzaSauce['tone'];
  className?: string;
};

// Brillo suave arriba a la izquierda, común a todas las salsas
function Gloss() {
  return (
    <>
      <ellipse
        cx="16"
        cy="14"
        rx="7"
        ry="3.4"
        transform="rotate(-35 16 14)"
        fill="#fff"
        opacity="0.5"
      />
      <ellipse
        cx="12.5"
        cy="19"
        rx="1.6"
        ry="1"
        transform="rotate(-35 12.5 19)"
        fill="#fff"
        opacity="0.55"
      />
    </>
  );
}

// Tomate: roja y brillante, con semillas, pedacitos de orégano y un remolino
function Tomato() {
  return (
    <>
      <defs>
        <radialGradient id="sp-sauce-tomato" cx="0.4" cy="0.35" r="0.75">
          <stop offset="0" stopColor="#f2745a" />
          <stop offset="0.55" stopColor="#d8452a" />
          <stop offset="1" stopColor="#9c2410" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="22" fill="url(#sp-sauce-tomato)" />
      <circle
        cx="24"
        cy="24"
        r="21.2"
        fill="none"
        stroke="#7a1a0a"
        strokeWidth="1.2"
        opacity="0.35"
      />
      <g fill="#f58f70" opacity="0.5">
        <circle cx="30" cy="16" r="4.2" />
        <circle cx="18" cy="30" r="3.4" />
        <circle cx="33" cy="30" r="2.6" />
      </g>
      <g fill="#8a1f0e" opacity="0.4">
        <circle cx="22" cy="22" r="3.6" />
        <circle cx="34" cy="23" r="2.2" />
        <circle cx="14" cy="26" r="2" />
        <circle cx="26" cy="35" r="2.8" />
      </g>
      <path
        d="M12 28 Q18 38 30 34 Q38 30 36 20"
        fill="none"
        stroke="#ffb59e"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.45"
      />
      <g fill="#ffdcae" opacity="0.8">
        <ellipse
          cx="27"
          cy="26"
          rx="1.2"
          ry="0.7"
          transform="rotate(30 27 26)"
        />
        <ellipse
          cx="20"
          cy="18"
          rx="1.2"
          ry="0.7"
          transform="rotate(-20 20 18)"
        />
        <ellipse
          cx="32"
          cy="34"
          rx="1.2"
          ry="0.7"
          transform="rotate(60 32 34)"
        />
        <ellipse
          cx="15"
          cy="33"
          rx="1.2"
          ry="0.7"
          transform="rotate(10 15 33)"
        />
      </g>
      <g fill="#3f7a2a">
        <ellipse
          cx="24"
          cy="30"
          rx="1.5"
          ry="0.7"
          transform="rotate(25 24 30)"
        />
        <ellipse
          cx="31"
          cy="20"
          rx="1.5"
          ry="0.7"
          transform="rotate(-35 31 20)"
        />
        <ellipse
          cx="17"
          cy="23"
          rx="1.5"
          ry="0.7"
          transform="rotate(50 17 23)"
        />
        <ellipse
          cx="29"
          cy="37"
          rx="1.5"
          ry="0.7"
          transform="rotate(-10 29 37)"
        />
      </g>
      <Gloss />
    </>
  );
}

// Blanca: cremosa, con un remolino y granitos de pimienta
function White() {
  return (
    <>
      <defs>
        <radialGradient id="sp-sauce-white" cx="0.4" cy="0.35" r="0.8">
          <stop offset="0" stopColor="#fffdf6" />
          <stop offset="0.6" stopColor="#f6e8cb" />
          <stop offset="1" stopColor="#d9c49a" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="22" fill="url(#sp-sauce-white)" />
      <circle
        cx="24"
        cy="24"
        r="21.2"
        fill="none"
        stroke="#b99f6c"
        strokeWidth="1.2"
        opacity="0.45"
      />
      <path
        d="M24 24 Q27 20 30 24 Q31 30 24 31 Q16 31 14 23 Q14 14 24 13 Q34 13 36 23"
        fill="none"
        stroke="#e4d0a6"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M24 24 Q27 20 30 24 Q31 30 24 31 Q16 31 14 23 Q14 14 24 13 Q34 13 36 23"
        fill="none"
        stroke="#fff"
        strokeWidth="1"
        strokeLinecap="round"
        transform="translate(-0.8 -0.8)"
        opacity="0.9"
      />
      <g fill="#3a3a3a" opacity="0.65">
        <circle cx="30" cy="35" r="0.8" />
        <circle cx="19" cy="34" r="0.7" />
        <circle cx="35" cy="28" r="0.7" />
        <circle cx="26" cy="16" r="0.8" />
        <circle cx="13" cy="28" r="0.7" />
        <circle cx="33" cy="17" r="0.6" />
      </g>
      <Gloss />
    </>
  );
}

// BBQ: oscura y espesa, con vetas de caramelo y un brillo marcado
function Bbq() {
  return (
    <>
      <defs>
        <radialGradient id="sp-sauce-bbq" cx="0.4" cy="0.35" r="0.8">
          <stop offset="0" stopColor="#a8622e" />
          <stop offset="0.5" stopColor="#6e3416" />
          <stop offset="1" stopColor="#3a1708" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="22" fill="url(#sp-sauce-bbq)" />
      <circle
        cx="24"
        cy="24"
        r="21.2"
        fill="none"
        stroke="#1e0a03"
        strokeWidth="1.2"
        opacity="0.5"
      />
      <g
        fill="none"
        stroke="#d99a55"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.55"
      >
        <path d="M11 30 Q20 22 30 28 Q36 31 38 26" />
        <path d="M14 36 Q22 30 32 36" />
        <path d="M16 20 Q22 15 30 18" />
      </g>
      <g fill="#2a1206" opacity="0.55">
        <circle cx="22" cy="24" r="1" />
        <circle cx="30" cy="22" r="0.8" />
        <circle cx="27" cy="32" r="1" />
        <circle cx="18" cy="31" r="0.8" />
        <circle cx="34" cy="31" r="0.8" />
        <circle cx="20" cy="17" r="0.8" />
      </g>
      <ellipse
        cx="17"
        cy="13.5"
        rx="8"
        ry="3.4"
        transform="rotate(-35 17 13.5)"
        fill="#fff"
        opacity="0.42"
      />
      <ellipse
        cx="12.5"
        cy="19"
        rx="1.6"
        ry="1"
        transform="rotate(-35 12.5 19)"
        fill="#fff"
        opacity="0.5"
      />
    </>
  );
}

// Pesto: verde con trocitos de albahaca y piñones
function Pesto() {
  return (
    <>
      <defs>
        <radialGradient id="sp-sauce-pesto" cx="0.4" cy="0.35" r="0.8">
          <stop offset="0" stopColor="#8fc752" />
          <stop offset="0.55" stopColor="#5b9a3a" />
          <stop offset="1" stopColor="#386b22" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="22" fill="url(#sp-sauce-pesto)" />
      <circle
        cx="24"
        cy="24"
        r="21.2"
        fill="none"
        stroke="#244a14"
        strokeWidth="1.2"
        opacity="0.45"
      />
      <g fill="#b5df74" opacity="0.65">
        <circle cx="29" cy="15" r="3.2" />
        <circle cx="17" cy="28" r="3" />
        <circle cx="33" cy="29" r="2.4" />
        <circle cx="24" cy="21" r="1.8" />
        <circle cx="21" cy="36" r="2" />
      </g>
      <g fill="#2f5a1c" opacity="0.55">
        <circle cx="23" cy="28" r="2.6" />
        <circle cx="33" cy="21" r="2" />
        <circle cx="14" cy="21" r="1.8" />
        <circle cx="29" cy="35" r="2.2" />
        <circle cx="21" cy="14" r="1.6" />
      </g>
      <g fill="#fff1c8">
        <ellipse cx="27" cy="26" rx="2" ry="1.1" transform="rotate(30 27 26)" />
        <ellipse
          cx="19"
          cy="24"
          rx="2"
          ry="1.1"
          transform="rotate(-25 19 24)"
        />
        <ellipse cx="31" cy="32" rx="2" ry="1.1" transform="rotate(60 31 32)" />
        <ellipse cx="22" cy="32" rx="1.8" ry="1" transform="rotate(10 22 32)" />
        <ellipse
          cx="29"
          cy="18"
          rx="1.8"
          ry="1"
          transform="rotate(-50 29 18)"
        />
      </g>
      <Gloss />
    </>
  );
}

const SHAPES: Record<SonopizzaSauce['tone'], () => React.JSX.Element> = {
  tomato: Tomato,
  white: White,
  bbq: Bbq,
  pesto: Pesto
};

// Muestra de una salsa vista desde arriba, como una cucharada: color con
// profundidad, textura propia de cada una y un brillo. Es decorativa: el
// nombre siempre la acompaña
export function SonopizzaSauceSwatch({
  tone,
  className
}: SonopizzaSauceSwatchProps) {
  const Shape = SHAPES[tone];

  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <Shape />
    </svg>
  );
}
