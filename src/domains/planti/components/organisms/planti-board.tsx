import { plantiMessages } from '../../messages';
import type { PlantiChapterNumber } from '../../planti-chapters';
import { getPlantiNavKey } from '../../planti-nav.util';
import type { PlantiPrototypeScreen } from '../../prototype-screens';
import { PlantiBoardFrame } from '../molecules/planti-board-frame';
import { PlantiHomeScreen } from './planti-home-screen';
import { PlantiLockScreen } from './planti-lock-screen';
import { PlantiNeedsScreen } from './planti-needs-screen';
import { PlantiNoticesScreen } from './planti-notices-screen';
import { PlantiOnboardingScreen } from './planti-onboarding-screen';
import { PlantiPersonalizeScreen } from './planti-personalize-screen';
import { PlantiPrototype } from './planti-prototype';
import { PlantiPlantDetailScreen } from './planti-plant-detail-screen';
import { PlantiRegisteredScreen } from './planti-registered-screen';
import { PlantiRoutineGeneratingScreen } from './planti-routine-generating-screen';
import { PlantiRoutinePlanScreen } from './planti-routine-plan-screen';
import { PlantiRoutineScreen } from './planti-routine-screen';
import { PlantiSearchGalleryScreen } from './planti-search-gallery-screen';
import { PlantiSearchLoadingScreen } from './planti-search-loading-screen';
import { PlantiSearchLookScreen } from './planti-search-look-screen';
import { PlantiSearchMoreScreen } from './planti-search-more-screen';
import { PlantiSplashScreen } from './planti-splash-screen';
import { PlantiTaskDetailScreen } from './planti-task-detail-screen';
import { PlantiTaskDoneScreen } from './planti-task-done-screen';

type PlantiBoardProps = {
  // Qué capítulo (flujo) se revisa
  chapterNumber?: PlantiChapterNumber;
};

type PlantiBoardItem = {
  key: string;
  // La pantalla, para saber qué pestaña de la barra va activa
  screenKey: PlantiPrototypeScreen;
  frame: { title: string; note: string };
  screen: React.ReactNode;
};

type PlantiBoardGroup = {
  key: string;
  title: string;
  items: PlantiBoardItem[];
};

// Tablero de un capítulo: a la izquierda el prototipo corriendo y a la
// derecha todas las pantallas del recorrido, una al lado de la otra y en
// orden, para revisar la secuencia completa de un vistazo
export function PlantiBoard({ chapterNumber = 1 }: PlantiBoardProps) {
  const { board, routine } = plantiMessages;
  const { frames, framesTwo, framesThree } = board;

  const chapterOneGroups: PlantiBoardGroup[] = [
    {
      key: 'entry',
      title: board.entry,
      items: [
        {
          key: 'splash',
          screenKey: 'splash',
          frame: frames.splash,
          screen: <PlantiSplashScreen />
        },
        {
          key: 'login',
          screenKey: 'splash',
          frame: frames.login,
          screen: <PlantiSplashScreen loginPhase="sheet" />
        },
        {
          key: 'intro',
          screenKey: 'onboarding',
          frame: frames.intro,
          screen: <PlantiOnboardingScreen />
        }
      ]
    },
    {
      key: 'chapter',
      title: board.chapter,
      items: [
        {
          key: 'home',
          screenKey: 'home-empty',
          frame: frames.homeEmpty,
          screen: <PlantiHomeScreen variant="empty" />
        },
        {
          key: 'search-look',
          screenKey: 'search-look',
          frame: frames.searchLook,
          screen: <PlantiSearchLookScreen isInteractive />
        },
        {
          key: 'search-more',
          screenKey: 'search-more',
          frame: frames.searchMore,
          screen: <PlantiSearchMoreScreen isInteractive />
        },
        {
          key: 'search-loading',
          screenKey: 'search-loading',
          frame: frames.searchLoading,
          screen: <PlantiSearchLoadingScreen />
        },
        {
          key: 'search-gallery',
          screenKey: 'search-gallery',
          frame: frames.searchGallery,
          screen: <PlantiSearchGalleryScreen />
        },
        {
          key: 'detail',
          screenKey: 'plant-detail',
          frame: frames.detail,
          screen: <PlantiPlantDetailScreen />
        },
        {
          key: 'personalize',
          screenKey: 'personalize',
          frame: frames.personalize,
          screen: <PlantiPersonalizeScreen isInteractive />
        },
        {
          key: 'registered',
          screenKey: 'registered',
          frame: frames.registered,
          screen: <PlantiRegisteredScreen />
        }
      ]
    }
  ];

  const chapterTwoGroups: PlantiBoardGroup[] = [
    {
      key: 'routine',
      title: board.chapterTwo,
      items: [
        {
          key: 'home-routine',
          screenKey: 'home-routine',
          frame: framesTwo.home,
          screen: <PlantiHomeScreen variant="before-routine" />
        },
        {
          key: 'routine-start',
          screenKey: 'routine-start',
          frame: framesTwo.start,
          screen: <PlantiNeedsScreen actionLabel={routine.startAction} />
        },
        {
          key: 'routine-generating',
          screenKey: 'routine-generating',
          frame: framesTwo.generating,
          screen: <PlantiRoutineGeneratingScreen />
        },
        {
          key: 'routine-plan',
          screenKey: 'routine-plan',
          frame: framesTwo.plan,
          screen: <PlantiRoutinePlanScreen />
        },
        {
          key: 'routine-tab',
          screenKey: 'routine',
          frame: framesTwo.tab,
          screen: <PlantiRoutineScreen />
        }
      ]
    }
  ];

  const chapterThreeGroups: PlantiBoardGroup[] = [
    {
      key: 'tasks',
      title: board.chapterThree,
      items: [
        {
          key: 'lock-screen',
          screenKey: 'lock-screen',
          frame: framesThree.lock,
          screen: <PlantiLockScreen />
        },
        {
          key: 'notices',
          screenKey: 'notices',
          frame: framesThree.notices,
          screen: <PlantiNoticesScreen />
        },
        {
          key: 'task-detail',
          screenKey: 'task-detail',
          frame: framesThree.detail,
          screen: <PlantiTaskDetailScreen />
        },
        {
          key: 'task-done',
          screenKey: 'task-done',
          frame: framesThree.done,
          screen: <PlantiTaskDoneScreen />
        }
      ]
    }
  ];

  const groups =
    chapterNumber === 3
      ? chapterThreeGroups
      : chapterNumber === 2
        ? chapterTwoGroups
        : chapterOneGroups;
  const title =
    chapterNumber === 3
      ? board.titleThree
      : chapterNumber === 2
        ? board.titleTwo
        : board.title;

  let step = 0;

  return (
    <div className="planti-board-layout">
      <aside className="planti-board-layout__live">
        <PlantiPrototype chapterNumber={chapterNumber} isEmbedded />
      </aside>
      <main className="planti-board">
        <h1 className="planti-board__title">{title}</h1>
        <p className="planti-board__hint">{board.hint}</p>
        <div className="planti-board__groups">
          {groups.map(group => (
            <section key={group.key} className="planti-board__group">
              <h2 className="planti-board__group-title">{group.title}</h2>
              <ol className="planti-board__frames">
                {group.items.map(item => {
                  step += 1;

                  return (
                    <PlantiBoardFrame
                      key={item.key}
                      step={step}
                      title={item.frame.title}
                      note={item.frame.note}
                      navActive={getPlantiNavKey(item.screenKey)}
                    >
                      {item.screen}
                    </PlantiBoardFrame>
                  );
                })}
              </ol>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
