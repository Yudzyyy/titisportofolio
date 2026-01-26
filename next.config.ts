import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image Optimization
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      }
    ],
  },

  // Experimental Features (React 19 / Next 15)
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', 'cmdk'],
  },

  // Security Headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Production Optimizations
  output: 'standalone',
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
