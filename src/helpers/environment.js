const {
  LOCALHOST_FUNCTIONS_URL_DOMAIN,
  PRODUCTION_FUNCTIONS_URL_DOMAIN
} = require("../../constants");

const isProduction = () => process.env.NODE_ENV === "production";

const isDevelopment = () => process.env.NODE_ENV === "development";

const getFunctionsUrl = () =>
  isProduction()
    ? PRODUCTION_FUNCTIONS_URL_DOMAIN
    : LOCALHOST_FUNCTIONS_URL_DOMAIN;

export { isProduction, isDevelopment, getFunctionsUrl };
