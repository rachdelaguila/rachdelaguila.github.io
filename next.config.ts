import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (no server runtime).
  output: "export",
  images: {
    // GitHub Pages cannot run the Next.js image optimizer.
    unoptimized: true,
  },
  // Emit `path/index.html` so routes resolve cleanly on GitHub Pages.
  trailingSlash: true,
};

export default nextConfig;
