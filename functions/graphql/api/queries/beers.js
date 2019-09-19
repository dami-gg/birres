const fetch = require("node-fetch");

const { getApiRequestOptions } = require("./queries.helpers.js");

const { getFunctionsUrl } = require("../../../helpers");

const getAllBeers = async (args, context) => {
  try {
    const response = await fetch(
      `${getFunctionsUrl()}/beers`,
      getApiRequestOptions({ context })
    );

    return await response.json();
  } catch (err) {
    // TODO Handle error
    return [];
  }
};

module.exports = {
  getAllBeers
};
