import { toyotaAdvisorMessages as copy } from '../../messages';
import { TOYOTA_SAMPLE_ANSWERS } from '../../toyota-questions';
import { buildRecommendations } from '../../toyota-recommendation.util';
import { getBudgetMax } from '../../toyota-score.util';
import type { ToyotaAnswers } from '../../types/toyota-advisor.types';
import { TaBoardFrame } from '../molecules/ta-board-frame';
import { TaAnalysisScreen } from './ta-analysis-screen';
import { TaClosestScreen } from './ta-closest-screen';
import { TaCompareScreen } from './ta-compare-screen';
import { TaDetailScreen } from './ta-detail-screen';
import { TaNearScreen } from './ta-near-screen';
import { TaResultScreen } from './ta-result-screen';
import { TaHomeScreen } from './ta-home-screen';
import { TaProfileScreen } from './ta-profile-screen';
import { TaQuestionScreen } from './ta-question-screen';

const SCREEN_HEIGHT = 900;
const SAMPLE: ToyotaAnswers = TOYOTA_SAMPLE_ANSWERS;

// Respuestas de la persona de ejemplo hasta cierta parte (incluida)
function answersUpTo(partIds: readonly string[]): ToyotaAnswers {
  return Object.fromEntries(partIds.map(id => [id, SAMPLE[id] ?? []]));
}

const USE = ['use'];
const CAR = [...USE, 'people', 'body', 'engine'];
const PRIORITIES = [...CAR, 'priorities'];
const BUDGET = [...PRIORITIES, 'budget'];

// Cada pantalla de la asesoría, con sus respuestas de ejemplo
const QUESTION_FRAMES = [
  { key: 'use', step: '02', answers: answersUpTo(USE) },
  { key: 'car', step: '03', answers: answersUpTo(CAR) },
  {
    key: 'priorities',
    step: '04',
    answers: {
      ...answersUpTo(PRIORITIES),
      priorities: ['space', 'saving', 'safety']
    }
  },
  { key: 'budget', step: '05', answers: answersUpTo(BUDGET) }
] as const;

// Tablero de las pantallas de «Encuentra tu Toyota», a tamaño real y una
// debajo de otra
export function TaBoard() {
  const frames = copy.board.frames;
  const recommendations = buildRecommendations(SAMPLE);

  return (
    <main className="ta-board">
      <header className="ta-board__head">
        <span className="ta-board__eyebrow">{copy.board.eyebrow}</span>
        <h1 className="ta-board__title">{copy.board.title}</h1>
        <p className="ta-board__hint">{copy.board.hint}</p>
      </header>
      <ol className="ta-board__frames">
        <TaBoardFrame
          step="01"
          title={frames.home.title}
          note={frames.home.note}
        >
          <TaHomeScreen />
        </TaBoardFrame>

        {QUESTION_FRAMES.map(frame => (
          <TaBoardFrame
            key={frame.key}
            step={frame.step}
            title={frames[frame.key].title}
            note={frames[frame.key].note}
            height={SCREEN_HEIGHT}
          >
            <TaQuestionScreen
              questionId={frame.key}
              initialAnswers={frame.answers}
            />
          </TaBoardFrame>
        ))}

        <TaBoardFrame
          step="06"
          title={frames.profile.title}
          note={frames.profile.note}
          height={SCREEN_HEIGHT}
        >
          <TaProfileScreen answers={SAMPLE} />
        </TaBoardFrame>
        <TaBoardFrame
          step="07"
          title={frames.edit.title}
          note={frames.edit.note}
          height={SCREEN_HEIGHT}
        >
          <TaProfileScreen answers={SAMPLE} editingPartId="priorities" />
        </TaBoardFrame>
        <TaBoardFrame
          step="08"
          title={frames.analysis.title}
          note={frames.analysis.note}
          height={SCREEN_HEIGHT}
        >
          <TaAnalysisScreen answers={SAMPLE} />
        </TaBoardFrame>
        <TaBoardFrame
          step="09"
          title={frames.result.title}
          note={frames.result.note}
        >
          <TaResultScreen answers={SAMPLE} recommendations={recommendations} />
        </TaBoardFrame>
        <TaBoardFrame
          step="10"
          title={frames.near.title}
          note={frames.near.note}
          height={SCREEN_HEIGHT}
        >
          <TaNearScreen />
        </TaBoardFrame>
        <TaBoardFrame
          step="11"
          title={frames.closest.title}
          note={frames.closest.note}
          height={SCREEN_HEIGHT}
        >
          <TaClosestScreen />
        </TaBoardFrame>
        <TaBoardFrame
          step="12"
          title={frames.detail.title}
          note={frames.detail.note}
        >
          <TaDetailScreen
            recommendation={recommendations[0]}
            budgetMax={getBudgetMax(SAMPLE)}
          />
        </TaBoardFrame>
        <TaBoardFrame
          step="13"
          title={frames.compare.title}
          note={frames.compare.note}
        >
          <TaCompareScreen recommendations={recommendations} />
        </TaBoardFrame>
      </ol>
    </main>
  );
}
