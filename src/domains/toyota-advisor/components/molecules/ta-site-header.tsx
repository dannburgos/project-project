import { ToyotaIcon } from '@/components/atoms/toyota-icon';
import { cn } from '@/lib/utils';
import { toyotaAdvisorMessages as copy } from '../../messages';
import { TaVisual } from '../atoms/ta-visual';

const ADVISOR_ITEM = 1;

// Encabezado del sitio de Toyota: una sola línea blanca, el menú del caso
// (con «Encuentra tu Toyota» marcado como nuevo) y Cotizar como acción
export function TaSiteHeader() {
  const site = copy.site;

  return (
    <header className="ta-site">
      <TaVisual label={site.logo} className="ta-site__logo" />
      <nav className="ta-site__nav">
        {site.menu.map((item, index) => (
          <a
            key={item}
            href="#"
            className={cn(
              'ta-site__link',
              index === ADVISOR_ITEM && 'ta-site__link--featured'
            )}
          >
            {item}
            {index === ADVISOR_ITEM && (
              <span className="ta-site__new">{site.newBadge}</span>
            )}
          </a>
        ))}
      </nav>
      <div className="ta-site__tools">
        <button
          type="button"
          className="ta-site__search"
          aria-label={site.search}
        >
          <ToyotaIcon name="search" className="size-5" />
        </button>
        <a href="#" className="ta-button ta-button--primary ta-button--small">
          {site.quote}
        </a>
      </div>
    </header>
  );
}
