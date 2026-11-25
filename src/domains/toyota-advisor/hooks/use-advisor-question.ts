'use client';

import { useState } from 'react';

import { buildRail, buildScanner, toggleAnswer } from '../toyota-view.util';
import type {
  ToyotaAnswers,
  ToyotaQuestion,
  ToyotaQuestionPart
} from '../types/toyota-advisor.types';

const MAX_PRIORITIES = 3;

// Estado de una pantalla de pregunta: lo que la persona elige en cada parte
// y lo que el sistema entiende con eso (etiquetas que suman, ranking, avance)
export function useAdvisorQuestion(
  question: ToyotaQuestion,
  initialAnswers: ToyotaAnswers
) {
  const [answers, setAnswers] = useState<ToyotaAnswers>(initialAnswers);

  const getSelected = (partId: string) => answers[partId] ?? [];

  const isLimitReached = (part: ToyotaQuestionPart) =>
    part.kind === 'upToThree' && getSelected(part.id).length >= MAX_PRIORITIES;

  const handleToggle = (part: ToyotaQuestionPart, optionId: string) =>
    setAnswers(current => ({
      ...current,
      [part.id]: toggleAnswer(part, current[part.id] ?? [], optionId)
    }));

  // Lo elegido en esta pantalla entra como nuevo en «Lo que suma»
  const ownLabels = new Set(
    question.parts.flatMap(part =>
      part.options
        .filter(option => getSelected(part.id).includes(option.id))
        .map(option => option.label)
    )
  );
  const scanner = buildScanner(answers, ownLabels);

  const notice = question.parts
    .flatMap(part =>
      part.options.filter(option => getSelected(part.id).includes(option.id))
    )
    .find(option => option.noScoreReason)?.noScoreReason;

  const rail = buildRail(question.number);

  const canContinue = question.parts.every(
    part => part.isOptional || getSelected(part.id).length > 0
  );

  return {
    getSelected,
    isLimitReached,
    handleToggle,
    scanner,
    notice,
    rail,
    canContinue
  };
}
