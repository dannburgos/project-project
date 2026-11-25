import type { CSSProperties } from 'react';

import { ToyotaIcon } from '@/components/atoms/toyota-icon';
import { cn } from '@/lib/utils';
import { toyotaAdvisorMessages as copy, fillTemplate } from '../../messages';
import { formatMillions } from '../../toyota-score.util';
import { buildScanner } from '../../toyota-view.util';
import type { ToyotaAnswers } from '../../types/toyota-advisor.types';
import { TaVisual } from '../atoms/ta-visual';
import { TaAdvisorBar } from '../molecules/ta-advisor-bar';

type TaAnalysisScreenProps = {
  answers: ToyotaAnswers;
};

// Paso en curso de los tres mensajes (el primero ya terminó)
const ACTIVE_STEP = 1;

// «Buscando tu Toyota» (propuesta pendiente de aprobación): el perfil arriba
// como etiquetas que se cruzan; los 6 modelos en fila, recorridos por una
// línea roja que los va encendiendo; abajo, los tres pasos del análisis
export function TaAnalysisScreen({ answers }: TaAnalysisScreenProps) {
  const text = copy.analysis;
  const { tags, ranked } = buildScanner(answers);
  // Cada etiqueta una vez, aunque la sumen dos respuestas
  const crossing = [...new Set(tags.map(tag => tag.label))];
  const models = [...ranked].sort(
    (first, second) => first.model.priceFrom - second.model.priceFrom
  );
  const leaderId = ranked[0]?.model.id;

  return (
    <div className="ta-analysis">
      <TaAdvisorBar />

      <div className="ta-analysis__top">
        <div>
          <p className="ta-eyebrow ta-eyebrow--red">
            <span className="ta-eyebrow__line" aria-hidden="true" />
            {text.eyebrow}
          </p>
          <h2 className="ta-analysis__title">{text.title}</h2>
        </div>
        <div className="ta-analysis__profile">
          <p className="ta-analysis__label">{text.crossing}</p>
          <ul className="ta-analysis__tags">
            {crossing.map((label, index) => (
              <li key={label} style={{ '--i': index } as CSSProperties}>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="ta-analysis__lane">
        <span className="ta-analysis__beam" aria-hidden="true" />
        <ol className="ta-analysis__models">
          {models.map((item, index) => (
            <li
              key={item.model.id}
              className={cn(
                'ta-analysis__model',
                !item.isInBudget && 'ta-analysis__model--out',
                item.model.id === leaderId && 'ta-analysis__model--lead'
              )}
              style={{ '--i': index } as CSSProperties}
            >
              <TaVisual
                label={fillTemplate(text.visual, { model: item.model.name })}
                tone="dark"
                className="ta-analysis__visual"
              />
              <span className="ta-analysis__name">{item.model.name}</span>
              <span className="ta-analysis__price">
                {fillTemplate(text.from, {
                  value: formatMillions(item.model.priceFrom)
                })}
              </span>
              <span className="ta-analysis__match">
                {item.isInBudget
                  ? fillTemplate(text.match, { points: item.points })
                  : text.outOfBudget}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <ol className="ta-analysis__steps">
        {text.steps.map((step, index) => (
          <li
            key={step}
            className={cn(
              'ta-analysis__step',
              index < ACTIVE_STEP && 'ta-analysis__step--done',
              index === ACTIVE_STEP && 'ta-analysis__step--active'
            )}
          >
            <span className="ta-analysis__bar" aria-hidden="true" />
            <span className="ta-analysis__step-text">
              {index < ACTIVE_STEP && (
                <ToyotaIcon name="check" className="size-4" />
              )}
              {step}
            </span>
          </li>
        ))}
        <li className="ta-analysis__progress">
          {fillTemplate(text.progress, {
            current: ACTIVE_STEP + 1,
            total: text.steps.length
          })}
        </li>
      </ol>
    </div>
  );
}
