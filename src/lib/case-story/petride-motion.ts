import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  SCROLL_LOCK_END_EVENT,
  SCROLL_LOCK_START_EVENT
} from '@/hooks/use-smooth-scroll';
import {
  STORY_JUMP_EVENT,
  announceSection,
  queryAll,
  watchCounterVisibility
} from '@/lib/case-story/motion';

// Movimiento del caso de PetRide (scroll libre; referencias: fineacts.co,
// carnilove, neutomni y gpg). Todo se arma desde el HTML con data-pet-*:
// - letters: el título sube letra por letra con rebote
// - fill: el párrafo se pinta palabra por palabra con el scroll
// - rise / pop / shape / slide: piezas que entran al llegar a la vista
// - ghost / speed / spin: parallax ligado al scroll
// - arc / line / draw: trazos que se dibujan con el scroll
// - journey: módulo fijo en el que la etapa activa avanza con el scroll
// Sin animación (reducir movimiento) el contenido queda visible tal cual y
// los saltos del submenú son directos.

const EASE_OUT = 'expo.out';
const EASE_BOUNCE = 'back.out(2.2)';
const ENTER = 'top 82%';
// El journey solo se fija con sus seis columnas (desde 1024 px) y cuando
// cabe completo en el alto de la pantalla
const JOURNEY_PIN_QUERY = '(min-width: 1024px) and (min-height: 720px)';

function pageTop(element: Element) {
  return element.getBoundingClientRect().top + window.scrollY;
}

function chapterOf(root: HTMLElement, index: number) {
  return root.querySelector<HTMLElement>(`[data-pet-chapter="${index}"]`);
}

// Llega a un capítulo sin recorrer el scroll: pausa el scroll suave, salta y
// mueve el foco al título para que el lector de pantalla siga el cambio
function jumpTo(root: HTMLElement, index: number) {
  const chapter = chapterOf(root, index);
  if (!chapter) return;
  window.dispatchEvent(new Event(SCROLL_LOCK_START_EVENT));
  window.scrollTo({ top: pageTop(chapter), behavior: 'instant' });
  ScrollTrigger.update();
  window.dispatchEvent(new Event(SCROLL_LOCK_END_EVENT));
  chapter
    .querySelector<HTMLElement>('[data-pet-focus]')
    ?.focus({ preventScroll: true });
  announceSection(root, index);
}

// Los capítulos avisan cuál está en pantalla y cuánto lleva recorrido, para
// los punticos del submenú
function trackChapters(root: HTMLElement) {
  return queryAll(root, '[data-pet-chapter]').map(chapter =>
    ScrollTrigger.create({
      trigger: chapter,
      start: 'top center',
      end: 'bottom center',
      onToggle: self => {
        if (self.isActive)
          announceSection(root, Number(chapter.dataset.petChapter));
      },
      onUpdate: self => {
        if (self.isActive)
          root.style.setProperty('--pet-progress', self.progress.toFixed(3));
      }
    })
  );
}

function listenJumps(root: HTMLElement, onJump: (index: number) => void) {
  const handleJump = (event: Event) =>
    onJump((event as CustomEvent<number>).detail);
  root.addEventListener(STORY_JUMP_EVENT, handleJump);
  return () => root.removeEventListener(STORY_JUMP_EVENT, handleJump);
}

// Conector del módulo Flow: sale del lado derecho de la primera pantalla,
// cruza y baja con una esquina redonda hasta la segunda. Se recalcula cuando
// cambia el tamaño de la página.
const WIRE_RADIUS = 32;

function placeWires(root: HTMLElement) {
  queryAll(root, '[data-pet-flowshow]').forEach(module => {
    const svg = module.querySelector<SVGSVGElement>('svg');
    const wire = module.querySelector<SVGPathElement>('[data-pet-wire]');
    const from = module.querySelector('[data-pet-wire-end="from"]');
    const to = module.querySelector('[data-pet-wire-end="to"]');
    if (!svg || !wire || !from || !to) return;
    const box = module.getBoundingClientRect();
    const start = from.getBoundingClientRect();
    const end = to.getBoundingClientRect();
    const x1 = start.right - box.left;
    const y1 = start.top - box.top + start.height * 0.72;
    const x2 = end.left - box.left + end.width / 2;
    const y2 = end.top - box.top;
    const radius = Math.min(WIRE_RADIUS, Math.abs(x2 - x1), Math.abs(y2 - y1));
    svg.setAttribute('viewBox', `0 0 ${box.width} ${box.height}`);
    wire.setAttribute(
      'd',
      `M ${x1} ${y1} H ${x2 - radius} Q ${x2} ${y1} ${x2} ${y1 + radius} V ${y2}`
    );
  });
}

function watchWires(root: HTMLElement) {
  const handleRefresh = () => placeWires(root);
  placeWires(root);
  ScrollTrigger.addEventListener('refreshInit', handleRefresh);
  return () => ScrollTrigger.removeEventListener('refreshInit', handleRefresh);
}

