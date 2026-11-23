import { getBeatScene } from './planti-timeline.util';
import type { PlantiBeat, PlantiChapter } from './types/planti-chapter.types';
import type { PlantiScene } from './types/planti-scene.types';

// Línea de tiempo del capítulo 2 (la app arma la rutina de la planta que se
// acaba de registrar; la persona no elige nada). Igual que el capítulo 1: un
// solo reloj recorre esta lista; para ajustar un tiempo se cambia el número
// `at` de ese momento.
export const CHAPTER_TWO_BEATS: readonly PlantiBeat[] = [
  // Inicio, antes de la rutina: el Ficus ya está; se toca su tarjeta
  { at: 0, event: 'homeRoutine', scene: { screen: 'home-routine' } },
  {
    at: 1800,
    event: 'pressHomeRoutine',
    scene: { screen: 'home-routine', isPressed: true }
  },
  // Mis plantas · Ficus: la planta y sus datos; se pulsa Generar rutina
  { at: 2500, event: 'routineStart', scene: { screen: 'routine-start' } },
  {
    at: 4300,
    event: 'pressRoutineStart',
    scene: { screen: 'routine-start', isPressed: true }
  },
  // Armando la rutina: tres frases que se marcan solas
  {
    at: 5000,
    event: 'routineGenerating',
    scene: { screen: 'routine-generating' }
  },
  // Tu rutina, paso a paso; se pulsa Activar avisos
  { at: 8600, event: 'routinePlan', scene: { screen: 'routine-plan' } },
  {
    at: 11600,
    event: 'pressRoutinePlan',
    scene: { screen: 'routine-plan', isPressed: true }
  },
  // La pestaña Rutina: hoy es jueves y está elegido; los avisos ya están
  // activos
  { at: 12300, event: 'routineTab', scene: { screen: 'routine' } },
  // La persona quiere ver qué toca el sábado: lo toca...
  {
    at: 13800,
    event: 'tapSaturday',
    scene: { screen: 'routine', tappedDay: 'sat' }
  },
  // ...y aparece lo que toca ese día
  {
    at: 14500,
    event: 'showSaturday',
    scene: { screen: 'routine', selectedDay: 'sat' }
  }
];

export const CHAPTER_TWO_DURATION_MS = 17500;

// Antes de iniciar: Inicio con el Ficus, quieto
export const CHAPTER_TWO_IDLE_SCENE: PlantiScene = { screen: 'home-routine' };

// Capítulo 2 · Crear una rutina
export const CHAPTER_TWO: PlantiChapter = {
  durationMs: CHAPTER_TWO_DURATION_MS,
  beats: CHAPTER_TWO_BEATS,
  idleScene: CHAPTER_TWO_IDLE_SCENE,
  getScene: elapsedMs => getBeatScene(CHAPTER_TWO_BEATS, elapsedMs)
};
