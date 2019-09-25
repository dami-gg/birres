const { getUserCollection } = require("../../../database-operations");
const { logger } = require("../../../helpers");

const getCollection = async ({ user: { user_id: userId } }) => {
  try {
    const response = await getUserCollection(userId);
    logger.debug(
      "api/getCollection",
      `successfully fetched collection of user ${userId}`
    );
    return response;
  } catch (err) {
    logger.error(
      "api/getCollection",
      `could not get collection of user ${userId} due to ${err}`
    );
    return [];
  }
};

module.exports = {
  getCollection
};