// Sin animación: solo el seguimiento de capítulos y saltos directos
export function setupPetrideStatic(root: HTMLElement) {
  const stopWires = watchWires(root);
  const triggers = trackChapters(root);
  const counter = watchCounterVisibility(root);
  const stopJumps = listenJumps(root, index => jumpTo(root, index));
  return () => {
    stopJumps();
    stopWires();
    triggers.forEach(trigger => trigger.kill());
    counter.kill();
    root.removeAttribute('data-counter-hidden');
  };
}

// Cortina de salto: cubre la pantalla con el nombre del capítulo, salta por
// detrás y se retira hacia arriba
function curtainJump(root: HTMLElement, index: number) {
  const curtain = root.querySelector<HTMLElement>('[data-pet-curtain]');
  const label = root.querySelector<HTMLElement>('[data-pet-curtain-label]');
  const names = queryAll(root, '[data-pet-section-name]');
  if (!curtain || !label) {
    jumpTo(root, index);
    return;
  }
  label.textContent = `${String(index + 1).padStart(2, '0')} ${names[index]?.textContent ?? ''}`;
  gsap.killTweensOf([curtain, label]);
  gsap
    .timeline()
    .set(curtain, { autoAlpha: 1 })
    .fromTo(
      curtain,
      { clipPath: 'inset(100% 0% 0% 0% round 48px 48px 0px 0px)' },
      {
        clipPath: 'inset(0% 0% 0% 0% round 0px 0px 0px 0px)',
        duration: 0.34,
        ease: 'expo.in'
      }
    )
    .fromTo(
      label,
      { yPercent: 110 },
      { yPercent: 0, duration: 0.34, ease: EASE_OUT },
      '<0.12'
    )
    .add(() => jumpTo(root, index))
    .to(label, { yPercent: -110, duration: 0.3, ease: 'expo.in' }, '+=0.12')
    .to(
      curtain,
      {
        clipPath: 'inset(0% 0% 100% 0% round 0px 0px 48px 48px)',
        duration: 0.5,
        ease: 'expo.inOut'
      },
      '<0.08'
    )
    .set(curtain, { autoAlpha: 0 });
}

function splitLetters(root: HTMLElement) {
  queryAll(root, '[data-pet-letters]').forEach(title => {
    const letters = queryAll(title, '.pet-letter');
    gsap.from(letters, {
      yPercent: 110,
      rotate: (index: number) => (index % 2 === 0 ? 14 : -10),
      duration: 1.1,
      ease: EASE_BOUNCE,
      stagger: 0.045,
      scrollTrigger:
        title.dataset.petLetters === 'load'
          ? undefined
          : { trigger: title, start: ENTER }
    });
  });
}

function fillWords(root: HTMLElement) {
  queryAll(root, '[data-pet-fill]').forEach(text => {
    gsap.from(queryAll(text, '.pet-word'), {
      opacity: 0.18,
      stagger: 0.1,
      ease: 'none',
      scrollTrigger: {
        trigger: text,
        start: 'top 78%',
        end: 'bottom 42%',
        scrub: true
      }
    });
  });
}

function revealOnEnter(root: HTMLElement) {
  ScrollTrigger.batch(queryAll(root, '[data-pet-rise]'), {
    start: ENTER,
    once: true,
    onEnter: batch =>
      gsap.fromTo(
        batch,
        { y: 48, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 1, ease: EASE_OUT, stagger: 0.08 }
      )
  });
  gsap.set(queryAll(root, '[data-pet-rise]'), { autoAlpha: 0 });

  queryAll(root, '[data-pet-pop-group]').forEach(group => {
    gsap.from(queryAll(group, '[data-pet-pop]'), {
      scale: 0.4,
      autoAlpha: 0,
      duration: 0.7,
      ease: EASE_BOUNCE,
      stagger: { each: 0.05, from: 'start' },
      scrollTrigger: { trigger: group, start: ENTER }
    });
  });

  queryAll(root, '[data-pet-shapes]').forEach(group => {
    gsap.from(queryAll(group, '[data-pet-shape]'), {
      scale: 0,
      rotate: (index: number) => (index % 2 === 0 ? -30 : 24),
      transformOrigin: '50% 50%',
      duration: 1.1,
      ease: 'elastic.out(1, 0.6)',
      stagger: { each: 0.08, from: 'random' },
      scrollTrigger: { trigger: group, start: 'top 75%' }
    });
  });

  queryAll(root, '[data-pet-slides]').forEach(group => {
    gsap.from(queryAll(group, '[data-pet-slide]'), {
      xPercent: -40,
      autoAlpha: 0,
      duration: 0.9,
      ease: EASE_OUT,
      stagger: 0.1,
      scrollTrigger: { trigger: group, start: ENTER }
    });
  });

  queryAll(root, '[data-pet-grow]').forEach(circle => {
    gsap.from(circle, {
      scale: 0.2,
      autoAlpha: 0,
      duration: 1.3,
      ease: 'elastic.out(1, 0.7)',
      scrollTrigger: { trigger: circle, start: 'top 85%' }
    });
  });

  queryAll(root, '[data-pet-reveal]').forEach(media => {
    gsap.from(media, {
      clipPath: 'inset(100% 0% 0% 0% round 999px 999px 0px 0px)',
      duration: 1.4,
      ease: 'expo.inOut',
      scrollTrigger: { trigger: media, start: 'top 80%' }
    });
  });
}

