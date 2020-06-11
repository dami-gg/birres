const {
  getAllBeers,
  getAllBeersInUserContext,
  getAllBeerOrigins,
  getAllBeerTypes,
  getBeerById
} = require("./beers");
const { getCollection } = require("./collections");

module.exports = {
  getAllBeers,
  getAllBeersInUserContext,
  getAllBeerOrigins,
  getAllBeerTypes,
  getBeerById,
  getCollection
};
