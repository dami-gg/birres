import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";

import BeerCollectorButton from "./BeerCollectorButton";

const useStyles = makeStyles({
  description: {
    display: "flex",
    flexDirection: "column"
  },
  top: {
    display: "grid",
    gridTemplateColumns: "7fr 1fr"
  },
  attributes: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  bottom: {
    width: "100%",
    textAlign: "center",
    marginTop: 12
  }
});

const BeerCardDescription = ({ beer, showRating = false }) => {
  const classes = useStyles();

  const { type, origin, rating } = beer;

  return (
    <div className={classes.description}>
      <div className={classes.top}>
        <div className={classes.attributes}>
          <Typography variant="body2" color="textSecondary">
            {type}
          </Typography>

          <Typography variant="body2" color="textSecondary">
            {origin}
          </Typography>
        </div>

        <BeerCollectorButton beer={beer} />
      </div>

      {showRating && (
        <div className={classes.bottom}>
          <Rating name="rating" value={rating} />
        </div>
      )}
    </div>
  );
};

BeerCardDescription.propTypes = {
  beer: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    origin: PropTypes.string,
    rating: PropTypes.number,
    image: PropTypes.string,
    collected: PropTypes.bool,
    isOptimistic: PropTypes.bool
  }).isRequired,
  showRating: PropTypes.bool
};

BeerCardDescription.defaultProps = {
  showRating: false
};

export default BeerCardDescription;
