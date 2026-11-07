'use client';

import { Check, X } from 'lucide-react';
import { Space_Grotesk as spaceGroteskFont } from 'next/font/google';
import type { ReactNode } from 'react';

import { DsCardArt } from '@/components/molecules/ds-card-art';
import type {
  DesignSystemStory as DesignSystemStoryContent,
  DsTopic
} from '@/content/design-system-story.types';
import { useDesignSystemStory } from '@/hooks/use-design-system-story';
import { cn } from '@/lib/utils';

const spaceGrotesk = spaceGroteskFont({
  variable: '--font-ds',
  subsets: ['latin'],
  weight: ['400', '500', '700']
});

type DesignSystemStoryProps = {
  story: DesignSystemStoryContent;
};

type DsDocProps = {
  topic: DsTopic;
  note: string;
  example: string;
  children: ReactNode;
};

// Un tema documentado: su nombre, de qué trata y sus ejemplos
function DsDoc({ topic, note, example, children }: DsDocProps) {
  return (
    <section
      id={`ds-${topic.id}`}
      className={cn('ds-doc', `ds-doc--${topic.id}`)}
      aria-labelledby={`ds-${topic.id}-title`}
    >
      <header className="ds-doc__head">
        <p className="ds-doc__group">{topic.group}</p>
        <h3 id={`ds-${topic.id}-title`} className="ds-doc__title">
          {topic.name}
        </h3>
        <p className="ds-doc__summary">{topic.summary}</p>
        <p className="ds-doc__note">
          <span className="ds-doc__badge">{example}</span>
          {note}
        </p>
      </header>
      <div className="ds-doc__body">{children}</div>
    </section>
  );
}

