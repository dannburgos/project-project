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
// - speed / spin: parallax ligado al scroll
// - arc / line / draw: trazos que se dibujan con el scroll
// Sin animación (reducir movimiento) el contenido queda visible tal cual y
// los saltos del submenú son directos.

const EASE_OUT = 'expo.out';
const EASE_BOUNCE = 'back.out(2.2)';
const ENTER = 'top 82%';

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

// Los capítulos avisan cuál está en pantalla, para los punticos del submenú.
// El anillo de la flor, en cambio, mide el recorrido de todo el caso: no se
// reinicia al cambiar de capítulo
function trackChapters(root: HTMLElement) {
  const chapters = queryAll(root, '[data-pet-chapter]').map(chapter =>
    ScrollTrigger.create({
      trigger: chapter,
      start: 'top center',
      end: 'bottom center',
      onToggle: self => {
        if (self.isActive)
          announceSection(root, Number(chapter.dataset.petChapter));
      }
    })
  );
  const overall = ScrollTrigger.create({
    trigger: root,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: self =>
      root.style.setProperty('--pet-progress', self.progress.toFixed(3))
  });
  return [...chapters, overall];
}

function listenJumps(root: HTMLElement, onJump: (index: number) => void) {
  const handleJump = (event: Event) =>
    onJump((event as CustomEvent<number>).detail);
  root.addEventListener(STORY_JUMP_EVENT, handleJump);
  return () => root.removeEventListener(STORY_JUMP_EVENT, handleJump);
}

// Conectores del módulo Flow: cada uno sale del costado de una pantalla que
// mira hacia la siguiente, cruza y baja con una esquina redonda hasta ella.
// Se recalculan cuando cambia el tamaño de la página.
const WIRE_RADIUS = 32;

function drawWire(box: DOMRect, start: DOMRect, end: DOMRect) {
  const startCenter = start.left + start.width / 2;
  const endCenter = end.left + end.width / 2;
  const direction = endCenter >= startCenter ? 1 : -1;
  const x1 = (direction === 1 ? start.right : start.left) - box.left;
  const y1 = start.top - box.top + start.height * 0.72;
  const x2 = endCenter - box.left;
  const y2 = end.top - box.top;
  const radius = Math.min(WIRE_RADIUS, Math.abs(x2 - x1), Math.abs(y2 - y1));
  return `M ${x1} ${y1} H ${x2 - radius * direction} Q ${x2} ${y1} ${x2} ${y1 + radius} V ${y2}`;
}

