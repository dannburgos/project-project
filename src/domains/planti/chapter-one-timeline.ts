import { plantiMessages } from './messages';
import type { PlantiPrototypeScreen } from './prototype-screens';
import type { PlantiScene } from './types/planti-scene.types';

export type PlantiTimelineEventKey =
  keyof (typeof plantiMessages)['timeline']['events'];

type PlantiBeat = {
  // Desde qué milisegundo se ve esta escena
  at: number;
  event: PlantiTimelineEventKey;
  scene: PlantiScene;
};

// Línea de tiempo del capítulo 1 (primera vez que añade una planta). Un solo
// reloj recorre esta lista, así se puede pausar, adelantar y retroceder sin que
// nada se desordene. Para ajustar un tiempo se cambia el número `at` de ese
// momento. Lo que va cambiando de forma continua (la línea del botón de la
// intro y las letras del nombre) sale del mismo tiempo, más abajo.
const USER_TYPE_AT_MS = 1300;
const USER_CHAR_MS = 70;
const PASSWORD_TYPE_AT_MS = 1800;
const PASSWORD_CHAR_MS = 60;
const INTRO_AT_MS = 4300;
const INTRO_RING_MS = 2000;
const NAME_TYPE_AT_MS = 20400;
const NAME_CHAR_MS = 75;

const SEARCH_MORE = { screen: 'search-more' } as const;
const DETAIL = { screen: 'plant-detail' } as const;
const PERSONALIZE = { screen: 'personalize' } as const;

export const CHAPTER_ONE_BEATS: readonly PlantiBeat[] = [
  // Entrada: sube el panel, se escriben usuario y contraseña y se pulsa Entrar
  {
    at: 0,
    event: 'pressSignIn',
    scene: { screen: 'splash', loginPhase: 'pressed', isRemembered: false }
  },
  {
    at: 500,
    event: 'sheetUp',
    scene: { screen: 'splash', loginPhase: 'sheet', isRemembered: false }
  },
  {
    at: USER_TYPE_AT_MS,
    event: 'typeUser',
    scene: { screen: 'splash', loginPhase: 'sheet', isRemembered: false }
  },
  {
    at: PASSWORD_TYPE_AT_MS,
    event: 'typePassword',
    scene: { screen: 'splash', loginPhase: 'sheet', isRemembered: false }
  },
  {
    at: 2400,
    event: 'checkRemember',
    scene: { screen: 'splash', loginPhase: 'sheet', isRemembered: true }
  },
  {
    at: 3100,
    event: 'signingIn',
    scene: { screen: 'splash', loginPhase: 'signing-in', isRemembered: true }
  },
  // Intro: la línea rodea el botón durante 2 s y el botón se pulsa
  { at: INTRO_AT_MS, event: 'intro', scene: { screen: 'onboarding' } },
  // Inicio, primera vez: una pausa antes de pulsar Añade tu planta
  { at: 6800, event: 'home', scene: { screen: 'home-empty' } },
  {
    at: 8300,
    event: 'pressAdd',
    scene: { screen: 'home-empty', isPressed: true }
  },
  // Buscar · ¿Cómo es?
  {
    at: 9000,
    event: 'look',
    scene: { screen: 'search-look', hasChoice: false }
  },
  {
    at: 9800,
    event: 'chooseLook',
    scene: { screen: 'search-look', hasChoice: true }
  },
  // Buscar · Cuéntanos más: se elige el tamaño y, después, el color
  {
    at: 10500,
    event: 'more',
    scene: { ...SEARCH_MORE, hasSize: false, hasColor: false }
  },
  {
    at: 10900,
    event: 'chooseSize',
    scene: { ...SEARCH_MORE, hasSize: true, hasColor: false }
  },
  {
    at: 12600,
    event: 'chooseColor',
    scene: { ...SEARCH_MORE, hasSize: true, hasColor: true }
  },
  {
    at: 13300,
    event: 'pressMore',
    scene: { ...SEARCH_MORE, hasSize: true, hasColor: true, isPressed: true }
  },
  // Buscar · ¿Es alguna de estas?
  {
    at: 14000,
    event: 'gallery',
    scene: { screen: 'search-gallery', isHighlighted: false }
  },
  {
    at: 15100,
    event: 'highlight',
    scene: { screen: 'search-gallery', isHighlighted: true }
  },
  // Detalle de la planta: se ve lo general y se baja despacio a las
  // recomendaciones
  { at: 16300, event: 'detail', scene: { ...DETAIL, hasScrolled: false } },
  {
    at: 17100,
    event: 'scrollDetail',
    scene: { ...DETAIL, hasScrolled: true }
  },
  {
    at: 19300,
    event: 'pressDetail',
    scene: { ...DETAIL, hasScrolled: true, isPressed: true }
  },
  // Personalizar: se escribe el nombre y se eligen dónde vive y la luz
  {
    at: 20000,
    event: 'personalize',
    scene: { ...PERSONALIZE, hasPlace: false, hasLight: false }
  },
  {
    at: NAME_TYPE_AT_MS,
    event: 'typeName',
    scene: { ...PERSONALIZE, hasPlace: false, hasLight: false }
  },
  {
    at: 21900,
    event: 'fillPlace',
    scene: { ...PERSONALIZE, hasPlace: true, hasLight: false }
  },
  {
    at: 22500,
    event: 'fillLight',
    scene: { ...PERSONALIZE, hasPlace: true, hasLight: true }
  },
  {
    at: 23100,
    event: 'pressPersonalize',
    scene: { ...PERSONALIZE, hasPlace: true, hasLight: true, isPressed: true }
  },
  // Necesidades de cuidado
  { at: 23800, event: 'needs', scene: { screen: 'needs' } },
  {
    at: 25500,
    event: 'pressNeeds',
    scene: { screen: 'needs', isPressed: true }
  },
  // Planta registrada: pasa al capítulo 2 al pulsar Crea tu rutina
  { at: 26200, event: 'registered', scene: { screen: 'registered' } },
  {
    at: 28000,
    event: 'pressRegistered',
    scene: { screen: 'registered', isPressed: true }
  }
];

