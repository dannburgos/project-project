// Parte un texto alrededor de la primera coincidencia de la búsqueda (sin
// importar mayúsculas), para resaltarla: [antes, coincidencia, después]. Sin
// coincidencia, todo queda en "antes"
export function splitSonopizzaMatch(text: string, query: string) {
  const start = text.toLowerCase().indexOf(query.toLowerCase());
  if (start < 0 || !query) return [text, '', ''] as const;
  const end = start + query.length;
  return [
    text.slice(0, start),
    text.slice(start, end),
    text.slice(end)
  ] as const;
}

// Si un texto contiene la búsqueda, sin importar mayúsculas
export function hasSonopizzaMatch(text: string | undefined, query: string) {
  return Boolean(text?.toLowerCase().includes(query.toLowerCase()));
}
