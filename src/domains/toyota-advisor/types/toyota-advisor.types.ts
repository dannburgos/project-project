// Tipos del prototipo «Encuentra tu Toyota»: el catálogo, las preguntas de la
// asesoría y las respuestas que suman etiquetas

// Etiquetas con las que se describe cada modelo (salen de su ficha oficial)
export type ToyotaTag =
  | 'city'
  | 'space'
  | 'saving'
  | 'comfort'
  | 'technology'
  | 'power'
  | 'versatility'
  | 'cargo'
  | 'terrain'
  | 'sevenSeats'
  | 'car'
  | 'suv'
  | 'pickup'
  | 'hybrid'
  | 'combustion';

export type ToyotaModelId =
  | 'yaris'
  | 'corolla'
  | 'corollaCross'
  | 'rav4'
  | 'hilux'
  | 'fortuner';

export type ToyotaModel = {
  id: ToyotaModelId;
  name: string;
  body: string;
  category: string;
  seats: number;
  engine: string;
  // Precio sugerido de la versión de entrada, en pesos
  priceFrom: number;
  tags: readonly ToyotaTag[];
};

export type ToyotaQuestionKind = 'single' | 'multiple' | 'upToThree';

export type ToyotaAnswerOption = {
  id: string;
  label: string;
  // Icono del sistema de diseño (ver ToyotaIcon)
  icon?: string;
  // Etiqueta que suma esta respuesta; sin etiqueta no suma
  tag?: ToyotaTag;
  // Por qué no suma, cuando el sistema lo explica (por ejemplo, Seguridad)
  noScoreReason?: string;
  // «Aún no lo sé»: nunca filtra ni bloquea
  isUnsure?: boolean;
};

export type ToyotaBlockId = 'use' | 'car' | 'priorities' | 'budget';

// Una parte de una pregunta. La mayoría tiene una sola; «Tu carro» junta
// tres (personas, tipo y motor) en la misma pantalla
export type ToyotaQuestionPart = {
  id: string;
  label?: string;
  kind: ToyotaQuestionKind;
  isOptional?: boolean;
  options: readonly ToyotaAnswerOption[];
};

export type ToyotaQuestion = {
  id: string;
  number: number;
  block: ToyotaBlockId;
  title: string;
  help?: string;
  isOptional?: boolean;
  parts: readonly ToyotaQuestionPart[];
};

// Respuestas por parte de pregunta: los ids de las opciones elegidas
export type ToyotaAnswers = Readonly<Record<string, readonly string[]>>;

export type ToyotaBudgetRange = {
  id: string;
  label: string;
  // Tope del rango en pesos; sin tope = sin límite
  max?: number;
  min: number;
};

export type ToyotaRankedModel = {
  model: ToyotaModel;
  points: number;
  isInBudget: boolean;
};
