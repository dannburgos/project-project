import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  CLIP_HIDDEN_RIGHT,
  CLIP_SHOWN,
  LINE_TEXT,
  STORY_CURVE,
  STORY_JUMP_EVENT,
  addBlockReveal,
  announceSection,
  queryAll,
  watchCounterVisibility
} from '@/lib/case-story/motion';
import { buildRain } from '@/lib/case-story/rain';

// Recorrido en celular: todo en columna y con calma. Una cosa a la vez, con
// la misma curva de impulso y frenado; los textos pequeños solo aparecen y
// solo las columnas entran de lado. La lluvia y el celular del prototipo se
// fijan en pantalla y los mueve el scroll.
export function setupMobileFlow(
  root: HTMLElement,
  { isAnimated }: { isAnimated: boolean }
) {
  const all = (selector: string) => queryAll(root, selector);
  const views = all('[data-view]');
  const greenRun = root.querySelector<HTMLElement>('[data-green-run]');
  const pageTop = (element: Element) =>
    element.getBoundingClientRect().top + window.scrollY;

  // El contador sigue la lectura
  views.forEach(view =>
    ScrollTrigger.create({
      trigger: view,
      start: 'top center',
      end: 'bottom center',
      onToggle: self => {
        if (self.isActive)
          announceSection(root, Number(view.dataset.section ?? 0));
      }
    })
  );
  // Desde el concepto, todo es el mundo verde
  if (greenRun) {
    ScrollTrigger.create({
      trigger: greenRun,
      start: 'top center',
      onToggle: self => {
        root.dataset.world = self.isActive ? 'green' : 'cream';
      }
    });
  }
  const handleJump = (event: Event) => {
    const section = (event as CustomEvent<number>).detail;
    const target = views.find(view => Number(view.dataset.section) === section);
    if (target) window.scrollTo({ top: pageTop(target), behavior: 'smooth' });
  };
  root.addEventListener(STORY_JUMP_EVENT, handleJump);

  if (isAnimated) {
    const calm = { duration: 1.6, ease: STORY_CURVE };
    const at = (trigger: Element, start = 'top 78%') => ({ trigger, start });

    // Inicio de cada sección: cuadrito, nombre y línea que se dibuja
    all('[data-opener]').forEach(opener => {
      gsap
        .timeline({ scrollTrigger: at(opener, 'top 82%') })
        .from(opener.querySelector('[data-opener-mark]'), {
          scale: 0,
          rotation: 90,
          duration: 0.8,
          ease: 'back.out(2)'
        })
        .from(
          opener.querySelector('[data-opener-label]'),
          { x: -32, autoAlpha: 0, ...calm },
          '<0.1'
        )
        .from(
          opener.querySelector('[data-opener-rule]'),
          { scaleX: 0, duration: 1.8, ease: STORY_CURVE },
          '<'
        );
    });
    // Títulos: llegan cubiertos y se destapan; los de líneas, línea a línea
    all('[data-reveal]').forEach(title =>
      addBlockReveal(
        gsap.timeline({ scrollTrigger: at(title, 'top 70%') }),
        title,
        0,
        1.1
      )
    );
    all('[data-ax-lines]').forEach(title =>
      queryAll(title, LINE_TEXT).forEach((line, index) =>
        gsap.fromTo(
          line,
          { clipPath: CLIP_HIDDEN_RIGHT },
          {
            clipPath: CLIP_SHOWN,
            duration: 1.6,
            delay: index * 0.14,
            ease: STORY_CURVE,
            scrollTrigger: at(title)
          }
        )
      )
    );
    // Textos pequeños: solo aparecen, sin moverse
    all('[data-ax], [data-fade]').forEach(element => {
      if (
        element.closest(
          '[data-part="column"], [data-part="gap-side"], [data-part="finding"]'
        )
      )
        return;
      gsap.from(element, {
        autoAlpha: 0,
        duration: 1.3,
        ease: 'power1.out',
        scrollTrigger: at(element, 'top 82%')
      });
    });
    // Columnas: las únicas que entran de lado, alternando
    all(
      '[data-part="column"], [data-part="gap-side"], [data-part="finding"]'
    ).forEach((element, index) =>
      gsap.from(element, {
        x: index % 2 ? 40 : -40,
        autoAlpha: 0,
        ...calm,
        scrollTrigger: at(element)
      })
    );
    // Imágenes: se abren como cortina desde abajo
    all(
      '[data-axis-image], [data-part="reference"], [data-part="logo"], [data-part="plate"]'
    ).forEach(element =>
      gsap.fromTo(
        element,
        { clipPath: 'inset(100% 0% 0% 0%)' },
        {
          clipPath: CLIP_SHOWN,
          duration: 1.8,
          ease: STORY_CURVE,
          scrollTrigger: at(element, 'top 82%')
        }
      )
    );
    // Respiro: la foto se mueve más lento que la página
    all('[data-respite-image]').forEach(image =>
      gsap.fromTo(
        image,
        { yPercent: -6, scale: 1.1 },
        {
          yPercent: 6,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: image,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      )
    );
    // Lluvia al revés: la pantalla se fija y el scroll sube las capas
    const rainView = root.querySelector('[data-view="rain"]');
    if (rainView) {
      ScrollTrigger.create({
        trigger: rainView,
        start: 'top top',
        end: '+=220%',
        pin: true,
        scrub: 1.2,
        animation: buildRain(root, {
          width: window.innerWidth,
          height: window.innerHeight,
          scale: 0.62
        })
      });
    }
    // Prototipo: el celular crece con el scroll hasta casi el tamaño de la
    // pantalla real, sin dejar de verse como mockup
    const prototypeView = root.querySelector('[data-view="prototype"]');
    if (prototypeView) {
      gsap.fromTo(
        '[data-part="phone"]',
        { height: 360, borderRadius: 32 },
        {
          height: () =>
            Math.min(window.innerHeight - 160, (window.innerWidth - 48) * 2),
          borderRadius: 48,
          ease: 'none',
          scrollTrigger: {
            trigger: prototypeView,
            start: 'top top',
            end: '+=100%',
            pin: true,
            scrub: 1
          }
        }
      );
    }
  }

  watchCounterVisibility(root);

  // Los tramos fijos se crean al final: se ordenan para que todo lo que viene
  // después calcule bien su posición
  ScrollTrigger.sort();
  ScrollTrigger.refresh();

  return () => {
    root.removeEventListener(STORY_JUMP_EVENT, handleJump);
    delete root.dataset.world;
    root.removeAttribute('data-counter-hidden');
  };
}
