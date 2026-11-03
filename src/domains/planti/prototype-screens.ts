// Pantallas del prototipo que se pueden ver sueltas (?screen=)
export const PLANTI_PROTOTYPE_SCREENS = [
  'splash',
  'onboarding',
  'home-empty',
  'search-look',
  'search-more',
  'search-gallery',
  'search-typing',
  'search',
  'plant-detail',
  'personalize',
  'needs',
  'registered',
  'home-tasks'
] as const;

export type PlantiPrototypeScreen = (typeof PLANTI_PROTOTYPE_SCREENS)[number];
