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
        // Se pinta en poco scroll: empieza al asomarse y termina cuando su
        // parte de arriba llega a la mitad de la pantalla
        start: 'top 90%',
        end: 'top 50%',
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

// Customer journey: al llegar a la sección, los títulos de las columnas nacen
// creciendo y, a la vez en todas, la información de cada una se despliega hacia
// abajo desde su título.
function revealJourney(root: HTMLElement) {
  const media = gsap.matchMedia();
  media.add('all', () => {
    queryAll(root, '[data-pet-journey-board]').forEach(board => {
      const stages = queryAll(board, '[data-pet-journey-stage]');
      const names = stages.map(stage =>
        stage.querySelector('.pet-journey__name')
      );
      const cards = stages.map(stage =>
        stage.querySelector('.pet-journey__card')
      );
      if (stages.length === 0) return;

      const timeline = gsap.timeline({
        // Arranca apenas la fila de títulos asoma por abajo
        scrollTrigger: { trigger: board, start: 'top 88%', once: true }
      });
      // Los títulos crecen, con un pequeño rebote
      timeline.fromTo(
        names,
        { autoAlpha: 0, scale: 0.6, y: -14, transformOrigin: '50% 0%' },
        { autoAlpha: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(2)' },
        0
      );
      // La información sale hacia abajo desde cada título, todas a la vez
      timeline.fromTo(
        cards,
        { autoAlpha: 0, clipPath: 'inset(0% 0% 100% 0% round 28px)' },
        {
          autoAlpha: 1,
          clipPath: 'inset(0% 0% 0% 0% round 28px)',
          duration: 0.7,
          ease: 'power3.out'
        },
        0.2
      );
      // Y su contenido entra fila por fila
      cards.forEach(card => {
        if (!card) return;
        timeline.fromTo(
          Array.from(card.children),
          { autoAlpha: 0, y: 14 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            ease: 'power2.out',
            stagger: 0.1
          },
          0.35
        );
      });
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
      queryAll(chart, '.pet-flowchart__flow').forEach(flow => {
        const timeline = gsap.timeline({
          scrollTrigger: { trigger: chart, start: 'top 70%', once: true }
        });
        const draw = (line: Element | null, at: string | number) => {
          const reveal = line?.querySelector('[data-fc-reveal]');
          if (!reveal) return 0;
          timeline.fromTo(
            reveal,
            { strokeDashoffset: 1 },
            { strokeDashoffset: 0, duration: 0.3, ease: 'none' },
            at
          );
          return 0.3;
        };
        const pop = (target: Element | null, at: string | number) => {
          if (!target) return;
          timeline.fromTo(
            target,
            { opacity: 0, scale: 0.85, transformOrigin: '50% 50%' },
            { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' },
            at
          );
        };

        pop(flow.querySelector('[data-fc-start]'), 0);
        let cursor = 0.25;
        queryAll(flow, '[data-fc-step]').forEach(step => {
          draw(step.querySelector(':scope > [data-fc-line]'), cursor);
          cursor += 0.28;
          pop(step.querySelector(':scope > [data-fc-node]'), cursor);
          const branch = step.querySelector(':scope > [data-fc-branch]');
          // Los "Sí" del camino principal salen con el paso al que llevan
          queryAll(step, ':scope > [data-fc-tag]').forEach(tag =>
            timeline.fromTo(
              tag,
              { opacity: 0 },
              { opacity: 1, duration: 0.2 },
              cursor + 0.2
            )
          );
          if (branch) {
            const lines = queryAll(branch, ':scope > [data-fc-line]');
            const tag = branch.querySelector(':scope > [data-fc-tag]');
            const leaf = branch.querySelector(':scope > [data-fc-leaf]');
            draw(lines[0] ?? null, cursor + 0.2);
            if (tag)
              timeline.fromTo(
                tag,
                { opacity: 0 },
                { opacity: 1, duration: 0.2 },
                cursor + 0.3
              );
            pop(leaf, cursor + 0.45);
            draw(lines[1] ?? null, cursor + 0.75);
          }
          cursor += 0.3;
        });
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
