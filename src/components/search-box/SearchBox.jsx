import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles({
  searchBox: {}
});

const SearchBox = ({ onChange }) => {
  const classes = useStyles();

  const [searchQuery, setSearchQuery] = useState("");

  const changeHandler = ({ target: { value } }) => {
    setSearchQuery(value);
    onChange(value);
  };

  const isInputDirty = () => searchQuery !== "";

  const clearInput = () => {
    setSearchQuery("");
    onChange("");
  };

  return (
    <div className={classes.searchBox}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
          value={searchQuery}
          onChange={changeHandler}
        />

        {isInputDirty() && (
          <ClearIcon className={classes.clearButton} onClick={clearInput} />
        )}
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func
};

SearchBox.defaultProps = {
  onChange: () => {}
};

export default SearchBox;
