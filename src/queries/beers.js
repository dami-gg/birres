import gql from "graphql-tag";

const GET_ALL_BEERS = gql`
  query allBeers {
    allBeers {
      id
      name
      type
      origin
      image
    }
  }
`;

export { GET_ALL_BEERS };
