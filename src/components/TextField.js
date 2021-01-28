import React from "react";
import { makeStyles } from "@material-ui/core";
import { TextField as MaterialTextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  standard: {
    margin: theme.spacing(2),
    width: "30ch",
  },
  noLabel: { margin: theme.spacing(4) },
  width: "30ch",
}));

const TextField = (props) => {
  const classes = useStyles();
  return (
    <MaterialTextField
      label={"label" in props ? props.label : ""}
      className={"label" in props ? classes.standard : classes.noLabel}
      placeholder=""
      InputLabelProps={{
        shrink: true,
      }}
    ></MaterialTextField>
  );
};

export default TextField;
