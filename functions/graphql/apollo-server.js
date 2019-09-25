const { ApolloServer } = require("apollo-server-express");
const admin = require("firebase-admin");

const schema = require("./api/schema");
const resolvers = require("./api/resolvers");

const { isEmulator } = require("../helpers");

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: async ({ req }) => {
    let user;
    const accessToken = req.get("Authorization")
      ? req.get("Authorization").split("Bearer ")[1]
      : "";

    try {
      user = await admin.auth().verifyIdToken(accessToken);
    } catch (err) {
      throw new Error("You must be authenticated");
    }

    return { user };
  },
  introspection: isEmulator(),
  playground: isEmulator()
});

module.exports = server;
