const fetch = require("node-fetch");

const { getApiRequestOptions } = require("./queries.helpers.js");

const { getFunctionsUrl, logger } = require("../../../helpers");

const getAllBeers = async (args, context) => {
  try {
    const response = await fetch(
      `${getFunctionsUrl()}/beers`,
      getApiRequestOptions({ context })
    );

    logger.debug("api/getAllBeers", "successfully fetched a list of beers");
    return await response.json();
  } catch (err) {
    logger.error(
      "api/getAllBeers",
      `could not get a list of beers due to ${err}`
    );
    return [];
  }
};

module.exports = {
  getAllBeers
};
