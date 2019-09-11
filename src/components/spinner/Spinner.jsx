import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
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
  },
  circle: {
    padding: 10,
    borderRadius: "50%",
    backgroundColor: theme.colors.background,
    border: `1px solid ${theme.colors.separator}`,
    boxShadow: `1px 2px ${theme.colors.separator}`
  }
}));

export const Spinner = ({ size = 38 }) => {
  const classes = useStyles();

  return (
    <div className={classes.spinner}>
      <div className={classes.circle}>
        <CircularProgress
          className={classes.progress}
          color="secondary"
          size={size}
        />
      </div>
    </div>
  );
};

export default Spinner;
