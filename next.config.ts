// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',            // bắt buộc để có out/
  images: { unoptimized: true }, // nếu dùng <Image/> trên hosting tĩnh
  eslint: { ignoreDuringBuilds: true },
  // Nếu deploy vào thư mục con, có thể bật:
  // basePath: '/myapp',
  // assetPrefix: '/myapp/',
  // trailingSlash: true,
};

export default nextConfig;
