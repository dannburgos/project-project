import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { KeyboardEvent } from 'react';

import { cn } from '@/lib/utils';
import { formatSectionNumber } from '@/utils/section-number.util';
import { formatSlidePanelId, formatSlideTabId } from '@/utils/slide-ids.util';

type SonoSlideNavProps = {
  // Prefijo de los ids que enlazan cada pestaña con su slide
  idPrefix: string;
  // Nombre de cada slide (lo leen los lectores de pantalla en su pestaña)
  titles: readonly string[];
  current: number;
  label: string;
  previousLabel: string;
  nextLabel: string;
  // Sobre fondo oscuro (flujos) en vez de claro (benchmark)
  isDark?: boolean;
  onSelect: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  onKeyDown: (event: KeyboardEvent) => void;
};

// Controles de unas slides de Sonopizza: flecha para volver, pestañas
// numeradas y flecha para seguir. En la primera slide la flecha de seguir
// empuja de vez en cuando hacia la derecha, para que se note que hay más.
export function SonoSlideNav({
  idPrefix,
  titles,
  current,
  label,
  previousLabel,
  nextLabel,
  isDark = false,
  onSelect,
  onPrevious,
  onNext,
  onKeyDown
}: SonoSlideNavProps) {
  return (
    <div
      className={cn('sono-slide-nav', isDark && 'sono-slide-nav--dark')}
      onKeyDown={onKeyDown}
    >
      <button
        type="button"
        className="sono-slide-nav__arrow"
        aria-label={previousLabel}
        disabled={current === 0}
        onClick={onPrevious}
      >
        <ArrowLeft aria-hidden="true" />
      </button>
      <div className="sono-slide-nav__tabs" role="tablist" aria-label={label}>
        {titles.map((title, index) => (
          <button
            key={title}
            id={formatSlideTabId(idPrefix, index)}
            type="button"
            role="tab"
            aria-selected={index === current}
            aria-controls={formatSlidePanelId(idPrefix, index)}
            aria-label={title}
            className={cn(
              'sono-slide-nav__tab',
              index === current && 'sono-slide-nav__tab--current'
            )}
            onClick={() => onSelect(index)}
          >
            {formatSectionNumber(index, 1)}
          </button>
        ))}
      </div>
      <button
        type="button"
        className={cn(
          'sono-slide-nav__arrow',
          current === 0 && 'sono-slide-nav__arrow--hint'
        )}
        aria-label={nextLabel}
        disabled={current === titles.length - 1}
        onClick={onNext}
      >
        <ArrowRight aria-hidden="true" />
      </button>
    </div>
  );
}
