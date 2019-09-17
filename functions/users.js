exports.handler = async (req, res, database) => {
  let statusCode = 200;
  let response;

  try {
    const snapshot = await database.ref(`users`).once("value");
    response = snapshot.val();
  } catch (err) {
    statusCode = 500;
  }

  res.status(statusCode).send(response);
};
