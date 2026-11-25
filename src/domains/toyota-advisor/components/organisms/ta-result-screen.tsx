'use client';

import { ToyotaIcon } from '@/components/atoms/toyota-icon';
import { cn } from '@/lib/utils';
import { useCompareSelection } from '../../hooks/use-compare-selection';
import { toyotaAdvisorMessages as copy, fillTemplate } from '../../messages';
import { TOYOTA_QUESTION_PARTS } from '../../toyota-questions';
import type { ToyotaRecommendation } from '../../toyota-recommendation.util';
import { formatPrice } from '../../toyota-score.util';
import type {
  ToyotaAnswers,
  ToyotaModelId
} from '../../types/toyota-advisor.types';
import { TaCompareCheck } from '../atoms/ta-compare-check';
import { TaMatchMeter } from '../atoms/ta-match-meter';
import { TaVisual } from '../atoms/ta-visual';
import { TaAdvisorBar } from '../molecules/ta-advisor-bar';

type TaResultScreenProps = {
  answers: ToyotaAnswers;
  recommendations: readonly ToyotaRecommendation[];
};

const FEATURED_REASONS = 4;

// Resultado: tu perfil a la vista, un destacado grande con sus razones
// unidas a lo que pediste, dos alternativas con lo que les falta y la barra
// de comparar fija abajo
export function TaResultScreen({
  answers,
  recommendations
}: TaResultScreenProps) {
  const text = copy.result;
  const [featured, ...alternatives] = recommendations;
  const compare = useCompareSelection(
    [featured.model.id, alternatives[0]?.model.id].filter(
      (id): id is ToyotaModelId => Boolean(id)
    )
  );

  const profileChips = TOYOTA_QUESTION_PARTS.flatMap(part =>
    part.options
      .filter(
        option =>
          (answers[part.id] ?? []).includes(option.id) && !option.isUnsure
      )
      .map(option => option.label)
  );
  const nameOf = (id: ToyotaModelId) =>
    recommendations.find(item => item.model.id === id)?.model.name ?? '';

  return (
    <div className="ta-result">
      <TaAdvisorBar tone="light" />

      <header className="ta-result__head">
        <div>
          <p className="ta-eyebrow ta-eyebrow--red">
            <span className="ta-eyebrow__line" aria-hidden="true" />
            {text.eyebrow}
          </p>
          <h2 className="ta-result__title">{text.title}</h2>
        </div>
        <a href="#" className="ta-button ta-button--outline">
          {text.adjust}
        </a>
      </header>
      <div className="ta-result__profile">
        <span className="ta-result__profile-label">{text.profileLabel}</span>
        {profileChips.map(chip => (
          <span key={chip} className="ta-result__chip">
            {chip}
          </span>
        ))}
      </div>

      <article className="ta-featured">
        <div className="ta-featured__stage">
          <span className="ta-featured__tag">{text.featuredTag}</span>
          <TaVisual
            label={fillTemplate(text.visual, { model: featured.model.name })}
            className="ta-featured__visual"
          />
          <TaMatchMeter
            met={featured.prioritiesMet}
            total={featured.prioritiesTotal}
            label={fillTemplate(text.match, {
              met: featured.prioritiesMet,
              total: featured.prioritiesTotal
            })}
          />
        </div>
        <div className="ta-featured__info">
          <p className="ta-featured__body">
            {featured.model.category} · {featured.model.body}
          </p>
          <h3 className="ta-featured__name">{featured.model.name}</h3>
          <p className="ta-featured__price">
            <span>{text.from}</span>
            <b>{formatPrice(featured.model.priceFrom)}</b>
            <span>{text.suggested}</span>
          </p>

          <p className="ta-featured__reasons-title">{text.reasonsTitle}</p>
          <ol className="ta-reasons">
            {featured.reasons.slice(0, FEATURED_REASONS).map(reason => (
              <li key={reason.text} className="ta-reasons__item">
                {reason.source ? (
                  <span className="ta-reasons__asked">
                    {text.asked}
                    <b>{reason.source}</b>
                  </span>
                ) : (
                  <span className="ta-reasons__asked">{text.also}</span>
                )}
                <ToyotaIcon
                  name="arrow-right"
                  className="ta-reasons__arrow size-4"
                />
                <span className="ta-reasons__fact">{reason.text}</span>
              </li>
            ))}
          </ol>

          <div className="ta-featured__actions">
            <a href="#" className="ta-button ta-button--primary">
              {text.detail}
              <ToyotaIcon
                name="arrow-right"
                className="ta-button__arrow size-5"
              />
            </a>
            <TaCompareCheck
              label={text.compare}
              isOn={compare.selected.includes(featured.model.id)}
              isDisabled={
                compare.isFull && !compare.selected.includes(featured.model.id)
              }
              onToggle={() => compare.handleToggle(featured.model.id)}
            />
          </div>
        </div>
      </article>

      <section className="ta-alts">
        <h3 className="ta-alts__title">{text.alternatives}</h3>
        <div className="ta-alts__grid">
          {alternatives.map(item => {
            const isOn = compare.selected.includes(item.model.id);
            return (
              <article key={item.model.id} className="ta-alt">
                <TaVisual
                  label={fillTemplate(text.smallVisual, {
                    model: item.model.name
                  })}
                  className="ta-alt__visual"
                />
                <div className="ta-alt__info">
                  <p className="ta-featured__body">
                    {item.model.category} · {item.model.body}
                  </p>
                  <h4 className="ta-alt__name">{item.model.name}</h4>
                  <p className="ta-alt__price">
                    {text.from} <b>{formatPrice(item.model.priceFrom)}</b>
                  </p>
                  <TaMatchMeter
                    met={item.prioritiesMet}
                    total={item.prioritiesTotal}
                    label={fillTemplate(text.match, {
                      met: item.prioritiesMet,
                      total: item.prioritiesTotal
                    })}
                    isCompact
                  />
                  {item.missing.length > 0 && (
                    <p className="ta-alt__missing">
                      <ToyotaIcon name="close" className="size-3.5" />
                      {text.missing}
                      <b>{item.missing.join(' · ')}</b>
                    </p>
                  )}
                  {item.reasons[0]?.source && (
                    <p className="ta-alt__reason">
                      <ToyotaIcon name="check" className="size-3.5" />
                      {item.reasons[0].text}
                    </p>
                  )}
                  <div className="ta-alt__actions">
                    <a href="#" className="ta-button ta-button--text">
                      {text.detail}
                      <ToyotaIcon
                        name="arrow-right"
                        className="ta-button__arrow size-4"
                      />
                    </a>
                    <TaCompareCheck
                      label={text.compare}
                      isOn={isOn}
                      isDisabled={compare.isFull && !isOn}
                      onToggle={() => compare.handleToggle(item.model.id)}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <p className="ta-result__legal">{text.legal}</p>
      </section>

      <div className="ta-compare-bar">
        <p className="ta-compare-bar__label">
          {text.bar.selected}
          <b>
            {fillTemplate(text.bar.count, { count: compare.selected.length })}
          </b>
        </p>
        <ul className="ta-compare-bar__slots">
          {Array.from({ length: compare.max }, (_, index) => {
            const id = compare.selected[index];
            return (
              <li
                key={id ?? `empty-${index}`}
                className={cn(
                  'ta-compare-bar__slot',
                  !id && 'ta-compare-bar__slot--empty'
                )}
              >
                {id ? (
                  <>
                    {nameOf(id)}
                    <button
                      type="button"
                      aria-label={fillTemplate(text.bar.remove, {
                        model: nameOf(id)
                      })}
                      onClick={() => compare.handleToggle(id)}
                    >
                      <ToyotaIcon name="close" className="size-3.5" />
                    </button>
                  </>
                ) : (
                  <>
                    <ToyotaIcon name="plus" className="size-3.5" />
                    {text.bar.add}
                  </>
                )}
              </li>
            );
          })}
        </ul>
        {!compare.isReady && (
          <span className="ta-compare-bar__hint">{text.bar.hint}</span>
        )}
        <button
          type="button"
          className="ta-button ta-button--primary"
          disabled={!compare.isReady}
        >
          {text.bar.cta}
          <ToyotaIcon name="arrow-right" className="ta-button__arrow size-5" />
        </button>
      </div>
    </div>
  );
}
