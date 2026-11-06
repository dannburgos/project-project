type PlantiSectionHeadProps = {
  title: string;
  // Texto corto a la derecha: un recuento o una acción
  aside?: string;
};

// Título de una sección de la pantalla, con su recuento o acción al lado
export function PlantiSectionHead({ title, aside }: PlantiSectionHeadProps) {
  return (
    <div className="planti-section-head">
      <h2 className="planti-section-head__title">{title}</h2>
      {aside && <span className="planti-section-head__aside">{aside}</span>}
    </div>
  );
}
