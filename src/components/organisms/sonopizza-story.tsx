'use client';

import { Briefcase, Cake, MapPin, type LucideIcon } from 'lucide-react';
import {
  Anton as antonFont,
  Bowlby_One_SC as bowlbyOneSc,
  DM_Sans as dmSansFont,
  Titan_One as titanOneFont
} from 'next/font/google';

import { SonoArrowMarker } from '@/components/atoms/sono-arrow-marker';
import { SonoPlaceholder } from '@/components/atoms/sono-placeholder';
import { CaseStoryCounter } from '@/components/molecules/case-story-counter';
import { SonoBenchmarkSlides } from '@/components/molecules/sono-benchmark-slides';
import { SonoFlowMaps } from '@/components/molecules/sono-flow-maps';
import { SonoJumpBand } from '@/components/molecules/sono-jump-band';
import { SonoRailNav } from '@/components/molecules/sono-rail-nav';
import { SonoDesignSystem } from '@/components/organisms/sono-design-system';
import type {
  SonoSiteNodeKind,
  SonopizzaStory as SonopizzaStoryContent
} from '@/content/sonopizza-story.types';
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
// Anton, condensada y pesada, para los números que deben resaltar (hallazgos)
const anton = antonFont({
  variable: '--font-sono-condensed',
  subsets: ['latin'],
  weight: '400'
});
const dmSans = dmSansFont({
  variable: '--font-sono-text',
  subsets: ['latin'],
  weight: ['400', '600', '700']
});

