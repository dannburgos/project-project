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
import { driveProgressCar } from '@/lib/case-story/toyota-progress-car';

// Movimiento del caso Toyota (scroll libre). Todo se arma desde el HTML con
// data-ty-*, siguiendo los principios de movimiento del manual de Toyota:
// hacia adelante (de izquierda a derecha, de abajo hacia arriba, de atrás
// hacia adelante), con aceleración suave, escalonado y con máscara.
// - mask: el titular sube detrás de una pared invisible
// - rise: el bloque sube y aparece al llegar
// - group / item: las piezas de un grupo llegan una tras otra
// - line: la línea de un recorrido se dibuja con el scroll (--draw)
// - fill: el párrafo se enciende palabra por palabra con el scroll
// - count: la cifra cuenta desde cero al llegar
// - grow: la captura de la portada crece hasta llenar la pantalla
// - cells / cell: los puntos de la matriz llegan fila por fila
// - speed: parallax suave (el fondo se mueve más lento)
// Sin animación (reducir movimiento) todo queda visible tal cual.

const EASE_OUT = 'power3.out';
const EASE_IN_OUT = 'power3.inOut';
const ENTER = 'top 85%';
// Suavizado de las animaciones de la apertura ligadas al scroll (segundos que
// tarda en alcanzar al scroll): el movimiento se ve fluido, sin saltos
const SCRUB_SMOOTHING = 0.6;
// Hasta dónde baja la foto larga de los pilares dentro de su marco (1 sería
// hasta el último píxel): se corta antes para que el suelo no ocupe tanto y
// solo se vea la mitad del asfalto
const STACK_DRIFT_END = 0.7;
const CLIP_BELOW = 'inset(0% 0% 100% 0%)';
// Las revelaciones ligadas al scroll terminan cuando la pieza ya se ve
// completa y entera en la parte baja de la pantalla, no cuando llega al
// centro: así, al subir a leer un módulo largo, ya está todo dibujado.
// Si la pieza es más alta que media pantalla, termina cuando su borde de
// arriba llega a un tercio de la pantalla, para que el módulo no salga antes.
const SETTLE_START = 'top 96%';
const SETTLE_END_LOW = 'bottom 90%';
const SETTLE_END_TALL = 'top 34%';

function settleEnd(element: Element) {
  return () =>
    element.getBoundingClientRect().height > window.innerHeight * 0.5
      ? SETTLE_END_TALL
      : SETTLE_END_LOW;
}

const CLIP_OPEN = 'inset(-12% -4% -12% -4%)';

function pageTop(element: Element) {
  return element.getBoundingClientRect().top + window.scrollY;
}

function chapterOf(root: HTMLElement, index: number) {
  return root.querySelector<HTMLElement>(`[data-ty-chapter="${index}"]`);
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
    .querySelector<HTMLElement>('[data-ty-focus]')
    ?.focus({ preventScroll: true });
  announceSection(root, index);
}

function listenJumps(root: HTMLElement) {
  const handleJump = (event: Event) =>
    jumpTo(root, (event as CustomEvent<number>).detail);
  root.addEventListener(STORY_JUMP_EVENT, handleJump);
  return () => root.removeEventListener(STORY_JUMP_EVENT, handleJump);
}

// Cada capítulo avisa al índice cuándo está en pantalla y le dice al caso en
// qué mundo va (claro u oscuro), para que el índice cambie de color. La
// portada cuenta como el inicio del primer capítulo. La línea del índice
// mide el avance de todo el caso.
function trackChapters(root: HTMLElement) {
  const setWorld = (world: string | undefined) => {
    if (world) root.dataset.world = world;
  };
  const cover = root.querySelector<HTMLElement>('[data-ty-cover]');
  const coverTrigger = cover
    ? [
        ScrollTrigger.create({
          trigger: cover,
          start: 'top center',
          end: 'bottom center',
          onToggle: self => {
            if (!self.isActive) return;
            announceSection(root, 0);
            setWorld('dark');
          }
        })
      ]
    : [];
  const chapters = queryAll(root, '[data-ty-chapter]').map(chapter =>
    ScrollTrigger.create({
      trigger: chapter,
      start: 'top center',
      end: 'bottom center',
      onToggle: self => {
        if (!self.isActive) return;
        announceSection(root, Number(chapter.dataset.tyChapter));
        setWorld(chapter.dataset.tyWorld);
      }
    })
  );
  // Dentro de un capítulo, un bloque de otro mundo (el cierre oscuro) también
  // cambia el color del índice mientras está a la vista
  const surfaces = queryAll(root, '.ty-closing').map(block =>
    ScrollTrigger.create({
      trigger: block,
      start: 'top center',
      end: 'bottom center',
      onToggle: self =>
        setWorld(
          self.isActive
            ? 'dark'
            : block.closest<HTMLElement>('[data-ty-world]')?.dataset.tyWorld
        )
    })
  );
  const overall = ScrollTrigger.create({
    trigger: root,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: self => {
      root.style.setProperty('--ty-progress', self.progress.toFixed(3));
      // Las llantas del auto del índice dan una vuelta cada 600 px de scroll
      root.style.setProperty('--ty-turn', (self.scroll() * 0.6).toFixed(1));
    }
  });
  return [...coverTrigger, ...chapters, ...surfaces, overall];
}

