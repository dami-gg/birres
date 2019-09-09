import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  title: {
    color: "blue"
  }
});

const Title = () => {
  const classes = useStyles();

  return (
    <Typography variant="h6" className={classes.title}>
      Birres
    </Typography>
  );
};

export default Title;
