import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import BeerCard from "./beer-card/BeerCard";

const useStyles = makeStyles({
  beers: {}
});

const BeerGrid = ({ beers = [], isCollection = false }) => {
  const classes = useStyles();

  return (
    <div className={classes.beers}>
      <Grid container spacing={3}>
        {beers.map(beer => (
          <Grid key={beer.id} item xs={12} sm={6} md={4} lg={2} xl={1}>
            <BeerCard beer={beer} showRating={isCollection} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

BeerGrid.propTypes = {
  beers: PropTypes.arrayOf(Object),
  isCollection: PropTypes.bool
};

BeerGrid.defaultProps = {
  beers: [],
  isCollection: false
};

export default BeerGrid;
