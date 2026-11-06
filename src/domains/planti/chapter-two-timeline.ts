import { getBeatScene } from './planti-timeline.util';
import type { PlantiBeat, PlantiChapter } from './types/planti-chapter.types';
import type { PlantiScene } from './types/planti-scene.types';

// Línea de tiempo del capítulo 2 (crear una rutina para la planta que se
// acaba de registrar). Igual que el capítulo 1: un solo reloj recorre esta
// lista; para ajustar un tiempo se cambia el número `at` de ese momento.
const CARES = { screen: 'routine-cares' } as const;
const FREQUENCY = { screen: 'routine-frequency' } as const;

export const CHAPTER_TWO_BEATS: readonly PlantiBeat[] = [
  // Inicio, antes de la rutina: el Ficus ya está; se pulsa Crea su rutina
  { at: 0, event: 'homeRoutine', scene: { screen: 'home-routine' } },
  {
    at: 1800,
    event: 'pressHomeRoutine',
    scene: { screen: 'home-routine', isPressed: true }
  },
  // Iniciar rutina: la planta y sus necesidades; se pulsa Crea tu rutina
  { at: 2500, event: 'routineStart', scene: { screen: 'routine-start' } },
  {
    at: 4300,
    event: 'pressRoutineStart',
    scene: { screen: 'routine-start', isPressed: true }
  },
  // Seleccionar cuidados: se marcan uno por uno
  { at: 5000, event: 'cares', scene: { ...CARES, checkedCares: 0 } },
  { at: 5800, event: 'checkWater', scene: { ...CARES, checkedCares: 1 } },
  { at: 6400, event: 'checkFertilize', scene: { ...CARES, checkedCares: 2 } },
  { at: 7000, event: 'checkLeaves', scene: { ...CARES, checkedCares: 3 } },
  {
    at: 7800,
    event: 'pressCares',
    scene: { ...CARES, checkedCares: 3, isPressed: true }
  },
  // Configurar frecuencias: el riego sube de 1 a 2 veces por semana
  { at: 8500, event: 'frequency', scene: { ...FREQUENCY, waterTimes: 1 } },
  {
    at: 9500,
    event: 'raiseWater',
    scene: { ...FREQUENCY, waterTimes: 2 }
  },
  {
    at: 10700,
    event: 'pressFrequency',
    scene: { ...FREQUENCY, waterTimes: 2, isPressed: true }
  },
  // Revisar rutina: el resumen, con la opción de editar
  { at: 11400, event: 'review', scene: { screen: 'routine-review' } },
  {
    at: 13400,
    event: 'pressReview',
    scene: { screen: 'routine-review', isPressed: true }
  },
  // Rutina creada: se dibuja el check y se pulsa Mira tus tareas
  { at: 14100, event: 'routineCreated', scene: { screen: 'routine-created' } },
  {
    at: 15900,
    event: 'pressRoutineCreated',
    scene: { screen: 'routine-created', isPressed: true }
  },
  // Termina en la pestaña Rutina, con la semana ya programada
  { at: 16600, event: 'routineTab', scene: { screen: 'routine' } }
];

export const CHAPTER_TWO_DURATION_MS = 19000;

// Antes de iniciar: Inicio con el Ficus, quieto
export const CHAPTER_TWO_IDLE_SCENE: PlantiScene = { screen: 'home-routine' };

// Capítulo 2 · Crear una rutina de cuidado
export const CHAPTER_TWO: PlantiChapter = {
  durationMs: CHAPTER_TWO_DURATION_MS,
  beats: CHAPTER_TWO_BEATS,
  idleScene: CHAPTER_TWO_IDLE_SCENE,
  getScene: elapsedMs => getBeatScene(CHAPTER_TWO_BEATS, elapsedMs)
};
