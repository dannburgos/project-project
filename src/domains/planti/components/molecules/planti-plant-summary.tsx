import { Leaf } from 'lucide-react';

type PlantiPlantSummaryProps = {
  name: string;
  detail: string;
};

// Una planta en pequeño: su foto, su nombre y un detalle
export function PlantiPlantSummary({ name, detail }: PlantiPlantSummaryProps) {
  return (
    <div className="planti-plant-summary">
      <span className="planti-plant-summary__photo" aria-hidden="true">
        <Leaf />
      </span>
      <div>
        <p className="planti-plant-summary__name">{name}</p>
        <p className="planti-plant-summary__detail">{detail}</p>
      </div>
    </div>
  );
}
