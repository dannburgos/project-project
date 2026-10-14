import type { ReactNode } from 'react';

type AboutSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

// Sección de About en dos columnas: el título a la izquierda (25 %) y el
// contenido a la derecha (75 %). En celular, una sola columna.
export function AboutSection({ id, title, children }: AboutSectionProps) {
  return (
    <section className="about-section" aria-labelledby={id}>
      <h2 id={id} className="about-section__title">
        {title}
      </h2>
      <div className="about-section__content">{children}</div>
    </section>
  );
}
