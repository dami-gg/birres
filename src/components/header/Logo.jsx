import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  logo: {
    display: "flex"
  },
  imageWrapper: {
    marginRight: 8
  },
  text: {
    color: "white"
  }
});

const Logo = () => {
  const classes = useStyles();

  return (
    <div className={classes.logo}>
      <div className={classes.imageWrapper}>
        <img src="/static/images/logo.png" height="32" width="32" alt="logo" />
      </div>
      <Typography variant="h6" className={classes.text}>
        Birres
      </Typography>
    </div>
  );
};

export default Logo;
