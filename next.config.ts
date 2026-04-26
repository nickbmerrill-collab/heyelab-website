import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Mount the Tokendome app at heyelab.com/tokendome by proxying to its
  // own Vercel deployment. The destination strips the /tokendome prefix,
  // so tokendome's own routing (rooted at /api/, /u/<login>, etc.)
  // continues to work unchanged. Tokendome's frontend reads its base
  // path from location.pathname at boot, so API calls and links come
  // back as /tokendome/api/... and stay on this origin.
  async rewrites() {
    return [
      { source: '/tokendome',        destination: 'https://tokendome.vercel.app/' },
      { source: '/tokendome/:path*', destination: 'https://tokendome.vercel.app/:path*' },
    ];
  },
};

export default nextConfig;
