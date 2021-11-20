import React from "react";
import { connect } from "react-redux";
import { updateMode } from "../../redux/actions/darkModeAction";
import { NavLink } from "react-router-dom";
//UI
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/system";
import MaterialUISwitch from "../Ui/DarkSwitch";

const ITEM_HEIGHT = 60;

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
    color: "black",
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
  menuPoint: {
    color: "white",
  },
}));

const NavLite = ({ darkMode, updateMode }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <Typography
            sx={{ flexGrow: 1 }}
            variant="h6"
            className={classes.title}
          >
            YT Music
          </Typography>
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls="long-menu"
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          className={classes.menuPoint}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          <MenuItem divider onClick={handleClose}>
            <NavLink
              exact
              activeClassName={classes.ButtonLinkActive}
              className={classes.link}
              to="/"
            >
              Inicio
            </NavLink>
          </MenuItem>
          <MenuItem divider onClick={handleClose}>
            <NavLink
              exact
              activeClassName={classes.ButtonLinkActive}
              className={classes.link}
              to="/videos"
            >
              Videos
            </NavLink>
          </MenuItem>
          <MenuItem divider onClick={handleClose}>
            <NavLink
              exact
              activeClassName={classes.ButtonLinkActive}
              className={classes.link}
              to="/agregar"
            >
              Agregar videos
            </NavLink>
          </MenuItem>
          <MenuItem divider onClick={handleClose}>
            <NavLink
              exact
              activeClassName={classes.ButtonLinkActive}
              className={classes.link}
              to="/nosotros"
            >
              Nosotros
            </NavLink>
          </MenuItem>
          <MenuItem divider onClick={handleClose}>
            <NavLink
              exact
              activeClassName={classes.ButtonLinkActive}
              className={classes.link}
              to="/contactame"
            >
              Contactame
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <MaterialUISwitch
              sx={{ m: 1 }}
              checked={!darkMode}
              onClick={updateMode}
            />
            <Typography variant="body1">
              {darkMode ? "Claro" : "Oscuro"}
            </Typography>
          </MenuItem>
        </Menu>
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
