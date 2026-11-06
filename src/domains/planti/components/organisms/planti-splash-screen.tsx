import { Fragment } from 'react';

import { cn } from '@/lib/utils';

import { plantiMessages } from '../../messages';
import type { PlantiLoginPhase } from '../../types/planti-scene.types';
import { PlantiButton } from '../atoms/planti-button';
import { PlantiLoginSheet } from '../molecules/planti-login-sheet';

type PlantiSplashScreenProps = {
  loginPhase?: PlantiLoginPhase;
  userChars?: number;
  passwordChars?: number;
  isRemembered?: boolean;
};

// Portada: lo primero que ve la persona. Foto de hojas a pantalla completa, el
// logo y las formas de entrar. Antes de iniciar el recorrido es una carátula
// con solo las hojas y el nombre. Al iniciar sesión, el botón se pulsa y sube
// un panel con el usuario y la contraseña.
export function PlantiSplashScreen({
  loginPhase = 'idle',
  userChars,
  passwordChars,
  isRemembered
}: PlantiSplashScreenProps) {
  const { splash } = plantiMessages;
  const isCover = loginPhase === 'cover';
  const isPressed = loginPhase !== 'idle';
  const isLoginOpen = loginPhase === 'sheet' || loginPhase === 'signing-in';

  const photo = (
    <img
      src="/planti/splash-leaves.webp"
      alt=""
      className="planti-splash__photo"
      aria-hidden="true"
    />
  );

  if (isCover) {
    return (
      <div className="planti-splash planti-splash--cover" data-tone="dark">
        {photo}
        <h1 className="planti-splash__name">{splash.name}</h1>
      </div>
    );
  }

  return (
    <div className="planti-splash" data-tone="dark">
      {photo}
      <div className="planti-splash__brand">
        <p className="planti-splash__eyebrow">{splash.eyebrow}</p>
        <h1 className="planti-splash__name">{splash.name}</h1>
        <ul className="planti-splash__tagline">
          {splash.tagline.map((word, index) => (
            <Fragment key={word}>
              {index > 0 && <li aria-hidden="true">•</li>}
              <li>{word}</li>
            </Fragment>
          ))}
        </ul>
      </div>
      <div className="planti-splash__actions">
        <PlantiButton className={cn(isPressed && 'planti-button--pressed')}>
          {splash.signIn}
        </PlantiButton>
        <PlantiButton variant="light">{splash.signUp}</PlantiButton>
      </div>
      {isLoginOpen && (
        <>
          <div className="planti-splash__scrim" aria-hidden="true" />
          <PlantiLoginSheet
            userChars={userChars}
            passwordChars={passwordChars}
            isRemembered={isRemembered}
            isSigningIn={loginPhase === 'signing-in'}
          />
        </>
      )}
    </div>
  );
}
