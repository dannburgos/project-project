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

// Portada: lo primero que ve la persona. Foto de plantas a pantalla completa
// (por ahora, un fondo de color con una hoja), el logo y las tres formas de
// entrar. Al iniciar sesión, el botón se pulsa y sube un panel con el usuario
// y la contraseña.
export function PlantiSplashScreen({
  loginPhase = 'idle',
  userChars,
  passwordChars,
  isRemembered
}: PlantiSplashScreenProps) {
  const { splash } = plantiMessages;
  const isPressed = loginPhase !== 'idle';
  const isLoginOpen = loginPhase === 'sheet' || loginPhase === 'signing-in';

  return (
    <div className="planti-splash" data-tone="dark">
      <img
        src="/planti/splash-leaves.webp"
        alt=""
        className="planti-splash__photo"
        aria-hidden="true"
      />
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
