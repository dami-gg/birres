const { getAllBeersFromDatabase } = require("./database-operations");
const { logger } = require("./helpers");

exports.handler = async (req, res) => {
  let statusCode = 200;
  let response;

  try {
    response = await getAllBeersFromDatabase();
  } catch (err) {
    logger.error("beers", `could not get a valid response due to ${err}`);
    statusCode = 500;
  }

  logger.debug("beers", `responding with ${statusCode} status code`);
  res.status(statusCode).send(response);
};
