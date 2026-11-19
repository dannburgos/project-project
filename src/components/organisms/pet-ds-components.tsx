'use client';

import {
  ChevronLeft,
  Home,
  LoaderCircle,
  MapPin,
  PawPrint,
  Route,
  Star,
  Wifi
} from 'lucide-react';

import { PetDsLiveFeedback } from '@/components/molecules/pet-ds-live-feedback';
import { PetDsLiveField } from '@/components/molecules/pet-ds-live-field';
import { PetDsSheet } from '@/components/molecules/pet-ds-sheet';
import type { PetDesignSystem } from '@/content/pet-design-system.types';
import { usePetDsNavigation } from '@/hooks/use-pet-ds-navigation';
import { usePetDsPress } from '@/hooks/use-pet-ds-press';
import { fillTemplate } from '@/lib/case-story/fill-template.util';
import { cn } from '@/lib/utils';

const TAB_ICONS = [Home, PawPrint, Route] as const;

type PetDsComponentsProps = {
  components: PetDesignSystem['components'];
};

// Componentes base de la app, con sus variantes y estados. Los de prueba se
// pueden tocar
export function PetDsComponents({ components }: PetDsComponentsProps) {
  const { buttons, fields, cards, navigation, feedback, screens } = components;
  const { loadingId, handlePress } = usePetDsPress();
  const nav = usePetDsNavigation(navigation.stepCount);

  return (
    <div className="pet-ds__grid">
      <PetDsSheet title={buttons.title} note={buttons.note} isWide>
        <div className="pet-ds__matrix">
          <span />
          {buttons.states.map(state => (
            <span key={state.id} className="pet-ds__label">
              {state.name}
            </span>
          ))}
          {buttons.variants.map(variant => (
            <div key={variant.id} className="pet-ds__matrix-row">
              <span className="pet-ds__label">{variant.name}</span>
              {buttons.states.map(state => {
                const isLive = state.id === 'default';
                const isLoading =
                  state.id === 'loading' ||
                  (isLive && loadingId === variant.id);
                const className = cn(
                  'pet-ds__button',
                  `pet-ds__button--${variant.id}`,
                  isLive
                    ? isLoading && 'pet-ds__button--loading'
                    : `pet-ds__button--${state.id}`
                );
                const content = (
                  <>
                    {isLoading ? (
                      <LoaderCircle
                        className="pet-ds__spinner"
                        aria-hidden="true"
                      />
                    ) : (
                      <PawPrint aria-hidden="true" />
                    )}
                    {buttons.label}
                  </>
                );
                return isLive ? (
                  <button
                    key={state.id}
                    type="button"
                    className={cn(className, 'pet-ds__button--live')}
                    onClick={() => handlePress(variant.id)}
                    aria-busy={isLoading}
                  >
                    {content}
                  </button>
                ) : (
                  <span key={state.id} className={className}>
                    {content}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </PetDsSheet>

      <PetDsSheet title={fields.title}>
        <PetDsLiveField fields={fields} />
        <ul className="pet-ds__fields">
          {fields.samples.map(sample => (
            <li key={sample.state} className="pet-ds__field-sample">
              <span className="pet-ds__label">{sample.caption}</span>
              <span
                className={cn(
                  'pet-ds__field',
                  `pet-ds__field--${sample.state}`
                )}
              >
                <span className="pet-ds__field-label">{fields.label}</span>
                <span className="pet-ds__field-box">
                  {sample.value || (
                    <span className="pet-ds__field-placeholder">
                      {fields.placeholder}
                    </span>
                  )}
                  {sample.state === 'focus' && (
                    <span className="pet-ds__caret" />
                  )}
                </span>
                <span className="pet-ds__field-message">{sample.message}</span>
              </span>
            </li>
          ))}
        </ul>
      </PetDsSheet>

      <PetDsSheet title={feedback.title} note={feedback.note}>
        <PetDsLiveFeedback feedback={feedback} />
      </PetDsSheet>

      <PetDsSheet title={cards.title}>
        <div className="pet-ds__stack">
          <div className="pet-ds__card">
            <span className="pet-ds__avatar pet-ds__avatar--pet">
              <PawPrint aria-hidden="true" />
            </span>
            <span className="pet-ds__card-body">
              <span className="pet-ds__card-title">{cards.pet.name}</span>
              <span className="pet-ds__card-text">{cards.pet.detail}</span>
            </span>
            <span className="pet-ds__tag">{cards.pet.tag}</span>
          </div>
          <div className="pet-ds__card">
            <span className="pet-ds__avatar">
              {cards.driver.name.charAt(0)}
            </span>
            <span className="pet-ds__card-body">
              <span className="pet-ds__card-title">{cards.driver.name}</span>
              <span className="pet-ds__card-text">{cards.driver.vehicle}</span>
              <span className="pet-ds__rating">
                <Star aria-hidden="true" />
                {cards.driver.rating}
              </span>
            </span>
            <span className="pet-ds__tag">{cards.driver.tag}</span>
          </div>
          <div className="pet-ds__card">
            <span className="pet-ds__avatar pet-ds__avatar--soft">
              <MapPin aria-hidden="true" />
            </span>
            <span className="pet-ds__card-body">
              <span className="pet-ds__card-title">{cards.trip.route}</span>
              <span className="pet-ds__card-text">{cards.trip.date}</span>
            </span>
            <span className="pet-ds__card-end">
              <span className="pet-ds__card-title">{cards.trip.price}</span>
              <span className="pet-ds__tag pet-ds__tag--success">
                {cards.trip.tag}
              </span>
            </span>
          </div>
        </div>
      </PetDsSheet>

      <PetDsSheet title={navigation.title} note={navigation.note}>
        <div className="pet-ds__stack">
          <div className="pet-ds__header">
            <span className="pet-ds__round" aria-label={navigation.back}>
              <ChevronLeft aria-hidden="true" />
            </span>
            <span className="pet-ds__header-title">{navigation.header}</span>
          </div>
          <div className="pet-ds__steps">
            <span className="pet-ds__steps-bars">
              {Array.from({ length: navigation.stepCount }, (_, index) => (
                <span
                  key={index}
                  className={cn(
                    'pet-ds__steps-bar',
                    index < nav.step && 'pet-ds__steps-bar--on'
                  )}
                />
              ))}
            </span>
            <span className="pet-ds__steps-foot">
              <span className="pet-ds__card-text" aria-live="polite">
                {fillTemplate(navigation.stepLabel, {
                  current: nav.step,
                  total: navigation.stepCount
                })}
              </span>
              <span className="pet-ds__steps-actions">
                <button
                  type="button"
                  className="pet-ds__button pet-ds__button--ghost pet-ds__button--small"
                  onClick={nav.handlePrevious}
                  disabled={!nav.canGoBack}
                >
                  {navigation.previousLabel}
                </button>
                <button
                  type="button"
                  className="pet-ds__button pet-ds__button--primary pet-ds__button--small"
                  onClick={nav.handleNext}
                  disabled={!nav.canGoNext}
                >
                  {navigation.nextLabel}
                </button>
              </span>
            </span>
          </div>
          <div className="pet-ds__tabbar" role="tablist">
            {navigation.tabs.map((tab, index) => {
              const Icon = TAB_ICONS[index] ?? Home;
              const isActive = index === nav.activeTab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={tab}
                  className={cn('pet-ds__tab', isActive && 'pet-ds__tab--on')}
                  onClick={() => nav.handleTab(index)}
                >
                  <Icon aria-hidden="true" />
                  <span className="pet-ds__tab-label">{tab}</span>
                </button>
              );
            })}
          </div>
        </div>
      </PetDsSheet>

      <PetDsSheet title={screens.title} isWide>
        <div className="pet-ds__screens">
          <div className="pet-ds__screen">
            <span className="pet-ds__screen-icon">
              <PawPrint aria-hidden="true" />
            </span>
            <span className="pet-ds__card-title">{screens.empty.title}</span>
            <span className="pet-ds__card-text">{screens.empty.text}</span>
            <span className="pet-ds__button pet-ds__button--primary">
              {screens.empty.action}
            </span>
          </div>
          <div className="pet-ds__screen">
            <span className="pet-ds__screen-icon pet-ds__screen-icon--pulse">
              <LoaderCircle className="pet-ds__spinner" aria-hidden="true" />
            </span>
            <span className="pet-ds__card-title">{screens.loading.title}</span>
            <span className="pet-ds__card-text">{screens.loading.text}</span>
          </div>
          <div className="pet-ds__screen">
            <span className="pet-ds__screen-icon pet-ds__screen-icon--error">
              <Wifi aria-hidden="true" />
            </span>
            <span className="pet-ds__card-title">{screens.error.title}</span>
            <span className="pet-ds__card-text">{screens.error.text}</span>
            <span className="pet-ds__button pet-ds__button--secondary">
              {screens.error.action}
            </span>
          </div>
        </div>
      </PetDsSheet>
    </div>
  );
}
