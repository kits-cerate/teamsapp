import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import jaLocale from "date-fns/locale/ja";
import format from "date-fns/format";
import { accordionSlotClassNames } from "@fluentui/react-northstar";

const useStyles = makeStyles((theme) => ({
  standard: {
    width: "30ch",
  },
}));

const TimePickerDialog = (props) => {
  const classes = useStyles();
  const [selectedTime, setSelectedTime] = useState(new Date());

  const handleTimeChange = (date) => {
    props.setTime(date);
    console.log(date);
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={jaLocale}>
        <KeyboardTimePicker
          className={classes.standard}
          margin="normal"
          id="time-picker"
          ampm={false}
          mask="__:__"
          label={"label" in props ? props.label : "時間"}
          value={props.time}
          onChange={(date) => handleTimeChange(date)}
          keyboardIcon={<AccessTimeIcon />}
          KeyboardButtonProps={{
            "aria-label": "change time",
          }}
          autoOk={false}
          disablePast
          invalidDateMessage="時間の入力値が不正です。"
          okLabel="決定"
          cancelLabel="キャンセル"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </MuiPickersUtilsProvider>
    </>
  );
};

export default TimePickerDialog;
