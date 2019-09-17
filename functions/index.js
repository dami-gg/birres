const functions = require("firebase-functions");
const admin = require("firebase-admin");

const users = require("./users");
const beers = require("./beers");
const collections = require("./collections");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://beer-collection.firebaseio.com"
});

const database = admin.database();

exports.users = functions.https.onRequest((req, res) => {
  users.handler(req, res, database);
});

exports.beers = functions.https.onRequest((req, res) => {
  beers.handler(req, res, database);
});

exports.collections = functions.https.onRequest((req, res) => {
  collections.handler(req, res, database);
});
