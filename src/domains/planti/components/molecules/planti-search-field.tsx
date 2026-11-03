import { Search } from 'lucide-react';

type PlantiSearchFieldProps = {
  value?: string;
  placeholder: string;
  // Se está escribiendo: muestra el cursor
  hasCaret?: boolean;
};

// Campo de búsqueda por nombre; vacío muestra su texto de ayuda
export function PlantiSearchField({
  value,
  placeholder,
  hasCaret = false
}: PlantiSearchFieldProps) {
  return (
    <div className="planti-search-field" role="search">
      <Search aria-hidden="true" />
      {value ? (
        <span>{value}</span>
      ) : (
        <span className="planti-search-field__placeholder">{placeholder}</span>
      )}
      {hasCaret && (
        <span className="planti-search-field__caret" aria-hidden="true" />
      )}
    </div>
  );
}
