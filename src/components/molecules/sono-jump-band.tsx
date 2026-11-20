import { formatSectionNumber } from '@/utils/section-number.util';

type SonoJumpBandProps = {
  sections: readonly string[];
};

type SonoJumpWordProps = {
  word: string;
};

// Una palabra partida en letras, para que cada letra entre y salga por
// separado
function SonoJumpWord({ word }: SonoJumpWordProps) {
  return (
    <span className="sono-jump__word">
      {Array.from(word).map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className="sono-jump__letter"
          data-jump-letter
        >
          {letter}
        </span>
      ))}
    </span>
  );
}

// Franja del salto entre secciones de Sonopizza (la mueve sonopizza-jump): un
// título por sección, con su número y su nombre, apilados en el mismo lugar.
// Solo se ve el de la sección a la que se salta.
export function SonoJumpBand({ sections }: SonoJumpBandProps) {
  return (
    <div className="sono-jump" aria-hidden="true" data-sono-jump>
      {sections.map((name, index) => (
        <p key={name} className="sono-jump__title" data-jump-title>
          <span className="sono-jump__number">
            <SonoJumpWord word={formatSectionNumber(index)} />
          </span>
          <span className="sono-jump__name">
            {name.split(' ').map((word, wordIndex) => (
              <SonoJumpWord key={`${word}-${wordIndex}`} word={word} />
            ))}
          </span>
        </p>
      ))}
    </div>
  );
}
