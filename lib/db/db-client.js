import faunadb from "faunadb";

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
});

export default client;
