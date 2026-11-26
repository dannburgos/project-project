import type { QuboVisual as QuboVisualContent } from '@/content/qubo-story.types';
import { cn } from '@/lib/utils';

type QuboVisualProps = {
  visual: QuboVisualContent;
  className?: string;
};

// Imagen del caso Qubo. Mientras no llega, es una caja gris con la etiqueta
// que dice qué imagen va ahí.
export function QuboVisual({ visual, className }: QuboVisualProps) {
  if (visual.src) {
    return (
      <img
        className={cn('qb-visual qb-visual--image', className)}
        src={visual.src}
        alt={visual.label}
      />
    );
  }

  return (
    <div
      className={cn('qb-visual', className)}
      role="img"
      aria-label={visual.label}
    >
      <span className="qb-visual__label" aria-hidden="true">
        {visual.label}
      </span>
    </div>
  );
}
