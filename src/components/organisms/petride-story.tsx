'use client';

import Image from 'next/image';
import { Layers } from 'lucide-react';
import { Outfit as outfitFont } from 'next/font/google';

import { PetFillText } from '@/components/atoms/pet-fill-text';
import { PetFlower } from '@/components/atoms/pet-flower';
import { PetLetters } from '@/components/atoms/pet-letters';
import { PetPlaceholder } from '@/components/atoms/pet-placeholder';
import { PetChapterHead } from '@/components/molecules/pet-chapter-head';
import { PetFlowExplorer } from '@/components/molecules/pet-flow-explorer';
import { PetModuleTitle } from '@/components/molecules/pet-module-title';
import { PetSideNav } from '@/components/molecules/pet-side-nav';
import type { PetrideStory as PetrideStoryContent } from '@/content/petride-story.types';
import { usePetrideStory } from '@/hooks/use-petride-story';
import { cn } from '@/lib/utils';

// Outfit, geométrica y gruesa en los títulos (referencia: fineacts.co)
const outfit = outfitFont({
  variable: '--font-pet',
  subsets: ['latin'],
  weight: ['400', '500', '800']
});

// Velocidad de cada columna del muro de wireframes
const WIREFRAME_SPEEDS = [0.3, -0.2, 0.4, -0.3] as const;

type PetrideStoryProps = {
  story: PetrideStoryContent;
};

