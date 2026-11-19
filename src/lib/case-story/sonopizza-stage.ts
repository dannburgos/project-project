import { gsap } from 'gsap';

import { queryAll } from '@/lib/case-story/motion';
import { addArchitectureMotion } from '@/lib/case-story/sonopizza-architecture';
import { addAuditMotion } from '@/lib/case-story/sonopizza-audit';
import {
  addFlowsMotion,
  prepareFlowsMotion
} from '@/lib/case-story/sonopizza-flows';
import { setupFreeScroll } from '@/lib/case-story/sonopizza-free';
import { addJourneyMotion } from '@/lib/case-story/sonopizza-journey';
import {
  addProductMotion,
  prepareProductMotion
} from '@/lib/case-story/sonopizza-product';
import { createStepNavigator } from '@/lib/case-story/step-navigator';

// Escenario del caso de Sonopizza en computador (referencia de interacción:
// monument.tv). Cada escena es una capa a pantalla completa
// ([data-sono-view]) y se arma desde el HTML:
// - data-enter: cómo entra la escena (diagonal, band, wipe o rise)
// - data-steps: cuántos pasos tiene (por defecto, 1)
// - data-section: a qué sección pertenece (para los cuadrados)
// Dentro, cada pieza con data-sono-in="n" aparece en el paso n de su escena,
// con el efecto de data-sono-fx (slide, up, pop o draw). Una escena con
// data-motion lleva además su movimiento propio (la auditoría y el journey).

const EASE_CUT = 'expo.inOut';
const EASE_IN = 'expo.out';

// Corte en diagonal: el borde entra inclinado desde la derecha y cubre todo
const DIAGONAL_HIDDEN = 'polygon(160% 0%, 200% 0%, 200% 100%, 130% 100%)';
const DIAGONAL_SHOWN = 'polygon(-30% 0%, 200% 0%, 200% 100%, -60% 100%)';

function addEnter(
  timeline: gsap.core.Timeline,
  view: HTMLElement,
  band: HTMLElement | null
) {
  const type = view.dataset.enter ?? 'diagonal';
  timeline.set(view, { autoAlpha: 1 });

  if (type === 'band' && band) {
    // Una franja naranja barre la pantalla y, al retirarse, deja la escena
    timeline
      .set(view, { autoAlpha: 0 })
      .fromTo(
        band,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 0.6, ease: EASE_CUT }
      )
      .set(view, { autoAlpha: 1 })
      .set(band, { transformOrigin: 'right center' })
      .to(band, { scaleX: 0, duration: 0.6, ease: EASE_CUT });
    return;
  }
  if (type === 'wipe') {
    timeline.fromTo(
      view,
      { clipPath: 'inset(0% 0% 0% 100%)' },
      { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: EASE_CUT }
    );
    return;
  }
  if (type === 'rise') {
    timeline.fromTo(
      view,
      { yPercent: 100 },
      { yPercent: 0, duration: 1.1, ease: EASE_CUT }
    );
    return;
  }
  timeline.fromTo(
    view,
    { clipPath: DIAGONAL_HIDDEN },
    { clipPath: DIAGONAL_SHOWN, duration: 1.2, ease: EASE_CUT }
  );
}

function addReveal(
  timeline: gsap.core.Timeline,
  pieces: HTMLElement[],
  position: gsap.Position
) {
  pieces.forEach((piece, index) => {
    const at = index === 0 ? position : '<0.12';
    const fx = piece.dataset.sonoFx ?? 'up';
    if (fx === 'slide') {
      timeline.fromTo(
        piece,
        { xPercent: 140 },
        { xPercent: 0, duration: 1, ease: EASE_IN },
        at
      );
    } else if (fx === 'pop') {
      timeline.fromTo(
        piece,
        { scale: 0, rotate: -24, autoAlpha: 0 },
        {
          scale: 1,
          rotate: 0,
          autoAlpha: 1,
          duration: 0.6,
          ease: 'back.out(1.8)'
        },
        at
      );
    } else if (fx === 'develop') {
      // Revelado de una instantánea: el velo se aclara lento
      timeline.fromTo(
        piece,
        { autoAlpha: 1 },
        { autoAlpha: 0, duration: 2, ease: 'power1.inOut' },
        '<0.35'
      );
    } else if (fx === 'draw') {
      timeline.fromTo(
        piece,
        { strokeDashoffset: 1 },
        { strokeDashoffset: 0, duration: 1.4, ease: 'power2.inOut' },
        at
      );
    } else {
      timeline.fromTo(
        piece,
        { y: 40, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.8, ease: EASE_IN },
        at
      );
    }
  });
}

