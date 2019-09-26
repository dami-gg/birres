const { getAllBeersFromDatabase } = require("../../../database-operations");
const { logger } = require("../../../helpers");

const getAllBeers = async () => {
  try {
    const response = await getAllBeersFromDatabase();
    logger.debug("api/getAllBeers", "successfully fetched a list of beers");
    return response;
  } catch (err) {
    logger.error(
      "api/getAllBeers",
      `could not get a list of beers due to ${err}`
    );
    return [];
  }
};

const getBeerById = async () => {
  return {};
};

module.exports = {
  getAllBeers,
  getBeerById
};
