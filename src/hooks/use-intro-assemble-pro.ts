'use client';

import { useRef } from 'react';

import { useIntroRun, type IntroRun } from '@/hooks/use-intro-run';
import { createSpringEasing } from '@/utils/spring.util';

// Las piezas entran en el orden en que se construye el monograma (círculo, D
// de arriba, cuadrado, D de abajo) y cada vez más seguido: 120, 90 y 60 ms
const PIECE_DELAYS_MS = [0, 120, 210, 270];
// Esquina desde la que entra cada pieza
const PIECE_DIRECTIONS = [
  [-1, -1],
  [1, -1],
  [-1, 1],
  [1, 1]
] as const;
const PIECE_START_ROTATION_DEG = 40;
const OFFSCREEN_MARGIN_PX = 200;
// Estela de velocidad: las piezas llegan desenfocadas y se vuelven nítidas
const START_BLUR_PX = 12;
const BLUR_SHARE = 0.55;

// Resortes de las piezas, sin rebote: cada pieza frena una sola vez y nunca
// se pasa de su lugar (si se pasara en horizontal y en vertical a destiempo,
// haría zigzag; Dann lo descartó). El horizontal es más lento que el vertical,
// así cada pieza dibuja una curva suave (el giro sigue al vertical). Cada pieza
// es un poco más rígida que la anterior para que no se muevan como clones.
const PIECE_STIFFNESS_X = 140;
const PIECE_STIFFNESS_Y = 230;
const PIECE_STIFFNESS_STEP = 16;
// Amortiguación justo por encima de la crítica: frena sin rebotar
const NO_BOUNCE_RATIO = 1.05;
// Viaje al logo: sin rebote, frena suave (cerca de 0,6 s)
const SPRING_FLIGHT = { stiffness: 210, damping: 29 };

const IMPACT_MS = 280;
const LOGO_BOUNCE_MS = 420;
// La portada empieza a entrar poco después de que el símbolo sale hacia el logo
const REVEAL_START_MS = 40;
const EASE_OUT_EXPO = 'cubic-bezier(0.16, 1, 0.3, 1)';
// El fondo oscuro se desvanece parejo, sin formas, mientras el símbolo viaja
const BACKDROP_FADE_EASING = 'cubic-bezier(0.4, 0, 0.2, 1)';

type Point = { x: number; y: number };

const centerOf = (rect: DOMRect): Point => ({
  x: rect.left + rect.width / 2,
  y: rect.top + rect.height / 2
});

// Un resorte que llega sin rebotar, con la rigidez indicada
const noBounceSpring = (stiffness: number) => ({
  stiffness,
  damping: 2 * NO_BOUNCE_RATIO * Math.sqrt(stiffness)
});

// Una pausa que también se acelera si la persona salta la entrada
const wait = (track: IntroRun['track'], element: Element, ms: number) =>
  track(element.animate([], { duration: ms })).finished;

type CoverReveal = {
  // Barra, frase, rol y palabra gigante: entran en cadena durante el viaje
  cover: Animation[];
  // El nombre (brand): sale del logo cuando el símbolo aterriza en él (si
  // apareciera antes, el símbolo le pasaría por encima)
  brand: Animation | null;
};

// Prepara la entrada de la portada. Las animaciones quedan en pausa en su
// primer cuadro (todo oculto) hasta que les toca.
function prepareCoverReveal(): CoverReveal {
  const create = (
    element: Element | null,
    keyframes: Keyframe[],
    delay: number,
    duration: number
  ) => {
    if (!element) return null;
    const animation = element.animate(keyframes, {
      delay,
      duration,
      easing: EASE_OUT_EXPO,
      fill: 'backwards'
    });
    animation.pause();
    return animation;
  };
  const cover: Animation[] = [];
  const add = (...args: Parameters<typeof create>) => {
    const animation = create(...args);
    if (animation) cover.push(animation);
  };

  // La cápsula del menú se abre
  add(
    document.querySelector('.site-header__bar'),
    [
      { opacity: 0, scale: '0.85', filter: 'blur(6px)' },
      { opacity: 1, scale: '1', filter: 'blur(0px)' }
    ],
    0,
    700
  );
  // La frase sube palabra por palabra
  document
    .querySelectorAll('.home-cover__tagline .reveal-text__word')
    .forEach((word, index) =>
      add(
        word,
        [{ translate: '0 110%' }, { translate: '0 0' }],
        80 + index * 50,
        750
      )
    );
  // El rol y la flecha de scroll
  add(
    document.querySelector('.home-cover__meta'),
    [
      { opacity: 0, translate: '0 12px' },
      { opacity: 1, translate: '0 0' }
    ],
    300,
    600
  );
  // La palabra gigante sube desde abajo
  document.querySelectorAll('.home-cover__word-part').forEach((part, index) =>
    add(
      part,
      [
        { opacity: 0, translate: '0 35%' },
        { opacity: 1, translate: '0 0' }
      ],
      150 + index * 100,
      1000
    )
  );

  // El nombre (brand) sale desde el logo hacia la derecha
  const brand = create(
    document.querySelector('.site-header__brand'),
    [
      { opacity: 0, translate: '-8px 0' },
      { opacity: 1, translate: '0 0' }
    ],
    0,
    600
  );

  return { cover, brand };
}

