import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";

const useStyles = makeStyles({
  root: {
    width: 230,
  },
});

const DropMenu = () => {
  const changePage = useContext(AppContext);
  return (
    <>
      <Paper>
        <MenuList>
          <MenuItem onClick={() => changePage("privacy")}>
            <ListItemIcon>
              <SendIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Attendance</Typography>
          </MenuItem>
          <MenuItem onClick={() => changePage("attendance")}>
            <ListItemIcon>
              <PriorityHighIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">
              A very long text that overflows
            </Typography>
          </MenuItem>
          <MenuItem onClick={() => changePage("privacy")}>
            <ListItemIcon>
              <DraftsIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              A very long text that overflows
            </Typography>
          </MenuItem>
        </MenuList>
      </Paper>
    </>
  );
};

export default DropMenu;
