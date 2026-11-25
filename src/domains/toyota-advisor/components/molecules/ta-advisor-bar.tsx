import { ToyotaIcon } from '@/components/atoms/toyota-icon';
import { cn } from '@/lib/utils';
import { toyotaAdvisorMessages as copy } from '../../messages';
import { TaVisual } from '../atoms/ta-visual';

type TaAdvisorBarProps = {
  // En el perfil (superficie clara) la barra es blanca
  tone?: 'dark' | 'light';
};

// Barra de la asesoría: el logo, el nombre del módulo y la salida
export function TaAdvisorBar({ tone = 'dark' }: TaAdvisorBarProps) {
  return (
    <header
      className={cn('ta-ask__bar', tone === 'light' && 'ta-ask__bar--light')}
    >
      <TaVisual label={copy.site.logo} tone={tone} className="ta-ask__logo" />
      <span className="ta-ask__module">{copy.site.module}</span>
      <button type="button" className="ta-ask__exit">
        {copy.site.exit}
        <ToyotaIcon name="close" className="size-4" />
      </button>
    </header>
  );
}
