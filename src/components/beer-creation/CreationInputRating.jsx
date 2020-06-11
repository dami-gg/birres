import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";

import { ERROR_MESSAGE_EMPTY_FIELD } from "./constants";

const useStyles = makeStyles({});

const CreationInputRating = ({
  classNames,
  name,
  value,
  onChange,
  isErrorShown
}) => {
  const classes = useStyles();

  return (
    <div className={`${classNames} ${classes.rating}`}>
      <Rating
        name={name}
        value={value ? parseInt(value, 10) : 0}
        size="large"
        onChange={onChange}
      />
      {
        // TODO Apply same style as error in TextField
        isErrorShown && (
          <Typography className={classes.errorText}>
            {ERROR_MESSAGE_EMPTY_FIELD}
          </Typography>
        )
      }
    </div>
  );
};

CreationInputRating.propTypes = {
  classNames: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  isErrorShown: PropTypes.bool
};

CreationInputRating.defaultProps = {
  classNames: "",
  value: "",
  onChange: () => {},
  isErrorShown: false
};

export default CreationInputRating;
