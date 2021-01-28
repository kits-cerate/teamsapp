import React from "react";
import { Button as MaterialButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  standard: {
    margin: theme.spacing(2),
    width: "30ch",
  },
}));

const Button = (props) => {
  const classes = useStyle();

  return (
    <>
      <MaterialButton
        className={classes.standard}
        variant="contained"
        color="primary"
      >
        {"text" in props ? props.text : ""}
      </MaterialButton>
    </>
  );
};

export default Button;
