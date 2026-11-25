'use client';

import { useState, type CSSProperties } from 'react';

import { cn } from '@/lib/utils';
import { toyotaAdvisorMessages as copy, fillTemplate } from '../../messages';
import {
  TOYOTA_BUDGET_RANGES,
  TOYOTA_MODELS,
  TOYOTA_PRICE_SCALE
} from '../../toyota-catalog';
import { formatMillions } from '../../toyota-score.util';
import { TaOptionTile } from '../atoms/ta-option-tile';

type TaBudgetPickerProps = {
  selectedId?: string;
  letters: readonly string[];
  onSelect: (rangeId: string) => void;
};

const SCALE_SPAN = TOYOTA_PRICE_SCALE.max - TOYOTA_PRICE_SCALE.min;
const MODELS_BY_PRICE = [...TOYOTA_MODELS].sort(
  (first, second) => first.priceFrom - second.priceFrom
);

function toPercent(value: number) {
  const clamped = Math.min(
    Math.max(value, TOYOTA_PRICE_SCALE.min),
    TOYOTA_PRICE_SCALE.max
  );
  return ((clamped - TOYOTA_PRICE_SCALE.min) / SCALE_SPAN) * 100;
}

// Pregunta 7: el presupuesto sobre una regla con el precio «desde» de cada
// modelo. Al pasar el cursor por un rango se previsualiza el tope; al
// elegirlo, los modelos que quedan fuera se apagan
export function TaBudgetPicker({
  selectedId,
  letters,
  onSelect
}: TaBudgetPickerProps) {
  const [previewId, setPreviewId] = useState<string | null>(null);
  const shownId = previewId ?? selectedId;
  const shown = TOYOTA_BUDGET_RANGES.find(range => range.id === shownId);
  const cap = shown?.max;
  const inRange = TOYOTA_MODELS.filter(
    model => cap === undefined || model.priceFrom <= cap
  ).length;
  const budget = copy.advisor.budget;

  return (
    <div className="ta-budget">
      <div
        className={cn(
          'ta-budget__ruler',
          previewId && 'ta-budget__ruler--preview'
        )}
        style={
          {
            '--cap': `${cap === undefined ? 100 : toPercent(cap)}%`,
            '--band-start': `${shown ? toPercent(shown.min) : 0}%`
          } as CSSProperties
        }
      >
        <ul className="ta-budget__models">
          {MODELS_BY_PRICE.map((model, index) => {
            const isIn = cap === undefined || model.priceFrom <= cap;
            return (
              <li
                key={model.id}
                className={cn(
                  'ta-budget__flag',
                  index % 2 === 1 && 'ta-budget__flag--high',
                  isIn ? 'ta-budget__flag--in' : 'ta-budget__flag--out'
                )}
                style={
                  { '--x': `${toPercent(model.priceFrom)}%` } as CSSProperties
                }
              >
                <span className="ta-budget__flag-name">{model.name}</span>
                <span className="ta-budget__flag-price">
                  {fillTemplate(budget.fromLabel, {
                    value: formatMillions(model.priceFrom)
                  })}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="ta-budget__track" aria-hidden="true">
          <span className="ta-budget__fill" />
          <span className="ta-budget__band" />
          {cap !== undefined && (
            <span className="ta-budget__cap">
              {fillTemplate(budget.cap, { value: formatMillions(cap) })}
            </span>
          )}
        </div>
        <div className="ta-budget__scale" aria-hidden="true">
          <span>{budget.scaleStart}</span>
          <span>{budget.scaleEnd}</span>
        </div>
      </div>

      <p className="ta-budget__result">
        <span className="ta-budget__count">{inRange}</span>
        {cap === undefined ? budget.allIn : budget.inRange}
      </p>

      <div className="ta-budget__options" role="radiogroup">
        {TOYOTA_BUDGET_RANGES.map((range, index) => (
          <div
            key={range.id}
            onMouseEnter={() => setPreviewId(range.id)}
            onMouseLeave={() => setPreviewId(null)}
          >
            <TaOptionTile
              label={range.label}
              letter={letters[index]}
              isSelected={range.id === selectedId}
              onSelect={() => onSelect(range.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
