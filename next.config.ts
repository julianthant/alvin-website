import type { NextConfig } from "next";

const BLOB_HOSTNAME = "fn4nylftgotirnpd.public.blob.vercel-storage.com";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: BLOB_HOSTNAME,
      },
    ],
  },

  // Proxy blob assets through our domain for edge caching
  async rewrites() {
    return [
      {
        source: "/blob/:path*",
        destination: `https://${BLOB_HOSTNAME}/:path*`,
      },
    ];
  },

  // Cache proxied blob assets at the edge for 1 year
  async headers() {
    return [
      {
        source: "/blob/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, s-maxage=31536000, immutable",
          },
          {
            key: "CDN-Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
