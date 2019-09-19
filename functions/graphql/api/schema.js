const { gql } = require("apollo-server-express");

const schema = gql(`
    type Query {
        allBeers: [Beer]
    }
    type Beer {
        id: ID!
        name: String
        type: String
        origin: String
        rating: Int
        image: String
    }
`);

module.exports = schema;
