import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "./TextField";
import SelectTextField from "./SelectTextField";
import DatePickerDialog from "./DatePickerDialog";
import TimePickerDialog from "./TimePickerDialog";
import Button from "./Button";

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

const Attendance = () => {
  const classes = useStyles();
  const [groupid, setGroupid] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const clickHandler = () => {
    axios.post("http://localhost:3030/event/create", {
      groupid: groupid,
      name: name,
      date: date,
      time: time,
    });
  };

  return (
    <div className={classes.root}>
      <Grid container xs={12} className={classes.containerGrid}>
        <Grid item xs={12} sm={6} md={6} className={classes.itemGrid}>
          <SelectTextField
            label="イベントグループ"
            options={options}
            groupid={groupid}
            setGroupid={setGroupid}
          ></SelectTextField>
        </Grid>
        <Grid item xs={12} sm={6} md={6} className={classes.itemGrid}>
          <TextField
            label="イベント名"
            onChange={(e) => setName(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={6} className={classes.itemGrid}>
          <DatePickerDialog date={date} setDate={setDate} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} className={classes.itemGrid}>
          <TimePickerDialog time={time} setTime={setTime} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} className={classes.itemGrid}>
          <Button text="イベント作成" onClick={clickHandler} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Attendance;
