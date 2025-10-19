import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  transpilePackages: ["@echara/ui", "@echara/core", "@echara/tokens"],
  outputFileTracingRoot: path.join(__dirname, "../../"),
};

export default nextConfig;
