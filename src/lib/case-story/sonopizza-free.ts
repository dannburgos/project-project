import { gsap } from 'gsap';

import { SURFACE_CHANGE_EVENT } from '@/hooks/use-surface-under';
import { queryAll } from '@/lib/case-story/motion';
import type { TimeRange } from '@/lib/case-story/sonopizza-scrub.types';

// Escenas con scroll libre dentro del escenario de Sonopizza (data-free-view,
// como "El sistema de diseño"), hechas de capítulos: cada uno entra de lado y
// su área se recorre como una página, pero el scroll que la mueve es el del
// escenario (addFreeChapters), hacia adelante y hacia atrás. Sus piezas
// (data-free-in) entran al aparecer dentro de su área.

export function setupFreeScroll(root: HTMLElement) {
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
    if (pieces.length > 0) gsap.set(pieces, { autoAlpha: 0 });
    const observer = new IntersectionObserver(
      entries => {
        entries
          .filter(entry => entry.isIntersecting)
          .forEach((entry, index) => {
            observer.unobserve(entry.target);
            reveal(entry.target as HTMLElement, index * 0.06);
          });
      },
      // Un poco antes de que entren por abajo, para que al bajar rápido ya
      // estén apareciendo y no pase el área en blanco
      { root: area, threshold: 0, rootMargin: '0px 0px 20% 0px' }
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

  const teardown = () => {
    observers.forEach(observer => observer.disconnect());
    areas.forEach(area => {
      area.removeEventListener('scroll', handleScroll);
      area.scrollTop = 0;
    });
  };

  return { teardown };
}

type ChapterCut = {
  // Recorte del capítulo antes y después de entrar, cuánto dura el corte y su
  // curva (los mismos de las escenas del escenario)
  hidden: string;
  shown: string;
  duration: number;
  ease: string;
  // Rato quieto al llegar a cada capítulo y al terminar de leerlo
  hold: number;
};

export type FreeChapter = {
  // Dónde puede quedarse quieto el escenario dentro del capítulo y, si se lee
  // hacia abajo, el tramo en que su área se desplaza
  rest: TimeRange;
  free: TimeRange | null;
};

// Los capítulos de una escena con scroll libre (cada data-free-scroll-area es
// uno) en la línea de tiempo. El primero ya está a la vista; cada uno de los
// siguientes entra de lado sobre el anterior, como los cortes entre escenas,
// mientras el anterior se corre un poco a la izquierda y su encabezado
// (data-free-heading) llega detrás del corte. Dentro de cada capítulo, su área
// se desplaza hacia abajo a la velocidad de la página. Devuelve, por capítulo,
// sus tramos de reposo y de lectura (en segundos)
export function addFreeChapters(
  timeline: gsap.core.Timeline,
  view: HTMLElement,
  secondsPerPixel: number,
  cut: ChapterCut
) {
  const areas = queryAll(view, '[data-free-scroll-area]');
  const chapters: FreeChapter[] = [];

  areas.forEach((area, index) => {
    let restStart = timeline.duration();
    const previous = areas[index - 1];
    if (previous) {
      // Lo que se ve en la primera pantalla del capítulo (su encabezado y
      // las hojas de arriba) no está puesto desde antes: el barrido muestra
      // solo el color de fondo y después entra la información, subiendo una
      // pieza tras otra, como en las demás escenas. Lo que queda más abajo
      // entra al asomarse mientras se lee (data-free-in)
      const areaTop = area.getBoundingClientRect().top;
      const firstScreen = queryAll(
        area,
        '[data-free-in], [data-free-cut]'
      ).filter(
        piece =>
          piece.getBoundingClientRect().top - areaTop < area.clientHeight * 0.95
      );
      firstScreen.forEach(piece => {
        piece.removeAttribute('data-free-in');
        piece.setAttribute('data-free-cut', '');
      });
      const pieces = [
        ...queryAll(area, '[data-free-heading] > *'),
        ...firstScreen
      ];
      const panel = area.firstElementChild;
      const at = timeline.duration();
      const sweep = { duration: cut.duration, ease: cut.ease };
      gsap.set(area, { clipPath: cut.hidden });
      gsap.set(pieces, { y: 40, autoAlpha: 0 });
      timeline
        // El borde cruza la pantalla de derecha a izquierda con el color de
        // fondo del capítulo
        .fromTo(
          area,
          { clipPath: cut.hidden },
          { clipPath: cut.shown, ...sweep },
          at
        )
        // Profundidad suave: el capítulo que llega se acomoda un poco hacia
        // la izquierda y el que se va se corre apenas, con la misma curva
        .fromTo(panel, { xPercent: 3 }, { xPercent: 0, ...sweep }, at)
        .fromTo(previous, { xPercent: 0 }, { xPercent: -8, ...sweep }, at)
        // Al terminar el barrido, la información sube y aparece
        .fromTo(
          pieces,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.1,
            ease: 'power3.out',
            stagger: 0.16
          },
          at + cut.duration - 0.45
        )
        // Ya tapado del todo, el capítulo anterior deja de pintarse
        .set(previous, { autoAlpha: 0 }, at + cut.duration);
      restStart = timeline.duration();
    }

    // La lectura empieza justo donde el capítulo queda armado y termina justo
    // en su final: sin ratos quietos en los bordes, el primer scroll ya mueve
    // el contenido (antes, unos 56 px de scroll no movían nada y con un mouse
    // de pasos cortos hacían falta varios giros). Un capítulo que cabe entero
    // en la pantalla sí lleva su rato quieto
    const range = () => Math.max(area.scrollHeight - area.clientHeight, 0);
    const seconds = range() * secondsPerPixel;
    let free: TimeRange | null = null;
    if (seconds > 0) {
      const start = timeline.duration();
      const travel = { progress: 0 };
      timeline.to(travel, {
        progress: 1,
        duration: seconds,
        ease: 'none',
        onUpdate: () => {
          area.scrollTop = travel.progress * range();
        }
      });
      free = { start, end: start + seconds };
    } else if (previous) {
      timeline.to({}, { duration: cut.hold });
    }
    chapters.push({
      rest: { start: restStart, end: timeline.duration() },
      free
    });
  });

  return chapters;
}
