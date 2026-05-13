import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 🔥 wajib untuk static deploy

  images: {
    unoptimized: true, // 🔥 wajib untuk GitHub Pages
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;