import { plantiMessages } from './messages';
import { getBeatScene } from './planti-timeline.util';
import type { PlantiBeat, PlantiChapter } from './types/planti-chapter.types';
import type { PlantiScene } from './types/planti-scene.types';

// Línea de tiempo del capítulo 1 (primera vez que añade una planta). Un solo
// reloj recorre esta lista, así se puede pausar, adelantar y retroceder sin que
// nada se desordene. Para ajustar un tiempo se cambia el número `at` de ese
// momento. Lo que va cambiando de forma continua (la línea del botón de la
// intro y las letras del nombre) sale del mismo tiempo, más abajo.
const USER_TYPE_AT_MS = 2100;
const USER_CHAR_MS = 70;
const PASSWORD_TYPE_AT_MS = 2600;
const PASSWORD_CHAR_MS = 60;
const INTRO_AT_MS = 5100;
const INTRO_RING_MS = 2000;
const NAME_TYPE_AT_MS = 23600;
const NAME_CHAR_MS = 75;

const SEARCH_MORE = { screen: 'search-more' } as const;
const DETAIL = { screen: 'plant-detail' } as const;
const PERSONALIZE = { screen: 'personalize' } as const;

export const CHAPTER_ONE_BEATS: readonly PlantiBeat[] = [
  // La carátula da paso a la portada entera, que se ve un momento
  { at: 0, event: 'cover', scene: { screen: 'splash', loginPhase: 'idle' } },
  // Entrada: sube el panel, se escriben usuario y contraseña y se pulsa Entrar
  {
    at: 800,
    event: 'pressSignIn',
    scene: { screen: 'splash', loginPhase: 'pressed', isRemembered: false }
  },
  {
    at: 1300,
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
    at: 3200,
    event: 'checkRemember',
    scene: { screen: 'splash', loginPhase: 'sheet', isRemembered: true }
  },
  {
    at: 3900,
    event: 'signingIn',
    scene: { screen: 'splash', loginPhase: 'signing-in', isRemembered: true }
  },
  // Intro: la línea rodea el botón durante 2 s y el botón se pulsa
  { at: INTRO_AT_MS, event: 'intro', scene: { screen: 'onboarding' } },
  // Inicio, primera vez: una pausa antes de pulsar Añade tu planta
  { at: 7600, event: 'home', scene: { screen: 'home-empty' } },
  {
    at: 9100,
    event: 'pressAdd',
    scene: { screen: 'home-empty', isPressed: true }
  },
  // Buscar · ¿Cómo es?
  {
    at: 9800,
    event: 'look',
    scene: { screen: 'search-look', hasChoice: false }
  },
  {
    at: 10600,
    event: 'chooseLook',
    scene: { screen: 'search-look', hasChoice: true }
  },
  // Buscar · Cuéntanos más: se elige el tamaño y, después, el color
  {
    at: 11300,
    event: 'more',
    scene: { ...SEARCH_MORE, hasSize: false, hasColor: false }
  },
  {
    at: 11700,
    event: 'chooseSize',
    scene: { ...SEARCH_MORE, hasSize: true, hasColor: false }
  },
  {
    at: 13400,
    event: 'chooseColor',
    scene: { ...SEARCH_MORE, hasSize: true, hasColor: true }
  },
  {
    at: 14100,
    event: 'pressMore',
    scene: { ...SEARCH_MORE, hasSize: true, hasColor: true, isPressed: true }
  },
  // Buscar · buscando coincidencias: brota la planta (2,4 s)
  { at: 14800, event: 'searching', scene: { screen: 'search-loading' } },
  // Buscar · ¿Es alguna de estas?
  {
    at: 17200,
    event: 'gallery',
    scene: { screen: 'search-gallery', isHighlighted: false }
  },
  {
    at: 18300,
    event: 'highlight',
    scene: { screen: 'search-gallery', isHighlighted: true }
  },
  // Detalle de la planta: se ve la foto y se baja despacio a la descripción
  { at: 19500, event: 'detail', scene: { ...DETAIL, hasScrolled: false } },
  {
    at: 20300,
    event: 'scrollDetail',
    scene: { ...DETAIL, hasScrolled: true }
  },
  {
    at: 22500,
    event: 'pressDetail',
    scene: { ...DETAIL, hasScrolled: true, isPressed: true }
  },
  // Personalizar: se escribe el nombre y se eligen dónde vive y la luz
  {
    at: 23200,
    event: 'personalize',
    scene: { ...PERSONALIZE, hasPlace: false, hasLight: false }
  },
  {
    at: NAME_TYPE_AT_MS,
    event: 'typeName',
    scene: { ...PERSONALIZE, hasPlace: false, hasLight: false }
  },
  // "¿Dónde vive?": se abre la lista, se toca Sala y se cierra
  {
    at: 25100,
    event: 'openPlace',
    scene: {
      ...PERSONALIZE,
      hasPlace: false,
      hasLight: false,
      isPlaceOpen: true
    }
  },
  {
    at: 25700,
    event: 'pickPlace',
    scene: {
      ...PERSONALIZE,
      hasPlace: true,
      hasLight: false,
      isPlaceOpen: true
    }
  },
  {
    at: 26000,
    event: 'fillPlace',
    scene: { ...PERSONALIZE, hasPlace: true, hasLight: false }
  },
  {
    at: 26600,
    event: 'fillLight',
    scene: { ...PERSONALIZE, hasPlace: true, hasLight: true }
  },
  {
    at: 27200,
    event: 'pressPersonalize',
    scene: { ...PERSONALIZE, hasPlace: true, hasLight: true, isPressed: true }
  },
  // Planta registrada: cierre del capítulo 1
  { at: 27900, event: 'registered', scene: { screen: 'registered' } }
];

export const CHAPTER_ONE_DURATION_MS = 30100;

// La carátula quieta, antes de dar inicio
export const CHAPTER_ONE_IDLE_SCENE: PlantiScene = {
  screen: 'splash',
  loginPhase: 'cover'
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function getChapterOneScene(elapsedMs: number): PlantiScene {
  const current = getBeatScene(CHAPTER_ONE_BEATS, elapsedMs);

  // Lo que cambia de forma continua sale del tiempo, para que al adelantar o
  // retroceder se vea exactamente donde corresponde
  if (
    current.screen === 'splash' &&
    current.loginPhase !== 'idle' &&
    current.loginPhase !== 'cover'
  ) {
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

// Capítulo 1 · Incorporar una planta
export const CHAPTER_ONE: PlantiChapter = {
  durationMs: CHAPTER_ONE_DURATION_MS,
  beats: CHAPTER_ONE_BEATS,
  idleScene: CHAPTER_ONE_IDLE_SCENE,
  getScene: getChapterOneScene
};
