'use client';

import type { CSSProperties } from 'react';

import { ToyotaIcon } from '@/components/atoms/toyota-icon';
import { cn } from '@/lib/utils';
import { useHotspot } from '../../hooks/use-hotspot';
import { toyotaAdvisorMessages as copy, fillTemplate } from '../../messages';
import { TOYOTA_MODEL_DETAILS } from '../../toyota-model-details';
import type { ToyotaRecommendation } from '../../toyota-recommendation.util';
import { formatPrice } from '../../toyota-score.util';
import type { ToyotaSpecKey } from '../../types/toyota-model-details.types';
import { TaMatchMeter } from '../atoms/ta-match-meter';
import { TaVisual } from '../atoms/ta-visual';
import { TaSiteHeader } from '../molecules/ta-site-header';

type TaDetailScreenProps = {
  recommendation: ToyotaRecommendation;
  budgetMax?: number;
};

const WHY_COUNT = 4;
const SPEC_KEYS: readonly ToyotaSpecKey[] = [
  'seats',
  'engine',
  'power',
  'transmission',
  'traction',
  'length',
  'width',
  'height',
  'clearance',
  'airbags',
  'payload',
  'trunk'
];

// Detalle del vehículo: hero con versiones, por qué es para ti, un recorrido
// con puntos sobre la foto (cada uno unido a una prioridad), versiones con
// tu presupuesto marcado, la ficha técnica y la banda para seguir en Toyota
export function TaDetailScreen({
  recommendation,
  budgetMax
}: TaDetailScreenProps) {
  const text = copy.detail;
  const { model } = recommendation;
  const detail = TOYOTA_MODEL_DETAILS[model.id];
  const hotspot = useHotspot();
  const [firstVersion] = detail.versions;

  return (
    <div className="ta-detail">
      <TaSiteHeader />

      <section className="ta-detail__hero">
        <div className="ta-detail__copy">
          <a href="#" className="ta-detail__back">
            <ToyotaIcon name="arrow-left" className="size-4" />
            {text.back}
          </a>
          <p className="ta-detail__category">{text.category}</p>
          <h2 className="ta-detail__name">{model.name}</h2>
          <p className="ta-detail__price">
            <span>{text.from}</span>
            <b>{formatPrice(model.priceFrom)}</b>
            <span>{text.suggested}</span>
          </p>
          <TaMatchMeter
            met={recommendation.prioritiesMet}
            total={recommendation.prioritiesTotal}
            label={fillTemplate(text.forYou, {
              met: recommendation.prioritiesMet,
              total: recommendation.prioritiesTotal
            })}
          />
          <div className="ta-detail__versions" role="radiogroup">
            <span className="ta-detail__versions-label">
              {text.versionLabel}
            </span>
            {detail.versions.map(version => (
              <button
                key={version.name}
                type="button"
                role="radio"
                aria-checked={version === firstVersion}
                className={cn(
                  'ta-detail__version',
                  version === firstVersion && 'ta-detail__version--on'
                )}
              >
                {version.name}
                <span>{formatPrice(version.price)}</span>
              </button>
            ))}
          </div>
          <div className="ta-detail__actions">
            <a
              href="#"
              className="ta-button ta-button--primary ta-button--large"
            >
              {text.quote}
              <ToyotaIcon name="external" className="size-5" />
            </a>
            <a
              href="#"
              className="ta-button ta-button--outline ta-button--large"
            >
              {text.testDrive}
              <ToyotaIcon name="external" className="size-5" />
            </a>
          </div>
          <p className="ta-detail__external">{text.external}</p>
        </div>
        <TaVisual label={text.visual} className="ta-detail__visual" />
      </section>

      <section className="ta-detail__why">
        <h3 className="ta-detail__why-title">{text.whyTitle}</h3>
        <ol className="ta-detail__why-list">
          {recommendation.reasons.slice(0, WHY_COUNT).map((reason, index) => (
            <li key={reason.text}>
              <span className="ta-detail__why-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="ta-detail__why-fact">{reason.text}</p>
              {reason.source && (
                <p className="ta-detail__why-source">
                  {copy.result.asked}
                  <b>{reason.source}</b>
                </p>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="ta-detail__section">
        <p className="ta-index">
          <b>{text.tourIndex}</b>
          <span className="ta-index__line" aria-hidden="true" />
          {text.tourTitle}
        </p>
        <div className="ta-tour">
          <div className="ta-tour__stage">
            <TaVisual label={text.tourVisual} className="ta-tour__visual" />
            {text.hotspots.map((spot, index) => (
              <button
                key={spot.title}
                type="button"
                className={cn(
                  'ta-tour__pin',
                  hotspot.active === index && 'ta-tour__pin--on'
                )}
                style={
                  { '--x': `${spot.x}%`, '--y': `${spot.y}%` } as CSSProperties
                }
                onMouseEnter={() => hotspot.handleFocus(index)}
                onFocus={() => hotspot.handleFocus(index)}
                aria-label={spot.title}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <ol className="ta-tour__list">
            {text.hotspots.map((spot, index) => (
              <li
                key={spot.title}
                className={cn(
                  'ta-tour__item',
                  hotspot.active === index && 'ta-tour__item--on'
                )}
                onMouseEnter={() => hotspot.handleFocus(index)}
              >
                <span className="ta-tour__number">{index + 1}</span>
                <div className="ta-tour__text">
                  <b>{spot.title}</b>
                  <span>{spot.text}</span>
                  <i>{spot.tag}</i>
                </div>
                <TaVisual label={spot.visual} className="ta-tour__close" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ta-detail__section">
        <p className="ta-index">
          <b>{text.versionsIndex}</b>
          <span className="ta-index__line" aria-hidden="true" />
          {text.versionsTitle}
        </p>
        <table className="ta-versions">
          <thead>
            <tr>
              {text.columns.map(column => (
                <th key={column} scope="col">
                  {column}
                </th>
              ))}
              <th scope="col" aria-hidden="true" />
            </tr>
          </thead>
          <tbody>
            {detail.versions.map(version => {
              const isIn =
                budgetMax === undefined || version.price <= budgetMax;
              return (
                <tr
                  key={version.name}
                  className={cn(isIn && 'ta-versions__row--in')}
                >
                  <th scope="row">{version.name}</th>
                  <td>{version.drivetrain}</td>
                  <td className="ta-versions__price">
                    {formatPrice(version.price)}
                  </td>
                  <td>
                    <span
                      className={cn(
                        'ta-versions__badge',
                        isIn && 'ta-versions__badge--in'
                      )}
                    >
                      {isIn ? text.inBudget : text.overBudget}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <section className="ta-detail__section">
        <p className="ta-index">
          <b>{text.specsIndex}</b>
          <span className="ta-index__line" aria-hidden="true" />
          {text.specsTitle}
        </p>
        <dl className="ta-specs">
          {SPEC_KEYS.map(key => {
            const spec = detail.specs[key];
            return (
              <div
                key={key}
                className={cn(
                  'ta-specs__item',
                  !spec.text && 'ta-specs__item--missing'
                )}
              >
                <dt>{copy.specs[key]}</dt>
                <dd>
                  {spec.text ?? text.missing}
                  {spec.isPending && <sup>*</sup>}
                </dd>
              </div>
            );
          })}
        </dl>
      </section>

      <figure className="ta-detail__context">
        <TaVisual label={text.context} className="ta-detail__context-visual" />
        <figcaption>{text.contextCaption}</figcaption>
      </figure>

      <section className="ta-band">
        <div>
          <h3 className="ta-band__title">{text.bandTitle}</h3>
          <p className="ta-band__text">{text.bandText}</p>
        </div>
        <div className="ta-band__actions">
          <a href="#" className="ta-button ta-button--primary ta-button--large">
            {text.testDrive}
            <ToyotaIcon name="external" className="size-5" />
          </a>
          <a href="#" className="ta-button ta-button--ghost ta-button--large">
            {text.quote}
            <ToyotaIcon name="external" className="size-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
