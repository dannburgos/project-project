'use client';

import { siteContent } from '@/content/site';
import { useAboutIntro } from '@/hooks/use-about-intro';
import { GUIDE_LINES } from '@/lib/about-intro/layout';
import { TITLE_SHAPES } from '@/lib/about-intro/title-shapes';

// Hasta dónde llega la capa oscura (más allá de la pantalla, aunque se amplíe)
const COVER_EDGE = 6000;

// Banner de About: el título "About Me" son ventanas recortadas en una capa
// oscura; de cada letra sale una línea con una nota sobre cómo trabaja
// (referencia: una tipografía anotada). Al hacer scroll, la pantalla se acerca
// a la "o", las letras crecen hasta ser enormes y por su interior aparece
// "Quién soy", la siguiente sección. El movimiento lo arma useAboutIntro.
export function AboutBanner() {
  const { intro } = siteContent.about;
  const ref = useAboutIntro<HTMLElement>();

  return (
    // El envoltorio es un bloque normal: el pin necesita un contenedor que no
    // sea flex para reservar su espacio de scroll
    <div className="about-intro-wrap">
      <header
        ref={ref}
        className="about-intro"
        data-surface="dark"
        data-about-intro
      >
        <h1 className="sr-only">{intro.title}</h1>
        <div className="about-intro__stage">
          {/* Lo que se ve por dentro de las letras */}
          <div className="about-intro__reveal" data-about-reveal>
            <p className="about-intro__label" data-reveal-item>
              {intro.who.label}
            </p>
            <p className="about-intro__statement" data-reveal-item>
              {intro.who.statement}
            </p>
            <p className="about-intro__text" data-reveal-item>
              {intro.who.text}
            </p>
            <div className="about-intro__groups" data-reveal-item>
              <p className="about-intro__label">{intro.who.groupsLabel}</p>
              <ul>
                {intro.who.groups.map(group => (
                  <li key={group}>{group}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="about-intro__art" data-art aria-hidden="true">
            <svg className="about-intro__svg" data-svg viewBox="0 0 1000 560">
              {/* La capa oscura: un rectángulo enorme con las letras como
                huecos (relleno par-impar). Es una forma vectorial, así que
                se puede ampliar muchísimo sin perder nitidez. */}
              <path
                className="about-intro__cover about-intro__layout--desktop"
                fillRule="evenodd"
                d={`M ${-COVER_EDGE} ${-COVER_EDGE} H ${COVER_EDGE} V ${COVER_EDGE} H ${-COVER_EDGE} Z ${TITLE_SHAPES.desktop.d}`}
              />
              <path
                className="about-intro__cover about-intro__layout--mobile"
                fillRule="evenodd"
                d={`M ${-COVER_EDGE} ${-COVER_EDGE} H ${COVER_EDGE} V ${COVER_EDGE} H ${-COVER_EDGE} Z ${TITLE_SHAPES.mobile.d}`}
              />

              {/* Líneas guía de la tipografía y una línea por letra */}
              <g className="about-intro__guides about-intro__layout--desktop">
                {GUIDE_LINES.map(line => (
                  <line key={line} data-guide pathLength={1} />
                ))}
                {intro.notes.map(note => (
                  <line key={note.letter} data-leader pathLength={1} />
                ))}
              </g>
            </svg>

            <ul className="about-intro__notes">
              {intro.notes.map(note => (
                <li key={note.letter} className="about-intro__note" data-note>
                  <span className="about-intro__note-letter">
                    {note.letter}
                  </span>
                  {note.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Celular: las notas en una lista corta debajo del título */}
          <ol className="about-intro__list">
            {intro.notes.map(note => (
              <li key={note.letter} data-short>
                <span className="about-intro__note-letter">{note.letter}</span>
                {note.short}
              </li>
            ))}
          </ol>

          <p className="about-intro__hint" data-hint>
            {intro.scrollHint}
          </p>
        </div>
      </header>
    </div>
  );
}
