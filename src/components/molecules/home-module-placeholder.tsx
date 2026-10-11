type HomeModulePlaceholderProps = {
  label: string;
  number: number;
  title: string;
  note: string;
};

// Espacio vacío de una pantalla completa que se irá llenando. Sirve para ir
// pensando qué contenido va en cada módulo del Home.
export function HomeModulePlaceholder({
  label,
  number,
  title,
  note
}: HomeModulePlaceholderProps) {
  return (
    <section className="home-placeholder" aria-labelledby={`module-${number}`}>
      <p className="home-placeholder__label">
        {label} {number}
      </p>
      <div className="home-placeholder__area">
        <h2 id={`module-${number}`} className="home-placeholder__title">
          {title}
        </h2>
        <p className="home-placeholder__note">{note}</p>
      </div>
    </section>
  );
}
