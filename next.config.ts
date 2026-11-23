import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Sin el indicador "N" de desarrollo: se colaba dentro de los prototipos
  devIndicators: false,
  // Calidades que las imágenes pueden pedir: la de las fotos del caso es alta
  images: { qualities: [75, 92] }
};

export default nextConfig;
