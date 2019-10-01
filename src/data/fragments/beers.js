import gql from "graphql-tag";

const beerFragment = gql`
  fragment BeerDataFragment on Beer {
    id
    name
    type
    origin
    rating
    image
    collected
    isOptimistic
  }
`;

export { beerFragment };