// Caso del sistema de diseño (referencia: brand.dropbox.com). Arriba, un
// mosaico de tarjetas que se arma al bajar alrededor del cuadro del logo;
// cada tarjeta lleva a su tema. Debajo, la documentación. Todo en grises con
// un solo acento amarillo mientras se define la marca.
export function DesignSystemStory({ story }: DesignSystemStoryProps) {
  const ref = useDesignSystemStory<HTMLDivElement>();
  const { hero, labels, topics } = story;
  const topicById = (id: DsTopic['id']) =>
    topics.find(topic => topic.id === id) ?? topics[0];

  return (
    <div
      ref={ref}
      className={cn('ds-story', spaceGrotesk.variable)}
      data-surface="light"
    >
      <section className="ds-mosaic" data-ds-mosaic aria-labelledby="ds-title">
        <span className="ds-mosaic__lines" aria-hidden="true" data-ds-lines />
        <div className="ds-mosaic__frame">
          <nav className="ds-mosaic__grid" aria-label={labels.topicsNav}>
            {topics.map(topic => (
              <a
                key={topic.id}
                href={`#ds-${topic.id}`}
                className={cn('ds-card', `ds-card--${topic.id}`)}
                aria-label={`${labels.goTo} ${topic.name}`}
                data-ds-card
              >
                <span className="ds-card__name">{topic.name}</span>
                <DsCardArt topic={topic.id} />
              </a>
            ))}
          </nav>

          {/* La tarjeta central: primero clara con la frase del sistema,
              luego oscura con su descripción y al final el cuadro del logo */}
          <div className="ds-tile" data-ds-tile>
            <div className="ds-tile__statement" data-ds-statement>
              <p className="ds-tile__eyebrow">{hero.eyebrow}</p>
              <h1 id="ds-title" className="ds-tile__title">
                {hero.title}
              </h1>
            </div>
            <p className="ds-tile__text" data-ds-text>
              {hero.text}
            </p>
            <span className="ds-tile__mark" aria-hidden="true">
              {hero.mark}
            </span>
          </div>
        </div>

        <p className="ds-mosaic__hint" aria-hidden="true" data-ds-hint>
          {hero.hint}
        </p>
      </section>

      <div className="ds-docs">
        <header className="ds-docs__intro">
          <h2 className="ds-docs__title">{story.docsIntro.title}</h2>
          <p className="ds-docs__text">{story.docsIntro.text}</p>
        </header>

        <DsDoc
          topic={topicById('color')}
          note={labels.pending}
          example={labels.example}
        >
          <ul className="ds-swatches">
            {story.color.swatches.map(swatch => (
              <li key={swatch.hex} className="ds-swatch">
                <span
                  className={cn(
                    'ds-swatch__chip',
                    `ds-swatch__chip--${swatch.hex.slice(1)}`
                  )}
                  aria-hidden="true"
                />
                <span className="ds-swatch__name">{swatch.name}</span>
                <span className="ds-swatch__hex">{swatch.hex}</span>
                <span className="ds-swatch__role">{swatch.role}</span>
              </li>
            ))}
          </ul>
        </DsDoc>

        <DsDoc
          topic={topicById('typography')}
          note={labels.pending}
          example={labels.example}
        >
          <p className="ds-type__family">{story.typography.family}</p>
          <ul className="ds-type">
            {story.typography.steps.map((step, index) => (
              <li
                key={step.name}
                className={cn('ds-type__step', `ds-type__step--${index}`)}
              >
                <span className="ds-type__meta">
                  {step.name} · {step.size}
                </span>
                <span className="ds-type__sample">{step.sample}</span>
              </li>
            ))}
          </ul>
        </DsDoc>

        <DsDoc
          topic={topicById('iconography')}
          note={labels.pending}
          example={labels.example}
        >
          <ul className="ds-icons">
            {story.iconography.names.map(name => (
              <li key={name} className="ds-icons__item">
                <span className="ds-icons__box" aria-hidden="true" />
                {name}
              </li>
            ))}
          </ul>
          <ul className="ds-rules">
            {story.iconography.rules.map(rule => (
              <li key={rule.title} className="ds-rule">
                <span className="ds-rule__title">{rule.title}</span>
                {rule.text}
              </li>
            ))}
          </ul>
        </DsDoc>

        <DsDoc
          topic={topicById('spacing')}
          note={labels.pending}
          example={labels.example}
        >
          <ul className="ds-space">
            {story.spacing.steps.map(step => (
              <li key={step} className="ds-space__step">
                <span className="ds-space__value">{step} px</span>
                <span
                  className={cn('ds-space__bar', `ds-space__bar--${step}`)}
                  aria-hidden="true"
                />
              </li>
            ))}
          </ul>
          <ul className="ds-rules">
            {story.spacing.rules.map(rule => (
              <li key={rule.title} className="ds-rule">
                <span className="ds-rule__title">{rule.title}</span>
                {rule.text}
              </li>
            ))}
          </ul>
        </DsDoc>

        <DsDoc
          topic={topicById('components')}
          note={labels.pending}
          example={labels.example}
        >
          <div className="ds-components">
            <div className="ds-components__row">
              {story.components.buttons.map((button, index) => (
                <button
                  key={button}
                  type="button"
                  className={cn('ds-button', `ds-button--${index}`)}
                >
                  {button}
                </button>
              ))}
            </div>
            <ul className="ds-components__states">
              {story.components.states.map((state, index) => (
                <li key={state} className="ds-components__state">
                  <span
                    className={cn(
                      'ds-button',
                      'ds-button--0',
                      `ds-button--state-${index}`
                    )}
                    aria-hidden="true"
                  >
                    {story.components.buttons[0]}
                  </span>
                  {state}
                </li>
              ))}
            </ul>
            <label className="ds-field">
              <span className="ds-field__label">
                {story.components.inputLabel}
              </span>
              <input
                className="ds-field__input"
                type="email"
                placeholder={story.components.inputPlaceholder}
              />
              <span className="ds-field__help">
                {story.components.inputHelp}
              </span>
            </label>
          </div>
        </DsDoc>

        <DsDoc
          topic={topicById('voice')}
          note={labels.pending}
          example={labels.example}
        >
          <ul className="ds-rules ds-rules--three">
            {story.voice.principles.map(rule => (
              <li key={rule.title} className="ds-rule">
                <span className="ds-rule__title">{rule.title}</span>
                {rule.text}
              </li>
            ))}
          </ul>
          <ul className="ds-dodont">
            {story.voice.examples.map(example => {
              const Icon = example.isDo ? Check : X;
              return (
                <li
                  key={example.text}
                  className={cn(
                    'ds-dodont__item',
                    example.isDo && 'ds-dodont__item--do'
                  )}
                >
                  <span className="ds-dodont__label">
                    <Icon aria-hidden="true" />
                    {example.label}
                  </span>
                  {example.text}
                </li>
              );
            })}
          </ul>
        </DsDoc>

        <DsDoc
          topic={topicById('motion')}
          note={labels.pending}
          example={labels.example}
        >
          <ul className="ds-motion">
            {story.motion.tokens.map((token, index) => (
              <li key={token.name} className="ds-motion__token">
                <span className="ds-motion__track" aria-hidden="true">
                  <span
                    className={cn('ds-motion__dot', `ds-motion__dot--${index}`)}
                  />
                </span>
                <span className="ds-motion__name">
                  {token.name} · {token.value}
                </span>
                <span className="ds-motion__use">{token.use}</span>
              </li>
            ))}
          </ul>
        </DsDoc>

        <DsDoc
          topic={topicById('accessibility')}
          note={labels.pending}
          example={labels.example}
        >
          <ul className="ds-rules ds-rules--two">
            {story.accessibility.rules.map(rule => (
              <li key={rule.title} className="ds-rule">
                <span className="ds-rule__title">{rule.title}</span>
                {rule.text}
              </li>
            ))}
          </ul>
        </DsDoc>
      </div>
    </div>
  );
}
