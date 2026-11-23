import { getBeatScene } from './planti-timeline.util';
import type { PlantiBeat, PlantiChapter } from './types/planti-chapter.types';
import type { PlantiScene } from './types/planti-scene.types';

// Línea de tiempo del capítulo 3 (completar un cuidado). Empieza en la pantalla
// bloqueada: el aviso del riego llega y se toca desde ahí. Igual que los otros,
// un solo reloj recorre esta lista; para ajustar un tiempo se cambia el número
// `at` de ese momento.
export const CHAPTER_THREE_BEATS: readonly PlantiBeat[] = [
  // Pantalla bloqueada: el aviso baja y se ve un momento
  { at: 0, event: 'lockScreen', scene: { screen: 'lock-screen' } },
  {
    at: 750,
    event: 'pressNotice',
    scene: { screen: 'lock-screen', isPressed: true }
  },
  // Al tocar el aviso, la app se abre en Notificaciones: se ve el aviso de hoy,
  // nuevo, y se toca
  { at: 1150, event: 'noticesScreen', scene: { screen: 'notices' } },
  {
    at: 3000,
    event: 'pressNoticeItem',
    scene: { screen: 'notices', isPressed: true }
  },
  // El cuidado: qué toca, cuándo y los pasos; se pulsa Marcar como realizado
  { at: 3500, event: 'taskDetail', scene: { screen: 'task-detail' } },
  {
    at: 7200,
    event: 'pressTaskDetail',
    scene: { screen: 'task-detail', isPressed: true }
  },
  // Cuidado completado: se dibuja el check y queda 1 cuidado pendiente
  { at: 7900, event: 'taskDone', scene: { screen: 'task-done' } }
];

export const CHAPTER_THREE_DURATION_MS = 12000;

// Antes de iniciar: la pantalla bloqueada con el aviso, quieta
export const CHAPTER_THREE_IDLE_SCENE: PlantiScene = { screen: 'lock-screen' };

// Capítulo 3 · Completar un cuidado
export const CHAPTER_THREE: PlantiChapter = {
  durationMs: CHAPTER_THREE_DURATION_MS,
  beats: CHAPTER_THREE_BEATS,
  idleScene: CHAPTER_THREE_IDLE_SCENE,
  getScene: elapsedMs => getBeatScene(CHAPTER_THREE_BEATS, elapsedMs)
};
