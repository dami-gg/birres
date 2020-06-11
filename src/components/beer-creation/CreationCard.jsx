import React, { useState } from "react";
import PropTypes from "prop-types";
import router from "next/router";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import CreationInput from "./CreationInput";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "40%"
    }
  },
  content: {
    textAlign: "center"
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

const CreationCard = ({ step, onNext, isFirst, isLast }) => {
  const classes = useStyles();

  const [value, setValue] = useState("");
  const [isErrorShown, setIsErrorShown] = useState(false);

  const { name, title, optional } = step;

  const resetState = () => {
    setValue("");
    setIsErrorShown(false);
  };

  const onValueChange = (event) => {
    setValue(event.target.value);
  };

  const goToNext = () => {
    if ((value && value.length) || optional) {
      onNext(name, value);
      resetState();
    } else {
      setIsErrorShown(true);
    }
  };

  const goToPreviousPage = () => {
    router.back();
  };

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h2" component="h2">
          {title}
        </Typography>

        <CreationInput
          step={step}
          value={value}
          onChange={onValueChange}
          isErrorShown={isErrorShown}
        />
      </CardContent>

      <CardActions className={classes.buttons}>
        {isFirst ? <div /> : <Button onClick={goToPreviousPage}>Back</Button>}
        {optional && (
          <Button color="secondary" onClick={goToNext}>
            Skip
          </Button>
        )}
        <Button color="primary" onClick={goToNext}>
          {isLast ? "Save" : "Next"}
        </Button>
      </CardActions>
    </Card>
  );
};

CreationCard.propTypes = {
  step: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    query: PropTypes.object,
    optional: PropTypes.bool
  }).isRequired,
  onNext: PropTypes.func,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool
};

CreationCard.defaultProps = {
  onNext: () => {},
  isFirst: false,
  isLast: false
};

export default CreationCard;
