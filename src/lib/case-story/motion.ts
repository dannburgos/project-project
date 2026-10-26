import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Piezas de movimiento que comparten el escenario (computador) y la columna
// (celular) del recorrido de un caso.

// La curva de todo el recorrido: arranca lento, toma impulso y frena largo
export const STORY_CURVE = 'power4.inOut';

export const CLIP_HIDDEN_RIGHT = 'inset(0% 100% 0% 0%)';
export const CLIP_HIDDEN_LEFT = 'inset(0% 0% 0% 100%)';
export const CLIP_SHOWN = 'inset(0% 0% 0% 0%)';

// Señales entre el escenario y el contador
export const STORY_SECTION_EVENT = 'case-story:section';
export const STORY_JUMP_EVENT = 'case-story:jump';

export const LINE_TEXT = '.story-line__text';
export const LINE_BLOCK = '.story-line__block';

export function queryAll<T extends Element = HTMLElement>(
  root: ParentNode,
  selector: string
) {
  return Array.from(root.querySelectorAll<T>(selector));
}

// Lo que se destapa desde el eje: textos marcados y las líneas de los
// títulos que van por líneas
export function axisTargets(root: ParentNode) {
  return queryAll(root, `[data-ax], [data-ax-lines] ${LINE_TEXT}`);
}

// El título llega ya cubierto por sus bloques; cada bloque toma impulso y se
// retira, destapando su línea
export function addBlockReveal(
  timeline: gsap.core.Timeline,
  element: Element | null,
  position: gsap.Position = '>',
  speed = 1
) {
  if (!element) return timeline;
  const blocks = queryAll(element, LINE_BLOCK);
  gsap.set(blocks, { scaleX: 1, transformOrigin: 'right center' });
  timeline.to(
    blocks,
    {
      scaleX: 0,
      duration: 1.3 * speed,
      stagger: 0.2 * speed,
      ease: 'expo.inOut'
    },
    position
  );
  return timeline;
}

// Fuera del recorrido (en lo que viene después) el contador se esconde
export function watchCounterVisibility(root: HTMLElement) {
  return ScrollTrigger.create({
    trigger: root,
    start: 'top top',
    end: 'bottom bottom',
    onToggle: self =>
      root.toggleAttribute('data-counter-hidden', !self.isActive)
  });
}

export function announceSection(root: HTMLElement, index: number) {
  root.dispatchEvent(new CustomEvent(STORY_SECTION_EVENT, { detail: index }));
}
