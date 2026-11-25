import { TOYOTA_BUDGET_RANGES, TOYOTA_MODELS } from './toyota-catalog';
import { TOYOTA_QUESTION_PARTS } from './toyota-questions';
import type {
  ToyotaAnswers,
  ToyotaRankedModel,
  ToyotaTag
} from './types/toyota-advisor.types';

// Una etiqueta que suma, con la respuesta de la que sale
export type ToyotaScoredTag = {
  tag: ToyotaTag;
  source: string;
};

// Lógica del prototipo (parte E del caso): cada respuesta que coincide con
// una etiqueta del modelo suma un punto; el presupuesto es el único filtro;
// se ordena por puntos y, si hay empate, por menor precio

export function collectScoredTags(answers: ToyotaAnswers): ToyotaScoredTag[] {
  return TOYOTA_QUESTION_PARTS.flatMap(part =>
    (answers[part.id] ?? []).flatMap(optionId => {
      const option = part.options.find(item => item.id === optionId);
      return option?.tag ? [{ tag: option.tag, source: option.label }] : [];
    })
  );
}

export function getBudgetMax(answers: ToyotaAnswers): number | undefined {
  const rangeId = answers.budget?.[0];
  return TOYOTA_BUDGET_RANGES.find(range => range.id === rangeId)?.max;
}

export function rankModels(answers: ToyotaAnswers): ToyotaRankedModel[] {
  const scoredTags = collectScoredTags(answers);
  const budgetMax = getBudgetMax(answers);

  return TOYOTA_MODELS.map(model => ({
    model,
    points: scoredTags.filter(item => model.tags.includes(item.tag)).length,
    isInBudget: budgetMax === undefined || model.priceFrom <= budgetMax
  })).sort(
    (first, second) =>
      Number(second.isInBudget) - Number(first.isInBudget) ||
      second.points - first.points ||
      first.model.priceFrom - second.model.priceFrom
  );
}

const PRICE_FORMAT = new Intl.NumberFormat('es-CO');

export function formatPrice(value: number): string {
  return `$${PRICE_FORMAT.format(value)}`;
}

// $139.900.000 → «139,9»
export function formatMillions(value: number): string {
  return (value / 1_000_000).toLocaleString('es-CO', {
    maximumFractionDigits: 1
  });
}
