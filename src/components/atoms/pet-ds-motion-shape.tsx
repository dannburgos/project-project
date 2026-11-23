import type { PetDsMotionDemoId } from '@/content/pet-design-system.types';

type PetDsMotionShapeProps = {
  id: PetDsMotionDemoId;
};

// Lo que se mueve en cada demo de motion. La animación la pone el CSS según
// el id; aquí solo están las piezas
export function PetDsMotionShape({ id }: PetDsMotionShapeProps) {
  if (id === 'arrival') {
    return (
      <svg className="pet-ds__fx-pet-pin" viewBox="0 0 200 200">
        <ellipse
          className="pet-ds__fx-pin-shadow"
          cx="100"
          cy="152"
          rx="22"
          ry="5"
        />
        <circle className="pet-ds__fx-pin-ring" cx="100" cy="152" r="16" />
        <g className="pet-ds__fx-pin-drop">
          <g className="pet-ds__fx-pin-wag">
            <path
              className="pet-ds__fx-pin-body"
              d="M100 152s30-30 30-56a30 30 0 0 0-60 0c0 26 30 56 30 56z"
            />
            <path className="pet-ds__fx-pin-body" d="M76 74l-6-20 18 10z" />
            <path className="pet-ds__fx-pin-body" d="M124 74l6-20-18 10z" />
            <circle className="pet-ds__fx-pin-face" cx="100" cy="96" r="18" />
            <circle className="pet-ds__fx-pin-eye" cx="93" cy="92" r="2.6" />
            <circle className="pet-ds__fx-pin-eye" cx="107" cy="92" r="2.6" />
            <path className="pet-ds__fx-pin-smile" d="M96 100q4 4 8 0" />
          </g>
        </g>
      </svg>
    );
  }
  return <span className="pet-ds__fx-base" />;
}
