'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  type CSSProperties,
  type PointerEvent,
  useEffect,
  useRef
} from 'react';

import type { SonopizzaStory } from '@/content/sonopizza-story.types';
import { useSonoFanScroll } from '@/hooks/use-sono-fan-scroll';
import {
  getFanStyle,
  getFanValues,
  isFanPhoneHidden
} from '@/lib/case-story/sonopizza-fan';
import { cn } from '@/lib/utils';

// Imágenes de cada pantalla del prototipo (capturas a 2x de las rutas
// /prototypes/sonopizza/screens/{key})
const SCREEN_SRC = '/sonopizza/screens';
// Cuánto hay que arrastrar para pasar de pantalla
const DRAG_DISTANCE = 50;

type SonoProductShowcaseProps = {
  product: SonopizzaStory['product'];
};

// 05 · El producto en acción: una sola escena con las nueve pantallas en un
// abanico de teléfonos. La del frente es la activa y su título, su párrafo y
// sus etiquetas van a la izquierda; las demás se abren a los lados. En
// computador el scroll de la escena recorre las pantallas de forma continua
// (la página se queda quieta hasta llegar a la última); además se cambia de
// pantalla arrastrando el abanico, con las flechas, con los puntos, con un
// clic en un teléfono del lado o con ← y →. El fondo toma el color del flujo
// de la pantalla activa
export function SonoProductShowcase({ product }: SonoProductShowcaseProps) {
  const { scenes } = product;
  const total = scenes.length;
  const { rootRef, phonesRef, active, textIndex, isScroll, goTo } =
    useSonoFanScroll(total);
  const dragStart = useRef<number | null>(null);
  const didDrag = useRef(false);

  const stepBy = (delta: number) => goTo(active + delta);

  // ← y → solo cuando esta escena está a la vista
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      const root = rootRef.current;
      const view = root?.closest<HTMLElement>('[data-sono-view]');
      if (!view || getComputedStyle(view).visibility !== 'visible') return;
      const rect = view.getBoundingClientRect();
      if (
        rect.top > window.innerHeight / 2 ||
        rect.bottom < window.innerHeight / 2
      )
        return;
      goTo(active + (event.key === 'ArrowRight' ? 1 : -1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [active, goTo, rootRef]);

  // Arrastrar el abanico: se mide en la ventana para no perder el gesto si el
  // dedo o el ratón salen del abanico
  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragStart.current = event.clientX;
    didDrag.current = false;
    const handleUp = (up: globalThis.PointerEvent) => {
      window.removeEventListener('pointerup', handleUp);
      window.removeEventListener('pointercancel', handleUp);
      const start = dragStart.current;
      dragStart.current = null;
      if (start === null) return;
      const distance = up.clientX - start;
      if (Math.abs(distance) < DRAG_DISTANCE) return;
      didDrag.current = true;
      stepBy(distance < 0 ? 1 : -1);
    };
    window.addEventListener('pointerup', handleUp);
    window.addEventListener('pointercancel', handleUp);
  };

  const handlePhoneClick = (index: number) => {
    // Un arrastre que termina sobre un teléfono no cuenta como clic
    if (didDrag.current) {
      didDrag.current = false;
      return;
    }
    goTo(index);
  };

  const scene = scenes[textIndex];
  if (!scene) return null;

  return (
    <div ref={rootRef} className="sono-product__stage">
      {[0, 1, 2].map(tone => (
        <span
          key={tone}
          className={cn(
            'sono-product__bg',
            `sono-product__bg--${tone}`,
            tone === scene.tone && 'sono-product__bg--on'
          )}
          aria-hidden="true"
        />
      ))}
      <span className="sono-product__glow" aria-hidden="true" />

      <div className="sono-product__copy" aria-live="polite">
        <p className="sono-product__eyebrow">
          {product.number} · {product.name}
        </p>
        {/* Se vuelve a montar con cada pantalla en la que el abanico se
            queda, y por eso su entrada se repite: las letras una a una y
            luego el párrafo y las etiquetas */}
        <div key={textIndex} className="sono-product__slide">
          <h2 className="sono-product__title">
            <span className="sr-only">{scene.title}</span>
            <span aria-hidden="true">
              {scene.title.split(' ').map((word, wordIndex, words) => {
                const before = words
                  .slice(0, wordIndex)
                  .reduce((sum, item) => sum + item.length, 0);

                return (
                  <span
                    key={`${word}-${wordIndex}`}
                    className="sono-product__word"
                  >
                    {Array.from(word).map((letter, letterIndex) => (
                      <span
                        key={`${letter}-${letterIndex}`}
                        className="sono-product__letter"
                        style={{ '--i': before + letterIndex } as CSSProperties}
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                );
              })}
            </span>
          </h2>
          <p className="sono-product__text">{scene.text}</p>
          <ul className="sono-product__tags">
            {scene.chips.map((chip, chipIndex) => (
              <li
                key={chip.title}
                className="sono-product__tag"
                style={{ '--i': chipIndex } as CSSProperties}
              >
                <span className="sono-product__tag-title">{chip.title}</span>
                <span className="sono-product__tag-text">{chip.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={cn('sono-fan', isScroll && 'sono-fan--scroll')}
        onPointerDown={handlePointerDown}
      >
        {scenes.map((item, index) => {
          const isActive = index === active;
          // Con scroll, los teléfonos se pintan cuadro a cuadro desde el hook;
          // sin él, aquí según su distancia a la activa
          const distance = index - active;
          const isHidden =
            !isScroll && isFanPhoneHidden(getFanValues(distance));

          return (
            <button
              key={item.screen.key}
              ref={element => {
                phonesRef.current[index] = element;
              }}
              type="button"
              className="sono-fan__phone"
              style={isScroll ? undefined : getFanStyle(distance)}
              data-hidden={isHidden ? '' : undefined}
              aria-label={`${item.screen.step} · ${item.screen.label}`}
              aria-current={isActive ? 'true' : undefined}
              tabIndex={Math.abs(index - active) > 2 ? -1 : 0}
              onClick={() => handlePhoneClick(index)}
            >
              <span className="sono-fan__screen">
                <img
                  src={`${SCREEN_SRC}/${item.screen.key}.webp`}
                  alt=""
                  draggable={false}
                  decoding="async"
                  className="sono-fan__image"
                />
              </span>
            </button>
          );
        })}

        <div className="sono-fan__stepper">
          <button
            type="button"
            className="sono-fan__stepper-button"
            aria-label="Pantalla anterior"
            disabled={active === 0}
            onClick={() => stepBy(-1)}
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <ol className="sono-fan__dots">
            {scenes.map((item, index) => (
              <li key={item.screen.key}>
                <button
                  type="button"
                  className={cn(
                    'sono-fan__dot',
                    index === active && 'sono-fan__dot--on'
                  )}
                  aria-label={`${item.screen.step} · ${item.screen.label}`}
                  aria-current={index === active ? 'true' : undefined}
                  onClick={() => goTo(index)}
                />
              </li>
            ))}
          </ol>
          <button
            type="button"
            className="sono-fan__stepper-button"
            aria-label="Pantalla siguiente"
            disabled={active === total - 1}
            onClick={() => stepBy(1)}
          >
            <ChevronRight aria-hidden="true" />
          </button>
          <span className="sono-fan__count">
            {active + 1} de {total}
          </span>
        </div>
      </div>
    </div>
  );
}
