import { plantiMessages } from '../../messages';

// Buscar, entre "Cuéntanos más" y "¿Es alguna de estas?": el mismo anillo que
// arma la rutina se llena mientras Planti busca, y las frases de abajo cuentan
// qué está revisando
export function PlantiSearchLoadingScreen() {
  const { loading } = plantiMessages.search;

  return (
    <div
      className="planti-screen planti-generating planti-generating--quick"
      role="status"
    >
      <div className="planti-generating__ring" aria-hidden="true">
        <svg viewBox="0 0 96 96">
          <circle className="planti-generating__track" cx="48" cy="48" r="40" />
          <circle className="planti-generating__arc" cx="48" cy="48" r="40" />
        </svg>
      </div>
      <h1 className="planti-generating__title">{loading.title}</h1>
      <p className="planti-generating__phrases">
        {loading.messages.map(message => (
          <span key={message} className="planti-generating__phrase">
            {message}
          </span>
        ))}
      </p>
    </div>
  );
}
