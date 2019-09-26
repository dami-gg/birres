import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import BeerCardActions from "./BeerCardActions";

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

const BeerCard = ({ beer, isPrivate = false }) => {
  const classes = useStyles();

  const { name, type, origin, image } = beer;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image || placeholderLabelSrc}
          title={`Logo of ${name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" noWrap>
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {type}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {origin}
          </Typography>
        </CardContent>
      </CardActionArea>

      <BeerCardActions beer={beer} showRatings={isPrivate} />
    </Card>
  );
};

BeerCard.propTypes = {
  beer: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    origin: PropTypes.string,
    rating: PropTypes.number,
    image: PropTypes.string
  }).isRequired,
  isPrivate: PropTypes.bool
};

BeerCard.defaultProps = {
  isPrivate: false
};

export default BeerCard;
