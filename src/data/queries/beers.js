import gql from "graphql-tag";

import { beerFragment } from "../fragments";

const GET_ALL_BEERS = gql`
  query allBeers {
    allBeers {
      ...BeerDataFragment
    }
  }

  ${beerFragment}
`;

const GET_BEER_CATALOG = gql`
  query catalog {
    catalog {
      ...BeerDataFragment
    }
  }

  ${beerFragment}
`;

export { GET_ALL_BEERS, GET_BEER_CATALOG };
