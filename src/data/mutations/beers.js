import gql from "graphql-tag";

import { beerFragment } from "../fragments";

/**
 * Creates a new beer in the catalog and adds it to the user collection (from add beer page)
 */
const CREATE_BEER_IN_COLLECTION = gql`
  mutation createBeerInCollection($beer: BeerInput!) {
    createBeerInCollection(beer: $beer) {
      ...BeerDataFragment
    }
  }

  ${beerFragment}
`;

export { CREATE_BEER_IN_COLLECTION };
