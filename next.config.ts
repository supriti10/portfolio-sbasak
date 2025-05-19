import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio-sbasak',  
  assetPrefix: '/portfolio-sbasak/',

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
