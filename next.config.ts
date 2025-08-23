import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add basic i18n support
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
