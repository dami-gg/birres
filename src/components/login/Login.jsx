import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { AuthContext } from "../../context";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  }
}));

const Login = () => {
  const classes = useStyles();
  const { signInWithGoogle } = useContext(AuthContext);

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <Button
          className={classes.submit}
          onClick={signInWithGoogle}
          fullWidth
          variant="contained"
          color="primary"
        >
          Sign in with Google
        </Button>
      </div>
    </Container>
  );
};

export default Login;
