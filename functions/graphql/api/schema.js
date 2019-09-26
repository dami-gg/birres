const { gql } = require("apollo-server-express");

const schema = gql(`
    type Query {
        allBeers: [Beer]
        beer(id: ID!): Beer
        userCollection: [CollectionBeer]
    }
    type Beer {
        id: ID!
        name: String
        type: String
        origin: String
        image: String
    }
    type CollectionBeer {
        id: ID!
        name: String
        type: String
        origin: String
        rating: Int
        image: String
    }
`);

module.exports = schema;
