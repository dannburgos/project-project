'use client';

import {
  Bowlby_One_SC as bowlbyOneSc,
  DM_Sans as dmSansFont,
  Titan_One as titanOneFont
} from 'next/font/google';

import { SonoPlaceholder } from '@/components/atoms/sono-placeholder';
import { CaseStoryCounter } from '@/components/molecules/case-story-counter';
import { SonoRailNav } from '@/components/molecules/sono-rail-nav';
import type { SonopizzaStory as SonopizzaStoryContent } from '@/content/sonopizza-story.types';
import { useSonopizzaStory } from '@/hooks/use-sonopizza-story';
import { cn } from '@/lib/utils';

// Tipografías de la marca: Titan One para el logotipo, Bowlby One SC para los
// titulares y DM Sans para los textos
const titanOne = titanOneFont({
  variable: '--font-sono-logo',
  subsets: ['latin'],
  weight: '400'
});
const bowlbyOne = bowlbyOneSc({
  variable: '--font-sono-display',
  subsets: ['latin'],
  weight: '400'
});
const dmSans = dmSansFont({
  variable: '--font-sono-text',
  subsets: ['latin'],
  weight: ['400', '600']
});

const MASCOT_SRC = '/sonopizza/mascot.webp';
// Lugar de las cuatro capturas que acompañan a la principal: dos a cada lado
const AUDIT_SIDE_SLOTS = [-1, 1, -2, 2] as const;

type SonopizzaStoryProps = {
  story: SonopizzaStoryContent;
};

type OpenerProps = {
  number: string;
  name: string;
};

// Número y nombre del módulo, arriba de cada escena que lo abre
function Opener({ number, name }: OpenerProps) {
  return (
    <p className="sono-opener" data-sono-in="0">
      <b>{number}</b> · {name}
    </p>
  );
}

