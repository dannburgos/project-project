import type { PetJourneyStage } from '@/content/petride-story.types';

type PetJourneyCurveProps = {
  stages: readonly PetJourneyStage[];
  opportunityLabel: string;
};

const MIN_LEVEL = 1;
const MAX_LEVEL = 5;
// Alto del dibujo de la curva; el ancho se estira al del contenedor
const VIEW_WIDTH = 600;
const VIEW_HEIGHT = 100;

// Punto de la curva de una etapa, en porcentaje del contenedor
function getPoint(index: number, count: number, level: number) {
  const x = ((index + 0.5) / count) * 100;
  const y = (1 - (level - MIN_LEVEL) / (MAX_LEVEL - MIN_LEVEL)) * 100;
  return { x, y };
}

// La etiqueta de la emoción va arriba del punto si este sobresale de sus
// vecinos y abajo si queda por debajo, para que la línea nunca pase por encima
function isLabelAbove(stages: readonly PetJourneyStage[], index: number) {
  const neighbors = [stages[index - 1], stages[index + 1]].filter(Boolean);
  const average =
    neighbors.reduce((sum, stage) => sum + stage.level, 0) / neighbors.length;
  return stages[index].level > average;
}

// Camino suave que pasa por todos los puntos (Catmull-Rom convertida a curvas
// de Bézier)
function buildPath(stages: readonly PetJourneyStage[]) {
  const points = stages.map((stage, index) => {
    const { x, y } = getPoint(index, stages.length, stage.level);
    return { x: (x / 100) * VIEW_WIDTH, y: (y / 100) * VIEW_HEIGHT };
  });
  return points.reduce((path, point, index) => {
    if (index === 0) return `M ${point.x} ${point.y}`;
    const previous = points[index - 1];
    const before = points[index - 2] ?? previous;
    const after = points[index + 1] ?? point;
    const first = {
      x: previous.x + (point.x - before.x) / 6,
      y: previous.y + (point.y - before.y) / 6
    };
    const second = {
      x: point.x - (after.x - previous.x) / 6,
      y: point.y - (after.y - previous.y) / 6
    };
    return `${path} C ${first.x} ${first.y}, ${second.x} ${second.y}, ${point.x} ${point.y}`;
  }, '');
}

// Customer journey como curva de emoción: la línea sube y baja según cómo se
// siente la persona en cada etapa, y debajo de cada punto va la etapa con su
// oportunidad. En pantallas chicas no hay curva: la emoción va como etiqueta
// dentro de cada etapa.
export function PetJourneyCurve({
  stages,
  opportunityLabel
}: PetJourneyCurveProps) {
  return (
    <div className="pet-curve" data-pet-journey>
      <div className="pet-curve__plot" aria-hidden="true">
        <svg
          className="pet-curve__svg"
          viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
          preserveAspectRatio="none"
        >
          <line
            className="pet-curve__axis"
            x1="0"
            y1={VIEW_HEIGHT / 2}
            x2={VIEW_WIDTH}
            y2={VIEW_HEIGHT / 2}
            vectorEffect="non-scaling-stroke"
          />
          <path
            className="pet-curve__path"
            d={buildPath(stages)}
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {stages.map((stage, index) => {
          const { x, y } = getPoint(index, stages.length, stage.level);

          return (
            <span
              key={stage.name}
              className="pet-curve__point"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <i className="pet-curve__dot" data-pet-curve-dot />
              <span
                className="pet-curve__emotion"
                data-pet-curve-label
                data-below={isLabelAbove(stages, index) ? undefined : ''}
              >
                {stage.emotion}
              </span>
            </span>
          );
        })}
      </div>

      <ol className="pet-curve__stages">
        {stages.map((stage, index) => (
          <li
            key={stage.name}
            className="pet-curve__stage"
            data-pet-journey-stage
          >
            <span className="pet-curve__number">{index + 1}</span>
            <h4 className="pet-curve__name">{stage.name}</h4>
            <span className="pet-curve__chip">{stage.emotion}</span>
            <p className="pet-curve__opportunity">
              <span className="sr-only">{opportunityLabel}: </span>
              {stage.opportunity}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
