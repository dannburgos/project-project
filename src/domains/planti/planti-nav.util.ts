import type { PlantiNavKey } from './components/molecules/planti-bottom-nav';
import type { PlantiPrototypeScreen } from './prototype-screens';

export function getPlantiNavKey(
  screen: PlantiPrototypeScreen
): PlantiNavKey | null {
  switch (screen) {
    case 'splash':
    case 'onboarding':
      return null;
    case 'home-empty':
    case 'home-tasks':
    case 'home-routine':
      return 'home';
    case 'routine':
      return 'routine';
    default:
      return 'plants';
  }
}
