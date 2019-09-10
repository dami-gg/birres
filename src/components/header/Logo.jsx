import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  title: {
    color: "blue"
  }
});

const Logo = () => {
  const classes = useStyles();

  return (
    <Typography variant="h6" className={classes.logo}>
      Birres
    </Typography>
  );
};

export default Logo;
