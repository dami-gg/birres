import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  errorPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 30,
  },
  image: {
    marginBottom: 20,
  },
});

const ErrorPage = ({ statusCode }) => {
  const classes = useStyles();

  return (
    <div className={classes.errorPage}>
      <img className={classes.image} src="/images/error.png" alt="error" />
      <Typography variant="body1">
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </Typography>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = (res && res.statusCode) || (err && err.statusCode) || null;
  return { statusCode };
};

ErrorPage.propTypes = {
  statusCode: PropTypes.number,
};

ErrorPage.defaultProps = {
  statusCode: 404,
};

export default ErrorPage;
