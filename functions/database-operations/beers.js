const admin = require("firebase-admin");

const getAllBeersFromDatabase = async () => {
  const snapshot = await admin
    .database()
    .ref(`beers`)
    .once("value");
  const value = snapshot.val();

  return Object.keys(value).map(key => value[key]);
};

module.exports = {
  getAllBeersFromDatabase
};
