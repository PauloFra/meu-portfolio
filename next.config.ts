/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  webpack(config: { resolve: { modules: string[] } }) {
    config.resolve.modules.push(__dirname);
    return config;
  },
};

module.exports = nextConfig;
