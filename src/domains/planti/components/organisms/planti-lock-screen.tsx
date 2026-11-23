import { Camera, Flashlight } from 'lucide-react';

import { plantiMessages } from '../../messages';
import { PlantiLockNotice } from '../molecules/planti-lock-notice';

type PlantiLockScreenProps = {
  // El aviso se está tocando (en el recorrido)
  isPressed?: boolean;
};

// Pantalla bloqueada: donde empieza el capítulo 3. La persona no abre la app:
// le llega el aviso del cuidado y lo toca desde aquí.
export function PlantiLockScreen({ isPressed = false }: PlantiLockScreenProps) {
  const { lock } = plantiMessages.tasks;

  return (
    <div className="planti-screen planti-lock" data-tone="dark">
      <img
        src="/planti/splash-leaves.webp"
        alt=""
        className="planti-lock__photo"
        aria-hidden="true"
      />
      <p className="planti-lock__date">{lock.date}</p>
      <p className="planti-lock__time">{lock.time}</p>
      <PlantiLockNotice
        appName={lock.appName}
        when={lock.when}
        title={lock.title}
        text={lock.text}
        isPressed={isPressed}
      />
      <div className="planti-lock__tools" aria-hidden="true">
        <span className="planti-lock__tool">
          <Flashlight />
        </span>
        <span className="planti-lock__tool">
          <Camera />
        </span>
      </div>
    </div>
  );
}
