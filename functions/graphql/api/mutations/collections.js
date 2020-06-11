const {
  getBeer,
  removeCollectionBeer,
  setCollectionBeer
} = require("../../../database-operations");
const { logger } = require("../../../helpers");

const addBeerToCollection = async (
  beer,
  { user: { user_id: userId } }
) => {
  try {
    await setCollectionBeer(userId, beer);
    logger.debug(
      `[api/addBeerToCollection]: successfully added beer ${beer.id} to collection of user ${userId}`
    );

    return await getBeer(beer.id);
  } catch (err) {
    logger.error(
      `[api/addBeerToCollection]: could not add beer ${beer.id} to collection of user ${userId} due to: ${err}`
    );

    return null;
  }
};

const removeBeerFromCollection = async (
  { id: beerId },
  { user: { user_id: userId } }
) => {
  try {
    await removeCollectionBeer(userId, beerId);
    logger.debug(
      `[api/addBeerToCollection]: successfully removed beer ${beerId} from collection of user ${userId}`
    );

    return await getBeer(beerId);
  } catch (err) {
    logger.error(
      `[api/addBeerToCollection]: could not remove beer ${beerId} from collection of user ${userId} due to: ${err}`
    );

    return null;
  }
};

module.exports = {
  addBeerToCollection,
  removeBeerFromCollection
};
