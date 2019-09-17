exports.handler = async (req, res, database) => {
  const {
    query: { userId }
  } = req;

  // TODO Validate query properly

  let statusCode = 200;
  let response;

  try {
    const snapshot = await database.ref(`collections/${userId}`).once("value");
    response = snapshot.val();
  } catch (err) {
    statusCode = 500;
  }

  res.status(statusCode).send(response);
};
