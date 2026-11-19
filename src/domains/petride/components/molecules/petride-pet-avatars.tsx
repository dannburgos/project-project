import type { PetridePet } from '../../types/petride.types';

type PetridePetAvatarsProps = {
  pets: readonly PetridePet[];
};

// Fotos redondas de las mascotas que viajan, una encima de otra
export function PetridePetAvatars({ pets }: PetridePetAvatarsProps) {
  return (
    <span className="petride-avatars">
      {pets.map(pet => (
        <img
          key={pet.id}
          className="petride-avatars__item"
          src={pet.photo}
          alt={pet.name}
        />
      ))}
    </span>
  );
}
