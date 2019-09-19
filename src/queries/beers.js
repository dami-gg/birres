import gql from "graphql-tag";

// query allBeers($first: Int!, $skip: Int!) {
// allBeers(orderBy: createdAt_DESC, first: $first, skip: $skip) {

const GET_ALL_BEERS = gql`
  query allBeers {
    allBeers {
      id
      name
      type
      origin
      rating
      image
    }
  }
`;

export { GET_ALL_BEERS };
