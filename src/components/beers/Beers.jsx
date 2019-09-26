import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";

import BeerGrid from "./BeerGrid";
import { GET_ALL_BEERS } from "../../queries";

import Spinner from "../spinner/Spinner";

const BEERS_PER_PAGE = 20;

const useStyles = makeStyles({
  beers: {
    padding: 10
  }
});

const Beers = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_ALL_BEERS, {
    variables: { skip: 0, first: BEERS_PER_PAGE },
    notifyOnNetworkStatusChange: true
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    // TODO Render error page

    return <p>ERROR</p>;
  }

  const beers = data && data.allBeers ? data.allBeers : [];

  return (
    <div className={classes.beers}>
      <BeerGrid beers={beers} isPrivate={false} />
    </div>
  );
};

export default Beers;
