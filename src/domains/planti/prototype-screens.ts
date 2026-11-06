// Pantallas del prototipo que se pueden ver sueltas (?screen=)
export const PLANTI_PROTOTYPE_SCREENS = [
  'splash',
  'onboarding',
  'home-empty',
  'search-look',
  'search-more',
  'search-loading',
  'search-gallery',
  'search-typing',
  'search',
  'plant-detail',
  'personalize',
  'needs',
  'registered',
  'home-tasks',
  'home-routine',
  'routine-start',
  'routine-cares',
  'routine-frequency',
  'routine-review',
  'routine-created',
  'routine'
] as const;

export type PlantiPrototypeScreen = (typeof PLANTI_PROTOTYPE_SCREENS)[number];
