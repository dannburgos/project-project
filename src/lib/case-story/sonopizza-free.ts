import { gsap } from 'gsap';

import { SURFACE_CHANGE_EVENT } from '@/hooks/use-surface-under';
import { queryAll } from '@/lib/case-story/motion';

// Escenas con scroll libre dentro del escenario de Sonopizza (data-free-view,
// como "La exploración visual"). Su área se recorre con el scroll normal y
// sus piezas (data-free-in) entran al aparecer dentro de esa área; el
// escenario solo cambia de paso cuando el área llega a su borde.

const EDGE = 2;

function areaOf(view: HTMLElement | undefined) {
  return view?.querySelector<HTMLElement>('[data-free-scroll-area]') ?? null;
}

export function setupFreeScroll(root: HTMLElement, stepView: HTMLElement[]) {
  const areas = queryAll(root, '[data-free-scroll-area]');

  // Las piezas entran al asomarse dentro de su área: suben o saltan. Con un
  // observador (y no con ScrollTrigger) también entran si se llega de un
  // salto, por ejemplo al volver desde la escena siguiente
  const reveal = (piece: HTMLElement, delay: number) => {
    const isPop = piece.dataset.freeFx === 'pop';
    gsap.fromTo(
      piece,
      isPop
        ? { autoAlpha: 0, scale: 0.6, rotate: -12 }
        : { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        scale: 1,
        rotate: 0,
        y: 0,
        duration: isPop ? 0.6 : 0.8,
        delay,
        ease: isPop ? 'back.out(1.8)' : 'expo.out'
      }
    );
  };
  const observers = areas.map(area => {
    const pieces = queryAll(area, '[data-free-in]');
    gsap.set(pieces, { autoAlpha: 0 });
    const observer = new IntersectionObserver(
      entries => {
        entries
          .filter(entry => entry.isIntersecting)
          .forEach((entry, index) => {
            observer.unobserve(entry.target);
            reveal(entry.target as HTMLElement, index * 0.06);
          });
      },
      { root: area, threshold: 0.12 }
    );
    pieces.forEach(piece => observer.observe(piece));
    return observer;
  });

  // Al recorrer el área, la barra de arriba revisa sobre qué color está
  const handleScroll = () =>
    window.dispatchEvent(new Event(SURFACE_CHANGE_EVENT));
  areas.forEach(area =>
    area.addEventListener('scroll', handleScroll, { passive: true })
  );

  // Devuelve el área del paso si todavía puede moverse en esa dirección
  const innerScroll = (step: number, direction: 1 | -1) => {
    const area = areaOf(stepView[step]);
    if (!area) return null;
    const canMove =
      direction > 0
        ? area.scrollTop + area.clientHeight < area.scrollHeight - EDGE
        : area.scrollTop > EDGE;
    return canMove ? area : null;
  };

  // Al entrar al paso, el área arranca arriba si se llega bajando y abajo si
  // se llega subiendo
  let previous = -1;
  const handleStep = (step: number) => {
    const area = areaOf(stepView[step]);
    if (area && previous !== step)
      area.scrollTop = step > previous ? 0 : area.scrollHeight;
    previous = step;
  };

  const teardown = () => {
    observers.forEach(observer => observer.disconnect());
    areas.forEach(area => area.removeEventListener('scroll', handleScroll));
  };

  return { innerScroll, handleStep, teardown };
}
