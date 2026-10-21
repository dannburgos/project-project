'use client';

import { Plus } from 'lucide-react';
import { useId } from 'react';

import type { CaseGapSide } from '@/content/case-study.types';
import { useDisclosure } from '@/hooks/use-disclosure';
import { cn } from '@/lib/utils';

type CaseGapProps = {
  headline: string;
  lead: string;
  known: CaseGapSide;
  done: CaseGapSide;
  gapLabel: string;
  detailLabel: string;
  detail: string;
};

// La brecha (opción 10B, elegida por Dann): lo que se sabe frente a lo que se
// hace, separados por un vacío. Todo está a la vista desde que se llega: al
// entrar en pantalla, las tarjetas suben y la línea del medio se dibuja una
// sola vez, sin depender del scroll. Al tocar "La brecha" se despliega debajo
// el problema completo; el botón solo profundiza, no esconde lo principal.
export function CaseGap({
  headline,
  lead,
  known,
  done,
  gapLabel,
  detailLabel,
  detail
}: CaseGapProps) {
  const { isOpen, handleToggle } = useDisclosure();
  const detailId = useId();

  const side = (content: CaseGapSide, className: string) => (
    <div className={cn('case-gap__side', className)}>
      <p className="case-gap__label">{content.label}</p>
      <p className="case-gap__title">{content.title}</p>
      <p className="case-gap__text">{content.text}</p>
    </div>
  );

  return (
    <div className={cn('case-gap', isOpen && 'case-gap--open')}>
      <div className="case-gap__intro case-surface case-surface--tint">
        <p className="case-gap__headline">{headline}</p>
        <p className="case-gap__lead">{lead}</p>
      </div>

      <div className="case-gap__bridge">
        {side(known, 'case-gap__side--known')}
        <div className="case-gap__middle">
          <span className="case-gap__line" aria-hidden="true" />
          <button
            type="button"
            onClick={handleToggle}
            aria-expanded={isOpen}
            aria-controls={detailId}
            className="case-gap__toggle"
          >
            {gapLabel}
            <Plus aria-hidden="true" />
          </button>
        </div>
        {side(done, 'case-gap__side--done')}
      </div>

      <div id={detailId} className="case-gap__detail" hidden={!isOpen}>
        <div className="case-gap__detail-inner case-surface case-surface--tint">
          <p className="case-gap__label">{detailLabel}</p>
          <p className="case-gap__detail-text">{detail}</p>
        </div>
      </div>
    </div>
  );
}
