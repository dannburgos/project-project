import { RefreshCw, X, Zap } from 'lucide-react';

import {
  PETRIDE_CAMERA_PREVIEW,
  PETRIDE_EXAMPLE_PETS,
  PETRIDE_NEW_PET
} from '../../example-pets';
import { petrideMessages } from '../../messages';

// Cámara dentro de la app para la foto de la mascota: la imagen en vivo a
// pantalla completa, controles de cristal oscuro, un recuadro con esquinas
// lima que guía el encuadre y el obturador lima. La foto es opcional
export function PetrideCameraScreen() {
  const { camera, common } = petrideMessages;
  const pet = PETRIDE_NEW_PET;

  return (
    <div className="petride-camera">
      <img
        className="petride-camera__live"
        src={PETRIDE_CAMERA_PREVIEW}
        alt={pet.name}
      />

      <header className="petride-camera__top">
        <button
          type="button"
          className="petride-camera__round"
          aria-label={common.close}
        >
          <X aria-hidden="true" />
        </button>
        <h1 className="petride-camera__title">{camera.title}</h1>
        <button
          type="button"
          className="petride-camera__round"
          aria-label={camera.flash}
        >
          <Zap aria-hidden="true" />
        </button>
      </header>

      <div className="petride-camera__frame" aria-hidden="true">
        <span className="petride-camera__corner petride-camera__corner--tl" />
        <span className="petride-camera__corner petride-camera__corner--tr" />
        <span className="petride-camera__corner petride-camera__corner--bl" />
        <span className="petride-camera__corner petride-camera__corner--br" />
      </div>
      <p className="petride-camera__hint">{camera.hint}</p>

      <footer className="petride-camera__controls">
        <div className="petride-camera__row">
          <button
            type="button"
            className="petride-camera__gallery"
            aria-label={camera.gallery}
          >
            <img src={PETRIDE_EXAMPLE_PETS.toby.photo} alt="" />
          </button>
          <button
            type="button"
            className="petride-camera__shutter"
            aria-label={camera.shutter}
          >
            <span />
          </button>
          <button
            type="button"
            className="petride-camera__round"
            aria-label={camera.flip}
          >
            <RefreshCw aria-hidden="true" />
          </button>
        </div>
        <button type="button" className="petride-camera__skip">
          {camera.skip}
        </button>
      </footer>
    </div>
  );
}
