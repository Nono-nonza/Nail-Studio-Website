import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a plain static site (HTML/CSS/JS only) for standard shared/cPanel
  // hosting — no Node.js server required.
  output: "export",
  // Write each route as <route>/index.html instead of <route>.html, so
  // Apache's default directory-index behavior serves it at both /route and
  // /route/ with no custom .htaccess rewrite rules needed.
  trailingSlash: true,
  // Static export has no server to run Next's on-demand image optimizer,
  // so next/image must serve files as-is.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
