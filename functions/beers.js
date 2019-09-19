exports.handler = async (req, res, user, database) => {
  let statusCode = 200;
  let response;

  try {
    const snapshot = await database.ref(`beers`).once("value");
    const value = snapshot.val();

    response = Object.keys(value).map(key => value[key]);
  } catch (err) {
    statusCode = 500;
  }

  res.status(statusCode).send(response);
};
