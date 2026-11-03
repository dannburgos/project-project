import Link from 'next/link';
import type { MouseEvent } from 'react';

import type { ProjectCover } from '@/content/site';
import { cn } from '@/lib/utils';

export type WorkCarouselTone = 'green' | 'purple' | 'neutral';

type WorkCarouselCardProps = {
  href: string;
  index: number;
  name: string;
  industry: string;
  summary: string;
  // Etiqueta corta del proyecto: aparece sobre su imagen cuando llega al centro
  tag?: string;
  // La portada: la misma imagen con la que arranca su caso
  cover: ProjectCover;
  tone: WorkCarouselTone;
  onClick: (
    event: MouseEvent<HTMLAnchorElement>,
    index: number,
    tone: WorkCarouselTone
  ) => void;
};

type Corner = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

const CORNERS: readonly Corner[] = [
  'topLeft',
  'topRight',
  'bottomLeft',
  'bottomRight'
];

const CORNER_CLASS: Record<Corner, string> = {
  topLeft: 'work-card__corner--top-left',
  topRight: 'work-card__corner--top-right',
  bottomLeft: 'work-card__corner--bottom-left',
  bottomRight: 'work-card__corner--bottom-right'
};

const TONE_CLASS: Record<WorkCarouselTone, string> = {
  green: 'work-card--green',
  purple: 'work-card--purple',
  neutral: 'work-card--neutral'
};

// Carta de un proyecto en el carrusel de Work: el espacio de su imagen (aún no
// existe) con el color de su marca y un marco que aparece cuando es el
// protagonista: una línea fina pegada a su borde con un cuadrito en cada
// esquina (referencia: productionportugal.com/locations). Con "reducir
// movimiento" lleva su nombre y su frase debajo; si no, los muestra el
// carrusel a su alrededor.
export function WorkCarouselCard({
  href,
  index,
  name,
  industry,
  summary,
  tag,
  cover,
  tone,
  onClick
}: WorkCarouselCardProps) {
  return (
    <Link
      href={href}
      className={cn('work-card', TONE_CLASS[tone])}
      data-carousel-card
      data-index={index}
      aria-label={name}
      onClick={event => onClick(event, index, tone)}
    >
      <span className="work-card__frame" aria-hidden="true">
        {CORNERS.map(corner => (
          <i
            key={corner}
            className={cn('work-card__corner', CORNER_CLASS[corner])}
          />
        ))}
      </span>
      <span className="work-card__image">
        {tag && <span className="work-card__tag">{tag}</span>}
        {cover.src ? (
          <img src={cover.src} alt="" className="work-card__photo" />
        ) : (
          <span className="work-card__label">{cover.label}</span>
        )}
      </span>
      <span className="work-card__caption">
        <span className="work-card__name">{name}</span>
        <span className="work-card__industry">{industry}</span>
        <span className="work-card__summary">{summary}</span>
      </span>
    </Link>
  );
}
