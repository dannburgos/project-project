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
  'lock-screen',
  'home-routine',
  'routine-start',
  'routine-generating',
  'routine-plan',
  'routine',
  'notices',
  'task-detail',
  'task-done'
] as const;

export type PlantiPrototypeScreen = (typeof PLANTI_PROTOTYPE_SCREENS)[number];
