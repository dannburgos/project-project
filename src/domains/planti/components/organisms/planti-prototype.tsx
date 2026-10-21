import { plantiMessages } from '../../messages';

// Prototipo de Planti (app móvil). Punto de partida: aquí se construyen las
// pantallas de los tres flujos (incorporar una planta, crear una rutina y
// completar un cuidado). Se ve solo en /prototypes/planti y dentro del
// capítulo "Prototipo" del caso.
export function PlantiPrototype() {
  const { starter } = plantiMessages;

  return (
    <main className="planti-app">
      <div className="planti-starter">
        <p className="planti-starter__name">{starter.name}</p>
        <p className="planti-starter__note">{starter.note}</p>
      </div>
    </main>
  );
}
