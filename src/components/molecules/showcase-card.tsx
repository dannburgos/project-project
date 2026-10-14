import { Plus } from 'lucide-react';
import Link from 'next/link';

import { Placeholder } from '@/components/atoms/placeholder';
import { cn } from '@/lib/utils';

// Etiquetas como máximo por tarjeta, para que no compitan con el nombre
const MAX_TAGS = 2;

type ShowcaseCardProps = {
  href: string;
  title: string;
  description: string;
  actionLabel: string;
  mediaLabel: string;
  size?: 'full' | 'half' | 'fill';
  // Palabras clave del proyecto, arriba a la derecha
  tags?: readonly string[];
};

// Tarjeta grande (referencia: midu.design). La imagen ocupa toda la tarjeta y
// el texto va encima, abajo a la izquierda; las etiquetas, arriba a la
// derecha. Al pasar el mouse o enfocarla, el título se cambia por la acción y
// aparece el botón redondo.
export function ShowcaseCard({
  href,
  title,
  description,
  actionLabel,
  mediaLabel,
  size = 'half',
  tags = []
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
      {/* Van después del texto: un lector de pantalla lee primero el nombre */}
      {tags.length > 0 && (
        <ul className="showcase-card__tags">
          {tags.slice(0, MAX_TAGS).map((tag, index) => (
            <li key={`${index}-${tag}`} className="showcase-card__tag">
              {tag}
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
}
