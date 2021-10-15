import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { NavLink } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

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
}));

const Navbar = ({ modo, setModo }) => {
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
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          YouTube Music
        </Typography>

        <NavLink
          exact
          activeClassName={classes.ButtonLinkActive}
          className={classes.link}
          to="/"
        >
          <Button className={classes.ButtonLink}>Videos</Button>
        </NavLink>

        <NavLink
          exact
          activeClassName={classes.ButtonLinkActive}
          className={classes.link}
          to="/agregar"
        >
          <Button className={classes.ButtonLink}>Agregar videos</Button>
        </NavLink>

        <NavLink
          exact
          activeClassName={classes.ButtonLinkActive}
          className={classes.link}
          to="/nosotros"
        >
          <Button className={classes.ButtonLink}>Nosotros</Button>
        </NavLink>
        <NavLink
          exact
          activeClassName={classes.ButtonLinkActive}
          className={classes.link}
          to="/contactame"
        >
          <Button className={classes.ButtonLink}>Contactame</Button>
        </NavLink>

        <Button className={classes.ButtonLink} onClick={() => setModo(!modo)}>
          {modo ? <Brightness7Icon /> : <Brightness4Icon />}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
