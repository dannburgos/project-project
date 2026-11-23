import type { CSSProperties } from 'react';

import type { ToyotaStep } from '@/content/toyota-story.types';
import { cn } from '@/lib/utils';

type ToyotaStepsTone = 'default' | 'muted';

type ToyotaStepsProps = {
  steps: readonly ToyotaStep[];
  label?: string;
  tone?: ToyotaStepsTone;
  // Columnas de la fila (por defecto, una por paso). Dos recorridos que se
  // comparan usan las mismas columnas para que sus pasos queden alineados
  columns?: number;
  className?: string;
};

const TONE_CLASS: Record<ToyotaStepsTone, string> = {
  default: '',
  muted: 'ty-steps--muted'
};

// Recorrido de izquierda a derecha (dirección de progreso de la marca): la
// línea se dibuja con el scroll y cada paso llega en orden. El paso destacado
// va en rojo.
export function ToyotaSteps({
  steps,
  label,
  tone = 'default',
  columns,
  className
}: ToyotaStepsProps) {
  const layout = {
    '--step-count': steps.length,
    '--step-columns': columns ?? steps.length
  } as CSSProperties;

  return (
    <figure
      className={cn('ty-steps', TONE_CLASS[tone], className)}
      style={layout}
      data-ty-group
    >
      {label && <figcaption className="ty-steps__label">{label}</figcaption>}
      <div className="ty-steps__track">
        <span className="ty-steps__line" aria-hidden="true" data-ty-line />
        <ol className="ty-steps__list">
          {steps.map((step, index) => (
            <li
              key={step.label}
              className={cn(
                'ty-steps__item',
                step.isHighlight && 'ty-steps__item--highlight'
              )}
              data-ty-item
            >
              <span className="ty-steps__node" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="ty-steps__text">{step.label}</span>
              {step.text && (
                <span className="ty-steps__description">{step.text}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
