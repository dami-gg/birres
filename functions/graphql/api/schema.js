const { gql } = require("apollo-server-express");

const schema = gql(`
    type Query {
        allBeers: [Beer]
        catalog: [Beer]
        beer(id: ID!): Beer
        userCollection: [Beer]
    }
    type Mutation {
        addBeerToCollection(id: ID!): Beer
        removeBeerFromCollection(id: ID!): Beer
    }
    type Beer {
        id: ID!
        name: String
        type: String
        origin: String
        image: String
        rating: Int
        collected: Boolean
        isOptimistic: Boolean
    }
    type Notification {
        type: String
        message: String
    }
    type CollectionChangePayload {
        notification: Notification
    }
`);

module.exports = schema;
