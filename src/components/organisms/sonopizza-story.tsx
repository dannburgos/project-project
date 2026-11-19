'use client';

import { Briefcase, Cake, MapPin, type LucideIcon } from 'lucide-react';
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
// Saltos del flujo de compra en el sitemap (coordenadas del lienzo de
// 1400 × 600): Inicio → Menú → Detalle → Personalización → Carrito →
// Confirmación
const SITEMAP_HOPS = [
  'M380 190 H552',
  'M700 265 V302',
  'M700 416 V452',
  'M830 510 H960 V190 H1012',
  'M1160 265 V452'
] as const;
// Filas de cada etapa del journey, en orden
const JOURNEY_ROWS = ['action', 'thought', 'friction', 'opportunity'] as const;
// Ícono de cada dato de la persona: edad, ocupación y ubicación
const PERSONA_FACT_ICONS: readonly LucideIcon[] = [Cake, Briefcase, MapPin];
// Lugar de las cuatro capturas que acompañan a la principal: dos a cada lado
const AUDIT_SIDE_SLOTS = [-1, 1, -2, 2] as const;

type CompareTextProps = {
  text?: string;
  pending: string;
};

// Celda del benchmark: lo observado o, si aún falta, una marca de pendiente
function CompareText({ text, pending }: CompareTextProps) {
  if (text) return <span>{text}</span>;
  return <span className="sono-compare__pending">{pending}</span>;
}

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
    visual,
    product
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

        {/* 01 · Contexto y oportunidad; en el siguiente paso el reto entra
            desde la derecha en la misma pantalla, en naranja, con su
            objetivo y su alcance */}
        <div
          className="sono-view sono-view--white sono-challenge"
          data-sono-view
          data-steps="2"
          data-section="1"
          data-surface="light"
        >
          <div className="sono-challenge__context">
            {[challenge.context, challenge.opportunity].map(block => (
              <article
                key={block.title}
                className="sono-block"
                data-sono-in="0"
              >
                <h3 className="sono-display sono-display--md">{block.title}</h3>
                <p className="sono-body">{block.text}</p>
              </article>
            ))}
          </div>
          <article
            className="sono-challenge__card"
            data-sono-in="1"
            data-sono-fx="slide"
          >
            <p className="sono-eyebrow">{challenge.challengeLabel}</p>
            <p className="sono-statement sono-statement--sm">
              {challenge.challenge}
            </p>
            <div className="sono-columns sono-columns--tight">
              <div className="sono-block">
                <h3 className="sono-label">{challenge.goal.title}</h3>
                <p className="sono-body">{challenge.goal.text}</p>
              </div>
              <div className="sono-block">
                <h3 className="sono-label">{challenge.scopeTitle}</h3>
                <ul className="sono-list">
                  {challenge.scope.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
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
            {audit.title}
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
          <h2 className="sono-display sono-display--md" data-sono-in="0">
            {benchmark.title}
          </h2>
          <p className="sono-body" data-sono-in="0">
            {benchmark.lead}
          </p>
          <div className="sono-compare" data-sono-in="0">
            <table className="sono-compare__table">
              <caption className="sr-only">{benchmark.lead}</caption>
              <thead>
                <tr>
                  <th scope="col" className="sono-compare__corner">
                    {benchmark.dimensionsTitle}
                  </th>
                  {benchmark.apps.map(app => (
                    <th
                      key={app.name}
                      scope="col"
                      className="sono-compare__app"
                    >
                      <SonoPlaceholder
                        label={`${benchmark.captureLabel} ${app.name}`}
                        className="sono-compare__capture"
                      />
                      <span className="sono-compare__name">{app.name}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {benchmark.dimensions.map((dimension, row) => (
                  <tr key={dimension}>
                    <th scope="row" className="sono-compare__dimension">
                      {dimension}
                    </th>
                    {benchmark.apps.map(app => (
                      <td key={app.name} className="sono-compare__cell">
                        <CompareText
                          text={app.observations[row]}
                          pending={benchmark.pending}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="sono-compare__takeaway">
                  <th scope="row" className="sono-compare__dimension">
                    {benchmark.takeawayTitle}
                  </th>
                  {benchmark.apps.map(app => (
                    <td key={app.name} className="sono-compare__cell">
                      <CompareText
                        text={app.takeaway}
                        pending={benchmark.pending}
                      />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="sono-note" data-sono-in="0">
            {benchmark.note}
          </p>
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
            {synthesis.title}
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
          data-section="3"
          data-surface="dark"
        >
          <SonoPlaceholder
            label={concept.photoLabel}
            className="sono-concept__photo"
          />
          <SonoPlaceholder
            label={concept.imageLabel}
            className="sono-concept__image"
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
            <ul className="sono-chips" data-sono-in="0">
              {concept.principles.map(principle => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
            <p className="sono-concept__synthesis">
              {concept.synthesis.map(word => (
                <span key={word} data-sono-in="0">
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
          {/* Foto de John como polaroid: cae como una instantánea recién
              sacada y la imagen se revela poco a poco */}
          <figure
            className="sono-persona__card"
            data-sono-in="0"
            data-sono-fx="pop"
          >
            <span className="sono-persona__photo">
              <SonoPlaceholder
                label={persona.portraitLabel}
                className="sono-persona__portrait"
              />
              <span
                className="sono-persona__develop"
                aria-hidden="true"
                data-sono-in="0"
                data-sono-fx="develop"
              />
            </span>
            <figcaption className="sono-persona__caption">
              {persona.name}
            </figcaption>
          </figure>
          <div className="sono-persona__info">
            <p className="sono-eyebrow" data-sono-in="0">
              {persona.subtitle}
            </p>
            {/* Sus datos como stickers que saltan uno tras otro */}
            <dl className="sono-persona__stickers">
              {persona.facts.map((fact, index) => {
                const Icon = PERSONA_FACT_ICONS[index] ?? MapPin;
                return (
                  <div
                    key={fact.title}
                    className={cn(
                      'sono-persona__sticker',
                      `sono-persona__sticker--${index}`
                    )}
                    data-sono-in="0"
                    data-sono-fx="pop"
                  >
                    <Icon className="sono-persona__icon" aria-hidden="true" />
                    <dt className="sono-persona__fact-label">{fact.title}</dt>
                    <dd className="sono-persona__fact-text">{fact.text}</dd>
                  </div>
                );
              })}
            </dl>
            {/* Su contexto, en un globo que sale de la polaroid, con las
                frases clave resaltadas */}
            <p className="sono-persona__bubble" data-sono-in="0">
              {persona.context.map(part =>
                part.isStrong ? (
                  <mark key={part.text} className="sono-persona__mark">
                    {part.text}
                  </mark>
                ) : (
                  <span key={part.text}>{part.text}</span>
                )
              )}
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
          <h2 className="sono-display sono-display--md" data-sono-in="0">
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
                <li key={stage.name} data-journey-stage>
                  <span className="sono-journey__dot" data-journey-dot>
                    {index + 1}
                  </span>
                  <span className="sono-journey__name" data-journey-label>
                    {stage.name}
                  </span>
                  {/* Lo que hace, piensa, le cuesta y lo que el diseño
                      puede resolver en esta etapa */}
                  <dl className="sono-journey__card" data-journey-card>
                    {JOURNEY_ROWS.map(row => (
                      <div
                        key={row}
                        className={cn(
                          'sono-journey__row',
                          `sono-journey__row--${row}`
                        )}
                      >
                        <dt className="sono-journey__key">
                          {journey.rowLabels[row]}
                        </dt>
                        <dd className="sono-journey__value">{stage[row]}</dd>
                      </div>
                    ))}
                  </dl>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* 03.4 · Arquitectura de información como sitemap: de la app
            cuelga la navegación principal; bajo el menú, los pasos del flujo,
            y al final, la confirmación. Una línea naranja dibuja el flujo de
            compra y un punto la recorre encendiendo cada pantalla */}
        <div
          className="sono-view sono-view--white sono-sitemap"
          data-sono-view
          data-enter="diagonal"
          data-section="3"
          data-surface="light"
          data-motion="architecture"
        >
          <div className="sono-sitemap__head">
            <h2 className="sono-display sono-display--md" data-sono-in="0">
              {architecture.title}
            </h2>
            <ul className="sono-sitemap__legend" data-sono-in="0">
              <li className="sono-sitemap__key sono-sitemap__key--nav">
                {architecture.legend.nav}
              </li>
              <li className="sono-sitemap__key sono-sitemap__key--step">
                {architecture.legend.step}
              </li>
              <li className="sono-sitemap__key sono-sitemap__key--flow">
                {architecture.legend.flow}
              </li>
            </ul>
          </div>
          <div className="sono-sitemap__canvas">
            <svg
              className="sono-sitemap__lines"
              viewBox="0 0 1400 600"
              aria-hidden="true"
            >
              <defs>
                <marker
                  id="sono-sitemap-arrow"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M0 0 L10 5 L0 10 z" />
                </marker>
              </defs>
              <path
                className="sono-sitemap__tree"
                d="M700 70 V104 M240 120 V104 H1160 V120 M700 104 V120"
                pathLength={1}
                data-sitemap-tree
              />
              {SITEMAP_HOPS.map(hop => (
                <path
                  key={hop}
                  className="sono-sitemap__hop"
                  d={hop}
                  pathLength={1}
                  markerEnd="url(#sono-sitemap-arrow)"
                  data-sitemap-hop
                />
              ))}
            </svg>
            <p className="sono-sitemap__root" data-sitemap-node>
              {architecture.root}
            </p>
            <ol className="sono-sitemap__nodes">
              {architecture.sections.map((section, index) => (
                <li
                  key={section.title}
                  className={cn(
                    'sono-sitemap__node',
                    `sono-sitemap__node--${section.kind}`,
                    `sono-sitemap__node--${index}`
                  )}
                  data-sitemap-node
                  data-sitemap-screen
                >
                  <h3 className="sono-sitemap__title">
                    <span className="sono-sitemap__order" aria-hidden="true">
                      {index + 1}
                    </span>
                    {section.title}
                  </h3>
                  <p className="sono-sitemap__items">
                    {section.items.join(' · ')}
                  </p>
                </li>
              ))}
            </ol>
            <span
              className="sono-sitemap__marker"
              aria-hidden="true"
              data-sitemap-marker
            />
          </div>
          <p className="sono-note" data-sono-in="0">
            {architecture.navigation}
          </p>
        </div>

        {/* 03.5 · Flujos principales: un paso por flujo. Cada diagrama crece
            en orden: las pantallas saltan, los caminos se dibujan, las ramas
            se abren y se juntan, y los caminos alternos van punteados */}
        <div
          className="sono-view sono-view--dark sono-flowmaps"
          data-sono-view
          data-enter="wipe"
          data-steps={flows.items.length}
          data-section="3"
          data-surface="dark"
          data-motion="flows"
        >
          <div className="sono-flowmaps__head">
            <h2 className="sono-display sono-display--md" data-sono-in="0">
              {flows.title}
            </h2>
            <ol className="sono-flowmaps__tabs" aria-hidden="true">
              {flows.items.map((flow, index) => (
                <li
                  key={flow.number}
                  className="sono-flowmaps__tab"
                  data-flow-tab={index}
                >
                  {flow.number}
                </li>
              ))}
            </ol>
          </div>
          <div className="sono-flowmaps__stage">
            {flows.items.map((flow, index) => (
              <section
                key={flow.number}
                className="sono-flowmap"
                aria-labelledby={`sono-flow-${index}`}
                data-flow-map={index}
              >
                <div className="sono-flowmap__intro">
                  <span className="sono-flowmap__number">{flow.number}</span>
                  <div>
                    <h3
                      id={`sono-flow-${index}`}
                      className="sono-flowmap__title"
                    >
                      {flow.title}
                    </h3>
                    <p className="sono-flowmap__goal">{flow.goal}</p>
                  </div>
                </div>
                <div className="sono-flowmap__canvas">
                  <svg
                    className="sono-flowmap__lines"
                    viewBox="0 0 1400 520"
                    aria-hidden="true"
                  >
                    <defs>
                      <marker
                        id={`sono-flow-arrow-${index}`}
                        viewBox="0 0 10 10"
                        refX="8"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto-start-reverse"
                      >
                        <path d="M0 0 L10 5 L0 10 z" />
                      </marker>
                    </defs>
                    {flow.map.edges.map(edge => (
                      <g key={edge.path} data-flow-order={edge.order}>
                        <path
                          className={cn(
                            'sono-flowmap__edge',
                            edge.isAlt && 'sono-flowmap__edge--alt'
                          )}
                          d={edge.path}
                          pathLength={1}
                          markerEnd={`url(#sono-flow-arrow-${index})`}
                          data-flow-edge
                        />
                        {edge.label && (
                          <text
                            className="sono-flowmap__edge-label"
                            x={edge.labelX}
                            y={edge.labelY}
                            data-flow-edge-label
                          >
                            {edge.label}
                          </text>
                        )}
                      </g>
                    ))}
                  </svg>
                  <ol className="sono-flowmap__nodes">
                    {flow.map.nodes.map(node => (
                      <li
                        key={node.label}
                        className="sono-flowmap__spot"
                        data-flow-spot
                        data-x={node.x}
                        data-y={node.y}
                      >
                        <span
                          className={cn(
                            'sono-flowmap__node',
                            `sono-flowmap__node--${node.kind}`
                          )}
                          data-flow-node
                          data-flow-order={node.order}
                        >
                          <span className="sono-flowmap__label">
                            {node.label}
                          </span>
                          {node.detail && (
                            <span className="sono-flowmap__detail">
                              {node.detail}
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>
            ))}
          </div>
          <p className="sono-note" data-sono-in="0">
            {flows.note}
          </p>
        </div>

        {/* 04 · La exploración visual: un solo ambiente con scroll libre por
            dentro. Al llegar, el scroll recorre el contenido como una página;
            al terminar, el siguiente gesto sigue al producto en acción */}
        <div
          className="sono-view sono-free"
          data-sono-view
          data-enter="diagonal"
          data-section="4"
          data-surface="dark"
          data-free-view
        >
          <div
            className="sono-free__area"
            data-free-scroll-area
            data-lenis-prevent
          >
            {/* 04 · Exploración visual: personalidad */}
            <div
              className="sono-free__panel sono-view--blue sono-visual-intro"
              data-surface="dark"
            >
              <Opener number={visual.number} name={visual.name} />
              <h2 className="sono-display sono-display--xl sono-lines">
                <span className="sono-lines__mask">
                  <span data-free-in data-free-fx="slide">
                    {visual.title}
                  </span>
                </span>
              </h2>
              <ul className="sono-stickers">
                {visual.personality.map(trait => (
                  <li key={trait} data-free-in data-free-fx="pop">
                    {trait}
                  </li>
                ))}
              </ul>
              <img
                src={MASCOT_SRC}
                alt=""
                className="sono-sticker sono-visual-intro__mascot"
                data-free-in
                data-free-fx="pop"
              />
            </div>

            {/* 04 · Paleta: cada color barre como una franja */}
            <div
              className="sono-free__panel sono-view--white sono-palette"
              data-surface="light"
            >
              <h2 className="sono-display sono-display--lg" data-free-in>
                {visual.paletteTitle}
              </h2>
              <ul className="sono-palette__swatches">
                {visual.palette.map(swatch => (
                  <li
                    key={swatch.hex}
                    className="sono-palette__swatch"
                    data-free-in
                  >
                    <span className="sono-palette__name">{swatch.name}</span>
                    <span className="sono-palette__hex">{swatch.hex}</span>
                  </li>
                ))}
              </ul>
              <p className="sono-note" data-free-in>
                {visual.paletteNote}
              </p>
            </div>

            {/* 04 · Tipografía */}
            <div
              className="sono-free__panel sono-view--navy"
              data-surface="dark"
            >
              <h2 className="sono-display sono-display--lg" data-free-in>
                {visual.typeTitle}
              </h2>
              <ul className="sono-type">
                {visual.typefaces.map(typeface => (
                  <li
                    key={typeface.name}
                    className="sono-type__item"
                    data-free-in
                  >
                    <span
                      className={cn(
                        'sono-type__sample',
                        typeface.name === 'Titan One' &&
                          'sono-type__sample--logo',
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
              className="sono-free__panel sono-view--orange sono-brand"
              data-surface="dark"
            >
              <h2 className="sono-display sono-display--lg" data-free-in>
                {visual.brandTitle}
              </h2>
              <div className="sono-brand__grid">
                <SonoPlaceholder
                  label={visual.logoLabel}
                  className="sono-brand__logo"
                />
                <div className="sono-brand__mascot" data-free-in>
                  <img
                    src={MASCOT_SRC}
                    alt={cover.mascotAlt}
                    className="sono-sticker"
                    data-free-in
                    data-free-fx="pop"
                  />
                  <p className="sono-body">{visual.mascotText}</p>
                </div>
                <div className="sono-block" data-free-in>
                  <h3 className="sono-label">{visual.photographyTitle}</h3>
                  <ul className="sono-list">
                    {visual.photography.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 04 · Elementos de marca: las partes de la pizza como piezas de
                la interfaz (ideas por diseñar) */}
            <div
              className="sono-free__panel sono-view--white sono-elements"
              data-surface="light"
            >
              <h2 className="sono-display sono-display--md" data-free-in>
                {visual.elements.title}
              </h2>
              <p className="sono-body" data-free-in>
                {visual.elements.lead}
              </p>
              <ul className="sono-elements__grid">
                {visual.elements.items.map(item => (
                  <li
                    key={item.title}
                    className="sono-elements__slot"
                    data-free-in
                    data-free-fx="pop"
                  >
                    <span className="sono-elements__pending">
                      {visual.elements.pending}
                    </span>
                    <h3 className="sono-elements__name">{item.title}</h3>
                    <p className="sono-elements__idea">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* 04 · Sistema de diseño de Sonopizza: lo que se construiría */}
            <div
              className="sono-free__panel sono-view--navy sono-system"
              data-surface="dark"
            >
              <h2 className="sono-display sono-display--md" data-free-in>
                {visual.system.title}
              </h2>
              <p className="sono-body" data-free-in>
                {visual.system.lead}
              </p>
              <div className="sono-system__groups">
                {visual.system.groups.map(group => (
                  <section
                    key={group.title}
                    className="sono-system__group"
                    data-free-in
                  >
                    <h3 className="sono-label">{group.title}</h3>
                    <ul className="sono-system__items">
                      {group.items.map(item => (
                        <li key={item} className="sono-system__item">
                          {item}
                          <span className="sono-system__pending">
                            {visual.system.pending}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 05 · El producto en acción (referencia: motionin.design/gallery/
            marathon): un paso por flujo. Cada gesto cambia el fondo, el
            título entra letra por letra, el teléfono sube y entra el del
            siguiente flujo desde abajo, y las etiquetas
            de vidrio flotan alrededor del teléfono */}
        <div
          className="sono-view sono-product"
          data-sono-view
          data-enter="rise"
          data-steps={product.scenes.length}
          data-section="5"
          data-surface="dark"
          data-motion="product"
        >
          {product.scenes.map((scene, index) => (
            <span
              key={scene.number}
              className={cn('sono-product__bg', `sono-product__bg--${index}`)}
              aria-hidden="true"
              data-product-bg={index}
            />
          ))}
          <span className="sono-product__glow" aria-hidden="true" />

          {product.scenes.map((scene, index) => (
            <div
              key={scene.number}
              className="sono-product__phone"
              aria-hidden="true"
              data-product-phone={index}
            >
              <span className="sono-product__screen">
                <span className="sono-product__screen-label">
                  {scene.screenLabel}
                </span>
              </span>
            </div>
          ))}

          {product.scenes.map((scene, index) => (
            <section
              key={scene.number}
              className="sono-product__scene"
              aria-labelledby={`sono-product-${index}`}
              data-product-scene={index}
            >
              <div className="sono-product__copy">
                <p className="sono-product__eyebrow" data-product-fade>
                  {product.number} · {product.name}
                </p>
                <h2
                  id={`sono-product-${index}`}
                  className="sono-product__title"
                >
                  <span className="sr-only">{scene.title}</span>
                  <span aria-hidden="true">
                    {scene.title.split(' ').map((word, wordIndex) => (
                      <span
                        key={`${word}-${wordIndex}`}
                        className="sono-product__word"
                      >
                        {Array.from(word).map((letter, letterIndex) => (
                          <span
                            key={`${letter}-${letterIndex}`}
                            className="sono-product__letter"
                            data-product-letter
                          >
                            {letter}
                          </span>
                        ))}
                      </span>
                    ))}
                  </span>
                </h2>
                <p className="sono-product__text" data-product-fade>
                  {scene.text}
                </p>
                <p className="sono-product__pill" data-product-fade>
                  <span className="sono-product__dot" aria-hidden="true" />
                  {product.stepLabel} {scene.number} ·{' '}
                  {flows.items[index]?.title}
                </p>
              </div>
              <ul className="sono-product__chips">
                {scene.chips.map((chip, chipIndex) => (
                  <li
                    key={chip.title}
                    className={cn(
                      'sono-product__chip',
                      `sono-product__chip--${chipIndex}`
                    )}
                    data-product-chip
                  >
                    <span className="sono-product__chip-float">
                      <span className="sono-product__chip-title">
                        {chip.title}
                      </span>
                      <span className="sono-product__chip-text">
                        {chip.text}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <SonoRailNav sections={story.sections} />
        <span className="sono-band" data-sono-band aria-hidden="true" />
      </section>
      <CaseStoryCounter sections={story.sections} firstNumber={0} />
    </div>
  );
}