export const CHAPTER_ONE_DURATION_MS = 28400;

// La portada quieta, antes de dar inicio
export const CHAPTER_ONE_IDLE_SCENE: PlantiScene = {
  screen: 'splash',
  loginPhase: 'idle'
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function getChapterOneScene(elapsedMs: number): PlantiScene {
  let current = CHAPTER_ONE_BEATS[0].scene;

  for (const beat of CHAPTER_ONE_BEATS) {
    if (beat.at > elapsedMs) break;
    current = beat.scene;
  }

  // Lo que cambia de forma continua sale del tiempo, para que al adelantar o
  // retroceder se vea exactamente donde corresponde
  if (current.screen === 'splash' && current.loginPhase !== 'idle') {
    return {
      ...current,
      userChars: clamp(
        Math.floor((elapsedMs - USER_TYPE_AT_MS) / USER_CHAR_MS),
        0,
        plantiMessages.login.userValue.length
      ),
      passwordChars: clamp(
        Math.floor((elapsedMs - PASSWORD_TYPE_AT_MS) / PASSWORD_CHAR_MS),
        0,
        plantiMessages.login.passwordValue.length
      )
    };
  }

  if (current.screen === 'onboarding') {
    const ring = clamp((elapsedMs - INTRO_AT_MS) / INTRO_RING_MS, 0, 1);
    return { ...current, ringProgress: ring, isPressed: ring >= 1 };
  }

  if (current.screen === 'personalize') {
    const chars = clamp(
      Math.floor((elapsedMs - NAME_TYPE_AT_MS) / NAME_CHAR_MS),
      0,
      plantiMessages.plant.nickname.length
    );
    return { ...current, nameChars: chars };
  }

  return current;
}

export type PlantiTimelineStep = {
  screen: PlantiPrototypeScreen;
  startMs: number;
  endMs: number;
  events: ReadonlyArray<{ atMs: number; event: PlantiTimelineEventKey }>;
};

// Los pasos del recorrido: cada pantalla con cuándo empieza, cuándo termina y
// lo que pasa dentro de ella
export function getChapterOneSteps(): PlantiTimelineStep[] {
  const steps: PlantiTimelineStep[] = [];

  for (const beat of CHAPTER_ONE_BEATS) {
    const last = steps[steps.length - 1];
    const event = { atMs: beat.at, event: beat.event };

    if (last && last.screen === beat.scene.screen) {
      last.events = [...last.events, event];
    } else {
      if (last) last.endMs = beat.at;
      steps.push({
        screen: beat.scene.screen,
        startMs: beat.at,
        endMs: CHAPTER_ONE_DURATION_MS,
        events: [event]
      });
    }
  }

  return steps;
}

const STEP_STARTS_MS = getChapterOneSteps().map(step => step.startMs);

// Si ya pasó un momento desde el inicio del paso, "anterior" vuelve a su
// comienzo; si no, al paso de antes
const RESTART_THRESHOLD_MS = 800;

export function getPreviousStepStart(elapsedMs: number) {
  const current =
    [...STEP_STARTS_MS].reverse().find(at => at <= elapsedMs) ?? 0;
  if (elapsedMs - current > RESTART_THRESHOLD_MS) return current;
  const previous = [...STEP_STARTS_MS].reverse().find(at => at < current);
  return previous ?? 0;
}

export function getNextStepStart(elapsedMs: number) {
  return STEP_STARTS_MS.find(at => at > elapsedMs) ?? CHAPTER_ONE_DURATION_MS;
}
