import { Loader2, Lock, User } from 'lucide-react';

import { cn } from '@/lib/utils';

import { plantiMessages } from '../../messages';
import { PlantiButton } from '../atoms/planti-button';
import { PlantiCheckbox } from '../atoms/planti-checkbox';
import { PlantiInputField } from './planti-input-field';

type PlantiLoginSheetProps = {
  userChars?: number;
  passwordChars?: number;
  isRemembered?: boolean;
  isSigningIn: boolean;
};

export function PlantiLoginSheet({
  userChars = Infinity,
  passwordChars = Infinity,
  isRemembered = true,
  isSigningIn
}: PlantiLoginSheetProps) {
  const { login } = plantiMessages;
  const isTypingUser = userChars > 0 && userChars < login.userValue.length;
  const isTypingPassword =
    passwordChars > 0 && passwordChars < login.passwordValue.length;

  return (
    <section className="planti-login-sheet" aria-label={login.title}>
      <h2 className="planti-login-sheet__title">{login.title}</h2>
      <div className="planti-login-sheet__fields">
        <PlantiInputField
          icon={User}
          placeholder={login.userPlaceholder}
          value={login.userValue.slice(0, userChars)}
          hasCaret={isTypingUser}
        />
        <PlantiInputField
          icon={Lock}
          placeholder={login.passwordPlaceholder}
          value={login.passwordValue.slice(0, passwordChars)}
          hasCaret={isTypingPassword}
        />
      </div>
      <div className="planti-login-sheet__options">
        <PlantiCheckbox label={login.remember} isChecked={isRemembered} />
        <p className="planti-login-sheet__forgot">{login.forgot}</p>
      </div>
      <PlantiButton
        className={cn(isSigningIn && 'planti-button--loading')}
        aria-busy={isSigningIn}
      >
        {isSigningIn ? (
          <>
            <Loader2 className="planti-button__spinner" aria-hidden="true" />
            {login.actionLoading}
          </>
        ) : (
          login.action
        )}
      </PlantiButton>
    </section>
  );
}
