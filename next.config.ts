import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
    viewTransition: true, // ← muss an sein
  },
   trailingSlash: true,
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
};

export default nextConfig;