function scrubOnScroll(root: HTMLElement) {
  queryAll(root, '[data-pet-ghost]').forEach(ghost => {
    gsap.fromTo(
      ghost,
      { xPercent: 12 },
      {
        xPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: ghost,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );
  });

  queryAll(root, '[data-pet-speed]').forEach(column => {
    const speed = Number(column.dataset.petSpeed ?? 0);
    gsap.fromTo(
      column,
      { yPercent: -speed * 50 },
      {
        yPercent: speed * 50,
        ease: 'none',
        scrollTrigger: {
          trigger: column.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );
  });

  queryAll(root, '[data-pet-spin]').forEach(shape => {
    gsap.to(shape, {
      rotate: 180,
      ease: 'none',
      scrollTrigger: {
        trigger: shape,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });

  queryAll(root, '[data-pet-expand]').forEach(media => {
    gsap.fromTo(
      media,
      { clipPath: 'inset(8% 22% 8% 22% round 999px)' },
      {
        clipPath: 'inset(0% 0% 0% 0% round 32px)',
        ease: 'none',
        scrollTrigger: {
          trigger: media,
          start: 'top 90%',
          end: 'center center',
          scrub: true
        }
      }
    );
  });

  // Trazos SVG con pathLength="1" (arcos y conectores)
  queryAll<SVGGeometryElement>(
    root,
    '[data-pet-arc], [data-pet-draw], [data-pet-wire]'
  ).forEach(path => {
    gsap.fromTo(
      path,
      { strokeDashoffset: 1 },
      {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: path.closest('[data-pet-trace]') ?? path,
          start: 'top 75%',
          end: 'center 45%',
          scrub: true
        }
      }
    );
  });

  // Líneas HTML: crecen desde su origen
  queryAll(root, '[data-pet-lines]').forEach(group => {
    gsap.from(queryAll(group, '[data-pet-line]'), {
      scale: 0,
      duration: 1,
      ease: 'expo.inOut',
      stagger: 0.06,
      scrollTrigger: { trigger: group, start: 'top 72%' }
    });
  });
}

function pinJourney(root: HTMLElement) {
  const media = gsap.matchMedia();
  media.add(JOURNEY_PIN_QUERY, () => {
    queryAll(root, '[data-pet-journey]').forEach(module => {
      const stages = queryAll(module, '[data-pet-stage]');
      const highlight = module.querySelector<HTMLElement>(
        '[data-pet-highlight]'
      );
      const setCurrent = (current: number) => {
        stages.forEach((stage, index) =>
          stage.toggleAttribute('data-current', index === current)
        );
        if (highlight)
          gsap.to(highlight, {
            xPercent: current * 100,
            duration: 0.6,
            ease: 'expo.out',
            overwrite: true
          });
      };
      setCurrent(0);
      ScrollTrigger.create({
        trigger: module,
        start: 'top top',
        end: `+=${stages.length * 50}%`,
        pin: true,
        // El capítulo es flex y GSAP no reserva el espacio del tramo fijo en
        // un padre flex si no se le pide: sin esto, lo que sigue se sube
        // encima del journey
        pinSpacing: true,
        onUpdate: self =>
          setCurrent(
            Math.min(
              stages.length - 1,
              Math.floor(self.progress * stages.length)
            )
          )
      });
    });
  });
  return media;
}

// Con animación: todo el movimiento del caso y saltos con cortina
export function setupPetrideMotion(root: HTMLElement) {
  const stopWires = watchWires(root);
  splitLetters(root);
  fillWords(root);
  revealOnEnter(root);
  scrubOnScroll(root);
  const journey = pinJourney(root);
  const triggers = trackChapters(root);
  const counter = watchCounterVisibility(root);
  const stopJumps = listenJumps(root, index => curtainJump(root, index));
  ScrollTrigger.refresh();

  return () => {
    stopJumps();
    stopWires();
    journey.revert();
    triggers.forEach(trigger => trigger.kill());
    counter.kill();
    root.removeAttribute('data-counter-hidden');
    queryAll(root, '[data-current]').forEach(stage =>
      stage.removeAttribute('data-current')
    );
  };
}
