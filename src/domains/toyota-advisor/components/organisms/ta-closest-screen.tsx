import type { CSSProperties } from 'react';

import { ToyotaIcon } from '@/components/atoms/toyota-icon';
import { toyotaAdvisorMessages as copy, fillTemplate } from '../../messages';
import { TOYOTA_BUDGET_RANGES, TOYOTA_MODELS } from '../../toyota-catalog';
import { formatMillions, formatPrice } from '../../toyota-score.util';
import { TaVisual } from '../atoms/ta-visual';
import { TaAdvisorBar } from '../molecules/ta-advisor-bar';

// Escala de la barra de presupuesto de esta variante (en pesos)
const SCALE = { min: 140_000_000, max: 260_000_000 };
const RANGE_ID = 'from150to220';

function toPercent(value: number) {
  return ((value - SCALE.min) / (SCALE.max - SCALE.min)) * 100;
}

// Variante «La opción más cercana»: la alternativa se pasa del presupuesto.
// La barra muestra tu rango, dónde cae el precio y el exceso en rojo; al
// lado, qué cambia y qué se gana
export function TaClosestScreen() {
  const text = copy.closest;
  const model = TOYOTA_MODELS.find(item => item.id === 'fortuner');
  const range = TOYOTA_BUDGET_RANGES.find(item => item.id === RANGE_ID);
  const price = model?.priceFrom ?? 0;
  const budgetMin = range?.min ?? 0;
  const budgetMax = range?.max ?? 0;

  const layout = {
    '--range-start': `${toPercent(budgetMin)}%`,
    '--range-end': `${toPercent(budgetMax)}%`,
    '--price': `${toPercent(price)}%`
  } as CSSProperties;

  return (
    <div className="ta-variant">
      <TaAdvisorBar tone="light" />
      <header className="ta-variant__head">
        <p className="ta-eyebrow ta-eyebrow--red">
          <span className="ta-eyebrow__line" aria-hidden="true" />
          {text.eyebrow}
        </p>
        <h2 className="ta-variant__title">{text.title}</h2>
        <p className="ta-variant__asked">
          <span>{text.asked}</span>
          {text.requests.map(request => (
            <b key={request}>{request}</b>
          ))}
        </p>
      </header>

      <div className="ta-closest">
        <TaVisual label={text.visual} className="ta-closest__visual" />

        <div className="ta-closest__info">
          <h3 className="ta-closest__name">
            {text.model}
            <span>{text.version}</span>
          </h3>
          <p className="ta-closest__price">{formatPrice(price)}</p>
          <p className="ta-closest__why">{text.why}</p>

          <div className="ta-gauge" style={layout}>
            <div className="ta-gauge__track">
              <span className="ta-gauge__range" />
              <span className="ta-gauge__over" />
              <span className="ta-gauge__pin" />
            </div>
            <div className="ta-gauge__labels">
              <span className="ta-gauge__range-label">
                {text.budgetLabel}
                <b>
                  {fillTemplate(text.rangeValue, {
                    min: formatMillions(budgetMin),
                    max: formatMillions(budgetMax)
                  })}
                </b>
              </span>
              <span className="ta-gauge__price-label">
                {text.priceLabel}
                <b>
                  {fillTemplate(text.priceValue, {
                    value: formatMillions(price)
                  })}
                </b>
              </span>
            </div>
            <span className="ta-gauge__over-label">{text.over}</span>
          </div>

          <div className="ta-closest__lists">
            <div>
              <p className="ta-near__list-title">{text.changeTitle}</p>
              <ul className="ta-near__list ta-near__list--differs">
                <li>
                  <ToyotaIcon name="close" className="size-4" />
                  {text.change}
                </li>
              </ul>
            </div>
            <div>
              <p className="ta-near__list-title">{text.gainTitle}</p>
              <ul className="ta-near__list">
                {text.gains.map(gain => (
                  <li key={gain}>
                    <ToyotaIcon name="check" className="size-4" />
                    {gain}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="ta-closest__actions">
            <a href="#" className="ta-button ta-button--primary">
              {text.detail}
              <ToyotaIcon
                name="arrow-right"
                className="ta-button__arrow size-5"
              />
            </a>
            <a href="#" className="ta-button ta-button--outline">
              {text.adjust}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
