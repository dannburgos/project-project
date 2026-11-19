import type { PetDesignSystem } from '@/content/pet-design-system.types';

// Sistema de diseño de la app de PetRide. La paleta de marca es la del caso;
// neutros, estados, escala de texto y motion son una propuesta sobre esa base.
// Los datos de las tarjetas (nombres, placas, precios) son de ejemplo.
export const petrideDesignSystem: PetDesignSystem = {
  title: 'Sistema de diseño',
  lead: 'La base visual de la app, en modo claro: fundamentos y componentes. Todo se puede tocar.',
  groups: {
    foundations: 'Fundamentos',
    components: 'Componentes'
  },
  foundations: {
    color: {
      title: 'Color',
      note: 'Toca una muestra para copiar su código. El lima va solo como fondo, nunca como texto.',
      copyLabel: 'Copiar el código de {name}',
      copiedLabel: 'Copiado',
      groups: [
        {
          title: 'Marca',
          swatches: [
            {
              id: 'night',
              name: 'Noche',
              hex: '#0B0C24',
              use: 'Texto principal'
            },
            {
              id: 'indigo',
              name: 'Índigo',
              hex: '#4849E8',
              use: 'Botón principal y enlaces'
            },
            {
              id: 'lime',
              name: 'Lima',
              hex: '#DDF344',
              use: 'Acento y resaltado'
            },
            {
              id: 'peri',
              name: 'Periwinkle',
              hex: '#ABC4FF',
              use: 'Bordes activos'
            },
            {
              id: 'lilac',
              name: 'Lila',
              hex: '#E9EDFF',
              use: 'Tags de la marca'
            },
            {
              id: 'cloud',
              name: 'Nube',
              hex: '#F5F9FF',
              use: 'Fondo de la app'
            }
          ]
        },
        {
          title: 'Neutros',
          swatches: [
            {
              id: 'ink',
              name: 'Tinta',
              hex: '#4A4B6A',
              use: 'Texto secundario'
            },
            {
              id: 'hint',
              name: 'Pista',
              hex: '#8C8DA6',
              use: 'Placeholder e íconos'
            },
            {
              id: 'border',
              name: 'Borde',
              hex: '#E3E6F2',
              use: 'Bordes y divisores'
            },
            {
              id: 'surface',
              name: 'Superficie',
              hex: '#EEF1F8',
              use: 'Campos y bloques'
            },
            {
              id: 'card',
              name: 'Tarjeta',
              hex: '#FFFFFF',
              use: 'Tarjetas y hojas'
            }
          ]
        },
        {
          title: 'Estados',
          swatches: [
            {
              id: 'success',
              name: 'Éxito',
              hex: '#16A36A',
              use: 'Confirmaciones'
            },
            {
              id: 'warning',
              name: 'Alerta',
              hex: '#F2A93B',
              use: 'Revisar antes de seguir'
            },
            {
              id: 'error',
              name: 'Error',
              hex: '#E5484D',
              use: 'Fallos y bloqueos'
            },
            {
              id: 'info',
              name: 'Info',
              hex: '#4849E8',
              use: 'Avisos del viaje'
            }
          ]
        }
      ]
    },
    type: {
      title: 'Tipografía',
      family: 'Outfit',
      tryLabel: 'Prueba tu texto',
      tryPlaceholder: 'Luna viaja contigo',
      steps: [
        { id: 'display', name: 'Display', spec: '32 · 800 · 36' },
        { id: 'title', name: 'Título', spec: '24 · 700 · 30' },
        { id: 'subtitle', name: 'Subtítulo', spec: '20 · 600 · 26' },
        { id: 'body', name: 'Cuerpo', spec: '16 · 400 · 24' },
        { id: 'label', name: 'Etiqueta', spec: '14 · 500 · 20' },
        { id: 'note', name: 'Nota', spec: '12 · 500 · 16' }
      ]
    },
    shape: {
      title: 'Forma',
      spacingTitle: 'Espaciado',
      spacing: [4, 8, 12, 16, 24, 32, 48],
      radiusTitle: 'Radios',
      radii: [
        { name: 'Chip', value: '8' },
        { name: 'Campo', value: '16' },
        { name: 'Tarjeta', value: '24' },
        { name: 'Botón', value: 'Píldora' }
      ],
      shadowTitle: 'Sombras',
      shadows: [
        { name: 'Tarjeta', value: '0 4 16 · 6%' },
        { name: 'Flotante', value: '0 12 32 · 12%' }
      ]
    },
    icons: {
      title: 'Iconografía',
      icons: [
        { id: 'paw', name: 'Huella' },
        { id: 'dog', name: 'Perro' },
        { id: 'cat', name: 'Gato' },
        { id: 'pin', name: 'Ubicación' },
        { id: 'car', name: 'Vehículo' },
        { id: 'route', name: 'Ruta' },
        { id: 'clock', name: 'Tiempo' },
        { id: 'chat', name: 'Chat' },
        { id: 'star', name: 'Calificación' },
        { id: 'shield', name: 'Seguridad' },
        { id: 'bell', name: 'Avisos' },
        { id: 'user', name: 'Perfil' }
      ]
    },
    motion: {
      title: 'Motion',
      rules: [
        {
          id: 'press',
          name: 'Responde al toque',
          spec: 'Rápida · 160 ms · rebote'
        },
        {
          id: 'sheet',
          name: 'Acompaña el cambio',
          spec: 'Lenta · 400 ms · entra'
        },
        {
          id: 'arrival',
          name: 'Celebra lo logrado',
          spec: 'Media · 240 ms · rebote'
        }
      ]
    }
  },
  components: {
    buttons: {
      title: 'Botones',
      label: 'Pedir viaje',
      variants: [
        { id: 'primary', name: 'Principal' },
        { id: 'secondary', name: 'Secundario' },
        { id: 'ghost', name: 'Texto' }
      ],
      states: [
        { id: 'default', name: 'Normal' },
        { id: 'pressed', name: 'Presionado' },
        { id: 'disabled', name: 'Deshabilitado' },
        { id: 'loading', name: 'Cargando' }
      ]
    },
    fields: {
      title: 'Campos',
      label: 'Nombre de la mascota',
      placeholder: 'Toby',
      samples: [
        {
          state: 'empty',
          caption: 'Vacío',
          value: '',
          message: 'Así lo verá el conductor'
        },
        {
          state: 'focus',
          caption: 'Foco',
          value: 'To',
          message: 'Así lo verá el conductor'
        },
        {
          state: 'filled',
          caption: 'Lleno',
          value: 'Toby',
          message: 'Así lo verá el conductor'
        },
        {
          state: 'error',
          caption: 'Error',
          value: '',
          message: 'Escribe el nombre de tu mascota'
        }
      ],
      tryTitle: 'Pruébalo',
      helper: 'Así lo verá el conductor',
      submitLabel: 'Guardar',
      requiredMessage: 'Escribe el nombre de tu mascota',
      tooLongMessage: 'Usa máximo 20 caracteres',
      maxLength: 20,
      savedMessage: '{name} quedó guardado'
    },
    cards: {
      title: 'Tarjetas',
      pet: {
        name: 'Toby',
        detail: 'Bóxer boston · Mediana · 12 kg',
        tag: 'Compatible'
      },
      driver: {
        name: 'Carlos Rodríguez',
        rating: '4,9',
        vehicle: 'Renault Logan · KLM 482',
        tag: 'Acepta mascotas'
      },
      trip: {
        route: 'Chapinero → Usaquén',
        date: '12 nov · 6:40 p. m.',
        price: '$16.500',
        tag: 'Finalizado'
      }
    },
    navigation: {
      title: 'Navegación',
      back: 'Volver',
      header: 'Registrar mascota',
      stepLabel: 'Paso {current} de {total}',
      stepCount: 3,
      previousLabel: 'Atrás',
      nextLabel: 'Siguiente',
      tabs: ['Inicio', 'Mascotas', 'Viajes']
    },
    feedback: {
      title: 'Avisos',
      screenTitle: 'Tu viaje',
      screenText: 'Chapinero → Usaquén',
      triggers: [
        { id: 'toast', label: 'Toast' },
        { id: 'banner', label: 'Banner' },
        { id: 'modal', label: 'Modal' },
        { id: 'sheet', label: 'Hoja inferior' }
      ],
      closeLabel: 'Cerrar',
      toast: 'Mascota guardada',
      banner: 'El conductor llega en 4\u00a0min',
      modal: {
        title: '¿Cancelar el viaje?',
        text: 'Se detiene la búsqueda de conductor.',
        confirm: 'Cancelar viaje',
        dismiss: 'Seguir esperando'
      },
      sheet: {
        title: 'Elige quién viaja',
        text: 'Puedes llevar una o varias mascotas.',
        action: 'Listo'
      }
    },
    screens: {
      title: 'Estados de pantalla',
      empty: {
        title: 'Aún no tienes mascotas',
        text: 'Regístrala para pedir viajes con ella.',
        action: 'Agregar mascota'
      },
      loading: {
        title: 'Buscando conductor',
        text: 'Solo te mostramos quienes aceptan a tu mascota.'
      },
      error: {
        title: 'No hay conductores cerca',
        text: 'Intenta de nuevo en unos minutos.',
        action: 'Reintentar'
      }
    }
  }
};
