import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";

import CreationInputDropdown from "./CreationInputDropdown";
import CreationInputRating from "./CreationInputRating";

import {
  ERROR_MESSAGE_EMPTY_FIELD,
  INPUT_TYPE_DROPDOWN,
  INPUT_TYPE_RATING,
  INPUT_TYPE_TEXT
} from "./constants";

const useStyles = makeStyles((theme) => ({
  field: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50%"
    }
  }
}));

const CreationInput = ({
  step: { name, type, query, property, optional },
  value,
  onChange,
  isErrorShown
}) => {
  const classes = useStyles();

  return (
    <>
      {type === INPUT_TYPE_TEXT && (
        <TextField
          className={classes.field}
          name={name}
          value={value}
          required={!optional}
          onChange={onChange}
          error={isErrorShown}
          helperText={isErrorShown ? ERROR_MESSAGE_EMPTY_FIELD : ""}
        />
      )}
      {type === INPUT_TYPE_DROPDOWN && (
        <CreationInputDropdown
          classNames={classes.field}
          name={name}
          value={value}
          required={!optional}
          onChange={onChange}
          isErrorShown={isErrorShown}
          query={query}
          property={property}
        />
      )}
      {type === INPUT_TYPE_RATING && (
        <CreationInputRating
          classNames={classes.field}
          name={name}
          value={value}
          onChange={onChange}
          isErrorShown={isErrorShown}
        />
      )}
    </>
  );
};

CreationInput.propTypes = {
  step: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    query: PropTypes.object,
    property: PropTypes.string,
    optional: PropTypes.bool
  }).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  isErrorShown: PropTypes.bool
};

CreationInput.defaultProps = {
  value: "",
  onChange: () => {},
  isErrorShown: false
};

export default CreationInput;
