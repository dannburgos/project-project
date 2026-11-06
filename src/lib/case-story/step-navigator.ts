import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  SCROLL_LOCK_END_EVENT,
  SCROLL_LOCK_START_EVENT
} from '@/hooks/use-smooth-scroll';
import { SURFACE_CHANGE_EVENT } from '@/hooks/use-surface-under';
import { STORY_JUMP_EVENT, announceSection } from '@/lib/case-story/motion';

// Un gesto de scroll = un paso, para un escenario fijo cuyo movimiento ya
// está armado en una línea de tiempo con una etiqueta por paso. El paso
// siguiente entra solo, con impulso y frenado, y mientras corre (o mientras
// sigue la inercia del trackpad) no cuenta otro. La página acompaña al
// escenario: al terminar sigue hacia lo que viene después. El contador (los
// cuadrados) puede saltar directo a una sección.

const GESTURE_GAP_MS = 220;
const NEXT_KEYS = new Set(['ArrowDown', 'PageDown', ' ']);
const PREVIOUS_KEYS = new Set(['ArrowUp', 'PageUp']);

type StepNavigatorOptions = {
  root: HTMLElement;
  stage: HTMLElement;
  timeline: gsap.core.Timeline;
  // Una etiqueta de la línea de tiempo por paso, en orden
  labels: readonly string[];
  // Paso → sección a la que pertenece, y primer paso de cada sección
  stepSection: readonly number[];
  sectionStep: readonly number[];
  // Cada vez que cambia el paso (para el color del mundo, la barra, etc.)
  onStep?: (step: number) => void;
};

