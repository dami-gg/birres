import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  spinner: {
    display: "flex",
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 50,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    height: "calc(100vh - 64px)"
  }
});

const Spinner = ({ classNames, size = 50 }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.spinner} ${classNames}`}>
      <div className={classes.circle}>
        <CircularProgress
          className={classes.progress}
          color="primary"
          size={size}
        />
      </div>
    </div>
  );
};

Spinner.propTypes = {
  classNames: PropTypes.string,
  size: PropTypes.number
};

Spinner.defaultProps = {
  classNames: "",
  size: 50
};

export default Spinner;
