'use client';

import { useEffect, useState } from 'react';

type LocalTimeProps = {
  timeZone: string;
};

// Hora actual de una ciudad, que se actualiza sola. Se muestra recién cuando la
// página carga en el navegador, para que no difiera de la del servidor.
export function LocalTime({ timeZone }: LocalTimeProps) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat('es-CO', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone
      }).format(new Date());
    const frameId = requestAnimationFrame(() => setTime(format()));
    const timer = setInterval(() => setTime(format()), 20000);
    return () => {
      cancelAnimationFrame(frameId);
      clearInterval(timer);
    };
  }, [timeZone]);

  return <time className="local-time">{time ?? '--:--'}</time>;
}
