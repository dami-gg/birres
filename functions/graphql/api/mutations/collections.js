const {
  setCollectionBeer,
  removeCollectionBeer,
  getBeer
} = require("../../../database-operations");
const { logger } = require("../../../helpers");

const addBeerToCollection = async (
  { id: beerId },
  { user: { user_id: userId } }
) => {
  try {
    await setCollectionBeer(userId, beerId);
    logger.debug(
      `[api/addBeerToCollection]: successfully added beer ${beerId} to collection of user ${userId}`
    );

    return await getBeer(beerId);
  } catch (err) {
    logger.error(
      `[api/addBeerToCollection]: could not add beer ${beerId} to collection of user ${userId} due to: ${err}`
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
