import gql from "graphql-tag";

import { beerFragment } from "../fragments";

/**
 * Adds an existing beer in the catalog to the user collection
 */
const ADD_BEER_TO_COLLECTION = gql`
  mutation addBeerToCollection($id: ID!) {
    addBeerToCollection(id: $id) {
      ...BeerDataFragment
    }
  }

  ${beerFragment}
`;

/**
 * Removes a beer from the user collection (but remains in the catalog)
 */
const REMOVE_BEER_FROM_COLLECTION = gql`
  mutation removeBeerFromCollection($id: ID!) {
    removeBeerFromCollection(id: $id) {
      ...BeerDataFragment
    }
  }

  ${beerFragment}
`;

// TODO To be implemented
/**
 * Creates a new beer and adds it to catalog (from all beers page)
 */
// const CREATE_BEER_IN_CATALOG = gql``;

export { ADD_BEER_TO_COLLECTION, REMOVE_BEER_FROM_COLLECTION };
