type CaseStoryOpenerProps = {
  number: string;
  name: string;
};

// Inicio de una sección en celular: cuadrito, número con nombre y una línea
// que se dibuja de lado a lado. En computador lo reemplaza el contador.
export function CaseStoryOpener({ number, name }: CaseStoryOpenerProps) {
  return (
    <div className="story-opener" data-opener aria-hidden="true">
      <i className="story-opener__mark" data-opener-mark />
      <span className="story-opener__label" data-opener-label>
        {number} · {name}
      </span>
      <span className="story-opener__rule" data-opener-rule />
    </div>
  );
}
