import { toyotaAdvisorMessages as copy, fillTemplate } from './messages';
import { TOYOTA_QUESTIONS } from './toyota-questions';
import { collectScoredTags, rankModels } from './toyota-score.util';
import type {
  ToyotaAnswers,
  ToyotaQuestionPart
} from './types/toyota-advisor.types';

// Las barras del ranking siempre tienen al menos este largo
const MIN_BAR_POINTS = 6;

// Avance de la asesoría: un bloque por pregunta. Sin pregunta actual (perfil),
// todo está hecho
export function buildRail(currentNumber?: number) {
  const blocks = TOYOTA_QUESTIONS.map(question => ({
    id: question.id,
    index: String(question.number).padStart(2, '0'),
    label: copy.advisor.blocks[question.block],
    ticks: [
      currentNumber === undefined || question.number < currentNumber
        ? ('done' as const)
        : question.number === currentNumber
          ? ('current' as const)
          : ('next' as const)
    ]
  }));
  const counter =
    currentNumber === undefined
      ? copy.advisor.counterDone
      : fillTemplate(copy.advisor.counter, {
          current: currentNumber,
          total: TOYOTA_QUESTIONS.length
        });
  return { blocks, counter };
}

// Lo que el sistema entiende de las respuestas: qué suma (y de qué respuesta
// sale; lo de esta pantalla entra como nuevo) y el ranking de los 6 modelos
export function buildScanner(
  answers: ToyotaAnswers,
  ownLabels: ReadonlySet<string> = new Set()
) {
  const tags = collectScoredTags(answers).map((item, index) => ({
    key: `${item.tag}-${index}`,
    label: copy.tags[item.tag],
    source: item.source,
    isNew: ownLabels.has(item.source)
  }));
  const ranked = rankModels(answers);
  const maxPoints = Math.max(
    MIN_BAR_POINTS,
    ...ranked.map(item => item.points)
  );
  const rows = ranked.map((item, index) => ({
    id: item.model.id,
    name: item.model.name,
    points: item.points,
    isInBudget: item.isInBudget,
    isLeader: index === 0 && item.points > 0 && item.isInBudget
  }));
  const inPlay = ranked.filter(item => item.isInBudget).length;
  return { tags, rows, maxPoints, inPlay, ranked };
}

// Elegir o quitar una respuesta según el tipo de parte: en las de una sola
// respuesta reemplaza; en las de varias suma o quita; «Aún no lo sé» limpia
export function toggleAnswer(
  part: ToyotaQuestionPart,
  previous: readonly string[],
  optionId: string
): readonly string[] {
  const option = part.options.find(item => item.id === optionId);
  const isOn = previous.includes(optionId);
  if (part.kind === 'single' || option?.isUnsure) {
    return isOn ? [] : [optionId];
  }
  const withoutUnsure = previous.filter(
    id => !part.options.find(item => item.id === id)?.isUnsure
  );
  return isOn
    ? withoutUnsure.filter(id => id !== optionId)
    : [...withoutUnsure, optionId];
}

// «a, b y c»
export function joinList(items: readonly string[]): string {
  if (items.length <= 1) return items.join('');
  return `${items.slice(0, -1).join(', ')}${copy.profile.reading.and}${items.at(-1)}`;
}

// «Camioneta o SUV» → «camioneta o SUV» (las siglas se quedan igual)
export function lowerFirst(text: string): string {
  return text.charAt(0).toLowerCase() + text.slice(1);
}
