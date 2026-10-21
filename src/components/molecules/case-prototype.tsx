'use client';

import { Maximize2, MousePointerClick } from 'lucide-react';

import { siteContent } from '@/content/site';
import { usePrototypeActivation } from '@/hooks/use-prototype-activation';
import { cn } from '@/lib/utils';

type CasePrototypeProps = {
  src: string;
  title: string;
};

// Prototipo del proyecto dentro de un celular (escritorio): muestra su propia
// página (/prototypes/<proyecto>), así que todo lo que cambie en el prototipo
// se ve aquí. Queda quieto hasta hacer clic, para no atrapar el scroll de la
// página. En celular no cabe un celular dentro de otro: se abre a pantalla
// completa.
export function CasePrototype({ src, title }: CasePrototypeProps) {
  const labels = siteContent.caseStudy.labels.prototype;
  const { isActive, handleActivate, handleDeactivate } =
    usePrototypeActivation();

  return (
    <div className="case-prototype">
      <div className="case-prototype__device" onMouseLeave={handleDeactivate}>
        <iframe
          src={src}
          title={title}
          loading="lazy"
          tabIndex={isActive ? 0 : -1}
          className={cn(
            'case-prototype__screen',
            isActive && 'case-prototype__screen--active'
          )}
        />
        {!isActive && (
          <button
            type="button"
            onClick={handleActivate}
            className="case-prototype__activate"
          >
            <span className="case-prototype__activate-label">
              <MousePointerClick aria-hidden="true" />
              {labels.activate}
            </span>
          </button>
        )}
      </div>

      <a
        href={src}
        target="_blank"
        rel="noopener"
        className="case-prototype__open"
      >
        <span className="case-prototype__open-desktop">{labels.open}</span>
        <span className="case-prototype__open-mobile">{labels.mobileHint}</span>
        <Maximize2 aria-hidden="true" />
      </a>
    </div>
  );
}
