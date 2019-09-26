const { getAllBeers, getBeerById, getCollection } = require("./queries");

const resolvers = {
  Query: {
    allBeers(parent, args, context) {
      return getAllBeers(args, context);
    },
    beer(parent, args, context) {
      return getBeerById(args, context);
    },
    userCollection(parent, args, context) {
      return getCollection(context);
    }
  }
};

module.exports = resolvers;
