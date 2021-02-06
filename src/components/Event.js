import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import { TextField } from "@material-ui/core";
import TextField from "./TextField";
import SelectTextField from "./SelectTextField";
import DatePickerDialog from "./DatePickerDialog";
import TimePickerDialog from "./TimePickerDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    flexGrow: 1,
    padding: theme.spacing(0, 3),
  },
  containerGrid: {
    padding: theme.spacing(3, 0),
    margin: `${theme.spacing(1)}px auto`,
  },
  itemGrid: {
    padding: theme.spacing(3, 0),
  },
  textField: {
    margin: theme.spacing(2),
  },
}));

const options = [
  {
    value: "event1",
    label: "テストイベント１",
  },
  {
    value: "event2",
    label: "テストイベント２",
  },
];

const Event = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container xs={12} className={classes.containerGrid}>
        <Grid item xs={12} sm={4} md={4} className={classes.itemGrid}>
          <SelectTextField
            label="イベントグループ"
            options={options}
          ></SelectTextField>
        </Grid>
        <Grid item xs={12} sm={4} md={4} className={classes.itemGrid}>
          <TextField label="イベント名"></TextField>
        </Grid>
        <Grid item xs={12} sm={4} md={4} className={classes.itemGrid}></Grid>
        <Grid item xs={12} sm={4} md={4} className={classes.itemGrid}>
          <DatePickerDialog />
        </Grid>
        <Grid item xs={12} sm={4} md={4} className={classes.itemGrid}>
          <TimePickerDialog label="開始時間" />
        </Grid>
        <Grid item xs={12} sm={4} md={4} className={classes.itemGrid}>
          <TimePickerDialog label="終了時間" />
        </Grid>
        <Grid item xs={12} sm={12} md={12} className={classes.itemGrid}>
          <Button text="イベント作成" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Event;
