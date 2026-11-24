'use client';

import type {
  ToyotaDesignItem,
  ToyotaDesignSample
} from '@/content/toyota-story.types';
import { useMultiChoice, useSingleChoice } from '@/hooks/use-design-specimen';
import { cn } from '@/lib/utils';

type ToyotaDsEssentialProps = {
  item: ToyotaDesignItem;
  sample: ToyotaDesignSample;
};

const BUTTON_STATE_IDS = ['rest', 'hover', 'focus', 'disabled'] as const;
const BUTTON_VARIANT_IDS = ['primary', 'outline', 'text'] as const;
const CHIP_STATE_IDS = ['rest', 'selected', 'disabled'] as const;
const COMPARE_MAX = 3;
const COMPARE_MIN = 2;

// Muestras vivas de los componentes esenciales: cada uno se ve completo, con
// sus variantes y, donde se puede, para probarlo
export function ToyotaDsEssential({ item, sample }: ToyotaDsEssentialProps) {
  switch (item.id) {
    case 'button':
      return <ButtonSpecimen sample={sample.button} />;
    case 'chip':
      return <ChipSpecimen sample={sample.chip} />;
    case 'question':
      return <QuestionSpecimen sample={sample.question} />;
    case 'card':
      return <CardSpecimen cards={sample.cards} />;
    case 'reasons':
      return <ReasonsSpecimen reasons={sample.reasons} />;
    case 'compare':
      return <CompareSpecimen sample={sample.compare} />;
    case 'legal':
      return <LegalSpecimen sample={sample.legal} />;
    default:
      return null;
  }
}

