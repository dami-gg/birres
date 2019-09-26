import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import BeerCard from "./BeerCard";

const useStyles = makeStyles({
  beers: {}
});

const BeerGrid = ({ beers = [], isPrivate = false }) => {
  const classes = useStyles();

  return (
    <div className={classes.beers}>
      <Grid container spacing={3}>
        {beers.map(beer => (
          <Grid key={beer.id} item xs={3}>
            <BeerCard beer={beer} isPrivate={isPrivate} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

BeerGrid.propTypes = {
  beers: PropTypes.arrayOf(Object),
  isPrivate: PropTypes.bool
};

BeerGrid.defaultProps = {
  beers: [],
  isPrivate: false
};

export default BeerGrid;
