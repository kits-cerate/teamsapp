import React from "react";
import { makeStyles } from "@material-ui/core";
import { TextField, MenuItem } from "@material-ui/core";
import { accordionSlotClassNames } from "@fluentui/react-northstar";

const useStyle = makeStyles((theme) => ({
  standard: {
    margin: theme.spacing(2),
    width: "30ch",
    textAlign: "left",
  },
}));

const SelectTextField = (props) => {
  const classes = useStyle();

  return (
    <TextField
      className={classes.standard}
      select
      label={"label" in props ? props.label : ""}
      value={props.groupid}
      InputLabelProps={{
        shrink: true,
      }}
      onChange={(e) => props.setGroupid(e.target.value)}
    >
      {"options" in props
        ? props.options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))
        : ""}
    </TextField>
  );
};

export default SelectTextField;
