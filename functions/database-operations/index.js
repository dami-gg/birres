const {
  createBeer,
  getAllBeersFromDatabase,
  getBatchedBeers,
  getBeer
} = require("./beers");
const {
  getUserCollection,
  setCollectionBeer,
  removeCollectionBeer
} = require("./collections");

module.exports = {
  createBeer,
  getAllBeersFromDatabase,
  getBatchedBeers,
  getBeer,
  getUserCollection,
  setCollectionBeer,
  removeCollectionBeer
};
