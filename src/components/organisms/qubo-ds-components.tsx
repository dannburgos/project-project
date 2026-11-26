import type { CSSProperties } from 'react';

import { QuboIcon } from '@/components/atoms/qubo-icon';
import type { QuboSystemComponents } from '@/content/qubo-story.types';
import { cn } from '@/lib/utils';

type QuboDsComponentsProps = {
  components: QuboSystemComponents;
};

// Componentes de la app en modo oscuro: botones, campos, tarjetas,
// navegación, avisos y estados de pantalla
export function QuboDsComponents({ components }: QuboDsComponentsProps) {
  const { buttons, fields, cards, navigation, feedback, screens } = components;
  const steps = Array.from(
    { length: navigation.stepCount },
    (_, index) => index + 1
  );

  return (
    <div className="qb-ds">
      <section className="qb-ds__sheet" data-qb-reveal>
        <h4 className="qb-ds__title">{buttons.title}</h4>
        <div className="qb-ds-matrix">
          <span className="qb-ds-matrix__corner" aria-hidden="true" />
          {buttons.states.map(state => (
            <span key={state.id} className="qb-ds-matrix__head">
              {state.name}
            </span>
          ))}
          {buttons.variants.map(variant => (
            <div key={variant.id} className="qb-ds-matrix__row">
              <span className="qb-ds-matrix__head qb-ds-matrix__variant">
                {variant.name}
              </span>
              {buttons.states.map(state => (
                <span
                  key={state.id}
                  className={cn(
                    'qb-ds-button',
                    variant.id === 'primary' && 'qb-ds-button--primary',
                    variant.id === 'secondary' && 'qb-ds-button--secondary',
                    variant.id === 'ghost' && 'qb-ds-button--ghost',
                    state.id === 'pressed' && 'qb-ds-button--pressed',
                    state.id === 'disabled' && 'qb-ds-button--disabled',
                    state.id === 'loading' && 'qb-ds-button--loading'
                  )}
                >
                  {state.id === 'loading' ? (
                    <span
                      className="qb-ds-button__spinner"
                      aria-hidden="true"
                    />
                  ) : (
                    buttons.label
                  )}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="qb-ds__sheet" data-qb-reveal>
        <h4 className="qb-ds__title">{fields.title}</h4>
        <ul className="qb-ds-fields">
          {fields.samples.map(sample => (
            <li key={sample.state} className="qb-ds-field">
              <span className="qb-ds-field__caption">{sample.caption}</span>
              <span className="qb-ds-field__label">{fields.label}</span>
              <span
                className={cn(
                  'qb-ds-field__box',
                  sample.state === 'focus' && 'qb-ds-field__box--focus',
                  sample.state === 'error' && 'qb-ds-field__box--error',
                  !sample.value && 'qb-ds-field__box--empty'
                )}
              >
                {sample.value || fields.placeholder}
              </span>
              <span
                className={cn(
                  'qb-ds-field__message',
                  sample.state === 'error' && 'qb-ds-field__message--error'
                )}
              >
                {sample.message}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="qb-ds__sheet qb-ds__sheet--tall" data-qb-reveal>
        <h4 className="qb-ds__title">{cards.title}</h4>
        <div className="qb-ds-cards">
          <div className="qb-ds-card">
            <p className="qb-ds-card__label">{cards.pulse.label}</p>
            <p className="qb-ds-card__amount">{cards.pulse.amount}</p>
            <div
              className="qb-ds-card__bar"
              style={
                { '--progress': `${cards.pulse.progress}%` } as CSSProperties
              }
              aria-hidden="true"
            />
            <p className="qb-ds-card__note">{cards.pulse.note}</p>
          </div>
          <div className="qb-ds-card">
            <span className="qb-ds-tag">{cards.offer.tag}</span>
            <dl className="qb-ds-card__rows">
              {cards.offer.rows.map(row => (
                <div key={row.label} className="qb-ds-card__row">
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
            <p className="qb-ds-card__note">{cards.offer.note}</p>
          </div>
          <div className="qb-ds-card qb-ds-card--row">
            <QuboIcon id="qr" className="qb-ds-card__icon" />
            <span className="qb-ds-card__text">
              <span>{cards.sale.title}</span>
              <span className="qb-ds__muted">{cards.sale.date}</span>
            </span>
            <span className="qb-ds-card__side">
              <span className="qb-ds-card__plus">{cards.sale.amount}</span>
              <span className="qb-ds-tag">{cards.sale.tag}</span>
            </span>
          </div>
        </div>
      </section>

      <section className="qb-ds__sheet" data-qb-reveal>
        <h4 className="qb-ds__title">{navigation.title}</h4>
        <div className="qb-ds-nav">
          <div className="qb-ds-nav__header">
            <span className="qb-ds-nav__back">‹ {navigation.back}</span>
            <span className="qb-ds-nav__title">{navigation.header}</span>
          </div>
          <div className="qb-ds-nav__steps">
            <span className="qb-ds__muted">{navigation.step}</span>
            <span className="qb-ds-nav__track" aria-hidden="true">
              {steps.map(step => (
                <span
                  key={step}
                  className={cn(
                    'qb-ds-nav__step',
                    step <= navigation.currentStep && 'qb-ds-nav__step--done'
                  )}
                />
              ))}
            </span>
          </div>
          <div className="qb-ds-nav__tabs">
            {navigation.tabs.map((tab, index) => (
              <span
                key={tab.id}
                className={cn(
                  'qb-ds-nav__tab',
                  index === 0 && 'qb-ds-nav__tab--active'
                )}
              >
                <QuboIcon id={tab.id} className="qb-ds-nav__icon" />
                {tab.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="qb-ds__sheet" data-qb-reveal>
        <h4 className="qb-ds__title">{feedback.title}</h4>
        <ul className="qb-ds-feedback">
          <li className="qb-ds-feedback__item">
            <span className="qb-ds-field__caption">
              {feedback.toast.caption}
            </span>
            <span className="qb-ds-toast">{feedback.toast.text}</span>
          </li>
          <li className="qb-ds-feedback__item">
            <span className="qb-ds-field__caption">
              {feedback.banner.caption}
            </span>
            <span className="qb-ds-banner">
              <span>{feedback.banner.text}</span>
              <span className="qb-ds-banner__action">
                {feedback.banner.action}
              </span>
            </span>
          </li>
          <li className="qb-ds-feedback__item">
            <span className="qb-ds-field__caption">
              {feedback.modal.caption}
            </span>
            <span className="qb-ds-dialog">
              <span className="qb-ds-dialog__title">
                {feedback.modal.title}
              </span>
              <span className="qb-ds__muted">{feedback.modal.text}</span>
              <span className="qb-ds-dialog__actions">
                <span className="qb-ds-mini qb-ds-mini--ghost">
                  {feedback.modal.dismiss}
                </span>
                <span className="qb-ds-mini">{feedback.modal.confirm}</span>
              </span>
            </span>
          </li>
          <li className="qb-ds-feedback__item">
            <span className="qb-ds-field__caption">
              {feedback.sheet.caption}
            </span>
            <span className="qb-ds-dialog qb-ds-dialog--sheet">
              <span className="qb-ds-dialog__grip" aria-hidden="true" />
              <span className="qb-ds-dialog__title">
                {feedback.sheet.title}
              </span>
              <span className="qb-ds__muted">{feedback.sheet.text}</span>
              <span className="qb-ds-mini qb-ds-mini--wide">
                {feedback.sheet.action}
              </span>
            </span>
          </li>
        </ul>
      </section>

      <section className="qb-ds__sheet qb-ds__sheet--full" data-qb-reveal>
        <h4 className="qb-ds__title">{screens.title}</h4>
        <ul className="qb-ds-screens">
          {screens.states.map((screen, index) => (
            <li key={screen.caption} className="qb-ds-screens__item">
              <span className="qb-ds-field__caption">{screen.caption}</span>
              <span className="qb-ds-screen">
                <span
                  className={cn(
                    'qb-ds-screen__mark',
                    index === 1 && 'qb-ds-screen__mark--loading',
                    index === 2 && 'qb-ds-screen__mark--error'
                  )}
                  aria-hidden="true"
                />
                <span className="qb-ds-dialog__title">{screen.title}</span>
                <span className="qb-ds__muted">{screen.text}</span>
                {screen.action ? (
                  <span className="qb-ds-mini">{screen.action}</span>
                ) : null}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
