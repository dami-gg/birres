const { logger } = require("./helpers");

exports.handler = async (req, res, user, database) => {
  let statusCode = 200;
  let response;

  try {
    const snapshot = await database.ref(`beers`).once("value");
    const value = snapshot.val();

    response = Object.keys(value).map(key => value[key]);
  } catch (err) {
    logger.error("beers", `could not get a valid response due to ${err}`);
    statusCode = 500;
  }

  logger.debug("beers", `responding with ${statusCode} status code`);
  res.status(statusCode).send(response);
};
