import { Info } from 'lucide-react';

type CaseNoteProps = {
  label: string;
  text: string;
};

// Aclaración discreta dentro de un capítulo (por ejemplo, qué es hipótesis y
// qué no se hizo)
export function CaseNote({ label, text }: CaseNoteProps) {
  return (
    <aside className="case-note">
      <Info aria-hidden="true" className="case-note__icon" />
      <p className="case-note__body">
        <span className="case-note__label">{label}</span> {text}
      </p>
    </aside>
  );
}