function placeWires(root: HTMLElement) {
  queryAll(root, '[data-pet-flowshow]').forEach(module => {
    const svg = module.querySelector<SVGSVGElement>('svg');
    if (!svg) return;
    const box = module.getBoundingClientRect();
    const nodes = queryAll(module, '[data-pet-wire-node]').map(node =>
      node.getBoundingClientRect()
    );
    svg.setAttribute('viewBox', `0 0 ${box.width} ${box.height}`);
    queryAll<SVGPathElement>(module, '[data-pet-wire]').forEach(
      (wire, index) => {
        const start = nodes[index];
        const end = nodes[index + 1];
        if (start && end) wire.setAttribute('d', drawWire(box, start, end));
      }
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
  label.textContent = names[index]?.textContent ?? '';
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
        // Se pinta mientras entra y termina cuando el texto completo ya está en
        // la parte de abajo de la pantalla: así, cuando se baja a leer el
        // módulo, todo el texto ya está encendido
        start: 'top 95%',
        end: 'bottom 80%',
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

  // El cuadro llega entero, con toda su info adentro, un momento después de
  // que sale el título: primero el título y luego la tabla, sin que sus piezas
  // aparezcan sueltas
  queryAll(root, '[data-pet-after-title]').forEach(box => {
    // Se dispara junto con el título que lo precede, no cuando el cuadro ya
    // subió: así llega mientras todavía se está viendo, justo debajo del título
    const title = box.previousElementSibling ?? box;
    gsap.from(box, {
      y: 40,
      autoAlpha: 0,
      duration: 0.9,
      delay: 0.7,
      ease: EASE_OUT,
      scrollTrigger: { trigger: title, start: ENTER, once: true }
    });
  });

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

  // Etapas del proceso: suben un poco y aparecen, una tras otra, sin rebote
  queryAll(root, '[data-pet-rise]').forEach(group => {
    gsap.from(queryAll(group, '[data-pet-rise-item]'), {
      y: 24,
      autoAlpha: 0,
      duration: 0.9,
      ease: EASE_OUT,
      stagger: 0.08,
      scrollTrigger: { trigger: group, start: 'top 80%' }
    });
  });

  queryAll(root, '[data-pet-shapes]').forEach(group => {
    gsap.from(queryAll(group, '[data-pet-shape]'), {
      scale: 0,
      rotate: (index: number) => (index % 2 === 0 ? -30 : 24),
      transformOrigin: '50% 50%',
      duration: 1.1,
      ease: 'elastic.out(1, 0.6)',
      // Arranca cuando el grupo completo ya está a la vista; si es más alto que
      // la pantalla, cuando su parte de arriba llega a la mitad
      scrollTrigger: {
        trigger: group,
        start: () =>
          group.offsetHeight < window.innerHeight * 0.85
            ? 'bottom 92%'
            : 'top 50%'
      }
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
    // Los grados pueden indicarse en el atributo (data-pet-spin="90")
    gsap.to(shape, {
      rotate: Number(shape.dataset.petSpin) || 180,
      ease: 'none',
      scrollTrigger: {
        trigger: shape,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });

  // La imagen principal sube y crece con el scroll, sin cambiar su borde: la
  // esquina siempre se ve de 32 px, así que el radio se compensa mientras
  // escala (a 80 % de tamaño, 40 px; a 100 %, 32 px)
  queryAll(root, '[data-pet-expand]').forEach(media => {
    gsap.fromTo(
      media,
      {
        scale: 0.8,
        y: 48,
        transformOrigin: 'center top',
        '--cover-radius': '40px'
      },
      {
        scale: 1,
        y: 0,
        '--cover-radius': '32px',
        ease: 'none',
        scrollTrigger: {
          trigger: media,
          start: 'top bottom',
          end: 'top 15%',
          scrub: true
        }
      }
    );
  });

  // Paso al capítulo de diseño: el azul se abre desde abajo con el scroll
  queryAll(root, '[data-pet-seam]').forEach(seam => {
    gsap.fromTo(
      seam,
      { '--pet-seam': 0 },
      {
        '--pet-seam': 1,
        ease: 'none',
        scrollTrigger: {
          trigger: seam,
          start: 'top bottom',
          end: 'top top',
          scrub: true
        }
      }
    );
  });

  // Conectores del módulo Flow: cada línea crece con el scroll desde su
  // pantalla y termina justo cuando llega a la siguiente
  queryAll<SVGGeometryElement>(root, '[data-pet-wire]').forEach(path => {
    gsap.fromTo(
      path,
      { strokeDashoffset: 1 },
      {
        strokeDashoffset: 0,
        ease: 'none',
        // Sin redondear: el trazo mide 1, así que redondeado saltaría de golpe
        autoRound: false,
        scrollTrigger: {
          trigger: path,
          start: 'top 80%',
          end: 'bottom 50%',
          scrub: true,
          invalidateOnRefresh: true
        }
      }
    );
  });

  // Trazos SVG con pathLength="1" (arcos)
  queryAll<SVGGeometryElement>(root, '[data-pet-arc], [data-pet-draw]').forEach(
    path => {
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
    }
  );

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

  // Mapa de empatía: sobre cada línea azul crece, muy sutil, una verde desde
  // el centro hacia los extremos, al ritmo del giro de la flor
  queryAll(root, '[data-pet-line-fill]').forEach(fill => {
    gsap.to(fill, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: fill.closest('[data-pet-lines]') ?? fill,
        start: 'top 65%',
        end: 'bottom 50%',
        scrub: true
      }
    });
  });
}

// Customer journey: cuando la curva ya está bien a la vista, la línea se dibuja
// sola, de izquierda a derecha, en un par de segundos; a medida que llega a un
// punto aparece su emoción y sube su etapa. No depende de cuánto se baje: una
// vez que empieza, termina y la información queda completa. En celular no hay
// curva y las etapas suben una tras otra.
function revealJourney(root: HTMLElement) {
  const media = gsap.matchMedia();

  media.add('(min-width: 1024px)', () => {
    queryAll(root, '[data-pet-journey]').forEach(journey => {
      const curve = journey.querySelector('.pet-curve__svg');
      const dots = queryAll(journey, '[data-pet-curve-dot]');
      const labels = queryAll(journey, '[data-pet-curve-label]');
      const stages = queryAll(journey, '[data-pet-journey-stage]');
      if (stages.length === 0) return;

      const timeline = gsap.timeline({
        // Arranca cuando la curva ya subió a la mitad de la pantalla, para que
        // se vea cómo crece desde el principio
        scrollTrigger: { trigger: journey, start: 'top 62%', once: true }
      });

      const step = 0.32;
      const lineEnd = 0.2 + step * (dots.length - 1) + 0.25;
      if (curve) {
        timeline.fromTo(
          curve,
          { clipPath: 'inset(-20% 100% -20% 0%)' },
          {
            clipPath: 'inset(-20% -2% -20% 0%)',
            duration: lineEnd,
            ease: 'power1.inOut'
          },
          0
        );
      }
      // Cada punto, su etiqueta y su etapa aparecen cuando la línea llega
      stages.forEach((stage, index) => {
        const at = 0.1 + index * step;
        if (dots[index]) {
          timeline.fromTo(
            dots[index],
            { scale: 0 },
            { scale: 1, duration: 0.4, ease: 'back.out(2.5)' },
            at
          );
        }
        if (labels[index]) {
          timeline.fromTo(
            labels[index],
            { autoAlpha: 0, y: 6 },
            { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power2.out' },
            at + 0.1
          );
        }
        timeline.fromTo(
          stage,
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          at + 0.1
        );
      });
    });
  });

  media.add('(max-width: 1023px)', () => {
    queryAll(root, '[data-pet-journey]').forEach(journey => {
      const stages = queryAll(journey, '[data-pet-journey-stage]');
      if (stages.length === 0) return;
      gsap.fromTo(
        stages,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { trigger: journey, start: 'top 85%', once: true }
        }
      );
    });
  });

  return media;
}

// Diagramas que crecen al llegar: sus líneas se dibujan a la vez que nacen los
// nodos. El site map lo hace con CSS (retrasos encadenados) y solo hay que
// avisarle cuándo empezar; los user flows se arman con una línea de tiempo.
function growDiagrams(root: HTMLElement) {
  const cleanups: (() => void)[] = [];

  queryAll(root, '[data-pet-diagram]').forEach(diagram => {
    diagram.setAttribute('data-pending', '');
    const trigger = ScrollTrigger.create({
      trigger: diagram,
      start: 'top 75%',
      once: true,
      onEnter: () => diagram.setAttribute('data-drawn', '')
    });
    cleanups.push(() => {
      trigger.kill();
      diagram.removeAttribute('data-pending');
      diagram.removeAttribute('data-drawn');
    });
  });

  const context = gsap.context(() => {
    queryAll(root, '[data-pet-flowchart]').forEach(chart => {
      // Cada flujo aparece completo de una vez: primero el primero y, justo
      // después, el segundo. Nada paso a paso
      const timeline = gsap.timeline({
        scrollTrigger: { trigger: chart, start: 'top 75%', once: true }
      });
      queryAll(chart, '.pet-flowchart__flow').forEach((flow, index) => {
        const at = index * 0.45;
        timeline.fromTo(
          flow,
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          at
        );
        // Las líneas se dibujan todas a la vez mientras el flujo entra
        timeline.fromTo(
          queryAll(flow, '[data-fc-reveal]'),
          { strokeDashoffset: 1 },
          { strokeDashoffset: 0, duration: 0.5, ease: 'power2.out' },
          at
        );
      });
    });
  }, root);

  return () => {
    cleanups.forEach(cleanup => cleanup());
    context.revert();
  };
}

// Con animación: todo el movimiento del caso y saltos con cortina
export function setupPetrideMotion(root: HTMLElement) {
  const stopWires = watchWires(root);
  splitLetters(root);
  fillWords(root);
  revealOnEnter(root);
  scrubOnScroll(root);
  const journey = revealJourney(root);
  const diagrams = growDiagrams(root);
  const triggers = trackChapters(root);
  const counter = watchCounterVisibility(root);
  const stopJumps = listenJumps(root, index => curtainJump(root, index));
  ScrollTrigger.refresh();

  return () => {
    stopJumps();
    stopWires();
    journey.revert();
    diagrams();
    triggers.forEach(trigger => trigger.kill());
    counter.kill();
    root.removeAttribute('data-counter-hidden');
  };
}