// Entrada "1 · Ensamble del símbolo", versión pro, con el naranja de marca:
// 1. Vuelve arriba (al recargar, el navegador recuerda dónde iba el scroll) y
//    espera las tipografías, para que nunca se vea una letra provisional.
// 2. Las 4 piezas entran desde las esquinas, cada una en un tono de la gama
//    naranja, con resortes sin rebote, en curva y desenfocadas al ir rápido.
// 3. Impacto: el símbolo se aplasta y estira levemente al encajar, y las
//    piezas se vuelven blancas.
// 4. El símbolo viaja al logo real mientras el fondo oscuro se desvanece
//    parejo y deja ver el banner naranja; la portada entra en cadena.
// 5. El logo real toma el relevo con un pequeño rebote.
// Saltar la acelera hasta el final (ver useIntroRun).
export function useIntroAssemblePro(onDone: () => void) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const symbolRef = useRef<HTMLDivElement>(null);
  const axisXRefs = useRef<(HTMLDivElement | null)[]>([]);
  const axisYRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pieceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useIntroRun(async ({ track, isStopped }) => {
    const overlay = overlayRef.current;
    const backdrop = backdropRef.current;
    const symbol = symbolRef.current;
    if (!overlay || !backdrop || !symbol) return;

    // La entrada termina sobre la portada
    window.scrollTo({ top: 0, behavior: 'instant' });
    const headerSymbol = document.querySelector('.site-header__symbol');

    // El logo real se esconde mientras el símbolo de la entrada viaja hacia él
    const hideLogo = headerSymbol
      ? track(
          headerSymbol.animate([{ opacity: 0 }, { opacity: 0 }], {
            duration: 1,
            fill: 'forwards'
          })
        )
      : null;

    const { cover, brand } = prepareCoverReveal();
    const reveal = cover.map(animation => track(animation));
    if (brand) track(brand);

    await document.fonts.ready;
    if (isStopped()) return;

    await assemblePieces();
    if (isStopped()) return;

    // Impacto: un aplastado mínimo que se siente como un "clic", mientras las
    // piezas pasan de su tono al blanco del logo
    whitenPieces();
    await track(
      symbol.animate(
        [
          { scale: '1 1' },
          { scale: '1.08 0.92', offset: 0.35 },
          { scale: '0.97 1.03', offset: 0.7 },
          { scale: '1 1' }
        ],
        { duration: IMPACT_MS, easing: 'ease-out' }
      )
    ).finished;
    if (isStopped()) return;

    // Viaje al logo: el fondo oscuro se desvanece al mismo ritmo y termina
    // justo cuando el símbolo llega; la portada entra en cadena mientras tanto
    const flight = createSpringEasing(SPRING_FLIGHT);
    track(
      backdrop.animate([{ opacity: 0 }], {
        duration: flight.duration,
        easing: BACKDROP_FADE_EASING,
        fill: 'forwards'
      })
    );
    flyToLogo(flight.duration, flight.easing);
    await wait(track, overlay, REVEAL_START_MS);
    if (isStopped()) return;
    reveal.forEach(animation => animation.play());

    await wait(track, overlay, Math.max(0, flight.duration - REVEAL_START_MS));
    if (isStopped()) return;

    // Relevo: el logo real ocupa el lugar del símbolo, con un pequeño rebote,
    // y el nombre sale de él
    overlay.style.visibility = 'hidden';
    hideLogo?.cancel();
    brand?.play();
    if (headerSymbol) {
      track(
        headerSymbol.animate(
          [
            { scale: '1' },
            { scale: '1.14', offset: 0.35 },
            { scale: '0.96', offset: 0.7 },
            { scale: '1' }
          ],
          { duration: LOGO_BOUNCE_MS, easing: 'ease-out' }
        )
      );
    }

    await Promise.all([...reveal, brand].map(animation => animation?.finished));

    // Las 4 piezas llegan desde las esquinas; termina cuando encaja la última
    async function assemblePieces() {
      if (!symbol) return;
      track(
        symbol.animate([{ opacity: 1 }, { opacity: 1 }], {
          duration: 1,
          fill: 'forwards'
        })
      );

      const reach = Math.max(window.innerWidth, window.innerHeight) / 2;
      const springs = PIECE_DELAYS_MS.map((_, index) => ({
        x: createSpringEasing(
          noBounceSpring(PIECE_STIFFNESS_X + index * PIECE_STIFFNESS_STEP)
        ),
        y: createSpringEasing(
          noBounceSpring(PIECE_STIFFNESS_Y + index * PIECE_STIFFNESS_STEP)
        )
      }));

      const arrivals = PIECE_DELAYS_MS.map((delay, index) => {
        const axisX = axisXRefs.current[index];
        const axisY = axisYRefs.current[index];
        const piece = pieceRefs.current[index];
        const spring = springs[index];
        const [x, y] = PIECE_DIRECTIONS[index] ?? [0, 0];
        if (!axisX || !axisY || !piece || !spring) return Promise.resolve();

        const startX = x * (reach + OFFSCREEN_MARGIN_PX);
        const startY = y * (reach + OFFSCREEN_MARGIN_PX);
        const moves = [
          axisX.animate(
            [{ translate: `${startX}px 0` }, { translate: '0 0' }],
            {
              duration: spring.x.duration,
              delay,
              easing: spring.x.easing,
              fill: 'both'
            }
          ),
          axisY.animate(
            [
              {
                translate: `0 ${startY}px`,
                rotate: `${x * y * PIECE_START_ROTATION_DEG}deg`
              },
              { translate: '0 0', rotate: '0deg' }
            ],
            {
              duration: spring.y.duration,
              delay,
              easing: spring.y.easing,
              fill: 'both'
            }
          ),
          piece.animate(
            [
              { filter: `blur(${START_BLUR_PX}px)` },
              { filter: 'blur(0px)', offset: BLUR_SHARE },
              { filter: 'blur(0px)' }
            ],
            {
              duration: spring.x.duration,
              delay,
              easing: 'ease-out',
              fill: 'both'
            }
          )
        ].map(animation => track(animation));
        return Promise.all(moves.map(move => move.finished));
      });

      await Promise.all(arrivals);
    }

    // Al encajar, cada pieza pasa de su tono al blanco del logo
    function whitenPieces() {
      pieceRefs.current.forEach(piece => {
        if (!piece) return;
        track(
          piece.animate([{ color: '#fff' }], {
            duration: IMPACT_MS,
            easing: 'ease-out',
            fill: 'forwards'
          })
        );
      });
    }

    // El símbolo vuela al logo real y se encoge hasta su tamaño
    function flyToLogo(duration: number, easing: string) {
      if (!symbol) return;
      const timing = { duration, easing, fill: 'forwards' as const };
      const to = headerSymbol?.getBoundingClientRect();
      if (!to) {
        track(symbol.animate([{ opacity: 0 }], timing));
        return;
      }

      const from = symbol.getBoundingClientRect();
      const start = centerOf(from);
      const end = centerOf(to);
      track(
        symbol.animate(
          [
            { transform: 'none' },
            {
              transform: `translate(${end.x - start.x}px, ${end.y - start.y}px) scale(${to.width / from.width})`
            }
          ],
          timing
        )
      );
    }
  }, onDone);

  const setRef =
    (list: { current: (HTMLDivElement | null)[] }, index: number) =>
    (element: HTMLDivElement | null) => {
      list.current[index] = element;
    };

  return {
    overlayRef,
    backdropRef,
    symbolRef,
    setAxisXRef: (index: number) => setRef(axisXRefs, index),
    setAxisYRef: (index: number) => setRef(axisYRefs, index),
    setPieceRef: (index: number) => setRef(pieceRefs, index)
  };
}
