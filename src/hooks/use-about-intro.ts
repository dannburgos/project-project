'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

import { SURFACE_CHANGE_EVENT } from '@/hooks/use-surface-under';
import {
  GUIDE_LINES,
  LEADER_GAP,
  LETTER_ANCHORS,
  NOTE_WIDTH,
  NOTE_Y,
  VIEW_BOX,
  type AboutIntroLayout
} from '@/lib/about-intro/layout';
import { TITLE_SHAPES } from '@/lib/about-intro/title-shapes';

gsap.registerPlugin(ScrollTrigger);

const DESKTOP_QUERY = '(min-width: 900px)';
const MOTION_QUERY = '(prefers-reduced-motion: no-preference)';
const ZOOM_CURVE = 'power3.in';
// Cuánto scroll dura el zoom, en alturas de pantalla
const ZOOM_SCROLL = 3;
// Desde qué avance del zoom el fondo ya es claro (cambia el logo y el menú)
const LIGHT_FROM = 0.62;
// Margen extra para que el trazo de la "o" cubra la pantalla por completo
const ZOOM_MARGIN = 1.15;

// Banner de About: el título "About Me" son ventanas recortadas en una capa
// oscura. De cada letra sale una línea con su nota. Con el scroll, la
// pantalla se acerca a la "o", las letras crecen hasta ser enormes y por su
// interior aparece la siguiente sección. Con "reducir movimiento" no hay zoom:
// todo queda visible y quieto.
export function useAboutIntro<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const media = gsap.matchMedia();

    const build = (layout: AboutIntroLayout, isAnimated: boolean) => {
      root.dataset.layout = layout;
      const art = root.querySelector<HTMLElement>('[data-art]');
      const svg = root.querySelector<SVGSVGElement>('[data-svg]');
      const stage = root.querySelector<HTMLElement>('.about-intro__stage');
      const reveal = root.querySelector<HTMLElement>('[data-about-reveal]');
      if (!art || !svg || !stage || !reveal) return () => {};

      const box = VIEW_BOX[layout];
      const shape = TITLE_SHAPES[layout];
      svg.setAttribute('viewBox', `0 0 ${box.width} ${box.height}`);
      const toPercentX = (value: number) => `${(value / box.width) * 100}%`;
      const toPercentY = (value: number) => `${(value / box.height) * 100}%`;

      const leaders = Array.from(
        root.querySelectorAll<SVGLineElement>('[data-leader]')
      );
      const notes = Array.from(
        root.querySelectorAll<HTMLElement>('[data-note]')
      );
      const guides = Array.from(
        root.querySelectorAll<SVGLineElement>('[data-guide]')
      );
      // En celular, la lista corta ocupa el lugar de las notas
      const shortItems = Array.from(
        root.querySelectorAll<HTMLElement>('[data-short]')
      );
      const visibleNotes = layout === 'desktop' ? notes : shortItems;
      const hint = root.querySelector('[data-hint]');

      // Líneas y notas (solo en computador): cada una sale del borde de su letra
      if (layout === 'desktop') {
        shape.letters.forEach((letter, index) => {
          const anchor = LETTER_ANCHORS[index];
          const x = letter.x1 + (letter.x2 - letter.x1) * anchor.x;
          const isTop = anchor.side === 'top';
          const y = isTop ? letter.y1 - LEADER_GAP : letter.y2 + LEADER_GAP;
          const noteY = NOTE_Y[anchor.side];
          const noteX = Math.min(
            Math.max(x, 24 + NOTE_WIDTH / 2),
            box.width - 24 - NOTE_WIDTH / 2
          );
          const leader = leaders[index];
          leader.setAttribute('x1', String(x));
          leader.setAttribute('y1', String(y));
          leader.setAttribute('x2', String(x));
          leader.setAttribute('y2', String(noteY));
          const note = notes[index];
          note.style.left = toPercentX(noteX);
          note.style.top = toPercentY(noteY);
          note.dataset.side = anchor.side;
        });
        guides.forEach((guide, index) => {
          const y = GUIDE_LINES[index] ?? 0;
          guide.setAttribute('x1', '0');
          guide.setAttribute('x2', String(box.width));
          guide.setAttribute('y1', String(y));
          guide.setAttribute('y2', String(y));
        });
      }

      // Geometría del zoom, medida antes de que nada se mueva: dónde está, en
      // pantalla, el punto del trazo grueso de la "o" por el que se atraviesa
      // la letra, y cuánto crecer para que ese trazo llene la pantalla
      const stageRect = stage.getBoundingClientRect();
      const artRect = art.getBoundingClientRect();
      const unit = artRect.width / box.width;
      const windowScreenX = artRect.left + shape.window.x * unit;
      const windowScreenY = artRect.top + shape.window.y * unit;
      // El trazo es una ventana que cabe en un círculo: para que cubra toda la
      // pantalla, ese círculo tiene que llegar a sus esquinas
      const scale =
        (ZOOM_MARGIN * Math.hypot(window.innerWidth, window.innerHeight)) /
        2 /
        (shape.window.radius * unit);
      const shiftX = stageRect.left + stageRect.width / 2 - windowScreenX;
      const shiftY = stageRect.top + stageRect.height / 2 - windowScreenY;

      // Entrada del título: aparece y se asienta, y se dibujan las líneas
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro
        .fromTo(
          art,
          { autoAlpha: 0, scale: 1.05 },
          { autoAlpha: 1, scale: 1, duration: 1.6 }
        )
        .fromTo(
          [...guides, ...leaders],
          { strokeDashoffset: 1 },
          { strokeDashoffset: 0, duration: 1.4, stagger: 0.08 },
          0.4
        )
        .fromTo(
          visibleNotes,
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1 },
          0.9
        )
        .fromTo(hint, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8 }, 1.8);

      if (!isAnimated) {
        intro.progress(1);
        return () => intro.kill();
      }

      gsap.set(art, {
        transformOrigin: `${(shape.window.x / box.width) * 100}% ${(shape.window.y / box.height) * 100}%`
      });
      gsap.set(reveal, { autoAlpha: 0 });
      const revealItems = Array.from(
        reveal.querySelectorAll<HTMLElement>('[data-reveal-item]')
      );

      let isLight = false;
      const scroll = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: `+=${window.innerHeight * ZOOM_SCROLL}`,
          pin: true,
          scrub: 1,
          onUpdate: self => {
            const light = self.progress >= LIGHT_FROM;
            if (light === isLight) return;
            isLight = light;
            root.dataset.surface = light ? 'light' : 'dark';
            window.dispatchEvent(new Event(SURFACE_CHANGE_EVENT));
          }
        }
      });
      // 1 · Las notas y las líneas se recogen
      scroll
        .to(
          [...visibleNotes, hint],
          { autoAlpha: 0, y: -10, duration: 1, stagger: 0.04 },
          0
        )
        .to([...guides, ...leaders], { strokeDashoffset: 1, duration: 1 }, 0)
        // 2 · La cámara se acerca al trazo de la "o" y lo lleva al centro de la
        //     pantalla hasta que lo llena todo
        .to(
          art,
          {
            scale,
            x: `+=${shiftX}`,
            y: `+=${shiftY}`,
            duration: 8,
            ease: ZOOM_CURVE
          },
          0.8
        )
        // 3 · Por el interior de las letras aparece la siguiente sección
        .fromTo(
          reveal,
          { autoAlpha: 0, scale: 1.14 },
          { autoAlpha: 1, scale: 1, duration: 3 },
          5.2
        )
        .set(art, { autoAlpha: 0 }, 8.9)
        // 4 · Su contenido se asienta
        .fromTo(
          revealItems,
          { y: 50, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.4,
            stagger: 0.15,
            ease: 'power3.out'
          },
          8
        )
        .to({}, { duration: 1 });

      // El tramo se mide una vez armado el título (si no, el pin queda sin su
      // espacio de scroll)
      ScrollTrigger.refresh();

      return () => {
        intro.kill();
        scroll.scrollTrigger?.kill();
        scroll.kill();
        gsap.set([art, reveal, ...revealItems], { clearProps: 'all' });
        root.dataset.surface = 'dark';
      };
    };

    media.add(
      {
        isDesktop: `${DESKTOP_QUERY} and ${MOTION_QUERY}`,
        isMobile: `(max-width: 899px) and ${MOTION_QUERY}`,
        isReduced: '(prefers-reduced-motion: reduce)'
      },
      context => {
        const { isDesktop, isMobile, isReduced } = context.conditions ?? {};
        if (isReduced) {
          return build(window.innerWidth >= 900 ? 'desktop' : 'mobile', false);
        }
        return build(
          isDesktop ? 'desktop' : isMobile ? 'mobile' : 'desktop',
          true
        );
      },
      root
    );

    return () => {
      media.revert();
      root.removeAttribute('data-layout');
      root.dataset.surface = 'dark';
    };
  }, []);

  return ref;
}
