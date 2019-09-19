const LOCALHOST_FUNCTIONS_URL_DOMAIN =
  "http://localhost:5000/beer-collection/us-central1";

const PRODUCTION_FUNCTIONS_URL_DOMAIN =
  "https://us-central1-beer-collection.cloudfunctions.net";

const isEmulator = () => process.env.FUNCTIONS_EMULATOR === "true";

const isProduction = () => !isEmulator();

const getFunctionsUrl = () =>
  isProduction()
    ? PRODUCTION_FUNCTIONS_URL_DOMAIN
    : LOCALHOST_FUNCTIONS_URL_DOMAIN;

module.exports = {
  isEmulator,
  isProduction,
  getFunctionsUrl
};
