import type { ToyotaModelId, ToyotaTag } from './toyota-advisor.types';

// Una razón de recomendación: un dato verificable de la ficha y las
// etiquetas a las que responde (vacío = dato extra, no responde a nada)
export type ToyotaReason = {
  text: string;
  tags: readonly ToyotaTag[];
};

export type ToyotaVersion = {
  name: string;
  drivetrain: string;
  price: number;
};

export type ToyotaSpecKey =
  | 'seats'
  | 'engine'
  | 'power'
  | 'transmission'
  | 'traction'
  | 'length'
  | 'width'
  | 'height'
  | 'clearance'
  | 'airbags'
  | 'payload'
  | 'trunk';

// Un dato de la ficha: el texto que se muestra y, si se puede comparar, su
// número. Sin texto = «No disponible en la ficha oficial»
export type ToyotaSpec = {
  text?: string;
  value?: number;
  isPending?: boolean;
};

export type ToyotaModelDetail = {
  id: ToyotaModelId;
  reasons: readonly ToyotaReason[];
  versions: readonly ToyotaVersion[];
  specs: Readonly<Record<ToyotaSpecKey, ToyotaSpec>>;
};
