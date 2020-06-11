import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";

import BeerGrid from "./BeerGrid";
import { GET_BEER_CATALOG } from "../../data/queries";

import Spinner from "../spinner/Spinner";

const BEERS_PER_PAGE = 20;

const useStyles = makeStyles({
  beers: {
    padding: 10
  }
});

const Beers = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_BEER_CATALOG, {
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

  const catalog = data?.catalog ?? [];

  return (
    <div className={classes.beers}>
      <BeerGrid beers={catalog} />
    </div>
  );
};

export default Beers;
