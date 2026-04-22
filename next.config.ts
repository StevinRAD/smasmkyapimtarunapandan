import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Gunakan gambar lokal saja untuk performa lebih baik
    unoptimized: true, // Disable image optimization di dev untuk reload lebih cepat
    qualities: [100, 75], // Tambahkan quality 100 untuk gambar berkualitas tinggi
  },
};

export default nextConfig;
