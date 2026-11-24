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

// Parte el titular en trozos; las palabras de `accents` van en su propio span
// para pasar a rojo con el scroll (data-ty-accent)
function renderTitle(title: string, accents: readonly string[] | undefined) {
  if (!accents || accents.length === 0) return title;
  const pattern = new RegExp(`(${accents.join('|')})`, 'gi');
  return title.split(pattern).map((part, index) =>
    accents.some(word => word.toLowerCase() === part.toLowerCase()) ? (
      <span key={index} className="ty-head__accent" data-ty-accent>
        {part}
      </span>
    ) : (
      part
    )
  );
}

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
        <p
          className={cn(
            'ty-head__eyebrow',
            head.isEyebrowAccent && 'ty-head__accent'
          )}
          data-ty-rise
          data-ty-accent={head.isEyebrowAccent ? '' : undefined}
        >
          {head.eyebrow}
        </p>
      )}
      <h3 className="ty-head__title" data-ty-mask>
        {renderTitle(head.title, head.accents)}
      </h3>
      {head.lead && (
        <p className="ty-head__lead" data-ty-rise>
          {head.lead}
        </p>
      )}
    </header>
  );
}
