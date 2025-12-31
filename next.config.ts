import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: { remotePatterns: [{ hostname: "i.ibb.co.com" }] },
};

export default nextConfig;
