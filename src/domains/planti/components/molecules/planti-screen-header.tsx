import { ArrowLeft, Ellipsis } from 'lucide-react';

import { plantiMessages } from '../../messages';

type PlantiScreenHeaderProps = {
  title?: string;
  // Botón de más opciones a la derecha
  hasMenu?: boolean;
};

// Cabecera de las pantallas de un flujo: volver y, si hace falta, un título
export function PlantiScreenHeader({
  title,
  hasMenu = false
}: PlantiScreenHeaderProps) {
  return (
    <header className="planti-screen-header">
      <button
        type="button"
        className="planti-icon-button planti-icon-button--flat"
        aria-label={plantiMessages.common.back}
      >
        <ArrowLeft aria-hidden="true" />
      </button>
      {title && <h1 className="planti-screen-header__title">{title}</h1>}
      {hasMenu && (
        <button
          type="button"
          className="planti-icon-button planti-icon-button--flat ml-auto"
          aria-label={plantiMessages.common.more}
        >
          <Ellipsis aria-hidden="true" />
        </button>
      )}
    </header>
  );
}
