import type { CSSProperties } from 'react';

import type { CaseInterviewItem } from '@/content/case-study.types';

type CaseInterviewProps = {
  title: string;
  note: string;
  speaker: string;
  items: readonly CaseInterviewItem[];
};

// Preguntas y respuestas como una conversación: cada par llega en cadena. La
// nota de arriba aclara si las respuestas son simuladas.
export function CaseInterview({
  title,
  note,
  speaker,
  items
}: CaseInterviewProps) {
  const initial = speaker.charAt(0);

  return (
    <div className="case-interview">
      <div className="case-interview__header">
        <h3 className="case-block__title">{title}</h3>
        <p className="case-interview__note">{note}</p>
      </div>

      <ol className="case-interview__thread">
        {items.map((item, index) => (
          <li
            key={item.question}
            className="case-interview__pair case-reveal__item"
            style={{ '--item-index': index } as CSSProperties}
          >
            <p className="case-interview__question">{item.question}</p>
            <div className="case-interview__answer">
              <span className="case-interview__avatar" aria-hidden="true">
                {initial}
              </span>
              <p className="case-interview__bubble">
                <span className="sr-only">{speaker}: </span>
                {item.answer}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
