import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/GymWebsite",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
