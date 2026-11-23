'use client';

import { Check, Info, MapPin, X } from 'lucide-react';

import type { PetDesignSystem } from '@/content/pet-design-system.types';
import { usePetDsOverlay } from '@/hooks/use-pet-ds-overlay';
import { cn } from '@/lib/utils';

type PetDsLiveFeedbackProps = {
  feedback: PetDesignSystem['components']['feedback'];
};

// Mini celular con los cuatro avisos: cada botón abre el suyo en la pantalla
export function PetDsLiveFeedback({ feedback }: PetDsLiveFeedbackProps) {
  const { activeOverlay, handleOpen, handleClose } = usePetDsOverlay();

  return (
    <div className="pet-ds__live-feedback">
      <div className="pet-ds__triggers">
        {feedback.triggers.map(trigger => (
          <button
            key={trigger.id}
            type="button"
            className={cn(
              'pet-ds__chip',
              activeOverlay === trigger.id && 'pet-ds__chip--on'
            )}
            onClick={() => handleOpen(trigger.id)}
            aria-pressed={activeOverlay === trigger.id}
          >
            {trigger.label}
          </button>
        ))}
      </div>

      <div className="pet-ds__phone">
        <div className="pet-ds__phone-screen">
          <span className="pet-ds__card-title">{feedback.screenTitle}</span>
          <span className="pet-ds__phone-card">
            <MapPin aria-hidden="true" />
            {feedback.screenText}
          </span>
          <span className="pet-ds__phone-line" />
          <span className="pet-ds__phone-line pet-ds__phone-line--short" />
          <span className="pet-ds__phone-map" aria-hidden="true" />
        </div>

        {activeOverlay === 'toast' && (
          <span className="pet-ds__toast pet-ds__phone-toast" role="status">
            <Check aria-hidden="true" />
            {feedback.toast}
          </span>
        )}

        {activeOverlay === 'banner' && (
          <span className="pet-ds__banner pet-ds__phone-banner" role="status">
            <Info aria-hidden="true" />
            {feedback.banner}
            <button
              type="button"
              className="pet-ds__icon-button"
              onClick={handleClose}
              aria-label={feedback.closeLabel}
            >
              <X aria-hidden="true" />
            </button>
          </span>
        )}

        {activeOverlay === 'modal' && (
          <div className="pet-ds__phone-backdrop">
            <div
              className="pet-ds__modal"
              role="dialog"
              aria-label={feedback.modal.title}
            >
              <span className="pet-ds__card-title">{feedback.modal.title}</span>
              <span className="pet-ds__card-text">{feedback.modal.text}</span>
              <button
                type="button"
                className="pet-ds__button pet-ds__button--danger"
                onClick={handleClose}
              >
                {feedback.modal.confirm}
              </button>
              <button
                type="button"
                className="pet-ds__button pet-ds__button--ghost"
                onClick={handleClose}
              >
                {feedback.modal.dismiss}
              </button>
            </div>
          </div>
        )}

        {activeOverlay === 'sheet' && (
          <div className="pet-ds__phone-backdrop pet-ds__phone-backdrop--sheet">
            <button
              type="button"
              className="pet-ds__phone-dismiss"
              onClick={handleClose}
              aria-label={feedback.closeLabel}
            />
            <div
              className="pet-ds__sheet-demo"
              role="dialog"
              aria-label={feedback.sheet.title}
            >
              <span className="pet-ds__handle" />
              <span className="pet-ds__card-title">{feedback.sheet.title}</span>
              <span className="pet-ds__card-text">{feedback.sheet.text}</span>
              <button
                type="button"
                className="pet-ds__button pet-ds__button--primary"
                onClick={handleClose}
              >
                {feedback.sheet.action}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
