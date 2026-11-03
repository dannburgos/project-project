import { Leaf, Plus } from 'lucide-react';

import { plantiMessages } from '../../messages';
import { PlantiSectionHead } from '../atoms/planti-section-head';
import { PlantiStatusPill } from '../atoms/planti-status-pill';

// Las plantas de la persona en dos columnas, con tarjetas más altas que
// anchas. El espacio de cada foto es para la planta recortada; mientras no
// esté, lleva una hoja. La última tarjeta invita a añadir otra.
export function PlantiPlantsGrid() {
  const { plants } = plantiMessages.home.withTasks;

  return (
    <section>
      <PlantiSectionHead title={plants.title} aside={plants.action} />
      <div className="planti-plants-grid">
        {plants.items.map(plant => (
          <article key={plant.key} className="planti-plant-tile">
            <div className="planti-plant-tile__photo" aria-hidden="true">
              <Leaf />
            </div>
            <span className="planti-plant-tile__status">
              <PlantiStatusPill tone={plant.tone}>
                {plant.status}
              </PlantiStatusPill>
            </span>
            <div className="planti-plant-tile__info">
              <p className="planti-plant-tile__name">{plant.name}</p>
              <p className="planti-plant-tile__place">{plant.place}</p>
            </div>
          </article>
        ))}
        <article className="planti-plant-tile planti-plant-tile--add">
          <div className="planti-plant-tile__photo" aria-hidden="true">
            <Plus />
          </div>
          <div className="planti-plant-tile__info">
            <p className="planti-plant-tile__name">{plants.add}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
