exports.handler = async (req, res, user, database) => {
  let statusCode = 200;
  let response;

  try {
    const snapshot = await database
      .ref(`collections/${user.user_id}`)
      .once("value");
    response = snapshot.val();
  } catch (err) {
    statusCode = 500;
  }

  res.status(statusCode).send(response);
};
