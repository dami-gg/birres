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

const GET_ALL_BEER_TYPES = gql`
  query allBeerTypes {
    allBeerTypes
  }
`;

const GET_ALL_BEER_ORIGINS = gql`
  query allBeerOrigins {
    allBeerOrigins
  }
`;

export {
  GET_ALL_BEERS,
  GET_ALL_BEER_TYPES,
  GET_BEER_CATALOG,
  GET_ALL_BEER_ORIGINS
};