// Caso de Sonopizza contado como recorrido (referencia de interacción:
// monument.tv): escenas a pantalla completa que entran con cortes en
// diagonal, franjas de color y barridos, con titulares gigantes. Un gesto de
// scroll es un paso. Sigue el orden del documento maestro: el reto, lo que
// encontramos, la experiencia propuesta y la exploración visual. El movimiento
// lo arma useSonopizzaStory; aquí solo va el contenido.
export function SonopizzaStory({ story }: SonopizzaStoryProps) {
  const ref = useSonopizzaStory<HTMLDivElement>();
  const {
    cover,
    challenge,
    audit,
    benchmark,
    synthesis,
    concept,
    persona,
    journey,
    architecture,
    flows,
    visual
  } = story;

  return (
    <div
      ref={ref}
      className={cn(
        'case-story sono-story',
        titanOne.variable,
        bowlbyOne.variable,
        dmSans.variable
      )}
      data-case-story
      data-surface="dark"
    >
      <section
        className="sono-stage"
        data-stage
        aria-label={cover.wordmark.join(' ')}
      >
        <ul className="sr-only">
          {story.sections.map(name => (
            <li key={name} data-sono-section-name>
              {name}
            </li>
          ))}
        </ul>

        {/* Portada */}
        <div
          className="sono-view sono-view--blue sono-cover"
          data-sono-view
          data-section="0"
          data-surface="dark"
        >
          <div className="sono-cover__cut">
            <SonoPlaceholder label={cover.photoLabel} />
          </div>
          <div className="sono-cover__text">
            <p className="sono-eyebrow">{cover.eyebrow}</p>
            <h1 className="sono-cover__wordmark">
              {cover.wordmark.map(word => (
                <span key={word}>{word}</span>
              ))}
            </h1>
            <p className="sono-cover__tagline">{cover.tagline}</p>
            <dl className="sono-facts">
              {cover.facts.map(fact => (
                <div key={fact.title}>
                  <dt>{fact.title}</dt>
                  <dd>{fact.text}</dd>
                </div>
              ))}
            </dl>
            <p className="sono-note">{cover.disclaimer}</p>
          </div>
          <img
            src={MASCOT_SRC}
            alt={cover.mascotAlt}
            className="sono-sticker sono-cover__mascot"
          />
        </div>

        {/* 01 · El reto: el titular entra en bloques */}
        <div
          className="sono-view sono-view--navy"
          data-sono-view
          data-enter="band"
          data-section="1"
          data-surface="dark"
        >
          <Opener number={challenge.number} name={challenge.name} />
          <h2 className="sono-display sono-display--xl sono-lines">
            {challenge.title.split(' ').map(word => (
              <span key={word} className="sono-lines__mask">
                <span data-sono-in="0" data-sono-fx="slide">
                  {word}
                </span>
              </span>
            ))}
          </h2>
        </div>

        {/* 01 · Contexto y oportunidad */}
        <div
          className="sono-view sono-view--white sono-columns"
          data-sono-view
          data-section="1"
          data-surface="light"
        >
          {[challenge.context, challenge.opportunity].map(block => (
            <article key={block.title} className="sono-block" data-sono-in="0">
              <h3 className="sono-display sono-display--md">{block.title}</h3>
              <p className="sono-body">{block.text}</p>
            </article>
          ))}
        </div>

        {/* 01 · El reto, objetivo y alcance */}
        <div
          className="sono-view sono-view--orange"
          data-sono-view
          data-enter="wipe"
          data-steps="2"
          data-section="1"
          data-surface="dark"
        >
          <p className="sono-eyebrow" data-sono-in="0">
            {challenge.challengeLabel}
          </p>
          <p className="sono-statement" data-sono-in="0">
            {challenge.challenge}
          </p>
          <div className="sono-columns sono-columns--tight">
            <article className="sono-block" data-sono-in="1">
              <h3 className="sono-label">{challenge.goal.title}</h3>
              <p className="sono-body">{challenge.goal.text}</p>
            </article>
            <article className="sono-block" data-sono-in="1">
              <h3 className="sono-label">{challenge.scopeTitle}</h3>
              <ul className="sono-list">
                {challenge.scope.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        {/* 02.1 · Auditoría: la captura principal sube, se abren otras
            cuatro (dos a cada lado) y luego los hallazgos entran desde la
            derecha empujando las pantallas hasta dejar solo la del centro */}
        <div
          className="sono-view sono-view--white sono-audit"
          data-sono-view
          data-enter="diagonal"
          data-steps="2"
          data-section="2"
          data-surface="light"
          data-motion="audit"
        >
          <Opener number={audit.number} name={audit.name} />
          <h2 className="sono-display sono-display--lg" data-sono-in="0">
            <span className="sono-sub">{audit.subtitle}</span> {audit.title}
          </h2>
          <div className="sono-audit__board" data-audit-board>
            <div className="sono-audit__screens">
              {/* La principal va al final para quedar encima de las demás */}
              {[...audit.captures.slice(1), audit.captures[0]].map(
                (capture, index) => (
                  <SonoPlaceholder
                    key={capture}
                    label={capture}
                    className="sono-phone"
                    data-audit-slot={
                      index === audit.captures.length - 1
                        ? 0
                        : AUDIT_SIDE_SLOTS[index]
                    }
                  />
                )
              )}
            </div>
            <div className="sono-audit__panel" data-audit-panel>
              <ul className="sono-audit__seals">
                {audit.dimensions.map((dimension, index) => (
                  <li key={dimension.title} className="sono-seal">
                    <span className="sono-seal__number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="sono-seal__title">{dimension.title}</span>
                    <span className="sono-seal__text">{dimension.text}</span>
                  </li>
                ))}
              </ul>
              <p className="sono-note">{audit.note}</p>
            </div>
          </div>
        </div>

        {/* 02.2 · Benchmark */}
        <div
          className="sono-view sono-view--electric"
          data-sono-view
          data-enter="diagonal"
          data-section="2"
          data-surface="dark"
        >
          <h2 className="sono-display sono-display--lg" data-sono-in="0">
            <span className="sono-sub">{benchmark.subtitle}</span>{' '}
            {benchmark.title}
          </h2>
          <div className="sono-marquee" aria-hidden="true">
            <div className="sono-marquee__track">
              {[...benchmark.references, ...benchmark.references].map(
                (reference, index) => (
                  <span key={`${reference}-${index}`}>{reference}</span>
                )
              )}
            </div>
          </div>
          <div className="sono-bench">
            {benchmark.references.map(reference => (
              <SonoPlaceholder
                key={reference}
                label={`${benchmark.captureLabel} ${reference}`}
                className="sono-bench__capture"
              />
            ))}
            <div className="sono-bench__dimensions" data-sono-in="0">
              <h3 className="sono-label">{benchmark.dimensionsTitle}</h3>
              <ul className="sono-list">
                {benchmark.dimensions.map(dimension => (
                  <li key={dimension}>{dimension}</li>
                ))}
              </ul>
              <p className="sono-note">{benchmark.note}</p>
            </div>
          </div>
        </div>

        {/* 02.3 · Síntesis: tres oportunidades en palabras gigantes */}
        <div
          className="sono-view sono-view--navy"
          data-sono-view
          data-enter="band"
          data-section="2"
          data-surface="dark"
        >
          <p className="sono-eyebrow" data-sono-in="0">
            {synthesis.subtitle} · {synthesis.title}
          </p>
          <ol className="sono-synthesis">
            {synthesis.opportunities.map((opportunity, index) => (
              <li key={opportunity.title} className="sono-lines__mask">
                <span
                  className="sono-synthesis__item"
                  data-sono-in="0"
                  data-sono-fx="slide"
                >
                  <span className="sono-display sono-display--lg">
                    {String(index + 1).padStart(2, '0')} {opportunity.title}
                  </span>
                  <span className="sono-body">{opportunity.text}</span>
                </span>
              </li>
            ))}
          </ol>
          <p className="sono-body sono-synthesis__direction" data-sono-in="0">
            {synthesis.direction}
          </p>
        </div>

        {/* 03.1 · Concepto: título vertical junto a la foto */}
        <div
          className="sono-view sono-view--photo sono-concept"
          data-sono-view
          data-enter="diagonal"
          data-steps="2"
          data-section="3"
          data-surface="dark"
        >
          <SonoPlaceholder
            label={concept.photoLabel}
            className="sono-concept__photo"
          />
          <p className="sono-vertical" data-sono-in="0">
            {concept.verticalTitle}
          </p>
          <div className="sono-concept__text">
            <Opener number={concept.number} name={concept.name} />
            <h2 className="sono-display sono-display--lg" data-sono-in="0">
              {concept.title}
            </h2>
            <p className="sono-body" data-sono-in="0">
              {concept.text}
            </p>
            <ul className="sono-chips" data-sono-in="1">
              {concept.principles.map(principle => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
            <p className="sono-concept__synthesis">
              {concept.synthesis.map(word => (
                <span key={word} data-sono-in="1">
                  {word}
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* 03.2 · Persona */}
        <div
          className="sono-view sono-view--white sono-persona"
          data-sono-view
          data-enter="rise"
          data-section="3"
          data-surface="light"
        >
          <article className="sono-persona__card" data-sono-in="0">
            <SonoPlaceholder
              label={persona.portraitLabel}
              className="sono-persona__portrait"
            />
            <h3 className="sono-display sono-display--md">{persona.name}</h3>
          </article>
          <div className="sono-persona__info">
            <p className="sono-eyebrow" data-sono-in="0">
              {persona.subtitle}
            </p>
            <dl className="sono-facts sono-facts--dark" data-sono-in="0">
              {persona.facts.map(fact => (
                <div key={fact.title}>
                  <dt>{fact.title}</dt>
                  <dd>{fact.text}</dd>
                </div>
              ))}
            </dl>
            <p className="sono-statement sono-statement--sm" data-sono-in="0">
              {persona.context}
            </p>
            <p className="sono-note" data-sono-in="0">
              {persona.note}
            </p>
          </div>
        </div>

        {/* 03.3 · Journey: una curva ondulada se dibuja con un punto en la
            punta, y cada etapa aparece justo cuando la curva llega a ella */}
        <div
          className="sono-view sono-view--soft-orange sono-journey"
          data-sono-view
          data-enter="wipe"
          data-section="3"
          data-surface="dark"
          data-motion="journey"
        >
          <p className="sono-eyebrow" data-sono-in="0">
            {journey.subtitle}
          </p>
          <h2 className="sono-display sono-display--xl" data-sono-in="0">
            {journey.title}
          </h2>
          <div className="sono-journey__track">
            <svg
              className="sono-journey__line"
              viewBox="0 0 1000 200"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 150 C50 150 50 140 100 140 C200 140 200 50 300 50 C400 50 400 150 500 150 C600 150 600 60 700 60 C800 60 800 130 900 130 C950 130 950 110 1000 110"
                pathLength={1}
                data-journey-line
              />
            </svg>
            <span
              className="sono-journey__marker"
              aria-hidden="true"
              data-journey-marker
            />
            <ol className="sono-journey__stages">
              {journey.stages.map((stage, index) => (
                <li key={stage} data-journey-stage>
                  <span className="sono-journey__dot" data-journey-dot>
                    {index + 1}
                  </span>
                  <span data-journey-label>{stage}</span>
                </li>
              ))}
            </ol>
          </div>
          <p className="sono-note" data-sono-in="0">
            {journey.note}
          </p>
        </div>

        {/* 03.4 · Arquitectura de información */}
        <div
          className="sono-view sono-view--white"
          data-sono-view
          data-enter="diagonal"
          data-section="3"
          data-surface="light"
        >
          <h2 className="sono-display sono-display--lg" data-sono-in="0">
            <span className="sono-sub">{architecture.subtitle}</span>{' '}
            {architecture.title}
          </h2>
          <ol className="sono-architecture">
            {architecture.sections.map((section, index) => (
              <li
                key={section.title}
                className="sono-architecture__block"
                data-sono-in="0"
                data-sono-fx="pop"
              >
                <span className="sono-architecture__number">{index + 1}</span>
                <h3 className="sono-display sono-display--sm">
                  {section.title}
                </h3>
                <ul>
                  {section.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <p className="sono-note" data-sono-in="0">
            {architecture.navigation}
          </p>
        </div>

        {/* 03.5 · Flujos principales */}
        <div
          className="sono-view sono-view--dark"
          data-sono-view
          data-enter="wipe"
          data-section="3"
          data-surface="dark"
        >
          <h2 className="sono-display sono-display--lg" data-sono-in="0">
            <span className="sono-sub">{flows.subtitle}</span> {flows.title}
          </h2>
          <ol className="sono-flows">
            {flows.items.map(flow => (
              <li key={flow.number} className="sono-flow" data-sono-in="0">
                <span className="sono-flow__number">{flow.number}</span>
                <h3 className="sono-display sono-display--sm">{flow.title}</h3>
                <ol className="sono-flow__steps">
                  {flow.steps.map(step => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </li>
            ))}
          </ol>
          <p className="sono-note" data-sono-in="0">
            {flows.note}
          </p>
        </div>

        {/* 04 · Exploración visual: personalidad */}
        <div
          className="sono-view sono-view--blue sono-visual-intro"
          data-sono-view
          data-enter="band"
          data-section="4"
          data-surface="dark"
        >
          <Opener number={visual.number} name={visual.name} />
          <h2 className="sono-display sono-display--xl sono-lines">
            <span className="sono-lines__mask">
              <span data-sono-in="0" data-sono-fx="slide">
                {visual.title}
              </span>
            </span>
          </h2>
          <ul className="sono-stickers">
            {visual.personality.map(trait => (
              <li key={trait} data-sono-in="0" data-sono-fx="pop">
                {trait}
              </li>
            ))}
          </ul>
          <img
            src={MASCOT_SRC}
            alt=""
            className="sono-sticker sono-visual-intro__mascot"
            data-sono-in="0"
            data-sono-fx="pop"
          />
        </div>

        {/* 04 · Paleta: cada color barre como una franja */}
        <div
          className="sono-view sono-view--white sono-palette"
          data-sono-view
          data-enter="diagonal"
          data-section="4"
          data-surface="light"
        >
          <h2 className="sono-display sono-display--lg" data-sono-in="0">
            {visual.paletteTitle}
          </h2>
          <ul className="sono-palette__swatches">
            {visual.palette.map(swatch => (
              <li
                key={swatch.hex}
                className="sono-palette__swatch"
                data-sono-in="0"
              >
                <span className="sono-palette__name">{swatch.name}</span>
                <span className="sono-palette__hex">{swatch.hex}</span>
              </li>
            ))}
          </ul>
          <p className="sono-note" data-sono-in="0">
            {visual.paletteNote}
          </p>
        </div>

        {/* 04 · Tipografía */}
        <div
          className="sono-view sono-view--navy"
          data-sono-view
          data-enter="wipe"
          data-section="4"
          data-surface="dark"
        >
          <h2 className="sono-display sono-display--lg" data-sono-in="0">
            {visual.typeTitle}
          </h2>
          <ul className="sono-type">
            {visual.typefaces.map(typeface => (
              <li
                key={typeface.name}
                className="sono-type__item"
                data-sono-in="0"
              >
                <span
                  className={cn(
                    'sono-type__sample',
                    typeface.name === 'Titan One' && 'sono-type__sample--logo',
                    typeface.name === 'Bowlby One SC' &&
                      'sono-type__sample--display'
                  )}
                >
                  {typeface.sample}
                </span>
                <span className="sono-type__name">{typeface.name}</span>
                <span className="sono-type__role">{typeface.role}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 04 · Logotipo, mascota y fotografía */}
        <div
          className="sono-view sono-view--orange sono-brand"
          data-sono-view
          data-enter="diagonal"
          data-section="4"
          data-surface="dark"
        >
          <h2 className="sono-display sono-display--lg" data-sono-in="0">
            {visual.brandTitle}
          </h2>
          <div className="sono-brand__grid">
            <SonoPlaceholder
              label={visual.logoLabel}
              className="sono-brand__logo"
            />
            <div className="sono-brand__mascot" data-sono-in="0">
              <img
                src={MASCOT_SRC}
                alt={cover.mascotAlt}
                className="sono-sticker"
                data-sono-in="0"
                data-sono-fx="pop"
              />
              <p className="sono-body">{visual.mascotText}</p>
            </div>
            <div className="sono-block" data-sono-in="0">
              <h3 className="sono-label">{visual.photographyTitle}</h3>
              <ul className="sono-list">
                {visual.photography.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <SonoRailNav sections={story.sections} />
        <span className="sono-band" data-sono-band aria-hidden="true" />
      </section>
      <CaseStoryCounter sections={story.sections} firstNumber={0} />
    </div>
  );
}
