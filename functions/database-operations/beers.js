const admin = require("firebase-admin");

const createBeer = async ({
  id,
  name = "Beer without name",
  type = "",
  origin = "",
  image = ""
}) => {
  try {
    await admin.database().ref(`beers/${id}`).set({
      id,
      name,
      type,
      origin,
      image
    });

    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
};

const getAllBeersFromDatabase = async () => {
  const snapshot = await admin.database().ref(`beers`).once("value");
  const value = snapshot.val();

  return Object.keys(value).map((key) => value[key]);
};

const getBatchedBeers = async (beerIds) => {
  const beers = [];

  const snapshot = await admin.database().ref(`beers`).once("value");

  snapshot.forEach((childSnapshot) => {
    if (beerIds.includes(childSnapshot.key)) {
      beers.push(childSnapshot.val());
    }
  });

  return beers;
};

const getBeer = async (beerId) => {
  const snapshot = await admin.database().ref(`beers/${beerId}`).once("value");

  return snapshot.val();
};

module.exports = {
  createBeer,
  getAllBeersFromDatabase,
  getBatchedBeers,
  getBeer
};
