import { gsap } from 'gsap';

import { queryAll } from '@/lib/case-story/motion';

// Mosaico del sistema de diseño (referencia: brand.dropbox.com). La sección
// se fija y el scroll cuenta tres momentos, como un zoom hacia atrás:
// 1. Una tarjeta clara y grande con la frase del sistema.
// 2. La tarjeta se encoge y se vuelve un cuadro oscuro con su descripción;
//    las tarjetas de los temas asoman por los bordes.
// 3. Todo se aleja (también la cuadrícula de líneas): la descripción se va,
//    el cuadro termina siendo el logo y las tarjetas llegan a su lugar.

// Lugares de la tarjeta central, en % del marco del mosaico (medidos en la
// referencia). El último lo pone el CSS.
const TILE_STATEMENT = { left: '26%', top: '2%', width: '48%', height: '94%' };
// El hueco del centro del molinete (el mismo del CSS)
const TILE_LOGO = {
  left: '46.875%',
  top: '44.767%',
  width: '6.25%',
  height: '10.465%'
};
const TILE_DESCRIPTION = {
  left: '35.5%',
  top: '20%',
  width: '29%',
  height: '56%'
};

// Qué tan lejos del centro y qué tan grandes van las tarjetas en cada momento
const CARDS_FAR = { spread: 4.6, scale: 2.4 };
const CARDS_PEEK = { spread: 3, scale: 1.8 };
// Tamaño de la cuadrícula de líneas en cada momento
const LINES_FAR = 3;
const LINES_PEEK = 2;

// Paleta del caso (la misma de las variables del CSS)
const PAPER = '#fafaf8';
const INK = '#161615';

export function setupDesignSystemMosaic(root: HTMLElement) {
  const stage = root.querySelector<HTMLElement>('[data-ds-mosaic]');
  const tile = root.querySelector<HTMLElement>('[data-ds-tile]');
  if (!stage || !tile) return () => {};
  const frame = tile.parentElement ?? stage;
  const cards = queryAll(stage, '[data-ds-card]');
  const lines = stage.querySelector('[data-ds-lines]');
  const statement = tile.querySelector('[data-ds-statement]');
  const text = tile.querySelector('[data-ds-text]');
  const hint = stage.querySelector('[data-ds-hint]');

  // Distancia de cada tarjeta al centro del marco (en su lugar final),
  // multiplicada para llevarla lejos
  const offset = (card: HTMLElement, axis: 'x' | 'y', spread: number) => {
    const isX = axis === 'x';
    const center = isX
      ? card.offsetLeft + card.offsetWidth / 2
      : card.offsetTop + card.offsetHeight / 2;
    const middle = (isX ? frame.offsetWidth : frame.offsetHeight) / 2;
    return (center - middle) * (spread - 1);
  };
  const cardsAt = (place: { spread: number; scale: number }) => ({
    x: (_: number, card: HTMLElement) => offset(card, 'x', place.spread),
    y: (_: number, card: HTMLElement) => offset(card, 'y', place.spread),
    scale: place.scale
  });

  const timeline = gsap.timeline({
    defaults: { ease: 'power2.inOut' },
    scrollTrigger: {
      trigger: stage,
      start: 'top top',
      end: '+=260%',
      pin: true,
      scrub: 0.8,
      invalidateOnRefresh: true
    }
  });

  timeline
    // 1 → 2: la tarjeta clara se encoge y se vuelve oscura
    .fromTo(
      tile,
      { ...TILE_STATEMENT, backgroundColor: PAPER, color: INK },
      {
        ...TILE_DESCRIPTION,
        backgroundColor: INK,
        color: PAPER,
        duration: 0.35
      },
      0.08
    )
    .to(
      [statement, hint],
      { autoAlpha: 0, y: -16, duration: 0.12, ease: 'power1.in' },
      0.08
    )
    .fromTo(
      text,
      { autoAlpha: 0, y: 16 },
      { autoAlpha: 1, y: 0, duration: 0.12, ease: 'power1.out' },
      0.3
    )
    .fromTo(
      cards,
      cardsAt(CARDS_FAR),
      { ...cardsAt(CARDS_PEEK), duration: 0.35 },
      0.08
    )
    .fromTo(
      lines,
      { scale: LINES_FAR },
      { scale: LINES_PEEK, duration: 0.35 },
      0.08
    )
    // 2 → 3: todo se aleja hasta armar el mosaico
    .to(text, { autoAlpha: 0, duration: 0.1, ease: 'power1.in' }, 0.56)
    .to(tile, { ...TILE_LOGO, duration: 0.5 }, 0.5)
    .to(cards, { x: 0, y: 0, scale: 1, duration: 0.5 }, 0.5)
    .to(lines, { scale: 1, duration: 0.5 }, 0.5);

  return () => {
    timeline.scrollTrigger?.kill();
    timeline.kill();
    gsap.set([tile, statement, text, hint, lines, ...cards], {
      clearProps: 'all'
    });
  };
}
