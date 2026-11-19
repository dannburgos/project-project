import { cn } from '@/lib/utils';

type PetridePetPhotoProps = {
  src: string;
  name: string;
  size?: 'tile' | 'medium';
};

// Foto de una mascota, recortada en su forma redondeada
export function PetridePetPhoto({
  src,
  name,
  size = 'tile'
}: PetridePetPhotoProps) {
  return (
    <img
      className={cn('petride-photo', `petride-photo--${size}`)}
      src={src}
      alt={name}
    />
  );
}
