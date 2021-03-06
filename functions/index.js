const functions = require("firebase-functions");
const admin = require("firebase-admin");

const initializeGraphqlServer = require("./graphql/server");
const users = require("./users");
const beers = require("./beers");
const collections = require("./collections");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://beer-collection.firebaseio.com"
});

const graphqlServer = initializeGraphqlServer();

const handleIfAuthorized = async (req, res, handler) => {
  const accessToken = req.get("Authorization");

  if (accessToken) {
    try {
      const user = await admin.auth().verifyIdToken(accessToken);
      // TODO Check roles
      await handler(req, res, user);
      return;
    } catch (err) {
      res.status(401).send(err);
      return;
    }
  }

  res.status(401).send("Unauthorized");
};

exports.graphql = functions.https.onRequest(graphqlServer);

exports.users = functions.https.onRequest((req, res) =>
  handleIfAuthorized(req, res, users.handler)
);

exports.beers = functions.https.onRequest((req, res) =>
  handleIfAuthorized(req, res, beers.handler)
);

exports.collections = functions.https.onRequest((req, res) =>
  handleIfAuthorized(req, res, collections.handler)
);
