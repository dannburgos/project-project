'use client';

import type { CSSProperties } from 'react';

import { ToyotaIcon } from '@/components/atoms/toyota-icon';
import { cn } from '@/lib/utils';
import { useCompareTable } from '../../hooks/use-compare-table';
import { toyotaAdvisorMessages as copy, fillTemplate } from '../../messages';
import { TOYOTA_MODEL_DETAILS } from '../../toyota-model-details';
import type { ToyotaRecommendation } from '../../toyota-recommendation.util';
import { formatPrice } from '../../toyota-score.util';
import type { ToyotaSpecKey } from '../../types/toyota-model-details.types';
import { TaVisual } from '../atoms/ta-visual';
import { TaAdvisorBar } from '../molecules/ta-advisor-bar';

type TaCompareScreenProps = {
  recommendations: readonly ToyotaRecommendation[];
};

// Filas de la ficha y si gana el número más alto o el más bajo
const ROWS: readonly { key: ToyotaSpecKey; better?: 'high' }[] = [
  { key: 'seats', better: 'high' },
  { key: 'engine' },
  { key: 'power', better: 'high' },
  { key: 'transmission' },
  { key: 'traction' },
  { key: 'length', better: 'high' },
  { key: 'width', better: 'high' },
  { key: 'height', better: 'high' },
  { key: 'clearance', better: 'high' },
  { key: 'airbags', better: 'high' },
  { key: 'payload', better: 'high' },
  { key: 'trunk' }
];

type CompareCell = { text: string; isBest: boolean; isMissing: boolean };
type CompareRow = { key: string; label: string; cells: CompareCell[] };

// Comparación de 2 o 3 modelos: columnas fijas arriba, tus prioridades
// primero, «Solo diferencias» encendido y el mejor valor de cada fila en rojo
export function TaCompareScreen({ recommendations }: TaCompareScreenProps) {
  const text = copy.compare;
  const table = useCompareTable();
  const models = recommendations.map(item => item.model);

  const lowestPrice = Math.min(...models.map(model => model.priceFrom));
  const rows: CompareRow[] = [
    {
      key: 'price',
      label: text.price,
      cells: models.map(model => ({
        text: formatPrice(model.priceFrom),
        isBest: model.priceFrom === lowestPrice,
        isMissing: false
      }))
    },
    {
      key: 'type',
      label: text.type,
      cells: models.map(model => ({
        text: model.body,
        isBest: false,
        isMissing: false
      }))
    },
    ...ROWS.map(row => {
      const specs = models.map(
        model => TOYOTA_MODEL_DETAILS[model.id].specs[row.key]
      );
      const values = specs.flatMap(spec =>
        spec.value === undefined ? [] : [spec.value]
      );
      const top =
        row.better && values.length > 1 ? Math.max(...values) : undefined;
      const isTie =
        values.filter(value => value === top).length === values.length;
      return {
        key: row.key,
        label: copy.specs[row.key],
        cells: specs.map(spec => ({
          text: spec.text ?? text.missing,
          isBest: top !== undefined && !isTie && spec.value === top,
          isMissing: !spec.text
        }))
      };
    })
  ];

  const isSame = (row: CompareRow) =>
    row.cells.every(cell => cell.text === row.cells[0].text);
  const hiddenCount = rows.filter(isSame).length;
  const shownRows = table.isOnlyDiff ? rows.filter(row => !isSame(row)) : rows;

  return (
    <div className="ta-compare">
      <TaAdvisorBar tone="light" />
      <header className="ta-compare__head">
        <div>
          <a href="#" className="ta-detail__back">
            <ToyotaIcon name="arrow-left" className="size-4" />
            {text.back}
          </a>
          <h2 className="ta-compare__title">{text.title}</h2>
          <p className="ta-compare__lead">{text.lead}</p>
        </div>
        <div className="ta-compare__tools">
          <button
            type="button"
            role="switch"
            aria-checked={table.isOnlyDiff}
            className={cn('ta-switch', table.isOnlyDiff && 'ta-switch--on')}
            onClick={table.handleToggle}
          >
            <span className="ta-switch__track" aria-hidden="true">
              <span className="ta-switch__thumb" />
            </span>
            {text.onlyDiff}
          </button>
          {table.isOnlyDiff && (
            <span className="ta-compare__hidden">
              {fillTemplate(text.hidden, { count: hiddenCount })}
            </span>
          )}
          <span className="ta-compare__legend">
            <span className="ta-compare__best-mark" aria-hidden="true" />
            {text.best}
          </span>
        </div>
      </header>

      <div
        className="ta-compare__table"
        style={{ '--cols': models.length } as CSSProperties}
      >
        <div className="ta-compare__models">
          <span />
          {recommendations.map(item => (
            <div key={item.model.id} className="ta-compare__model">
              <TaVisual
                label={fillTemplate(text.visual, { model: item.model.name })}
                className="ta-compare__visual"
              />
              <div className="ta-compare__model-head">
                <b>{item.model.name}</b>
                <button
                  type="button"
                  className="ta-compare__remove"
                  aria-label={`${text.remove} ${item.model.name}`}
                >
                  <ToyotaIcon name="close" className="size-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="ta-compare__row ta-compare__row--priorities">
          <span className="ta-compare__label">{text.priorities}</span>
          {recommendations.map(item => (
            <span key={item.model.id} className="ta-compare__cell">
              <span className="ta-meter__squares" aria-hidden="true">
                {Array.from({ length: item.prioritiesTotal }, (_, index) => (
                  <span
                    key={index}
                    className={cn(
                      'ta-meter__square',
                      index < item.prioritiesMet && 'ta-meter__square--on'
                    )}
                  />
                ))}
              </span>
              {item.prioritiesMet === 0
                ? text.none
                : `${item.prioritiesMet} / ${item.prioritiesTotal}`}
            </span>
          ))}
        </div>

        {shownRows.map(row => (
          <div key={row.key} className="ta-compare__row">
            <span className="ta-compare__label">{row.label}</span>
            {row.cells.map((cell, index) => (
              <span
                key={index}
                className={cn(
                  'ta-compare__cell',
                  cell.isBest && 'ta-compare__cell--best',
                  cell.isMissing && 'ta-compare__cell--missing'
                )}
              >
                {cell.text}
              </span>
            ))}
          </div>
        ))}

        <div className="ta-compare__row ta-compare__row--actions">
          <span />
          {recommendations.map(item => (
            <a
              key={item.model.id}
              href="#"
              className="ta-button ta-button--outline"
            >
              {text.detail}
              <ToyotaIcon
                name="arrow-right"
                className="ta-button__arrow size-4"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
