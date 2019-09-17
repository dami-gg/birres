const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack"); // eslint-disable-line

module.exports = {
  distDir: "public/_next",
  target: "serverless",
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    return config;
  }
};
