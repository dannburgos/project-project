'use client';

import type {
  ToyotaDesignItem,
  ToyotaDesignSample
} from '@/content/toyota-story.types';
import { useSingleChoice } from '@/hooks/use-design-specimen';
import { cn } from '@/lib/utils';

type ToyotaDsEssentialProps = {
  item: ToyotaDesignItem;
  sample: ToyotaDesignSample;
};

const BUTTON_STATE_IDS = ['rest', 'hover', 'focus', 'disabled'] as const;
const BUTTON_VARIANT_IDS = ['primary', 'outline', 'text'] as const;
const CHIP_STATE_IDS = ['rest', 'selected', 'disabled'] as const;

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

// El panel de una pregunta: su paso, la pregunta y el avance. Las opciones y
// los botones son los de las hojas «Etiqueta y opción» y «Botón»
function QuestionSpecimen({
  sample
}: {
  sample: ToyotaDesignSample['question'];
}) {
  return (
    <div className="ty-dsx-question-sheet">
      <div className="ty-dsx-question">
        <p className="ty-dsx-question__step">{sample.step}</p>
        <h5 className="ty-dsx-question__title">{sample.title}</h5>
        <QuestionProgress
          total={sample.progressTotal}
          current={sample.progressCurrent}
        />
      </div>
      <div className="ty-dsx-question__states">
        <p className="ty-dsx-label">{sample.statesLabel}</p>
        <ul className="ty-dsx-question__list">
          {sample.states.map(state => (
            <li key={state.label} className="ty-dsx-question__state">
              <QuestionProgress
                total={sample.progressTotal}
                current={state.current}
              />
              <span className="ty-dsx-question__caption">{state.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Un cuadrado por pregunta: en rojo los que ya van
function QuestionProgress({
  total,
  current
}: {
  total: number;
  current: number;
}) {
  return (
    <ol className="ty-dsx-question__progress" aria-hidden="true">
      {Array.from({ length: total }, (_, index) => (
        <li
          key={index}
          className={cn(
            'ty-dsx-question__square',
            index < current && 'ty-dsx-question__square--on'
          )}
        />
      ))}
    </ol>
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