// Caso de PetRide (app de transporte para viajar con mascotas). Scroll libre
// sobre fondo noche con la marca en acentos: índigo, lima, periwinkle y
// cloud. Seis capítulos con submenú lateral de punticos.
export function PetrideStory({ story }: PetrideStoryProps) {
  const ref = usePetrideStory<HTMLDivElement>();
  const { intro, research, user, solution, architecture, design } = story;

  return (
    <div
      ref={ref}
      className={cn('pet-story', outfit.variable)}
      data-case-story
      data-surface="dark"
    >
      <PetSideNav
        sections={story.sections}
        label={story.labels.nav}
        openLabel={story.labels.navOpen}
      />
      <div className="pet-curtain" data-pet-curtain aria-hidden="true">
        <span className="pet-curtain__mask">
          <span className="pet-curtain__label" data-pet-curtain-label />
        </span>
      </div>

      {/* 01 · Introducción */}
      <section
        className="pet-chapter"
        id="petride-0"
        data-pet-chapter="0"
        aria-labelledby="petride-title"
      >
        <div className="pet-hero">
          <h1
            id="petride-title"
            className="pet-hero__title"
            tabIndex={-1}
            data-pet-focus
          >
            <PetLetters text={intro.wordmark} trigger="load" />
          </h1>
          <PetFlower className="pet-hero__flower" />
          <p className="pet-hero__tagline" data-pet-rise>
            {intro.tagline}
          </p>
          <dl className="pet-hero__facts">
            {intro.facts.map(fact => (
              <div key={fact.title} className="pet-hero__fact" data-pet-rise>
                <dt className="pet-hero__fact-label">{fact.title}</dt>
                <dd className="pet-hero__fact-text">{fact.text}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="pet-cover" data-pet-expand>
          <PetPlaceholder
            label={intro.coverLabel}
            className="pet-cover__media"
          />
        </div>

        <div className="pet-process">
          <PetModuleTitle text={intro.processTitle} as="h2" />
          {/* Bento de seis bloques de distinto tamaño, con las formas de la
              marca. Se lee de izquierda a derecha y de arriba abajo, y cada
              bloque tiene una flecha hacia el siguiente. Al llegar saltan con
              rebote, como el collage de hallazgos */}
          <ol className="pet-process__bento" data-pet-shapes>
            {intro.process.map((stage, index) => (
              <li
                key={stage.title}
                className={cn(
                  'pet-process__tile',
                  `pet-process__tile--${index}`
                )}
                data-pet-shape
              >
                <h3 className="pet-process__stage-title">{stage.title}</h3>
                <p className="pet-process__stage-text">{stage.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 02 · Investigación */}
      <section
        className="pet-chapter"
        id="petride-1"
        data-pet-chapter="1"
        aria-label={story.sections[1]}
      >
        <PetChapterHead head={research.head} />

        <div className="pet-problem">
          <p className="pet-label">{research.problemLabel}</p>
          <PetFillText text={research.problem} className="pet-problem__text" />
          <div className="pet-problem__cards">
            {[research.opportunity, research.method].map((card, index) => (
              <article
                key={card.title}
                className={cn(
                  'pet-card',
                  index === 0 ? 'pet-card--lime' : 'pet-card--outline'
                )}
                data-pet-rise
              >
                <h3 className="pet-card__title">{card.title}</h3>
                <p className="pet-card__text">{card.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="pet-module">
          <PetModuleTitle text={research.benchmarkTitle} />
          <p className="pet-module__lead" data-pet-rise>
            {research.benchmarkLead}
          </p>
          <div
            className="pet-bench"
            role="region"
            aria-label={research.benchmarkTitle}
            tabIndex={0}
            data-pet-pop-group
          >
            <table className="pet-bench__table">
              <caption className="sr-only">{research.benchmarkLead}</caption>
              <thead>
                <tr>
                  <th scope="col" className="pet-bench__corner">
                    {research.benchmarkFeatureLabel}
                  </th>
                  {research.competitors.map((competitor, index) => {
                    const logo = research.competitorLogos[index];
                    return (
                      <th
                        key={competitor}
                        scope="col"
                        className="pet-bench__brand"
                      >
                        <span
                          className={cn(
                            'pet-bench__logo',
                            `pet-bench__logo--${logo.tone}`
                          )}
                        >
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={192}
                            height={144}
                            className="pet-bench__logo-img"
                          />
                        </span>
                        {competitor}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {research.benchmark.map(row => (
                  <tr key={row.feature} className="pet-bench__row">
                    <th scope="row" className="pet-bench__feature">
                      {row.feature}
                    </th>
                    {row.cells.map((cell, index) => (
                      <td
                        key={research.competitors[index]}
                        className="pet-bench__cell"
                      >
                        <span
                          className={cn(
                            'pet-bench__badge',
                            `pet-bench__badge--${cell.state}`
                          )}
                          data-pet-pop
                        >
                          {research.benchmarkStates[cell.state]}
                        </span>
                        <span className="pet-bench__note">{cell.note}</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="pet-module">
          <PetModuleTitle text={research.findingsTitle} />
          {/* Collage de hallazgos (referencia: Quantitative Research): los
              hallazgos en formas de colores, fotos de mascotas, soles que
              giran y la flor de la marca en una píldora alta */}
          <ul className="pet-collage" data-pet-shapes>
            {research.findings.map((finding, index) => (
              <li
                key={finding}
                className={cn(
                  'pet-collage__item',
                  `pet-collage__item--finding-${index}`
                )}
                data-pet-shape
              >
                {finding}
              </li>
            ))}
            {research.findingsPhotos.map((photo, index) => (
              <li
                key={photo.label}
                className={cn(
                  'pet-collage__photo',
                  `pet-collage__photo--${index}`
                )}
                data-pet-shape
              >
                {photo.image ? (
                  <Image
                    src={photo.image.src}
                    alt={photo.image.alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    quality={92}
                    className="pet-collage__img"
                  />
                ) : (
                  <PetPlaceholder
                    label={photo.label}
                    className="pet-collage__media"
                  />
                )}
              </li>
            ))}
            <li
              className="pet-collage__item pet-collage__item--opportunity"
              data-pet-shape
            >
              <span className="pet-collage__number">
                {research.opportunity.title}
              </span>
              {research.findingsOpportunity}
            </li>
            <li
              className="pet-collage__photo pet-collage__photo--portrait"
              data-pet-shape
            >
              <Image
                src={research.findingsPortrait.src}
                alt={research.findingsPortrait.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                quality={92}
                className="pet-collage__img"
              />
            </li>
          </ul>
        </div>
      </section>

      {/* 03 · Usuario */}
      <section
        className="pet-chapter"
        id="petride-2"
        data-pet-chapter="2"
        aria-label={story.sections[2]}
      >
        <PetChapterHead head={user.head} />

        <div className="pet-persona">
          <div className="pet-persona__photo" data-pet-reveal>
            <Image
              src={user.personaPhoto.src}
              alt={user.personaPhoto.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              quality={92}
              className="pet-persona__media"
            />
          </div>
          <div className="pet-persona__body">
            <h3 className="pet-persona__name">
              <PetLetters text={user.personaName} />
            </h3>
            <ul className="pet-persona__tags" data-pet-pop-group>
              {user.personaTags.map(tag => (
                <li
                  key={tag}
                  className="pet-chip pet-chip--outline"
                  data-pet-pop
                >
                  {tag}
                </li>
              ))}
            </ul>
            <p className="pet-persona__bio" data-pet-rise>
              {user.personaBio}
            </p>
            <div className="pet-persona__blocks">
              {user.personaBlocks.map(block => (
                <div
                  key={block.title}
                  className="pet-persona__block"
                  data-pet-rise
                >
                  <h4 className="pet-persona__block-title">{block.title}</h4>
                  <ul className="pet-list">
                    {block.items.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pet-module">
          <PetModuleTitle text={user.empathyTitle} />
          <div className="pet-empathy" data-pet-lines>
            <span
              className="pet-empathy__line pet-empathy__line--a"
              aria-hidden="true"
              data-pet-line
            >
              <span className="pet-empathy__fill" data-pet-line-fill />
            </span>
            <span
              className="pet-empathy__line pet-empathy__line--b"
              aria-hidden="true"
              data-pet-line
            >
              <span className="pet-empathy__fill" data-pet-line-fill />
            </span>
            <div className="pet-empathy__center" data-pet-grow>
              <span className="pet-empathy__spin" data-pet-spin="45">
                <PetFlower />
              </span>
            </div>
            {user.empathy.map((block, index) => (
              <div
                key={block.title}
                className={cn(
                  'pet-empathy__block',
                  `pet-empathy__block--${index}`
                )}
                data-pet-rise
              >
                <h4 className="pet-empathy__title">{block.title}</h4>
                <ul className="pet-empathy__items">
                  {block.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pet-journey">
          <div className="pet-journey__head">
            <PetModuleTitle text={user.journeyTitle} />
          </div>
          <div className="pet-journey__board" data-pet-journey-board>
            <ol className="pet-journey__stages">
              {user.journey.map(stage => (
                <li
                  key={stage.name}
                  className="pet-journey__stage"
                  data-pet-journey-stage
                >
                  <h4 className="pet-journey__name">{stage.name}</h4>
                  <dl className="pet-journey__card">
                    <div>
                      <dt className="pet-journey__key">
                        {user.journeyLabels.emotion}
                      </dt>
                      <dd className="pet-journey__emotion">{stage.emotion}</dd>
                    </div>
                    <div>
                      <dt className="pet-journey__key">
                        {user.journeyLabels.opportunity}
                      </dt>
                      <dd className="pet-journey__opportunity">
                        {stage.opportunity}
                      </dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 04 · Solución */}
      <section
        className="pet-chapter"
        id="petride-3"
        data-pet-chapter="3"
        aria-label={story.sections[3]}
      >
        <PetChapterHead head={solution.head} />

        <div className="pet-solution">
          <div className="pet-solution__problems">
            <h3 className="pet-module__subtitle" data-pet-rise>
              {solution.problemsTitle}
            </h3>
            <ol className="pet-solution__list" data-pet-slides>
              {solution.problems.map(item => (
                <li
                  key={item.problem}
                  className="pet-solution__tile"
                  data-pet-slide
                >
                  <span className="pet-solution__problem">{item.problem}</span>
                  <span className="pet-solution__opportunity">
                    {item.opportunity}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="pet-solution__block" data-pet-grow>
            <h3 className="pet-solution__label">{solution.solutionLabel}</h3>
            <p className="pet-solution__text">{solution.solution}</p>
          </div>
        </div>

        <div className="pet-module">
          <PetModuleTitle text={solution.actorsTitle} />
          <ul className="pet-actors">
            {solution.actors.map((actor, index) => (
              <li key={actor.name} className="pet-actor" data-pet-rise>
                <span
                  className={cn(
                    'pet-actor__shape',
                    `pet-actor__shape--${index}`
                  )}
                  aria-hidden="true"
                  data-pet-spin
                />
                <h4 className="pet-actor__name">{actor.name}</h4>
                <p className="pet-actor__role">{actor.role}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="pet-module pet-goals">
          <div>
            <h3 className="pet-module__subtitle" data-pet-rise>
              {solution.goalsTitle}
            </h3>
            <ol className="pet-goals__list">
              {solution.goals.map((goal, index) => (
                <li key={goal} className="pet-goals__item" data-pet-rise>
                  <span className="pet-goals__number" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {goal}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="pet-module__subtitle" data-pet-rise>
              {solution.mvpTitle}
            </h3>
            <ul className="pet-chips" data-pet-pop-group>
              {solution.mvp.map(item => (
                <li
                  key={item}
                  className="pet-chip pet-chip--indigo"
                  data-pet-pop
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 05 · Arquitectura */}
      <section
        className="pet-chapter"
        id="petride-4"
        data-pet-chapter="4"
        aria-label={story.sections[4]}
      >
        <PetChapterHead head={architecture.head} />

        <div className="pet-module">
          <PetModuleTitle text={architecture.siteMapTitle} />
          <p className="pet-module__lead" data-pet-rise>
            {architecture.siteMapLead}
          </p>
          <div className="pet-sitemap" data-pet-lines>
            <div className="pet-sitemap__center" data-pet-grow>
              <PetFlower />
              <span className="pet-sitemap__brand">
                {architecture.siteMapCenter}
              </span>
            </div>
            {architecture.siteMap.map((group, index) => (
              <div
                key={group.name}
                className={cn(
                  'pet-sitemap__group',
                  `pet-sitemap__group--${index}`
                )}
              >
                <span
                  className="pet-sitemap__trunk"
                  aria-hidden="true"
                  data-pet-line
                />
                <h4 className="pet-sitemap__node" data-pet-rise>
                  {group.name}
                </h4>
                <ul className="pet-sitemap__screens">
                  {group.screens.map(screen => (
                    <li
                      key={screen}
                      className="pet-sitemap__screen"
                      data-pet-rise
                    >
                      {screen}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Dos líneas con los tres flujos que corren en sentidos contrarios */}
        <div className="pet-marquee" aria-hidden="true">
          {['forward', 'reverse'].map(direction => (
            <div
              key={direction}
              className={cn(
                'pet-marquee__row',
                `pet-marquee__row--${direction}`
              )}
            >
              {[0, 1].map(copy => (
                <div key={copy} className="pet-marquee__track">
                  {intro.marquee.map(item => (
                    <span key={item} className="pet-marquee__item">
                      {item}
                      <PetFlower
                        className="pet-marquee__flower"
                        hasPaw={false}
                      />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="pet-module">
          <PetModuleTitle text={architecture.flowsTitle} />
          <p className="pet-module__lead" data-pet-rise>
            {architecture.flowsLead}
          </p>
          <PetFlowExplorer
            flows={architecture.flows}
            hint={architecture.flowsHint}
            branchLabel={architecture.branchLabel}
          />
        </div>
      </section>

      {/* 06 · Diseño */}
      <section
        className="pet-chapter"
        id="petride-5"
        data-pet-chapter="5"
        aria-label={story.sections[5]}
      >
        <PetChapterHead head={design.head} />

        <div className="pet-system">
          <span className="pet-system__ghost" aria-hidden="true" data-pet-ghost>
            {design.systemGhost}
          </span>
          <div className="pet-system__frame" data-pet-rise>
            <Layers className="pet-system__icon" aria-hidden="true" />
            <h3 className="pet-system__title">{design.systemTitle}</h3>
            <p className="pet-system__text">{design.systemText}</p>
          </div>
        </div>
        <div className="pet-wall">
          <div className="pet-wall__copy">
            <PetModuleTitle text={design.wireframesTitle} />
          </div>
          <div
            className="pet-wall__frame"
            role="img"
            aria-label={design.wireframesTitle}
          >
            <div className="pet-wall__grid">
              {WIREFRAME_SPEEDS.map((speed, column) => (
                <div
                  key={speed}
                  className="pet-wall__column"
                  data-pet-speed={speed}
                >
                  {Array.from(
                    { length: design.wireframeCount / 4 },
                    (_, index) => (
                      <span
                        key={`${column}-${index}`}
                        className="pet-wall__phone"
                        aria-hidden="true"
                      />
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pet-flowshow" data-pet-flowshow data-pet-trace>
          <span
            className="pet-flowshow__ghost"
            aria-hidden="true"
            data-pet-ghost
          >
            {design.flowGhost}
          </span>
          <div className="pet-flowshow__intro">
            <h3 className="pet-module__title">
              <PetLetters text={design.flowTitle} />
            </h3>
            <p className="pet-module__lead" data-pet-rise>
              {design.flowLead}
            </p>
          </div>
          <svg className="pet-flowshow__wires" aria-hidden="true">
            <path className="pet-flowshow__wire" pathLength={1} data-pet-wire />
          </svg>
          {design.flowScreens.map((screen, index) => (
            <div
              key={screen.label}
              className={cn(
                'pet-flowshow__step',
                `pet-flowshow__step--${index}`
              )}
            >
              <div
                className="pet-flowshow__phone"
                data-pet-rise
                data-pet-wire-end={index === 0 ? 'from' : 'to'}
              >
                <PetPlaceholder
                  label={screen.label}
                  className="pet-flowshow__screen"
                />
              </div>
              <div className="pet-flowshow__text" data-pet-rise>
                <h4 className="pet-flowshow__title">{screen.title}</h4>
                <p className="pet-flowshow__body">{screen.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
