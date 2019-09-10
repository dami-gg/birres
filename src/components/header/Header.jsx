import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useIdentityContext } from "react-netlify-identity";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

import MenuIcon from "@material-ui/icons/Menu";

import Logo from "./Logo";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  logout: {
    marginLeft: "auto"
  }
}));

const Header = () => {
  const classes = useStyles();
  const { isLoggedIn, logoutUser } = useIdentityContext();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Logo />

          {isLoggedIn && (
            <Button
              className={classes.logout}
              color="inherit"
              onClick={logoutUser}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
