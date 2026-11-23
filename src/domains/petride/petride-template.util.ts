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

// Nombres de las mascotas que viajan: "Toby", "Toby y Kira", "Toby, Luna y Kira"
export function joinPetrideNames(names: readonly string[], template: string) {
  if (names.length < 2) return names.join('');
  return fillPetrideTemplate(template, {
    first: names.slice(0, -1).join(', '),
    second: names[names.length - 1]
  });
}
