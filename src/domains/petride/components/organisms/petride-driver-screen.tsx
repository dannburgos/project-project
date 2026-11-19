import { MessageCircle, Phone, ShieldCheck, Star } from 'lucide-react';

import { PETRIDE_DRIVER } from '../../example-trip';
import { petrideMessages } from '../../messages';
import { fillPetrideTemplate } from '../../petride-template.util';
import { PetrideButton } from '../atoms/petride-button';
import { PetrideCarArt } from '../atoms/petride-car-art';
import { PetrideMap } from '../molecules/petride-map';

// Conductor asignado: el carro en camino en el mapa y, abajo, la hoja de
// quien llega: foto y "verificada" junto al tiempo, cifras de confianza, su
// carro con la placa, y escribirle o llamarla
export function PetrideDriverScreen() {
  const { driver: copy } = petrideMessages;
  const driver = PETRIDE_DRIVER;
  const stats = [
    {
      key: 'rating',
      value: driver.rating,
      label: copy.ratingLabel,
      hasStar: true
    },
    { key: 'trips', value: String(driver.trips), label: copy.tripsLabel },
    {
      key: 'years',
      value: fillPetrideTemplate(copy.yearsValue, { count: driver.yearsOnApp }),
      label: copy.yearsLabel
    }
  ];

  return (
    <div className="petride-screen petride-trip petride-trip--driver">
      <PetrideMap variant="driver" pickupLabel={copy.pickup} />

      <section className="petride-sheet petride-sheet--driver">
        <span className="petride-sheet__handle" aria-hidden="true" />
        <div className="petride-driver-card__head">
          <img
            className="petride-driver-card__photo"
            src={driver.photo}
            alt={driver.name}
          />
          <div className="petride-driver-card__heading">
            <span className="petride-driver-card__badge">
              <ShieldCheck aria-hidden="true" />
              {copy.verified}
            </span>
            <h1 className="petride-driver-card__title">
              {fillPetrideTemplate(copy.title, {
                name: driver.name,
                minutes: driver.arrivalMinutes
              })}
            </h1>
          </div>
        </div>

        <dl
          className="petride-driver-card__stats"
          aria-label={fillPetrideTemplate(copy.statsLabel, {
            name: driver.name
          })}
        >
          {stats.map(stat => (
            <div key={stat.key} className="petride-driver-card__stat">
              <dt className="petride-driver-card__stat-label">{stat.label}</dt>
              <dd className="petride-driver-card__stat-value">
                {stat.hasStar && <Star aria-hidden="true" />}
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="petride-car">
          <PetrideCarArt />
          <span className="petride-car__text">
            <strong>{driver.carModel}</strong>
            {driver.carColor}
          </span>
          <span className="petride-car__plate" aria-label={copy.plateLabel}>
            {driver.plate}
          </span>
        </div>

        <div className="petride-driver-card__actions">
          <PetrideButton variant="secondary" isFull>
            <MessageCircle aria-hidden="true" />
            {copy.message}
          </PetrideButton>
          <PetrideButton isFull>
            <Phone aria-hidden="true" />
            {copy.call}
          </PetrideButton>
        </div>
      </section>
    </div>
  );
}
