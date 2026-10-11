import { Fragment, type CSSProperties } from 'react';

type RevealTextProps = {
  text: string;
  // Separación entre una palabra y la siguiente, en ms. Con 0, todas salen al
  // mismo tiempo.
  step?: number;
};

// Texto que aparece palabra por palabra, como si saliera de detrás de una
// línea invisible.
export function RevealText({ text, step = 120 }: RevealTextProps) {
  const words = text.split(' ');

  return (
    <>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span className="reveal-text__mask">
            <span
              className="reveal-text__word"
              style={
                {
                  '--word-index': index,
                  '--reveal-step': `${step}ms`
                } as CSSProperties
              }
            >
              {word}
            </span>
          </span>
          {index < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </>
  );
}
