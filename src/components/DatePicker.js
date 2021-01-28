import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import jaLocale from "@material-ui/core/locale";

const jaTheme = createMuiTheme({}, jaLocale);

const dateNow = () => {
  console.log("dateNow called");
  let date = new Date();
  return date.toLocaleDateString().replace(/\//g, "-");
};

const DatePicker = (props) => {
  const [date, setDate] = useState(dateNow);

  return (
    <>
      <form noValidate>
        <ThemeProvider theme={jaTheme}>
          <TextField
            id="date"
            label="日付"
            type="date"
            format="yyyy/MM/dd"
            value={date}
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue={dateNow()}
            onChange={(e) => setDate(e.target.value)}
          />
        </ThemeProvider>
      </form>
    </>
  );
};

export default DatePicker;
