import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const configDir = path.dirname(fileURLToPath(import.meta.url));
const monorepoRoot = path.join(configDir, "..");
const localThemesPath = path.join(configDir, "themes");
const adminThemesPath = path.join(monorepoRoot, "sv-admin-panel/src/themes");
const themesPath = fs.existsSync(localThemesPath) ? localThemesPath : adminThemesPath;

const adminBase = (
  process.env.NEXT_PUBLIC_ADMIN_PANEL_URL ||
  process.env.ADMIN_PANEL_URL ||
  "http://localhost:3000"
).replace(/\/$/, "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    externalDir: true,
  },
  turbopack: {
    root: fs.existsSync(localThemesPath) ? configDir : monorepoRoot,
    resolveAlias: {
      "@sv-themes": fs.existsSync(localThemesPath) ? "./themes" : "./sv-admin-panel/src/themes",
    },
  },
  webpack: (config) => {
    config.resolve.alias["@sv-themes"] = themesPath;
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/themes/:path*",
        destination: `${adminBase}/themes/:path*`,
      },
    ];
  },
  allowedDevOrigins: ["localhost", "127.0.0.1", "0.0.0.0"],
};

export default nextConfig;
