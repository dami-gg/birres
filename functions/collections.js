const { getUserCollection } = require("./database-operations");
const { logger } = require("./helpers");

exports.handler = async (req, res, { user_id: userId }) => {
  let statusCode = 200;
  let response;

  try {
    response = await getUserCollection(userId);
  } catch (err) {
    logger.error("collections", `could not get a valid response due to ${err}`);
    statusCode = 500;
  }

  logger.debug("collections", `responding with ${statusCode} status code`);
  res.status(statusCode).send(response);
};
