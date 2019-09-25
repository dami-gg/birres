const { getAllBeers, getCollection } = require("./queries");

const resolvers = {
  Query: {
    allBeers(parent, args, context) {
      return getAllBeers(args, context);
    },
    userCollection(parent, args, context) {
      return getCollection(context);
    }
  }
};

module.exports = resolvers;
