const admin = require("firebase-admin");

const getUserCollection = async userId => {
  const snapshot = await admin
    .database()
    .ref(`collections/${userId}`)
    .once("value");

  return snapshot.val();
};

const setCollectionBeer = async (userId, beerId) => {
  try {
    await admin
      .database()
      .ref(`collections/${userId}/${beerId}`)
      .set({
        rating: -1
      });

    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
};

const removeCollectionBeer = async (userId, beerId) => {
  try {
    await admin
      .database()
      .ref(`collections/${userId}/${beerId}`)
      .remove();

    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
};

module.exports = {
  getUserCollection,
  setCollectionBeer,
  removeCollectionBeer
};
