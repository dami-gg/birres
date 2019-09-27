const { isEmulator, isProduction, getFunctionsUrl } = require("./environment");
const logger = require("./logger");

module.exports = {
  isEmulator,
  isProduction,
  getFunctionsUrl,
  logger
};
