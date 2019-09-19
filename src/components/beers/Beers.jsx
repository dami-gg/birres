import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { GET_ALL_BEERS } from "../../queries";

import Spinner from "../spinner/Spinner";

const BEERS_PER_PAGE = 20;

const Beers = () => {
  const { loading, /* error, */ data } = useQuery(GET_ALL_BEERS, {
    variables: { skip: 0, first: BEERS_PER_PAGE },
    notifyOnNetworkStatusChange: true
  });

  if (loading) {
    return <Spinner />;
  }

  if (data && data.allBeers) {
    return (
      <div>
        {data.allBeers.map(beer => (
          <p key={beer.id}>{beer.name}</p>
        ))}
      </div>
    );
  }

  return <p>TEMP</p>;
};

export default Beers;
