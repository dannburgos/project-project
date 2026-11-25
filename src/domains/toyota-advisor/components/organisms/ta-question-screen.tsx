'use client';

import { ToyotaIcon } from '@/components/atoms/toyota-icon';
import { cn } from '@/lib/utils';
import { useAdvisorQuestion } from '../../hooks/use-advisor-question';
import { toyotaAdvisorMessages as copy, fillTemplate } from '../../messages';
import { TOYOTA_QUESTIONS } from '../../toyota-questions';
import type { ToyotaAnswers } from '../../types/toyota-advisor.types';
import { TaOptionTile } from '../atoms/ta-option-tile';
import { TaBudgetPicker } from '../molecules/ta-budget-picker';
import { TaConfigRow } from '../molecules/ta-config-row';
import { TaScanner } from '../molecules/ta-scanner';
import { TaStepRail } from '../molecules/ta-step-rail';
import { TaAdvisorBar } from '../molecules/ta-advisor-bar';

type TaQuestionScreenProps = {
  questionId: string;
  initialAnswers: ToyotaAnswers;
};

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] as const;
const QUOTA = [0, 1, 2] as const;

// Una pregunta de la asesoría a pantalla completa (1440 × 900), en el panel
// oscuro: arriba el avance; a la izquierda la pregunta y sus respuestas (en
// tarjetas, en filas tipo configurador o sobre la regla de precios); a la
// derecha el sistema mostrando qué entiende
export function TaQuestionScreen({
  questionId,
  initialAnswers
}: TaQuestionScreenProps) {
  const question =
    TOYOTA_QUESTIONS.find(item => item.id === questionId) ??
    TOYOTA_QUESTIONS[0];
  const state = useAdvisorQuestion(question, initialAnswers);
  const advisor = copy.advisor;

  const [mainPart] = question.parts;
  const isBudget = question.block === 'budget';
  const isConfigurator = question.parts.length > 1;
  const isMultiple = mainPart.kind !== 'single';
  const selected = state.getSelected(mainPart.id);
  const isFull = state.isLimitReached(mainPart);
  const answers = mainPart.options.filter(option => !option.isUnsure);
  const unsure = mainPart.options.find(option => option.isUnsure);
  const lastLetter = isConfigurator
    ? undefined
    : LETTERS[(isBudget ? 4 : answers.length) - 1];

  return (
    <div className="ta-ask">
      <TaAdvisorBar />
      <TaStepRail blocks={state.rail.blocks} counter={state.rail.counter} />

      <div className="ta-ask__body">
        <section className="ta-ask__main">
          <p className="ta-ask__block">
            <span className="ta-ask__block-line" aria-hidden="true" />
            {advisor.blocks[question.block]}
            {question.isOptional && (
              <span className="ta-ask__optional">{advisor.optional}</span>
            )}
          </p>
          <h2 className="ta-ask__title">{question.title}</h2>
          <div className="ta-ask__help">
            {question.help && <span>{question.help}</span>}
            {mainPart.kind === 'upToThree' && (
              <span
                className={cn('ta-ask__quota', isFull && 'ta-ask__quota--full')}
              >
                <span className="ta-ask__quota-pips" aria-hidden="true">
                  {QUOTA.map(pip => (
                    <span
                      key={pip}
                      className={cn(
                        'ta-ask__pip',
                        pip < selected.length && 'ta-ask__pip--on'
                      )}
                    />
                  ))}
                </span>
                {fillTemplate(advisor.chosen, { count: selected.length })}
              </span>
            )}
          </div>

          {isBudget && (
            <TaBudgetPicker
              selectedId={selected[0]}
              letters={LETTERS}
              onSelect={optionId => state.handleToggle(mainPart, optionId)}
            />
          )}

          {isConfigurator && (
            <div className="ta-ask__config">
              {question.parts.map((part, index) => (
                <TaConfigRow
                  key={part.id}
                  part={part}
                  index={index}
                  selected={state.getSelected(part.id)}
                  onToggle={optionId => state.handleToggle(part, optionId)}
                />
              ))}
            </div>
          )}

          {!isBudget && !isConfigurator && (
            <div
              className={cn(
                'ta-ask__options',
                answers.length > 6 && 'ta-ask__options--dense',
                mainPart.kind === 'multiple' && 'ta-ask__options--tall'
              )}
              role={isMultiple ? 'group' : 'radiogroup'}
            >
              {answers.map((option, index) => {
                const isOn = selected.includes(option.id);
                return (
                  <TaOptionTile
                    key={option.id}
                    label={option.label}
                    letter={LETTERS[index]}
                    icon={option.icon}
                    isMultiple={isMultiple}
                    isSelected={isOn}
                    isDisabled={isFull && !isOn}
                    scoreHint={
                      option.tag ? `+1 ${copy.tags[option.tag]}` : undefined
                    }
                    onSelect={() => state.handleToggle(mainPart, option.id)}
                  />
                );
              })}
            </div>
          )}

          {isFull && <p className="ta-ask__limit">{advisor.limitReached}</p>}

          {unsure && !isConfigurator && (
            <button
              type="button"
              className={cn(
                'ta-ask__unsure',
                selected.includes(unsure.id) && 'ta-ask__unsure--on'
              )}
              aria-pressed={selected.includes(unsure.id)}
              onClick={() => state.handleToggle(mainPart, unsure.id)}
            >
              {unsure.label}
            </button>
          )}

          <footer className="ta-ask__actions">
            <button type="button" className="ta-button ta-button--ghost">
              <ToyotaIcon name="arrow-left" className="size-5" />
              {advisor.back}
            </button>
            <button
              type="button"
              className="ta-button ta-button--primary"
              disabled={!state.canContinue}
            >
              {question.number === TOYOTA_QUESTIONS.length
                ? advisor.toProfile
                : advisor.next}
              <ToyotaIcon
                name="arrow-right"
                className="ta-button__arrow size-5"
              />
            </button>
            <span className="ta-ask__keys">
              <kbd>
                <ToyotaIcon name="enter" className="size-3.5" />
              </kbd>
              {advisor.keyHint}
              {lastLetter && (
                <>
                  <span className="ta-ask__dot" aria-hidden="true" />
                  {fillTemplate(advisor.letterHint, {
                    first: LETTERS[0],
                    last: lastLetter
                  })}
                </>
              )}
            </span>
          </footer>
        </section>

        <TaScanner
          tags={state.scanner.tags}
          rows={state.scanner.rows}
          maxPoints={state.scanner.maxPoints}
          inPlay={state.scanner.inPlay}
          notice={state.notice}
        />
      </div>
    </div>
  );
}
