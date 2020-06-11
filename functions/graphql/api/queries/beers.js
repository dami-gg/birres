const {
  getAllBeersFromDatabase,
  getUserCollection
} = require("../../../database-operations");
const { logger } = require("../../../helpers");

const getAllBeers = async () => {
  try {
    const response = await getAllBeersFromDatabase();
    logger.debug("[api/getAllBeers]: successfully fetched a list of beers");
    return response;
  } catch (err) {
    logger.error(
      `[api/getAllBeers]: could not get a list of beers due to ${err}`
    );
    return [];
  }
};

const getAllBeersInUserContext = async ({ user: { user_id: userId } }) => {
  try {
    const allBeers = await getAllBeersFromDatabase();
    logger.debug(
      "[api/getAllBeersInUserContext]: successfully fetched a list of beers"
    );

    const userCollection = await getUserCollection(userId);
    logger.debug(
      `[api/getAllBeersInUserContext]: successfully fetched collection of user ${userId}`
    );

    return allBeers.map((beer) => ({
      ...beer,
      collected: userCollection.hasOwnProperty(beer.id) // eslint-disable-line no-prototype-builtins
    }));
  } catch (err) {
    logger.error(
      `[api/getAllBeersInUserContext]: could not get a list of beers in user ${userId} context due to ${err}`
    );
    return [];
  }
};

const getBeerById = async () => {
  return {};
};

const getAllBeerTypes = async () => {
  try {
    const allBeers = await getAllBeersFromDatabase();
    logger.debug("[api/getAllBeerTypes]: successfully fetched a list of beers");

    return allBeers
      .reduce(
        (types, { type }) => (types.includes(type) ? types : [...types, type]),
        []
      )
      .sort();
  } catch (err) {
    logger.error(
      `[api/getAllBeerTypes]: could not get a list of beer types due to ${err}`
    );
    return [];
  }
};

const getAllBeerOrigins = async () => {
  try {
    const allBeers = await getAllBeersFromDatabase();
    logger.debug(
      "[api/getAllBeerOrigins]: successfully fetched a list of beers"
    );

    return allBeers
      .reduce(
        (origins, { origin }) =>
          origins.includes(origin) ? origins : [...origins, origin],
        []
      )
      .sort();
  } catch (err) {
    logger.error(
      `[api/getAllBeerOrigins]: could not get a list of beer origins due to ${err}`
    );
    return [];
  }
};

module.exports = {
  getAllBeers,
  getAllBeersInUserContext,
  getAllBeerOrigins,
  getAllBeerTypes,
  getBeerById
};
