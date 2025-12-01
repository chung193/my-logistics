// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: { unoptimized: true }, // nếu dùng <Image/> trên hosting tĩnh
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
