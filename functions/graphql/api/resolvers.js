const { getAllBeers } = require("./queries");

const resolvers = {
  Query: {
    allBeers(parent, args, context) {
      return getAllBeers(args, context);
    }
  }
};

module.exports = resolvers;
