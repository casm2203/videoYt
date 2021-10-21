import React from "react";
import { connect } from "react-redux";
import { updateMode } from "../redux/actions/darkModeAction";
//import { NavLink } from "react-router-dom";
//UI
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
//import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
//import Brightness4Icon from "@mui/icons-material/Brightness4";
//import Brightness7Icon from "@mui/icons-material/Brightness7";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "red",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "white",
    marginLeft: "5px",
  },
  ButtonLink: {
    color: "white",
    textTransform: "capitalize",
  },
  ButtonLinkActive: {
    borderBottom: "0.5px solid white",
  },
  darkModeButton: {
    color: "#303030",
  },
}));

const NavLite = ({ darkMode, updateMode }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="relative">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <PlayArrowIcon />
          <Typography variant="h6" className={classes.title}>
            YouTube Music
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateMode: () => dispatch(updateMode()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavLite);