// Pone el índice en el capítulo que está a la vista, sin esperar a que el
// scroll cruce el borde de uno. Hace falta al recargar a mitad de página (el
// navegador devuelve el scroll donde estaba) o al saltar con la barra: sin
// esto, el índice se queda en «01» hasta cruzar un borde
function syncChapter(root: HTMLElement) {
  const center = window.scrollY + window.innerHeight / 2;
  const chapters = queryAll(root, '[data-ty-chapter]');
  const current = chapters.find(
    chapter =>
      pageTop(chapter) <= center &&
      center < pageTop(chapter) + chapter.offsetHeight
  );
  if (!current) return;
  announceSection(root, Number(current.dataset.tyChapter));
  if (current.dataset.tyWorld) root.dataset.world = current.dataset.tyWorld;
}

// Sincroniza el índice al cargar y mientras la página termina de acomodarse
// (imágenes, fuentes y el scroll que el navegador devuelve al recargar llegan
// un poco después de montar el caso), y de nuevo en el primer scroll
function keepChapterSynced(root: HTMLElement) {
  const sync = () => syncChapter(root);
  sync();
  const timers = [150, 600, 1500].map(delay => window.setTimeout(sync, delay));
  ScrollTrigger.addEventListener('refresh', sync);
  window.addEventListener('load', sync);
  window.addEventListener('scroll', sync, { once: true, passive: true });
  return () => {
    timers.forEach(timer => window.clearTimeout(timer));
    ScrollTrigger.removeEventListener('refresh', sync);
    window.removeEventListener('load', sync);
    window.removeEventListener('scroll', sync);
  };
}

function revealMasks(root: HTMLElement) {
  queryAll(root, '[data-ty-mask]').forEach(element => {
    gsap.fromTo(
      element,
      { yPercent: 32, clipPath: CLIP_BELOW },
      {
        yPercent: 0,
        clipPath: CLIP_OPEN,
        duration: 1.1,
        ease: EASE_IN_OUT,
        clearProps: 'clipPath',
        scrollTrigger: { trigger: element, start: ENTER, once: true }
      }
    );
  });
}

function revealRises(root: HTMLElement) {
  const rises = queryAll(root, '[data-ty-rise]');
  gsap.set(rises, { autoAlpha: 0, y: 40 });
  ScrollTrigger.batch(rises, {
    start: ENTER,
    once: true,
    onEnter: batch =>
      gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: EASE_OUT,
        stagger: 0.08
      })
  });
}

// Las piezas de un grupo llegan una tras otra, como carros que llegan a su
// destino (principio de escalonado del manual)
function revealGroups(root: HTMLElement) {
  queryAll(root, '[data-ty-group]').forEach(group => {
    const items = queryAll(group, '[data-ty-item]');
    if (items.length === 0) return;
    gsap.from(items, {
      y: 32,
      autoAlpha: 0,
      duration: 0.9,
      ease: EASE_OUT,
      stagger: 0.08,
      scrollTrigger: { trigger: group, start: ENTER, once: true }
    });
  });
}

// La línea se dibuja mientras el recorrido cruza la pantalla. El CSS decide
// si crece a lo ancho (computador) o a lo alto (celular) con --draw
function drawLines(root: HTMLElement) {
  queryAll(root, '[data-ty-line]').forEach(line => {
    const trigger = line.closest('[data-ty-group]') ?? line;
    gsap.fromTo(
      line,
      { '--draw': 0 },
      {
        '--draw': 1,
        ease: 'none',
        scrollTrigger: {
          trigger,
          start: SETTLE_START,
          end: settleEnd(trigger),
          scrub: true
        }
      }
    );
  });
}

