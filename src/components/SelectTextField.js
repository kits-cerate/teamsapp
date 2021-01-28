import React from "react";
import { makeStyles } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { accordionSlotClassNames } from "@fluentui/react-northstar";

const useStyle = makeStyles((theme) => ({
  standard: {
    margin: theme.spacing(2),
    width: "30ch",
  },
}));

const SelectTextField = (props) => {
  const classes = useStyle();

  return (
    <TextField
      className={classes.standard}
      select
      label={"label" in props ? props.label : ""}
      value={"value" in props ? props.value : null}
      InputLabelProps={{
        shrink: true,
      }}
    >
      {"options" in props
        ? props.options.map((elem) => (
            <option key={elem.value} value={elem.value}>
              {elem.value}
            </option>
          ))
        : ""}
    </TextField>
  );
};

export default SelectTextField;
