const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Query {
        beers [Beer]
    }

    type Mutations {

    }
    
    type Beer {
        id: ID!
        name: String!
        image: String
        type: String
        origin: String
        rating: Number
    }
`);

export default schema;
