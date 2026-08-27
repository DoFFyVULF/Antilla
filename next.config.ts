import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Полная статика. Бэкенда нет, см. ТЗ п.0.7.
  output: "export",
  // Статический экспорт не поддерживает дефолтный next/image-оптимизатор;
  // ассеты уже локальные, AVIF/WebP на месте. См. ТЗ п.9.4.
  images: {
    unoptimized: true,
  },
  // Скользящий деплой, выключаем source maps — статика, не нужны.
  productionBrowserSourceMaps: false,
};

export default nextConfig;
