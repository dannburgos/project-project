'use client';

import { useEffect, useState } from 'react';

// Devuelve el id de la sección visible, para marcar dónde está la persona
// dentro de un caso de estudio.
export function useActiveSection(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.find(entry => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
