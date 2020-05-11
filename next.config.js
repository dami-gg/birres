const { parsed: env } = require("dotenv").config();
const webpack = require("webpack"); // eslint-disable-line

module.exports = {
  webpack(config) {
    config.plugins.push(
      new webpack.EnvironmentPlugin({
        NODE_ENV: env && env.NODE_ENV ? JSON.stringify(env.NODE_ENV) : "production"
      })
    );

    return config;
  }
};
