const {
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
  getAllBeersFromDatabase,
  getBatchedBeers,
  getBeer,
  getUserCollection,
  setCollectionBeer,
  removeCollectionBeer
};
