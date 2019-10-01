const {
  getAllBeers,
  getAllBeersInUserContext,
  getBeerById,
  getCollection
} = require("./queries");
const {
  addBeerToCollection,
  removeBeerFromCollection
} = require("./mutations");

const resolvers = {
  Query: {
    allBeers(parent, args, context) {
      return getAllBeers(context);
    },
    catalog(parent, args, context) {
      return getAllBeersInUserContext(context);
    },
    beer(parent, args, context) {
      return getBeerById(context);
    },
    userCollection(parent, args, context) {
      return getCollection(context);
    }
  },
  Mutation: {
    addBeerToCollection(parent, args, context) {
      return addBeerToCollection(args, context);
    },
    removeBeerFromCollection(parent, args, context) {
      return removeBeerFromCollection(args, context);
    }
  }
};

module.exports = resolvers;
