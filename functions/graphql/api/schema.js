const { gql } = require("apollo-server-express");

const schema = gql(`
    type Query {
        allBeers: [Beer]
        userCollection: Collection
    }
    type Beer {
        id: ID!
        name: String
        type: String
        origin: String
        rating: Int
        image: String
    }
    type Collection {
        id: ID!
        beers: [Beer]
    }
`);

module.exports = schema;
