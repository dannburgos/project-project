import type { ToyotaHead as ToyotaHeadContent } from '@/content/toyota-story.types';
import { cn } from '@/lib/utils';

type ToyotaHeadSize = 'default' | 'large';
type ToyotaHeadAlign = 'start' | 'center';

type ToyotaHeadProps = {
  head: ToyotaHeadContent;
  size?: ToyotaHeadSize;
  align?: ToyotaHeadAlign;
  className?: string;
};

const SIZE_CLASS: Record<ToyotaHeadSize, string> = {
  default: '',
  large: 'ty-head--large'
};

const ALIGN_CLASS: Record<ToyotaHeadAlign, string> = {
  start: '',
  center: 'ty-head--center'
};

// Encabezado de un módulo: eyebrow, titular que se destapa con una máscara y
// bajada
export function ToyotaHead({
  head,
  size = 'default',
  align = 'start',
  className
}: ToyotaHeadProps) {
  return (
    <header
      className={cn('ty-head', SIZE_CLASS[size], ALIGN_CLASS[align], className)}
    >
      {head.eyebrow && (
        <p className="ty-head__eyebrow" data-ty-rise>
          {head.eyebrow}
        </p>
      )}
      <h3 className="ty-head__title" data-ty-mask>
        {head.title}
      </h3>
      {head.lead && (
        <p className="ty-head__lead" data-ty-rise>
          {head.lead}
        </p>
      )}
    </header>
  );
}
