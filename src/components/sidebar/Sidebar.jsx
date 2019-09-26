import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import SidebarMenu from "./SidebarMenu";

const useStyles = makeStyles({
  drawerPaper: {
    position: "fixed",
    width: 240,
    marginTop: 64,
    borderRight: "1px solid #dedede",
    display: "flex",
    height: "calc(100vh - 64px)",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  drawerShown: {
    zIndex: 1200
  },
  drawerHidden: {
    zIndex: 0
  }
});

const Sidebar = ({ isOpen, onClose, onOpen }) => {
  const classes = useStyles();

  return (
    <SwipeableDrawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      onClose={onClose}
      onOpen={onOpen}
      classes={{
        paper: `${classes.drawerPaper} ${
          isOpen ? classes.drawerShown : classes.drawerHidden
        }`
      }}
    >
      <SidebarMenu onSelection={onClose} />
    </SwipeableDrawer>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func
};

Sidebar.defaultProps = {
  isOpen: false,
  onClose: () => {},
  onOpen: () => {}
};

export default Sidebar;
