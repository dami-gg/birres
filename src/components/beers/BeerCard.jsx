import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import BeerCardDescription from "./BeerCardDescription";

const placeholderLabelSrc = "/static/images/label.png";

const useStyles = makeStyles(theme => ({
  card: {
    display: "grid",
    gridTemplateColumns: "2.5fr 5.5fr",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "column",
      maxWidth: 350
    }
  },
  media: {
    width: 150,
    [theme.breakpoints.up("sm")]: {
      height: 140,
      width: "auto"
    }
  }
}));

const BeerCard = ({ beer, isInCollection = false }) => {
  const classes = useStyles();

  const { name, image } = beer;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={image || placeholderLabelSrc}
        title={`Logo of ${name}`}
      />

      <CardContent>
        <Typography gutterBottom variant="h6" noWrap>
          {name}
        </Typography>

        <BeerCardDescription beer={beer} isInCollection={isInCollection} />
      </CardContent>
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
  isInCollection: PropTypes.bool
};

BeerCard.defaultProps = {
  isInCollection: false
};

export default BeerCard;
