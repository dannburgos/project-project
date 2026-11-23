'use client';

import { PlantiDevice } from '../organisms/planti-device';
import type { PlantiNavKey } from './planti-bottom-nav';

type PlantiBoardFrameProps = {
  step: number;
  title: string;
  note: string;
  children: React.ReactNode;
  navActive?: PlantiNavKey | null;
};

const NEXT_SELECTOR =
  '.planti-button, .planti-banner__action, .planti-carousel__card:not(.planti-carousel__card--add), .planti-lock-notice';
const BACK_SELECTOR = '.planti-screen-header button';

// Pasa a la pantalla vecina del tablero: se desplaza hasta ella y la resalta
function goToNeighbor(frame: HTMLElement, offset: 1 | -1) {
  const frames = Array.from(
    document.querySelectorAll<HTMLElement>('.planti-board__frame')
  );
  const target = frames[frames.indexOf(frame) + offset];

  if (!target) return;

  target.scrollIntoView({
    behavior: 'smooth',
    inline: 'center',
    block: 'nearest'
  });
  target.removeAttribute('data-arrived');
  void target.offsetWidth;
  target.setAttribute('data-arrived', '');
}

// Una pantalla del tablero: el celular reducido, con su número, su nombre y
// qué pasa en ella
export function PlantiBoardFrame({
  step,
  title,
  note,
  children,
  navActive = null
}: PlantiBoardFrameProps) {
  return (
    <li className="planti-board__frame">
      <div
        className="planti-board__screen"
        onClick={event => {
          const frame = event.currentTarget.closest<HTMLElement>(
            '.planti-board__frame'
          );
          const target = event.target as HTMLElement;

          if (!frame) return;
          if (target.closest(BACK_SELECTOR)) goToNeighbor(frame, -1);
          else if (target.closest(NEXT_SELECTOR)) goToNeighbor(frame, 1);
        }}
      >
        <PlantiDevice navActive={navActive}>{children}</PlantiDevice>
      </div>
      <p className="planti-board__step">
        {step} · {title}
      </p>
      <p className="planti-board__note">{note}</p>
    </li>
  );
}
