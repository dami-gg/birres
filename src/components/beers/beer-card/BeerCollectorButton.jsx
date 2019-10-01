import React from "react";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";

import {
  ADD_BEER_TO_COLLECTION,
  REMOVE_BEER_FROM_COLLECTION
} from "../../../data/mutations";
import { getCatalogMutationOptions } from "./beer-card.helpers";

const useStyles = makeStyles({
  filledHeart: {
    color: "red"
  },
  unfilledHeart: {
    color: "darkgrey"
  },
  "@keyframes optimistic-filling": {
    "0%": { color: "darkgrey" },
    "100%": { color: "red" }
  },
  "@keyframes optimistic-unfilling": {
    "0%": { color: "red" },
    "100%": { color: "darkgrey" }
  },
  optimisticFilling: {
    animationName: "$optimistic-filling",
    animationDuration: "1s",
    animationIterationCount: "infinite"
  },
  optimisticUnfilling: {
    animationName: "$optimistic-unfilling",
    animationDuration: "1s",
    animationIterationCount: "infinite"
  }
});

const BeerCollectorButton = ({ beer }) => {
  const classes = useStyles();

  const { id, collected = false, isOptimistic = false } = beer;

  const [
    addBeerToCollection
    /* , { error: addBeerError, loading: addBeerLoading, data: addBeerData } */
  ] = useMutation(
    ADD_BEER_TO_COLLECTION,
    getCatalogMutationOptions(beer, "addBeerToCollection")
  );

  const [
    removeBeerFromCollection
    /* , { error: removeBeerError, loading: removeBeerLoading, data: removeBeerData } */
  ] = useMutation(
    REMOVE_BEER_FROM_COLLECTION,
    getCatalogMutationOptions(beer, "removeBeerFromCollection")
  );

  const addBeer = () => {
    addBeerToCollection({ variables: { id } });
  };

  const removeBeer = () => {
    removeBeerFromCollection({ variables: { id } });
  };

  return (
    <IconButton
      className={classes.saveButton}
      aria-label={`${collected ? "Remove from" : "Add to"} collection`}
      onClick={collected ? removeBeer : addBeer}
    >
      {collected ? (
        <FavoriteIcon
          className={`${classes.filledHeart} ${
            isOptimistic ? classes.optimisticFilling : ""
          }`}
        />
      ) : (
        <FavoriteOutlinedIcon
          className={`${classes.unfilledHeart} ${
            isOptimistic ? classes.optimisticUnfilling : ""
          }`}
        />
      )}
    </IconButton>
  );
};

BeerCollectorButton.propTypes = {
  beer: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    origin: PropTypes.string,
    rating: PropTypes.number,
    image: PropTypes.string,
    collected: PropTypes.bool,
    isOptimistic: PropTypes.bool
  }).isRequired
};

export default BeerCollectorButton;
