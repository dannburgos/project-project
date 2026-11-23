import { Leaf } from 'lucide-react';

import { cn } from '@/lib/utils';

type PlantiLockNoticeProps = {
  appName: string;
  when: string;
  title: string;
  text: string;
  // El aviso se está tocando (en el recorrido)
  isPressed?: boolean;
};

// El aviso de Planti como llega al celular bloqueado: la app, cuándo llegó y
// qué le toca hacer a la persona
export function PlantiLockNotice({
  appName,
  when,
  title,
  text,
  isPressed = false
}: PlantiLockNoticeProps) {
  return (
    <div
      className={cn(
        'planti-lock-notice',
        isPressed && 'planti-lock-notice--pressed'
      )}
    >
      <span className="planti-lock-notice__app" aria-hidden="true">
        <Leaf />
      </span>
      <div className="planti-lock-notice__body">
        <p className="planti-lock-notice__meta">
          <span>{appName}</span>
          <span>{when}</span>
        </p>
        <p className="planti-lock-notice__title">{title}</p>
        <p className="planti-lock-notice__text">{text}</p>
      </div>
    </div>
  );
}
