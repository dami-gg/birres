import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { useIdentityContext } from "react-netlify-identity";

import withData from "../lib/api/apollo";
import { GET_ALL_BEERS } from "../src/queries";

import Header from "../src/components/header/Header";
import Spinner from "../src/components/spinner/Spinner";

const BEERS_PER_PAGE = 20;

const BeersPage = () => {
  const { isLoggedIn } = useIdentityContext();

  if (isLoggedIn) {
    const { loading, error, data, fetchMore } = useQuery(GET_ALL_BEERS, {
      variables: { skip: 0, first: BEERS_PER_PAGE },
      notifyOnNetworkStatusChange: true
    });

    if (data && data.allBeers) {
      return (
        <div>
          <Header />

          {data.allBeers.map(beer => (
            <p>{beer.name}</p>
          ))}
        </div>
      );
    }

    return <Spinner />;
  }

  return <p>You are not authorized to see this page</p>;
};

export default withData(props => BeersPage(props));
