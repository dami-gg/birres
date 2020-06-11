const {
  getAllBeers,
  getAllBeersInUserContext,
  getAllBeerOrigins,
  getAllBeerTypes,
  getBeerById,
  getCollection
} = require("./queries");
const {
  addBeerToCollection,
  removeBeerFromCollection,
  createBeerInCollection
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
    },
    allBeerTypes(parent, args, context) {
      return getAllBeerTypes(context);
    },
    allBeerOrigins(parent, args, context) {
      return getAllBeerOrigins(context);
    }
  },
  Mutation: {
    addBeerToCollection(parent, args, context) {
      return addBeerToCollection(args, context);
    },
    removeBeerFromCollection(parent, args, context) {
      return removeBeerFromCollection(args, context);
    },
    createBeerInCollection(parent, args, context) {
      return createBeerInCollection(args, context);
    }
  }
};

module.exports = resolvers;
