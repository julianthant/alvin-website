import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fn4nylftgotirnpd.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
