import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";

import fetch from "isomorphic-unfetch";

import { getFunctionsUrl } from "./environment";

const getApolloHttpLink = () =>
  new HttpLink({
    uri: `${getFunctionsUrl()}/graphql`,
    credentials: "same-origin",
    fetch
  });

const getAuthLink = () =>
  new ApolloLink((operation, forward) => {
    // Retrieve the authorization token from local storage.
    const token = sessionStorage.getItem("TOKEN");

    // Use the setContext method to set the HTTP headers.
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ""
      }
    });

    // Call the next link in the middleware chain.
    return forward(operation);
  });

/**
 * Instantiates a new Apollo client instance
 */
const instantiateApolloClient = () =>
  new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: ApolloLink.from([getAuthLink(), getApolloHttpLink()]),
    cache: new InMemoryCache()
  });

const apolloClient = instantiateApolloClient();

export default apolloClient;
