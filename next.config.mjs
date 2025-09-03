/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/AkkeBox",
  assetPrefix: "/AkkeBox/",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
