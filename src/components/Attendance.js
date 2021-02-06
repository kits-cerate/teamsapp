import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "./TextField";
import SelectTextField from "./SelectTextField";
import DatePickerDialog from "./DatePickerDialog";
import TimePickerDialog from "./TimePickerDialog";
import { AlarmTwoTone, Message } from "@material-ui/icons";
//import { post } from "../../server/routes/eventsRoute";

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
  button: {
    margin: theme.spacing(2),
    width: "30ch",
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

  const clickCreateHandler = () => {
    console.log({
      groupid: groupid,
      name: name,
      date: date,
      time: time,
    });
    console.log("pushed");
    axios.post("http://localhost:3010/events/create", {
      groupid: groupid,
      name: name,
      date: date,
      time: time,
    });
  };

  const clickDeleteHandler = () => {
    axios.post("http://localhost:3010/events/delete", {
      id: 3,
    });
  };

  const [events, setEvents] = useState([]);

  const fetchAll = () => {
    console.log("pushed");
    axios.get("http://localhost:3010/events/all").then((res) => {
      setEvents(res.data);
      console.log(res.data);
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
          <Button
            className={classes.standard}
            variant="contained"
            color="primary"
            onClick={clickCreateHandler}
          >
            イベント作成
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12} className={classes.itemGrid}>
          <Button
            className={classes.standard}
            variant="contained"
            color="primary"
            onClick={clickDeleteHandler}
          >
            イベント削除
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12} className={classes.itemGrid}>
          <Button
            className={classes.standard}
            variant="contained"
            color="primary"
            onClick={fetchAll}
          >
            テスト（全イベント取得）
          </Button>
        </Grid>
        <ul>
          {events.map((event) => (
            <li key={event.id}>{event.eventname}</li>
          ))}
        </ul>
      </Grid>
    </div>
  );
};

export default Attendance;
