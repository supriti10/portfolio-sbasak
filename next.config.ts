import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // ✅ Disable optimization for static export
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
