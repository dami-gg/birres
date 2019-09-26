const { getAllBeersFromDatabase, getBatchedBeers } = require("./beers");
const { getUserCollection } = require("./collections");

module.exports = {
  getAllBeersFromDatabase,
  getBatchedBeers,
  getUserCollection
};
