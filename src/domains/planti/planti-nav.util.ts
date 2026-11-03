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
      return 'home';
    default:
      return 'plants';
  }
}