export function setupSonopizzaStage(root: HTMLElement) {
  const stage = root.querySelector<HTMLElement>('[data-stage]');
  if (!stage) return () => {};
  const band = root.querySelector<HTMLElement>('[data-sono-band]');
  const views = queryAll(root, '[data-sono-view]');
  const sectionNames = queryAll(root, '[data-sono-section-name]').map(
    element => element.textContent ?? ''
  );

  const timeline = gsap.timeline({ paused: true });
  const labels: string[] = [];
  const stepSection: number[] = [];
  const stepSurface: string[] = [];
  const stepView: HTMLElement[] = [];

  views.forEach((view, viewIndex) => {
    const steps = Number(view.dataset.steps ?? 1);
    const section = Number(view.dataset.section ?? 0);
    const previous = views[viewIndex - 1];

    if (viewIndex > 0) gsap.set(view, { autoAlpha: 0 });
    if (view.dataset.motion === 'product') prepareProductMotion(view);
    if (view.dataset.motion === 'flows') prepareFlowsMotion(view);

    for (let step = 0; step < steps; step += 1) {
      const pieces = queryAll(view, `[data-sono-in="${step}"]`);
      const isCoverStart = viewIndex === 0 && step === 0;

      if (!isCoverStart) {
        // Lo que aparece en este paso empieza escondido
        pieces.forEach(piece => {
          const fx = piece.dataset.sonoFx ?? 'up';
          if (fx === 'slide') gsap.set(piece, { xPercent: 140 });
          else if (fx === 'draw') gsap.set(piece, { strokeDashoffset: 1 });
          else if (fx === 'develop') gsap.set(piece, { autoAlpha: 1 });
          else gsap.set(piece, { autoAlpha: 0 });
        });
        if (step === 0) {
          addEnter(timeline, view, band);
          if (previous) timeline.set(previous, { autoAlpha: 0 });
          addReveal(timeline, pieces, '-=0.45');
        } else {
          addReveal(timeline, pieces, '>');
        }
        if (view.dataset.motion === 'audit')
          addAuditMotion(timeline, view, step);
        if (view.dataset.motion === 'journey' && step === 0)
          addJourneyMotion(timeline, view);
        if (view.dataset.motion === 'architecture' && step === 0)
          addArchitectureMotion(timeline, view);
        if (view.dataset.motion === 'flows')
          addFlowsMotion(timeline, view, step);
        if (view.dataset.motion === 'product')
          addProductMotion(timeline, view, step);
      }

      const label = `step-${labels.length}`;
      timeline.addLabel(label);
      labels.push(label);
      stepSection.push(section);
      stepSurface.push(view.dataset.surface ?? 'light');
      stepView.push(view);
    }
  });

  const sectionStep = sectionNames.map((_, section) =>
    stepSection.indexOf(section)
  );

  const free = setupFreeScroll(root, stepView);

  const teardown = createStepNavigator({
    root,
    stage,
    timeline,
    labels,
    stepSection,
    sectionStep,
    innerScroll: free.innerScroll,
    onStep: step => {
      // El contador de celular toma el color claro sobre las escenas oscuras
      root.dataset.world = stepSurface[step] === 'dark' ? 'green' : 'cream';
      free.handleStep(step);
    }
  });

  return () => {
    teardown();
    free.teardown();
    timeline.kill();
    const pieces = queryAll(
      root,
      '[data-sono-in], [data-audit-slot], [data-audit-panel], [data-journey-line], [data-journey-marker], [data-journey-dot], [data-journey-label], [data-journey-card], [data-sitemap-node], [data-sitemap-tree], [data-sitemap-hop], [data-sitemap-marker], [data-flow-map], [data-flow-node], [data-flow-spot], [data-flow-edge], [data-flow-edge-label], [data-flow-tab], [data-free-in], [data-product-letter], [data-product-fade], [data-product-chip], [data-product-phone], [data-product-bg]'
    );
    gsap.set([...views, band, ...pieces], {
      clearProps: 'all'
    });
    delete root.dataset.world;
  };
}
