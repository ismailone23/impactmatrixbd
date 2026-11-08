import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "impactmatrixbd.org" }],
        destination: "https://www.impactmatrixbd.org/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
