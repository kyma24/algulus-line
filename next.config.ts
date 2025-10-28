import type { NextConfig } from "next";

const prod = process.env.NODE_ENV==="production";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {unoptimized:true},
  ...(prod? {
    basePath: "/algulus-line",
    assetPrefix: "/algulus-line/",
  } : {}),
};

export default nextConfig;
