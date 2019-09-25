const admin = require("firebase-admin");

const getUserCollection = async userId => {
  const snapshot = await admin
    .database()
    .ref(`collections/${userId}`)
    .once("value");

  return snapshot.val();
};

module.exports = {
  getUserCollection
};
