import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Paper,
  Popper,
  Grow,
  Grid,
  MenuItem,
  MenuList,
  ClickAwayListener,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyle = makeStyles((theme) => ({
  iconButton: {
    marginTop: theme.spacing(0),
    marginButtom: theme.spacing(0),
  },
}));

const Header = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">This is sample application</Typography>
        </Toolbar>
      </AppBar>
      <Grid ref={anchorRef}></Grid>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
              "z-index": "9999",
              background: "gray",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>
                    <Link to="/">ホーム</Link>
                  </MenuItem>

                  <MenuItem onClick={handleClose}>
                    <Link to="/eventGroup">イベントグループ</Link>
                  </MenuItem>

                  <MenuItem onClick={handleClose}>
                    <Link to="/event">イベント作成</Link>
                  </MenuItem>

                  <Link to="/attendance">
                    <MenuItem onClick={handleClose}>出欠登録</MenuItem>
                  </Link>
                  <Link to="/calendar">
                    <MenuItem onClick={handleClose}>カレンダー</MenuItem>
                  </Link>
                  <Link to="/calendar">
                    <MenuItem onClick={handleClose}>カレンダー</MenuItem>
                  </Link>
                  <MenuItem onClick={handleClose}>カレンダー</MenuItem>

                  <MenuItem onClick={handleClose}>カレンダー</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default Header;
