const { v4 } = require("uuid");
const {
  createBeer,
  getBeer,
  setCollectionBeer
} = require("../../../database-operations");
const { logger } = require("../../../helpers");

const createBeerInCollection = async (
  { beer },
  { user: { user_id: userId } }
) => {
  const { rating, ...beerData } = beer;

  const beerId = v4();
  const beerForCatalog = { id: beerId, ...beerData };

  try {
    await createBeer(beerForCatalog);
    logger.debug(
      `[api/createBeerInCollection]: successfully created beer ${beerId} in catalog`
    );
  } catch (err) {
    logger.error(
      `[api/createBeerInCollection]: could not create beer ${beerId} in catalog due to: ${err}`
    );

    return null;
  }

  const beerForCollection = {
    id: beerId,
    rating: rating && parseInt(rating, 10)
  };

  try {
    setCollectionBeer(userId, beerForCollection);
    logger.debug(
      `[api/createBeerInCollection]: successfully added beer ${beerId} to collection of user ${userId}`
    );

    return await getBeer(beerId); // TODO Check if the beer parameter can be returned instead
  } catch (err) {
    logger.error(
      `[api/createBeerInCollection]: could not add beer ${beerId} to collection of user ${userId} due to: ${err}`
    );

    return null;
  }
};

module.exports = {
  createBeerInCollection
};
