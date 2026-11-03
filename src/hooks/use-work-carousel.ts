'use client';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRouter } from 'next/navigation';
import { useLayoutEffect, useRef, useState, type MouseEvent } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const MOTION_QUERY = '(prefers-reduced-motion: no-preference)';
const MOBILE_WIDTH = 900;
// Scroll que hace falta para pasar de un proyecto al siguiente (corto: con
// empezar a bajar basta, el carrusel sigue solo hasta la siguiente carta)
const STEP_VIEWPORTS = 0.32;
const CURVE = 'power4.inOut';
// Entrada: el carrusel aparece con un fundido y se desliza de derecha a
// izquierda unas cartas, frenando parejo hasta dejar al primer proyecto en el
// centro. Completa al entrar o recargar; corta si se vuelve a Work navegando
// dentro del sitio.
const INTRO_FULL = { cards: 2, duration: 2.4 };
const INTRO_SHORT = { cards: 0.6, duration: 1.2 };
let hasPlayedIntro = false;

// Carrusel de Work: la sección se fija en pantalla y el scroll normal mueve
// los proyectos de lado, en un ciclo sin principio ni fin. El del centro es
// el protagonista (grande, con su marco) y el fondo toma su color,
// mezclándose con el del siguiente mientras se avanza. Al soltar el scroll,
// el impulso lo lleva hasta la siguiente carta en esa dirección. Tras
// una vuelta completa, la sección se suelta y la página sigue hacia el cierre
// de contacto. Un clic en el protagonista abre su marco a pantalla completa y
// entra al caso; un clic en otro lo trae al centro.
export function useWorkCarousel(count: number) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeRef = useRef(0);
  const scrollToIndexRef = useRef<(index: number) => void>(() => {});

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const stage = root.querySelector<HTMLElement>('[data-carousel-stage]');
    const cards = Array.from(
      root.querySelectorAll<HTMLElement>('[data-carousel-card]')
    );
    const backdrops = Array.from(
      root.querySelectorAll<HTMLElement>('[data-carousel-backdrop]')
    );
    if (!stage || !cards.length) return;
    const media = gsap.matchMedia();

    media.add(
      MOTION_QUERY,
      () => {
        const isMobile = window.innerWidth < MOBILE_WIDTH;
        const cardWidth = isMobile
          ? window.innerWidth * 0.64
          : Math.min(window.innerWidth * 0.24, 340);
        // Los vecinos quedan cerca y pequeños; el nombre y la categoría del
        // protagonista van por delante de ellos
        const spacing = cardWidth * (isMobile ? 0.8 : 1.1);
        const stepLength = window.innerHeight * STEP_VIEWPORTS;
        root.style.setProperty('--card-width', `${cardWidth}px`);

        // Carrusel sin principio ni fin: cada carta se ubica por su distancia
        // más corta al centro, así siempre hay proyectos delante y detrás
        const loopDistance = (index: number, position: number) => {
          const raw = (((index - position) % count) + count) % count;
          return raw > count / 2 ? raw - count : raw;
        };

        const render = (position: number) => {
          cards.forEach((card, index) => {
            const distance = loopDistance(index, position);
            const nearness = Math.max(0, 1 - Math.abs(distance));
            // Los de atrás se acercan entre sí: se ven pequeños y tenues
            const reach =
              Math.min(Math.abs(distance), 1) * spacing +
              Math.max(Math.abs(distance) - 1, 0) * spacing * 0.45;
            gsap.set(card, {
              x: Math.sign(distance) * reach,
              scale: Math.max(
                0.4,
                0.55 +
                  0.45 * nearness -
                  0.08 * Math.max(Math.abs(distance) - 1, 0)
              ),
              // Las del extremo del ciclo se desvanecen antes de pasar al otro
              // lado: nunca se ve el salto
              opacity:
                (Math.abs(distance) > 1 ? 0.2 : 0.35 + 0.65 * nearness) *
                gsap.utils.clamp(0, 1, (count / 2 - Math.abs(distance)) / 0.8),
              zIndex: Math.round(10 - Math.abs(distance)),
              '--nearness': nearness
            });
          });
          backdrops.forEach((backdrop, index) =>
            gsap.set(backdrop, {
              opacity: Math.max(0, 1 - Math.abs(loopDistance(index, position)))
            })
          );
          const index = ((Math.round(position) % count) + count) % count;
          if (index !== activeRef.current) {
            activeRef.current = index;
            setActiveIndex(index);
          }
        };

        // Entrada del carrusel (solo se ve si la página arranca en él)
        // Cuenta como vista al terminar (o al cortarla con scroll), no al
        // armarse: así un montaje repetido no la convierte en la corta
        const settings = hasPlayedIntro ? INTRO_SHORT : INTRO_FULL;
        const spin = { position: -settings.cards };
        let intro: gsap.core.Tween | null = null;
        const finishIntro = () => {
          intro?.kill();
          intro = null;
          delete root.dataset.intro;
        };
        const trigger = ScrollTrigger.create({
          trigger: stage,
          start: 'top top',
          // Una vuelta completa: del primero hasta volver a él; después la
          // página sigue hacia el cierre de contacto
          end: `+=${stepLength * count}`,
          pin: true,
          snap:
            count > 1
              ? {
                  // El impulso sigue hasta la siguiente carta en la dirección
                  // del scroll, aunque el gesto haya sido corto
                  snapTo: (progress, self) => {
                    const step = 1 / count;
                    const index = progress / step;
                    const target =
                      (self?.direction ?? 1) > 0
                        ? Math.ceil(index - 0.02)
                        : Math.floor(index + 0.02);
                    return gsap.utils.clamp(0, 1, target * step);
                  },
                  duration: { min: 0.6, max: 1.1 },
                  delay: 0.06,
                  ease: 'power3.out'
                }
              : undefined,
          onUpdate: self => {
            // Si se hace scroll durante la entrada, la entrada se corta
            if (intro?.isActive()) {
              hasPlayedIntro = true;
              finishIntro();
            }
            render(self.progress * count);
          }
        });

        if (trigger.progress < 0.01) {
          root.dataset.intro = 'true';
          render(spin.position);
          // El carrusel aparece con un fundido (el de cada carta lo maneja render)
          gsap.fromTo(
            '[data-carousel-track]',
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 1, ease: 'power2.out' }
          );
          intro = gsap.to(spin, {
            position: 0,
            duration: settings.duration,
            ease: 'power3.out',
            onUpdate: () => render(spin.position),
            onComplete: () => {
              hasPlayedIntro = true;
              finishIntro();
            }
          });
        } else {
          render(trigger.progress * count);
          gsap.set('[data-carousel-track]', { autoAlpha: 1 });
        }

        // Trae un proyecto al centro por el camino más corto de la vuelta
        scrollToIndexRef.current = index => {
          const position = trigger.progress * count;
          const target = [index - count, index, index + count]
            .filter(option => option >= 0 && option <= count)
            .reduce((best, option) =>
              Math.abs(option - position) < Math.abs(best - position)
                ? option
                : best
            );
          gsap.to(window, {
            scrollTo: trigger.start + stepLength * target,
            duration: 1.1,
            ease: CURVE
          });
        };

        return () => {
          finishIntro();
          scrollToIndexRef.current = () => {};
          root.style.removeProperty('--card-width');
        };
      },
      root
    );

    return () => media.revert();
  }, [count]);

  // Abre el marco del protagonista hasta llenar la pantalla y entra al caso
  const openCase = (card: HTMLElement, href: string, tone: string) => {
    const portal = ref.current?.querySelector<HTMLElement>(
      '[data-carousel-portal]'
    );
    if (!portal) {
      router.push(href);
      return;
    }
    const rect = card.getBoundingClientRect();
    const right = window.innerWidth - rect.right;
    const bottom = window.innerHeight - rect.bottom;
    portal.dataset.tone = tone;
    gsap.fromTo(
      portal,
      {
        autoAlpha: 1,
        clipPath: `inset(${rect.top}px ${right}px ${bottom}px ${rect.left}px)`
      },
      {
        clipPath: 'inset(0px 0px 0px 0px)',
        duration: 0.9,
        ease: CURVE,
        onComplete: () => router.push(href)
      }
    );
  };

  const handleCardClick = (
    event: MouseEvent<HTMLAnchorElement>,
    index: number,
    tone: string
  ) => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reducedMotion) return;
    event.preventDefault();
    if (index !== activeRef.current) {
      scrollToIndexRef.current(index);
      return;
    }
    openCase(event.currentTarget, event.currentTarget.href, tone);
  };

  // "Ver caso" debajo del protagonista: lo abre igual que un clic en su marco
  const handleOpenActive = (
    event: MouseEvent<HTMLAnchorElement>,
    tone: string
  ) => {
    const card = ref.current?.querySelector<HTMLElement>(
      `[data-carousel-card][data-index="${activeRef.current}"]`
    );
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (!card || reducedMotion) return;
    event.preventDefault();
    openCase(card, event.currentTarget.href, tone);
  };

  return { ref, activeIndex, handleCardClick, handleOpenActive };
}
