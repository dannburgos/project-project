import type { PlantiNavKey } from './components/molecules/planti-bottom-nav';
import type { PlantiPrototypeScreen } from './prototype-screens';

export function getPlantiNavKey(
  screen: PlantiPrototypeScreen
): PlantiNavKey | null {
  switch (screen) {
    case 'splash':
    case 'onboarding':
    case 'lock-screen':
      return null;
    case 'home-empty':
    case 'home-routine':
    case 'notices':
      return 'home';
    case 'routine':
    case 'task-detail':
    case 'task-done':
      return 'routine';
    default:
      return 'plants';
  }
}
