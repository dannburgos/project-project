import { Check } from 'lucide-react';

type PlantiNoticeDoneProps = {
  title: string;
  text: string;
  time: string;
};

// Un aviso de antes, ya atendido: más tenue, con un check
export function PlantiNoticeDone({ title, text, time }: PlantiNoticeDoneProps) {
  return (
    <div className="planti-notice-done">
      <span className="planti-notice-done__check" aria-hidden="true">
        <Check />
      </span>
      <div className="planti-notice-done__body">
        <p className="planti-notice-done__title">{title}</p>
        <p className="planti-notice-done__text">
          {text} · {time}
        </p>
      </div>
    </div>
  );
}
