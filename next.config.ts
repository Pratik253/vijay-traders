import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/vijay-traders',
  images: {
    unoptimized: true,
  },
  experimental: {},
};

export default nextConfig;
