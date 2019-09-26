import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { SECTIONS } from "../../constants";

const useStyles = makeStyles({});

const SidebarMenu = ({ onSelection }) => {
  const classes = useStyles();

  return (
    <div className={classes.fullList} role="presentation" onClick={onSelection}>
      <List>
        {SECTIONS.map(({ title, url, image }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Fragment key={index}>
            <Link href={url}>
              <ListItem button>
                <ListItemIcon>
                  <img height="24" width="24" src={image} alt={title} />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
            </Link>

            <Divider />
          </Fragment>
        ))}
      </List>
    </div>
  );
};

SidebarMenu.propTypes = {
  onSelection: PropTypes.func
};

SidebarMenu.defaultProps = {
  onSelection: () => {}
};

export default SidebarMenu;
