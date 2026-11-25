'use client';

import { ToyotaIcon } from '@/components/atoms/toyota-icon';
import { cn } from '@/lib/utils';
import { useAdvisorProfile } from '../../hooks/use-advisor-profile';
import { toyotaAdvisorMessages as copy } from '../../messages';
import type { ToyotaAnswers } from '../../types/toyota-advisor.types';
import { TaOptionTile } from '../atoms/ta-option-tile';
import { TaAdvisorBar } from '../molecules/ta-advisor-bar';
import { TaStepRail } from '../molecules/ta-step-rail';

type TaProfileScreenProps = {
  answers: ToyotaAnswers;
  // Parte que se está editando: abre el panel lateral
  editingPartId?: string;
};

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] as const;
const MAX_PRIORITIES = 3;

// Tu perfil, sobre superficie clara: a la izquierda la lectura del sistema
// (marcada como interpretación) y el paso siguiente; a la derecha cada
// respuesta con lo que suma y su «Editar». Al editar, la pregunta entra en un
// panel oscuro al costado y muestra el efecto antes de guardar
export function TaProfileScreen({
  answers,
  editingPartId
}: TaProfileScreenProps) {
  const profile = useAdvisorProfile(answers, editingPartId);
  const text = copy.profile;
  const part = profile.editingPart;
  const isFull =
    part?.kind === 'upToThree' &&
    profile.draftSelected.length >= MAX_PRIORITIES;

  return (
    <div className="ta-profile">
      <TaAdvisorBar tone="light" />
      <div className="ta-profile__rail">
        <TaStepRail
          blocks={profile.rail.blocks}
          counter={profile.rail.counter}
        />
      </div>

      <div className="ta-profile__body">
        <aside className="ta-profile__side">
          <p className="ta-eyebrow ta-eyebrow--red">
            <span className="ta-eyebrow__line" aria-hidden="true" />
            {text.eyebrow}
          </p>
          <h2 className="ta-profile__title">{text.title}</h2>
          <p className="ta-profile__lead">{text.lead}</p>

          <figure className="ta-reading">
            <figcaption className="ta-reading__label">
              <span className="ta-reading__spark" aria-hidden="true" />
              {text.readingLabel}
            </figcaption>
            <p className="ta-reading__text">
              {profile.segments.map((segment, index) =>
                segment.isKey ? (
                  <b key={index}>{segment.text}</b>
                ) : (
                  <span key={index}>{segment.text}</span>
                )
              )}
            </p>
            <p className="ta-reading__note">{text.readingNote}</p>
          </figure>

          <div className="ta-profile__next">
            <p className="ta-profile__count">
              <b>{profile.inBudget}</b>
              {text.inBudget}
            </p>
            <p className="ta-profile__leader">
              {text.leader}
              <b>{profile.leader}</b>
            </p>
            <a
              href="#"
              className="ta-button ta-button--primary ta-button--large"
            >
              {text.cta}
              <ToyotaIcon
                name="arrow-right"
                className="ta-button__arrow size-5"
              />
            </a>
            <a href="#" className="ta-profile__back">
              <ToyotaIcon name="arrow-left" className="size-4" />
              {text.back}
            </a>
          </div>
        </aside>

        <ol className="ta-profile__rows">
          {profile.rows.map(row => (
            <li
              key={row.id}
              className={cn(
                'ta-row',
                row.isEditing && 'ta-row--editing',
                row.values.length === 0 && 'ta-row--empty'
              )}
            >
              <span className="ta-row__label">{row.label}</span>
              <span className="ta-row__values">
                {row.values.length === 0 ? (
                  <span className="ta-row__empty">
                    {text.empty}
                    <i>{text.emptyNote}</i>
                  </span>
                ) : (
                  row.values.map(value => (
                    <span key={value} className="ta-row__value">
                      {value}
                    </span>
                  ))
                )}
              </span>
              <span className="ta-row__sums">
                {row.sums.length === 0 ? (
                  <span className="ta-row__none">{text.noScore}</span>
                ) : (
                  row.sums.map((sum, index) => (
                    <span key={`${sum}-${index}`} className="ta-row__sum">
                      +1 {sum}
                    </span>
                  ))
                )}
              </span>
              <button type="button" className="ta-row__edit">
                {row.isEditing ? text.editing : text.edit}
              </button>
            </li>
          ))}
        </ol>
      </div>

      {part && profile.editingQuestion && (
        <>
          <div className="ta-drawer__scrim" aria-hidden="true" />
          <section className="ta-drawer" aria-label={text.drawer.title}>
            <header className="ta-drawer__head">
              <p className="ta-drawer__eyebrow">{text.drawer.title}</p>
              <button
                type="button"
                className="ta-drawer__close"
                aria-label={text.drawer.cancel}
              >
                <ToyotaIcon name="close" className="size-5" />
              </button>
            </header>
            <p className="ta-ask__block">
              <span className="ta-ask__block-line" aria-hidden="true" />
              {copy.advisor.blocks[profile.editingQuestion.block]}
            </p>
            <h3 className="ta-drawer__title">
              {profile.editingQuestion.title}
            </h3>
            <div className="ta-drawer__options">
              {part.options
                .filter(option => !option.isUnsure)
                .map((option, index) => {
                  const isOn = profile.draftSelected.includes(option.id);
                  return (
                    <TaOptionTile
                      key={option.id}
                      label={option.label}
                      letter={LETTERS[index]}
                      icon={option.icon}
                      isMultiple={part.kind !== 'single'}
                      isSelected={isOn}
                      isDisabled={isFull && !isOn}
                      scoreHint={
                        option.tag ? `+1 ${copy.tags[option.tag]}` : undefined
                      }
                      onSelect={() => profile.handleDraftToggle(option.id)}
                    />
                  );
                })}
            </div>
            <p className="ta-drawer__impact">
              <span>{text.drawer.impact}</span>
              <b>{profile.draftLeader}</b>
              {text.drawer.impactLeader}
            </p>
            <footer className="ta-drawer__actions">
              <button type="button" className="ta-button ta-button--ghost">
                {text.drawer.cancel}
              </button>
              <button type="button" className="ta-button ta-button--primary">
                {text.drawer.save}
              </button>
              <span className="ta-drawer__keep">{text.drawer.keep}</span>
            </footer>
          </section>
        </>
      )}
    </div>
  );
}