export function createStepNavigator({
  root,
  stage,
  timeline,
  labels,
  stepSection,
  sectionStep,
  onStep
}: StepNavigatorOptions) {
  const stepCount = labels.length;
  const stepLength = window.innerHeight * 0.6;
  let current = -1;
  let isBusy = false;
  let isLocked = false;
  let lastEventTime = 0;
  let playing: gsap.core.Tween | null = null;

  const lock = () => {
    if (isLocked) return;
    isLocked = true;
    window.dispatchEvent(new Event(SCROLL_LOCK_START_EVENT));
  };
  const unlock = () => {
    if (!isLocked) return;
    isLocked = false;
    window.dispatchEvent(new Event(SCROLL_LOCK_END_EVENT));
  };
  const notifySurface = () =>
    window.dispatchEvent(new Event(SURFACE_CHANGE_EVENT));

  const trigger = ScrollTrigger.create({
    trigger: stage,
    start: 'top top',
    end: `+=${stepLength * (stepCount - 1)}`,
    pin: true,
    onEnterBack: () => {
      if (isLocked) return;
      // Volviendo desde abajo: el escenario retoma en su último paso
      lock();
      current = stepCount - 1;
      timeline.seek(labels[current]);
      announceSection(root, stepSection[current]);
      onStep?.(current);
    }
  });
  // Los cuadrados se ven mientras el caso ocupa la pantalla (también en su
  // último paso) y se esconden en lo que viene después
  const counterTrigger = ScrollTrigger.create({
    trigger: root,
    start: 'top top',
    end: 'bottom 50%',
    onToggle: self =>
      root.toggleAttribute('data-counter-hidden', !self.isActive)
  });

  const syncScroll = (step: number) => {
    window.scrollTo(0, trigger.start + stepLength * step);
  };

  const settle = (step: number) => {
    current = step;
    announceSection(root, stepSection[step]);
    onStep?.(step);
    syncScroll(step);
  };

  const goTo = (step: number) => {
    const from = current;
    playing?.kill();
    settle(step);
    isBusy = true;
    const distance = Math.abs(timeline.labels[labels[step]] - timeline.time());
    const isGoingBack = from > step;
    let frame = 0;
    playing = timeline.tweenTo(labels[step], {
      duration: isGoingBack
        ? gsap.utils.clamp(0.8, 1.3, distance * 0.5)
        : gsap.utils.clamp(1.1, 2.6, distance * 0.9),
      ease: 'none',
      onUpdate: () => {
        frame += 1;
        if (frame % 8 === 0) notifySurface();
      },
      onComplete: () => {
        isBusy = false;
        notifySurface();
      }
    });
  };

  // Salto desde el contador: directo a la sección, con un fundido corto
  const jumpTo = (step: number) => {
    if (step === current && !isBusy) return;
    playing?.kill();
    isBusy = true;
    gsap.to(stage, {
      autoAlpha: 0,
      duration: 0.18,
      ease: 'power1.out',
      overwrite: true,
      onComplete: () => {
        settle(step);
        timeline.seek(labels[step]);
        notifySurface();
        gsap.to(stage, {
          autoAlpha: 1,
          duration: 0.32,
          ease: 'power1.out',
          onComplete: () => {
            isBusy = false;
          }
        });
      }
    });
  };

  // direction: 1 baja, -1 sube. Devuelve true si el escenario usa el gesto.
  const consume = (direction: 1 | -1) => {
    if (!isLocked) return false;
    const now = performance.now();
    const isNewGesture = now - lastEventTime > GESTURE_GAP_MS;
    lastEventTime = now;
    if (isBusy || !isNewGesture) return true;
    const next = current + direction;
    if (next < 0) return true;
    if (next > stepCount - 1) {
      unlock();
      return false;
    }
    goTo(next);
    return true;
  };

  const handleWheel = (event: WheelEvent) => {
    const delta = event.deltaMode === 1 ? event.deltaY * 16 : event.deltaY;
    if (!delta) return;
    if (consume(delta > 0 ? 1 : -1)) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  };
  let lastTouchY: number | null = null;
  const handleTouchStart = (event: TouchEvent) => {
    lastTouchY = event.touches[0]?.clientY ?? null;
  };
  const handleTouchMove = (event: TouchEvent) => {
    const y = event.touches[0]?.clientY;
    if (y === undefined || lastTouchY === null) return;
    const delta = lastTouchY - y;
    lastTouchY = y;
    if (delta && consume(delta > 0 ? 1 : -1)) event.preventDefault();
  };
  const handleKeyDown = (event: KeyboardEvent) => {
    const target = event.target;
    if (
      target instanceof Element &&
      target.closest('input, textarea, select, [contenteditable]')
    )
      return;
    const direction = NEXT_KEYS.has(event.key)
      ? 1
      : PREVIOUS_KEYS.has(event.key)
        ? -1
        : 0;
    if (!direction) return;
    lastEventTime = 0;
    if (consume(direction)) event.preventDefault();
  };
  const handleJump = (event: Event) => {
    const section = (event as CustomEvent<number>).detail;
    lock();
    jumpTo(sectionStep[section] ?? 0);
  };

  window.addEventListener('wheel', handleWheel, {
    passive: false,
    capture: true
  });
  window.addEventListener('touchstart', handleTouchStart, { passive: true });
  window.addEventListener('touchmove', handleTouchMove, { passive: false });
  window.addEventListener('keydown', handleKeyDown);
  root.addEventListener(STORY_JUMP_EVENT, handleJump);

  const surfaceTimeout = window.setTimeout(notifySurface, 600);

  // El escenario toma el control solo si la página arranca en él
  if (window.scrollY <= trigger.end) {
    lock();
    settle(0);
    timeline.seek(labels[0]);
  }

  return () => {
    playing?.kill();
    gsap.killTweensOf(stage);
    gsap.set(stage, { clearProps: 'opacity,visibility' });
    window.clearTimeout(surfaceTimeout);
    window.removeEventListener('wheel', handleWheel, { capture: true });
    window.removeEventListener('touchstart', handleTouchStart);
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('keydown', handleKeyDown);
    root.removeEventListener(STORY_JUMP_EVENT, handleJump);
    unlock();
    trigger.kill();
    counterTrigger.kill();
    root.removeAttribute('data-counter-hidden');
  };
}
