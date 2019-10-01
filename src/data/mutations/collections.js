import gql from "graphql-tag";

import { beerFragment } from "../fragments";

const ADD_BEER_TO_COLLECTION = gql`
  mutation addBeerToCollection($id: ID!) {
    addBeerToCollection(id: $id) {
      ...BeerDataFragment
    }
  }

  ${beerFragment}
`;

const REMOVE_BEER_FROM_COLLECTION = gql`
  mutation removeBeerFromCollection($id: ID!) {
    removeBeerFromCollection(id: $id) {
      ...BeerDataFragment
    }
  }

  ${beerFragment}
`;

export { ADD_BEER_TO_COLLECTION, REMOVE_BEER_FROM_COLLECTION };
