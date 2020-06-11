import React, { useState } from "react";
import PropTypes from "prop-types";

import { useQuery } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

import Spinner from "../spinner/Spinner";
import { ERROR_MESSAGE_EMPTY_FIELD } from "./constants";

const SELECT_ID = "select";

const useStyles = makeStyles((theme) => ({
  selectGroup: {
    marginBottom: "2.4rem",
    position: "relative"
  },
  formControl: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "25%"
    }
  },
  select: {
    textAlign: "left"
  },
  spinner: {
    height: "auto",
    left: "auto",
    [theme.breakpoints.up("sm")]: {
      right: "15%"
    },
    padding: 0,
    marginTop: "1.6rem"
  }
}));

const CreationInputDropdown = ({
  classNames,
  name,
  value,
  required,
  onChange,
  isErrorShown,
  query,
  property
}) => {
  const classes = useStyles();

  const [options, setOptions] = useState([]);
  const [isDropdownDirty, setIsDropdownDirty] = useState(false);
  const [isNewValueCreated, setIsNewValueCreated] = useState(false);

  const { error, loading } = useQuery(query, {
    onCompleted: (data) => {
      setOptions(data?.[property] ?? []);
    },
    skip: !query
  });

  if (error) {
    // TODO Render error page

    return <p>ERROR</p>;
  }

  const useDropdown = (fieldValue) => {
    setIsDropdownDirty(fieldValue !== "");
    setIsNewValueCreated(false);
  };

  const useTextField = (fieldValue) => {
    setIsNewValueCreated(fieldValue !== "");
    setIsDropdownDirty(false);
  };

  const onValueChange = (event) => {
    const {
      target: { name: targetName, value: targetValue }
    } = event;

    if (targetName?.startsWith(SELECT_ID)) {
      useDropdown(targetValue);
    } else {
      useTextField(targetValue);
    }

    onChange(event);
  };

  return (
    <div className={classes.dropdownInput}>
      <div className={classes.selectGroup}>
        <FormControl className={classes.formControl} disabled={loading}>
          <InputLabel id="select-label">{`Select an existing ${name}`}</InputLabel>
          <Select
            className={`${classes.select} ${classNames}`}
            labelId="select-label"
            value={isDropdownDirty ? value : ""}
            onChange={onValueChange}
            input={
              <Input
                id={SELECT_ID}
                name={`${SELECT_ID}-${name}`}
                required={required && !isNewValueCreated}
              />
            }
          >
            {loading
              ? []
              : options.map((option) => (
                  <MenuItem key={option} value={option.toLowerCase()}>
                    {option}
                  </MenuItem>
                ))}
          </Select>
        </FormControl>

        {loading && <Spinner classNames={classes.spinner} size={25} />}
      </div>

      <div>
        <TextField
          id="text-field"
          className={classNames}
          label="Or add a new one"
          name={`text-${name}`}
          value={isNewValueCreated ? value : ""}
          onChange={onValueChange}
          error={isErrorShown && isNewValueCreated}
          helperText={isErrorShown ? ERROR_MESSAGE_EMPTY_FIELD : ""}
          required={required && !isDropdownDirty}
        />
      </div>
    </div>
  );
};

CreationInputDropdown.propTypes = {
  classNames: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  isErrorShown: PropTypes.bool,
  query: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  property: PropTypes.string
};

CreationInputDropdown.defaultProps = {
  classNames: "",
  value: "",
  required: true,
  onChange: () => {},
  isErrorShown: false,
  query: null,
  property: ""
};

export default CreationInputDropdown;
