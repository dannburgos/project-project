import { cn } from '@/lib/utils';
import { toyotaAdvisorMessages as copy, fillTemplate } from '../../messages';

type TaBoardFrameProps = {
  step: string;
  title: string;
  note: string;
  // Alto del marco; sin alto, la página es tan larga como su contenido
  height?: number;
  children: React.ReactNode;
};

// Un marco del tablero a tamaño real: número, nombre, qué hace la persona y,
// debajo, la pantalla de 1440 px
export function TaBoardFrame({
  step,
  title,
  note,
  height,
  children
}: TaBoardFrameProps) {
  return (
    <li className="ta-board__frame">
      <div className="ta-board__label">
        <span className="ta-board__step">{step}</span>
        <h2 className="ta-board__name">{title}</h2>
        <p className="ta-board__note">{note}</p>
        <span className="ta-board__size">
          {fillTemplate(copy.board.sizeLabel, {
            height: height ? String(height) : '—'
          })}
        </span>
      </div>
      <div
        className={cn('ta-board__screen', height && 'ta-board__screen--fixed')}
      >
        {children}
      </div>
    </li>
  );
}
