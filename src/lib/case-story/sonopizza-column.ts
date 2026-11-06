import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  STORY_JUMP_EVENT,
  announceSection,
  queryAll,
  watchCounterVisibility
} from '@/lib/case-story/motion';

// Caso de Sonopizza en celular o con "reducir movimiento": las escenas van en
// columna (lo resuelve el CSS). El contador sigue la lectura y sus saltos
// bajan hasta la sección.
export function setupSonopizzaColumn(root: HTMLElement) {
  const views = queryAll(root, '[data-sono-view]');
  const pageTop = (element: Element) =>
    element.getBoundingClientRect().top + window.scrollY;

  const triggers = views.map(view =>
    ScrollTrigger.create({
      trigger: view,
      start: 'top center',
      end: 'bottom center',
      onToggle: self => {
        if (self.isActive)
          announceSection(root, Number(view.dataset.section ?? 0));
      }
    })
  );
  const counterTrigger = watchCounterVisibility(root);

  const handleJump = (event: Event) => {
    const section = (event as CustomEvent<number>).detail;
    const target = views.find(view => Number(view.dataset.section) === section);
    if (target) window.scrollTo({ top: pageTop(target), behavior: 'smooth' });
  };
  root.addEventListener(STORY_JUMP_EVENT, handleJump);

  return () => {
    root.removeEventListener(STORY_JUMP_EVENT, handleJump);
    triggers.forEach(trigger => trigger.kill());
    counterTrigger.kill();
    root.removeAttribute('data-counter-hidden');
  };
}
