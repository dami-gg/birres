import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  logo: {
    display: "flex",
    cursor: "pointer"
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
    <Link href="/">
      <div className={classes.logo}>
        <div className={classes.imageWrapper}>
          <img src="/images/logo.png" height="32" width="32" alt="logo" />
        </div>
        <Typography variant="h6" className={classes.text}>
          Birres
        </Typography>
      </div>
    </Link>
  );
};

export default Logo;
