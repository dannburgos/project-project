import { Plus } from 'lucide-react';
import Link from 'next/link';

import { Placeholder } from '@/components/atoms/placeholder';
import { cn } from '@/lib/utils';

type ShowcaseCardProps = {
  href: string;
  title: string;
  description: string;
  actionLabel: string;
  mediaLabel: string;
  size?: 'full' | 'half' | 'fill';
};

// Tarjeta grande (referencia: midu.design). La imagen ocupa toda la tarjeta y
// el texto va encima, abajo a la izquierda. Al pasar el mouse o enfocarla, el
// título se cambia por la acción y aparece el botón redondo.
export function ShowcaseCard({
  href,
  title,
  description,
  actionLabel,
  mediaLabel,
  size = 'half'
}: ShowcaseCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'showcase-card',
        size === 'full' && 'showcase-card--full',
        size === 'half' && 'showcase-card--half',
        size === 'fill' && 'showcase-card--fill'
      )}
    >
      <div className="showcase-card__media" aria-hidden="true">
        <Placeholder
          label={mediaLabel}
          className="showcase-card__placeholder"
        />
      </div>
      <div className="showcase-card__content">
        <div className="showcase-card__text">
          <h2 className="showcase-card__title">
            <span className="showcase-card__title-label">{title}</span>
            <span className="showcase-card__title-action" aria-hidden="true">
              {actionLabel}
            </span>
          </h2>
          <p className="showcase-card__description">{description}</p>
        </div>
        <span className="showcase-card__button" aria-hidden="true">
          <Plus />
        </span>
      </div>
    </Link>
  );
}
