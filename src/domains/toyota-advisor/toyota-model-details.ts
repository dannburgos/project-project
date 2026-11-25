import type { ToyotaModelId } from './types/toyota-advisor.types';
import type { ToyotaModelDetail } from './types/toyota-model-details.types';

const AUTO = 'Transmisión automática en todas sus versiones';
const SAFETY = '7 bolsas de aire y sistema de pre-colisión';

// Razones, versiones y ficha de cada modelo, tal como están en el caso (D.6)
// y en .claude/knowledge/toyota/ficha-datos-prototipo.md. Lo que la ficha
// oficial no trae queda sin texto; lo de la RAV4, por confirmar
export const TOYOTA_MODEL_DETAILS: Readonly<
  Record<ToyotaModelId, ToyotaModelDetail>
> = {
  yaris: {
    id: 'yaris',
    reasons: [
      {
        text: 'Mide 3.955 mm de largo: el más compacto del catálogo',
        tags: ['city']
      },
      { text: 'Motor híbrido de 1.5 L', tags: ['hybrid', 'saving'] },
      { text: AUTO, tags: ['comfort'] },
      { text: 'Automóvil hatchback para 5 personas', tags: ['car'] },
      { text: SAFETY, tags: [] }
    ],
    versions: [
      {
        name: 'XL 1.5 HEV',
        drivetrain: 'Híbrido 1.5 L · E-CVT · 4x2',
        price: 89_900_000
      },
      {
        name: 'XS 1.5 HEV',
        drivetrain: 'Híbrido 1.5 L · E-CVT · 4x2',
        price: 96_900_000
      }
    ],
    specs: {
      seats: { text: '5', value: 5 },
      engine: { text: 'Híbrido 1.5 L' },
      power: { text: '116 hp combinada', value: 116 },
      transmission: { text: 'Automática E-CVT' },
      traction: { text: 'Delantera (2WD)' },
      length: { text: '3.955 mm', value: 3955 },
      width: { text: '1.745 mm', value: 1745 },
      height: { text: '1.520 mm', value: 1520 },
      clearance: { text: '135 mm', value: 135 },
      airbags: { text: '7', value: 7 },
      payload: { text: '450 kg', value: 450 },
      trunk: {}
    }
  },
  corolla: {
    id: 'corolla',
    reasons: [
      {
        text: 'Sedán de 4.630 mm de largo con tracción delantera',
        tags: ['car']
      },
      { text: 'Motor híbrido de 1.8 L', tags: ['hybrid', 'saving'] },
      { text: AUTO, tags: ['comfort'] },
      {
        text: 'Pantalla de 10" con CarPlay y Android Auto inalámbricos, según versión',
        tags: ['technology']
      },
      { text: 'Sedán para 5 personas', tags: ['city'] },
      { text: SAFETY, tags: [] }
    ],
    versions: [
      {
        name: 'XLI 1.8 HEV',
        drivetrain: 'Híbrido 1.8 L · E-CVT · 4x2',
        price: 109_900_000
      },
      {
        name: 'XEI 1.8 HEV',
        drivetrain: 'Híbrido 1.8 L · E-CVT · 4x2',
        price: 122_200_000
      },
      {
        name: 'SEG 1.8 HEV',
        drivetrain: 'Híbrido 1.8 L · E-CVT · 4x2',
        price: 135_200_000
      }
    ],
    specs: {
      seats: { text: '5', value: 5 },
      engine: { text: 'Híbrido 1.8 L' },
      power: { text: '121 hp combinada', value: 121 },
      transmission: { text: 'Automática E-CVT' },
      traction: { text: 'Delantera (2WD)' },
      length: { text: '4.630 mm', value: 4630 },
      width: { text: '1.780 mm', value: 1780 },
      height: { text: '1.455 mm', value: 1455 },
      clearance: { text: '148 mm', value: 148 },
      airbags: { text: '7', value: 7 },
      payload: { text: '410 kg', value: 410 },
      trunk: {}
    }
  },
  corollaCross: {
    id: 'corollaCross',
    reasons: [
      {
        text: 'SUV compacta para 5 personas, de 1.620 mm de alto',
        tags: ['space', 'suv']
      },
      { text: 'Versiones híbridas de 1.8 L', tags: ['hybrid', 'saving'] },
      {
        text: 'Mide 4.460 mm de largo: más corta que el Corolla',
        tags: ['city']
      },
      { text: AUTO, tags: ['comfort'] },
      {
        text: 'Pantalla de 10" con CarPlay y Android Auto inalámbricos, según versión',
        tags: ['technology']
      },
      { text: SAFETY, tags: [] }
    ],
    versions: [
      {
        name: 'XEI 1.8 HEV',
        drivetrain: 'Híbrido 1.8 L · E-CVT · 4x2',
        price: 139_900_000
      },
      {
        name: 'SEG 2.0 Gasolina',
        drivetrain: 'Gasolina 2.0 L · CVT 10 vel. · 4x2',
        price: 150_500_000
      },
      {
        name: 'SEG 1.8 HEV',
        drivetrain: 'Híbrido 1.8 L · E-CVT · 4x2',
        price: 156_900_000
      }
    ],
    specs: {
      seats: { text: '5', value: 5 },
      engine: { text: 'Híbrido 1.8 L o gasolina 2.0 L' },
      power: { text: '121 hp híbrido o 169 hp gasolina', value: 169 },
      transmission: { text: 'E-CVT (híbrido) o CVT 10 vel. (gasolina)' },
      traction: { text: 'Delantera (2WD)' },
      length: { text: '4.460 mm', value: 4460 },
      width: { text: '1.825 mm', value: 1825 },
      height: { text: '1.620 mm', value: 1620 },
      clearance: { text: '161 mm', value: 161 },
      airbags: { text: '7', value: 7 },
      payload: {},
      trunk: {}
    }
  },
  rav4: {
    id: 'rav4',
    reasons: [
      { text: 'SUV mediana de 4.600 mm de largo', tags: ['suv', 'space'] },
      { text: 'Motor híbrido de 2.5 L', tags: ['hybrid', 'saving'] },
      { text: '239 hp de potencia combinada', tags: ['power'] },
      { text: 'Tracción 4x4 integral eléctrica', tags: ['versatility'] },
      {
        text: 'Pantalla táctil de 10,5" o 12,9", según versión',
        tags: ['technology']
      },
      { text: AUTO, tags: ['comfort'] },
      { text: '8 bolsas de aire y Toyota Safety Sense 4.0', tags: [] }
    ],
    versions: [
      {
        name: 'XLE 2.5 HEV',
        drivetrain: 'Híbrido 2.5 L · E-CVT · 4x4',
        price: 207_500_000
      },
      {
        name: 'Limited 2.5 HEV',
        drivetrain: 'Híbrido 2.5 L · E-CVT · 4x4',
        price: 235_500_000
      }
    ],
    specs: {
      seats: { text: '5', value: 5 },
      engine: { text: 'Híbrido 2.5 L' },
      power: { text: '239 hp combinada', value: 239, isPending: true },
      transmission: { text: 'Automática E-CVT' },
      traction: { text: 'Integral eléctrica 4x4' },
      length: { text: '4.600 mm', value: 4600, isPending: true },
      width: { text: '1.855 mm', value: 1855, isPending: true },
      height: { text: '1.695 mm', value: 1695, isPending: true },
      clearance: {},
      airbags: { text: '8', value: 8 },
      payload: {},
      trunk: {}
    }
  },
  hilux: {
    id: 'hilux',
    reasons: [
      { text: 'Hasta 875 kg de capacidad de carga', tags: ['cargo'] },
      {
        text: 'Tracción 4x4 con bajo y 286 mm de altura al piso',
        tags: ['terrain']
      },
      { text: 'Hasta 201 hp con el motor diésel 2.8 L', tags: ['power'] },
      {
        text: 'Pick-up doble cabina para 5 personas y carga',
        tags: ['pickup', 'versatility']
      },
      { text: 'Motores a gasolina o diésel', tags: ['combustion'] },
      { text: SAFETY, tags: [] }
    ],
    versions: [
      {
        name: 'D.C. SR 2.7 Gasolina MT',
        drivetrain: 'Gasolina 2.7 L · Mecánica 5 vel. · 4x4',
        price: 196_500_000
      },
      {
        name: 'D.C. SR 2.4 Diésel MT',
        drivetrain: 'Diésel 2.4 L · Mecánica 6 vel. · 4x4',
        price: 217_500_000
      },
      {
        name: 'D.C. SRV 2.4 Diésel AT',
        drivetrain: 'Diésel 2.4 L · Automática 6 vel. · 4x4',
        price: 259_500_000
      },
      {
        name: 'D.C. SRX 2.8 Diésel AT',
        drivetrain: 'Diésel 2.8 L · Automática 6 vel. · 4x4',
        price: 291_900_000
      }
    ],
    specs: {
      seats: { text: '5', value: 5 },
      engine: { text: 'Gasolina 2.7 L o diésel 2.4 / 2.8 L' },
      power: { text: 'Hasta 201 hp', value: 201 },
      transmission: { text: 'Mecánica 5/6 vel. o automática 6 vel.' },
      traction: { text: '4x4 con bajo' },
      length: { text: '5.325 mm', value: 5325 },
      width: { text: '1.855 mm', value: 1855 },
      height: { text: '1.815 mm', value: 1815 },
      clearance: { text: '286 mm', value: 286 },
      airbags: { text: '7', value: 7 },
      payload: { text: '720 a 875 kg', value: 875 },
      trunk: { text: 'No aplica (platón)' }
    }
  },
  fortuner: {
    id: 'fortuner',
    reasons: [
      {
        text: '7 puestos en 3 filas: el único del catálogo',
        tags: ['sevenSeats']
      },
      { text: 'SUV grande de 4.795 mm de largo', tags: ['suv', 'space'] },
      {
        text: '279 mm de altura al piso y versiones 4x4 con bajo',
        tags: ['terrain']
      },
      { text: 'Hasta 201 hp con el motor diésel 2.8 L', tags: ['power'] },
      { text: 'Versiones 4x2 y 4x4 con bajo', tags: ['versatility'] },
      { text: AUTO, tags: ['comfort'] },
      { text: 'Motores a gasolina o diésel', tags: ['combustion'] },
      { text: SAFETY, tags: [] }
    ],
    versions: [
      {
        name: 'SR 2.8 Diésel 4x2 AT',
        drivetrain: 'Diésel 2.8 L · Automática 6 vel. · 4x2',
        price: 242_900_000
      },
      {
        name: 'SRV 2.7 Gasolina 4x2 AT',
        drivetrain: 'Gasolina 2.7 L · Automática 6 vel. · 4x2',
        price: 246_900_000
      },
      {
        name: 'SRV 2.8 Diésel 4x2 AT',
        drivetrain: 'Diésel 2.8 L · Automática 6 vel. · 4x2',
        price: 284_900_000
      },
      {
        name: 'SR 2.8 Diésel 4x4 AT',
        drivetrain: 'Diésel 2.8 L · Automática 6 vel. · 4x4',
        price: 288_900_000
      },
      {
        name: 'SRV 2.8 Diésel 4x4 AT',
        drivetrain: 'Diésel 2.8 L · Automática 6 vel. · 4x4',
        price: 326_900_000
      }
    ],
    specs: {
      seats: { text: '7', value: 7 },
      engine: { text: 'Gasolina 2.7 L o diésel 2.8 L' },
      power: { text: 'Hasta 201 hp', value: 201 },
      transmission: { text: 'Automática 6 vel.' },
      traction: { text: '4x2 trasera o 4x4 con bajo' },
      length: { text: '4.795 mm', value: 4795 },
      width: { text: '1.855 mm', value: 1855 },
      height: { text: '1.835 mm', value: 1835 },
      clearance: { text: '279 mm', value: 279 },
      airbags: { text: '7', value: 7 },
      payload: { text: '500 a 655 kg', value: 655 },
      trunk: {}
    }
  }
};
