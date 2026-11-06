import type { ProjectCover } from '@/content/site';
import { cn } from '@/lib/utils';

export type WorkCarouselTone =
  | 'green'
  | 'purple'
  | 'blue'
  | 'indigo'
  | 'neutral';

type WorkCarouselCardProps = {
  index: number;
  name: string;
  actionLabel: string;
  // La portada: la misma imagen con la que arranca su caso
  cover: ProjectCover;
  tone: WorkCarouselTone;
  onSelect: (index: number) => void;
};

const TONE_CLASS: Record<WorkCarouselTone, string> = {
  green: 'work-card--green',
  purple: 'work-card--purple',
  blue: 'work-card--blue',
  indigo: 'work-card--indigo',
  neutral: 'work-card--neutral'
};

// Tarjeta de un proyecto en Work. En la fila es un botón que lo trae al
// frente; cuando es su turno crece hasta volverse el fondo. Mientras no haya
// imagen, lleva el color de la marca del proyecto.
export function WorkCarouselCard({
  index,
  name,
  actionLabel,
  cover,
  tone,
  onSelect
}: WorkCarouselCardProps) {
  return (
    <button
      type="button"
      className={cn('work-card', TONE_CLASS[tone])}
      data-gallery-card
      aria-label={`${actionLabel} ${name}`}
      onClick={() => onSelect(index)}
    >
      {cover.src ? (
        <img src={cover.src} alt="" className="work-card__photo" />
      ) : (
        <span className="work-card__label" aria-hidden="true">
          {cover.label}
        </span>
      )}
      <span className="work-card__name" aria-hidden="true">
        {name}
      </span>
    </button>
  );
}
