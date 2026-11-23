'use client';

import type { CSSProperties } from 'react';

import type {
  ToyotaLabels,
  ToyotaProgressCar,
  ToyotaSection
} from '@/content/toyota-story.types';
import { useCaseStoryCounter } from '@/hooks/use-case-story-counter';
import { useProgressCar } from '@/hooks/use-progress-car';
import { cn } from '@/lib/utils';

type ToyotaIndexProps = {
  sections: readonly ToyotaSection[];
  labels: ToyotaLabels;
  car: ToyotaProgressCar;
};

// Índice del caso, siempre en el mismo lugar: un botón abajo a la derecha
// que dice en qué capítulo vas. Al pasar el cursor (o al tocarlo, o con el
// teclado) la lista de capítulos se despliega hacia arriba para saltar a
// cualquiera.
// Por el borde de abajo de la pantalla, una GR Yaris recorre el avance de
// todo el caso y deja detrás una línea roja. Sobre la línea, un hito por
// capítulo (se enciende al pasar y lleva a su capítulo).
// El auto también es un control: se arrastra para recorrer el caso y, con el
// teclado, salta de capítulo en capítulo. Su física y sus luces las mueve
// driveProgressCar.
export function ToyotaIndex({ sections, labels, car }: ToyotaIndexProps) {
  const { ref, section, isOpen, handleToggle, handleJump } =
    useCaseStoryCounter();
  const {
    roadRef,
    marks,
    isDragging,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleKeyDown
  } = useProgressCar({ section, total: sections.length, onJump: handleJump });
  const current = sections[section] ?? sections[0];

  return (
    <div ref={ref} className="ty-index" data-counter>
      <div ref={roadRef} className="ty-index__road">
        <span className="ty-index__progress" aria-hidden="true" />
        {/* Hitos: con el mouse o el dedo; con el teclado se usa el auto o la
            lista del índice */}
        <ol className="ty-index__marks" aria-hidden="true">
          {sections.map((item, index) => (
            <li
              key={item.number}
              className={cn(
                'ty-index__mark',
                index <= section && 'ty-index__mark--passed'
              )}
              style={
                {
                  '--mark-at': marks[index] ?? index / sections.length
                } as CSSProperties
              }
            >
              <button
                type="button"
                tabIndex={-1}
                className="ty-index__mark-button"
                onClick={() => handleJump(index)}
              >
                <span className="ty-index__mark-label">
                  {item.number} · {item.name}
                </span>
              </button>
              {/* Al llegar a un capítulo, su nombre aparece un instante */}
              {index === section && (
                <span key={`pop-${section}`} className="ty-index__pop">
                  {item.number} · {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
        <div
          role="slider"
          tabIndex={0}
          aria-label={labels.carControl}
          aria-valuemin={1}
          aria-valuemax={sections.length}
          aria-valuenow={section + 1}
          aria-valuetext={`${current.number} · ${current.name}`}
          className={cn(
            'ty-index__car',
            isDragging && 'ty-index__car--dragging'
          )}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onKeyDown={handleKeyDown}
        >
          <span className="ty-index__hint" aria-hidden="true">
            {labels.carHint}
          </span>
          <img
            className="ty-index__wheel ty-index__wheel--rear"
            src={car.wheel}
            alt=""
          />
          <img
            className="ty-index__wheel ty-index__wheel--front"
            src={car.wheel}
            alt=""
          />
          <span className="ty-index__body" aria-hidden="true">
            <img className="ty-index__body-image" src={car.body} alt="" />
            <span className="ty-index__light ty-index__light--brake" />
            <span className="ty-index__light ty-index__light--head" />
            <span className="ty-index__beam" />
          </span>
        </div>
      </div>
      <nav className="ty-index__compact" aria-label={labels.navigation}>
        <button
          type="button"
          className="ty-index__toggle"
          aria-expanded={isOpen}
          aria-label={`${labels.menu}: ${current.number} · ${current.name}`}
          onClick={handleToggle}
        >
          <span className="ty-index__toggle-number">{current.number}</span>
          <span className="ty-index__toggle-name">{current.name}</span>
          <span className="ty-index__toggle-total" aria-hidden="true">
            / {sections[sections.length - 1].number}
          </span>
        </button>
        {/* La lista siempre está en la página; mientras está recogida no se
            ve ni recibe el foco */}
        <div className={cn('ty-index__menu', isOpen && 'ty-index__menu--open')}>
          <ol className="ty-index__menu-list">
            {sections.map((item, index) => (
              <li
                key={item.number}
                className="ty-index__menu-row"
                style={{ '--item-index': index } as CSSProperties}
              >
                <button
                  type="button"
                  className={cn(
                    'ty-index__menu-item',
                    index < section && 'ty-index__menu-item--done',
                    index === section && 'ty-index__menu-item--current'
                  )}
                  aria-current={index === section ? 'step' : undefined}
                  onClick={() => handleJump(index)}
                >
                  <span className="ty-index__number">{item.number}</span>
                  {item.name}
                </button>
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </div>
  );
}
