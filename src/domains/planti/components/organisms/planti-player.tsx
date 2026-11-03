import type { PlantiTimelineStatus } from '../../hooks/use-planti-timeline';
import type { PlantiScene } from '../../types/planti-scene.types';
import { PlantiTimelineControls } from '../molecules/planti-timeline-controls';
import { PlantiHomeScreen } from './planti-home-screen';
import { PlantiNeedsScreen } from './planti-needs-screen';
import { PlantiOnboardingScreen } from './planti-onboarding-screen';
import { PlantiPersonalizeScreen } from './planti-personalize-screen';
import { PlantiPlantDetailScreen } from './planti-plant-detail-screen';
import { PlantiRegisteredScreen } from './planti-registered-screen';
import { PlantiSearchGalleryScreen } from './planti-search-gallery-screen';
import { PlantiSearchLookScreen } from './planti-search-look-screen';
import { PlantiSearchMoreScreen } from './planti-search-more-screen';
import { PlantiSearchScreen } from './planti-search-screen';
import { PlantiSplashScreen } from './planti-splash-screen';
import { getPlantiNavKey } from '../../planti-nav.util';
import { PlantiStage } from './planti-stage';

type PlantiPlayerProps = {
  scene: PlantiScene;
  status: PlantiTimelineStatus;
  elapsedMs: number;
  // Acaba de adelantarse o retrocederse: las animaciones corren un momento
  isSettling: boolean;
  // Muestra los controles del recorrido (en las pantallas sueltas no)
  hasControls: boolean;
  // El escenario ocupa solo su espacio, no toda la ventana
  isEmbedded?: boolean;
  onStart: () => void;
  onPause: () => void;
  onResume: () => void;
  onReset: () => void;
  onScrub: (ms: number) => void;
  onPreviousStep: () => void;
  onNextStep: () => void;
};

function renderScene(scene: PlantiScene) {
  switch (scene.screen) {
    case 'splash':
      return (
        <PlantiSplashScreen
          loginPhase={scene.loginPhase}
          userChars={scene.userChars}
          passwordChars={scene.passwordChars}
          isRemembered={scene.isRemembered}
        />
      );
    case 'onboarding':
      return (
        <PlantiOnboardingScreen
          ringProgress={scene.ringProgress}
          isPressed={scene.isPressed}
        />
      );
    case 'home-empty':
      return (
        <PlantiHomeScreen variant="empty" isActionPressed={scene.isPressed} />
      );
    case 'search-look':
      return <PlantiSearchLookScreen hasChoice={scene.hasChoice} />;
    case 'search-more':
      return (
        <PlantiSearchMoreScreen
          hasSize={scene.hasSize}
          hasColor={scene.hasColor}
          isPressed={scene.isPressed}
        />
      );
    case 'search-gallery':
      return <PlantiSearchGalleryScreen isHighlighted={scene.isHighlighted} />;
    case 'search-typing':
      return <PlantiSearchScreen stage="typing" />;
    case 'search':
      return <PlantiSearchScreen stage="results" />;
    case 'plant-detail':
      return (
        <PlantiPlantDetailScreen
          hasScrolled={scene.hasScrolled}
          isPressed={scene.isPressed}
        />
      );
    case 'personalize':
      return (
        <PlantiPersonalizeScreen
          nameChars={scene.nameChars}
          hasPlace={scene.hasPlace}
          hasLight={scene.hasLight}
          isPressed={scene.isPressed}
        />
      );
    case 'needs':
      return <PlantiNeedsScreen isPressed={scene.isPressed} />;
    case 'registered':
      return <PlantiRegisteredScreen isPressed={scene.isPressed} />;
    case 'home-tasks':
      return <PlantiHomeScreen variant="with-tasks" />;
  }
}

// El celular con lo que se ve en este momento y, debajo, los controles del
// recorrido
export function PlantiPlayer({
  scene,
  status,
  elapsedMs,
  isSettling,
  hasControls,
  isEmbedded = false,
  onStart,
  onPause,
  onResume,
  onReset,
  onScrub,
  onPreviousStep,
  onNextStep
}: PlantiPlayerProps) {
  return (
    <PlantiStage
      isPaused={status === 'paused' && !isSettling}
      isEmbedded={isEmbedded}
      navActive={getPlantiNavKey(scene.screen)}
      controls={
        hasControls && (
          <PlantiTimelineControls
            status={status}
            elapsedMs={elapsedMs}
            onStart={onStart}
            onPause={onPause}
            onResume={onResume}
            onReset={onReset}
            onScrub={onScrub}
            onPreviousStep={onPreviousStep}
            onNextStep={onNextStep}
          />
        )
      }
    >
      {renderScene(scene)}
    </PlantiStage>
  );
}
