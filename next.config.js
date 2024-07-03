const path = require("path");

module.exports = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    unoptimized: true
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve("./"));

    return config;
  },
};
