import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // This will allow the build to succeed even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
