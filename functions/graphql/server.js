const express = require("express");
const cors = require("cors");

const apolloServer = require("./apollo-server");

const initializeGraphqlServer = () => {
  const app = express();

  app.use(cors());

  apolloServer.applyMiddleware({ app, path: "/", cors: true });

  return app;
};

module.exports = initializeGraphqlServer;
