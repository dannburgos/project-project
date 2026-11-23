import type { ToyotaVisual as ToyotaVisualContent } from '@/content/toyota-story.types';
import { cn } from '@/lib/utils';

type ToyotaVisualProps = {
  visual: ToyotaVisualContent;
  className?: string;
};

// Imagen del caso Toyota. Mientras no llega, es una caja gris con la etiqueta
// que dice qué imagen va ahí.
export function ToyotaVisual({ visual, className }: ToyotaVisualProps) {
  if (visual.src) {
    return (
      <img
        className={cn('ty-visual ty-visual--image', className)}
        src={visual.src}
        alt={visual.label}
      />
    );
  }

  return (
    <div
      className={cn('ty-visual', className)}
      role="img"
      aria-label={visual.label}
    >
      <span className="ty-visual__label" aria-hidden="true">
        {visual.label}
      </span>
    </div>
  );
}
