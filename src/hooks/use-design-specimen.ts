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

// Una opción elegida a la vez (etiquetas, respuestas)
export function useSingleChoice(initial: number | null) {
  const [selected, setSelected] = useState<number | null>(initial);
  const handleSelect = (index: number) => setSelected(index);
  return { selected, handleSelect };
}