// Las palabras marcadas con data-ty-accent se ponen rojas de una, todas a la
// vez, cuando el titular llega a cierta altura de la pantalla (no se van
// encendiendo poco a poco). Si el lector sube de nuevo, vuelven a su color.
function igniteAccents(root: HTMLElement) {
  queryAll(root, '.ty-head').forEach(head => {
    const accents = queryAll(head, '[data-ty-accent]');
    if (accents.length === 0) return;
    const turnRed = gsap.to(accents, {
      color: '#eb0a1e',
      duration: 0.25,
      ease: 'power1.out',
      paused: true
    });
    ScrollTrigger.create({
      trigger: head,
      start: 'top 62%',
      onEnter: () => turnRed.play(),
      onLeaveBack: () => turnRed.reverse()
    });
  });
}

function fillWords(root: HTMLElement) {
  queryAll(root, '[data-ty-fill]').forEach(text => {
    gsap.from(queryAll(text, '.ty-fill__word'), {
      opacity: 0.16,
      stagger: 0.1,
      ease: 'none',
      scrollTrigger: {
        trigger: text,
        // Termina cuando el párrafo entero ya está en la parte de abajo de la
        // pantalla: al bajar a leerlo, todo está encendido
        start: 'top 94%',
        end: 'bottom 84%',
        scrub: true
      }
    });
  });
}

function countNumbers(root: HTMLElement) {
  queryAll(root, '[data-ty-count]').forEach(element => {
    const target = Number(element.dataset.tyCount ?? 0);
    const counter = { value: 0 };
    element.textContent = '0';
    gsap.to(counter, {
      value: target,
      duration: 1.4,
      ease: EASE_OUT,
      onUpdate: () => {
        element.textContent = String(Math.round(counter.value));
      },
      scrollTrigger: { trigger: element, start: ENTER, once: true }
    });
  });
}

// La captura de la portada crece hacia adelante, de tarjeta a pantalla
// completa, mientras se recorre la pista de la portada
function growCover(root: HTMLElement) {
  const runway = root.querySelector<HTMLElement>('[data-ty-runway]');
  const frame = runway?.querySelector<HTMLElement>('[data-ty-grow]');
  if (!runway || !frame) return;
  // El velocímetro acompaña el crecimiento: la aguja sube de 0 al máximo
  // durante la pista de la portada y, en el último tramo, el medidor se apaga
  const hint = runway.querySelector<HTMLElement>('[data-ty-hint]');
  if (hint) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: runway,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true
        }
      })
      .fromTo(
        hint,
        { '--gauge': 0 },
        { '--gauge': 1, ease: 'none', duration: 1 }
      )
      .to(hint, { autoAlpha: 0, ease: 'none', duration: 0.25 }, 0.75);
  }
  // La foto arranca debajo del texto (el titular y la descripción se
  // sobreponen a su tarjeta). En cuanto empieza a crecer pasa por encima y
  // el texto queda detrás: la foto lo tapa mientras se abre
  ScrollTrigger.create({
    trigger: runway,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: self => {
      runway.toggleAttribute('data-grown', self.progress > 0.02);
    }
  });
  // El titular y la descripción se desvanecen en el primer tramo del
  // crecimiento. Además de quedar detrás de la foto, así no asoman letras por
  // los costados mientras la foto todavía no llega a los bordes
  const texts = queryAll(runway, '.ty-cover__title, .ty-cover__intro');
  if (texts.length > 0) {
    gsap.to(texts, {
      autoAlpha: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: runway,
        start: 'top top',
        end: () => `+=${(runway.offsetHeight - window.innerHeight) * 0.4}`,
        scrub: true
      }
    });
  }
  // Solo mueve --cover-grow: el CSS arma el recorte con los cuatro bordes a
  // la vez (y con la medida de la tarjeta de celular o de computador)
  gsap.fromTo(
    frame,
    { '--cover-grow': 0 },
    {
      '--cover-grow': 1,
      ease: 'none',
      scrollTrigger: {
        trigger: runway,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
      }
    }
  );
}

function revealCells(root: HTMLElement) {
  queryAll(root, '[data-ty-cells]').forEach(matrix => {
    gsap.from(queryAll(matrix, '[data-ty-cell]'), {
      scale: 0,
      autoAlpha: 0,
      duration: 0.5,
      ease: EASE_OUT,
      stagger: 0.03,
      scrollTrigger: { trigger: matrix, start: 'top 75%', once: true }
    });
  });
}

// En la pila, el texto de cada tarjeta se va cuando la siguiente la cubre,
// para que nunca se lean dos textos a la vez. Solo aplica donde la pila se
// apila (pantallas grandes); en columna, todo queda visible.
function fadeStackCaptions(root: HTMLElement) {
  const media = gsap.matchMedia();
  media.add('(min-width: 1024px)', () => {
    queryAll(root, '.ty-stack__list').forEach(list => {
      const cards = queryAll(list, '.ty-stack__card');
      cards.slice(0, -1).forEach((card, index) => {
        const caption = card.querySelector('.ty-stack__caption');
        const next = cards[index + 1];
        if (!caption || !next) return;
        gsap.to(caption, {
          autoAlpha: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: next,
            start: 'top 36%',
            end: 'top 20%',
            scrub: true
          }
        });
      });
    });
  });
  return media;
}

