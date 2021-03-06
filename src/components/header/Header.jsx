import React, { useContext } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

import MenuIcon from "@material-ui/icons/Menu";

import { AuthContext } from "../../context";
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

const Header = ({ onSidebarToggle }) => {
  const classes = useStyles();
  const { user, signout } = useContext(AuthContext);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={onSidebarToggle}
          >
            <MenuIcon />
          </IconButton>

          <Logo />

          {user && (
            <Button
              className={classes.logout}
              color="inherit"
              onClick={signout}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  onSidebarToggle: PropTypes.func
};

Header.defaultProps = {
  onSidebarToggle: () => {}
};

export default Header;
