'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'portfolio-lab:viewed-projects';

function readViewed(): string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed)
      ? parsed.filter((item): item is string => typeof item === 'string')
      : [];
  } catch {
    return [];
  }
}

// Recuerda en este navegador qué proyectos ya abrió la persona. Al montarse
// registra el proyecto actual y devuelve los que ya vio (sin contar el
// actual). Antes de leer el navegador, la lista está vacía.
export function useViewedProjects(currentSlug: string) {
  const [viewed, setViewed] = useState<string[]>([]);

  useEffect(() => {
    const previous = readViewed();
    const frameId = requestAnimationFrame(() =>
      setViewed(previous.filter(slug => slug !== currentSlug))
    );
    try {
      if (!previous.includes(currentSlug)) {
        window.localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify([...previous, currentSlug])
        );
      }
    } catch {
      // Sin almacenamiento disponible: se muestran los proyectos en orden
    }
    return () => cancelAnimationFrame(frameId);
  }, [currentSlug]);

  return viewed;
}
