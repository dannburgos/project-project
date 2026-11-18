// Llena una plantilla de texto del contenido: "Paso {current} de {total}".
// El contenido llega del servidor, así que los textos dinámicos no pueden ser
// funciones
export function fillTemplate(
  template: string,
  values: Record<string, string | number>
) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match
  );
}
