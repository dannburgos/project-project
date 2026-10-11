'use client';

import { useEffect, useRef, useState } from 'react';

const DESKTOP_QUERY = '(min-width: 1024px)';
// Tiempo en que el movimiento alcanza al scroll: un retraso ligero que se nota
// y da sensación de inercia.
const SMOOTHING_MS = 140;
// Imán suave: al dejar de hacer scroll cerca de un año, la línea se acomoda en
// él. Solo actúa si el año está a menos de esta distancia.
const SNAP_RANGE_REM = 6;
const SNAP_IDLE_MS = 220;

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

// En escritorio convierte el scroll vertical en un recorrido horizontal:
// calcula cuánto debe medir la sección y cuánto desplazar la línea de tiempo.
// `progress` va de 0 a 1 y `shift` es lo que se desplaza la línea en total, que
// coincide con su ancho: el centro de la pantalla recorre la línea completa.
// En móvil calcula el progreso del recorrido vertical y el año en foco.
// `snapPointsRem` son los puntos de la línea donde actúa el imán.
export function useJourneyScroll(
  initialYear: number,
  snapPointsRem: readonly number[]
) {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [shift, setShift] = useState(0);
  const [rootFontSize, setRootFontSize] = useState(16);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [mobileFocusedYear, setMobileFocusedYear] = useState(initialYear);
  const scrollToAxisRef = useRef<(axisPx: number) => void>(() => {});

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let currentShift = 0;

    // El progreso que se ve va alcanzando al progreso real del scroll con un
    // suavizado, en lugar de saltar a cada vuelta de la rueda.
    let targetProgress = 0;
    let displayedProgress = 0;
    let frameId: number | null = null;
    let lastFrameTime = 0;
    let isFirstUpdate = true;
    let fontSize = 16;
    let idleTimer: ReturnType<typeof setTimeout> | null = null;

    const step = (time: number) => {
      const elapsed = Math.min(64, time - lastFrameTime);
      lastFrameTime = time;
      const difference = targetProgress - displayedProgress;
      if (Math.abs(difference) < 0.00005) {
        displayedProgress = targetProgress;
        setProgress(displayedProgress);
        frameId = null;
        return;
      }
      displayedProgress += difference * (1 - Math.exp(-elapsed / SMOOTHING_MS));
      setProgress(displayedProgress);
      frameId = requestAnimationFrame(step);
    };

    const moveTo = (value: number) => {
      targetProgress = value;
      // La primera medición (al cargar o recargar) no anima desde cero.
      if (isFirstUpdate || reducedMotion.matches) {
        isFirstUpdate = false;
        displayedProgress = value;
        setProgress(value);
        return;
      }
      if (frameId === null) {
        lastFrameTime = performance.now();
        frameId = requestAnimationFrame(step);
      }
    };

    // Se mide solo al cargar o al cambiar el tamaño de la ventana.
    const measure = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      fontSize =
        parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      setRootFontSize(fontSize);
      setViewportWidth(viewport?.clientWidth ?? 0);
      currentShift =
        media.matches && viewport && track
          ? Math.max(0, track.scrollWidth - viewport.clientWidth)
          : 0;
      setShift(currentShift);
    };

    // En móvil, el año en foco es el más cercano al centro de la ventana.
    const findMobileYear = () => {
      const section = sectionRef.current;
      if (!section) return;
      const years = Array.from(
        section.querySelectorAll<HTMLElement>('[data-year]')
      );
      if (years.length === 0) return;
      const distanceTo = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        return Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
      };
      const closest = years.reduce((best, element) =>
        distanceTo(element) < distanceTo(best) ? element : best
      );
      setMobileFocusedYear(Number(closest.dataset.year));
    };

    const update = () => {
      const section = sectionRef.current;
      const viewport = viewportRef.current;
      if (!section || !viewport) return;
      const rect = section.getBoundingClientRect();

      if (media.matches) {
        const stickyTop = parseFloat(getComputedStyle(viewport).top) || 0;
        const distance = section.offsetHeight - viewport.offsetHeight;
        moveTo(distance > 0 ? clamp((stickyTop - rect.top) / distance) : 0);
      } else {
        moveTo(clamp((window.innerHeight / 2 - rect.top) / rect.height));
        findMobileYear();
      }
    };

    // Lleva la página hasta el punto de la línea indicado (en px desde el
    // inicio de la línea). Sirve para el teclado y para los clics en la línea.
    scrollToAxisRef.current = (axisPx: number) => {
      const section = sectionRef.current;
      const viewport = viewportRef.current;
      if (!media.matches || !section || !viewport || !currentShift) return;
      const targetProgress = clamp(axisPx / currentShift);
      const stickyTop = parseFloat(getComputedStyle(viewport).top) || 0;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const distance = section.offsetHeight - viewport.offsetHeight;
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      window.scrollTo({
        top: sectionTop - stickyTop + targetProgress * distance,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    };

    // Si la persona deja de hacer scroll cerca de un año, la línea se acomoda
    // en él para que el contador y la tarjeta queden quietos y legibles.
    const snapToNearestPoint = () => {
      if (!media.matches || !currentShift || snapPointsRem.length === 0) {
        return;
      }
      const centerRem = (targetProgress * currentShift) / fontSize;
      const nearest = snapPointsRem.reduce((best, point) =>
        Math.abs(point - centerRem) < Math.abs(best - centerRem) ? point : best
      );
      const distance = Math.abs(nearest - centerRem);
      if (distance > 0.25 && distance <= SNAP_RANGE_REM) {
        scrollToAxisRef.current(nearest * fontSize);
      }
    };

    const handleScroll = () => {
      update();
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(snapToNearestPoint, SNAP_IDLE_MS);
    };

    const handleResize = () => {
      measure();
      update();
    };

    handleResize();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    media.addEventListener('change', handleResize);
    return () => {
      if (frameId !== null) cancelAnimationFrame(frameId);
      if (idleTimer) clearTimeout(idleTimer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      media.removeEventListener('change', handleResize);
    };
  }, [snapPointsRem]);

  const scrollToAxis = (axisPx: number) => scrollToAxisRef.current(axisPx);

  return {
    sectionRef,
    viewportRef,
    trackRef,
    progress,
    shift,
    rootFontSize,
    viewportWidth,
    mobileFocusedYear,
    scrollToAxis
  };
}
