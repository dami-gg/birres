const { ApolloServer } = require("apollo-server-express");

const schema = require("./api/schema");
const resolvers = require("./api/resolvers");

const { isEmulator } = require("../helpers");

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: ({ req }) => ({
    token:
      req.get("Authorization") && req.get("Authorization").split("Bearer ")[1]
  }),
  introspection: isEmulator(),
  playground: isEmulator()
});

module.exports = server;
