import { plantiMessages } from '../../messages';

// La app arma la rutina: un anillo se llena y, debajo, la frase cambia según
// el avance. La persona no hace nada;
// solo espera unos segundos.
export function PlantiRoutineGeneratingScreen() {
  const { generating } = plantiMessages.routine;

  return (
    <div className="planti-screen planti-generating">
      <div className="planti-generating__ring" aria-hidden="true">
        <svg viewBox="0 0 96 96">
          <circle className="planti-generating__track" cx="48" cy="48" r="40" />
          <circle className="planti-generating__arc" cx="48" cy="48" r="40" />
        </svg>
      </div>
      <h1 className="planti-generating__title">{generating.title}</h1>
      <p className="planti-generating__phrases" role="status">
        {generating.steps.map(step => (
          <span key={step} className="planti-generating__phrase">
            {step}
          </span>
        ))}
      </p>
    </div>
  );
}
