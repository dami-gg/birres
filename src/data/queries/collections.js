import gql from "graphql-tag";

import { beerFragment } from "../fragments";

const GET_USER_COLLECTION = gql`
  query userCollection {
    userCollection {
      ...BeerDataFragment
    }
  }

  ${beerFragment}
`;

export { GET_USER_COLLECTION };