// Tres tipos de botón en sus cuatro estados
function ButtonSpecimen({ sample }: { sample: ToyotaDesignSample['button'] }) {
  return (
    <div className="ty-dsx-matrix">
      <span />
      {sample.states.map(state => (
        <span key={state} className="ty-dsx-label">
          {state}
        </span>
      ))}
      {BUTTON_VARIANT_IDS.map((variant, variantIndex) => (
        <div key={variant} className="ty-dsx-matrix__row">
          <span className="ty-dsx-label">{sample.variants[variantIndex]}</span>
          {BUTTON_STATE_IDS.map(state => (
            <span
              key={state}
              className={cn(
                'ty-dsx-button',
                `ty-dsx-button--${variant}`,
                state !== 'rest' && `ty-dsx-button--${state}`
              )}
            >
              {variant === 'text' ? sample.link : sample.text}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

// Las tres condiciones de una etiqueta, la etiqueta roja y un grupo para elegir
function ChipSpecimen({ sample }: { sample: ToyotaDesignSample['chip'] }) {
  const { selected, handleSelect } = useSingleChoice(0);

  return (
    <div className="ty-dsx-chip">
      <ul className="ty-dsx-chip__states">
        {CHIP_STATE_IDS.map((state, index) => (
          <li key={state} className="ty-dsx-chip__state">
            <span
              className={cn(
                'ty-dsx-chip__item',
                state === 'selected' && 'ty-dsx-chip__item--on',
                state === 'disabled' && 'ty-dsx-chip__item--disabled'
              )}
            >
              {sample.options[index]}
            </span>
            <span className="ty-dsx-label">{sample.stateLabels[index]}</span>
          </li>
        ))}
        <li className="ty-dsx-chip__state">
          <span className="ty-dsx-tag">{sample.tag}</span>
          <span className="ty-dsx-label">{sample.tagLabel}</span>
        </li>
      </ul>
      <div className="ty-dsx-chip__group">
        <p className="ty-dsx-label">{sample.groupLabel}</p>
        <ul className="ty-dsx-chip__choices">
          {sample.options.map((option, index) => (
            <li key={option}>
              <button
                type="button"
                className={cn(
                  'ty-dsx-chip__item ty-dsx-chip__button',
                  selected === index && 'ty-dsx-chip__item--on'
                )}
                aria-pressed={selected === index}
                onClick={() => handleSelect(index)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// El panel completo de una pregunta, con su avance y sus acciones
function QuestionSpecimen({
  sample
}: {
  sample: ToyotaDesignSample['question'];
}) {
  const { selected, handleSelect } = useSingleChoice(0);

  return (
    <div className="ty-dsx-question">
      <p className="ty-dsx-question__step">{sample.step}</p>
      <h5 className="ty-dsx-question__title">{sample.title}</h5>
      <ul className="ty-dsx-chip__choices">
        {sample.options.map((option, index) => (
          <li key={option}>
            <button
              type="button"
              className={cn(
                'ty-dsx-chip__item ty-dsx-chip__button',
                selected === index && 'ty-dsx-chip__item--on'
              )}
              aria-pressed={selected === index}
              onClick={() => handleSelect(index)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      <ol className="ty-dsx-question__progress" aria-hidden="true">
        {Array.from({ length: sample.progressTotal }, (_, index) => (
          <li
            key={index}
            className={cn(
              'ty-dsx-question__square',
              index < sample.progressCurrent && 'ty-dsx-question__square--on'
            )}
          />
        ))}
      </ol>
      <div className="ty-dsx-question__actions">
        <span className="ty-dsx-button ty-dsx-button--primary">
          {sample.primary}
        </span>
        <span className="ty-dsx-button ty-dsx-button--text">
          {sample.secondary}
        </span>
      </div>
    </div>
  );
}

// Un destacado y dos alternativas, con su etiqueta de coincidencia
function CardSpecimen({ cards }: { cards: ToyotaDesignSample['cards'] }) {
  return (
    <ul className="ty-dsx-cards">
      {cards.map((card, index) => (
        <li
          key={card.model}
          className={cn('ty-dsx-card', index === 0 && 'ty-dsx-card--main')}
        >
          <span className="ty-dsx-tag">{card.tag}</span>
          <p className="ty-dsx-card__model">{card.model}</p>
          <p className="ty-dsx-card__price">{card.price}</p>
        </li>
      ))}
    </ul>
  );
}

// La lista de razones con su cuadrado rojo
function ReasonsSpecimen({ reasons }: { reasons: readonly string[] }) {
  return (
    <ul className="ty-dsx-reasons">
      {reasons.map(reason => (
        <li key={reason} className="ty-dsx-reasons__item">
          {reason}
        </li>
      ))}
    </ul>
  );
}

// Elige modelos: el botón se activa desde el segundo
function CompareSpecimen({
  sample
}: {
  sample: ToyotaDesignSample['compare'];
}) {
  const { selected, handleToggle } = useMultiChoice(COMPARE_MAX);
  const isReady = selected.length >= COMPARE_MIN;

  return (
    <div className="ty-dsx-compare">
      <ul className="ty-dsx-chip__choices">
        {sample.models.map((model, index) => (
          <li key={model}>
            <button
              type="button"
              className={cn(
                'ty-dsx-chip__item ty-dsx-chip__button',
                selected.includes(index) && 'ty-dsx-chip__item--on'
              )}
              aria-pressed={selected.includes(index)}
              onClick={() => handleToggle(index)}
            >
              {model}
            </button>
          </li>
        ))}
      </ul>
      <div className="ty-dsx-compare__bar">
        <p className="ty-dsx-compare__count">
          <b>{selected.length}</b> / {COMPARE_MAX} {sample.counterLabel}
          {!isReady && (
            <span className="ty-dsx-compare__hint">{sample.hint}</span>
          )}
        </p>
        <span
          className={cn(
            'ty-dsx-button ty-dsx-button--outline',
            !isReady && 'ty-dsx-button--disabled'
          )}
        >
          {sample.button}
        </span>
      </div>
    </div>
  );
}

// El aviso al pie, con su separación
function LegalSpecimen({ sample }: { sample: ToyotaDesignSample['legal'] }) {
  return (
    <div className="ty-dsx-legal">
      <p className="ty-dsx-legal__content">{sample.content}</p>
      <span className="ty-dsx-legal__gap" aria-hidden="true">
        32 px
      </span>
      <p className="ty-dsx-legal__text">{sample.text}</p>
    </div>
  );
}
