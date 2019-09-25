const { logger } = require("./helpers");

exports.handler = async (req, res, user, database) => {
  let statusCode = 200;
  let response;

  try {
    const snapshot = await database
      .ref(`collections/${user.user_id}`)
      .once("value");
    response = snapshot.val();
  } catch (err) {
    logger.error("collections", `could not get a valid response due to ${err}`);
    statusCode = 500;
  }

  logger.debug("collections", `responding with ${statusCode} status code`);
  res.status(statusCode).send(response);
};