const MASCOT_SRC = '/sonopizza/mascot.webp';
// Sitemap en un lienzo de 1400 × 660. Fila 1: la navegación principal
// (Inicio, Menú y Carrito); debajo del menú, Detalle y Personalización, y
// debajo del carrito, Confirmación. El árbol une la app con la navegación
// principal; los saltos dibujan el flujo de compra (Inicio → Menú → Detalle →
// Personalización → Carrito → Confirmación) y dejan aire de 12 unidades antes
// y después de cada tarjeta, contando su sombra
const SITEMAP_TREE = 'M700 30 V100 M220 100 V78 H1180 V100';
const SITEMAP_HOPS = [
  'M390 175 H534',
  'M700 270 V303',
  'M700 470 V503',
  'M860 585 H926 Q940 585 940 571 V189 Q940 175 954 175 H1013',
  'M1180 270 V303'
] as const;
// Lugar de cada pantalla en el lienzo, en el orden del flujo de compra
const SITEMAP_SLOTS = [
  'sono-sitemap__node--home',
  'sono-sitemap__node--menu',
  'sono-sitemap__node--detail',
  'sono-sitemap__node--custom',
  'sono-sitemap__node--cart',
  'sono-sitemap__node--confirm'
] as const;
const SITEMAP_KIND_CLASS: Record<SonoSiteNodeKind, string> = {
  nav: 'sono-sitemap__node--nav',
  step: 'sono-sitemap__node--step',
  end: 'sono-sitemap__node--end'
};
// Filas de cada etapa del journey, en orden
const JOURNEY_ROWS = ['thought', 'friction', 'opportunity'] as const;
// Ícono de cada dato de la persona: edad, ocupación y ubicación
const PERSONA_FACT_ICONS: readonly LucideIcon[] = [Cake, Briefcase, MapPin];

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
// encontramos, la experiencia propuesta y el sistema de diseño. El movimiento
// lo arma useSonopizzaStory; aquí solo va el contenido.
export function SonopizzaStory({ story }: SonopizzaStoryProps) {
  const ref = useSonopizzaStory<HTMLDivElement>();
  const {
    cover,
    challenge,
    audit,
    benchmark,
    persona,
    journey,
    architecture,
    flows,
    designSystem,
    product
  } = story;

  return (
    <div
      ref={ref}
      className={cn(
        'case-story sono-story',
        titanOne.variable,
        bowlbyOne.variable,
        anton.variable,
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
            <SonoPlaceholder label={cover.photoLabel} isLabelVisible={false} />
          </div>
          <div className="sono-cover__text">
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
          </div>
          <img
            src={MASCOT_SRC}
            alt={cover.mascotAlt}
            className="sono-sticker sono-cover__mascot"
          />
        </div>

        {/* 01 · El reto: arriba el titular (entra como un bloque), debajo
            contexto y oportunidad, y enseguida, en el mismo paso, la tarjeta
            naranja de la meta entra desde la derecha */}
        <div
          className="sono-view sono-view--white sono-challenge"
          data-sono-view
          data-enter="band"
          data-section="1"
          data-surface="light"
        >
          <header className="sono-challenge__header">
            <Opener number={challenge.number} name={challenge.name} />
            {/* Las dos líneas entran juntas, como un solo bloque */}
            <h2 className="sono-display sono-challenge__title">
              <span className="sono-lines__mask">
                <span data-sono-in="0" data-sono-fx="slide">
                  {challenge.titleLines.map(line => (
                    <span key={line} className="sono-challenge__line">
                      {line}{' '}
                    </span>
                  ))}
                </span>
              </span>
            </h2>
          </header>
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
            data-sono-in="0"
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
                <ul className="sono-chips sono-challenge__scope">
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
              {/* En el orden de la fila, de izquierda a derecha (el lugar
                  va centrado en 0). La última es la que queda al entrar los
                  hallazgos; al ir al final, queda encima de las demás */}
              {audit.captures.map((capture, index) => (
                <figure
                  key={capture.src}
                  className="sono-phone"
                  data-audit-slot={index - (audit.captures.length - 1) / 2}
                  data-audit-main={
                    index === audit.captures.length - 1 ? '' : undefined
                  }
                >
                  <img
                    src={capture.src}
                    alt={capture.alt}
                    className="sono-phone__screen"
                    decoding="async"
                  />
                </figure>
              ))}
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
            </div>
          </div>
        </div>

        {/* 02.2 · Benchmark y hallazgos, en fondo claro: tres slides que se
            pasan con clic */}
        <div
          className="sono-view sono-view--white"
          data-sono-view
          data-enter="diagonal"
          data-section="2"
          data-surface="light"
        >
          <SonoBenchmarkSlides benchmark={benchmark} />
        </div>

        {/* 03.2 · Persona */}
        <div
          className="sono-view sono-view--white sono-persona"
          data-sono-view
          data-enter="rise"
          data-reveal="together"
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
              <img
                src={persona.portrait.src}
                alt={persona.portrait.alt}
                className="sono-persona__portrait"
                decoding="async"
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
            <header className="sono-persona__header" data-sono-in="0">
              <p className="sono-eyebrow">{persona.subtitle}</p>
              <h2 className="sono-display sono-display--md">{persona.title}</h2>
              <p className="sono-body">{persona.note}</p>
            </header>
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
                    <span className="sono-persona__badge" aria-hidden="true">
                      <Icon className="sono-persona__icon" />
                    </span>
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
                  {/* Lo que piensa, lo que le cuesta y lo que el diseño
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
            cuelga la navegación principal; bajo el menú, el detalle y la
            personalización, y bajo el carrito, la confirmación. La línea
            naranja es el flujo de compra. Todo se revela a la vez */}
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
          </div>
          <div className="sono-sitemap__canvas">
            <svg
              className="sono-sitemap__lines"
              viewBox="0 0 1400 660"
              aria-hidden="true"
              data-sitemap-lines
            >
              <defs>
                <SonoArrowMarker id="sono-sitemap-arrow" size={28} />
              </defs>
              <path className="sono-sitemap__tree" d={SITEMAP_TREE} />
              {SITEMAP_HOPS.map(hop => (
                <path
                  key={hop}
                  className="sono-sitemap__hop"
                  d={hop}
                  markerEnd="url(#sono-sitemap-arrow)"
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
                    SITEMAP_KIND_CLASS[section.kind],
                    SITEMAP_SLOTS[index]
                  )}
                  data-sitemap-node
                >
                  <h3 className="sono-sitemap__title">
                    <span className="sono-sitemap__order" aria-hidden="true">
                      {index + 1}
                    </span>
                    {section.title}
                  </h3>
                  <ul className="sono-sitemap__chips">
                    {section.items.map(item => (
                      <li key={item} className="sono-sitemap__chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* 03.5 · Flujos principales: al entrar crece el primer diagrama y
            los demás se ven con las flechas, sin frenar el scroll. Cada
            diagrama crece en orden: las pantallas saltan, los caminos se
            dibujan, las ramas se abren y se juntan, y los caminos alternos
            van punteados */}
        <div
          className="sono-view sono-view--dark sono-flowmaps"
          data-sono-view
          data-enter="wipe"
          data-section="3"
          data-surface="dark"
          data-motion="flows"
        >
          <SonoFlowMaps flows={flows} />
        </div>

        {/* 04 · Sistema de diseño: un solo ambiente con scroll libre por
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
            <SonoDesignSystem system={designSystem} />
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
        <SonoJumpBand sections={story.sections} />
      </section>
      <CaseStoryCounter sections={story.sections} firstNumber={0} />
    </div>
  );
}
