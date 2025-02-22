import { withContentlayer } from "next-contentlayer";

module.exports = withContentlayer({
  reactStrictMode: true,
  webpack(config) {
    config.resolve.modules.push(__dirname);
    return config;
  },
});
