/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['framer-motion'],

  // Disable Webpack persistent cache to fix ENOENT rename errors on Windows
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

export default nextConfig;
