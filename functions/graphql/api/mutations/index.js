const { createBeerInCollection } = require("./beers");
const {
  addBeerToCollection,
  removeBeerFromCollection
} = require("./collections");

module.exports = {
  addBeerToCollection,
  createBeerInCollection,
  removeBeerFromCollection
};
