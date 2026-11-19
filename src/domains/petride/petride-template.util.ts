// Llena una plantilla con {llaves}: 'Ver el perfil de {name}'
export function fillPetrideTemplate(
  template: string,
  values: Record<string, string | number>
) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match
  );
}

// Edad en años con su singular o plural: "1 año", "4 años"
export function formatPetrideAge(
  age: number,
  templates: { year: string; years: string }
) {
  return fillPetrideTemplate(age === 1 ? templates.year : templates.years, {
    count: age
  });
}
