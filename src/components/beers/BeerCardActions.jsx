import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";

const placeholderLabelSrc = "/static/images/label.png";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  rating: {
    width: "100%",
    textAlign: "center"
  },
  filledHeart: {
    color: "red"
  },
  unfilledHeart: {
    color: "white"
  },
  actions: {
    justifyContent: "space-between"
  }
});

const BeerCardActions = ({ beer: { rating }, showRatings = false }) => {
  const classes = useStyles();

  return (
    <CardActions className={classes.actions}>
      {showRatings ? (
        <div className={classes.rating}>
          <Rating name="rating" value={rating} />
        </div>
      ) : (
        <IconButton
          className={classes.saveButton}
          aria-label="Add to collection"
        >
          {rating ? (
            <FavoriteIcon className={classes.filledHeart} />
          ) : (
            <FavoriteOutlinedIcon />
          )}
        </IconButton>
      )}
      <Button size="small" color="primary">
        Details
      </Button>
    </CardActions>
  );
};

BeerCardActions.propTypes = {
  beer: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    origin: PropTypes.string,
    rating: PropTypes.number,
    image: PropTypes.string
  }).isRequired,
  showRatings: PropTypes.bool
};

BeerCardActions.defaultProps = {
  showRatings: false
};

export default BeerCardActions;
