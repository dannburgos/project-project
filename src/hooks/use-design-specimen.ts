'use client';

import { useState, type ChangeEvent } from 'react';

const MAX_SAMPLE_LENGTH = 44;

// Texto de prueba para ver la tipografía con palabras propias
export function useTypeSample(initial: string) {
  const [text, setText] = useState(initial);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value.slice(0, MAX_SAMPLE_LENGTH));

  return {
    text: text.trim() === '' ? initial : text,
    value: text,
    handleChange
  };
}

// Cambia cada vez que hay que repetir una animación de muestra
export function useReplay() {
  const [playKey, setPlayKey] = useState(0);
  const handleReplay = () => setPlayKey(current => current + 1);
  return { playKey, handleReplay };
}

// Una opción elegida a la vez (etiquetas, respuestas)
export function useSingleChoice(initial: number | null) {
  const [selected, setSelected] = useState<number | null>(initial);
  const handleSelect = (index: number) => setSelected(index);
  return { selected, handleSelect };
}

// Varias opciones, hasta un máximo (comparador)
export function useMultiChoice(max: number) {
  const [selected, setSelected] = useState<readonly number[]>([]);

  const handleToggle = (index: number) =>
    setSelected(current =>
      current.includes(index)
        ? current.filter(item => item !== index)
        : current.length < max
          ? [...current, index]
          : current
    );

  return { selected, handleToggle };
}
