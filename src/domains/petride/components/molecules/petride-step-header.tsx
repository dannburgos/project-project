import { ChevronLeft, X } from 'lucide-react';

import { cn } from '@/lib/utils';

import { petrideMessages } from '../../messages';
import { fillPetrideTemplate } from '../../petride-template.util';

type PetrideStepHeaderProps = {
  current: number;
  total: number;
};

// Encabezado de un registro por pasos: cerrar o volver, la barra de avance y
// en qué paso va
export function PetrideStepHeader({ current, total }: PetrideStepHeaderProps) {
  const { common, steps } = petrideMessages;
  const isFirst = current === 1;
  const Icon = isFirst ? X : ChevronLeft;

  return (
    <header className="petride-header">
      <button
        type="button"
        className="petride-header__back"
        aria-label={isFirst ? common.close : common.back}
      >
        <Icon aria-hidden="true" />
      </button>
      <span className="petride-progress" aria-hidden="true">
        {Array.from({ length: total }, (_, index) => (
          <span
            key={index}
            className={cn(
              'petride-progress__bar',
              index < current && 'petride-progress__bar--on'
            )}
          />
        ))}
      </span>
      <span className="petride-progress__count">
        {fillPetrideTemplate(steps.count, { current, total })}
      </span>
    </header>
  );
}
