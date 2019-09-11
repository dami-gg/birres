import { gql } from "apollo-boost";

const GET_ALL_BEERS = gql`
  query allBeers($first: Int!, $skip: Int!) {
    allBeers(orderBy: createdAt_DESC, first: $first, skip: $skip) {
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
