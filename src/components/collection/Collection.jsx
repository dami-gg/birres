import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";

import BeerGrid from "../beers/BeerGrid";
import { GET_USER_COLLECTION } from "../../data/queries";

import Spinner from "../spinner/Spinner";

const useStyles = makeStyles({
  beers: {
    padding: 10
  }
});

const Collection = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_USER_COLLECTION, {
    notifyOnNetworkStatusChange: true
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    // TODO Render error page

    return <p>ERROR</p>;
  }

  const collection = data && data.userCollection ? data.userCollection : [];

  return (
    <div className={classes.beers}>
      <BeerGrid beers={collection} isCollection />
    </div>
  );
};

export default Collection;
