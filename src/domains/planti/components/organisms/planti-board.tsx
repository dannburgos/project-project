import { plantiMessages } from '../../messages';
import { PlantiBoardFrame } from '../molecules/planti-board-frame';
import { PlantiHomeScreen } from './planti-home-screen';
import { PlantiNeedsScreen } from './planti-needs-screen';
import { PlantiOnboardingScreen } from './planti-onboarding-screen';
import { PlantiPersonalizeScreen } from './planti-personalize-screen';
import { PlantiPlantDetailScreen } from './planti-plant-detail-screen';
import { PlantiRegisteredScreen } from './planti-registered-screen';
import { PlantiSearchGalleryScreen } from './planti-search-gallery-screen';
import { PlantiSearchLookScreen } from './planti-search-look-screen';
import { PlantiSearchMoreScreen } from './planti-search-more-screen';
import { PlantiSplashScreen } from './planti-splash-screen';

// Tablero del capítulo 1: todas las pantallas del recorrido, una al lado de
// la otra y en orden, para revisar la secuencia completa de un vistazo
export function PlantiBoard() {
  const { board } = plantiMessages;
  const { frames } = board;

  const groups = [
    {
      key: 'entry',
      title: board.entry,
      items: [
        { key: 'splash', frame: frames.splash, screen: <PlantiSplashScreen /> },
        {
          key: 'login',
          frame: frames.login,
          screen: <PlantiSplashScreen loginPhase="sheet" />
        },
        {
          key: 'intro',
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
          frame: frames.homeEmpty,
          screen: <PlantiHomeScreen variant="empty" />
        },
        {
          key: 'search-look',
          frame: frames.searchLook,
          screen: <PlantiSearchLookScreen />
        },
        {
          key: 'search-more',
          frame: frames.searchMore,
          screen: <PlantiSearchMoreScreen />
        },
        {
          key: 'search-gallery',
          frame: frames.searchGallery,
          screen: <PlantiSearchGalleryScreen />
        },
        {
          key: 'detail',
          frame: frames.detail,
          screen: <PlantiPlantDetailScreen />
        },
        {
          key: 'personalize',
          frame: frames.personalize,
          screen: <PlantiPersonalizeScreen />
        },
        { key: 'needs', frame: frames.needs, screen: <PlantiNeedsScreen /> },
        {
          key: 'registered',
          frame: frames.registered,
          screen: <PlantiRegisteredScreen />
        }
      ]
    }
  ];

  let step = 0;

  return (
    <main className="planti-board">
      <h1 className="planti-board__title">{board.title}</h1>
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
                    navActive={
                      group.key === 'entry'
                        ? null
                        : item.key === 'home'
                          ? 'home'
                          : 'plants'
                    }
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
  );
}
