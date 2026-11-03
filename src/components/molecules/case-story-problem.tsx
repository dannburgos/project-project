import { CaseStoryImage } from '@/components/atoms/case-story-image';
import { CaseStoryOpener } from '@/components/atoms/case-story-opener';
import type { CaseStory } from '@/content/case-story.types';

type CaseStoryProblemProps = {
  problem: CaseStory['problem'];
  sectionName: string;
};

// 02 · Problema en tres vistas: la frase con la brecha (centradas), las tres
// fricciones que llegan rodando (con el chat de Laura al lado) y el reto con
// los referentes
export function CaseStoryProblem({
  problem,
  sectionName
}: CaseStoryProblemProps) {
  return (
    <>
      <div
        className="story-view story-view--cover story-view--centered"
        data-view="problem"
        data-section="1"
      >
        <CaseStoryOpener number="02" name={sectionName} />
        <h2 className="story-title-xl story-stripes" data-reveal>
          {problem.headline}
        </h2>
        <div className="story-gap">
          <div className="story-gap__side" data-part="gap-side">
            <p className="story-label">{problem.known.label}</p>
            <p className="story-title-md">{problem.known.text}</p>
          </div>
          <span className="story-gap__line" data-part="gap-line" />
          <div
            className="story-gap__side story-gap__side--done"
            data-part="gap-side"
          >
            <p className="story-label">{problem.done.label}</p>
            <p className="story-title-md">{problem.done.text}</p>
          </div>
        </div>
      </div>

      <div
        className="story-view story-frictions"
        data-view="frictions"
        data-section="1"
      >
        <p className="story-label story-frictions__label" data-fade>
          {problem.frictionsLabel}
        </p>
        <div className="story-frictions__track">
          {/* El camino: una línea que pasa por las tres fricciones y sigue */}
          <span className="story-frictions__path" data-part="path" />
          <div className="story-columns story-frictions__columns">
            {problem.frictions.map(friction => (
              <div
                key={friction.number}
                className="story-column story-frictions__step"
                data-part="column"
              >
                <i className="story-frictions__node" data-part="node" />
                <p className="story-number" data-part="step-part">
                  {friction.number}
                </p>
                <div className="story-frictions__body">
                  <p className="story-title-lg" data-part="step-part">
                    {friction.title}
                  </p>
                  <p
                    className="story-frictions__question"
                    data-part="step-part"
                  >
                    {friction.question}
                  </p>
                  <p className="story-body" data-part="step-part">
                    {friction.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Laura escribe: cuando el camino pasa por cada fricción, aparece
              "escribiendo…" y luego llega su mensaje */}
          <aside className="story-chat" aria-label={problem.voiceName}>
            <p className="story-chat__head">
              <span className="story-chat__avatar" aria-hidden="true" />
              {problem.voiceName}
            </p>
            <ul className="story-chat__list">
              {problem.frictions.map(friction => (
                <li
                  key={friction.number}
                  className="story-chat__item"
                  data-part="chat-item"
                >
                  <span
                    className="story-chat__typing"
                    data-part="typing"
                    aria-hidden="true"
                  >
                    <i />
                    <i />
                    <i />
                  </span>
                  <p className="story-chat__bubble" data-part="bubble">
                    {friction.voice}
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

      <div
        className="story-view story-view--centered"
        data-view="challenge"
        data-section="1"
      >
        <h2 className="story-title-xl story-stripes" data-reveal>
          {problem.challenge}
        </h2>
        <div className="story-references">
          {problem.references.map(reference => (
            <CaseStoryImage
              key={reference}
              label={reference}
              data-part="reference"
            />
          ))}
        </div>
      </div>
    </>
  );
}
