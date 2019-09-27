import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";

const useStyles = makeStyles({
  description: {
    display: "flex",
    flexDirection: "column"
  },
  top: {
    display: "grid",
    gridTemplateColumns: "7fr 1fr"
  },
  bottom: {
    width: "100%",
    textAlign: "center",
    marginTop: 12
  },
  filledHeart: {
    color: "red"
  },
  unfilledHeart: {
    color: "white"
  }
});

const BeerCardDescription = ({
  beer: { type, origin, rating },
  isInCollection = true
}) => {
  const classes = useStyles();

  const showRating = rating !== undefined;

  return (
    <div className={classes.description}>
      <div className={classes.top}>
        <div>
          <Typography variant="body2" color="textSecondary">
            {type}
          </Typography>

          <Typography variant="body2" color="textSecondary">
            {origin}
          </Typography>
        </div>

        {!showRating && (
          <IconButton
            className={classes.saveButton}
            aria-label="Add to collection"
          >
            {isInCollection ? (
              <FavoriteIcon className={classes.filledHeart} />
            ) : (
              <FavoriteOutlinedIcon />
            )}
          </IconButton>
        )}
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
    image: PropTypes.string
  }).isRequired,
  isInCollection: PropTypes.bool
};

BeerCardDescription.defaultProps = {
  isInCollection: false
};

export default BeerCardDescription;
