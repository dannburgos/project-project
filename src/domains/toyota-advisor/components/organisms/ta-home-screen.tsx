import type { CSSProperties } from 'react';

import { ToyotaIcon } from '@/components/atoms/toyota-icon';
import { cn } from '@/lib/utils';
import { toyotaAdvisorMessages as copy } from '../../messages';
import { TOYOTA_MODELS } from '../../toyota-catalog';
import { TaVisual } from '../atoms/ta-visual';
import { TaModelCard } from '../molecules/ta-model-card';
import { TaSiteHeader } from '../molecules/ta-site-header';

const TEASER_STEPS = 4;
const MARQUEE_REPEAT = 3;

// Home de Toyota con el módulo dentro. Tres formas de entrar a la asesoría:
// el atajo del hero, el menú y la sección 01. Debajo, el catálogo de siempre
export function TaHomeScreen() {
  const { hero, marquee, module, catalog, footer } = copy.home;

  return (
    <div className="ta-home">
      <TaSiteHeader />

      <section className="ta-hero">
        <TaVisual label={hero.visual} className="ta-hero__visual" />
        <div className="ta-hero__copy">
          <p className="ta-eyebrow">
            <span className="ta-eyebrow__line" aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1 className="ta-hero__title">
            <span>{hero.titleTop}</span>
            <b>{hero.titleBottom}</b>
          </h1>
          <p className="ta-hero__lead">{hero.lead}</p>
          <div className="ta-hero__actions">
            <a href="#" className="ta-button ta-button--primary">
              {hero.primary}
              <ToyotaIcon
                name="arrow-right"
                className="ta-button__arrow size-5"
              />
            </a>
            <a href="#" className="ta-button ta-button--outline">
              {hero.secondary}
            </a>
          </div>
        </div>

        <a href="#" className="ta-hero__teaser">
          <span className="ta-hero__teaser-eyebrow">{hero.teaserEyebrow}</span>
          <span className="ta-hero__teaser-text">{hero.teaserText}</span>
          <span className="ta-hero__teaser-steps" aria-hidden="true">
            {Array.from({ length: TEASER_STEPS }, (_, index) => (
              <span key={index} style={{ '--i': index } as CSSProperties} />
            ))}
          </span>
          <span className="ta-hero__teaser-cta">
            {hero.teaserCta}
            <ToyotaIcon name="arrow-right" className="size-5" />
          </span>
        </a>
      </section>

      <div className="ta-marquee" aria-hidden="true">
        <div className="ta-marquee__track">
          {Array.from({ length: MARQUEE_REPEAT }).flatMap((_, round) =>
            marquee.map(word => (
              <span
                key={`${round}-${word}`}
                className={cn(
                  'ta-marquee__word',
                  word === copy.site.module && 'ta-marquee__word--accent'
                )}
              >
                {word}
              </span>
            ))
          )}
        </div>
      </div>

      <section className="ta-home__section">
        <p className="ta-index">
          <b>{module.index}</b>
          <span className="ta-index__line" aria-hidden="true" />
          {module.indexLabel}
        </p>

        <div className="ta-module">
          <div className="ta-module__copy">
            <p className="ta-eyebrow ta-eyebrow--red">
              <span className="ta-eyebrow__line" aria-hidden="true" />
              {module.eyebrow}
            </p>
            <h2 className="ta-module__title">
              <span>{module.titleLight}</span>
              <b>{module.titleBold}</b>
            </h2>
            <p className="ta-module__lead">{module.lead}</p>
            <ul className="ta-module__chips">
              {module.chips.map(chip => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>
            <div className="ta-module__actions">
              <a
                href="#"
                className="ta-button ta-button--primary ta-button--large"
              >
                {module.primary}
                <ToyotaIcon
                  name="arrow-right"
                  className="ta-button__arrow size-5"
                />
              </a>
              <a href="#" className="ta-button ta-button--text">
                {module.secondary}
              </a>
            </div>
            <ol className="ta-module__steps">
              {module.steps.map((step, index) => (
                <li key={step.title}>
                  <span className="ta-module__step-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <b>{step.title}</b>
                  <span>{step.text}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="ta-module__scan">
            <span className="ta-scanner__corner ta-scanner__corner--tl" />
            <span className="ta-scanner__corner ta-scanner__corner--tr" />
            <span className="ta-scanner__corner ta-scanner__corner--bl" />
            <span className="ta-scanner__corner ta-scanner__corner--br" />
            <TaVisual
              label={module.scanner}
              tone="dark"
              className="ta-module__visual"
            />
            <span className="ta-scanner__beam" aria-hidden="true" />
            <ul className="ta-module__measures">
              {module.scannerTags.map(tag => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <p className="ta-module__caption">{module.scannerCaption}</p>
          </div>
        </div>
        <p className="ta-module__note">{module.note}</p>
      </section>

      <section className="ta-home__section ta-home__section--catalog">
        <p className="ta-index">
          <b>{catalog.index}</b>
          <span className="ta-index__line" aria-hidden="true" />
          {catalog.indexLabel}
        </p>
        <div className="ta-catalog__head">
          <h2 className="ta-catalog__title">{catalog.title}</h2>
          <div className="ta-catalog__filters" role="tablist">
            {catalog.filters.map((filter, index) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={index === 0}
                className={cn(
                  'ta-catalog__filter',
                  index === 0 && 'ta-catalog__filter--on'
                )}
              >
                {filter}
              </button>
            ))}
          </div>
          <a href="#" className="ta-button ta-button--text">
            {catalog.link}
            <ToyotaIcon
              name="arrow-right"
              className="ta-button__arrow size-4"
            />
          </a>
        </div>
        <div className="ta-catalog__grid">
          {TOYOTA_MODELS.map(model => (
            <TaModelCard key={model.id} model={model} />
          ))}
        </div>
        <p className="ta-catalog__note">{catalog.priceNote}</p>
      </section>

      <footer className="ta-footer">
        <TaVisual
          label={copy.site.logo}
          tone="dark"
          className="ta-footer__logo"
        />
        <div className="ta-footer__columns">
          {footer.columns.map(column => (
            <div key={column.title}>
              <p className="ta-footer__title">{column.title}</p>
              <ul>
                {column.links.map(link => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="ta-footer__legal">{footer.legal}</p>
      </footer>
    </div>
  );
}
