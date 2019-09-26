import gql from "graphql-tag";

const GET_USER_COLLECTION = gql`
  query userCollection {
    userCollection {
      id
      name
      type
      origin
      rating
      image
    }
  }
`;

export { GET_USER_COLLECTION };
