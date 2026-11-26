'use client';

import { useEffect, useRef } from 'react';

// Revela los bloques del caso al entrar en pantalla. No dibuja nada: busca el
// caso que lo contiene y observa sus elementos [data-qb-reveal]. Sin
// JavaScript, o con «reducir movimiento», todo queda visible desde el inicio.
export function QuboMotion() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const story = ref.current?.closest<HTMLElement>('.qb-story');
    if (!story) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    story.classList.add('qb-story--motion');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute('data-visible', 'true');
          observer.unobserve(entry.target);
        });
      },
      // Umbral 0: un bloque más alto que la pantalla también se revela
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    );
    story
      .querySelectorAll('[data-qb-reveal]')
      .forEach(element => observer.observe(element));

    return () => {
      observer.disconnect();
      story.classList.remove('qb-story--motion');
    };
  }, []);

  return <span ref={ref} hidden />;
}
