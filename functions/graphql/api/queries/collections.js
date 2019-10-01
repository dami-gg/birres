const {
  getUserCollection,
  getBatchedBeers
} = require("../../../database-operations");
const { logger } = require("../../../helpers");

const getCollection = async ({ user: { user_id: userId } }) => {
  let collection;

  try {
    collection = await getUserCollection(userId);
    logger.debug(
      `[api/getCollection]: successfully fetched collection of user ${userId}`
    );
  } catch (err) {
    logger.error(
      `[api/getCollection]: could not get collection of user ${userId} due to ${err}`
    );
    return [];
  }

  const beerIds = Object.keys(collection);

  try {
    const beers = await getBatchedBeers(beerIds);

    const extendedCollection = beers.map(beer => ({
      ...beer,
      ...collection[beer.id],
      collected: true
    }));

    logger.debug(
      `[api/getCollection]: successfully fetched extended beers information for collection of user ${userId}`
    );

    return extendedCollection;
  } catch (err) {
    logger.error(
      `[api/getCollection]: could not get extended beers information for collection of user ${userId} due to ${err}`
    );
    return [];
  }
};

module.exports = {
  getCollection
};