// Altura (px) a la que se queda fijo el bloque de los pilares (palabra y
// marco), arriba de la pantalla: lo dice el CSS (top del bloque)
function pinTop(stack: Element) {
  const pin = stack.querySelector('.ty-stack__pin');
  return pin ? Math.round(parseFloat(getComputedStyle(pin).top) || 0) : 0;
}

// Scroll que hay desde el inicio de la lista de pilares hasta que la última
// tarjeta entra: es lo que tarda la foto en llegar al suelo
function lastCardOffset(list: Element) {
  const cards = queryAll(list, '.ty-stack__card');
  const first = cards[0];
  if (!first) return 0;
  const pitch =
    first.offsetHeight +
    (parseFloat(getComputedStyle(first).marginBottom) || 0);
  return pitch * (cards.length - 1);
}

// La imagen larga de los pilares baja por dentro de su marco más lento que
// el scroll. En computador recorre la imagen mientras el marco está fijo; en
// columna, mientras el marco cruza la pantalla.
function driftStackImage(root: HTMLElement) {
  const media = gsap.matchMedia();
  const drift = (
    trigger: Element,
    frame: Element,
    start: string | (() => string),
    end: string | (() => string),
    to: number
  ) =>
    gsap.fromTo(
      frame,
      { '--progress': 0 },
      {
        '--progress': to,
        ease: 'none',
        scrollTrigger: { trigger, start, end, scrub: true }
      }
    );
  queryAll(root, '.ty-stack').forEach(stack => {
    const frame = stack.querySelector<HTMLElement>('.ty-stack__frame');
    const list = stack.querySelector('.ty-stack__list');
    if (!frame || !list) return;
    media.add('(min-width: 1024px)', () => {
      // Va desde que el bloque queda fijo hasta que el pilar 03 llega al 30 %
      // de la pantalla: ahí la foto ya mostró todo el suelo y se queda quieta
      // hasta que la página sigue
      drift(
        list,
        frame,
        () => `top ${pinTop(stack)}px`,
        () => `top+=${lastCardOffset(list)} 30%`,
        STACK_DRIFT_END
      );
    });
    media.add('(max-width: 1023px)', () => {
      drift(frame, frame, 'top bottom', 'bottom top', STACK_DRIFT_END);
    });
  });
  return media;
}

// Llegada de los tres pilares, ligada al scroll y solo en computador: el
// marco de la foto sube más rápido que el scroll desde más abajo, se abre de
// abajo hacia arriba y pierde un zoom suave. Termina cuando la foto llega a su
// lugar fijo, y desde ahí empieza la secuencia de pilares.
function enterStack(root: HTMLElement) {
  const media = gsap.matchMedia();
  media.add('(min-width: 1024px)', () => {
    queryAll(root, '.ty-stack').forEach(stack => {
      const body = stack.querySelector('.ty-stack__body');
      const frame = stack.querySelector('.ty-stack__frame');
      const visual = stack.querySelector('.ty-stack__visual');
      if (!body || !frame) return;
      // Empieza cuando la palabra ya está arriba y termina con el marco metido
      // bajo ella, en su lugar fijo
      const scrollTrigger = {
        trigger: body,
        start: 'top 72%',
        end: () => `top ${pinTop(stack)}px`,
        scrub: true
      };
      gsap.fromTo(
        frame,
        { y: 140, clipPath: 'inset(70% 0% 0% 0%)' },
        { y: 0, clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', scrollTrigger }
      );
      // El zoom va en una variable de CSS (--zoom) y no con scale de GSAP:
      // GSAP convertiría el translate de la imagen en un valor fijo y la
      // imagen larga dejaría de bajar con el scroll
      if (visual) {
        gsap.fromTo(
          visual,
          { '--zoom': 1.08 },
          { '--zoom': 1, ease: 'none', scrollTrigger }
        );
      }
    });
  });
  return media;
}

// En las aperturas, la celda sólida que tapa la palabra se desliza a la
// derecha y se esconde detrás de la celda del número: abre una ventana a la
// foto y la palabra se completa. Va ligada al scroll mientras la fila pasa
// por la palabra. En celular esa celda no se muestra.
function slideOpenerCells(root: HTMLElement) {
  const media = gsap.matchMedia();
  media.add('(min-width: 768px)', () => {
    queryAll(root, '.ty-opener').forEach(opener => {
      const grid = opener.querySelector('.ty-opener__grid');
      const cell = opener.querySelector('.ty-opener__cell--edge');
      if (!grid || !cell) return;
      gsap.fromTo(
        cell,
        { '--slide': 0 },
        {
          '--slide': 1,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: grid,
            start: 'top 55%',
            end: 'top 5%',
            scrub: SCRUB_SMOOTHING
          }
        }
      );
    });
  });
  return media;
}

