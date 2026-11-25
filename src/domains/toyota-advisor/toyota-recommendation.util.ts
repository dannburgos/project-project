import { toyotaAdvisorMessages as copy } from './messages';
import { TOYOTA_MODEL_DETAILS } from './toyota-model-details';
import { TOYOTA_QUESTION_PARTS } from './toyota-questions';
import { collectScoredTags, rankModels } from './toyota-score.util';
import type {
  ToyotaAnswers,
  ToyotaModel,
  ToyotaTag
} from './types/toyota-advisor.types';

// Una razón explicada: el dato de la ficha y la respuesta a la que responde
export type ToyotaExplainedReason = {
  text: string;
  source?: string;
};

export type ToyotaRecommendation = {
  model: ToyotaModel;
  points: number;
  prioritiesMet: number;
  prioritiesTotal: number;
  reasons: readonly ToyotaExplainedReason[];
  missing: readonly string[];
};

// Las prioridades que suman (Seguridad no cuenta: la cumplen todos)
function priorityTags(answers: ToyotaAnswers): ToyotaTag[] {
  const part = TOYOTA_QUESTION_PARTS.find(item => item.id === 'priorities');
  return (answers.priorities ?? []).flatMap(id => {
    const tag = part?.options.find(option => option.id === id)?.tag;
    return tag ? [tag] : [];
  });
}

// El resultado: 1 destacado y hasta 2 alternativas dentro del presupuesto,
// cada uno con sus razones unidas a lo que la persona pidió y lo que le falta
export function buildRecommendations(
  answers: ToyotaAnswers
): ToyotaRecommendation[] {
  const scored = collectScoredTags(answers);
  const priorities = priorityTags(answers);
  const requested = [...new Set(scored.map(item => item.tag))];

  return rankModels(answers)
    .filter(item => item.isInBudget)
    .slice(0, 3)
    .map(({ model, points }) => {
      const detail = TOYOTA_MODEL_DETAILS[model.id];
      const explained = detail.reasons.map(reason => ({
        text: reason.text,
        source: scored.find(item => reason.tags.includes(item.tag))?.source
      }));
      return {
        model,
        points,
        prioritiesMet: priorities.filter(tag => model.tags.includes(tag))
          .length,
        prioritiesTotal: priorities.length,
        reasons: [
          ...explained.filter(reason => reason.source),
          ...explained.filter(reason => !reason.source)
        ],
        missing: requested
          .filter(tag => !model.tags.includes(tag))
          .map(tag => copy.tags[tag])
      };
    });
}