function parallax(root: HTMLElement) {
  queryAll(root, '[data-ty-speed]').forEach(element => {
    const speed = Number(element.dataset.tySpeed ?? 0);
    gsap.fromTo(
      element,
      { yPercent: -speed * 50 },
      {
        yPercent: speed * 50,
        ease: 'none',
        scrollTrigger: {
          trigger: element.parentElement ?? element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );
  });
}

// La foto de fondo de cada apertura se recorre de forma continua mientras la
// apertura cruza la pantalla, más lenta que el scroll de la página. El CSS
// convierte --pan (0 a 1) en el desplazamiento de la foto
function panOpenerBackdrops(root: HTMLElement) {
  queryAll(root, '[data-ty-pan]').forEach(backdrop => {
    gsap.fromTo(
      backdrop,
      { '--pan': 0 },
      {
        '--pan': 1,
        ease: 'none',
        scrollTrigger: {
          trigger: backdrop.parentElement ?? backdrop,
          start: 'top bottom',
          end: 'bottom top',
          scrub: SCRUB_SMOOTHING
        }
      }
    );
  });
}

// La palabra gigante de cada apertura se mueve de forma continua con el scroll
// desde que la apertura aparece hasta que sale, a la mitad de la velocidad de
// la página: así las celdas pasan por encima de ella, sin que se quede quieta
// en ningún punto. El CSS la deja en su lugar de partida (sobre la primera
// fila); aquí se mueve de -recorrido a +recorrido alrededor de ese lugar
function driftOpenerWords(root: HTMLElement) {
  queryAll(root, '.ty-opener').forEach(opener => {
    const word = opener.querySelector('.ty-opener__word');
    if (!word) return;
    const travel = () => 0.25 * (window.innerHeight + opener.offsetHeight);
    gsap.fromTo(
      word,
      { y: () => -travel() },
      {
        y: () => travel(),
        ease: 'none',
        scrollTrigger: {
          trigger: opener,
          start: 'top bottom',
          end: 'bottom top',
          scrub: SCRUB_SMOOTHING,
          invalidateOnRefresh: true
        }
      }
    );
  });
}

// Sin animación: solo el seguimiento de capítulos y saltos directos
export function setupToyotaStatic(root: HTMLElement) {
  const triggers = trackChapters(root);
  const stopSync = keepChapterSynced(root);
  const counter = watchCounterVisibility(root);
  const stopJumps = listenJumps(root);
  const stopCar = driveProgressCar(root, { hasPhysics: false });
  return () => {
    stopSync();
    stopCar();
    stopJumps();
    triggers.forEach(trigger => trigger.kill());
    counter.kill();
    root.removeAttribute('data-counter-hidden');
  };
}

export function setupToyotaMotion(root: HTMLElement) {
  revealMasks(root);
  revealRises(root);
  revealGroups(root);
  drawLines(root);
  fillWords(root);
  igniteAccents(root);
  countNumbers(root);
  growCover(root);
  revealCells(root);
  parallax(root);
  panOpenerBackdrops(root);
  driftOpenerWords(root);
  const stack = fadeStackCaptions(root);
  const stackImage = driftStackImage(root);
  const stackEntrance = enterStack(root);
  const openerCells = slideOpenerCells(root);
  const triggers = trackChapters(root);
  const stopSync = keepChapterSynced(root);
  const counter = watchCounterVisibility(root);
  const stopJumps = listenJumps(root);
  const stopCar = driveProgressCar(root, { hasPhysics: true });
  ScrollTrigger.refresh();

  return () => {
    stopSync();
    stopCar();
    stack.revert();
    stackImage.revert();
    stackEntrance.revert();
    openerCells.revert();
    stopJumps();
    triggers.forEach(trigger => trigger.kill());
    counter.kill();
    root.removeAttribute('data-counter-hidden');
    // Las cifras vuelven a su valor real si se apaga el movimiento
    queryAll(root, '[data-ty-count]').forEach(element => {
      element.textContent = element.dataset.tyCount ?? '';
    });
  };
}
